# Para Daniela, con amor 💛

App web estática (PWA). Cada día, durante 3 meses (90 días), muestra:

1. **Splash** — botón "Te amo, Daniela" (aquí arranca la canción)
2. **Carrusel de fotos** (2-3 por día, deslizable, con zoom al tocarlas) en un marco romántico, + nombres de la pareja
3. **Sobre sellado** — al tocarlo, salta un confeti de girasoles y corazones, la solapa se abre de verdad y la carta emerge desde adentro, escrita sobre una hoja de papel con pliegues
4. **Carta + pregunta** — al confirmar, se revela el contador
5. **Tiempo juntos** — "Han sido los mejores" + años/meses/días que suben animados hasta la cifra real, calculada en automático desde tu aniversario + "de mi vida", foto de cierre (con zoom), mensaje final, y un botón "Verlo de nuevo" para repetir todo sin recargar la página

Detalles: las fotos se pueden ampliar tocándolas (con flechas, deslizar el dedo y tecla Escape para cerrar), el carrusel tiene flechas y puntos, y todo respeta la opción "reducir movimiento" del teléfono para quien la tenga activada.

Hay **45 días únicos** de contenido (22 de pareja, 22 de Emi/familia, 1 de cierre especial), y se reparten en un **orden fijo pero barajado** a lo largo de los 90 días — cada uno se repite exactamente 2 veces en el trimestre, nunca dos veces seguidas, y el orden ya está definido así que siempre se ve igual (no cambia cada vez que ella abre la página, solo según qué día del calendario sea).

## Archivos
- `index.html` — estructura de las pantallas
- `style.css` — diseño romántico, mobile-first
- `app.js` — las 45 cartas, el orden barajado de 90 días, carrusel, contador y visor de fotos
- `manifest.json` — configuración PWA
- `sw.js` — service worker (carga instantánea + las fotos ya vistas quedan disponibles sin señal)
- `icons/` — íconos para "Añadir a pantalla de inicio"
- `fotos/` — las 85 fotos en versión ligera (para el carrusel)
- `fotos/full/` — las mismas fotos en versión grande (solo se descargan al hacer zoom)

### Sobre las fotos
Cada foto está guardada en dos tamaños. El sitio muestra la ligera (~89 KB) y solo
descarga la grande cuando ella toca una foto para ampliarla. Por eso abre rápido
incluso con señal regular. **Sube las dos carpetas** (`fotos/` y `fotos/full/`).

## 1. Antes de subirlo — edita `app.js`

Al principio del archivo hay 5 constantes para personalizar:

| Constante | Qué es | Valor ya configurado |
|---|---|---|
| `NOMBRE_ESPOSA` | Nombre en el botón de inicio | `"Daniela"` |
| `NOMBRES_PAREJA` | Firma bajo el carrusel de fotos | `"David & Daniela"` |
| `NOMBRE_HIJO` | Cómo se le nombra en las cartas | `"Emi"` |
| `FECHA_INICIO` | Día en que arranca el ciclo de 3 meses | `"2026-08-06"` (de prueba — cámbiala antes de publicar) |
| `FECHA_RELACION` | Aniversario, para que el contador sea exacto | `"2011-12-06"` |

Ya dejé las primeras cuatro configuradas. Solo falta que cambies **`FECHA_INICIO`** por la fecha real en la que quieres que arranque el regalo antes de publicarlo (ahora mismo dice 6 de agosto, puesto solo para pruebas).

Luego, en el array `RECUERDOS`, cada uno de los **45 días únicos** tiene:
- `fecha_memoria`: el título sobre el carrusel (puedes dejar la descripción que ya tiene, o poner la fecha real de esa foto)
- `fotos`: un array de 2 o 3 URLs — reemplaza cada `"PEGA_AQUI_TU_FOTO_D#_N"` con el link real de tu foto. En total son **99 fotos** para completar los 45 días.
  - Opción recomendada: sube tus fotos a una carpeta `fotos/` dentro del proyecto (ej. `fotos/nyc-1.jpg`) y usa esa ruta relativa — es la más rápida, ya que se sirven desde el mismo sitio (ver nota sobre calidad/tamaño más abajo).
  - También funciona un link público de Imgur.
- `carta`: el mensaje del día — ya viene escrito, pero puedes editarlo a tu gusto.

La foto de cierre (la que acompaña al contador) reutiliza automáticamente la primera foto del carrusel de ese día — no necesitas subir una foto extra.

### Sobre el tamaño/calidad de las fotos
Cualquier tamaño funciona (el sitio recorta automáticamente al marco), pero para que cargue rápido y se vea nítido:
- Ideal: que el lado más largo no pase de ~1600-2000 px, comprimidas a JPEG ~80% de calidad (quedan entre 150-500 KB cada una).
- Evita subir las fotos originales del celular sin comprimir — con 99 fotos, eso puede hacer que el sitio cargue lento la primera vez.
- Si una foto es horizontal, revisa que la parte importante quede centrada, ya que el marco es vertical y recorta los lados.

## 2. La música (ya está resuelta, no necesitas archivos)

En vez de un mp3, la canción se reproduce desde YouTube (audio oficial de Stephen Sanchez), embebido de forma invisible en la página — no hay que comprar ni subir nada.

- Ya dejé configurado el video correcto en `app.js`, en la constante `YOUTUBE_VIDEO_ID`.
- Empieza a sonar en cuanto ella toca el primer botón ("Te amo, Daniela") en la pantalla de inicio — justo ahí, porque los celulares exigen que el audio arranque de un toque directo del usuario. Arriba a la derecha aparece un botón 🔊 para silenciarla si quiere.
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
- El ciclo de 90 días (3 meses) se repite automáticamente — no necesitas hacer nada después de publicarlo.
- El contador de "tiempo juntos" se recalcula solo, cada vez que ella lo abre, así que siempre estará al día.
- La canción necesita conexión a internet para sonar (viene de YouTube) — no funcionará si ella abre la app sin datos o wifi. El resto de la app (fotos, cartas, contador) si quedó cacheado por el service worker, sí funciona sin conexión.
