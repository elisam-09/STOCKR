'use strict';
// =============================================
// STOCKR www2 — Monochrome
// =============================================

// ── SVG Icons ─────────────────────────────────
const IC = {
  home:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  box:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  tag:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  dollar:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  bar:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  plus:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  left:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  search:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  alert:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  xmark:    `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  warn:     `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  chevron:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  minus:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  inbox:    `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  tagLg:    `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  dollarLg: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  download: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  trending: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  user:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  moon:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  sun:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  logout:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  info:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  truck:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  trash:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  eye:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  camera:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  cameraLg: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  logo:     `<svg width="22" height="22" viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18zM288 102.2l52.8 107.5c4.6 9.3 13.4 15.8 23.7 17.3l118.1 17.2-85.5 83.5c-7.4 7.2-10.8 17.6-9 27.8L411 473.1l-105.6-56.3c-9.3-5-20.4-5-29.7 0L170.1 473.1l20.2-117.6c1.8-10.2-1.6-20.6-9-27.8L95.8 244.2l118.1-17.2c10.3-1.5 19.1-8 23.7-17.3L288 102.2zm195.2-61.7c-5.6-11.2-16.9-18.5-29.5-18.5s-23.9 7.2-29.5 18.5l-21.8 44.4-48.8 7.1c-12.1 1.8-22.2 10.2-25.9 21.8s-.7 24.4 7.9 32.9l35.4 34.5-8.3 48.8c-2.1 12.1 3 24.4 13 31.6s23.2 8.1 34.1 2.3l43.8-23 43.8 23c10.9 5.7 24.1 4.9 34.1-2.3s15.1-19.5 13-31.6l-8.4-48.8 35.4-34.5c8.6-8.5 11.7-21.4 7.9-32.9s-13.8-20-25.9-21.8l-48.8-7.1-21.5-44.3z"/></svg>`,
  logoLg:   `<svg width="40" height="40" viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18zM288 102.2l52.8 107.5c4.6 9.3 13.4 15.8 23.7 17.3l118.1 17.2-85.5 83.5c-7.4 7.2-10.8 17.6-9 27.8L411 473.1l-105.6-56.3c-9.3-5-20.4-5-29.7 0L170.1 473.1l20.2-117.6c1.8-10.2-1.6-20.6-9-27.8L95.8 244.2l118.1-17.2c10.3-1.5 19.1-8 23.7-17.3L288 102.2zm195.2-61.7c-5.6-11.2-16.9-18.5-29.5-18.5s-23.9 7.2-29.5 18.5l-21.8 44.4-48.8 7.1c-12.1 1.8-22.2 10.2-25.9 21.8s-.7 24.4 7.9 32.9l35.4 34.5-8.3 48.8c-2.1 12.1 3 24.4 13 31.6s23.2 8.1 34.1 2.3l43.8-23 43.8 23c10.9 5.7 24.1 4.9 34.1-2.3s15.1-19.5 13-31.6l-8.4-48.8 35.4-34.5c8.6-8.5 11.7-21.4 7.9-32.9s-13.8-20-25.9-21.8l-48.8-7.1-21.5-44.3z"/></svg>`,
};

// ── Auth store (localStorage) ──────────────────
const AUTH_KEY  = 'stockr_session';
const USERS_KEY = 'stockr_users';

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch { return []; }
}
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null; }
}
function saveSession(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem(AUTH_KEY);
}

// ── Unit lists ────────────────────────────────
const UNITS = ['g','kg','t','ml','cl','l','m³','cm','m','m²','pce','lot','sac','carton','h','j','mois'];

const UNIT_COND = {
  'sac':    { label:'Contenance du sac',            opts:['25 kg','50 kg','100 kg','Autre'] },
  'lot':    { label:'Nombre de pièces par lot',      opts:['6','12','24','Autre'] },
  'carton': { label:"Nombre d'unités par carton",    opts:['6','12','24','48','Autre'] },
};

// ── Unit conversion helpers ───────────────────
const UNIT_FACTORS = { g:1,kg:1000,t:1e6, ml:1,cl:10,l:1000,'m³':1e6, cm:1,m:100, h:1,j:24,mois:720 };
const UNIT_GROUPS  = [['g','kg','t'],['ml','cl','l','m³'],['cm','m'],['h','j','mois']];

function compatibleUnits(unit) {
  const grp = UNIT_GROUPS.find(g => g.includes(unit));
  return grp || [unit];
}
function convertQty(qty, from, to) {
  if (from === to) return qty;
  const f = UNIT_FACTORS[from], t = UNIT_FACTORS[to];
  if (!f || !t) return qty;
  const result = qty * f / t;
  return Math.abs(result) < 0.01 ? 0 : parseFloat(result.toPrecision(10));
}
function fmtQty(n) {
  if (n == null || Math.abs(n) < 0.01) return '0';
  return parseFloat(parseFloat(n).toFixed(4)).toString();
}

// ── API base ──────────────────────────────────
const API_BASE = 'http://localhost:5001';

// ── State ─────────────────────────────────────
const S = {
  // Auth
  authView:    'login',   // 'login' | 'register'
  authStep:    1,         // étape inscription : 1 = identifiants, 2 = profil
  authEmail:   '',
  authPwd:     '',
  authPwd2:    '',
  authName:    '',
  authBiz:     '',
  authShowPwd: false,
  authProfile: 'transformer', // 'transformer' | 'reseller'
  authCountry: 'SN',
  authLang:    'fr',
  authCurrency:'XOF',
  authTax:     0,         // taux TVA en %
  session:     null,      // { id, name, email, business, profile, currency, currency_symbol, country, language, tax_rate }
  token:       null,

  // App
  view:       'home',
  articles:   [],
  products:   [],
  sales:      [],
  selectedId: null,
  qty:        1,
  action:     'add',
  search:     '',
  filter:     'all',
  period:     'all',
  darkMode:     false,
  settingsEdit: false,
  unitDropOpen: false,
  unitCondVal:  '',
  unitCondOther:'',
  compUnits:     {},
  cart:          [],
  cartOpen:      false,
  editProductId: null,
  predictions:   [],
  form: { name: '', stock: 0, min: 0, unit: '', lead: 7 },
  spectra: {
    step:      'camera',   // 'camera' | 'loading' | 'confirm' | 'done'
    queue:     [],         // détections en attente de confirmation
    current:   0,          // index dans queue
    confirmed: [],         // items validés par l'utilisateur
    naming:    false,      // l'utilisateur est en train de nommer un article inconnu
    results:   [],         // résultats finaux après /confirm
  },
};

// ── API helper ────────────────────────────────
async function api(method, path, body) {
  const res = await fetch(API_BASE + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(S.token ? { 'Authorization': `Bearer ${S.token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const errMsg = typeof err.error === 'string' ? err.error : (err.error?.error || err.message || `Erreur ${res.status}`);
    throw new Error(errMsg);
  }
  return res.json();
}

// ── Mapping API → state ───────────────────────
function articleFromAPI(a) {
  return { id: a.id, name: a.name, stock: a.quantity, unit: a.unit, min: a.alert_threshold || 0, lead: a.lead_time_days };
}
function productFromAPI(p) {
  return {
    id: p.id, name: p.name, price: p.price,
    composition: (p.composition || []).map(c => ({ id: c.article.id, qty: c.quantity_used }))
  };
}
function saleFromAPI(s) {
  const product = S.products.find(p => p.id === s.product_id);
  return { id: s.id, productId: s.product_id, productName: s.product_name, qty: s.quantity, total: (product ? product.price : 0) * s.quantity, date: s.timestamp };
}

// ── Charger données depuis l'API ──────────────
async function loadData() {
  try {
    const [arts, prods, sales, preds] = await Promise.all([
      api('GET', '/api/articles/'),
      api('GET', '/api/products/'),
      api('GET', '/api/sales/'),
      api('GET', '/api/predictions/'),
    ]);
    S.products    = prods.map(productFromAPI);
    S.articles    = arts.map(articleFromAPI);
    S.sales       = sales.map(saleFromAPI);
    S.predictions = preds;
    recalcAllMins();
    render();
  } catch(e) {
    showToast('Erreur de chargement des données', 'error');
  }
}

// ── Helpers ───────────────────────────────────
const $ = id => document.getElementById(id);

function fmt(n) {
  return Math.round(n).toLocaleString('fr-FR');
}
function fmtCurrency(n) {
  const sym = S.session?.currency_symbol || 'FCFA';
  return `${fmt(n)} ${sym}`;
}
function fmtDate(iso) {
  const d = new Date(iso), now = new Date(), diff = now - d;
  if (diff < 60000)    return "À l'instant";
  if (diff < 3600000)  return `Il y a ${Math.floor(diff/60000)} min`;
  if (diff < 86400000) return `Il y a ${Math.floor(diff/3600000)} h`;
  return d.toLocaleDateString('fr-FR', { day:'numeric', month:'short' });
}
function initials(name) {
  return name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join('');
}
function stockStatus(stock, min) {
  if (stock === 0) return { label:'Rupture', cls:'st-out', icon:IC.xmark, bar:'out' };
  if (stock < min) return { label:'Faible',  cls:'st-low', icon:IC.warn,  bar:'low' };
  return               { label:'OK',       cls:'st-ok',  icon:IC.check, bar:''    };
}
function productMaxMake(product) {
  if (!product.composition.length) return 99;
  return Math.floor(Math.min(...product.composition.map(c => {
    const a = S.articles.find(x => x.id === c.id);
    return a ? a.stock / c.qty : 0;
  })));
}
function salesForPeriod() {
  const now = new Date();
  if (S.period==='today') return S.sales.filter(s => new Date(s.date).toDateString()===now.toDateString());
  if (S.period==='7d')    return S.sales.filter(s => new Date(s.date) >= new Date(now-7*86400000));
  if (S.period==='30d')   return S.sales.filter(s => new Date(s.date) >= new Date(now-30*86400000));
  return S.sales;
}

// ── Calcul seuil auto ─────────────────────────
// Somme des qty requises de cet article dans tous les produits
function recalcMin(articleId) {
  let total = 0;
  S.products.forEach(p => {
    const comp = p.composition.find(c => c.id === articleId);
    if (comp) total += comp.qty;
  });
  const art = S.articles.find(a => a.id === articleId);
  if (art && total > 0) art.min = total;
}
function recalcAllMins() {
  S.articles.forEach(a => recalcMin(a.id));
}

// ── Toast ──────────────────────────────────────
function showToast(msg, type='') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  $('toast-container').appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity 0.25s';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 250);
  }, 2600);
}

// ── Auth Actions ───────────────────────────────
async function doLogin() {
  const email = S.authEmail.trim();
  const pwd   = S.authPwd;
  if (!email || !pwd) { showToast('Remplis tous les champs', 'error'); return; }
  try {
    const data = await api('POST', '/api/auth/login', { email, password: pwd });
    const u = data.user;
    S.token   = u.auth_token;
    S.session = {
      id: u.id, name: u.name, email: u.email, business: u.business_name,
      profile:         u.profile         || 'transformer',
      currency:        u.currency        || 'XOF',
      currency_symbol: getCurrencySymbol(u.currency || 'XOF'),
      country:         u.country         || 'SN',
      language:        u.language        || 'fr',
      tax_rate:        u.tax_rate        || 0,
    };
    saveSession({ ...S.session, token: S.token });
    S.authEmail = S.authPwd = '';
    S.view = 'home';
    render();
    await loadData();
  } catch(e) {
    showToast(e.message || 'Email ou mot de passe incorrect', 'error');
  }
}

function authNextStep() {
  const name  = S.authName.trim();
  const email = S.authEmail.trim();
  const pwd   = S.authPwd;
  const pwd2  = S.authPwd2;
  if (!name || !email || !pwd) { showToast('Remplis tous les champs obligatoires', 'error'); return; }
  if (pwd !== pwd2)            { showToast('Les mots de passe ne correspondent pas', 'error'); return; }
  if (pwd.length < 6)          { showToast('Mot de passe trop court (min. 6 caractères)', 'error'); return; }
  S.authStep = 2;
  render();
}

const CURRENCIES = [
  { code:'XOF', label:'Franc CFA (FCFA)', symbol:'FCFA' },
  { code:'EUR', label:'Euro (€)',          symbol:'€'    },
  { code:'USD', label:'Dollar ($)',        symbol:'$'    },
  { code:'MAD', label:'Dirham (DH)',       symbol:'DH'   },
  { code:'GBP', label:'Livre sterling (£)',symbol:'£'    },
  { code:'NGN', label:'Naira (₦)',         symbol:'₦'    },
  { code:'GHS', label:'Cedi (₵)',          symbol:'₵'    },
  { code:'XAF', label:'Franc CFA Centrafrique', symbol:'FCFA' },
];

const COUNTRIES = [
  { code:'SN', label:'Sénégal'      },
  { code:'CI', label:"Côte d'Ivoire"},
  { code:'ML', label:'Mali'         },
  { code:'BF', label:'Burkina Faso' },
  { code:'GN', label:'Guinée'       },
  { code:'BJ', label:'Bénin'        },
  { code:'TG', label:'Togo'         },
  { code:'CM', label:'Cameroun'     },
  { code:'CD', label:'RD Congo'     },
  { code:'MG', label:'Madagascar'   },
  { code:'MA', label:'Maroc'        },
  { code:'DZ', label:'Algérie'      },
  { code:'TN', label:'Tunisie'      },
  { code:'FR', label:'France'       },
  { code:'BE', label:'Belgique'     },
  { code:'CH', label:'Suisse'       },
  { code:'CA', label:'Canada'       },
  { code:'US', label:'États-Unis'   },
  { code:'GB', label:'Royaume-Uni'  },
];

function getCurrencySymbol(code) {
  return CURRENCIES.find(c => c.code === code)?.symbol || code;
}

async function doRegister() {
  const name     = S.authName.trim();
  const business = (S.authBiz || '').trim();
  const email    = S.authEmail.trim();
  const pwd      = S.authPwd;
  try {
    const data = await api('POST', '/api/auth/register', {
      email,
      password:      pwd,
      name,
      business_name: business || name,
      country:       S.authCountry,
      language:      S.authLang,
      currency:      S.authCurrency,
      profile:       S.authProfile,
      tax_rate:      parseFloat(S.authTax) || 0,
    });
    const u = data.user;
    S.token   = u.auth_token;
    S.session = {
      id: u.id, name: u.name, email: u.email, business: u.business_name,
      profile:         S.authProfile,
      currency:        S.authCurrency,
      currency_symbol: getCurrencySymbol(S.authCurrency),
      country:         S.authCountry,
      language:        S.authLang,
      tax_rate:        parseFloat(S.authTax) || 0,
    };
    saveSession({ ...S.session, token: S.token });
    S.authEmail = S.authPwd = S.authPwd2 = S.authName = S.authBiz = '';
    S.authStep = 1;
    S.view = 'home';
    showToast(`Bienvenue, ${name} !`);
    render();
    await loadData();
  } catch(e) {
    showToast(e.message || 'Erreur lors de la création du compte', 'error');
  }
}

async function doLogout() {
  if (!confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) return;
  try { await api('POST', '/api/auth/logout'); } catch(e) { /* ignore */ }
  clearSession();
  S.session = null; S.token = null;
  S.articles = []; S.products = []; S.sales = []; S.cart = [];
  S.view = 'home'; S.authView = 'login';
  S.authEmail = S.authPwd = S.authPwd2 = S.authName = S.authBiz = '';
  render();
}

// ── App Actions ───────────────────────────────
async function applyStock() {
  const art = S.articles.find(a => a.id === S.selectedId);
  if (!art) return;
  if (S.action === 'remove' && art.stock < S.qty) { showToast('Stock insuffisant', 'error'); return; }
  const newStock = S.action === 'add'
    ? Math.round((art.stock + S.qty) * 10) / 10
    : Math.round((art.stock - S.qty) * 10) / 10;
  try {
    await api('PUT', `/api/articles/${art.id}`, { quantity: newStock });
    art.stock = newStock;
    showToast(S.action === 'add' ? `+${S.qty} ${art.unit} ajouté` : `-${S.qty} ${art.unit} retiré`);
    S.qty = 1;
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function deleteArticle(id) {
  const art = S.articles.find(a => a.id === id);
  if (!art) return;
  try {
    await api('DELETE', `/api/articles/${id}`);
    S.products.forEach(p => { p.composition = p.composition.filter(c => c.id !== id); });
    S.articles = S.articles.filter(a => a.id !== id);
    showToast(`"${art.name}" supprimé`);
    nav('pantry');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function recordSale() {
  const sel   = $('sale-product');
  const qtyEl = $('sale-qty');
  if (!sel || !sel.value) { showToast('Choisis un produit', 'error'); return; }
  const product = S.products.find(p => p.id === parseInt(sel.value));
  if (!product) return;
  const qty = Math.max(1, parseInt(qtyEl.value) || 1);
  for (const comp of product.composition) {
    const art = S.articles.find(a => a.id === comp.id);
    if (!art || art.stock < comp.qty * qty) {
      showToast(`Stock insuffisant : ${art ? art.name : '?'}`, 'error');
      return;
    }
  }
  product.composition.forEach(comp => {
    const art = S.articles.find(a => a.id === comp.id);
    if (art) art.stock = Math.round((art.stock - comp.qty * qty) * 10) / 10;
  });
  S.sales.unshift({ id: Date.now(), productId: product.id, productName: product.name, qty, total: product.price * qty, date: new Date().toISOString() });
  showToast(`Vente enregistrée — ${fmt(product.price * qty)} FCFA`);
  render();
}

async function saveArticle() {
  const f = S.form;
  if (!f.name.trim()) { showToast('Nom requis', 'error'); return; }
  try {
    const data = await api('POST', '/api/articles/', {
      name:            f.name.trim(),
      quantity:        parseFloat(f.stock) || 0,
      unit:            f.unit || 'pcs',
      alert_threshold: parseFloat(f.min) || null,
      lead_time_days:  parseInt(f.lead) || 7,
    });
    S.articles.push(articleFromAPI(data));
    showToast(`"${f.name}" ajouté`);
    S.form = { name:'', stock:0, min:0, unit:'', lead:7 };
    nav('pantry');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function saveProduct() {
  const nameEl  = $('prod-name');
  const priceEl = $('prod-price');
  if (!nameEl || !nameEl.value.trim()) { showToast('Nom requis', 'error'); return; }
  const composition = [];
  document.querySelectorAll('.comp-input').forEach(row => {
    const artId = parseInt(row.dataset.id);
    const art   = S.articles.find(a => a.id === artId);
    const qtyEl = row.querySelector('.comp-qty');
    const rawQty = parseFloat(qtyEl?.value) || 0;
    if (rawQty > 0 && art) {
      const selUnit   = S.compUnits[artId] || art.unit;
      const converted = convertQty(rawQty, selUnit, art.unit);
      composition.push({ article_id: artId, quantity_used: converted });
    }
  });
  try {
    const data = await api('POST', '/api/products/', {
      name:        nameEl.value.trim(),
      price:       parseFloat(priceEl?.value) || 0,
      composition
    });
    S.products.push(productFromAPI(data));
    recalcAllMins();
    showToast(`Produit "${nameEl.value}" créé`);
    nav('products');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function toggleCart() {
  S.cartOpen = !S.cartOpen;
  render();
}

async function deleteProduct(id) {
  const p = S.products.find(p => p.id === id);
  if (!p) return;
  if (!confirm(`Supprimer "${p.name}" ?`)) return;
  try {
    await api('DELETE', `/api/products/${id}`);
    S.products = S.products.filter(p => p.id !== id);
    showToast(`"${p.name}" supprimé`);
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

async function saveEditProduct() {
  const nameEl  = $('prod-name');
  const priceEl = $('prod-price');
  if (!nameEl?.value.trim()) { showToast('Nom requis', 'error'); return; }
  const p = S.products.find(p => p.id === S.editProductId);
  if (!p) return;
  const composition = [];
  document.querySelectorAll('.comp-input').forEach(row => {
    const artId = parseInt(row.dataset.id);
    const art   = S.articles.find(a => a.id === artId);
    const qtyEl = row.querySelector('.comp-qty');
    const rawQty = parseFloat(qtyEl?.value) || 0;
    if (rawQty > 0 && art) {
      const selUnit   = S.compUnits[artId] || art.unit;
      const converted = convertQty(rawQty, selUnit, art.unit);
      composition.push({ article_id: artId, quantity_used: converted });
    }
  });
  try {
    const data = await api('PUT', `/api/products/${p.id}`, {
      name:  nameEl.value.trim(),
      price: parseFloat(priceEl?.value) || 0,
      composition,
    });
    p.name  = data.name;
    p.price = data.price;
    p.composition = (data.composition || []).map(c => ({ id: c.article.id, qty: c.quantity_used }));
    recalcAllMins();
    showToast(`"${p.name}" mis à jour`);
    nav('products');
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function toggleAuthPwd(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  S.authShowPwd = !S.authShowPwd;
  // Zéro render() — DOM direct uniquement, les champs ne sont jamais vidés
  const pEl  = document.getElementById('auth-pwd');
  const p2El = document.getElementById('auth-pwd2');
  if (pEl)  pEl.classList.toggle('pwd-masked', !S.authShowPwd);
  if (p2El) p2El.classList.toggle('pwd-masked', !S.authShowPwd);
  document.querySelectorAll('.pwd-eye').forEach(btn => {
    btn.innerHTML = S.authShowPwd ? IC.eyeOff : IC.eye;
  });
}

// ── Cart actions ──────────────────────────────
function addToCart() {
  const sel   = $('sale-product');
  const qtyEl = $('sale-qty');
  if (!sel?.value) { showToast('Choisis un produit', 'error'); return; }
  const product = S.products.find(p => p.id === parseInt(sel.value));
  if (!product) return;
  const qty = Math.max(1, parseInt(qtyEl?.value) || 1);
  const existing = S.cart.find(c => c.productId === product.id);
  if (existing) { existing.qty += qty; }
  else { S.cart.push({ productId:product.id, productName:product.name, qty, unitPrice:product.price }); }
  showToast(`${product.name} ajouté au panier`);
  render();
}

function removeFromCart(idx) {
  S.cart.splice(idx, 1);
  render();
}

async function confirmCart() {
  if (!S.cart.length) { showToast('Le panier est vide', 'error'); return; }
  try {
    let total = 0, count = 0;
    for (const item of S.cart) {
      const data = await api('POST', '/api/sales/', { product_id: item.productId, quantity: item.qty });
      const product = S.products.find(p => p.id === item.productId);
      const lineTotal = (product?.price || 0) * item.qty;
      total += lineTotal;
      count += item.qty;
      S.sales.unshift({ id: data.sale.id, productId: data.sale.product_id, productName: data.sale.product_name, qty: data.sale.quantity, total: lineTotal, date: data.sale.timestamp });
    }
    S.cart = [];
    showToast(`${count} unité(s) vendue(s) — ${fmt(total)} FCFA`);
    // Recharger les articles pour avoir les stocks à jour
    const arts = await api('GET', '/api/articles/');
    S.articles = arts.map(articleFromAPI);
    recalcAllMins();
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

// ── Unit combobox actions (DOM direct — zéro render() pendant la frappe) ──
function _unitDropHTML() {
  const q = (S.form.unit || '').toLowerCase();
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const filtered = UNITS.filter(u => u.toLowerCase().includes(q));
  if (!filtered.length) return '<div class="unit-opt" style="color:var(--text-3);cursor:default">Aucun résultat</div>';
  return filtered.map(u => {
    const hi = q ? u.replace(new RegExp(safe,'gi'), m => `<strong>${m}</strong>`) : u;
    return `<div class="unit-opt" onmousedown="event.preventDefault()" onclick="selectUnit('${u}')">${hi}</div>`;
  }).join('');
}
function openUnitDrop() {
  S.unitDropOpen = true;
  const wrap = document.getElementById('unit-combo-wrap');
  if (!wrap || document.getElementById('unit-dropdown')) return;
  const dd = document.createElement('div');
  dd.className = 'unit-dropdown'; dd.id = 'unit-dropdown';
  dd.innerHTML = _unitDropHTML();
  wrap.appendChild(dd);
}
function updateUnitDrop() {
  const inp = document.getElementById('unit-input');
  if (inp) S.form.unit = inp.value;
  const dd = document.getElementById('unit-dropdown');
  if (!dd) { openUnitDrop(); return; }
  dd.innerHTML = _unitDropHTML();
}
function closeUnitDrop() {
  S.unitDropOpen = false;
  const dd = document.getElementById('unit-dropdown');
  if (dd) dd.remove();
}
function selectUnit(u) {
  S.form.unit = u; S.unitDropOpen = false; S.unitCondVal = ''; S.unitCondOther = '';
  closeUnitDrop();
  render(); // re-render uniquement pour afficher/cacher la section conditionnelle
}
function selectUnitCond(v) { S.unitCondVal = v; S.unitCondOther = ''; render(); }

async function saveAccountInfo() {
  const nameVal  = ($('set-name')?.value  || '').trim();
  const bizVal   = ($('set-biz')?.value   || '').trim();
  if (!nameVal) { showToast('Nom requis', 'error'); return; }
  try {
    await api('PUT', '/api/auth/profile', { name: nameVal, business_name: bizVal });
    S.session.name     = nameVal;
    S.session.business = bizVal;
    saveSession({ ...S.session, token: S.token });
    S.settingsEdit = false;
    showToast('Infos mises à jour');
    render();
  } catch(e) {
    showToast(e.message, 'error');
  }
}

function toggleDark() {
  S.darkMode = !S.darkMode;
  document.body.classList.toggle('dark', S.darkMode);
  render();
}

// ── Navigate ──────────────────────────────────
function nav(view, extra={}) {
  Object.assign(S, extra);
  S.view = view;
  render();
}

// ── Render ────────────────────────────────────
function render() {
  const viewEl = $('view');
  const navEl  = $('nav');

  // Pas de session → écran auth
  if (!S.session) {
    navEl.style.display = 'none';
    viewEl.innerHTML = vAuth();
    viewEl.scrollTop = 0;
    return;
  }

  const map = {
    home: vHome, pantry: vPantry, products: vProducts,
    sales: vSales, financial: vFinancial,
    detail: vDetail, add: vAdd, 'add-product': vAddProduct,
    'edit-product': vEditProduct, settings: vSettings,
    spectra: vSpectra,
  };
  viewEl.innerHTML = (map[S.view] || vHome)();
  viewEl.scrollTop = 0;

  const hideNav = ['detail','add','add-product','edit-product'].includes(S.view);
  navEl.style.display = hideNav ? 'none' : '';
  if (!hideNav) navEl.innerHTML = renderNav();
}

function renderNav() {
  const tabs = [
    { id:'home',      icon:IC.home,   label:'Accueil'  },
    { id:'pantry',    icon:IC.box,    label:'Stock'    },
    { id:'products',  icon:IC.tag,    label:'Produits' },
    { id:'sales',     icon:IC.dollar, label:'Ventes'   },
    { id:'financial', icon:IC.bar,    label:'Bilan'    },
  ];
  return tabs.map(t => `
    <button class="nav-tab ${S.view===t.id?'active':''}" onclick="nav('${t.id}')">
      ${t.icon}
      <span class="nav-label">${t.label}</span>
    </button>`).join('');
}

// ── AUTH ──────────────────────────────────────
function vAuth() {
  const isLogin = S.authView === 'login';
  if (!isLogin && S.authStep === 2) return vAuthStep2();

  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-logo">${IC.box}<span>STOCKR</span></div>
      <div class="auth-title">${isLogin ? 'Connexion' : 'Créer un compte'}</div>
      <div class="auth-sub">${isLogin ? 'Accède à ton espace' : 'Étape 1 sur 2 — Tes informations'}</div>

      ${!isLogin ? `
      <div class="form-group">
        <label class="form-label">Prénom / Nom *</label>
        <input class="input" id="auth-name" type="text" placeholder="ex: Fatou Diallo" autocomplete="name" value="${S.authName}" oninput="S.authName=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Nom du commerce</label>
        <input class="input" id="auth-biz" type="text" placeholder="ex: Boutique Wax de Fatou" value="${S.authBiz||''}" oninput="S.authBiz=this.value">
      </div>` : ''}

      <div class="form-group">
        <label class="form-label">Email *</label>
        <input class="input" id="auth-email" type="email" placeholder="ton@email.com" autocomplete="email" value="${S.authEmail}" oninput="S.authEmail=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Mot de passe *</label>
        <div class="pwd-wrap">
          <input class="input ${S.authShowPwd?'':'pwd-masked'}" id="auth-pwd" type="text" placeholder="••••••••" autocomplete="${isLogin?'current-password':'new-password'}" value="${S.authPwd}" oninput="S.authPwd=this.value">
          <button class="pwd-eye" onclick="toggleAuthPwd(event)" type="button">${S.authShowPwd?IC.eyeOff:IC.eye}</button>
        </div>
      </div>
      ${!isLogin ? `
      <div class="form-group">
        <label class="form-label">Confirmer le mot de passe *</label>
        <div class="pwd-wrap">
          <input class="input ${S.authShowPwd?'':'pwd-masked'}" id="auth-pwd2" type="text" placeholder="••••••••" autocomplete="new-password" value="${S.authPwd2}" oninput="S.authPwd2=this.value">
        </div>
      </div>` : ''}

      <button class="btn btn-primary" style="margin-top:8px" onclick="${isLogin ? 'doLogin()' : 'authNextStep()'}">
        ${isLogin ? 'Se connecter' : 'Continuer →'}
      </button>
      <div class="auth-switch">
        ${isLogin ? 'Pas encore de compte ?' : 'Déjà un compte ?'}
        <button onclick="S.authView='${isLogin?'register':'login'}';S.authStep=1;S.authShowPwd=false;render()">
          ${isLogin ? "S'inscrire" : 'Se connecter'}
        </button>
      </div>
    </div>
  </div>`;
}

function vAuthStep2() {
  const profiles = [
    {
      id: 'transformer',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
      label: 'Transformateur',
      desc:  'Tu fabriques des produits à partir de matières premières (boulanger, couturier, restaurateur…)',
    },
    {
      id: 'reseller',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
      label: 'Revendeur',
      desc:  'Tu achètes des produits et les revends — à l\'unité, en pack ou en gros (épicier, boutique, import/export…)',
    },
  ];

  return `
  <div class="auth-wrap">
    <div class="auth-card">
      <button class="back-btn" style="margin-bottom:12px" onclick="S.authStep=1;render()">${IC.left}</button>
      <div class="auth-title">Ton profil</div>
      <div class="auth-sub">Étape 2 sur 2 — Ces paramètres sont modifiables plus tard</div>

      <div class="form-group" style="margin-top:16px">
        <label class="form-label">Type de commerce *</label>
        <div class="profile-cards">
          ${profiles.map(p => `
          <div class="profile-card ${S.authProfile===p.id?'selected':''}" onclick="S.authProfile='${p.id}';render()">
            <div class="profile-card-icon">${p.icon}</div>
            <div class="profile-card-label">${p.label}</div>
            <div class="profile-card-desc">${p.desc}</div>
          </div>`).join('')}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Pays</label>
        <select class="input" onchange="S.authCountry=this.value">
          ${COUNTRIES.map(c => `<option value="${c.code}" ${S.authCountry===c.code?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Devise</label>
        <select class="input" onchange="S.authCurrency=this.value">
          ${CURRENCIES.map(c => `<option value="${c.code}" ${S.authCurrency===c.code?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Langue</label>
        <select class="input" onchange="S.authLang=this.value">
          <option value="fr" ${S.authLang==='fr'?'selected':''}>Français</option>
          <option value="en" ${S.authLang==='en'?'selected':''}>English</option>
          <option value="ar" ${S.authLang==='ar'?'selected':''}>العربية</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Taux de TVA (%)</label>
        <input class="input" type="number" min="0" max="100" step="0.5"
               placeholder="ex: 18" value="${S.authTax||''}"
               oninput="S.authTax=this.value">
        <div class="form-hint">Utilisé pour le calcul des factures. 0 si non applicable.</div>
      </div>

      <button class="btn btn-primary" style="margin-top:8px" onclick="doRegister()">
        Créer mon compte
      </button>
    </div>
  </div>`;
}

// ── HOME ──────────────────────────────────────
function vHome() {
  const low     = S.articles.filter(a => a.stock < a.min && a.min > 0);
  const totalCA = S.sales.reduce((s,v) => s+v.total, 0);
  const today   = new Date().toDateString();
  const todayCA = S.sales.filter(s => new Date(s.date).toDateString()===today).reduce((s,v)=>s+v.total,0);

  return `
  <div class="hero anim">
    <div class="hero-top">
      <div>
        <div class="hero-greeting">Bonjour, ${S.session.name.split(' ')[0]}</div>
        <div class="hero-name">${S.session.business || S.session.name}</div>
      </div>
      <button class="hero-btn" onclick="nav('settings')">${IC.settings}</button>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-val">${S.articles.length}</div>
        <div class="hero-stat-lbl">Articles</div>
      </div>
      <div class="hero-stat ${low.length>0?'warn':''}">
        <div class="hero-stat-val">${low.length}</div>
        <div class="hero-stat-lbl">Alertes</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-val">${fmt(todayCA)}</div>
        <div class="hero-stat-lbl">CA Auj.</div>
      </div>
    </div>
  </div>

  <div class="container">
    ${low.length > 0 ? `
    <div class="alert-banner" onclick="nav('pantry',{filter:'low'})">
      <div class="alert-ico">${IC.alert}</div>
      <div style="flex:1">
        <div class="alert-title">${low.length} article${low.length>1?'s':''} à réapprovisionner</div>
        <div class="alert-sub">${low.slice(0,3).map(a=>a.name).join(' · ')}</div>
      </div>
      <div class="alert-arrow">${IC.chevron}</div>
    </div>` : ''}

    ${(() => {
      const critical = S.predictions.filter(p => p.status === 'critical');
      if (!critical.length) return '';
      return `
      <div class="section-hd"><div class="section-lbl">Prédictions IA</div></div>
      ${critical.slice(0, 3).map((p, i) => `
      <div class="pred-card critical" style="animation-delay:${i * 0.06}s">
        <div class="pred-dot"></div>
        <div class="pred-body">
          <div class="pred-name">${p.article_name}</div>
          <div class="pred-msg">${p.message}</div>
        </div>
      </div>`).join('')}`;
    })()}

    <div class="section-hd"><div class="section-lbl">Navigation</div></div>
    <div class="quick-grid">
      <button class="quick-btn" onclick="nav('pantry')">
        <span class="quick-ico">${IC.box}</span>
        <div class="quick-label">Stock</div>
        <div class="quick-sub">${S.articles.length} article${S.articles.length!==1?'s':''}</div>
      </button>
      <button class="quick-btn" onclick="nav('products')">
        <span class="quick-ico">${IC.tag}</span>
        <div class="quick-label">Produits</div>
        <div class="quick-sub">${S.products.length} produit${S.products.length!==1?'s':''}</div>
      </button>
      <button class="quick-btn" onclick="nav('sales')">
        <span class="quick-ico">${IC.dollar}</span>
        <div class="quick-label">Ventes</div>
        <div class="quick-sub">${fmt(totalCA)} FCFA total</div>
      </button>
      <button class="quick-btn" onclick="nav('financial')">
        <span class="quick-ico">${IC.trending}</span>
        <div class="quick-label">Bilan</div>
        <div class="quick-sub">${S.sales.length} vente${S.sales.length!==1?'s':''}</div>
      </button>
    </div>

    <div class="section-hd">
      <div class="section-lbl">Dernières ventes</div>
      <button class="section-act" onclick="nav('sales')">Voir tout</button>
    </div>
    ${S.sales.length === 0 ? `
    <div class="card" style="text-align:center;padding:18px;color:var(--text-3);font-size:13px">Aucune vente pour l'instant</div>
    ` : S.sales.slice(0,4).map((s,i) => `
    <div class="card anim" style="animation-delay:${i*0.04}s">
      <div class="sale-item" style="padding:0">
        <div class="sale-dot"></div>
        <div class="sale-info">
          <div class="sale-prod">${s.productName}</div>
          <div class="sale-date">${fmtDate(s.date)}</div>
        </div>
        <div class="sale-right">
          <div class="sale-total">${fmt(s.total)} FCFA</div>
          <div class="sale-qty">×${s.qty}</div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

// ── PANTRY ────────────────────────────────────
function vPantry() {
  const q = S.search.toLowerCase();
  let list = S.articles.filter(a => a.name.toLowerCase().includes(q));
  if (S.filter==='out') list = list.filter(a => a.stock===0);
  else if (S.filter==='low') list = list.filter(a => a.stock>0 && a.stock<a.min && a.min>0);
  else if (S.filter==='ok')  list = list.filter(a => a.stock>=a.min || a.min===0);

  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">Stock</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="fab fab-outline" onclick="nav('spectra')" title="Scanner avec Spectra">${IC.camera}</button>
        <button class="fab" onclick="nav('add')">${IC.plus}</button>
      </div>
    </div>
    <div class="search-wrap">
      <span class="search-ico">${IC.search}</span>
      <input class="input input-search" type="text" placeholder="    Rechercher…" value="${S.search.replace(/"/g,'&quot;')}" oninput="S.search=this.value;render()">
    </div>
    <div class="filter-row">
      <button class="filter-chip ${S.filter==='all'?'active':''}" onclick="S.filter='all';render()">Tout (${S.articles.length})</button>
      <button class="filter-chip ${S.filter==='out'?'active':''}" onclick="S.filter='out';render()">Rupture</button>
      <button class="filter-chip ${S.filter==='low'?'active':''}" onclick="S.filter='low';render()">Faible</button>
      <button class="filter-chip ${S.filter==='ok'?'active':''}"  onclick="S.filter='ok';render()">OK</button>
    </div>
  </div>
  <div class="container">
    ${list.length===0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.inbox}</div>
      <div class="empty-title">${S.articles.length===0 ? 'Aucun article' : 'Aucun résultat'}</div>
      <div class="empty-text">${S.articles.length===0 ? 'Ajoute ton premier article de stock.' : 'Essaie un autre terme.'}</div>
      ${S.articles.length===0 ? `<button class="btn btn-primary" style="width:auto;padding:11px 24px" onclick="nav('add')">Ajouter un article</button>` : ''}
    </div>` : list.map((a,i) => {
      const st  = stockStatus(a.stock, a.min);
      const pct = a.min > 0 ? Math.min(100, Math.round((a.stock / Math.max(a.min*2,1))*100)) : 100;
      return `
      <div class="card card-tap anim" style="animation-delay:${i*0.04}s" onclick="nav('detail',{selectedId:${a.id}})">
        <div class="article-row">
          <div class="article-avatar">${initials(a.name)}</div>
          <div class="article-info">
            <div class="article-name">${a.name}</div>
            <div class="article-meta">${fmtQty(a.stock)} ${a.unit}${a.min>0 ? ` · seuil ${fmtQty(a.min)}` : ''}</div>
            <div class="progress"><div class="progress-bar ${st.bar}" style="width:${pct}%"></div></div>
          </div>
          <div class="article-right">
            <span class="status ${st.cls}">${st.icon} ${st.label}</span>
            <div style="color:var(--gray-4)">${IC.chevron}</div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── PRODUCTS ──────────────────────────────────
function vProducts() {
  return `
  <div class="page-header">
    <div class="page-header-row">
      <button class="back-btn" onclick="nav('home')">${IC.left}</button>
      <div class="page-title">Produits finis</div>
      <button class="fab" onclick="nav('add-product')">${IC.plus}</button>
    </div>
  </div>
  <div class="container">
    ${S.products.length===0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.tagLg}</div>
      <div class="empty-title">Aucun produit</div>
      <div class="empty-text">Crée un produit fini à partir de tes articles en stock.</div>
      <button class="btn btn-primary" style="width:auto;padding:11px 24px" onclick="nav('add-product')">Créer un produit</button>
    </div>` : S.products.map((p,i) => {
      const avail   = productMaxMake(p);
      const canMake = avail > 0;
      const recipeNames = p.composition.map(c => {
        const a = S.articles.find(a => a.id === c.id);
        return a ? `${fmtQty(c.qty)} ${a.unit} ${a.name}` : null;
      }).filter(Boolean).join(' · ');
      return `
      <div class="card anim" style="animation-delay:${i*0.05}s">
        <div class="article-row">
          <div class="article-avatar">${initials(p.name)}</div>
          <div class="article-info">
            <div class="article-name">${p.name}</div>
            <div class="article-meta" style="font-weight:700;color:var(--text-2)">${fmt(p.price)} FCFA</div>
            ${recipeNames ? `<div class="article-meta" style="margin-top:2px;color:var(--text-3)">${recipeNames}</div>` : ''}
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
            <span class="status ${canMake?'st-ok':'st-out'}">${canMake?IC.check:IC.xmark} ${canMake?avail+' fab.':'Indispo'}</span>
            <div style="display:flex;gap:6px">
              <button onclick="nav('edit-product',{editProductId:${p.id}})" style="background:none;border:1px solid var(--gray-3);border-radius:6px;padding:4px 8px;cursor:pointer;color:var(--text-2)">${IC.settings}</button>
              <button onclick="deleteProduct(${p.id})" style="background:none;border:1px solid var(--gray-3);border-radius:6px;padding:4px 8px;cursor:pointer;color:var(--text-2)">${IC.trash}</button>
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── SALES ─────────────────────────────────────
function vSales() {
  const today   = new Date().toDateString();
  const todayCA = S.sales.filter(s=>new Date(s.date).toDateString()===today).reduce((s,v)=>s+v.total,0);
  const avail   = S.products.filter(p=>productMaxMake(p)>0);

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">Ventes</div>
    <div class="sub-hero-big">${fmt(todayCA)} <span style="font-size:16px;color:var(--gray-5)">FCFA</span></div>
    <div class="sub-hero-sub">Aujourd'hui · ${S.sales.filter(s=>new Date(s.date).toDateString()===new Date().toDateString()).length} vente(s)</div>
  </div>
  <div class="container">
    <div class="card" style="margin-bottom:14px">
      <div class="card-title">Nouvelle vente</div>
      <div class="form-group">
        <label class="form-label">Produit</label>
        <select class="input" id="sale-product">
          <option value="">— Sélectionner —</option>
          ${avail.map(p=>`<option value="${p.id}">${p.name} — ${fmt(p.price)} FCFA (${productMaxMake(p)} fab.)</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Quantité</label>
        <input type="number" class="input" id="sale-qty" value="1" min="1">
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" style="flex:1" onclick="addToCart();S.cartOpen=true;render()">Confirmer</button>
        <button class="btn btn-ghost" onclick="toggleCart()" style="flex:1">
          ${S.cartOpen ? 'Fermer panier' : 'Faire un panier ?'}${S.cart.length>0?` (${S.cart.length})`:''}
        </button>
      </div>
    </div>
    ${S.cartOpen ? `
    <div class="card" style="margin-bottom:14px;border:2px solid var(--black)">
      <div class="card-title">Panier (${S.cart.length} article${S.cart.length>1?'s':''})</div>
      ${S.cart.length===0 ? `<div style="font-size:13px;color:var(--text-3);padding:8px 0">Panier vide — ajoute des produits ci-dessus.</div>` :
        S.cart.map((c,i) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">${c.productName}</div>
            <div class="cart-item-sub">×${c.qty} · ${fmt(c.unitPrice * c.qty)} FCFA</div>
          </div>
          <button class="cart-remove" onclick="removeFromCart(${i})">${IC.xmark}</button>
        </div>`).join('')}
      ${S.cart.length>0 ? `
      <div class="cart-total">Total : <strong>${fmt(S.cart.reduce((s,c)=>s+c.unitPrice*c.qty,0))} FCFA</strong></div>
      <button class="btn btn-primary" style="margin-top:10px" onclick="confirmCart()">Valider la vente</button>` : ''}
    </div>` : ''}
    <div class="section-hd">
      <div class="section-lbl">Historique</div>
      <div style="font-size:12px;color:var(--text-3)">${S.sales.length} vente(s)</div>
    </div>
    ${S.sales.length===0 ? `
    <div class="empty">
      <div class="empty-ico">${IC.dollarLg}</div>
      <div class="empty-title">Aucune vente</div>
      <div class="empty-text">Les ventes apparaîtront ici.</div>
    </div>` : S.sales.map(s=>`
    <div class="sale-item">
      <div class="sale-dot"></div>
      <div class="sale-info">
        <div class="sale-prod">${s.productName}</div>
        <div class="sale-date">${fmtDate(s.date)}</div>
      </div>
      <div class="sale-right">
        <div class="sale-total">${fmt(s.total)} FCFA</div>
        <div class="sale-qty">×${s.qty}</div>
      </div>
    </div>`).join('')}
  </div>`;
}

// ── FINANCIAL ─────────────────────────────────
function vFinancial() {
  const filtered = salesForPeriod();
  const totalCA  = filtered.reduce((s,v)=>s+v.total,0);
  const avg      = filtered.length ? Math.round(totalCA/filtered.length) : 0;
  const stockVal = S.articles.reduce((s,a)=>s+a.stock*(a.price||0),0);

  const stats = {};
  filtered.forEach(s => {
    if (!stats[s.productName]) stats[s.productName]={qty:0,rev:0};
    stats[s.productName].qty += s.qty;
    stats[s.productName].rev += s.total;
  });
  const top    = Object.entries(stats).sort((a,b)=>b[1].rev-a[1].rev).slice(0,5);
  const recos  = S.articles
    .filter(a => a.stock < a.min && a.min > 0)
    .map(a => {
      const toOrder  = Math.ceil(a.min - a.stock);
      const daysLeft = a.lead > 0 ? Math.floor(a.stock / Math.max(1, a.min / Math.max(a.lead,1))) : '?';
      return { ...a, toOrder, daysLeft };
    });

  const periods = [
    { key:'today', label:"Auj."  },
    { key:'7d',    label:"7 j"   },
    { key:'30d',   label:"30 j"  },
    { key:'all',   label:"Tout"  },
  ];

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">Bilan financier</div>
    <div class="sub-hero-big">${fmt(totalCA)} <span style="font-size:16px;color:var(--gray-5)">FCFA</span></div>
    <div class="sub-hero-sub">${filtered.length} vente(s) · période sélectionnée</div>
  </div>
  <div class="container">
    <div class="period-tabs">
      ${periods.map(p=>`<button class="period-tab ${S.period===p.key?'active':''}" onclick="S.period='${p.key}';render()">${p.label}</button>`).join('')}
    </div>
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${fmt(totalCA)}</div><div class="metric-lbl">CA</div></div>
      <div class="metric-card"><div class="metric-val">${filtered.length}</div><div class="metric-lbl">Ventes</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(avg)}</div><div class="metric-lbl">Ticket moy.</div></div>
    </div>
    <div class="metric-grid">
      <div class="metric-card"><div class="metric-val">${S.articles.length}</div><div class="metric-lbl">Articles</div></div>
      <div class="metric-card"><div class="metric-val">${S.articles.filter(a=>a.stock<a.min&&a.min>0).length}</div><div class="metric-lbl">Alertes</div></div>
      <div class="metric-card"><div class="metric-val">${fmt(stockVal)}</div><div class="metric-lbl">Val. stock</div></div>
    </div>
    <div class="card">
      <div class="card-title">Top produits</div>
      ${top.length===0
        ? `<div style="font-size:13px;color:var(--text-3)">Aucune vente sur cette période.</div>`
        : top.map(([name,d],i)=>`
          <div class="rank-item">
            <div class="rank-num ${i===0?'r1':''}">${i+1}</div>
            <div class="rank-name">${name}</div>
            <div class="rank-rev">${fmt(d.rev)} FCFA</div>
          </div>`).join('')}
    </div>
    ${S.predictions.length > 0 ? `
    <div class="section-hd" style="margin-top:8px">
      <div class="section-lbl">Prédictions IA</div>
      <div style="font-size:11px;color:var(--text-3)">WMA · EOQ · Safety Stock</div>
    </div>
    ${S.predictions.filter(p => p.status !== 'no_data').map((p, i) => `
    <div class="pred-card ${p.status}" style="animation-delay:${i * 0.06}s">
      <div class="pred-dot"></div>
      <div class="pred-body">
        <div class="pred-name">${p.article_name}</div>
        <div class="pred-msg">${p.message}</div>
        ${p.status !== 'no_data' && p.daily_demand > 0 ? `
        <div class="pred-stats">
          <div class="pred-stat">Stock <strong>${p.current_stock} ${p.unit}</strong></div>
          ${p.days_remaining !== null ? `<div class="pred-stat">Jours restants <strong>${p.days_remaining}j</strong></div>` : ''}
          <div class="pred-stat">EOQ <strong>${p.eoq} ${p.unit}</strong></div>
          <div class="pred-stat">Safety Stock <strong>${p.safety_stock} ${p.unit}</strong></div>
        </div>` : ''}
      </div>
    </div>`).join('')}` : ''}
  </div>`;
}

// ── DETAIL ────────────────────────────────────
function vDetail() {
  const art = S.articles.find(a => a.id===S.selectedId);
  if (!art) { nav('pantry'); return ''; }
  const st  = stockStatus(art.stock, art.min);
  const pct = art.min>0 ? Math.min(100,Math.round((art.stock/Math.max(art.min*2,1))*100)) : 100;

  // Produits qui utilisent cet article
  const usedIn = S.products.filter(p => p.composition.some(c=>c.id===art.id));

  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('pantry')">${IC.left}</button>
    <div style="display:flex;align-items:center;gap:14px">
      <div style="width:56px;height:56px;border-radius:14px;background:var(--gray-8);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:var(--white);flex-shrink:0">${initials(art.name)}</div>
      <div>
        <div style="font-size:22px;font-weight:800;color:var(--white)">${art.name}</div>
        <span class="status ${st.cls}" style="margin-top:6px;display:inline-flex">${st.icon} ${st.label}</span>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="gauge">
        <div class="gauge-val">${art.stock}</div>
        <div class="gauge-unit">${art.unit} en stock</div>
        <div class="progress" style="margin:14px 0 6px;height:6px">
          <div class="progress-bar ${st.bar}" style="width:${pct}%"></div>
        </div>
        <div class="gauge-lbl">${art.min>0?`Seuil minimum : ${art.min} ${art.unit}`:'Seuil non défini — sera calculé automatiquement'}</div>
      </div>
    </div>

    <div class="card" style="margin-top:8px">
      <div class="card-title">Modifier le stock</div>
      <div class="action-toggle">
        <button class="toggle-btn ${S.action==='add'?'t-active':''}" onclick="S.action='add';render()">
          <div class="toggle-ico">${IC.download}</div>
          <div class="toggle-label">Réception</div>
        </button>
        <button class="toggle-btn ${S.action==='remove'?'t-active':''}" onclick="S.action='remove';render()">
          <div class="toggle-ico">${IC.upload}</div>
          <div class="toggle-label">Retrait</div>
        </button>
      </div>
      <div class="qty-row">
        <button class="qty-ctrl" onclick="S.qty=Math.max(1,S.qty-1);render()">${IC.minus}</button>
        <input class="qty-val" type="number" min="1" step="0.5" value="${S.qty}" oninput="S.qty=parseFloat(this.value)||1" style="width:60px;text-align:center;border:none;background:none;font-size:inherit;font-weight:inherit;color:inherit">
        <button class="qty-ctrl" onclick="S.qty++;render()">${IC.plus}</button>
      </div>
      <div class="chip-row">
        ${[1,5,10,25,50,100].map(n=>`<button class="chip ${S.qty===n?'active':''}" onclick="S.qty=${n};render()">${n}</button>`).join('')}
      </div>
      <div style="height:10px"></div>
      <button class="btn btn-primary" onclick="applyStock()">
        ${S.action==='add'?`Ajouter ${S.qty} ${art.unit}`:`Retirer ${S.qty} ${art.unit}`}
      </button>
    </div>

    <div class="card" style="margin-top:8px">
      <div class="card-title">Informations</div>
      <div class="info-row">
        <span class="info-lbl">${IC.truck} Délai livraison</span>
        <span class="info-val">${art.lead} jours</span>
      </div>
      ${usedIn.length>0 ? `
      <div class="info-row" style="align-items:flex-start">
        <span class="info-lbl">${IC.tag} Utilisé dans</span>
        <span class="info-val" style="text-align:right">${usedIn.map(p=>{
          const c=p.composition.find(x=>x.id===art.id);
          return `${p.name} (×${c.qty})`;
        }).join('<br>')}</span>
      </div>
      <div class="info-row">
        <span class="info-lbl">${IC.alert} Seuil auto</span>
        <span class="info-val">${art.min>0?art.min+' '+art.unit:'non calculé'}</span>
      </div>` : ''}
    </div>

    <div style="margin-top:10px">
      <button class="btn btn-ghost" onclick="confirmDelete(${art.id})" style="color:var(--black);border-color:var(--gray-3)">
        ${IC.trash} Supprimer cet article
      </button>
    </div>
  </div>`;
}

function confirmDelete(id) {
  const art = S.articles.find(a=>a.id===id);
  if (!art) return;
  // Confirmation simple
  const usedIn = S.products.filter(p=>p.composition.some(c=>c.id===id));
  const msg = usedIn.length>0
    ? `Supprimer "${art.name}" ? Il est utilisé dans ${usedIn.length} produit(s) — ces compositions seront mises à jour.`
    : `Supprimer "${art.name}" ?`;
  if (confirm(msg)) deleteArticle(id);
}

// ── ADD ARTICLE ───────────────────────────────
function vAdd() {
  const f = S.form;
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('pantry')">${IC.left}</button>
    <div class="sub-hero-title">Nouvel article</div>
    <div class="sub-hero-sub">Ajouter un article à ton stock</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">Nom de l'article *</label>
        <input class="input" type="text" placeholder="ex: Farine, Tissu, Bouteilles…" value="${f.name.replace(/"/g,'&quot;')}" oninput="S.form.name=this.value">
      </div>
      <div class="form-group">
        <label class="form-label">Unité de mesure</label>
        <div class="unit-combo" id="unit-combo-wrap">
          <input class="input" type="text" id="unit-input"
            placeholder="ex: kg, pcs, m..."
            value="${f.unit}"
            oninput="updateUnitDrop()"
            onfocus="openUnitDrop()"
            onblur="setTimeout(closeUnitDrop,160)">
          <button type="button" class="unit-chevron"
            onmousedown="event.preventDefault()"
            onclick="S.unitDropOpen?closeUnitDrop():openUnitDrop()">${IC.chevron}</button>
        </div>
        ${(() => {
          const cond = UNIT_COND[f.unit];
          if (!cond) return '';
          const isOther = S.unitCondVal === 'Autre';
          return `
          <div class="form-group" style="margin-top:8px">
            <label class="form-label">${cond.label}</label>
            <div class="chip-row" style="margin-top:6px">
              ${cond.opts.map(o => `<button type="button" class="chip ${S.unitCondVal===o?'active':''}" onclick="selectUnitCond('${o}')">${o}</button>`).join('')}
            </div>
            ${isOther ? `<input class="input" type="number" min="1" step="1" placeholder="Entier..." style="margin-top:8px" value="${S.unitCondOther}" oninput="S.unitCondOther=Math.round(this.value)||''">` : ''}
          </div>`;
        })()}
      </div>
      <div class="input-row form-group">
        <div>
          <label class="form-label">Quantité initiale</label>
          <input class="input" type="number" placeholder="0" step="0.5" value="${f.stock}" oninput="S.form.stock=this.value">
        </div>
        <div>
          <label class="form-label">Délai livraison (j)</label>
          <input class="input" type="number" placeholder="7" value="${f.lead}" oninput="S.form.lead=this.value">
        </div>
      </div>
      <div style="background:var(--gray-1);border:1px solid var(--border);border-radius:var(--r-md);padding:12px;font-size:12px;color:var(--text-3);margin-bottom:14px">
        ${IC.info} Le seuil d'alerte sera calculé automatiquement quand tu associes cet article à un produit.
      </div>
      <button class="btn btn-primary" onclick="saveArticle()">Ajouter cet article</button>
    </div>
  </div>`;
}

// ── ADD PRODUCT ───────────────────────────────
function vAddProduct() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('products')">${IC.left}</button>
    <div class="sub-hero-title">Nouveau produit</div>
    <div class="sub-hero-sub">Produit fini composé d'articles</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">Nom du produit *</label>
        <input class="input" id="prod-name" type="text" placeholder="ex: Boubou, Robe, Jupe…">
      </div>
      <div class="form-group">
        <label class="form-label">Prix de vente (FCFA)</label>
        <input class="input" id="prod-price" type="number" placeholder="0" step="100">
      </div>
      ${S.articles.length>0 ? `
      <div class="form-group">
        <label class="form-label">Composition <span style="font-weight:400;text-transform:none;letter-spacing:0">(quantité par unité produite)</span></label>
        ${S.articles.map(a=>`
        <div class="comp-input" data-id="${a.id}" style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div style="flex:1;font-size:13px;font-weight:600;color:var(--text-2)">${a.name}
            <span style="color:var(--text-3);font-weight:400;font-size:11px">(${fmtQty(a.stock)} ${a.unit} dispo)</span>
          </div>
          <input type="number" class="input comp-qty" placeholder="0" step="0.5" min="0" style="width:76px;text-align:center">
          <select class="input" style="width:70px;padding:8px 4px"
            onchange="S.compUnits[${a.id}]=this.value">
            ${compatibleUnits(a.unit).map(u =>
              `<option value="${u}" ${(S.compUnits[a.id]||a.unit)===u?'selected':''}>${u}</option>`
            ).join('')}
          </select>
        </div>`).join('')}
      </div>` : `
      <div style="padding:14px;background:var(--gray-1);border-radius:var(--r-md);border:1px solid var(--border);font-size:13px;color:var(--text-3);text-align:center;margin-bottom:14px">
        Ajoute d'abord des articles au stock pour définir la composition.
      </div>`}
      <button class="btn btn-primary" onclick="saveProduct()">Créer ce produit</button>
    </div>
  </div>`;
}

// ── EDIT PRODUCT ──────────────────────────────
function vEditProduct() {
  const p = S.products.find(p => p.id === S.editProductId);
  if (!p) { nav('products'); return ''; }
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('products')">${IC.left}</button>
    <div class="sub-hero-title">Modifier le produit</div>
    <div class="sub-hero-sub">${p.name}</div>
  </div>
  <div class="container">
    <div class="card">
      <div class="form-group">
        <label class="form-label">Nom du produit *</label>
        <input class="input" id="prod-name" type="text" value="${p.name.replace(/"/g,'&quot;')}">
      </div>
      <div class="form-group">
        <label class="form-label">Prix de vente (FCFA)</label>
        <input class="input" id="prod-price" type="number" placeholder="0" step="100" value="${p.price}">
      </div>
      ${S.articles.length > 0 ? `
      <div class="form-group">
        <label class="form-label">Composition <span style="font-weight:400;text-transform:none;letter-spacing:0">(quantité par unité produite)</span></label>
        ${S.articles.map(a => {
          const existing = p.composition.find(c => c.id === a.id);
          return `
          <div class="comp-input" data-id="${a.id}" style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
            <div style="flex:1;font-size:13px;font-weight:600;color:var(--text-2)">${a.name}
              <span style="color:var(--text-3);font-weight:400;font-size:11px">(${fmtQty(a.stock)} ${a.unit} dispo)</span>
            </div>
            <input type="number" class="input comp-qty" placeholder="0" step="0.5" min="0" style="width:76px;text-align:center" value="${existing ? existing.qty : ''}">
            <select class="input" style="width:70px;padding:8px 4px"
              onchange="S.compUnits[${a.id}]=this.value">
              ${compatibleUnits(a.unit).map(u =>
                `<option value="${u}" ${(S.compUnits[a.id]||a.unit)===u?'selected':''}>${u}</option>`
              ).join('')}
            </select>
          </div>`;
        }).join('')}
      </div>` : ''}
      <button class="btn btn-primary" onclick="saveEditProduct()">Mettre à jour</button>
    </div>
  </div>`;
}

// ── SPECTRA ───────────────────────────────────
function vSpectra() {
  const sp = S.spectra;

  // ── Étape : caméra ──
  if (sp.step === 'camera') return `
  <div class="spectra-wrap">
    <button class="back-btn" onclick="nav('home')" style="align-self:flex-start;margin-bottom:8px">${IC.left}</button>
    <div class="spectra-hero">
      <div class="spectra-logo">${IC.cameraLg}</div>
      <div class="spectra-title">Spectra</div>
      <div class="spectra-sub">Prends une photo de ton stock.<br>L'IA identifie et comptabilise tout.</div>
    </div>
    <label class="btn btn-primary spectra-capture-btn" for="spectra-file">
      ${IC.camera} &nbsp; Scanner le stock
    </label>
    <input id="spectra-file" type="file" accept="image/*" capture="environment"
           style="display:none" onchange="spectraOnFile(this)">
    <div class="spectra-hint">L'image ne quitte jamais ton appareil — seule l'analyse est envoyée.</div>
  </div>`;

  // ── Étape : chargement ──
  if (sp.step === 'loading') return `
  <div class="spectra-wrap spectra-center">
    <div class="spectra-spinner"></div>
    <div class="spectra-loading-title">Spectra analyse…</div>
    <div class="spectra-sub">Le modèle YOLOv8 est en train de traiter l'image.</div>
  </div>`;

  // ── Étape : confirmation ──
  if (sp.step === 'confirm') {
    const item = sp.queue[sp.current];
    if (!item) { spectraFinish(); return ''; }
    const progress = `${sp.current + 1} / ${sp.queue.length}`;
    const label = item.matched_name || item.detected_name;

    return `
  <div class="spectra-wrap">
    <div class="spectra-progress-bar">
      <div class="spectra-progress-fill" style="width:${((sp.current)/sp.queue.length)*100}%"></div>
    </div>

    <div class="spectra-confirm-card">
      <div class="spectra-conf-badge">${progress}</div>
      <div class="spectra-conf-icon">${IC.cameraLg}</div>
      <div class="spectra-conf-label">Article détecté</div>
      <div class="spectra-conf-name">${label}</div>
      <div class="spectra-conf-meta">
        <span class="spectra-pill">×${item.quantity}</span>
        <span class="spectra-pill">${item.confidence}% confiance</span>
        ${item.matched_name ? `<span class="spectra-pill spectra-pill-match">En base</span>` : `<span class="spectra-pill spectra-pill-new">Nouvel article</span>`}
      </div>
      <div class="spectra-conf-question">C'est bien ça ?</div>

      ${sp.naming ? `
        <div class="spectra-name-input-wrap">
          <input id="spectra-name-input" class="spectra-name-input" type="text"
                 placeholder="Nom de l'article…" autocomplete="off">
          <button class="btn btn-primary" style="margin-top:10px;width:100%" onclick="spectraSubmitName()">
            Confirmer
          </button>
        </div>
      ` : `
        <div class="spectra-conf-actions">
          <button class="btn spectra-btn-yes" onclick="spectraConfirmYes()">
            ${IC.check}&nbsp; Oui, c'est ça
          </button>
          <button class="btn spectra-btn-no" onclick="spectraConfirmNo()">
            ${IC.xmark}&nbsp; Non
          </button>
        </div>
      `}
    </div>
  </div>`;
  }

  // ── Étape : terminé ──
  if (sp.step === 'done') {
    const total = sp.results.length;
    return `
  <div class="spectra-wrap spectra-center">
    <div class="spectra-done-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div class="spectra-loading-title">Stock mis à jour !</div>
    <div class="spectra-sub">${total} article${total !== 1 ? 's' : ''} ajouté${total !== 1 ? 's' : ''} au stock.</div>
    <div class="spectra-results">
      ${sp.results.map(r => `
        <div class="spectra-result-row">
          <span class="spectra-result-name">${r.name}</span>
          <span class="spectra-result-qty">+${r.new_qty} ${r.unit}</span>
          <span class="spectra-result-action">${r.action === 'created' ? 'Créé' : 'Mis à jour'}</span>
        </div>
      `).join('')}
    </div>
    <button class="btn btn-primary" style="margin-top:24px" onclick="spectraReset();nav('pantry')">
      Voir le stock
    </button>
    <button class="btn" style="margin-top:10px" onclick="spectraReset()">
      Scanner à nouveau
    </button>
  </div>`;
  }

  return '';
}

// ── Spectra : logique ──────────────────────────

async function spectraOnFile(input) {
  const file = input.files[0];
  if (!file) return;

  // Convertir en base64
  const reader = new FileReader();
  reader.onload = async (e) => {
    S.spectra.step = 'loading';
    render();

    try {
      const data = await api('POST', '/api/spectra/scan', { image: e.target.result });
      if (!data.detections || data.detections.length === 0) {
        showToast('Aucun article détecté — réessaie avec une meilleure photo', 'error');
        S.spectra.step = 'camera';
        render();
        return;
      }
      S.spectra.queue   = data.detections;
      S.spectra.current = 0;
      S.spectra.confirmed = [];
      S.spectra.naming  = false;
      S.spectra.step    = 'confirm';
      render();
    } catch (err) {
      showToast(err.message || 'Erreur Spectra', 'error');
      S.spectra.step = 'camera';
      render();
    }
  };
  reader.readAsDataURL(file);
}

function spectraConfirmYes() {
  const item = S.spectra.queue[S.spectra.current];
  S.spectra.confirmed.push({
    article_id: item.matched_id || null,
    name:       item.matched_name || item.detected_name,
    quantity:   item.quantity,
    unit:       item.matched_unit || 'pce',
  });
  spectraNext();
}

function spectraConfirmNo() {
  S.spectra.naming = true;
  render();
  setTimeout(() => document.getElementById('spectra-name-input')?.focus(), 80);
}

function spectraSubmitName() {
  const input = document.getElementById('spectra-name-input');
  const name = input?.value?.trim();
  if (!name) { showToast('Saisis un nom', 'error'); return; }

  const item = S.spectra.queue[S.spectra.current];
  S.spectra.confirmed.push({
    article_id: null,
    name:       name,
    quantity:   item.quantity,
    unit:       item.matched_unit || 'pce',
  });
  S.spectra.naming = false;
  spectraNext();
}

function spectraNext() {
  S.spectra.current++;
  S.spectra.naming = false;
  if (S.spectra.current >= S.spectra.queue.length) {
    spectraFinish();
  } else {
    render();
  }
}

async function spectraFinish() {
  S.spectra.step = 'loading';
  render();

  try {
    const data = await api('POST', '/api/spectra/confirm', { items: S.spectra.confirmed });
    S.spectra.results = data.results || [];
    S.spectra.step    = 'done';
    // Mettre à jour les articles locaux
    await loadData();
    render();
  } catch (err) {
    showToast(err.message || 'Erreur lors de la sauvegarde', 'error');
    S.spectra.step = 'confirm';
    render();
  }
}

function spectraReset() {
  S.spectra = {
    step: 'camera', queue: [], current: 0,
    confirmed: [], naming: false, results: [],
  };
  render();
}

// ── SETTINGS ──────────────────────────────────
function vSettings() {
  return `
  <div class="sub-hero">
    <button class="back-btn-dark" style="margin-bottom:14px" onclick="nav('home')">${IC.left}</button>
    <div class="sub-hero-title">Paramètres</div>
    <div class="sub-hero-sub">${S.session.email}</div>
  </div>
  <div class="container">
    <div class="settings-section">
      <div class="settings-label">Mon compte</div>
      ${S.settingsEdit ? `
      <div class="card" style="padding:14px">
        <div class="form-group">
          <label class="form-label">Nom</label>
          <input class="input" id="set-name" type="text" value="${S.session.name.replace(/"/g,'&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Commerce</label>
          <input class="input" id="set-biz" type="text" value="${(S.session.business||'').replace(/"/g,'&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="input" id="set-email" type="email" value="${S.session.email.replace(/"/g,'&quot;')}">
        </div>
        <div style="display:flex;gap:8px;margin-top:4px">
          <button class="btn btn-primary" style="flex:1" onclick="saveAccountInfo()">Sauvegarder</button>
          <button class="btn btn-ghost" style="flex:1" onclick="S.settingsEdit=false;render()">Annuler</button>
        </div>
      </div>
      ` : `
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.user}</span>
            <div>
              <div class="settings-row-lbl">${S.session.name}</div>
              <div class="settings-row-sub">${S.session.business || 'Commerce'}</div>
            </div>
          </div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.info}</span>
            <div>
              <div class="settings-row-lbl">${S.session.email}</div>
              <div class="settings-row-sub">Adresse email</div>
            </div>
          </div>
        </div>
        <div class="settings-row" onclick="S.settingsEdit=true;render()">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.settings}</span>
            <div class="settings-row-lbl">Modifier</div>
          </div>
          ${IC.chevron}
        </div>
      </div>`}
    </div>

    <div class="settings-section">
      <div class="settings-label">Apparence</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${S.darkMode?IC.moon:IC.sun}</span>
            <div>
              <div class="settings-row-lbl">Mode ${S.darkMode?'sombre':'clair'}</div>
            </div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" ${S.darkMode?'checked':''} onchange="toggleDark()">
            <span class="toggle-track"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">Données</div>
      <div class="settings-row-block">
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.box}</span><div class="settings-row-lbl">${S.articles.length} article${S.articles.length!==1?'s':''}</div></div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.tag}</span><div class="settings-row-lbl">${S.products.length} produit${S.products.length!==1?'s':''}</div></div>
        </div>
        <div class="settings-row" style="cursor:default">
          <div class="settings-row-inner"><span class="settings-row-ico">${IC.dollar}</span><div class="settings-row-lbl">${S.sales.length} vente${S.sales.length!==1?'s':''}</div></div>
        </div>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-label">Session</div>
      <div class="settings-row-block">
        <div class="settings-row" onclick="doLogout()">
          <div class="settings-row-inner">
            <span class="settings-row-ico">${IC.logout}</span>
            <div class="settings-row-lbl">Se déconnecter</div>
          </div>
          ${IC.chevron}
        </div>
      </div>
    </div>

    <div style="text-align:center;padding:24px 0 8px;font-size:11px;color:var(--text-3)">STOCKR · v0.3.0 · 2026</div>
  </div>`;
}

// ── Init ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Exposer au global pour les onclick inline
  window.S             = S;
  window.nav           = nav;
  window.render        = render;
  window.applyStock    = applyStock;
  window.deleteArticle = deleteArticle;
  window.confirmDelete = confirmDelete;
  window.recordSale    = recordSale;
  window.saveArticle   = saveArticle;
  window.saveProduct   = saveProduct;
  window.toggleCart      = toggleCart;
  window.deleteProduct   = deleteProduct;
  window.saveEditProduct = saveEditProduct;
  window.toggleAuthPwd   = toggleAuthPwd;
  window.addToCart       = addToCart;
  window.removeFromCart  = removeFromCart;
  window.confirmCart     = confirmCart;
  window.openUnitDrop    = openUnitDrop;
  window.closeUnitDrop   = closeUnitDrop;
  window.updateUnitDrop  = updateUnitDrop;
  window.selectUnit      = selectUnit;
  window.selectUnitCond  = selectUnitCond;
  window.saveAccountInfo = saveAccountInfo;
  window.toggleDark      = toggleDark;
  window.doLogin         = doLogin;
  window.doRegister      = doRegister;
  window.authNextStep    = authNextStep;
  window.spectraOnFile   = spectraOnFile;
  window.spectraConfirmYes = spectraConfirmYes;
  window.spectraConfirmNo  = spectraConfirmNo;
  window.spectraSubmitName = spectraSubmitName;
  window.spectraReset    = spectraReset;
  window.doLogout      = doLogout;
  window.showToast     = showToast;
  window.loadData      = loadData;

  // Restaurer la session + token si existants
  const saved = getSession();
  if (saved && saved.token) {
    S.token   = saved.token;
    S.session = { id: saved.id, name: saved.name, email: saved.email, business: saved.business };
    render(); // Affiche l'app immédiatement
    loadData(); // Charge les données en arrière-plan
  } else {
    render(); // Affiche l'écran auth
  }
});
