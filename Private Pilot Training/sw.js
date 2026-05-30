/* KAPA Ground School — Service Worker
   Caches the app shell for offline use. Update CACHE_VERSION to force
   refresh after content updates.
*/
const CACHE_VERSION = 'kapa-gs-v1';
const ASSETS = [
  './',
  './index.html',
  './ground-school.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  /* Same-origin only */
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        /* Background refresh */
        fetch(event.request).then(fresh => {
          if (fresh && fresh.status === 200) {
            caches.open(CACHE_VERSION).then(c => c.put(event.request, fresh));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        /* Offline fallback to the app shell */
        return caches.match('./index.html');
      });
    })
  );
});
