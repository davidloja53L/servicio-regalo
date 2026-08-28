// Service Worker — "Para Daniela, con amor"
// Cachea el cascarón de la app (HTML/CSS/manifest/iconos) para que la
// pantalla de bienvenida y el botón "Abrir mi regalo" carguen al instante,
// incluso si el servidor de Render está despertando.

const CACHE_NAME = "regalo-daniela-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Estrategia: "cache primero, red de respaldo" para el cascarón.
// Así el splash screen (botón "Abrir mi regalo") aparece instantáneo
// mientras, en paralelo, el navegador pide al servidor la versión viva
// (esto ayuda a que Render empiece a "despertar" cuanto antes).
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
