# STOCKR — Index du code

## www2/app.js  (frontend principal)

### Auth & Session
| Ligne | Fonction |
|-------|----------|
| 54 | `getUsers()` |
| 60 | `getSession()` |
| 63 | `saveSession(user)` |
| 66 | `clearSession()` |
| 915 | `doLogin()` |
| 942 | `authNextStep()` |
| 991 | `doRegister()` |
| 1031 | `doLogout()` |
| 1267 | `toggleAuthPwd(e)` |

### API & Local fallback
| Ligne | Fonction |
|-------|----------|
| 661-665 | `_lsUsers / _lsSave / _lsData / _lsSaveData / _uid` |
| 667 | `_localApi(method, path, body)` — API localStorage complète |
| 770 | `api(method, path, body)` — wrapper principal (real API + fallback local) |
| 802 | `articleFromAPI(a)` |
| 805 | `productFromAPI(p)` |
| 817 | `saleFromAPI(s)` |
| 825 | `loadData()` — charge articles/produits/ventes/predictions/clients |

### Facture & WhatsApp
| Ligne | Fonction |
|-------|----------|
| 311 | `_invNum(id)` — génère "INV-XXXXXX" |
| 313 | `generateInvoicePDF(sales)` — génère la facture PDF (jsPDF) |
| 500 | `shareViaWhatsApp(sales)` |

### Panier & Ventes
| Ligne | Fonction |
|-------|----------|
| 1075 | `recordSale()` |
| 1210 | `toggleCart()` |
| 1281 | `addToCart()` |
| 1295 | `removeFromCart(idx)` |
| 1300 | `confirmCart()` — valide le panier, crée les ventes, appelle showReceiptBanner |
| 1398 | `showReceiptBanner(sales, total)` — bannière post-validation |

### Articles (Stock)
| Ligne | Fonction |
|-------|----------|
| 1043 | `applyStock()` |
| 1061 | `deleteArticle(id)` |
| 1098 | `saveArticle()` |
| 888 | `recalcMin(articleId)` |
| 897 | `recalcAllMins()` |

### Produits
| Ligne | Fonction |
|-------|----------|
| 1118 | `saveProduct()` |
| 1193 | `updateMarginPreview()` |
| 1215 | `deleteProduct(id)` |
| 1229 | `saveEditProduct()` |
| 871 | `productMaxMake(product)` |

### Clients
| Ligne | Fonction |
|-------|----------|
| 2527 | `vClients()` |
| 2579 | `vAddClient()` |
| 2609 | `saveClient()` |
| 2625 | `deleteClient(id)` |
| 2635 | `vClientDetail()` |

### Unités
| Ligne | Fonction |
|-------|----------|
| 83 | `compatibleUnits(unit)` |
| 87 | `convertQty(qty, from, to)` |
| 94 | `fmtQty(n)` |
| 1336 | `_unitDropHTML()` |
| 1346 | `openUnitDrop()` |
| 1355 | `updateUnitDrop()` |
| 1362 | `closeUnitDrop()` |
| 1367 | `selectUnit(u)` |

### Helpers / Format
| Ligne | Fonction |
|-------|----------|
| 849 | `fmt(n)` — formatage nombre |
| 852 | `fmtCurrency(n)` |
| 856 | `fmtDate(iso)` |
| 863 | `initials(name)` |
| 866 | `stockStatus(stock, min)` |
| 878 | `salesForPeriod()` |
| 902 | `showToast(msg, type)` |
| 987 | `getCurrencySymbol(code)` |

### Render & Navigation
| Ligne | Fonction |
|-------|----------|
| 1427 | `nav(view, extra)` |
| 1434 | `render()` |
| 1471 | `renderNav()` |

### Vues (toutes retournent du HTML)
| Ligne | Vue |
|-------|-----|
| 1488 | `vAuth()` |
| 1545 | `vAuthStep2()` |
| 1619 | `vHome()` |
| 1917 | `vPantry()` — gestion du stock |
| 1975 | `vProducts()` — liste produits finis |
| 2022 | `vSales()` — liste des ventes + panier (historique groupé par sessionId) |
| 2125 | `vFinancial()` — bilan financier |
| 2216 | `vDetail()` — détail article |
| 2302 | `confirmDelete(id)` |
| 2314 | `vAdd()` — formulaire ajout article |
| 2374 | `vAddProduct()` — formulaire ajout produit |
| 2426 | `vEditProduct()` — formulaire édition produit |
| 2480 | `vNotifications()` |
| 2527 | `vClients()` |
| 2579 | `vAddClient()` |
| 2635 | `vClientDetail()` |
| 2713 | `vSpectra()` — scan IA inventaire |
| 3097 | `vCatalog()` |
| 3188 | `vSettings()` |

### Spectra (scan IA)
| Ligne | Fonction |
|-------|----------|
| 2902 | `spectraOnFile(input)` |
| 2935 | `spectraConfirmYes()` |
| 2946 | `spectraConfirmNo()` |
| 2952 | `spectraSubmitName()` |
| 2968 | `spectraNext()` |
| 2978 | `spectraFinish()` |
| 2996 | `spectraReset()` |
| 3005 | `spectraStartCompare()` |

### Export & CSV
| Ligne | Fonction |
|-------|----------|
| 1152 | `downloadCSV(filename, rows)` |
| 1163 | `exportArticlesCSV()` |
| 1169 | `exportProductsCSV()` |
| 1181 | `exportSalesCSV()` |
| 1187 | `exportAllCSV()` |

### Settings
| Ligne | Fonction |
|-------|----------|
| 1374 | `saveAccountInfo()` |
| 1391 | `toggleDark()` |
| 3034 | `addLocation()` |
| 3045 | `removeLocation(id)` |
| 3055 | `setLocation(id)` |
| 3063 | `uploadLogo()` |
| 3091 | `removeLogo()` |
| 3164 | `toggleCatalogProduct(id)` |
| 3171 | `shareCatalogWhatsApp()` |
| 3181 | `shareFOMO(name, stock)` |
| 3424 | `installPWA()` |

### Charts
| Ligne | Fonction |
|-------|----------|
| 521 | `buildChartData()` |
| 543 | `renderRevenueChart()` |

---

## www1/app.js  (version alternative)

Structure identique à www2 mais plus compacte (fonctions inline).
Principales différences de numéros de ligne :

| Ligne | Fonction clé |
|-------|-------------|
| 274 | `generateInvoicePDF(sales)` |
| 535 | `api(method, path, body)` |
| 560 | `loadData()` |
| 759 | `confirmCart()` |
| 823 | `showReceiptBanner(sales, total)` |
| 895 | `nav(view, extra)` |
| 901 | `render()` |
| 947 | `vAuth()` |
| 1053 | `vHome()` |
| 1168 | `vPantry()` |
| 1201 | `vProducts()` |
| 1217 | `vSales()` |
| 1262 | `vFinancial()` |
| 1310 | `vDetail()` |
| 1371 | `vAdd()` |
| 1404 | `vAddProduct()` |
| 1427 | `vEditProduct()` |
| 1468 | `vClients()` |
| 1557 | `vSpectra()` |
| 1653 | `vCatalog()` |
| 1691 | `vSettings()` |

---

## Backend Flask — routes

| Fichier | Ligne | Route / Fonction |
|---------|-------|-----------------|
| auth_routes.py | 139 | `POST /api/auth/register` → `register()` |
| auth_routes.py | 162 | `POST /api/auth/login` → `login()` |
| auth_routes.py | 180 | `POST /api/auth/logout` → `logout()` |
| auth_routes.py | 198 | `GET /api/auth/profile` → `get_profile()` |
| auth_routes.py | 204 | `PUT /api/auth/profile` → `update_profile()` |
| auth_routes.py | 225 | `GET /api/auth/dashboard` → `get_dashboard()` |
| article_routes.py | 9 | `GET /api/articles/` → `get_articles()` |
| article_routes.py | 16 | `POST /api/articles/` → `create_article()` |
| article_routes.py | 34 | `PUT /api/articles/<id>` → `update_article()` |
| article_routes.py | 48 | `DELETE /api/articles/<id>` → `delete_article()` |
| product_routes.py | 10 | `GET /api/products/` → `get_products()` |
| product_routes.py | 17 | `POST /api/products/` → `create_product()` |
| product_routes.py | 49 | `DELETE /api/products/<id>` → `delete_product()` |
| product_routes.py | 57 | `PUT /api/products/<id>` → `update_product()` |
| sale_routes.py | 11 | `GET /api/sales/` → `get_sales()` |
| sale_routes.py | 18 | `POST /api/sales/` → `create_sale()` |
| client_routes.py | 36 | `GET /api/clients/` → `get_clients()` |
| client_routes.py | 43 | `POST /api/clients/` → `create_client()` |
| client_routes.py | 63 | `PUT /api/clients/<id>` → `update_client()` |
| client_routes.py | 76 | `DELETE /api/clients/<id>` → `delete_client()` |
| prediction_routes.py | 12 | `GET /api/predictions/` → `get_predictions()` |
| spectra_routes.py | 59 | `POST /api/spectra/scan` → `scan()` |
| spectra_routes.py | 114 | `POST /api/spectra/confirm` → `confirm()` |

---

## Backend Flask — modèles

| Fichier | Classe | Champs clés |
|---------|--------|-------------|
| models/user.py | `User` | id, email, password_hash, name, business_name, language, currency, country, auth_token, token_expiry |
| models/article.py | `Article` | id, name, quantity, unit, alert_threshold, daily_avg_demand, lead_time_days, user_id |
| models/product.py | `Product` | id, name, price, photo_url, user_id + relation `composition` (many-to-many Article via product_articles) |
| models/sale.py | `Sale` | id, product_id, quantity, timestamp, user_id |
| routes/client_routes.py | `Client` | id, name, phone, email, notes, created_at, user_id |
| models/__init__.py | `product_articles` | table pivot : product_id, article_id, **quantity_used** |

---

## Services

| Fichier | Classe | Méthode clé |
|---------|--------|-------------|
| services/stock_service.py | `StockService` | `consume_articles_for_sale(product_id, qty, user_id)` — décrémente le stock |
| services/alert_service.py | `AlertService` | `get_user_alerts(user_id)` |
| services/optimization_service.py | `OptimizationService` | `recommend_reorder(article_id)`, `calculate_eoq(...)` |

---

## Points d'attention critiques

- **`USE_LOCAL`** (www2/app.js:656) — bascule en mode localStorage si réseau KO. Reset automatique si token présent et API répond.
- **`product_articles.quantity_used`** — quantité d'article consommé PAR UNITÉ de produit. Toujours en unité de base (kg, l, pce).
- **`sessionId`** — ajouté sur chaque `newSale` dans `confirmCart` pour regrouper les articles d'un même panier dans la facture PDF.
- **`Sale` model** — ne stocke pas `client_id`/`client_name` (pas de champ en DB). Ces infos sont front-only.
- **Token** — un seul token actif par user. Chaque login écrase l'ancien (`auth_token` dans table `user`).
- **Port 5001** — backend Flask. Port 3456 — www2. Port 3458 — www1.
