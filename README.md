# STOCKR / BARO

Application de gestion de stock, ventes & boutique en ligne mobile-first pour PME africaines.
Stack : Flask (Python) + SQLAlchemy + Vanilla JS (PWA)

---

## 🚀 Activer le mode EN LIGNE (multi-appareils) — 1 clic

L'app fonctionne parfaitement **hors-ligne** (tout est stocké sur l'appareil). Pour
débloquer les fonctionnalités **en ligne** — comptes accessibles partout, synchro
automatique entre téléphones, sauvegarde serveur, paiements d'abonnement — il suffit
de mettre le backend en ligne (gratuit, ~3 min) :

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/elisam-09/STOCKR)

1. Cliquez le bouton ci-dessus → connectez votre compte GitHub → **Apply**.
   Render lit `render.yaml`, crée le serveur web + la base PostgreSQL (offre gratuite).
2. Quand c'est « Live », copiez l'URL (ex : `https://baro-api-xxxx.onrender.com`).
3. Dans l'app : **Paramètres → Serveur (API)** → collez l'URL → *Tester & enregistrer*.

À partir de là : créez un compte, il existe sur **tous** vos appareils ; le pictogramme
☁️ dans Paramètres passe au vert « En ligne — synchronisé ». Rien à changer côté app.

> Sans ce déploiement, l'app reste 100 % utilisable en local (mono-appareil) — voir aussi
> la **Sauvegarde par fichier** (Paramètres → 📦) pour migrer sans serveur.

---

## Prérequis

- Python 3.10+
- Un navigateur moderne (Chrome, Firefox, Safari)
- Git

---

## Installation (Mac / Linux)

```bash
# 1. Cloner le repo
git clone https://github.com/elisam-09/STOCKR.git
cd STOCKR

# 2. Créer un environnement virtuel et installer les dépendances
cd stockr_backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 3. Lancer le backend
python3 app.py
# → http://localhost:5001
```

Dans un second terminal :

```bash
# 4. Lancer le frontend
cd stockr_frontend/www2
python3 -m http.server 3456
# → http://localhost:3456
```

---

## Installation (Windows)

```bash
# 1. Cloner le repo
git clone https://github.com/elisam-09/STOCKR.git
cd STOCKR

# 2. Créer un environnement virtuel et installer les dépendances
cd stockr_backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt

# 3. Lancer le backend
python app.py
# → http://localhost:5001
```

Dans un second terminal :

```bash
# 4. Lancer le frontend
cd stockr_frontend\www2
python -m http.server 3456
# → http://localhost:3456
```

---

## Structure du projet

```
STOCKR/
├── stockr_backend/
│   ├── app.py                  # Point d'entrée Flask
│   ├── config.py               # Configuration (DB, secret key)
│   ├── requirements.txt        # Dépendances Python
│   ├── models/                 # Modèles SQLAlchemy
│   │   ├── user.py
│   │   ├── article.py
│   │   ├── product.py
│   │   └── sale.py
│   ├── routes/                 # Endpoints API REST
│   │   ├── auth_routes.py
│   │   ├── article_routes.py
│   │   ├── product_routes.py
│   │   ├── sale_routes.py
│   │   └── prediction_routes.py
│   └── services/               # Logique métier
└── stockr_frontend/
    └── www2/
        ├── index.html          # SPA — point d'entrée
        ├── app.js              # Toute la logique frontend
        └── styles.css          # Styles
```

---

## API — Endpoints principaux

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Créer un compte |
| POST | `/api/auth/login` | Se connecter |
| GET | `/api/articles/` | Lister les articles |
| POST | `/api/articles/` | Ajouter un article |
| GET | `/api/products/` | Lister les produits |
| POST | `/api/products/` | Créer un produit |
| GET | `/api/sales/` | Historique des ventes |
| POST | `/api/sales/` | Enregistrer une vente |
| GET | `/api/predictions/` | Prédictions IA (WMA + EOQ + Safety Stock) |

---

## Notes importantes

- La base de données SQLite est créée automatiquement au premier lancement dans `stockr_backend/instance/stockr.db`
- En développement, `SECRET_KEY` dans `config.py` est une valeur par défaut — **ne pas utiliser en production**
- L'URL du backend est définie dans `stockr_frontend/www2/app.js` ligne 90 : `const API_BASE = 'http://localhost:5001'` — à changer lors du déploiement

---

## Équipe

Projet réalisé dans le cadre du concours **Maarif Innovative Projects 2026**.
