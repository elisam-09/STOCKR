# 📱 Publier BARO sur le Play Store et l'App Store — guide complet & honnête

État : le **code de l'app est prêt et vérifié** (fonctionnel, hors-ligne,
esthétique). Ce guide couvre les 3 briques restantes. Ce qui est déjà fait
est coché ; ce qui exige VOS comptes (Render/Google/Apple/Stripe) est marqué 👤.

---

## Brique 1 — Backend en ligne (sync des comptes entre appareils)

- [x] Backend testé de bout en bout en local (santé, inscription, connexion,
      mots de passe bcrypt) — le code serveur est sain.
- [x] `render.yaml` corrigé (il pointait vers un dossier inexistant) : déploiement
      **1 clic** sur Render avec base PostgreSQL persistante.
- [x] Guide : `stockr_backend/DEPLOY.md`.
- [x] App : **Paramètres → Serveur (API)** pour coller l'URL du nouveau backend
      (test réel de `/api/health` avant enregistrement).
- [ ] 👤 **À faire par vous (~5 min)** : dashboard.render.com → *New → Blueprint*
      → choisir ce repo → attendre le déploiement → coller l'URL dans l'app.

## Brique 2 — Paiement réel des abonnements

Vérité à connaître avant tout :
- **Sur iOS (App Store)** : Apple **impose l'achat intégré (IAP)** pour les
  abonnements numériques (30 %/15 % de commission). Stripe/CinetPay y sont
  interdits pour ça. L'IAP se configure dans App Store Connect + le wrapper natif.
- **Sur Android (Play)** : Google Play Billing est exigé pour les abonnements
  numériques dans une app du Play Store (même logique qu'Apple).
- **Sur le Web (PWA)** : libre — Stripe Checkout ou CinetPay conviennent.

Conséquence pratique : le modèle le plus simple et conforme est
**abonnement souscrit sur le web** (Stripe/CinetPay) + app mobile qui lit le
statut d'abonnement depuis le backend. C'est le modèle Spotify/Netflix
("reader app" : pas de vente dans l'app, connexion seulement).

- [ ] 👤 Créer le compte Stripe (stripe.com) ou CinetPay (cinetpay.com — mieux
      pour Wave/OM/MoMo en Côte d'Ivoire) et récupérer les clés API.
- [ ] Côté backend : endpoints `/api/billing/checkout` + webhook (à écrire une
      fois les clés disponibles — me redemander, c'est ~1 h de travail).
- ⚠️ Tant que ce n'est pas fait : l'écran Plans reste **informatif** (aucun
  débit réel). Ne pas annoncer "essai débité après 14 j" avant cette brique.

## Brique 3 — Empaquetage

### Play Store (TWA — le plus simple)
- [x] Manifest PWA valide (icônes 192 + 512 maskable, standalone, raccourcis).
- [x] `twa-manifest.json` (config Bubblewrap) prêt à la racine du repo.
- [ ] 👤 Générer l'app Android (2 options) :
  - **Option simple — PWABuilder** : https://pwabuilder.com → coller l'URL
    publique de l'app → *Package for Android* → télécharger l'`.aab` signé.
  - **Option CLI — Bubblewrap** :
    ```bash
    npm i -g @bubblewrap/cli
    bubblewrap init --manifest https://<votre-url>/manifest.json   # ou utiliser twa-manifest.json
    bubblewrap build                                               # génère app-release-signed.aab
    ```
- [ ] 👤 **Digital Asset Links** (supprime la barre d'adresse) : publier
  `assetlinks.json` (empreinte SHA-256 de votre clé de signature, fournie par
  PWABuilder/Bubblewrap) à `https://<domaine>/.well-known/assetlinks.json`.
  ⚠️ Le fichier doit être à la **racine du domaine**. Avec GitHub Pages projet
  (`mrcisse12.github.io/STOCKR/`), il faut le mettre dans un repo
  `mrcisse12.github.io` (racine) — ou utiliser un domaine personnalisé.
- [ ] 👤 Compte Google Play Console (25 $ une fois) → créer l'app → uploader
  l'`.aab` → fiche store (description, captures) → soumettre.

### App Store (Capacitor — wrapper natif requis, Apple refuse les PWA brutes)
- [ ] 👤 Nécessite un **Mac + Xcode** et le compte Apple Developer (99 $/an).
  ```bash
  npm init -y && npm i @capacitor/core @capacitor/cli @capacitor/ios
  npx cap init BARO app.baro.stock --web-dir stockr_frontend/www2
  npx cap add ios
  npx cap open ios     # ouvre Xcode → signer → archiver → App Store Connect
  ```
- [ ] 👤 Si l'app vend des abonnements : configurer l'IAP dans App Store
  Connect (voir Brique 2) avant soumission, sinon rejet quasi certain.

---

## Ordre recommandé
1. **Backend** (5 min, gratuit) → la sync marche partout, immédiatement.
2. **Play Store** (PWABuilder + Play Console) → premier store, le plus simple.
3. **Paiement web** (Stripe/CinetPay + endpoints backend) → activer les plans.
4. **App Store** (Mac + compte Apple + IAP) → en dernier, le plus lourd.

À chaque étape 👤 terminée, revenez me voir : je branche la suite côté code
le jour même (webhooks, écran paiement, statut d'abonnement synchronisé).
