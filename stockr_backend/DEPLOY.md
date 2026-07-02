# 🚀 Remettre le backend BARO en ligne (5 minutes)

Le backend (ce dossier) est **testé et fonctionnel** : santé, inscription,
connexion (mots de passe hachés bcrypt), articles, ventes, clients, prédictions.
Le déploiement Railway d'origine (`stockr-production-c175.up.railway.app`)
répond 404 — l'application n'existe plus. Deux options pour le rallumer :

---

## Option A — Render (recommandé, 1 clic, gratuit)

1. Allez sur https://dashboard.render.com (créez un compte si besoin — gratuit).
2. **New → Blueprint** → connectez ce repo GitHub (`STOCKR`).
3. Render lit `render.yaml` (racine du repo) et crée automatiquement :
   - le service web `baro-api` (dossier `stockr_backend`) ;
   - la base PostgreSQL `baro-db` (persistante) déjà reliée via `DATABASE_URL`.
4. Attendez le premier déploiement (~3 min), puis vérifiez :
   `https://baro-api-XXXX.onrender.com/api/health` → `{"status": "healthy"}`.
5. Dans BARO : **Paramètres → Serveur (API)** → collez l'URL → *Tester & enregistrer*.
   ✅ La synchro des comptes/données entre appareils est active.

> Note plan gratuit Render : le service s'endort après 15 min d'inactivité
> (premier appel ensuite ≈ 30 s). L'app BARO gère ça : elle bascule en local
> et resynchronise quand le serveur répond.

## Option B — Railway (payant après essai)

1. https://railway.app → **New Project → Deploy from GitHub repo** → ce repo.
2. Settings du service → **Root Directory** : `stockr_backend`.
3. Ajoutez un plugin **PostgreSQL** au projet ; Railway injecte `DATABASE_URL`.
4. Ajoutez la variable `SECRET_KEY` (longue chaîne aléatoire).
5. Settings → **Networking → Generate Domain** → récupérez l'URL publique.
6. Dans BARO : **Paramètres → Serveur (API)** → collez l'URL → *Tester & enregistrer*.

---

## Vérification locale (déjà faite, reproductible)

```bash
cd stockr_backend
python -m venv .venv
.venv/Scripts/pip install -r requirements.txt   # (Windows) ou .venv/bin/pip
.venv/Scripts/python app.py                     # démarre sur http://localhost:5001
curl http://localhost:5001/api/health           # → {"status": "healthy"}
```

## Ce que ça débloque
- Comptes accessibles depuis **n'importe quel appareil** (email + mot de passe).
- Synchro articles / ventes / clients entre téléphone(s) et ordinateur.
- Base nécessaire pour la facturation réelle (webhooks Stripe/CinetPay) ensuite.
