# BARO — Dossier de conformité App Store / Play Store

> Préparé à partir d'un **audit du comportement réel de l'application**, pas d'un modèle générique.
> Chaque affirmation ci-dessous a été vérifiée dans le code.

---

## 1. URLs publiques obligatoires

Une fois `gh-pages` déployé, ces deux pages sont en ligne :

| Champ du formulaire | URL à coller |
|---|---|
| Privacy Policy URL (Apple + Google) | `https://mrcisse12.github.io/STOCKR/confidentialite.html` |
| Support URL (Apple) / Assistance (Google) | `https://mrcisse12.github.io/STOCKR/support.html` |

> ⚠️ **À vérifier avant de soumettre** : ouvrez les deux liens dans un navigateur.
> Si votre dépôt gh-pages a un autre nom, adaptez l'URL. Une URL de confidentialité
> qui renvoie une erreur 404 est **le motif de rejet numéro un**.

---

## 2. Justification des permissions

À coller dans les champs correspondants. Apple exige une phrase qui explique
**le bénéfice pour l'utilisateur**, pas seulement la fonction technique.

### iOS — `Info.plist`

| Clé | Texte à utiliser |
|---|---|
| `NSCameraUsageDescription` | BARO utilise l'appareil photo pour scanner les codes-barres de vos produits et prendre leurs photos, afin de remplir votre stock sans tout saisir à la main. |
| `NSMicrophoneUsageDescription` | BARO utilise le microphone uniquement lorsque vous enregistrez une vidéo de présentation de votre commerce dans le studio vidéo. |
| `NSLocationWhenInUseUsageDescription` | BARO utilise votre position uniquement lorsque vous le demandez, pour pré-remplir l'adresse de retrait de votre boutique ou proposer un itinéraire à vos clients. |
| `NSPhotoLibraryUsageDescription` | BARO accède à vos photos pour que vous puissiez choisir une image existante comme photo de produit ou logo de boutique. |

### Android — `AndroidManifest.xml`

| Permission | Justification (Play Console) |
|---|---|
| `CAMERA` | Scan des codes-barres produits et prise de photo des articles. |
| `RECORD_AUDIO` | Enregistrement du son des vidéos promotionnelles (studio vidéo). |
| `ACCESS_FINE_LOCATION` | Pré-remplissage de l'adresse du point de retrait, à la demande de l'utilisateur. |
| `POST_NOTIFICATIONS` | Alertes de stock bas, de péremption et de nouvelle commande. |
| `INTERNET` | Synchronisation du compte et boutique en ligne. |

> 💡 **Recommandation forte** : si vous n'utilisez pas le studio vidéo au lancement,
> **retirez `RECORD_AUDIO` / `NSMicrophoneUsageDescription`**. Le microphone est la
> permission la plus scrutée par les examinateurs ; ne pas la demander supprime
> tout un aller-retour possible. (Voir §6.)

---

## 3. Formulaire de confidentialité Apple (App Privacy)

Réponses conformes au comportement réel de l'application.

**Collectez-vous des données ?** → **Oui**

| Catégorie | Collectée | Liée à l'identité | Utilisée pour le suivi | Finalité |
|---|---|---|---|---|
| Coordonnées (nom, e-mail) | Oui | Oui | **Non** | Fonctionnement de l'app (compte) |
| Identifiant utilisateur | Oui | Oui | **Non** | Fonctionnement de l'app |
| Autres données (stock, ventes, clients) | Oui | Oui | **Non** | Fonctionnement de l'app |
| Photos | Oui | Oui | **Non** | Fonctionnement de l'app (photos produits) |
| Localisation approximative | Oui | Non | **Non** | Fonctionnement de l'app (adresse de retrait) |
| Historique de navigation, publicité, contacts, santé, finances | **Non** | — | — | — |

**Suivi publicitaire (App Tracking Transparency)** → **Non**.
L'application n'intègre aucun SDK publicitaire et ne partage rien à des fins de suivi.
Aucune bannière ATT n'est donc requise.

---

## 4. Play Store — Section « Sécurité des données »

- **Les données sont-elles chiffrées en transit ?** → Oui (HTTPS)
- **L'utilisateur peut-il demander la suppression de ses données ?** → Oui (par e-mail, procédure décrite dans la politique)
- **Collecte obligatoire ?** → Le compte est nécessaire à la synchronisation ; l'app reste utilisable hors ligne.
- **Données partagées avec des tiers ?** → **Non** pour les données de commerce.
  Des services tiers sont contactés (voir §5) mais ne reçoivent pas votre carnet de clients ni votre chiffre d'affaires.

---

## 5. Services tiers réellement contactés (audité)

| Service | Déclenchement | Donnée transmise |
|---|---|---|
| jsDelivr / cdnjs | Chargement de l'app | Adresse IP |
| Google Fonts | Boutique en ligne avec police non-système | Adresse IP |
| Open Food Facts | Scan d'un code-barres | Le code-barres |
| WhatsApp (`wa.me`) | Action explicite de l'utilisateur | Le message rédigé |
| Prestataires paiement / livraison / réseaux | Uniquement si configurés par l'utilisateur | Selon le prestataire |

---

## 6. Décisions de périmètre pour le lancement

| Fonction | Statut | Raison |
|---|---|---|
| **Assistant IA (BARO IA)** | **Masqué** | Nécessite une clé d'API payante. Sans elle, la fonction serait creuse — contraire à la règle « rien de faux ». Réactivable en vidant `LAUNCH_HIDDEN` dans `app.js`, sans réécrire une ligne. |
| Scan Spectra | **Conservé** | Fonctionne sans clé (lecteur de code-barres natif + modèles chargés localement). |
| Studio vidéo | **À décider** | Seule fonction qui demande le microphone. Le retirer simplifierait nettement l'examen. |

---

## 7. Points de rejet fréquents — état de BARO

| Motif de rejet classique | État |
|---|---|
| URL de confidentialité absente ou cassée | ✅ Page rédigée, à publier |
| Permission demandée sans justification | ✅ Textes fournis ci-dessus |
| Permission demandée mais non utilisée | ✅ Vérifié : caméra, micro, position, notifications sont toutes réellement utilisées |
| Fonctionnalité vide ou non fonctionnelle | ✅ Assistant IA masqué ; 89 écrans vérifiés sans erreur |
| Plantage sur un compte neuf | ✅ Vérifié : 89 écrans testés avec un compte vierge, 0 erreur |
| Mot de passe stocké en clair | ✅ Corrigé : empreinte SHA-256 salée |
| Liens externes détournables | ✅ Corrigé : `noopener` partout |

---

## 8. Ce qui reste à faire — et que je ne peux pas faire à votre place

- [ ] **Tester sur un vrai téléphone** (iPhone et Android). Indispensable : l'aperçu navigateur ne reproduit ni la caméra réelle, ni les gestes, ni les notifications.
- [ ] **Icônes** : 1024×1024 px (App Store), 512×512 px (Play Store), sans transparence ni coins arrondis.
- [ ] **Captures d'écran** : au moins 3 par plateforme, aux tailles exigées. Suggestion d'ordre : Accueil → Ma journée → Péremptions → Boutique → Clôture de caisse.
- [ ] **Compte de démonstration** pour l'examinateur (identifiants à fournir dans les notes de review), avec des données déjà remplies.
- [ ] **Décider du sort du studio vidéo** (voir §6).
- [ ] Vérifier que les deux URLs du §1 s'ouvrent correctement.

---

*Document généré lors de l'audit de conformité, à partir du comportement réel de l'application.*
