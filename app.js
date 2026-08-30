/* =====================================================
   Para Daniela, con amor
   -----------------------------------------------------
   QUÉ EDITAR ANTES DE PUBLICAR (busca cada bloque abajo):

   1. NOMBRE_ESPOSA       → el nombre que aparece en el botón de inicio
   2. NOMBRES_PAREJA      → la firma bajo el carrusel de fotos ("David & Daniela")
   3. NOMBRE_HIJO         → cómo quieres que se le llame a tu hijo en las cartas
   4. FECHA_INICIO        → el día que arranca el ciclo de 30 días
   5. FECHA_RELACION      → la fecha en la que empezó su relación (para el contador)
   6. RECUERDOS           → reemplaza cada "PEGA_AQUI..." con tus fotos reales
   ===================================================== */

const NOMBRE_ESPOSA = "Daniela";
const NOMBRES_PAREJA = "David & Daniela";
const NOMBRE_HIJO = "Emi"; // se inserta donde veas {{HIJO}}

// 👉 Día en que arranca el ciclo de 30 días. Formato "AAAA-MM-DD"
// (De prueba por ahora — David lo va a cambiar antes de publicar)
const FECHA_INICIO = "2026-08-06";

// 👉 Fecha en la que empezó su relación: 6 de diciembre de 2011.
const FECHA_RELACION = "2011-12-06";

// 👉 Canción que suena al confirmar la carta ("Te elijo a ti ♥" y variantes).
// Es el ID del video de YouTube — la parte después de "v=" en la URL.
// Ya está puesto "Until I Found You" (audio oficial de Stephen Sanchez).
// Si algún día ese video deja de estar disponible para incrustar, busca
// otra subida oficial de la misma canción en YouTube y pega aquí su ID.
const YOUTUBE_VIDEO_ID = "MlThQTo6D8A";

/* =====================================================
   Los 30 días. Cada uno tiene:
   - fecha_memoria: el título sobre el carrusel (fecha real o descripción del momento)
   - fotos: 2 o 3 URLs para el carrusel (reemplaza los placeholders)
   - tipo: "pareja" | "hijo" | "familia" (define qué pregunta/cierre usa)
   - carta: el mensaje del día. Usa {{HIJO}} donde quieras que aparezca su nombre.

   Patrón: los días pares son de Emi/familia, los impares son de pareja
   (día sí, día no), y el día 30 cierra con un mensaje de familia completa.
   ===================================================== */
const RECUERDOS = [
  { dia: 1, tipo: "pareja", fecha_memoria: "El día que empezó todo",
    fotos: ["PEGA_AQUI_TU_FOTO_D1_1", "PEGA_AQUI_TU_FOTO_D1_2"],
    carta: "Hace tiempo dejé de buscar la felicidad en otro lugar, porque la encontré la primera vez que te vi sonreír. Hoy, como cada día, elijo quedarme contigo, con nuestra historia y con todo lo que aún nos falta por vivir juntos." },

  { dia: 2, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D2_1", "PEGA_AQUI_TU_FOTO_D2_2"],
    carta: "Verte convertida en mamá de {{HIJO}} fue ver una versión tuya que, sin saberlo, ya amaba de antes. Gracias por darnos esta familia que hoy es mi lugar favorito en el mundo." },

  { dia: 3, tipo: "pareja", fecha_memoria: "Nueva York, invierno",
    fotos: ["PEGA_AQUI_TU_FOTO_D3_1", "PEGA_AQUI_TU_FOTO_D3_2", "PEGA_AQUI_TU_FOTO_D3_3"],
    carta: "Nueva York fue frío, pero tu mano en la mía lo volvió cálido. Ese viaje me enseñó que no necesito un lugar perfecto, solo necesito estar contigo para que cualquier ciudad se sienta como el lugar correcto." },

  { dia: 4, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D4_1", "PEGA_AQUI_TU_FOTO_D4_2"],
    carta: "{{HIJO}} tiene tu misma forma de reírse con todo el cuerpo, y cada vez que lo veo hacerlo, te veo un poco a ti también. Gracias por darme dos personas a quienes amar así de fuerte." },

  { dia: 5, tipo: "pareja", fecha_memoria: "Un domingo cualquiera",
    fotos: ["PEGA_AQUI_TU_FOTO_D5_1", "PEGA_AQUI_TU_FOTO_D5_2"],
    carta: "Hay domingos que no tienen nada especial y aun así se vuelven mis favoritos, solo porque los paso a tu lado. Gracias por convertir lo simple en algo que atesoro." },

  { dia: 6, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D6_1", "PEGA_AQUI_TU_FOTO_D6_2"],
    carta: "Hay algo en ver cómo cuidas a {{HIJO}} que me enamora otra vez, cada vez. Eres la mamá que siempre soñé para nuestros hijos, mucho antes de conocerte." },

  { dia: 7, tipo: "pareja", fecha_memoria: "Papallacta",
    fotos: ["PEGA_AQUI_TU_FOTO_D7_1", "PEGA_AQUI_TU_FOTO_D7_2", "PEGA_AQUI_TU_FOTO_D7_3"],
    carta: "Entre el vapor del agua caliente y el frío de la montaña, te miré y pensé: quiero envejecer contigo, quiero mil viajes más como este. Sigo pensando exactamente lo mismo." },

  { dia: 8, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D8_1", "PEGA_AQUI_TU_FOTO_D8_2"],
    carta: "Ver a {{HIJO}} crecer, contigo a mi lado, sigue siendo la historia más bonita que me ha tocado vivir." },

  { dia: 9, tipo: "pareja", fecha_memoria: "Nueva York, Times Square",
    fotos: ["PEGA_AQUI_TU_FOTO_D9_1", "PEGA_AQUI_TU_FOTO_D9_2"],
    carta: "Entre tantas luces de Times Square, ninguna brillaba tanto como tu sonrisa esa noche. Contigo hasta el caos de una ciudad enorme se sintió tranquilo, porque tú eres mi lugar seguro." },

  { dia: 10, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D10_1", "PEGA_AQUI_TU_FOTO_D10_2"],
    carta: "Algún día {{HIJO}} va a entender todo lo que hiciste, todas las noches sin dormir, todo el amor silencioso. Mientras tanto, quiero que sepas que yo sí lo veo, cada día." },

  { dia: 11, tipo: "pareja", fecha_memoria: "Nuestra cocina",
    fotos: ["PEGA_AQUI_TU_FOTO_D11_1", "PEGA_AQUI_TU_FOTO_D11_2"],
    carta: "Se nos quema el arroz casi siempre, y aun así esas noches en la cocina son de las que más disfruto. Contigo hasta los errores se sienten como aventuras compartidas." },

  { dia: 12, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D12_1", "PEGA_AQUI_TU_FOTO_D12_2"],
    carta: "Cuando {{HIJO}} se queda dormido en tus brazos, entiendo que encontré, sin buscarlo, la imagen exacta de lo que siempre quise para mi vida: ustedes dos." },

  { dia: 13, tipo: "pareja", fecha_memoria: "Papallacta, entre la neblina",
    fotos: ["PEGA_AQUI_TU_FOTO_D13_1", "PEGA_AQUI_TU_FOTO_D13_2", "PEGA_AQUI_TU_FOTO_D13_3"],
    carta: "Nos perdimos entre la neblina buscando el camino de regreso, y en medio de esa niebla, entre risas nerviosas, te quise un poco más. Contigo perderme nunca dio miedo." },

  { dia: 14, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D14_1", "PEGA_AQUI_TU_FOTO_D14_2"],
    carta: "Nunca me cansaré de verte inventando excusas para que {{HIJO}} coma un bocado más de verduras. Eres divertidísima incluso cuando pierdes esa batalla." },

  { dia: 15, tipo: "pareja", fecha_memoria: "Una llamada en la noche",
    fotos: ["PEGA_AQUI_TU_FOTO_D15_1", "PEGA_AQUI_TU_FOTO_D15_2"],
    carta: "Si el amor tuviera un sonido, sería tu voz contándome cómo te fue el día, con esos detalles que solo tú sabes hacer interesantes. Gracias por compartir tu día a día conmigo." },

  { dia: 16, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D16_1", "PEGA_AQUI_TU_FOTO_D16_2"],
    carta: "Los domingos en el parque, con {{HIJO}} corriendo entre los dos, se han vuelto mi versión favorita de la felicidad." },

  { dia: 17, tipo: "pareja", fecha_memoria: "Un día de trabajo pesado",
    fotos: ["PEGA_AQUI_TU_FOTO_D17_1", "PEGA_AQUI_TU_FOTO_D17_2"],
    carta: "Hay días pesados en los que lo único que me sostiene es saber que al final voy a verte. Pensar en ti sigue siendo mi manera favorita de aligerar cualquier carga." },

  { dia: 18, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D18_1", "PEGA_AQUI_TU_FOTO_D18_2"],
    carta: "Cuando {{HIJO}} dice tu nombre antes que cualquier otra palabra, entiendo por qué: tú eres, para los dos, el lugar más seguro que conocemos." },

  { dia: 19, tipo: "pareja", fecha_memoria: "Papallacta, agua caliente y manos frías",
    fotos: ["PEGA_AQUI_TU_FOTO_D19_1", "PEGA_AQUI_TU_FOTO_D19_2"],
    carta: "Tomé tu mano dentro del agua caliente mientras el viento frío nos rodeaba, y sentí que no había lugar más seguro en el mundo que estar cerca de ti." },

  { dia: 20, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D20_1", "PEGA_AQUI_TU_FOTO_D20_2"],
    carta: "Verte leerle un cuento a {{HIJO}} cada noche, con esas voces que inventas para cada personaje, es de las cosas más bonitas que pasan en esta casa." },

  { dia: 21, tipo: "pareja", fecha_memoria: "Antes de dormir",
    fotos: ["PEGA_AQUI_TU_FOTO_D21_1", "PEGA_AQUI_TU_FOTO_D21_2"],
    carta: "Escucharte contar tu día sigue siendo mi parte favorita de las veinticuatro horas. No importa cuántos años pasen, espero seguir queriendo escucharte cada noche." },

  { dia: 22, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D22_1", "PEGA_AQUI_TU_FOTO_D22_2"],
    carta: "{{HIJO}} tiene tu misma terquedad, y aunque a veces sea un dolor de cabeza, en el fondo me encanta ver cuánto se parece a ti." },

  { dia: 23, tipo: "pareja", fecha_memoria: "Nueva York, un café cualquiera",
    fotos: ["PEGA_AQUI_TU_FOTO_D23_1", "PEGA_AQUI_TU_FOTO_D23_2"],
    carta: "Cualquier café sabe mejor si lo comparto contigo, incluso los que no nos gustaron. Nueva York nos regaló un montón de esas tardes pequeñas que hoy recuerdo con una sonrisa." },

  { dia: 24, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D24_1", "PEGA_AQUI_TU_FOTO_D24_2"],
    carta: "El refrigerador está lleno de dibujos de {{HIJO}}, y aun así siempre encuentras espacio para el próximo. Así eres tú con el amor: nunca se te acaba el espacio." },

  { dia: 25, tipo: "pareja", fecha_memoria: "Un abrazo largo",
    fotos: ["PEGA_AQUI_TU_FOTO_D25_1", "PEGA_AQUI_TU_FOTO_D25_2"],
    carta: "Hay abrazos que dicen más que mil palabras, y los tuyos siempre supieron decir exactamente lo que yo necesitaba escuchar, incluso sin abrir la boca." },

  { dia: 26, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D26_1", "PEGA_AQUI_TU_FOTO_D26_2"],
    carta: "Cuando {{HIJO}} se enferma y no duermes para cuidarlo, entiendo, otra vez, que tienes un corazón enorme, y que tuve mucha suerte de que decidieras compartirlo conmigo." },

  { dia: 27, tipo: "pareja", fecha_memoria: "Papallacta, atardecer",
    fotos: ["PEGA_AQUI_TU_FOTO_D27_1", "PEGA_AQUI_TU_FOTO_D27_2", "PEGA_AQUI_TU_FOTO_D27_3"],
    carta: "El atardecer fue precioso, pero verte a ti mirarlo, con esa calma que solo tienes tú, fue lo más bonito de esa tarde entera." },

  { dia: 28, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["PEGA_AQUI_TU_FOTO_D28_1", "PEGA_AQUI_TU_FOTO_D28_2"],
    carta: "Enseñarle a {{HIJO}} a andar en bicicleta contigo detrás, gritando de emoción los dos, es de esos recuerdos que sé que voy a atesorar toda la vida." },

  { dia: 29, tipo: "pareja", fecha_memoria: "Nueva York, andando en metro",
    fotos: ["PEGA_AQUI_TU_FOTO_D29_1", "PEGA_AQUI_TU_FOTO_D29_2"],
    carta: "Nos perdimos en el metro más de una vez, y en vez de estresarnos, terminamos riéndonos hasta que nos dolía el estómago. Contigo hasta perderse es un buen plan." },

  { dia: 30, tipo: "familia", fecha_memoria: "Hoy, otra vez",
    fotos: ["PEGA_AQUI_TU_FOTO_D30_1", "PEGA_AQUI_TU_FOTO_D30_2", "PEGA_AQUI_TU_FOTO_D30_3"],
    carta: "Se acaba el mes, empieza otro, y aunque el ciclo se repite, nosotros no dejamos de escribir historia nueva: tú, {{HIJO}} y yo. Gracias por construir, sin darte cuenta, la familia que siempre quise tener." }
];

/* =====================================================
   Preguntas de cierre de carta (rotan según el tipo del día)
   ===================================================== */
const PREGUNTAS_PAREJA = [
  { pregunta: "¿Te gustaría seguir escribiendo nuestra historia?", boton: "Sí, quiero ♥" },
  { pregunta: "¿Lista para otra vuelta más a tu lado?", boton: "Siempre ♥" },
  { pregunta: "¿Seguimos sumando días juntos?", boton: "Contigo, sí ♥" },
  { pregunta: "¿Te animas a un viaje más conmigo?", boton: "A donde sea, contigo ♥" },
  { pregunta: "¿Puedo seguir eligiéndote cada día?", boton: "Te elijo a ti ♥" },
  { pregunta: "¿Seguimos construyendo esto, juntos?", boton: "Juntos, siempre ♥" }
];

const PREGUNTAS_FAMILIA = [
  { pregunta: "¿Seguimos criando esta familia, juntos?", boton: "Juntos, siempre ♥" },
  { pregunta: "¿Lista para más años viéndolo crecer?", boton: "Contigo, sí ♥" },
  { pregunta: "¿Seguimos escribiendo esta historia, los tres?", boton: "Sí, quiero ♥" },
  { pregunta: "¿Seguimos soñando en grande, con nosotros?", boton: "Con ustedes, siempre ♥" }
];

const CIERRES_PAREJA = [
  "Gracias por compartir tu vida conmigo.",
  "Gracias por elegirme, incluso en los días difíciles.",
  "Contigo, hasta lo simple se vuelve especial.",
  "Eres, sin duda, mi lugar favorito.",
  "Gracias por tanto amor, todos los días.",
  "Sigo eligiéndote, hoy y siempre."
];

const CIERRES_FAMILIA = [
  "Gracias por darme la familia que siempre soñé.",
  "Ustedes dos son mi lugar favorito en el mundo.",
  "Gracias por ser la mamá que él tiene la suerte de tener.",
  "Todo lo bueno de mi vida empezó contigo, y ahora también con él."
];

/* =====================================================
   Utilidades
   ===================================================== */
function conNombreHijo(texto) {
  // split/join en vez de replaceAll para máxima compatibilidad con navegadores antiguos
  return texto.split("{{HIJO}}").join(NOMBRE_HIJO);
}

function obtenerRecuerdoDeHoy() {
  const inicio = new Date(FECHA_INICIO + "T00:00:00");
  const ahora = new Date();
  const msPorDia = 24 * 60 * 60 * 1000;
  const diasTranscurridos = Math.floor((ahora - inicio) / msPorDia);
  const diaDelCiclo = (((diasTranscurridos % 30) + 30) % 30) + 1;
  return RECUERDOS.find((r) => r.dia === diaDelCiclo) || RECUERDOS[0];
}

function esFamiliar(tipo) {
  return tipo === "hijo" || tipo === "familia";
}

function obtenerPregunta(recuerdo) {
  const pool = esFamiliar(recuerdo.tipo) ? PREGUNTAS_FAMILIA : PREGUNTAS_PAREJA;
  return pool[(recuerdo.dia - 1) % pool.length];
}

function obtenerCierre(recuerdo) {
  const pool = esFamiliar(recuerdo.tipo) ? CIERRES_FAMILIA : CIERRES_PAREJA;
  return pool[(recuerdo.dia - 1) % pool.length];
}

// Calcula años/meses/días transcurridos desde una fecha, respetando el calendario real.
function calcularTiempoJuntos(fechaInicioStr) {
  const inicio = new Date(fechaInicioStr + "T00:00:00");
  const ahora = new Date();

  let años = ahora.getFullYear() - inicio.getFullYear();
  let meses = ahora.getMonth() - inicio.getMonth();
  let dias = ahora.getDate() - inicio.getDate();

  if (dias < 0) {
    meses -= 1;
    const diasMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
    dias += diasMesAnterior;
  }
  if (meses < 0) {
    años -= 1;
    meses += 12;
  }
  return { años: Math.max(0, años), meses: Math.max(0, meses), dias: Math.max(0, dias) };
}

/* =====================================================
   Carrusel
   ===================================================== */
function construirCarrusel(fotos, lugar) {
  const carousel = document.getElementById("carousel");
  const dotsWrap = document.getElementById("carousel-dots");
  carousel.innerHTML = "";
  dotsWrap.innerHTML = "";

  fotos.forEach((url, i) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${lugar} — foto ${i + 1}`;
    img.loading = i === 0 ? "eager" : "lazy";
    img.addEventListener("click", () => abrirLightbox(url, img.alt));
    slide.appendChild(img);
    carousel.appendChild(slide);

    const dot = document.createElement("span");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll(".dot");
  let ticking = false;
  carousel.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const idx = Math.round(carousel.scrollLeft / carousel.clientWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
      ticking = false;
    });
  });
}

/* =====================================================
   Lightbox — ver cualquier foto en grande, con zoom al tocar
   ===================================================== */
const lightboxEl = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function abrirLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightboxImg.classList.remove("zoomed");
  lightboxImg.style.transform = "";
  lightboxEl.hidden = false;
}

function cerrarLightbox() {
  lightboxEl.hidden = true;
  lightboxImg.classList.remove("zoomed");
  lightboxImg.style.transform = "";
}

document.getElementById("lightbox-close").addEventListener("click", cerrarLightbox);

// Tocar el fondo oscuro (no la foto) también cierra
lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) cerrarLightbox();
});

// Tocar la foto alterna entre normal y acercada, centrando el zoom
// justo en el punto donde se tocó.
lightboxImg.addEventListener("click", (e) => {
  if (lightboxImg.classList.contains("zoomed")) {
    lightboxImg.classList.remove("zoomed");
    lightboxImg.style.transform = "";
    return;
  }
  const rect = lightboxImg.getBoundingClientRect();
  const origenX = ((e.clientX - rect.left) / rect.width) * 100;
  const origenY = ((e.clientY - rect.top) / rect.height) * 100;
  lightboxImg.style.transformOrigin = origenX + "% " + origenY + "%";
  lightboxImg.style.transform = "scale(2.2)";
  lightboxImg.classList.add("zoomed");
});

document.getElementById("final-photo").addEventListener("click", (e) => {
  if (e.target.src) abrirLightbox(e.target.src, e.target.alt);
});

/* =====================================================
   Construir la pantalla del día
   ===================================================== */
function mostrarRegaloDeHoy() {
  const recuerdo = obtenerRecuerdoDeHoy();
  const pregunta = obtenerPregunta(recuerdo);
  const cierre = obtenerCierre(recuerdo);

  document.getElementById("memory-date").textContent = recuerdo.fecha_memoria;
  document.getElementById("couple-names").textContent = NOMBRES_PAREJA;
  construirCarrusel(recuerdo.fotos, recuerdo.fecha_memoria);

  document.getElementById("letter-text").textContent = conNombreHijo(recuerdo.carta);
  document.getElementById("letter-question").textContent = pregunta.pregunta;
  document.getElementById("confirm-btn").textContent = pregunta.boton;

  document.getElementById("final-message").textContent = conNombreHijo(cierre);
  const finalPhoto = document.getElementById("final-photo");
  finalPhoto.src = recuerdo.fotos[0];
  finalPhoto.alt = recuerdo.fecha_memoria;

  const { años, meses, dias } = calcularTiempoJuntos(FECHA_RELACION);
  document.getElementById("years-num").textContent = años;
  document.getElementById("months-num").textContent = meses;
  document.getElementById("days-num").textContent = dias;

  const splash = document.getElementById("splash");
  const daily = document.getElementById("daily");
  splash.classList.add("hiding");
  setTimeout(() => {
    splash.hidden = true;
    daily.hidden = false;
    daily.classList.add("reveal");
  }, 480);
}

/* =====================================================
   Interacción
   ===================================================== */
document.getElementById("wife-name-btn").textContent = NOMBRE_ESPOSA;

const muteToggle = document.getElementById("mute-toggle");
let reproducirEnCuantoEsteListo = false;

function intentarReproducirCancion() {
  if (ytPlayer && ytPlayerListo && typeof ytPlayer.playVideo === "function") {
    ytPlayer.playVideo();
    muteToggle.hidden = false;
  } else {
    // El reproductor de YouTube aún no cargó (tarda un poco en llegar desde
    // internet) — dejamos marcado que hay que reproducir en cuanto esté listo.
    reproducirEnCuantoEsteListo = true;
  }
}

// ---------- Confeti de girasoles y corazones ----------
function lanzarConfeti(origenEl) {
  const rect = origenEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const simbolos = ["🌻", "♥", "🌻", "♥"];
  const cantidad = 16;

  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement("span");
    pieza.className = "confetti-piece";
    pieza.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    pieza.setAttribute("aria-hidden", "true");

    const angulo = Math.random() * Math.PI * 2;
    const distancia = 70 + Math.random() * 110;
    const tx = Math.cos(angulo) * distancia;
    const ty = Math.sin(angulo) * distancia - 50; // sesgo hacia arriba
    const rot = Math.round(Math.random() * 260 - 130) + "deg";

    pieza.style.left = originX + "px";
    pieza.style.top = originY + "px";
    pieza.style.setProperty("--tx", tx + "px");
    pieza.style.setProperty("--ty", ty + "px");
    pieza.style.setProperty("--rot", rot);

    document.body.appendChild(pieza);
    setTimeout(() => pieza.remove(), 1050);
  }
}

// ---------- Primer botón: abre el regalo + arranca la canción ----------
document.getElementById("open-gift").addEventListener("click", (e) => {
  // El intento de reproducir se hace aquí, en el primer toque del usuario,
  // que es el único momento en que el navegador garantiza permitir sonido.
  intentarReproducirCancion();

  e.currentTarget.classList.add("breaking");
  setTimeout(mostrarRegaloDeHoy, 350);
});

// ---------- Apertura animada del sobre + confeti ----------
document.getElementById("open-letter").addEventListener("click", (e) => {
  lanzarConfeti(e.currentTarget);

  e.currentTarget.classList.add("breaking"); // el sello se encoge y desaparece
  const envelopeWrap = document.getElementById("envelope-wrap");
  const letterWrap = document.getElementById("letter-wrap");

  envelopeWrap.classList.add("opening"); // la solapa se abre hacia atrás

  setTimeout(() => {
    envelopeWrap.classList.add("opened"); // el sobre, ya vacío, se desvanece
  }, 550);

  setTimeout(() => {
    envelopeWrap.hidden = true;
    letterWrap.hidden = false;
    letterWrap.classList.add("emerge"); // la carta "crece" desde el sobre
    letterWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 680);
});

// ---------- Confirmar carta → revelar el contador ----------
document.getElementById("confirm-btn").addEventListener("click", () => {
  const finalWrap = document.getElementById("final-wrap");
  finalWrap.hidden = false;
  setTimeout(() => {
    finalWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
});

// ---------- "Verlo de nuevo" → vuelve al splash sin recargar la página ----------
function reiniciarRegalo() {
  const splash = document.getElementById("splash");
  const daily = document.getElementById("daily");
  const envelopeWrap = document.getElementById("envelope-wrap");
  const letterWrap = document.getElementById("letter-wrap");
  const finalWrap = document.getElementById("final-wrap");
  const sealBtn = document.getElementById("open-letter");
  const carousel = document.getElementById("carousel");

  // Pantalla diaria → oculta, splash → visible otra vez
  daily.hidden = true;
  daily.classList.remove("reveal");
  splash.hidden = false;
  splash.classList.remove("hiding");

  // Sobre, carta y contador vuelven a su estado inicial
  envelopeWrap.hidden = false;
  envelopeWrap.classList.remove("opening", "opened");
  sealBtn.classList.remove("breaking");
  letterWrap.hidden = true;
  letterWrap.classList.remove("emerge");
  finalWrap.hidden = true;

  // El carrusel vuelve a la primera foto
  carousel.scrollLeft = 0;
  document.querySelectorAll("#carousel-dots .dot").forEach((d, i) => {
    d.classList.toggle("active", i === 0);
  });

  // La canción vuelve al inicio, lista para sonar de nuevo con el primer botón
  if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
    ytPlayer.pauseVideo();
    if (typeof ytPlayer.seekTo === "function") ytPlayer.seekTo(0, true);
  }
  muteToggle.hidden = true;
  reproducirEnCuantoEsteListo = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("restart-btn").addEventListener("click", reiniciarRegalo);

muteToggle.addEventListener("click", () => {
  if (!ytPlayer) return;
  const estaSilenciado = ytPlayer.isMuted();
  if (estaSilenciado) {
    ytPlayer.unMute();
  } else {
    ytPlayer.mute();
  }
  muteToggle.textContent = estaSilenciado ? "🔊" : "🔇";
  muteToggle.setAttribute(
    "aria-label",
    estaSilenciado ? "Silenciar música" : "Activar música"
  );
});

/* =====================================================
   Reproductor de YouTube (solo audio, oculto)
   ===================================================== */
let ytPlayer = null;
let ytPlayerListo = false;

// Esta función la llama automáticamente el script de YouTube (iframe_api)
// en cuanto termina de cargar. El nombre es fijo, no lo cambies.
window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("yt-player-slot", {
    height: "0",
    width: "0",
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
    events: {
      onReady: () => {
        ytPlayerListo = true;
        // Si ella ya había tocado el primer botón antes de que esto
        // terminara de cargar, reproducimos apenas esté listo.
        if (reproducirEnCuantoEsteListo) {
          intentarReproducirCancion();
        }
      }
    }
  });
};

/* =====================================================
   Service Worker (PWA)
   ===================================================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}