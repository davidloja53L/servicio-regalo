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
- `video/` — tu video sorpresa (`sorpresa.mp4`)

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

## 1.1. Dos días especiales: cumpleaños y aniversario de bodas

El **6 de octubre** (su cumpleaños) y el **14 de diciembre** (su aniversario de bodas) tienen su propio contenido y su propio ambiente visual (colores distintos, un mensaje especial arriba) — se activan solos cada año, automáticamente, sin que tengas que hacer nada más que completar sus fotos.

Busca `DIAS_ESPECIALES` en `app.js` y reemplaza estos **6 placeholders nuevos** (3 fotos por cada fecha):
- `PEGA_AQUI_TU_FOTO_CUMPLE_1`, `_2`, `_3`
- `PEGA_AQUI_TU_FOTO_ANIV_1`, `_2`, `_3`

Ya escribí una carta especial para cada fecha (editable ahí mismo si quieres cambiar el texto). Estos dos días siempre reemplazan lo que le tocaría por la rotación normal de los 45 recuerdos — el resto del año sigue funcionando exactamente igual.

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

## 4. El video sorpresa

Al final, después del contador de "tiempo juntos", hay un botón "Tengo una sorpresa más" que abre un video tuyo a pantalla completa (con controles, y se reproduce solo al abrirlo).

1. Coloca tu video en la carpeta `video/` con el nombre exacto `sorpresa.mp4` (reemplaza el archivo `video/LEEME.txt` de ejemplo).
2. Recomendado: formato MP4, resolución 720p — de sobra para celular, y mucho más liviano que 4K.
3. Si pesa mucho (arriba de 60-80 MB), conviene comprimirlo antes de subirlo (por ejemplo con HandBrake, gratis) para no hacer lento el resto del sitio.

Es siempre el mismo video, sin importar el día — no necesitas hacer nada más en el código. Se descarga solo desde la primera vez que ella abre el sitio (no hace falta que lo mire primero), así queda disponible sin internet desde el principio.

**Sobre el audio del video:** mientras el video está abierto, la canción de fondo (Until I Found You) no se detiene — solo baja mucho de volumen, para que se escuche bien lo que digas en el video sin perder el ambiente de la música. Al cerrar el video, la canción vuelve exactamente al volumen que tenía. Si quieres que quede más baja o más alta durante el video, cambia el número de `VOLUMEN_MUSICA_CON_VIDEO` en `app.js` (va de 0 a 100).

Si tu video ya tiene su propia voz o audio (por ejemplo, un mensaje hablado mientras pasan las fotos), no le agregues ninguna canción de fondo por dentro — usaría derechos de autor de esa canción de una forma distinta y más riesgosa que la que ya usamos para "Until I Found You" (que solo se incrusta desde YouTube, nunca se copia). Deja que tu voz sea el audio del video, y la música de fondo del sitio hace el resto.

## 5. Desplegar en Render
1. Entra a [render.com](https://render.com) y en el Dashboard elige **New +** → **Static Site**.
2. Conecta tu cuenta de GitHub y selecciona el repositorio.
3. En la configuración:
   - **Build Command**: déjalo vacío.
   - **Publish directory**: `.` (la raíz del repo).
4. Clic en **Create Static Site**. Render te dará una URL tipo `https://regalo-daniela.onrender.com`.

## 6. Que Daniela lo instale en su celular
1. Envíale el link por WhatsApp.
2. En Chrome (Android) o Safari (iPhone), puede tocar el menú y elegir **"Añadir a pantalla de inicio"**.
3. Quedará como un ícono con el corazón dorado, y se abrirá en pantalla completa.

## Notas
- El ciclo de 90 días (3 meses) se repite automáticamente — no necesitas hacer nada después de publicarlo.
- El contador de "tiempo juntos" se recalcula solo, cada vez que ella lo abre, así que siempre estará al día.
- La canción necesita conexión a internet para sonar (viene de YouTube) — no funcionará si ella abre la app sin datos o wifi, pero el resto del regalo sigue funcionando normal, no se traba nada. Mientras ve tu video sorpresa, la canción no se detiene, solo baja de volumen (ver sección 4).
- El resto sí funciona sin conexión una vez que abrió el sitio la primera vez: el diseño, las 45 cartas, el contador, tu video sorpresa (se descarga desde la primera visita), y las fotos que ya haya visto antes. Solo las fotos de un día que nunca ha abierto necesitan señal la primera vez.
