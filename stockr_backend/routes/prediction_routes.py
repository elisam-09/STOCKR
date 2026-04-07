from flask import Blueprint, jsonify
from sqlalchemy import select
from models import db, Article, Sale, Product, product_articles, token_required
from datetime import datetime, timedelta
import math
import statistics

prediction_bp = Blueprint('prediction', __name__)

@prediction_bp.route('/', methods=['GET'])
@token_required
def get_predictions(current_user):
    now = datetime.utcnow()

    # ── Charger les ventes des 30 derniers jours ──
    sales_30d = Sale.query.filter(
        Sale.user_id == current_user.id,
        Sale.timestamp >= now - timedelta(days=30)
    ).all()
    sales_14d = [s for s in sales_30d if s.timestamp >= now - timedelta(days=14)]
    sales_7d  = [s for s in sales_30d if s.timestamp >= now - timedelta(days=7)]

    # ── Charger toutes les compositions en une seule requête ──
    rows = db.session.execute(
        select(product_articles).join(
            Product, product_articles.c.product_id == Product.id
        ).where(Product.user_id == current_user.id)
    ).fetchall()

    # comp_map[product_id][article_id] = quantity_used
    comp_map = {}
    for row in rows:
        comp_map.setdefault(row.product_id, {})[row.article_id] = row.quantity_used

    def total_article_consumption(sales, article_id):
        """Consommation totale d'un article sur une liste de ventes."""
        total = 0.0
        for sale in sales:
            qty_used = comp_map.get(sale.product_id, {}).get(article_id, 0)
            total += qty_used * sale.quantity
        return total

    articles = Article.query.filter_by(user_id=current_user.id).all()
    predictions = []

    for article in articles:
        c30 = total_article_consumption(sales_30d, article.id)
        c14 = total_article_consumption(sales_14d, article.id)
        c7  = total_article_consumption(sales_7d,  article.id)

        dc30 = c30 / 30
        dc14 = c14 / 14
        dc7  = c7  / 7

        # ── Pas de données de vente ──
        if dc30 == 0 and dc14 == 0 and dc7 == 0:
            predictions.append({
                'article_id':    article.id,
                'article_name':  article.name,
                'unit':          article.unit,
                'current_stock': article.quantity,
                'status':        'no_data',
                'message':       f"Pas encore de ventes enregistrées pour {article.name}",
                'days_remaining': None,
                'daily_demand':   0,
                'safety_stock':   0,
                'reorder_point':  0,
                'eoq':            0,
                'order_quantity': 0,
            })
            continue

        # ── Moyenne Mobile Pondérée ──
        # Ventes récentes ont plus de poids (méthode WMA)
        weighted_daily = (dc7 * 0.5) + (dc14 * 0.3) + (dc30 * 0.2)

        # ── Écart-type journalier sur 30 jours (pour le Safety Stock) ──
        daily_demands = []
        for i in range(30):
            day_start = now - timedelta(days=i + 1)
            day_end   = now - timedelta(days=i)
            day_sales = [s for s in sales_30d if day_start <= s.timestamp < day_end]
            day_cons  = total_article_consumption(day_sales, article.id)
            daily_demands.append(day_cons)

        sigma = statistics.stdev(daily_demands) if len(set(daily_demands)) > 1 else weighted_daily * 0.2

        lead = article.lead_time_days or 7

        # ── Safety Stock (niveau de service 95%, Z = 1.65) ──
        safety_stock = 1.65 * sigma * math.sqrt(lead)

        # ── Reorder Point ──
        reorder_point = (weighted_daily * lead) + safety_stock

        # ── EOQ — Economic Order Quantity (Ford Harris, 1913) ──
        D_annual = weighted_daily * 365
        eoq = math.sqrt(2 * D_annual) if D_annual > 0 else 0

        # ── Jours restants ──
        days_remaining = article.quantity / weighted_daily if weighted_daily > 0 else None

        # ── Quantité à commander ──
        order_qty = max(eoq, reorder_point - article.quantity, 0)

        # ── Statut ──
        if days_remaining is not None and days_remaining <= lead:
            status = 'critical'
        elif article.quantity <= reorder_point:
            status = 'warning'
        else:
            status = 'ok'

        # ── Message humain ──
        stock_fmt = f"{round(article.quantity, 2)} {article.unit}"
        order_fmt = f"{round(order_qty, 1)} {article.unit}"
        if status == 'critical':
            days_txt = f"{round(days_remaining, 0):.0f} jour(s)" if days_remaining and days_remaining >= 1 else "moins d'un jour"
            message = f"Rupture dans {days_txt} — commander {order_fmt} maintenant"
        elif status == 'warning':
            message = f"{article.name} sous le seuil de réapprovisionnement — commander {order_fmt} bientôt"
        else:
            days_txt = f"{round(days_remaining, 0):.0f} jours" if days_remaining else "longtemps"
            message = f"Bien approvisionné pour {days_txt}"

        predictions.append({
            'article_id':     article.id,
            'article_name':   article.name,
            'unit':           article.unit,
            'current_stock':  article.quantity,
            'status':         status,
            'message':        message,
            'days_remaining': round(days_remaining, 1) if days_remaining is not None else None,
            'daily_demand':   round(weighted_daily, 4),
            'safety_stock':   round(safety_stock, 2),
            'reorder_point':  round(reorder_point, 2),
            'eoq':            round(eoq, 1),
            'order_quantity': round(order_qty, 1),
        })

    # Trier : critical → warning → ok → no_data
    order_map = {'critical': 0, 'warning': 1, 'ok': 2, 'no_data': 3}
    predictions.sort(key=lambda x: order_map.get(x['status'], 3))

    return jsonify(predictions)
