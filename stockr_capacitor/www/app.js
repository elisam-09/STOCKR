// =============================================
// STOCKR - VERSION AVEC MODALES MAGNIFIQUES
// =============================================

console.log('✅ app.js chargé');

let articles = [
    { id: 1, name: 'Tissu Wax', quantity: 4.5, unit: 'm', is_low: true, reorder_point: 10, daily_avg_demand: 2, lead_time_days: 7 },
    { id: 2, name: 'Fil à coudre', quantity: 12, unit: 'pcs', is_low: false, reorder_point: 5, daily_avg_demand: 1, lead_time_days: 5 },
    { id: 3, name: 'Boutons', quantity: 45, unit: 'pcs', is_low: false, reorder_point: 20, daily_avg_demand: 3, lead_time_days: 10 }
];

// =============================================
// MODALE AJOUT ARTICLE
// =============================================
function showAddArticleModal() {
    // Créer la modale
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">➕ Ajouter un article</div>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <label>Nom de l'article</label>
                    <input type="text" id="articleName" class="input" placeholder="Ex: Tissu Wax" autocomplete="off">
                </div>
                
                <div class="input-row">
                    <div class="input-group">
                        <label>Quantité</label>
                        <input type="number" id="articleQty" class="input" placeholder="0" step="0.5" value="0">
                    </div>
                    <div class="input-group">
                        <label>Unité</label>
                        <select id="articleUnit" class="input select">
                            <option value="pcs">pièces (pcs)</option>
                            <option value="m">mètres (m)</option>
                            <option value="kg">kilos (kg)</option>
                            <option value="L">litres (L)</option>
                            <option value="bouteille">bouteilles</option>
                            <option value="sac">sacs</option>
                        </select>
                    </div>
                </div>
                
                <div class="input-row">
                    <div class="input-group">
                        <label>Demande journalière</label>
                        <input type="number" id="articleDemand" class="input" placeholder="1" step="0.5" value="1">
                        <small>Quantité vendue par jour en moyenne</small>
                    </div>
                    <div class="input-group">
                        <label>Délai livraison (jours)</label>
                        <input type="number" id="articleLead" class="input" placeholder="7" value="7">
                        <small>Temps pour recevoir une commande</small>
                    </div>
                </div>
                
                <div class="input-group">
                    <label>Seuil d'alerte personnalisé (optionnel)</label>
                    <input type="number" id="articleThreshold" class="input" placeholder="Laisser vide pour calcul automatique" step="0.5">
                    <small>Laisse vide pour utiliser: demande × délai</small>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancelBtn">Annuler</button>
                <button class="btn btn-primary" id="saveBtn">Ajouter l'article</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Animation d'entrée
    setTimeout(() => modal.style.opacity = '1', 10);
    
    // Fermeture
    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.querySelector('#cancelBtn').onclick = () => modal.remove();
    
    // Sauvegarde
    modal.querySelector('#saveBtn').onclick = () => {
        const name = modal.querySelector('#articleName').value;
        const quantity = parseFloat(modal.querySelector('#articleQty').value);
        const unit = modal.querySelector('#articleUnit').value;
        const dailyDemand = parseFloat(modal.querySelector('#articleDemand').value);
        const leadTime = parseInt(modal.querySelector('#articleLead').value);
        const threshold = parseFloat(modal.querySelector('#articleThreshold').value);
        
        if (!name || isNaN(quantity)) {
            alert('Veuillez remplir le nom et la quantité');
            return;
        }
        
        const reorderPoint = threshold || (dailyDemand * leadTime);
        
        articles.push({
            id: Date.now(),
            name,
            quantity,
            unit,
            daily_avg_demand: dailyDemand || 1,
            lead_time_days: leadTime || 7,
            reorder_point: reorderPoint,
            is_low: quantity <= reorderPoint
        });
        
        modal.remove();
        renderStock();
    };
    
    // Focus sur le premier champ
    modal.querySelector('#articleName').focus();
}

// =============================================
// MODALE AJOUT PRODUIT
// =============================================
function showAddProductModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">🏷️ Ajouter un produit</div>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <label>Nom du produit</label>
                    <input type="text" id="productName" class="input" placeholder="Ex: Pagne simple">
                </div>
                
                <div class="input-group">
                    <label>Prix de vente (FCFA)</label>
                    <input type="number" id="productPrice" class="input" placeholder="0" step="100" value="0">
                </div>
                
                <div class="input-group">
                    <label>Composition</label>
                    <div id="compositionList"></div>
                    <button id="addCompositionBtn" class="btn btn-outline btn-sm" style="margin-top: 8px;">+ Ajouter un article</button>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancelBtn">Annuler</button>
                <button class="btn btn-primary" id="saveBtn">Ajouter le produit</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    let composition = [];
    const compositionDiv = modal.querySelector('#compositionList');
    
    const updateCompositionDisplay = () => {
        if (composition.length === 0) {
            compositionDiv.innerHTML = '<div style="color: var(--color-text-secondary); font-size: 14px; padding: 12px; text-align: center; background: var(--color-bg); border-radius: var(--radius-md);">Aucun article. Cliquez sur + pour ajouter</div>';
            return;
        }
        
        compositionDiv.innerHTML = composition.map((comp, idx) => `
            <div class="composition-row" data-idx="${idx}">
                <select data-idx="${idx}" class="comp-article input" style="flex: 2;">
                    ${articles.map(a => `<option value="${a.id}" ${comp.articleId === a.id ? 'selected' : ''}>${a.name} (${a.unit})</option>`).join('')}
                </select>
                <input type="number" data-idx="${idx}" class="comp-qty input" placeholder="Qté" value="${comp.qty}" step="0.5" style="flex: 1;">
                <button data-idx="${idx}" class="remove-comp">🗑️</button>
            </div>
        `).join('');
        
        // Écouteurs
        document.querySelectorAll('.comp-article').forEach(select => {
            select.addEventListener('change', (e) => {
                composition[parseInt(e.target.dataset.idx)].articleId = parseInt(e.target.value);
            });
        });
        document.querySelectorAll('.comp-qty').forEach(input => {
            input.addEventListener('change', (e) => {
                composition[parseInt(e.target.dataset.idx)].qty = parseFloat(e.target.value) || 0;
            });
        });
        document.querySelectorAll('.remove-comp').forEach(btn => {
            btn.addEventListener('click', (e) => {
                composition.splice(parseInt(e.target.dataset.idx), 1);
                updateCompositionDisplay();
            });
        });
    };
    
    modal.querySelector('#addCompositionBtn').addEventListener('click', () => {
        if (articles.length === 0) {
            alert('Ajoutez d\'abord des articles dans le stock');
            return;
        }
        composition.push({ articleId: articles[0].id, qty: 1 });
        updateCompositionDisplay();
    });
    
    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.querySelector('#cancelBtn').onclick = () => modal.remove();
    
    modal.querySelector('#saveBtn').onclick = () => {
        const name = modal.querySelector('#productName').value;
        const price = parseFloat(modal.querySelector('#productPrice').value);
        
        if (!name || isNaN(price)) {
            alert('Veuillez remplir le nom et le prix');
            return;
        }
        
        const productComposition = composition.filter(c => c.qty > 0).map(c => ({
            article_id: c.articleId,
            quantity_used: c.qty
        }));
        
        // Calculer le stock productible
        let producibleQuantity = Infinity;
        productComposition.forEach(comp => {
            const article = articles.find(a => a.id === comp.article_id);
            if (article) {
                const possible = Math.floor(article.quantity / comp.quantity_used);
                producibleQuantity = Math.min(producibleQuantity, possible);
            }
        });
        producibleQuantity = producibleQuantity === Infinity ? 0 : producibleQuantity;
        
        products.push({
            id: Date.now(),
            name,
            price,
            producible_quantity: producibleQuantity,
            composition: productComposition.map(c => ({
                article: articles.find(a => a.id === c.article_id),
                quantity_used: c.quantity_used
            }))
        });
        
        modal.remove();
        renderProducts();
    };
    
    updateCompositionDisplay();
}

// =============================================
// MODALE ÉDITION SEUIL
// =============================================
function showEditThresholdModal(article) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">⚙️ Modifier le seuil</div>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="info-box">
                    <div><strong>${article.name}</strong></div>
                    <div>Stock actuel: <strong>${article.quantity} ${article.unit}</strong></div>
                    <div>Seuil actuel: <strong>${article.reorder_point} ${article.unit}</strong></div>
                    <div class="info-note">L'alerte s'active quand stock ≤ seuil</div>
                </div>
                <div class="input-group">
                    <label>Nouveau seuil</label>
                    <input type="number" id="newThreshold" class="input" value="${article.reorder_point}" step="0.5">
                </div>
                <div class="input-group">
                    <label>Ou utiliser la formule</label>
                    <div class="input-row">
                        <input type="number" id="newDemand" class="input" placeholder="Demande journalière" value="${article.daily_avg_demand || 1}" step="0.5">
                        <span style="padding: 0 8px;">×</span>
                        <input type="number" id="newLead" class="input" placeholder="Délai" value="${article.lead_time_days || 7}">
                        <button id="applyFormulaBtn" class="btn btn-outline btn-sm">Appliquer</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancelBtn">Annuler</button>
                <button class="btn btn-primary" id="saveBtn">Enregistrer</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').onclick = () => modal.remove();
    modal.querySelector('#cancelBtn').onclick = () => modal.remove();
    
    modal.querySelector('#applyFormulaBtn').onclick = () => {
        const demand = parseFloat(modal.querySelector('#newDemand').value);
        const lead = parseInt(modal.querySelector('#newLead').value);
        if (!isNaN(demand) && !isNaN(lead)) {
            const newThreshold = demand * lead;
            modal.querySelector('#newThreshold').value = newThreshold;
        }
    };
    
    modal.querySelector('#saveBtn').onclick = () => {
        const newThreshold = parseFloat(modal.querySelector('#newThreshold').value);
        if (!isNaN(newThreshold) && newThreshold > 0) {
            article.reorder_point = newThreshold;
            article.is_low = article.quantity <= newThreshold;
            renderStock();
        }
        modal.remove();
    };
}

// =============================================
// RENDU STOCK
// =============================================
function renderStock() {
    const container = document.getElementById('content');
    if (!container) return;
    
    if (articles.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📦</div>
                <div class="empty-title">Aucun article</div>
                <div class="empty-text">Commencez par ajouter vos premiers articles</div>
                <button class="btn btn-primary" onclick="showAddArticleModal()">+ Ajouter un article</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="stock-list">
            ${articles.map(article => `
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">${article.name}</span>
                        ${article.is_low ? '<span class="badge badge-warning">⚠️ À réapprovisionner</span>' : '<span class="badge badge-success">✓ Stock OK</span>'}
                    </div>
                    <div class="quantity ${article.is_low ? 'quantity-warning' : 'quantity-ok'}">
                        ${article.quantity} ${article.unit}
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min((article.quantity / (article.reorder_point * 2)) * 100, 100)}%; background: ${article.is_low ? 'var(--color-warning)' : 'var(--color-success)'}"></div>
                    </div>
                    <div class="card-footer">
                        <span>🔔 Seuil: ${article.reorder_point} ${article.unit}</span>
                        <div class="card-actions">
                            <span class="edit-icon" onclick="editArticle(${article.id})" title="Modifier la quantité">✏️</span>
                            <span class="edit-icon" onclick="showEditThresholdModal(${JSON.stringify(article).replace(/"/g, '&quot;')})" title="Modifier le seuil">⚙️</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="fab" onclick="showAddArticleModal()">+</button>
    `;
}

function editArticle(id) {
    const article = articles.find(a => a.id === id);
    const newQty = prompt(`Nouvelle quantité pour ${article.name}:`, article.quantity);
    if (newQty !== null && !isNaN(parseFloat(newQty))) {
        article.quantity = parseFloat(newQty);
        article.is_low = article.quantity <= article.reorder_point;
        renderStock();
    }
}

// =============================================
// STYLES CSS AJOUTÉS
// =============================================
const style = document.createElement('style');
style.textContent = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    .modal {
        background: var(--color-surface);
        border-radius: 24px;
        width: 90%;
        max-width: 500px;
        max-height: 85vh;
        overflow-y: auto;
        padding: 24px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    }
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .modal-title {
        font-size: 24px;
        font-weight: 700;
        background: linear-gradient(135deg, var(--color-a), var(--color-b));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .modal-close {
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: var(--color-text-secondary);
        padding: 4px 8px;
        border-radius: 40px;
    }
    .modal-close:hover {
        background: var(--color-bg);
    }
    .modal-body {
        margin-bottom: 24px;
    }
    .modal-footer {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
    }
    .input-group {
        margin-bottom: 16px;
    }
    .input-group label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 6px;
        color: var(--color-text-primary);
    }
    .input-group small {
        display: block;
        font-size: 11px;
        color: var(--color-text-secondary);
        margin-top: 4px;
    }
    .input-row {
        display: flex;
        gap: 12px;
    }
    .input-row .input-group {
        flex: 1;
    }
    .input {
        width: 100%;
        padding: 12px 14px;
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: 12px;
        font-size: 16px;
        font-family: inherit;
        transition: all 0.2s;
    }
    .input:focus {
        outline: none;
        border-color: var(--color-b);
        box-shadow: 0 0 0 3px rgba(255,122,0,0.1);
    }
    .select {
        cursor: pointer;
    }
    .btn-sm {
        padding: 8px 16px;
        font-size: 14px;
    }
    .info-box {
        background: var(--color-bg);
        padding: 12px;
        border-radius: 12px;
        margin-bottom: 16px;
        font-size: 14px;
    }
    .info-note {
        font-size: 12px;
        color: var(--color-text-secondary);
        margin-top: 8px;
    }
    .composition-row {
        display: flex;
        gap: 8px;
        margin-bottom: 8px;
        align-items: center;
    }
    .composition-row .input {
        margin-bottom: 0;
    }
    .remove-comp {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        padding: 8px;
        border-radius: 40px;
        color: var(--color-error);
    }
    .empty-state {
        text-align: center;
        padding: 48px 24px;
    }
    .empty-icon {
        font-size: 64px;
        margin-bottom: 16px;
    }
    .empty-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    .empty-text {
        color: var(--color-text-secondary);
        margin-bottom: 24px;
    }
    .card-actions {
        display: flex;
        gap: 12px;
    }
`;
document.head.appendChild(style);

// =============================================
// PRODUITS (version simple pour commencer)
// =============================================
let products = [];

function renderProducts() {
    const container = document.getElementById('content');
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🏷️</div>
                <div class="empty-title">Aucun produit</div>
                <div class="empty-text">Créez vos premiers produits à vendre</div>
                <button class="btn btn-primary" onclick="showAddProductModal()">+ Ajouter un produit</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="products-list">
            ${products.map(product => `
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">${product.name}</span>
                        <span class="badge ${product.producible_quantity > 0 ? 'badge-success' : 'badge-warning'}">${product.producible_quantity} dispo</span>
                    </div>
                    <div class="quantity quantity-ok">${product.price} FCFA</div>
                    <div class="card-footer">
                        <span>📦 ${product.composition?.map(c => `${c.article?.name} (${c.quantity_used})`).join(', ') || 'Aucune composition'}</span>
                    </div>
                    <button class="btn btn-primary" style="width:100%; margin-top:12px;" onclick="alert('Vente à implémenter')">Vendre</button>
                </div>
            `).join('')}
        </div>
        <button class="fab" onclick="showAddProductModal()">+</button>
    `;
}

// =============================================
// CONSTRUCTION DE L'INTERFACE
// =============================================
function buildUI() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <div class="header">
            <span class="header-title">Stockr</span>
            <div class="header-profile" onclick="alert('Profil à venir')">
                <div class="header-profile-avatar">👤</div>
                <span class="header-profile-name">Test</span>
            </div>
        </div>
        <div id="content" class="content"></div>
        <div class="tabs">
            <button class="tab active" data-tab="stock"><span class="tab-icon">📦</span><span>Stock</span></button>
            <button class="tab" data-tab="products"><span class="tab-icon">🏷️</span><span>Produits</span></button>
            <button class="tab" data-tab="sales"><span class="tab-icon">💰</span><span>Ventes</span></button>
            <button class="tab" data-tab="alerts"><span class="tab-icon">⚠️</span><span>Alertes</span></button>
            <button class="tab" data-tab="financial"><span class="tab-icon">📊</span><span>Bilan</span></button>
        </div>
    `;
    
    // Écouteurs onglets
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            if (tabName === 'stock') renderStock();
            else if (tabName === 'products') renderProducts();
            else if (tabName === 'sales') renderSales();
            else if (tabName === 'alerts') renderAlerts();
            else if (tabName === 'financial') renderFinancial();
        });
    });
    
    renderStock();
}

function renderSales() { document.getElementById('content').innerHTML = '<div class="empty-state">💰 Ventes à venir</div>'; }
function renderAlerts() { document.getElementById('content').innerHTML = '<div class="empty-state">⚠️ Alertes à venir</div>'; }
function renderFinancial() { document.getElementById('content').innerHTML = '<div class="empty-state">📊 Bilan à venir</div>'; }

// DÉMARRAGE
buildUI();