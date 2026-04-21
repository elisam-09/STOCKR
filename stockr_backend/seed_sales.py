"""
Injecte les ventes historiques directement en base (sans vérif. de stock)
et remet les stocks à des niveaux réalistes.
Usage : python3 seed_sales.py
"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))

from app import create_app
from models import db, Sale, Product, Article, User
from datetime import datetime, timedelta

DEMO_EMAIL = "demo@baro.app"

SALES_HISTORY = [
    # (nom_produit, quantité, il_y_a_N_jours)
    ("Pain simple", 40, 1), ("Pain simple", 35, 2), ("Pain simple", 42, 3),
    ("Pain simple", 38, 4), ("Pain simple", 45, 5), ("Pain simple", 30, 6),
    ("Pain simple", 41, 7), ("Pain simple", 36, 8), ("Pain simple", 43, 9),
    ("Pain simple", 39, 10),("Pain simple", 44, 11),("Pain simple", 33, 12),
    ("Pain simple", 40, 13),("Pain simple", 37, 14),
    ("Pain au lait", 20, 1), ("Pain au lait", 18, 2), ("Pain au lait", 22, 3),
    ("Pain au lait", 15, 4), ("Pain au lait", 24, 5), ("Pain au lait", 19, 7),
    ("Pain au lait", 21, 10),("Pain au lait", 17, 14),
    ("Croissant", 15, 1), ("Croissant", 12, 2), ("Croissant", 18, 3),
    ("Croissant", 10, 5), ("Croissant", 14, 7), ("Croissant", 16, 10),
    ("Muffin chocolat", 8, 1), ("Muffin chocolat", 10, 2), ("Muffin chocolat", 6, 4),
    ("Muffin chocolat", 9, 7), ("Muffin chocolat", 11, 10),("Muffin chocolat", 7, 14),
    ("Sachet de biscuits", 12, 1),("Sachet de biscuits", 9, 3),
    ("Sachet de biscuits", 14, 5),("Sachet de biscuits", 10, 7),
    ("Gâteau noix de coco", 3, 2), ("Gâteau noix de coco", 5, 5),
    ("Gâteau noix de coco", 4, 8), ("Gâteau noix de coco", 2, 12),
    ("Boîte viennoiserie (6 pcs)", 2, 1), ("Boîte viennoiserie (6 pcs)", 3, 4),
    ("Boîte viennoiserie (6 pcs)", 1, 7),
]

# Stocks finaux réalistes après les ventes
FINAL_STOCKS = {
    "Farine de blé":     48.5,
    "Sucre blanc":       22.0,
    "Sel fin":            9.5,
    "Levure boulangère":  1.7,
    "Huile de palme":    18.0,
    "Lait en poudre":     6.2,
    "Beurre":             3.4,
    "Eau minérale":      85.0,
    "Œufs":              68.0,
    "Sachets plastique": 464.0,
    "Boîtes carton":     74.0,
    "Chocolat noir":      2.1,
    "Vanille en poudre":  0.38,
    "Noix de coco râpée": 3.2,
}

app = create_app()

with app.app_context():
    user = User.query.filter_by(email=DEMO_EMAIL).first()
    if not user:
        print(f"❌ Utilisateur '{DEMO_EMAIL}' introuvable. Lance seed.py d'abord.")
        sys.exit(1)

    # 1. Supprimer les ventes existantes de cet utilisateur
    Sale.query.filter_by(user_id=user.id).delete()
    db.session.commit()
    print(f"🗑  Ventes existantes supprimées")

    # 2. Injecter les ventes historiques directement
    products = {p.name: p for p in Product.query.filter_by(user_id=user.id).all()}
    ok = 0
    for prod_name, qty, days_ago in SALES_HISTORY:
        product = products.get(prod_name)
        if not product:
            print(f"  ⚠️  Produit '{prod_name}' introuvable")
            continue
        ts = datetime.now() - timedelta(days=days_ago)
        sale = Sale(
            product_id=product.id,
            quantity=qty,
            user_id=user.id,
            timestamp=ts,
        )
        db.session.add(sale)
        ok += 1

    db.session.commit()
    print(f"✅ {ok}/{len(SALES_HISTORY)} ventes historiques injectées")

    # 3. Mettre les stocks à des niveaux réalistes
    articles = {a.name: a for a in Article.query.filter_by(user_id=user.id).all()}
    for name, qty in FINAL_STOCKS.items():
        art = articles.get(name)
        if art:
            art.quantity = qty
    db.session.commit()
    print(f"✅ Stocks mis à jour ({len(FINAL_STOCKS)} articles)")

    print(f"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Seed complet !

Email    : {DEMO_EMAIL}
Password : baro2026
Ventes   : {ok}
Articles : {len(FINAL_STOCKS)} mis à jour
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
""")
