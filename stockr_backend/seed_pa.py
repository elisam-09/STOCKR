"""
BARO — Seed direct-DB (PythonAnywhere / sans HTTP, sans `requests`, sans serveur).

Pourquoi ce script plutôt que seed.py :
  - seed.py tape sur http://localhost:5001 (aucun serveur ne tourne en prod PA)
    et dépend de `requests` (non installé).
  - La route POST /sales ne lit PAS `sale_date` → toutes les ventes seraient
    datées « maintenant », ce qui casse la série journalière des prédictions.
  - La déduction de stock rejetterait la plupart des ventes historiques.

Ici on écrit directement en base, avec des ventes rétro-datées, pour alimenter
correctement le moteur de prédictions SOVA (fenêtre 30 jours).

Usage (console Bash PythonAnywhere) :
    cd ~/STOCKR/stockr_backend
    source venv/bin/activate
    python seed_pa.py
Puis : onglet Web → Reload.
"""
import sys
import os
from datetime import datetime, timedelta

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app
from models import db, User, Article, Product, Sale, product_articles

# ── Compte démo ────────────────────────────────
ACCOUNT = {
    "email":         "demo@baro.app",
    "password":      "baro2026",
    "name":          "Élisam",
    "business_name": "Boulangerie Élisam",
}

# ── Articles (matières premières) ── quantity = stock ACTUEL restant ──
ARTICLES = [
    {"name": "Farine de blé",     "quantity": 50,  "unit": "kg",  "alert_threshold": 10,  "lead_time_days": 3},
    {"name": "Sucre blanc",       "quantity": 25,  "unit": "kg",  "alert_threshold": 5,   "lead_time_days": 3},
    {"name": "Sel fin",           "quantity": 10,  "unit": "kg",  "alert_threshold": 2,   "lead_time_days": 7},
    {"name": "Levure boulangère", "quantity": 2,   "unit": "kg",  "alert_threshold": 0.5, "lead_time_days": 2},
    {"name": "Huile de palme",    "quantity": 20,  "unit": "l",   "alert_threshold": 4,   "lead_time_days": 5},
    {"name": "Lait en poudre",    "quantity": 8,   "unit": "kg",  "alert_threshold": 2,   "lead_time_days": 4},
    {"name": "Beurre",            "quantity": 5,   "unit": "kg",  "alert_threshold": 1,   "lead_time_days": 3},
    {"name": "Eau minérale",      "quantity": 100, "unit": "l",   "alert_threshold": 20,  "lead_time_days": 1},
    {"name": "Œufs",              "quantity": 120, "unit": "pce", "alert_threshold": 24,  "lead_time_days": 2},
    {"name": "Sachets plastique", "quantity": 500, "unit": "pce", "alert_threshold": 100, "lead_time_days": 5},
    {"name": "Boîtes carton",     "quantity": 80,  "unit": "pce", "alert_threshold": 20,  "lead_time_days": 5},
    {"name": "Chocolat noir",     "quantity": 3,   "unit": "kg",  "alert_threshold": 0.5, "lead_time_days": 5},
    {"name": "Vanille en poudre", "quantity": 0.5, "unit": "kg",  "alert_threshold": 0.1, "lead_time_days": 7},
    {"name": "Noix de coco râpée","quantity": 4,   "unit": "kg",  "alert_threshold": 1,   "lead_time_days": 4},
]

# ── Produits finis (composition : [(nom_article, quantite_utilisee)]) ──
PRODUCTS = [
    {"name": "Pain simple", "price": 200, "composition": [
        ("Farine de blé", 0.5), ("Sel fin", 0.005), ("Levure boulangère", 0.01),
        ("Huile de palme", 0.02), ("Eau minérale", 0.3)]},
    {"name": "Pain au lait", "price": 350, "composition": [
        ("Farine de blé", 0.45), ("Lait en poudre", 0.04), ("Sucre blanc", 0.03),
        ("Beurre", 0.02), ("Levure boulangère", 0.008), ("Eau minérale", 0.2)]},
    {"name": "Croissant", "price": 500, "composition": [
        ("Farine de blé", 0.12), ("Beurre", 0.06), ("Sucre blanc", 0.01),
        ("Levure boulangère", 0.003), ("Lait en poudre", 0.015), ("Œufs", 1)]},
    {"name": "Muffin chocolat", "price": 750, "composition": [
        ("Farine de blé", 0.08), ("Chocolat noir", 0.05), ("Sucre blanc", 0.06),
        ("Beurre", 0.04), ("Œufs", 2), ("Lait en poudre", 0.02), ("Vanille en poudre", 0.002)]},
    {"name": "Gâteau noix de coco", "price": 1200, "composition": [
        ("Farine de blé", 0.2), ("Noix de coco râpée", 0.1), ("Sucre blanc", 0.12),
        ("Beurre", 0.05), ("Œufs", 3), ("Lait en poudre", 0.03)]},
    {"name": "Sachet de biscuits", "price": 500, "composition": [
        ("Farine de blé", 0.15), ("Sucre blanc", 0.05), ("Beurre", 0.07),
        ("Œufs", 1), ("Vanille en poudre", 0.002), ("Sachets plastique", 1)]},
    {"name": "Boîte viennoiserie (6 pcs)", "price": 3500, "composition": [
        ("Farine de blé", 0.5), ("Beurre", 0.15), ("Sucre blanc", 0.06),
        ("Œufs", 4), ("Levure boulangère", 0.01), ("Boîtes carton", 1)]},
]

# ── Historique de ventes (produit, quantité, il y a N jours) ──
SALES_HISTORY = [
    ("Pain simple", 40, 1), ("Pain simple", 35, 2), ("Pain simple", 42, 3),
    ("Pain simple", 38, 4), ("Pain simple", 45, 5), ("Pain simple", 30, 6),
    ("Pain simple", 41, 7), ("Pain simple", 36, 8), ("Pain simple", 43, 9),
    ("Pain simple", 39, 10), ("Pain simple", 44, 11), ("Pain simple", 33, 12),
    ("Pain simple", 40, 13), ("Pain simple", 37, 14),
    ("Pain au lait", 20, 1), ("Pain au lait", 18, 2), ("Pain au lait", 22, 3),
    ("Pain au lait", 15, 4), ("Pain au lait", 24, 5), ("Pain au lait", 19, 7),
    ("Pain au lait", 21, 10), ("Pain au lait", 17, 14),
    ("Croissant", 15, 1), ("Croissant", 12, 2), ("Croissant", 18, 3),
    ("Croissant", 10, 5), ("Croissant", 14, 7), ("Croissant", 16, 10),
    ("Muffin chocolat", 8, 1), ("Muffin chocolat", 10, 2), ("Muffin chocolat", 6, 4),
    ("Muffin chocolat", 9, 7), ("Muffin chocolat", 11, 10), ("Muffin chocolat", 7, 14),
    ("Sachet de biscuits", 12, 1), ("Sachet de biscuits", 9, 3),
    ("Sachet de biscuits", 14, 5), ("Sachet de biscuits", 10, 7),
    ("Gâteau noix de coco", 3, 2), ("Gâteau noix de coco", 5, 5),
    ("Gâteau noix de coco", 4, 8), ("Gâteau noix de coco", 2, 12),
    ("Boîte viennoiserie (6 pcs)", 2, 1), ("Boîte viennoiserie (6 pcs)", 3, 4),
    ("Boîte viennoiserie (6 pcs)", 1, 7),
]


def main():
    app = create_app()
    with app.app_context():
        print("\n🌱 BARO Seed direct-DB — démarrage\n")

        # 1. Reset complet
        db.drop_all()
        db.create_all()
        print("🗑️  Base réinitialisée (tables recréées)")

        # 2. Compte démo
        user = User(
            email=ACCOUNT["email"],
            name=ACCOUNT["name"],
            business_name=ACCOUNT["business_name"],
            language="fr", currency="XOF", country="CI",
        )
        user.set_password(ACCOUNT["password"])
        db.session.add(user)
        db.session.commit()
        user.generate_token()
        print(f"✅ Compte créé : {user.email}")

        # 3. Articles
        article_ids = {}
        for a in ARTICLES:
            art = Article(
                name=a["name"], quantity=a["quantity"], unit=a["unit"],
                alert_threshold=a["alert_threshold"], lead_time_days=a["lead_time_days"],
                user_id=user.id,
            )
            db.session.add(art)
            db.session.flush()
            article_ids[a["name"]] = art.id
        db.session.commit()
        print(f"✅ {len(article_ids)} articles créés")

        # 4. Produits + composition (table d'association product_articles)
        product_ids = {}
        for p in PRODUCTS:
            prod = Product(name=p["name"], price=p["price"], user_id=user.id)
            db.session.add(prod)
            db.session.flush()
            for art_name, qty_used in p["composition"]:
                aid = article_ids.get(art_name)
                if aid:
                    db.session.execute(product_articles.insert().values(
                        product_id=prod.id, article_id=aid, quantity_used=qty_used))
            product_ids[p["name"]] = prod.id
        db.session.commit()
        print(f"✅ {len(product_ids)} produits créés (avec composition)")

        # 5. Ventes rétro-datées
        n = 0
        now = datetime.utcnow()
        for prod_name, qty, days_ago in SALES_HISTORY:
            pid = product_ids.get(prod_name)
            if not pid:
                continue
            ts = now - timedelta(days=days_ago)
            db.session.add(Sale(product_id=pid, quantity=qty, user_id=user.id, timestamp=ts))
            n += 1
        db.session.commit()
        print(f"✅ {n} ventes injectées (étalées sur 14 jours)")

        print(f"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Seed terminé !

Email        : {ACCOUNT['email']}
Mot de passe : {ACCOUNT['password']}
Articles     : {len(article_ids)}
Produits     : {len(product_ids)}
Ventes       : {n}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

➡️  Onglet Web → Reload, puis connecte-toi dans l'app.
""")


if __name__ == "__main__":
    main()
