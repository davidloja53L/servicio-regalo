/* =====================================================
   Service Worker — "Para Daniela, con amor"
   -----------------------------------------------------
   Hace dos cosas:
   1. Guarda el "cascarón" de la app (HTML, CSS, JS, iconos)
      para que la pantalla de inicio abra al instante.
   2. Va guardando las fotos que ella ya vio, así los días
      siguientes cargan más rápido y funcionan sin señal.
   ===================================================== */

const VERSION = "v2";
const CACHE_SHELL = "regalo-daniela-shell-" + VERSION;
const CACHE_FOTOS = "regalo-daniela-fotos-" + VERSION;

const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

/* ---------- Instalación ---------- */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_SHELL)
      .then(function (cache) {
        // addAll falla entero si un archivo falla; los añadimos de a uno
        // para que un fallo suelto no rompa toda la instalación.
        return Promise.all(
          APP_SHELL.map(function (url) {
            return cache.add(url).catch(function () { return null; });
          })
        );
      })
      .then(function () { return self.skipWaiting(); })
  );
});

/* ---------- Activación: borrar cachés viejas ---------- */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (nombres) {
        return Promise.all(
          nombres
            .filter(function (n) {
              return n.indexOf("regalo-daniela-") === 0 &&
                     n !== CACHE_SHELL &&
                     n !== CACHE_FOTOS;
            })
            .map(function (n) { return caches.delete(n); })
        );
      })
      .then(function () { return self.clients.claim(); })
  );
});

/* ---------- Peticiones ---------- */
self.addEventListener("fetch", function (event) {
  const req = event.request;

  // Solo nos ocupamos de nuestras propias peticiones GET.
  // Lo de YouTube y Google Fonts va directo a la red, sin tocar.
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const esFoto = url.pathname.indexOf("/fotos/") !== -1;

  if (esFoto) {
    // Fotos: primero la caché (nunca cambian), si no, red y se guarda.
    event.respondWith(
      caches.match(req).then(function (guardada) {
        if (guardada) return guardada;
        return fetch(req).then(function (respuesta) {
          if (respuesta && respuesta.status === 200) {
            const copia = respuesta.clone();
            caches.open(CACHE_FOTOS).then(function (cache) {
              cache.put(req, copia);
            });
          }
          return respuesta;
        });
      })
    );
    return;
  }

  // Cascarón: responde ya con lo guardado y, en paralelo, refresca
  // la copia para la próxima visita.
  event.respondWith(
    caches.match(req).then(function (guardada) {
      const desdeRed = fetch(req)
        .then(function (respuesta) {
          if (respuesta && respuesta.status === 200) {
            const copia = respuesta.clone();
            caches.open(CACHE_SHELL).then(function (cache) {
              cache.put(req, copia);
            });
          }
          return respuesta;
        })
        .catch(function () {
          // Sin señal: si teníamos copia la usamos; si no, dejamos que falle.
          if (guardada) return guardada;
          throw new Error("sin conexión y sin copia guardada");
        });

      return guardada || desdeRed;
    })
  );
});
