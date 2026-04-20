"""
BARO — Script de seed
Crée un compte de test et remplit la base avec des données réalistes.
Usage : python seed.py
"""
import requests
import json

BASE = "http://localhost:5001/api"

# ── Compte ─────────────────────────────────────
ACCOUNT = {
    "email":         "demo@baro.app",
    "password":      "baro2026",
    "name":          "Élisam",
    "business_name": "Boulangerie Élisam",
}

# ── Articles (matières premières) ─────────────
ARTICLES = [
    # Farines & Céréales
    {"name": "Farine de blé",     "quantity": 50,  "unit": "kg",  "alert_threshold": 10, "lead_time_days": 3,  "price": 450},
    {"name": "Sucre blanc",       "quantity": 25,  "unit": "kg",  "alert_threshold": 5,  "lead_time_days": 3,  "price": 600},
    {"name": "Sel fin",           "quantity": 10,  "unit": "kg",  "alert_threshold": 2,  "lead_time_days": 7,  "price": 150},
    {"name": "Levure boulangère", "quantity": 2,   "unit": "kg",  "alert_threshold": 0.5,"lead_time_days": 2,  "price": 2500},
    # Liquides & Graisses
    {"name": "Huile de palme",    "quantity": 20,  "unit": "l",   "alert_threshold": 4,  "lead_time_days": 5,  "price": 950},
    {"name": "Lait en poudre",    "quantity": 8,   "unit": "kg",  "alert_threshold": 2,  "lead_time_days": 4,  "price": 3200},
    {"name": "Beurre",            "quantity": 5,   "unit": "kg",  "alert_threshold": 1,  "lead_time_days": 3,  "price": 4500},
    {"name": "Eau minérale",      "quantity": 100, "unit": "l",   "alert_threshold": 20, "lead_time_days": 1,  "price": 200},
    # Œufs & Produits frais
    {"name": "Œufs",              "quantity": 120, "unit": "pce", "alert_threshold": 24, "lead_time_days": 2,  "price": 150},
    # Emballages
    {"name": "Sachets plastique", "quantity": 500, "unit": "pce", "alert_threshold": 100,"lead_time_days": 5,  "price": 25},
    {"name": "Boîtes carton",     "quantity": 80,  "unit": "pce", "alert_threshold": 20, "lead_time_days": 5,  "price": 120},
    # Garnitures
    {"name": "Chocolat noir",     "quantity": 3,   "unit": "kg",  "alert_threshold": 0.5,"lead_time_days": 5,  "price": 5500},
    {"name": "Vanille en poudre", "quantity": 0.5, "unit": "kg",  "alert_threshold": 0.1,"lead_time_days": 7,  "price": 8000},
    {"name": "Noix de coco râpée","quantity": 4,   "unit": "kg",  "alert_threshold": 1,  "lead_time_days": 4,  "price": 2200},
]

# ── Produits finis ─────────────────────────────
# composition : [(nom_article, quantite_utilisee)]
PRODUCTS = [
    {
        "name":  "Pain simple",
        "price": 200,
        "composition": [
            ("Farine de blé",     0.5),
            ("Sel fin",           0.005),
            ("Levure boulangère", 0.01),
            ("Huile de palme",    0.02),
            ("Eau minérale",      0.3),
        ]
    },
    {
        "name":  "Pain au lait",
        "price": 350,
        "composition": [
            ("Farine de blé",     0.45),
            ("Lait en poudre",    0.04),
            ("Sucre blanc",       0.03),
            ("Beurre",            0.02),
            ("Levure boulangère", 0.008),
            ("Eau minérale",      0.2),
        ]
    },
    {
        "name":  "Croissant",
        "price": 500,
        "composition": [
            ("Farine de blé",     0.12),
            ("Beurre",            0.06),
            ("Sucre blanc",       0.01),
            ("Levure boulangère", 0.003),
            ("Lait en poudre",    0.015),
            ("Œufs",              1),
        ]
    },
    {
        "name":  "Muffin chocolat",
        "price": 750,
        "composition": [
            ("Farine de blé",     0.08),
            ("Chocolat noir",     0.05),
            ("Sucre blanc",       0.06),
            ("Beurre",            0.04),
            ("Œufs",              2),
            ("Lait en poudre",    0.02),
            ("Vanille en poudre", 0.002),
        ]
    },
    {
        "name":  "Gâteau noix de coco",
        "price": 1200,
        "composition": [
            ("Farine de blé",     0.2),
            ("Noix de coco râpée",0.1),
            ("Sucre blanc",       0.12),
            ("Beurre",            0.05),
            ("Œufs",              3),
            ("Lait en poudre",    0.03),
        ]
    },
    {
        "name":  "Sachet de biscuits",
        "price": 500,
        "composition": [
            ("Farine de blé",     0.15),
            ("Sucre blanc",       0.05),
            ("Beurre",            0.07),
            ("Œufs",              1),
            ("Vanille en poudre", 0.002),
            ("Sachets plastique", 1),
        ]
    },
    {
        "name":  "Boîte viennoiserie (6 pcs)",
        "price": 3500,
        "composition": [
            ("Farine de blé",     0.5),
            ("Beurre",            0.15),
            ("Sucre blanc",       0.06),
            ("Œufs",              4),
            ("Levure boulangère", 0.01),
            ("Boîtes carton",     1),
        ]
    },
]

# ── Ventes historiques (pour alimenter les prédictions IA) ──
# (produit, quantité, il y a N jours)
SALES_HISTORY = [
    # Pain simple — vendu très régulièrement
    ("Pain simple", 40, 1), ("Pain simple", 35, 2), ("Pain simple", 42, 3),
    ("Pain simple", 38, 4), ("Pain simple", 45, 5), ("Pain simple", 30, 6),
    ("Pain simple", 41, 7), ("Pain simple", 36, 8), ("Pain simple", 43, 9),
    ("Pain simple", 39, 10),("Pain simple", 44, 11),("Pain simple", 33, 12),
    ("Pain simple", 40, 13),("Pain simple", 37, 14),
    # Pain au lait
    ("Pain au lait", 20, 1), ("Pain au lait", 18, 2), ("Pain au lait", 22, 3),
    ("Pain au lait", 15, 4), ("Pain au lait", 24, 5), ("Pain au lait", 19, 7),
    ("Pain au lait", 21, 10),("Pain au lait", 17, 14),
    # Croissant
    ("Croissant", 15, 1), ("Croissant", 12, 2), ("Croissant", 18, 3),
    ("Croissant", 10, 5), ("Croissant", 14, 7), ("Croissant", 16, 10),
    # Muffin
    ("Muffin chocolat", 8, 1), ("Muffin chocolat", 10, 2), ("Muffin chocolat", 6, 4),
    ("Muffin chocolat", 9, 7), ("Muffin chocolat", 11, 10),("Muffin chocolat", 7, 14),
    # Biscuits
    ("Sachet de biscuits", 12, 1),("Sachet de biscuits", 9, 3),
    ("Sachet de biscuits", 14, 5),("Sachet de biscuits", 10, 7),
    # Gâteau coco
    ("Gâteau noix de coco", 3, 2), ("Gâteau noix de coco", 5, 5),
    ("Gâteau noix de coco", 4, 8), ("Gâteau noix de coco", 2, 12),
    # Boîte
    ("Boîte viennoiserie (6 pcs)", 2, 1), ("Boîte viennoiserie (6 pcs)", 3, 4),
    ("Boîte viennoiserie (6 pcs)", 1, 7),
]


def ok(r, label):
    if r.status_code in (200, 201):
        print(f"  ✅ {label}")
        return True
    else:
        print(f"  ❌ {label} → {r.status_code} {r.text[:120]}")
        return False


def main():
    print("\n🌱 BARO Seed — démarrage\n")

    # ── 1. Register ──
    print("→ Création du compte…")
    r = requests.post(f"{BASE}/auth/register", json=ACCOUNT)
    if r.status_code == 201:
        token = r.json()["user"]["auth_token"]
        print(f"  ✅ Compte créé — token obtenu")
    elif r.status_code in (400, 409):
        print("  ⚠️  Compte existant — tentative de connexion…")
        r2 = requests.post(f"{BASE}/auth/login", json={
            "email": ACCOUNT["email"], "password": ACCOUNT["password"]
        })
        if r2.status_code == 200:
            token = r2.json()["user"]["auth_token"]
            print(f"  ✅ Connecté")
        else:
            print(f"  ❌ Connexion échouée : {r2.text}")
            return
    else:
        print(f"  ❌ Register échoué : {r.text}")
        return

    headers = {"Authorization": f"Bearer {token}"}

    # ── 2. Articles ──
    print(f"\n→ Création de {len(ARTICLES)} articles…")
    article_ids = {}
    for a in ARTICLES:
        r = requests.post(f"{BASE}/articles/", json=a, headers=headers)
        if ok(r, a["name"]):
            article_ids[a["name"]] = r.json()["id"]

    # ── 3. Produits ──
    print(f"\n→ Création de {len(PRODUCTS)} produits…")
    product_ids = {}
    for p in PRODUCTS:
        composition = []
        for art_name, qty in p["composition"]:
            art_id = article_ids.get(art_name)
            if art_id:
                composition.append({"article_id": art_id, "quantity_used": qty})
        payload = {"name": p["name"], "price": p["price"], "composition": composition}
        r = requests.post(f"{BASE}/products/", json=payload, headers=headers)
        if ok(r, p["name"]):
            product_ids[p["name"]] = r.json()["id"]

    # ── 4. Historique de ventes ──
    print(f"\n→ Injection de {len(SALES_HISTORY)} ventes historiques…")
    from datetime import datetime, timedelta
    ok_count = 0
    for prod_name, qty, days_ago in SALES_HISTORY:
        prod_id = product_ids.get(prod_name)
        if not prod_id:
            continue
        sale_date = (datetime.now() - timedelta(days=days_ago)).strftime("%Y-%m-%dT%H:%M:%S")
        payload = {"product_id": prod_id, "quantity": qty, "sale_date": sale_date}
        r = requests.post(f"{BASE}/sales/", json=payload, headers=headers)
        if r.status_code in (200, 201):
            ok_count += 1
    print(f"  ✅ {ok_count}/{len(SALES_HISTORY)} ventes injectées")

    # ── Résumé ──
    print(f"""
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Seed terminé !

Email    : {ACCOUNT['email']}
Mot de passe : {ACCOUNT['password']}
Articles : {len(article_ids)}
Produits : {len(product_ids)}
Ventes   : {ok_count}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
""")


if __name__ == "__main__":
    main()
