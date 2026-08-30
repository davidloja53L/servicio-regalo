# Para Daniela, con amor 💛

App web estática (PWA). Cada día, en un ciclo de 30 días, muestra:

1. **Splash** — botón "Te amo, Daniela"
2. **Carrusel de fotos** (2-3 por día, deslizable) en un marco romántico, + nombres de la pareja
3. **Sobre sellado** — al tocarlo, la solapa se abre de verdad y la carta emerge desde adentro
4. **Carta + pregunta** — al confirmar, suena "Until I Found You" y se revela el contador
5. **Tiempo juntos** — años/meses/días calculados en automático desde tu aniversario, + foto de cierre + mensaje final

Los días alternan uno a uno: los días pares (2, 4, 6...) giran en torno a Emi, los impares son de pareja (Nueva York, Papallacta, momentos en casa), y el día 30 cierra con un mensaje de familia completa.

## Archivos
- `index.html` — estructura de las 2 pantallas (splash + pantalla diaria con sus 3 secciones)
- `style.css` — diseño romántico, mobile-first
- `app.js` — las 30 cartas, lógica del carrusel, del contador y del ciclo de 30 días
- `manifest.json` — configuración PWA
- `sw.js` — service worker (carga instantánea del cascarón)
- `icons/` — íconos para "Añadir a pantalla de inicio"

## 1. Antes de subirlo — edita `app.js`

Al principio del archivo hay 5 constantes para personalizar:

| Constante | Qué es | Valor ya configurado |
|---|---|---|
| `NOMBRE_ESPOSA` | Nombre en el botón de inicio | `"Daniela"` |
| `NOMBRES_PAREJA` | Firma bajo el carrusel de fotos | `"David & Daniela"` |
| `NOMBRE_HIJO` | Cómo se le nombra en las cartas | `"Emi"` |
| `FECHA_INICIO` | Día en que arranca el ciclo de 30 días | `"2026-08-06"` (de prueba — cámbiala antes de publicar) |
| `FECHA_RELACION` | Aniversario, para que el contador sea exacto | `"2011-12-06"` |

Ya dejé las primeras cuatro configuradas. Solo falta que cambies **`FECHA_INICIO`** por la fecha real en la que quieres que arranque el regalo antes de publicarlo (ahora mismo dice 6 de agosto, puesto solo para pruebas).

Luego, en el array `RECUERDOS`, cada uno de los 30 días tiene:
- `fecha_memoria`: el título sobre el carrusel (puedes dejar la descripción que ya tiene, o poner la fecha real de esa foto)
- `fotos`: un array de 2 o 3 URLs — reemplaza cada `"PEGA_AQUI_TU_FOTO_D#_N"` con el link real de tu foto:
  - Opción fácil: sube tus fotos a una carpeta `fotos/` dentro del proyecto (ej. `fotos/nyc-1.jpg`) y usa esa ruta relativa.
  - También funciona un link público de Imgur, Google Photos, etc.
- `carta`: el mensaje del día — ya viene escrito, pero puedes editarlo a tu gusto.

La foto de cierre (la que acompaña al contador) reutiliza automáticamente la primera foto del carrusel de ese día — no necesitas subir una foto extra.

## 2. La música (ya está resuelta, no necesitas archivos)

En vez de un mp3, la canción se reproduce desde YouTube (audio oficial de Stephen Sanchez), embebido de forma invisible en la página — no hay que comprar ni subir nada.

- Ya dejé configurado el video correcto en `app.js`, en la constante `YOUTUBE_VIDEO_ID`.
- Empieza a sonar en cuanto ella toca el botón de confirmación de la carta ("Te elijo a ti" o la variante que le toque ese día) — justo ahí, porque los celulares exigen que el audio arranque de un toque directo del usuario. Arriba a la derecha aparece un botón 🔊 para silenciarla si quiere.
- Si en algún momento ese video deja de estar disponible para incrustar (a veces pasa con contenido con derechos), solo busca otra subida oficial de la misma canción en YouTube, copia la parte de la URL que va después de `v=`, y reemplaza el valor de `YOUTUBE_VIDEO_ID` en `app.js`.

## 3. Subir a GitHub (sin terminal)
1. Entra a [github.com](https://github.com), crea un repositorio nuevo (ej. `regalo-daniela`), sin marcar la opción de README.
2. En la página del repo, usa **Add file → Upload files** y arrastra todos los archivos y la carpeta `icons/`.
3. Escribe un mensaje de commit y confirma con **Commit changes**.

## 4. Desplegar en Render
1. Entra a [render.com](https://render.com) y en el Dashboard elige **New +** → **Static Site**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio.
3. En la configuración:
   - **Build Command**: déjalo vacío.
   - **Publish directory**: `.` (la raíz del repo).
4. Clic en **Create Static Site**. Render te dará una URL tipo `https://regalo-daniela.onrender.com`.

## 5. Que Daniela lo instale en su celular
1. Envíale el link por WhatsApp.
2. En Chrome (Android) o Safari (iPhone), puede tocar el menú y elegir **"Añadir a pantalla de inicio"**.
3. Quedará como un ícono con el corazón dorado, y se abrirá en pantalla completa.

## Notas
- El ciclo de 30 días se repite automáticamente — no necesitas hacer nada después de publicarlo.
- El contador de "tiempo juntos" se recalcula solo, cada vez que ella lo abre, así que siempre estará al día.
- La canción necesita conexión a internet para sonar (viene de YouTube) — no funcionará si ella abre la app sin datos o wifi. El resto de la app (fotos, cartas, contador) si quedó cacheado por el service worker, sí funciona sin conexión.
