# Para Daniela, con amor 💛

App web estática (PWA) con una frase y foto distinta cada día, en un ciclo de 30 días.

## Archivos
- `index.html` — estructura (splash + pantalla diaria)
- `style.css` — diseño romántico, mobile-first
- `app.js` — lógica de las 30 frases/fotos + registro del service worker
- `manifest.json` — configuración PWA
- `sw.js` — service worker (carga instantánea del cascarón)
- `icons/` — íconos para "Añadir a pantalla de inicio"

## 1. Antes de subirlo
1. Abre `app.js`.
2. Cambia `FECHA_INICIO` por la fecha en la que quieres que arranque el ciclo (por ejemplo, hoy o su cumpleaños). Formato `"AAAA-MM-DD"`.
3. En el array `RECUERDOS`, reemplaza cada `imagen_url: "PEGA_AQUI_TU_URL_X"` con el link real de tu foto:
   - Opción fácil: sube tus fotos a una carpeta `fotos/` dentro del proyecto (ej. `fotos/nyc-1.jpg`) y usa esa ruta relativa (`"fotos/nyc-1.jpg"`).
   - También funciona un link público de Imgur, Google Photos, etc.
4. Ajusta los textos `lugar` y `frase` a tu gusto — ya vienen con contenido de ejemplo sobre Nueva York, Papallacta y momentos de casa.

## 2. Subir a GitHub
```bash
# Dentro de la carpeta del proyecto
git init
git add .
git commit -m "Regalo para Daniela"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/regalo-daniela.git
git push -u origin main
```
(Crea antes el repositorio vacío en GitHub, sin README, para evitar conflictos al hacer push).

## 3. Desplegar en Render
1. Entra a [render.com](https://render.com) y en el Dashboard elige **New +** → **Static Site**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio `regalo-daniela`.
3. En la configuración:
   - **Build Command**: déjalo vacío (no hay build, es HTML/CSS/JS puro).
   - **Publish directory**: `.` (la raíz del repo).
4. Haz clic en **Create Static Site**. Render te dará una URL tipo `https://regalo-daniela.onrender.com`.

## 4. Que Daniela lo instale en su celular
1. Envíale el link de Render (por WhatsApp, por ejemplo).
2. Al abrirlo en Chrome (Android) o Safari (iPhone), puede tocar el menú y elegir **"Añadir a pantalla de inicio"**.
3. Quedará como un ícono con el corazón dorado, y al abrirlo se verá en pantalla completa, sin barra de navegador.

## Notas
- Como es un **Static Site** de Render (no un Web Service), normalmente no entra en modo "sleep" — pero la pantalla de bienvenida con el sello dorado igual cumple su función: da un momento bonito de anticipación antes de revelar el regalo, y gracias al service worker, ese cascarón carga instantáneo en visitas futuras.
- El ciclo de frases se repite cada 30 días automáticamente — no necesitas hacer nada después de publicarlo.
