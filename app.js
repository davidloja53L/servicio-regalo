/* =====================================================
   Para Daniela, con amor
   -----------------------------------------------------
   Cómo funciona:
   1. FECHA_INICIO marca el día 1 del ciclo (por ejemplo,
      el día que le regalas esto, o su cumpleaños).
   2. Cada 24 horas el "día del ciclo" avanza en 1.
   3. Al llegar al día 31, vuelve a empezar en el día 1
      (así el regalo nunca se "acaba").
   4. RECUERDOS es el array con las 30 frases + fotos.
      Reemplaza cada "imagen_url" con el link de tu foto
      (puedes subirlas a la misma carpeta del proyecto,
      a Imgur, Google Photos con link público, etc.)
   ===================================================== */

// 👉 Cambia esta fecha por el día en que quieres que arranque el ciclo.
// Formato: "AAAA-MM-DD"
const FECHA_INICIO = "2026-08-24";

// 👉 Reemplaza cada imagen_url con la URL real de tu foto.
const RECUERDOS = [
  { dia: 1,  lugar: "El día que empezó todo", frase: "Cada historia de amor es bonita, pero la nuestra es mi favorita.", imagen_url: "PEGA_AQUI_TU_URL_1" },
  { dia: 2,  lugar: "Nueva York, invierno", frase: "Contigo hasta el frío de Nueva York se sintió como un abrazo.", imagen_url: "PEGA_AQUI_TU_URL_2" },
  { dia: 3,  lugar: "En casa, un domingo cualquiera", frase: "Los domingos contigo son mi lugar favorito del mundo.", imagen_url: "PEGA_AQUI_TU_URL_3" },
  { dia: 4,  lugar: "Papallacta", frase: "Entre montañas y aguas termales, decidí que quería el resto de mis días junto a ti.", imagen_url: "PEGA_AQUI_TU_URL_4" },
  { dia: 5,  lugar: "Una tarde de risas", frase: "Amo la forma en la que te ríes de tus propios chistes antes de terminarlos.", imagen_url: "PEGA_AQUI_TU_URL_5" },
  { dia: 6,  lugar: "Nueva York, Times Square", frase: "Entre tantas luces, tú siempre fuiste lo más brillante.", imagen_url: "PEGA_AQUI_TU_URL_6" },
  { dia: 7,  lugar: "Nuestra cocina", frase: "Contigo hasta cocinar mal se convirtió en mi actividad favorita.", imagen_url: "PEGA_AQUI_TU_URL_7" },
  { dia: 8,  lugar: "Papallacta, entre la neblina", frase: "Me perdí en la neblina de Papallacta y me encontré queriéndote más.", imagen_url: "PEGA_AQUI_TU_URL_8" },
  { dia: 9,  lugar: "Una noche cualquiera", frase: "Si el amor tuviera un sonido, sería tu voz contándome cómo te fue el día.", imagen_url: "PEGA_AQUI_TU_URL_9" },
  { dia: 10, lugar: "Nueva York, Central Park", frase: "Caminar sin rumbo por Central Park contigo fue el plan perfecto.", imagen_url: "PEGA_AQUI_TU_URL_10" },
  { dia: 11, lugar: "Un día de trabajo", frase: "Hasta en los días difíciles, pensar en ti lo hace todo más liviano.", imagen_url: "PEGA_AQUI_TU_URL_11" },
  { dia: 12, lugar: "Papallacta, agua caliente y manos frías", frase: "Tomar tu mano en el agua caliente de Papallacta fue mi lugar seguro.", imagen_url: "PEGA_AQUI_TU_URL_12" },
  { dia: 13, lugar: "Una llamada en la noche", frase: "Escucharte antes de dormir sigue siendo mi parte favorita del día.", imagen_url: "PEGA_AQUI_TU_URL_13" },
  { dia: 14, lugar: "Nueva York, un café cualquiera", frase: "Cualquier café sabe mejor si lo comparto contigo.", imagen_url: "PEGA_AQUI_TU_URL_14" },
  { dia: 15, lugar: "Mitad del camino", frase: "Llevamos ya la mitad del ciclo y sigo sin cansarme de quererte.", imagen_url: "PEGA_AQUI_TU_URL_15" },
  { dia: 16, lugar: "Un abrazo largo", frase: "Hay abrazos que dicen más que mil palabras; los tuyos son de esos.", imagen_url: "PEGA_AQUI_TU_URL_16" },
  { dia: 17, lugar: "Papallacta, atardecer", frase: "El atardecer en Papallacta fue bonito, pero verte a ti mirarlo lo fue más.", imagen_url: "PEGA_AQUI_TU_URL_17" },
  { dia: 18, lugar: "Nueva York, andando en metro", frase: "Contigo hasta perdernos en el metro de Nueva York se sintió como una aventura.", imagen_url: "PEGA_AQUI_TU_URL_18" },
  { dia: 19, lugar: "Una tarde de lluvia", frase: "Los días de lluvia contigo en casa son mis favoritos del año.", imagen_url: "PEGA_AQUI_TU_URL_19" },
  { dia: 20, lugar: "Un plan improvisado", frase: "Los mejores recuerdos casi nunca fueron planeados; solo pasaron, contigo.", imagen_url: "PEGA_AQUI_TU_URL_20" },
  { dia: 21, lugar: "Papallacta, primera vez", frase: "La primera vez que fuimos a Papallacta supe que quería mil viajes más contigo.", imagen_url: "PEGA_AQUI_TU_URL_21" },
  { dia: 22, lugar: "Nueva York, de noche", frase: "La ciudad que nunca duerme, y aun así, contigo todo se sintió tranquilo.", imagen_url: "PEGA_AQUI_TU_URL_22" },
  { dia: 23, lugar: "Un desayuno lento", frase: "Los desayunos lentos contigo valen más que cualquier plan grande.", imagen_url: "PEGA_AQUI_TU_URL_23" },
  { dia: 24, lugar: "Una discusión y luego risas", frase: "Hasta nuestras peleas terminan en risas; contigo todo se resuelve más fácil.", imagen_url: "PEGA_AQUI_TU_URL_24" },
  { dia: 25, lugar: "Papallacta, entre montañas", frase: "Rodeados de montañas entendí que mi paisaje favorito eres tú.", imagen_url: "PEGA_AQUI_TU_URL_25" },
  { dia: 26, lugar: "Nueva York, una foto cualquiera", frase: "De todas las fotos de ese viaje, mi favorita sigue siendo tu sonrisa.", imagen_url: "PEGA_AQUI_TU_URL_26" },
  { dia: 27, lugar: "Un mensaje de buenos días", frase: "Un simple 'buenos días' tuyo puede arreglarme la semana entera.", imagen_url: "PEGA_AQUI_TU_URL_27" },
  { dia: 28, lugar: "Casi cerrando el ciclo", frase: "Cada 30 días se repite este ciclo, pero mi cariño por ti solo crece.", imagen_url: "PEGA_AQUI_TU_URL_28" },
  { dia: 29, lugar: "Una noche de películas", frase: "Prefiero cualquier película contigo en el sofá que el mejor plan sin ti.", imagen_url: "PEGA_AQUI_TU_URL_29" },
  { dia: 30, lugar: "Hoy, otra vez", frase: "Se acaba el mes, empieza otro, y yo sigo eligiéndote a ti cada día.", imagen_url: "PEGA_AQUI_TU_URL_30" }
];

/* ===================== Lógica del ciclo de 30 días ===================== */
function obtenerRecuerdoDeHoy() {
  const inicio = new Date(FECHA_INICIO + "T00:00:00");
  const ahora = new Date();

  const msPorDia = 24 * 60 * 60 * 1000;
  const diasTranscurridos = Math.floor((ahora - inicio) / msPorDia);

  // Ciclo de 30 días, siempre entre 1 y 30 (incluso si diasTranscurridos es negativo)
  const diaDelCiclo = (((diasTranscurridos % 30) + 30) % 30) + 1;

  return RECUERDOS.find((r) => r.dia === diaDelCiclo) || RECUERDOS[0];
}

/* ===================== Interacción ===================== */
function mostrarRegaloDeHoy() {
  const recuerdo = obtenerRecuerdoDeHoy();

  document.getElementById("day-label").textContent = `Día ${recuerdo.dia} de 30`;
  document.getElementById("day-place").textContent = recuerdo.lugar;
  document.getElementById("day-phrase").textContent = recuerdo.frase;

  const img = document.getElementById("day-photo");
  img.src = recuerdo.imagen_url;
  img.alt = recuerdo.lugar;

  const splash = document.getElementById("splash");
  const daily = document.getElementById("daily");

  splash.classList.add("hiding");
  setTimeout(() => {
    splash.hidden = true;
    daily.hidden = false;
    daily.classList.add("reveal");
  }, 480);
}

document.getElementById("open-gift").addEventListener("click", (e) => {
  e.currentTarget.classList.add("breaking");
  setTimeout(mostrarRegaloDeHoy, 350);
});

/* ===================== Service Worker (PWA) ===================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Si falla el registro (por ejemplo en local sin https), la app
      // sigue funcionando normalmente, solo sin modo offline.
    });
  });
}
