// ── STOCKR Service Worker ─────────────────────
// Stratégie : Cache-first pour assets statiques,
//             Network-first pour l'API

const CACHE_NAME = 'stockr-v21-spectra-precise';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/styles.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// ── Installation : mise en cache des assets ───
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activation : nettoyage des anciens caches ─
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch : stratégie hybride ─────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // CDN (Chart.js, jsPDF) → network avec fallback cache
  if (url.hostname.includes('cdn.jsdelivr.net') ||
      url.hostname.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Requêtes cross-origin (backend API externe) → ne pas intercepter
  // Laisse le navigateur gérer directement pour que le fallback localStorage fonctionne
  if (url.origin !== self.location.origin) {
    return;
  }

  // API same-origin → network-first, erreur JSON si hors-ligne
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(
          JSON.stringify({ error: 'Hors-ligne — données locales utilisées' }),
          { status: 503, headers: { 'Content-Type': 'application/json' } }
        )
      )
    );
    return;
  }

  // Assets statiques → cache-first
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return res;
        });
      })
      .catch(() => caches.match('/index.html'))
  );
});

// ── Message : forcer la mise à jour du cache ──
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') self.skipWaiting();
});
