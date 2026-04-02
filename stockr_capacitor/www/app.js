// ============================================
// STOCKR - VERSION WAX COMPLÈTE
// ============================================

console.log('🚀 Stockr Wax chargé');

// ============================================
// SVG MOTIFS WAX
// ============================================
const WAX_HEADER = `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='none'/><polygon points='40,4 76,40 40,76 4,40' fill='none' stroke='rgba(110, 33, 33, 0.18)' stroke-width='2'/><polygon points='40,16 64,40 40,64 16,40' fill='none' stroke='rgba(255,255,255,0.12)' stroke-width='1.5'/></svg>`;
const WAX_CARD = `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><rect width='60' height='60' fill='none'/><line x1='0' y1='30' x2='60' y2='30' stroke='rgba(0,0,0,0.06)' stroke-width='1'/><line x1='30' y1='0' x2='30' y2='60' stroke='rgba(0,0,0,0.06)' stroke-width='1'/></svg>`;
const WAX_BG = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='none'/><polyline points='0,10 10,0 20,10 30,0 40,10 50,0 60,10 70,0 80,10 90,0 100,10' fill='none' stroke='rgba(224,123,0,0.12)' stroke-width='2'/></svg>`;

const svgBg = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

// ============================================
// COULEURS
// ============================================
const COLORS = {
    orange: "#E07B00", orangeL: "#FFF0D6",
    teal: "#1B7A6F", tealL: "#D6F0ED",
    red: "#C1121F", redL: "#FFE8E9",
    gold: "#F4B400", goldL: "#FFFBE6",
    brown: "#3D1E0A", cream: "#FFF8F0",
    green: "#2A7D4F", greenL: "#DFFAEB",
    gray: "#6C6C6C", grayLight: "#F5F5F5"
};

// ============================================
// DONNÉES DE TEST
// ============================================
let articles = [
    { id: 1, name: "Tissu Wax", emoji: "🧵", stock: 4.5, min: 10, unit: "m", price: 2500, daily_avg_demand: 2, lead_time_days: 7 },
    { id: 2, name: "Fil à coudre", emoji: "🪡", stock: 12, min: 5, unit: "pcs", price: 500, daily_avg_demand: 1, lead_time_days: 5 },
    { id: 3, name: "Boutons", emoji: "🔘", stock: 45, min: 20, unit: "pcs", price: 50, daily_avg_demand: 3, lead_time_days: 10 },
    { id: 4, name: "Pagne simple", emoji: "👗", stock: 8, min: 3, unit: "pcs", price: 5000, daily_avg_demand: 2, lead_time_days: 14 }
];

let products = articles.filter(a => a.price > 0).map(a => ({
    id: a.id,
    name: a.name,
    emoji: a.emoji,
    price: a.price,
    stock: a.stock,
    unit: a.unit,
    min: a.min,
    composition: []
}));

let sales = [];
let currentView = "home";
let selectedArticle = null;
let qty = 1;
let action = "add";
let toast = null;
let search = "";

// Variables formulaire ajout produit
let newProductName = "";
let newProductEmoji = "📦";
let newProductStock = 0;
let newProductMin = 5;
let newProductUnit = "pcs";
let newProductPrice = 0;
let newProductDemand = 1;
let newProductLead = 7;

// ============================================
// RENDU DE LA BARRE DE NAVIGATION
// ============================================
function renderBottomNav() {
    return `
        <button class="tab ${currentView === 'home' ? 'active' : ''}" onclick="currentView='home'; render()">
            <span class="tab-icon">🏠</span>
            <span>Accueil</span>
        </button>
        <button class="tab ${currentView === 'pantry' ? 'active' : ''}" onclick="currentView='pantry'; render()">
            <span class="tab-icon">📦</span>
            <span>Stock</span>
        </button>
        <button class="tab ${currentView === 'products' ? 'active' : ''}" onclick="currentView='products'; render()">
            <span class="tab-icon">🏷️</span>
            <span>Produits</span>
        </button>
        <button class="tab ${currentView === 'sales' ? 'active' : ''}" onclick="currentView='sales'; render()">
            <span class="tab-icon">💰</span>
            <span>Ventes</span>
        </button>
        <button class="tab ${currentView === 'financial' ? 'active' : ''}" onclick="currentView='financial'; render()">
            <span class="tab-icon">📊</span>
            <span>Bilan</span>
        </button>
    `;
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================
function statusInfo(stock, min) {
    if (stock === 0) return { label: "Rupture !", color: COLORS.red, bg: COLORS.redL, border: COLORS.red };
    if (stock < min) return { label: "Stock faible", color: COLORS.orange, bg: COLORS.orangeL, border: COLORS.orange };
    return { label: "En stock ✓", color: COLORS.green, bg: COLORS.greenL, border: COLORS.green };
}

function showToast(msg, isError = false) {
    toast = { msg, isError };
    render();
    setTimeout(() => { toast = null; render(); }, 2800);
}

function applyAction() {
    if (!selectedArticle) return;
    
    const updated = articles.map(a => {
        if (a.id !== selectedArticle.id) return a;
        const ns = action === "add" ? a.stock + qty : Math.max(0, a.stock - qty);
        return { ...a, stock: ns };
    });
    articles = updated;
    selectedArticle = articles.find(a => a.id === selectedArticle.id);
    
    products = articles.filter(a => a.price > 0).map(a => ({
        id: a.id,
        name: a.name,
        emoji: a.emoji,
        price: a.price,
        stock: a.stock,
        unit: a.unit,
        min: a.min,
        composition: []
    }));
    
    showToast(action === "add" ? `✅ +${qty} ${selectedArticle.unit} reçu(s)` : `✅ -${qty} ${selectedArticle.unit} retiré(s)`);
    qty = 1;
    render();
}

function addProduct() {
    if (!newProductName) {
        showToast("❌ Donne un nom au produit !", true);
        return;
    }
    
    const newArticle = {
        id: Date.now(),
        name: newProductName,
        emoji: newProductEmoji,
        stock: parseFloat(newProductStock),
        min: parseFloat(newProductMin),
        unit: newProductUnit,
        price: parseFloat(newProductPrice),
        daily_avg_demand: parseFloat(newProductDemand) || 1,
        lead_time_days: parseInt(newProductLead) || 7
    };
    
    articles.push(newArticle);
    products = articles.filter(a => a.price > 0).map(a => ({
        id: a.id,
        name: a.name,
        emoji: a.emoji,
        price: a.price,
        stock: a.stock,
        unit: a.unit,
        min: a.min,
        composition: []
    }));
    
    showToast(`✅ "${newProductName}" ajouté !`);
    
    newProductName = "";
    newProductEmoji = "📦";
    newProductStock = 0;
    newProductMin = 5;
    newProductUnit = "pcs";
    newProductPrice = 0;
    newProductDemand = 1;
    newProductLead = 7;
    
    currentView = "pantry";
    render();
}

function recordSale() {
    const productSelect = document.getElementById('saleProductSelect');
    const qtyInput = document.getElementById('saleQty');
    
    if (!productSelect || !productSelect.value) {
        showToast("❌ Choisis un produit", true);
        return;
    }
    
    const option = productSelect.options[productSelect.selectedIndex];
    const productId = parseInt(productSelect.value);
    const product = articles.find(a => a.id === productId);
    const quantity = parseInt(qtyInput.value);
    
    if (!product || product.stock < quantity) {
        showToast("❌ Stock insuffisant", true);
        return;
    }
    
    sales.unshift({
        id: Date.now(),
        product_id: product.id,
        product_name: product.name,
        quantity: quantity,
        total: product.price * quantity,
        date: new Date().toISOString()
    });
    
    product.stock -= quantity;
    
    products = articles.filter(a => a.price > 0).map(a => ({
        id: a.id,
        name: a.name,
        emoji: a.emoji,
        price: a.price,
        stock: a.stock,
        unit: a.unit,
        min: a.min,
        composition: []
    }));
    
    showToast(`💰 Vente de ${quantity} ${product.unit} enregistrée`);
    render();
}

function editArticle(id) {
    const article = articles.find(a => a.id === id);
    const newQty = prompt(`Nouvelle quantité pour ${article.name}:`, article.stock);
    if (newQty !== null && !isNaN(parseFloat(newQty))) {
        article.stock = parseFloat(newQty);
        render();
    }
}

function editThreshold(article) {
    const newThreshold = prompt(`Nouveau seuil pour ${article.name} (actuel: ${article.min}):`, article.min);
    if (newThreshold !== null && !isNaN(parseFloat(newThreshold))) {
        article.min = parseFloat(newThreshold);
        render();
    }
}

function editPrice(article) {
    const newPrice = prompt(`Nouveau prix pour ${article.name} (actuel: ${article.price} FCFA):`, article.price);
    if (newPrice !== null && !isNaN(parseFloat(newPrice))) {
        article.price = parseFloat(newPrice);
        products = articles.filter(a => a.price > 0).map(a => ({
            id: a.id,
            name: a.name,
            emoji: a.emoji,
            price: a.price,
            stock: a.stock,
            unit: a.unit,
            min: a.min,
            composition: []
        }));
        render();
    }
}

function objToStyle(obj) {
    return Object.entries(obj).map(([k, v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${v};`).join(' ');
}

// ============================================
// RENDU DES VUES
// ============================================
// Remplacer le render() existant par celui-ci
function render() {
    const appContent = document.getElementById('app-content');
    const tabsDiv = document.getElementById('tabs');
    
    if (!appContent) return;
    
    const alerts = articles.filter(a => a.stock < a.min);
    const totalStockValue = articles.reduce((sum, a) => sum + (a.stock * a.price), 0);
    const totalSales = sales.reduce((sum, s) => sum + s.total, 0);
    
    // Rendre le contenu
    if (currentView === "home") {
        appContent.innerHTML = renderHomeView(alerts, articles, totalStockValue, totalSales);
    } else if (currentView === "pantry") {
        appContent.innerHTML = renderPantryView();
    } else if (currentView === "products") {
        appContent.innerHTML = renderProductsView();
    } else if (currentView === "sales") {
        appContent.innerHTML = renderSalesView();
    } else if (currentView === "financial") {
        appContent.innerHTML = renderFinancialView(totalSales, totalStockValue);
    } else if (currentView === "detail" && selectedArticle) {
        appContent.innerHTML = renderDetailView();
    } else if (currentView === "add") {
        appContent.innerHTML = renderAddProductView();
    }
    
    // Rendre la barre de navigation
    if (!["detail", "add"].includes(currentView)) {
        tabsDiv.innerHTML = renderBottomNav();
    } else {
        tabsDiv.innerHTML = '';
    }
    
    // Afficher le toast si présent
    if (toast) {
        const toastDiv = document.createElement('div');
        toastDiv.className = `toast ${toast.isError ? 'error' : ''}`;
        toastDiv.textContent = toast.msg;
        toastDiv.style.position = 'fixed';
        toastDiv.style.top = '20px';
        toastDiv.style.left = '50%';
        toastDiv.style.transform = 'translateX(-50%)';
        toastDiv.style.zIndex = '2000';
        appContent.appendChild(toastDiv);
        setTimeout(() => {
            if (toastDiv.parentNode) toastDiv.remove();
        }, 2800);
    }
}
function renderHomeView(alerts, articles, totalStockValue, totalSales) {
    return `
        <div class="header">
            <div class="header-title">STOCKR</div>
            <div class="header-subtitle">Gestion de stock simplifiée</div>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">📦</div>
                    <div class="stat-value">${articles.length}</div>
                    <div class="stat-label">Produits</div>
                </div>
                <div class="stat-card" style="background: ${alerts.length > 0 ? 'rgba(244,180,0,0.35)' : 'rgba(255,255,255,0.15)'}">
                    <div class="stat-icon">⚠️</div>
                    <div class="stat-value" style="color: ${alerts.length > 0 ? COLORS.gold : 'white'}">${alerts.length}</div>
                    <div class="stat-label">À commander</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">💰</div>
                    <div class="stat-value">${totalSales.toLocaleString()}</div>
                    <div class="stat-label">CA total</div>
                </div>
            </div>
        </div>
        
        <div class="container">
            ${alerts.length > 0 ? `
                <div class="alert-banner" onclick="currentView='pantry'; render()">
                    <div class="alert-icon">🛒</div>
                    <div class="alert-content">
                        <div class="alert-title">${alerts.length} produit(s) à commander !</div>
                        <div class="alert-products">${alerts.map(a => a.name).join(" · ")}</div>
                    </div>
                    <div class="alert-arrow">›</div>
                </div>
            ` : ''}
            
            <div class="section-title">
                <div class="section-line"></div>
                <div class="section-text">Que faire ?</div>
                <div class="section-line" style="background: linear-gradient(to left, ${COLORS.orange}, transparent);"></div>
            </div>
            
            <div class="actions-grid">
                <button class="action-btn" style="background: linear-gradient(135deg, ${COLORS.teal}, #0F5047)" onclick="currentView='pantry'; render()">
                    <div class="action-icon">📋</div>
                    <div class="action-label">Voir mon stock</div>
                    <div class="action-sub">Tous les produits</div>
                </button>
                <button class="action-btn" style="background: linear-gradient(135deg, ${COLORS.green}, #1A5C35)" onclick="currentView='products'; render()">
                    <div class="action-icon">🏷️</div>
                    <div class="action-label">Mes produits</div>
                    <div class="action-sub">Produits finis</div>
                </button>
                <button class="action-btn" style="background: linear-gradient(135deg, ${COLORS.orange}, #B85C00)" onclick="currentView='sales'; render()">
                    <div class="action-icon">💰</div>
                    <div class="action-label">Ventes</div>
                    <div class="action-sub">Enregistrer</div>
                </button>
                <button class="action-btn" style="background: linear-gradient(135deg, ${COLORS.red}, #8B0A12)" onclick="currentView='financial'; render()">
                    <div class="action-icon">📊</div>
                    <div class="action-label">Bilan</div>
                    <div class="action-sub">Statistiques</div>
                </button>
            </div>
            
            <div class="section-title">
                <div class="section-line" style="background: linear-gradient(to right, ${COLORS.teal}, transparent);"></div>
                <div class="section-text" style="color: ${COLORS.teal}">Produits récents</div>
                <div class="section-line" style="background: linear-gradient(to left, ${COLORS.teal}, transparent);"></div>
            </div>
            
            ${articles.slice(0, 4).map(article => {
                const s = statusInfo(article.stock, article.min);
                return `
                    <div class="card" onclick="selectedArticle=${JSON.stringify(article).replace(/"/g, '&quot;')}; currentView='detail'; render()" style="cursor: pointer; border-left: 5px solid ${s.border};">
                        <div style="display: flex; align-items: center; gap: 14px;">
                            <div style="font-size: 30px;">${article.emoji}</div>
                            <div style="flex: 1;">
                                <div style="font-weight: 800; color: ${COLORS.brown};">${article.name}</div>
                                <div style="font-size: 13px; color: #888;">${article.stock} ${article.unit}</div>
                            </div>
                            <div class="badge ${article.stock === 0 ? 'badge-danger' : article.stock < article.min ? 'badge-warning' : 'badge-success'}">${s.label}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderPantryView() {
    const filtered = articles.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
    
    return `
        <div style="background: white; background-image: ${svgBg(WAX_CARD)}; background-size: 60px 60px; padding: 50px 16px 16px; border-bottom: 3px solid ${COLORS.gold};">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <button class="back-btn" onclick="currentView='home'; render()">←</button>
                <div style="font-family: 'Fraunces', serif; font-size: 22px; font-weight: 900; color: ${COLORS.brown};">Mon stock</div>
                <button onclick="currentView='add'; render()" style="margin-left: auto; background: ${COLORS.teal}; color: white; border-radius: 14px; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: none; cursor: pointer;">+</button>
            </div>
            <input type="text" value="${search}" oninput="search=this.value; render()" placeholder="🔍 Chercher un article..." class="input" style="border: 2px solid #D0C0A8;">
        </div>
        
        <div class="container">
            ${["🔴 Rupture", "🟡 Stock faible", "🟢 En stock"].map((section, si) => {
                const sp = filtered.filter(p => si === 0 ? p.stock === 0 : si === 1 ? p.stock > 0 && p.stock < p.min : p.stock >= p.min);
                if (!sp.length) return '';
                const sectionColor = [COLORS.red, COLORS.orange, COLORS.green][si];
                return `
                    <div style="margin-bottom: 20px;">
                        <div style="font-size: 12px; font-weight: 800; color: ${sectionColor}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${section}</div>
                        ${sp.map(p => {
                            const s = statusInfo(p.stock, p.min);
                            return `
                                <div class="card" onclick="selectedArticle=${JSON.stringify(p).replace(/"/g, '&quot;')}; currentView='detail'; render()" style="cursor: pointer; border-left: 5px solid ${s.border};">
                                    <div style="display: flex; align-items: center; gap: 14px;">
                                        <div style="width: 46px; height: 46px; border-radius: 14px; background: ${s.bg}; display: flex; align-items: center; justify-content: center; font-size: 26px;">${p.emoji}</div>
                                        <div style="flex: 1;">
                                            <div style="font-weight: 800; color: ${COLORS.brown};">${p.name}</div>
                                            <div style="font-size: 13px; color: #888;">${p.stock} ${p.unit} · min ${p.min}</div>
                                        </div>
                                        <div style="color: ${s.color}; font-weight: 900; font-size: 22px;">›</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderProductsView() {
    const productList = articles.filter(a => a.price > 0);
    
    return `
        <div style="background: white; background-image: ${svgBg(WAX_CARD)}; background-size: 60px 60px; padding: 50px 16px 16px; border-bottom: 3px solid ${COLORS.gold};">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <button class="back-btn" onclick="currentView='home'; render()">←</button>
                <div style="font-family: 'Fraunces', serif; font-size: 22px; font-weight: 900; color: ${COLORS.brown};">Mes produits</div>
                <button onclick="currentView='add'; render()" style="margin-left: auto; background: ${COLORS.teal}; color: white; border-radius: 14px; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; font-size: 24px; border: none; cursor: pointer;">+</button>
            </div>
        </div>
        
        <div class="container">
            ${productList.length === 0 ? `
                <div class="empty-state">
                    <div class="empty-icon">🏷️</div>
                    <div class="empty-title">Aucun produit</div>
                    <div class="empty-text">Créez vos premiers produits à vendre</div>
                    <button class="btn btn-primary" onclick="currentView='add'; render()">+ Ajouter un produit</button>
                </div>
            ` : productList.map(p => {
                const s = statusInfo(p.stock, p.min);
                return `
                    <div class="card" onclick="selectedArticle=${JSON.stringify(p).replace(/"/g, '&quot;')}; currentView='detail'; render()" style="cursor: pointer; border-left: 5px solid ${s.border};">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; gap: 14px; align-items: center;">
                                <div style="font-size: 30px;">${p.emoji}</div>
                                <div>
                                    <div style="font-weight: 800; color: ${COLORS.brown};">${p.name}</div>
                                    <div style="font-size: 12px; color: #888;">${p.stock} ${p.unit}</div>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: 900; color: ${COLORS.green};">${p.price.toLocaleString()} FCFA</div>
                                <div class="badge ${p.stock === 0 ? 'badge-danger' : p.stock < p.min ? 'badge-warning' : 'badge-success'}" style="margin-top: 4px;">${s.label}</div>
                            </div>
                        </div>
                        <div class="progress-bar" style="margin-top: 12px;">
                            <div class="progress-fill" style="width: ${Math.min(100, (p.stock / (p.min * 2)) * 100)}%; background: ${s.color};"></div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderSalesView() {
    const totalRevenue = sales.reduce((sum, s) => sum + s.total, 0);
    const totalQuantity = sales.reduce((sum, s) => sum + s.quantity, 0);
    
    return `
        <div style="background: linear-gradient(145deg, ${COLORS.orange}, #B85C00); background-image: ${svgBg(WAX_HEADER)}; background-size: 80px 80px, cover; padding: 44px 20px 28px; border-radius: 0 0 32px 32px;">
            <button class="back-btn" onclick="currentView='home'; render()">←</button>
            <div style="font-family: 'Fraunces', serif; font-size: 26px; color: white; font-weight: 900;">💰 Ventes</div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 4px;">Enregistre tes ventes</div>
        </div>
        
        <div class="container">
            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 28px;">💰</div>
                    <div style="font-size: 20px; font-weight: bold; color: ${COLORS.orange};">${totalRevenue.toLocaleString()} FCFA</div>
                    <div style="font-size: 12px; color: #888;">Chiffre d'affaires</div>
                </div>
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 28px;">📦</div>
                    <div style="font-size: 20px; font-weight: bold; color: ${COLORS.teal};">${totalQuantity}</div>
                    <div style="font-size: 12px; color: #888;">Articles vendus</div>
                </div>
            </div>
            
            <div class="card">
                <div class="input-group" style="margin-bottom: 12px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 6px;">Produit</label>
                    <select id="saleProductSelect" class="input">
                        <option value="">-- Sélectionner un produit --</option>
                        ${articles.filter(a => a.stock > 0 && a.price > 0).map(p => `
                            <option value="${p.id}" data-price="${p.price}" data-max="${p.stock}" data-name="${p.name}" data-unit="${p.unit}">${p.name} (${p.stock} dispo - ${p.price} FCFA)</option>
                        `).join('')}
                    </select>
                </div>
                <div class="input-group" style="margin-bottom: 12px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 6px;">Quantité</label>
                    <input type="number" id="saleQty" value="1" min="1" step="1" class="input">
                </div>
                <button class="btn btn-primary" style="width: 100%;" onclick="recordSale()">✅ Enregistrer la vente</button>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="margin-bottom: 12px; font-size: 16px;">Historique des ventes</h3>
                ${sales.length === 0 ? '<div class="empty-state"><div class="empty-icon">💰</div><div class="empty-text">Aucune vente enregistrée</div></div>' : sales.map(sale => `
                    <div class="card">
                        <div style="display: flex; justify-content: space-between;">
                            <span style="font-weight: 800;">${sale.product_name}</span>
                            <span style="background: ${COLORS.tealL}; padding: 4px 8px; border-radius: 20px; font-size: 12px;">x${sale.quantity}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 14px; color: #888;">
                            <span>${sale.total.toLocaleString()} FCFA</span>
                            <span>${new Date(sale.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderFinancialView(totalSales, totalStockValue) {
    const today = new Date().toDateString();
    const todaySales = sales.filter(s => new Date(s.date).toDateString() === today);
    const weekSales = sales.filter(s => {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return new Date(s.date) >= weekAgo;
    });
    const monthSales = sales.filter(s => {
        const monthAgo = new Date();
        monthAgo.setDate(monthAgo.getDate() - 30);
        return new Date(s.date) >= monthAgo;
    });
    
    const todayRevenue = todaySales.reduce((sum, s) => sum + s.total, 0);
    const weekRevenue = weekSales.reduce((sum, s) => sum + s.total, 0);
    const monthRevenue = monthSales.reduce((sum, s) => sum + s.total, 0);
    const avgTicket = sales.length > 0 ? Math.round(totalSales / sales.length) : 0;
    
    const productStats = {};
    sales.forEach(sale => {
        if (!productStats[sale.product_name]) productStats[sale.product_name] = { quantity: 0, revenue: 0 };
        productStats[sale.product_name].quantity += sale.quantity;
        productStats[sale.product_name].revenue += sale.total;
    });
    const topProducts = Object.entries(productStats).sort((a, b) => b[1].revenue - a[1].revenue).slice(0, 5);
    
    return `
        <div style="background: linear-gradient(145deg, ${COLORS.teal}, #0F5047); background-image: ${svgBg(WAX_HEADER)}; background-size: 80px 80px, cover; padding: 44px 20px 28px; border-radius: 0 0 32px 32px;">
            <button class="back-btn" onclick="currentView='home'; render()">←</button>
            <div style="font-family: 'Fraunces', serif; font-size: 26px; color: white; font-weight: 900;">📊 Bilan financier</div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 4px;">Vue d'ensemble</div>
        </div>
        
        <div class="container">
            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px;">💰</div>
                    <div style="font-size: 18px; font-weight: bold; color: ${COLORS.orange};">${todayRevenue.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px;">Aujourd'hui</div>
                </div>
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px;">📅</div>
                    <div style="font-size: 18px; font-weight: bold; color: ${COLORS.teal};">${weekRevenue.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px;">Cette semaine</div>
                </div>
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 24px;">📆</div>
                    <div style="font-size: 18px; font-weight: bold; color: ${COLORS.green};">${monthRevenue.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px;">Ce mois</div>
                </div>
            </div>
            
            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 20px; font-weight: bold; color: ${COLORS.brown};">${totalSales.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px; color: #888;">Total ventes</div>
                </div>
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 20px; font-weight: bold; color: ${COLORS.brown};">${avgTicket.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px; color: #888;">Ticket moyen</div>
                </div>
                <div class="card" style="flex: 1; text-align: center;">
                    <div style="font-size: 20px; font-weight: bold; color: ${COLORS.brown};">${totalStockValue.toLocaleString()} FCFA</div>
                    <div style="font-size: 11px; color: #888;">Valeur stock</div>
                </div>
            </div>
            
            <div class="card">
                <h3 style="margin-bottom: 12px; font-size: 16px;">🏆 Top produits vendus</h3>
                ${topProducts.length === 0 ? '<div style="color: #888;">Aucune vente</div>' : topProducts.map(([name, stats], idx) => `
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                        <span>${idx + 1}. ${name}</span>
                        <span style="color: ${COLORS.orange};">${stats.revenue.toLocaleString()} FCFA</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="card">
                <h3 style="margin-bottom: 12px; font-size: 16px;">📦 Articles bas</h3>
                ${articles.filter(a => a.stock < a.min).length === 0 ? '<div style="color: #888;">Aucun article bas</div>' : articles.filter(a => a.stock < a.min).map(a => `
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                        <span>${a.name}</span>
                        <span style="color: ${COLORS.red};">${a.stock} / ${a.min}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderDetailView() {
    if (!selectedArticle) return '';
    
    const s = statusInfo(selectedArticle.stock, selectedArticle.min);
    const pct = Math.min(100, Math.round((selectedArticle.stock / Math.max(selectedArticle.min * 2, 1)) * 100));
    
    return `
        <div style="background: linear-gradient(145deg, ${s.color}DD, ${s.color}99); background-image: ${svgBg(WAX_HEADER)}; background-size: 80px 80px, cover; padding: 44px 20px 28px; border-radius: 0 0 32px 32px;">
            <button class="back-btn" onclick="currentView='pantry'; render()">←</button>
            <div style="text-align: center;">
                <div style="width: 90px; height: 90px; border-radius: 28px; background: rgba(255,255,255,0.25); margin: 0 auto 10px; display: flex; align-items: center; justify-content: center; font-size: 52px; border: 3px solid rgba(255,255,255,0.3);">${selectedArticle.emoji}</div>
                <div style="font-family: 'Fraunces', serif; font-size: 26px; color: white; font-weight: 900;">${selectedArticle.name}</div>
                <div style="display: inline-block; background: rgba(255,255,255,0.25); color: white; border-radius: 30px; padding: 4px 16px; font-size: 13px; font-weight: 800; margin-top: 8px; border: 2px solid rgba(255,255,255,0.4);">${s.label}</div>
            </div>
        </div>
        
        <div class="container">
            <div class="card" style="text-align: center;">
                <div style="font-size: 11px; font-weight: 800; color: #aaa; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px;">Stock actuel</div>
                <div style="font-family: 'Fraunces', serif; font-size: 64px; font-weight: 900; color: ${s.color}; line-height: 1;">${selectedArticle.stock}</div>
                <div style="font-size: 16px; color: ${COLORS.brown}; font-weight: 700;">${selectedArticle.unit}</div>
                <div class="progress-bar" style="margin: 14px 0 6px;">
                    <div class="progress-fill" style="width: ${pct}%; background: ${s.color};"></div>
                </div>
                <div style="font-size: 12px; color: #aaa; font-weight: 600;">Stock minimum : ${selectedArticle.min} ${selectedArticle.unit}</div>
            </div>
            
            <div class="card">
                <div style="font-family: 'Fraunces', serif; font-size: 18px; font-weight: 900; color: ${COLORS.brown}; margin-bottom: 14px;">Modifier le stock</div>
                <div style="display: flex; gap: 10px; margin-bottom: 16px;">
                    <button onclick="action='add'; render()" style="flex:1; background: ${action === 'add' ? COLORS.greenL : '#F5F0E8'}; border: ${action === 'add' ? `3px solid ${COLORS.green}` : '2px solid transparent'}; border-radius: 18px; padding: 14px 8px; cursor: pointer;">
                        <div style="font-size: 26px;">📥</div>
                        <div style="font-size: 12px; font-weight: 800; color: ${action === 'add' ? COLORS.green : '#aaa'};">J'ai reçu</div>
                    </button>
                    <button onclick="action='remove'; render()" style="flex:1; background: ${action === 'remove' ? COLORS.orangeL : '#F5F0E8'}; border: ${action === 'remove' ? `3px solid ${COLORS.orange}` : '2px solid transparent'}; border-radius: 18px; padding: 14px 8px; cursor: pointer;">
                        <div style="font-size: 26px;">📤</div>
                        <div style="font-size: 12px; font-weight: 800; color: ${action === 'remove' ? COLORS.orange : '#aaa'};">J'ai vendu</div>
                    </button>
                </div>
                
                <div class="qty-selector">
                    <button class="qty-btn" onclick="qty=Math.max(1,qty-1); render()">−</button>
                    <div class="qty-value">${qty}</div>
                    <button class="qty-btn" onclick="qty=qty+1; render()">+</button>
                </div>
                
                <div class="qty-chips">
                    ${[1, 5, 10, 25, 50, 100].map(n => `
                        <button class="qty-chip ${qty === n ? 'active' : ''}" onclick="qty=${n}; render()">${n}</button>
                    `).join('')}
                </div>
                
                <button class="btn btn-primary" style="width: 100%;" onclick="applyAction(); render()">
                    ${action === 'add' ? `✅ Ajouter ${qty} au stock` : `✅ Retirer ${qty} du stock`}
                </button>
                
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #eee;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>💰 Prix unitaire</span>
                        <span style="font-weight: 800; color: ${COLORS.green};">${selectedArticle.price.toLocaleString()} FCFA</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>⚙️ Seuil d'alerte</span>
                        <span style="font-weight: 800; cursor: pointer;" onclick="editThreshold(selectedArticle); render()">${selectedArticle.min} ${selectedArticle.unit} ✏️</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>📈 Demande journalière</span>
                        <span>${selectedArticle.daily_avg_demand || 1} ${selectedArticle.unit}/jour</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderAddProductView() {
    const emojis = ["📦", "🧵", "🪡", "🔘", "👗", "🧥", "👕", "👖", "🧣", "🧤", "🧦", "👜", "👛", "🧢", "👒", "💍"];
    
    return `
        <div style="background: linear-gradient(135deg, ${COLORS.red}, #8B0A12); background-image: ${svgBg(WAX_HEADER)}; background-size: 80px 80px, cover; padding: 44px 20px 24px; border-radius: 0 0 32px 32px;">
            <button class="back-btn" onclick="currentView='home'; render()">←</button>
            <div style="font-family: 'Fraunces', serif; font-size: 26px; color: white; font-weight: 900;">🆕 Nouveau produit</div>
            <div style="font-size: 13px; color: rgba(255,255,255,0.7); margin-top: 4px;">Ajoute un article à ton catalogue</div>
        </div>
        
        <div class="container">
            <div class="card">
                <div style="margin-bottom: 18px;">
                    <div style="font-size: 13px; font-weight: 800; color: #888; margin-bottom: 8px;">Icône du produit</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${emojis.map(e => `
                            <button onclick="newProductEmoji='${e}'; render()" style="width: 46px; height: 46px; border: ${newProductEmoji === e ? `3px solid ${COLORS.teal}` : '2px solid #E8D9C8'}; border-radius: 14px; background: ${newProductEmoji === e ? COLORS.tealL : COLORS.cream}; cursor: pointer; font-size: 22px;">${e}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 14px;">
                    <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Nom du produit *</label>
                    <input type="text" value="${newProductName}" oninput="newProductName=this.value" placeholder="ex: Pagne wax, Tissu..." class="input">
                </div>
                
                <div style="margin-bottom: 14px;">
                    <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Unité de mesure</label>
                    <input type="text" value="${newProductUnit}" oninput="newProductUnit=this.value" placeholder="ex: m, kg, pcs, bouteille..." class="input">
                </div>
                
                <div style="display: flex; gap: 12px; margin-bottom: 14px;">
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Quantité en stock</label>
                        <input type="number" value="${newProductStock}" oninput="newProductStock=this.value" placeholder="0" class="input" step="0.5">
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Seuil d'alerte</label>
                        <input type="number" value="${newProductMin}" oninput="newProductMin=this.value" placeholder="5" class="input" step="0.5">
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px; margin-bottom: 14px;">
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Demande journalière</label>
                        <input type="number" value="${newProductDemand}" oninput="newProductDemand=this.value" placeholder="1" class="input" step="0.5">
                    </div>
                    <div style="flex: 1;">
                        <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Délai livraison (jours)</label>
                        <input type="number" value="${newProductLead}" oninput="newProductLead=this.value" placeholder="7" class="input">
                    </div>
                </div>
                
                <div style="margin-bottom: 14px;">
                    <label style="display: block; font-size: 13px; font-weight: 800; color: ${COLORS.brown}; margin-bottom: 6px;">Prix de vente (FCFA)</label>
                    <input type="number" value="${newProductPrice}" oninput="newProductPrice=this.value" placeholder="0" class="input" step="100">
                </div>
                
                <button class="btn btn-primary" style="width: 100%; margin-top: 6px;" onclick="addProduct()">✅ Ajouter ce produit</button>
            </div>
        </div>
    `;
}

function renderBottomNav() {
    return `
        <div class="tabs">
            <button class="tab ${currentView === 'home' ? 'active' : ''}" onclick="currentView='home'; render()">
                <span class="tab-icon">🏠</span>
                <span>Accueil</span>
            </button>
            <button class="tab ${currentView === 'pantry' ? 'active' : ''}" onclick="currentView='pantry'; render()">
                <span class="tab-icon">📦</span>
                <span>Stock</span>
            </button>
            <button class="tab ${currentView === 'products' ? 'active' : ''}" onclick="currentView='products'; render()">
                <span class="tab-icon">🏷️</span>
                <span>Produits</span>
            </button>
            <button class="tab ${currentView === 'sales' ? 'active' : ''}" onclick="currentView='sales'; render()">
                <span class="tab-icon">💰</span>
                <span>Ventes</span>
            </button>
            <button class="tab ${currentView === 'financial' ? 'active' : ''}" onclick="currentView='financial'; render()">
                <span class="tab-icon">📊</span>
                <span>Bilan</span>
            </button>
        </div>
    `;
}

// ============================================
// DÉMARRAGE
// ============================================
function init() {
    const appDiv = document.getElementById('app');
    if (!appDiv) {
        console.error('❌ <div id="app"> introuvable');
        return;
    }
    render();
    
    window.currentView = currentView;
    window.render = render;
    window.selectedArticle = selectedArticle;
    window.qty = qty;
    window.action = action;
    window.applyAction = applyAction;
    window.showToast = showToast;
    window.recordSale = recordSale;
    window.addProduct = addProduct;
    window.editArticle = editArticle;
    window.editThreshold = editThreshold;
    window.editPrice = editPrice;
    window.search = search;
    window.newProductName = newProductName;
    window.newProductEmoji = newProductEmoji;
    window.newProductStock = newProductStock;
    window.newProductMin = newProductMin;
    window.newProductUnit = newProductUnit;
    window.newProductPrice = newProductPrice;
    window.newProductDemand = newProductDemand;
    window.newProductLead = newProductLead;
}

init();