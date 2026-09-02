/* =====================================================
   Para Daniela, con amor
   -----------------------------------------------------
   QUÉ EDITAR ANTES DE PUBLICAR (busca cada bloque abajo):

   1. NOMBRE_ESPOSA       → el nombre que aparece en el botón de inicio
   2. NOMBRES_PAREJA      → la firma bajo el carrusel de fotos ("David & Daniela")
   3. NOMBRE_HIJO         → cómo quieres que se le llame a tu hijo en las cartas
   4. FECHA_INICIO        → el día que arranca el ciclo de 3 meses
   5. FECHA_RELACION      → la fecha en la que empezó su relación (para el contador)
   6. RECUERDOS           → reemplaza cada "PEGA_AQUI..." con tus fotos reales
   ===================================================== */

const NOMBRE_ESPOSA = "Dani";
const NOMBRES_PAREJA = "David & Daniela";
const NOMBRE_HIJO = "Emi"; // se inserta donde veas {{HIJO}}

// 👉 Día en que arranca el ciclo de 3 meses. Formato "AAAA-MM-DD"
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

// 👉 Qué tan baja queda la canción mientras se ve el video sorpresa
// (0 = silencio total, 100 = volumen normal). No se detiene, solo baja,
// para que se escuche bien lo que dices en el video sin perder el
// ambiente de la música de fondo.
const VOLUMEN_MUSICA_CON_VIDEO = 15;

/* =====================================================
   Los 45 días únicos.  Cada uno tiene:
   - fecha_memoria: el título sobre el carrusel (fecha real o descripción del momento)
   - fotos: 2 o 3 URLs para el carrusel (reemplaza los placeholders)
   - tipo: "pareja" | "hijo" | "familia" (define qué pregunta/cierre usa)
   - carta: el mensaje del día. Usa {{HIJO}} donde quieras que aparezca su nombre.

   Patrón: los días pares son de Emi/familia, los impares son de pareja
   (día sí, día no), y el día 30 cierra con un mensaje de familia completa.
   ===================================================== */
const RECUERDOS = [
  { dia: 1, tipo: "pareja", fecha_memoria: "El día que empezó todo",
    fotos: ["fotos/dia01_1.jpg", "fotos/dia01_2.jpg"],
    carta: "Hace tiempo dejé de buscar la felicidad en otro lugar, porque la encontré la primera vez que te vi sonreír. Hoy, como cada día, elijo quedarme contigo, con nuestra historia y con todo lo que aún nos falta por vivir juntos." },

  { dia: 2, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia02_1.jpg", "fotos/dia02_2.jpg"],
    carta: "Verte convertida en mamá de {{HIJO}} fue ver una versión tuya que, sin saberlo, ya amaba de antes. Gracias por darnos esta familia que hoy es mi lugar favorito en el mundo." },

  { dia: 3, tipo: "pareja", fecha_memoria: "Nueva York, invierno",
    fotos: ["fotos/dia03_1.jpg", "fotos/dia03_2.jpg", "fotos/dia03_3.jpg"],
    carta: "Nueva York fue frío, pero tu mano en la mía lo volvió cálido. Ese viaje me enseñó que no necesito un lugar perfecto, solo necesito estar contigo para que cualquier ciudad se sienta como el lugar correcto." },

  { dia: 4, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia04_1.jpg", "fotos/dia04_2.jpg"],
    carta: "{{HIJO}} tiene tu misma forma de reírse con todo el cuerpo, y cada vez que lo veo hacerlo, te veo un poco a ti también. Gracias por darme dos personas a quienes amar así de fuerte." },

  { dia: 5, tipo: "pareja", fecha_memoria: "Un domingo cualquiera",
    fotos: ["fotos/dia05_1.jpg", "fotos/dia05_2.jpg"],
    carta: "Hay domingos que no tienen nada especial y aun así se vuelven mis favoritos, solo porque los paso a tu lado. Gracias por convertir lo simple en algo que atesoro." },

  { dia: 6, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia06_1.jpg", "fotos/dia06_2.jpg"],
    carta: "Hay algo en ver cómo cuidas a {{HIJO}} que me enamora otra vez, cada vez. Eres la mamá que siempre soñé para nuestros hijos, mucho antes de conocerte." },

  { dia: 7, tipo: "familia", fecha_memoria: "Con los nuestros",
    fotos: ["fotos/dia07_1.jpg", "fotos/dia13_1.jpg"],
    carta: "Me encanta verte con los tuyos: cómo te ríes distinto, cómo te relajas, cómo se te nota que estás en casa. Gracias por abrirme las puertas de tu familia y hacer que también se sienta mía." },

  { dia: 8, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia08_1.jpg", "fotos/dia08_2.jpg"],
    carta: "Ver a {{HIJO}} crecer, contigo a mi lado, sigue siendo la historia más bonita que me ha tocado vivir." },

  { dia: 9, tipo: "pareja", fecha_memoria: "Nueva York, luces de invierno",
    fotos: ["fotos/dia09_1.jpg", "fotos/dia09_2.jpg"],
    carta: "Entre tantas luces encendidas esa noche, ninguna brillaba tanto como tu sonrisa. Contigo hasta el caos de una ciudad enorme se sintió tranquilo, porque tú eres mi lugar seguro." },

  { dia: 10, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia10_1.jpg", "fotos/dia10_2.jpg"],
    carta: "Algún día {{HIJO}} va a entender todo lo que hiciste, todas las noches sin dormir, todo el amor silencioso. Mientras tanto, quiero que sepas que yo sí lo veo, cada día." },

  { dia: 11, tipo: "pareja", fecha_memoria: "Nuestra cocina",
    fotos: ["fotos/dia11_1.jpg", "fotos/dia11_2.jpg"],
    carta: "Se nos quema el arroz casi siempre, y aun así esas noches en la cocina son de las que más disfruto. Contigo hasta los errores se sienten como aventuras compartidas." },

  { dia: 12, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia12_1.jpg", "fotos/dia12_2.jpg"],
    carta: "Cuando {{HIJO}} se queda dormido en tus brazos, entiendo que encontré, sin buscarlo, la imagen exacta de lo que siempre quise para mi vida: ustedes dos." },

  { dia: 13, tipo: "pareja", fecha_memoria: "Entre montañas y neblina",
    fotos: ["fotos/dia13_1.jpg", "fotos/dia13_2.jpg", "fotos/dia13_3.jpg"],
    carta: "Nos perdimos entre la neblina buscando el camino de regreso, y en medio de esa niebla, entre risas nerviosas, te quise un poco más. Contigo perderme nunca dio miedo." },

  { dia: 14, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia14_1.jpg", "fotos/dia14_2.jpg"],
    carta: "Nunca me cansaré de verte inventando excusas para que {{HIJO}} coma un bocado más de verduras. Eres divertidísima incluso cuando pierdes esa batalla." },

  { dia: 15, tipo: "pareja", fecha_memoria: "Una llamada en la noche",
    fotos: ["fotos/dia15_1.jpg", "fotos/dia15_2.jpg"],
    carta: "Si el amor tuviera un sonido, sería tu voz contándome cómo te fue el día, con esos detalles que solo tú sabes hacer interesantes. Gracias por compartir tu día a día conmigo." },

  { dia: 16, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia16_1.jpg", "fotos/dia16_2.jpg"],
    carta: "Los domingos en el parque, con {{HIJO}} corriendo entre los dos, se han vuelto mi versión favorita de la felicidad." },

  { dia: 17, tipo: "pareja", fecha_memoria: "Un día de trabajo pesado",
    fotos: ["fotos/dia17_1.jpg", "fotos/dia17_2.jpg"],
    carta: "Hay días pesados en los que lo único que me sostiene es saber que al final voy a verte. Pensar en ti sigue siendo mi manera favorita de aligerar cualquier carga." },

  { dia: 18, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia18_1.jpg", "fotos/dia18_2.jpg"],
    carta: "Cuando {{HIJO}} dice tu nombre antes que cualquier otra palabra, entiendo por qué: tú eres, para los dos, el lugar más seguro que conocemos." },

  { dia: 19, tipo: "pareja", fecha_memoria: "Galápagos",
    fotos: ["fotos/dia19_1.jpg", "fotos/dia19_2.jpg"],
    carta: "Entre el mar turquesa y ese silencio enorme de las islas, te miré y pensé: quiero envejecer contigo, quiero mil viajes más como este. Sigo pensando exactamente lo mismo." },

  { dia: 20, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia20_1.jpg", "fotos/dia20_2.jpg"],
    carta: "Verte leerle un cuento a {{HIJO}} cada noche, con esas voces que inventas para cada personaje, es de las cosas más bonitas que pasan en esta casa." },

  { dia: 21, tipo: "pareja", fecha_memoria: "Antes de dormir",
    fotos: ["fotos/dia21_1.jpg", "fotos/dia21_2.jpg"],
    carta: "Escucharte contar tu día sigue siendo mi parte favorita de las veinticuatro horas. No importa cuántos años pasen, espero seguir queriendo escucharte cada noche." },

  { dia: 22, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia22_1.jpg", "fotos/dia22_2.jpg"],
    carta: "{{HIJO}} tiene tu misma terquedad, y aunque a veces sea un dolor de cabeza, en el fondo me encanta ver cuánto se parece a ti." },

  { dia: 23, tipo: "pareja", fecha_memoria: "Nueva York, Times Square",
    fotos: ["fotos/dia23_1.jpg", "fotos/dia23_2.jpg"],
    carta: "Entre tanta gente, tanto letrero y tanto ruido, yo solo quería mirarte a ti. Nueva York nos regaló un montón de momentos así, que hoy recuerdo con una sonrisa." },

  { dia: 24, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia24_1.jpg", "fotos/dia24_2.jpg"],
    carta: "El refrigerador está lleno de dibujos de {{HIJO}}, y aun así siempre encuentras espacio para el próximo. Así eres tú con el amor: nunca se te acaba el espacio." },

  { dia: 25, tipo: "pareja", fecha_memoria: "Un abrazo largo",
    fotos: ["fotos/dia25_1.jpg", "fotos/dia25_2.jpg"],
    carta: "Hay abrazos que dicen más que mil palabras, y los tuyos siempre supieron decir exactamente lo que yo necesitaba escuchar, incluso sin abrir la boca." },

  { dia: 26, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia26_1.jpg", "fotos/dia26_2.jpg"],
    carta: "Cuando {{HIJO}} se enferma y no duermes para cuidarlo, entiendo, otra vez, que tienes un corazón enorme, y que tuve mucha suerte de que decidieras compartirlo conmigo." },

  { dia: 27, tipo: "pareja", fecha_memoria: "Frente al mar",
    fotos: ["fotos/dia27_1.jpg", "fotos/dia13_2.jpg", "fotos/dia13_3.jpg"],
    carta: "El atardecer fue precioso, pero verte a ti mirarlo, con esa calma que solo tienes tú, fue lo más bonito de esa tarde entera." },

  { dia: 28, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia28_1.jpg", "fotos/dia28_2.jpg"],
    carta: "Enseñarle a {{HIJO}} a andar en bicicleta contigo detrás, gritando de emoción los dos, es de esos recuerdos que sé que voy a atesorar toda la vida." },

  { dia: 29, tipo: "pareja", fecha_memoria: "Nueva York, el viaje",
    fotos: ["fotos/dia29_1.jpg", "fotos/dia29_2.jpg"],
    carta: "Desde la espera en el aeropuerto hasta las bobadas que hicimos allá, todo ese viaje fue nuestro. Contigo hasta las esperas largas terminan siendo parte del recuerdo bonito." },

  { dia: 30, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia30_1.jpg", "fotos/dia30_2.jpg"],
    carta: "Ver cómo {{HIJO}} corre a abrazarte apenas te ve después de un día fuera es de esas escenas que no me cansaré de presenciar. Ese recibimiento tuyo — sonrisa enorme, brazos abiertos — es puro tú." },

  { dia: 31, tipo: "pareja", fecha_memoria: "La primera vez que te dije te amo",
    fotos: ["fotos/dia31_1.jpg", "fotos/dia31_2.jpg"],
    carta: "Recuerdo la primera vez que te dije que te amaba: me temblaba la voz, y tú solo sonreíste como si ya lo supieras. Han pasado años y ese temblor todavía aparece cuando te miro." },

  { dia: 32, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia32_1.jpg", "fotos/dia32_2.jpg"],
    carta: "El primer día de escuela de {{HIJO}} lloraste más que él, y aun así fuiste la primera en decirle lo valiente que había sido. Así eres tú: fuerte incluso cuando te tiembla el corazón." },

  { dia: 33, tipo: "pareja", fecha_memoria: "Un baile sin música",
    fotos: ["fotos/dia33_1.jpg", "fotos/dia33_2.jpg", "fotos/dia33_3.jpg"],
    carta: "Bailamos en la cocina sin música real, solo tarareando, y aun así fue de los mejores bailes de mi vida. Contigo hasta el silencio suena bien." },

  { dia: 34, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia34_1.jpg", "fotos/dia34_2.jpg"],
    carta: "{{HIJO}} hace preguntas que no sé cómo responder, y verte inventar explicaciones tan pacientes me recuerda por qué eres exactamente la mamá que necesitaba tener." },

  { dia: 35, tipo: "pareja", fecha_memoria: "Un martes cualquiera",
    fotos: ["fotos/dia35_1.jpg", "fotos/dia35_2.jpg"],
    carta: "Un martes cualquiera, sin nada especial en la agenda, y aun así elegiría repetirlo mil veces solo porque estuviste ahí." },

  { dia: 36, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia36_1.jpg", "fotos/dia02_1.jpg", "fotos/dia02_2.jpg"],
    carta: "Cada noche, antes de dormir, {{HIJO}} pide 'un ratito más' contigo, y cada noche se lo das, aunque estés cansada. Ese ratito extra dice todo lo que necesito saber sobre tu corazón." },

  { dia: 37, tipo: "pareja", fecha_memoria: "Un viaje en carretera",
    fotos: ["fotos/dia37_1.jpg", "fotos/dia37_2.jpg"],
    carta: "En ese viaje en carretera, con la música muy alta y las ventanas abiertas, entendí que no me importa el destino si el camino es contigo." },

  { dia: 38, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia04_1.jpg", "fotos/dia04_2.jpg"],
    carta: "Salir a caminar los tres, sin ningún plan, sigue siendo de mis actividades favoritas — {{HIJO}} señalando cosas, tú riéndote de sus teorías sobre el mundo." },

  { dia: 39, tipo: "pareja", fecha_memoria: "Una pelea tonta",
    fotos: ["fotos/dia39_1.jpg", "fotos/dia39_2.jpg", "fotos/dia39_3.jpg"],
    carta: "Discutimos por algo tan tonto que ya ni recuerdo qué fue, pero sí recuerdo que terminamos riéndonos de nosotros mismos. Contigo hasta pelear se siente ligero." },

  { dia: 40, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia06_1.jpg", "fotos/dia06_2.jpg"],
    carta: "Te vi enseñarle a {{HIJO}} a atarse los zapatos, con toda la paciencia del mundo, repitiendo el mismo nudo veinte veces. Así enseñas tú: sin prisa, con amor de sobra." },

  { dia: 41, tipo: "pareja", fecha_memoria: "Una mañana tranquila",
    fotos: ["fotos/dia41_1.jpg", "fotos/dia41_2.jpg"],
    carta: "Hay mañanas en las que te veo dormir un poco más de la cuenta, y en vez de despertarte, me quedo ahí, solo mirándote, agradecido de tenerte cerca." },

  { dia: 42, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia08_1.jpg", "fotos/dia08_2.jpg", "fotos/dia10_1.jpg"],
    carta: "Cuando {{HIJO}} se cae y corre a tus brazos antes que a los míos, no siento celos — siento alivio de que tenga un lugar tan seguro al cual correr." },

  { dia: 43, tipo: "pareja", fecha_memoria: "Los detalles pequeños",
    fotos: ["fotos/dia43_1.jpg", "fotos/dia43_2.jpg"],
    carta: "Aprendí a quererte en los detalles pequeños: cómo ordenas tus cosas, cómo tarareas mientras cocinas, cómo te ríes antes de contar el chiste. Sigo aprendiendo, y me encanta." },

  { dia: 44, tipo: "hijo", fecha_memoria: "Nuestra familia",
    fotos: ["fotos/dia10_2.jpg", "fotos/dia12_1.jpg"],
    carta: "Verte con tu propia mamá cargando a {{HIJO}} me hizo pensar en todo lo que se hereda sin querer: la ternura, la paciencia, la forma de amar. Por suerte para él, heredó mucho de las dos." },

  { dia: 45, tipo: "familia", fecha_memoria: "Otra vez, y qué bueno",
    fotos: ["fotos/dia45_1.jpg", "fotos/dia45_2.jpg", "fotos/dia45_3.jpg"],
    carta: "Llevamos ya un buen tramo repitiendo esta baraja de recuerdos, y aun así cada vez que aparece uno, lo siento nuevo — porque contigo y con {{HIJO}}, hasta lo que ya vivimos se siente digno de vivirse otra vez. Gracias por esta familia que seguimos escribiendo, un día random a la vez." }
];

/* =====================================================
   Preguntas de cierre de carta (rotan según el tipo del día)
   ===================================================== */
const PREGUNTAS_PAREJA = [
  { pregunta: "¿Te gustaría seguir escribiendo nuestra historia?", boton: "Sí, quiero ♥" },
  { pregunta: "¿Lista para otra vuelta más a tu lado?", boton: "Siempre ♥" },
  { pregunta: "¿Seguimos sumando días juntos?", boton: "Contigo, sí ♥" },
  { pregunta: "¿Te animas a un viaje más conmigo?", boton: "A donde sea, contigo ♥" },
  { pregunta: "¿Me seguirás eligiendo cada día?", boton: "Te elijo a ti ♥" },
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

// Orden fijo y "barajado" de los 45 recuerdos únicos, repetidos 2 veces
// para completar un ciclo de 90 días (3 meses). Se generó una sola vez
// (no es aleatorio en cada visita) para que el mismo día del calendario
// siempre muestre el mismo recuerdo. Ningún número se repite seguido,
// ni siquiera al reiniciar el ciclo cada 90 días.
const ORDEN_90_DIAS = [
  36, 13, 33, 42, 22, 28, 27, 20, 16, 30, 45, 44, 24, 32, 31, 43, 11, 23, 38, 32,
  12, 16, 29, 13, 17, 4, 7, 39, 11, 26, 18, 7, 35, 19, 5, 25, 12, 39, 9, 22, 3,
  17, 25, 10, 28, 8, 2, 40, 10, 21, 15, 37, 8, 30, 41, 27, 4, 43, 20, 33, 9, 36,
  38, 23, 15, 34, 2, 40, 35, 18, 14, 24, 14, 44, 29, 45, 31, 37, 34, 26, 42, 6,
  1, 3, 1, 21, 41, 19, 5, 6
];

/* =====================================================
   Días especiales del calendario real
   -----------------------------------------------------
   A diferencia de los 45 recuerdos normales (que rotan cada 24h sin
   importar la fecha real), estos dos SÍ están atados al calendario:
   se activan solos cada año, en la fecha exacta, sin que tengas que
   tocar nada. Mientras dure ese día, reemplazan por completo el
   recuerdo que le tocaría por la rotación normal, y cambian también
   el ambiente visual del sitio (colores, un mensaje especial arriba).

   La clave es "MM-DD" (mes-día), así se repite cada año automáticamente.
   ===================================================== */
const DIAS_ESPECIALES = {
  // 👉 6 de octubre — cumpleaños de Daniela
  "10-06": {
    tipo: "cumpleanos",
    tema: "cumpleanos",
    banner_texto: "🎂 Feliz cumpleaños 🎂",
    fecha_memoria: "Hoy es tu día",
    fotos: [
      "fotos/cumple_1.jpg",   // la tarjeta de cumpleaños
      "fotos/dia25_1.jpg",    // los dos, abrazados en el mirador
      "fotos/dia16_1.jpg"     // los tres, en la playa junto al faro
    ],
    carta:
      "Hoy no es un día cualquiera: es el día en que naciste tú, la persona " +
      "que le dio sentido a todo lo demás. Ojalá este día te recuerde, aunque " +
      "sea un poco, todo lo que significas para mí y para {{HIJO}}. Feliz " +
      "cumpleaños, mi amor — que este nuevo año te traiga toda la felicidad " +
      "que tú nos regalas a diario.",
    pregunta_fija: {
      pregunta: "¿Lista para otro año siendo increíble?",
      boton: "Vamos juntos ♥"
    },
    cierre_fijo: "Gracias por existir. Feliz cumpleaños, te amo con todo mi corazón."
  },

  // 👉 14 de diciembre — aniversario de bodas
  // (distinto de FECHA_RELACION, que es cuando empezaron a salir)
  "12-14": {
    tipo: "aniversario",
    tema: "aniversario",
    banner_texto: "💍 Feliz aniversario 💍",
    fecha_memoria: "Nuestro aniversario de bodas",
    fotos: [
      "fotos/aniv_1.jpg",     // la tarjeta de aniversario
      "fotos/dia01_1.jpg",    // los dos, la cena romántica del "TE AMO"
      "fotos/dia12_1.jpg"     // los tres, elegantes, en la iglesia del vitral
    ],
    carta:
      "El día que nos casamos prometimos algo para siempre, y hoy, cada " +
      "aniversario, sigo sintiendo la misma certeza de aquel día. Gracias " +
      "por elegirme como esposo, por construir conmigo esta familia, por " +
      "seguir aquí. Feliz aniversario, mi amor — quiero mil años más contigo.",
    pregunta_fija: {
      pregunta: "¿Quieres seguir siendo mi esposa, hoy y siempre?",
      boton: "Sí, para siempre ♥"
    },
    cierre_fijo: "Gracias por ser mi esposa, mi compañera, mi hogar. Feliz aniversario."
  }
};

// Revisa si HOY (la fecha real del celular, no el ciclo de 90 días) es
// uno de los dos días especiales.
function obtenerDiaEspecialDeHoy() {
  const ahora = new Date();
  // Sin padStart (no lo soportan navegadores algo antiguos): se rellena a mano.
  const mesNum = ahora.getMonth() + 1;
  const diaNum = ahora.getDate();
  const mm = (mesNum < 10 ? "0" : "") + mesNum;
  const dd = (diaNum < 10 ? "0" : "") + diaNum;
  return DIAS_ESPECIALES[mm + "-" + dd] || null;
}


function obtenerRecuerdoDeHoy() {
  const especial = obtenerDiaEspecialDeHoy();
  const normal = obtenerRecuerdoDeLaRotacion();

  if (especial) {
    // Red de seguridad: si las fotos del día especial todavía son
    // marcadores sin reemplazar (por ejemplo, llegó el 6 de octubre y
    // aún no las habías puesto), se usan las fotos del recuerdo que
    // tocaba ese día. Así ella igual ve la carta y el tema especial,
    // nunca imágenes rotas.
    const fotosReales = especial.fotos.filter(function (f) {
      return f.indexOf("PEGA_AQUI") !== 0;
    });
    if (fotosReales.length === 0) {
      const copia = {};
      for (const clave in especial) {
        if (Object.prototype.hasOwnProperty.call(especial, clave)) {
          copia[clave] = especial[clave];
        }
      }
      copia.fotos = normal.fotos;
      return copia;
    }
    // Si solo algunas están puestas, se muestran únicamente esas
    if (fotosReales.length !== especial.fotos.length) {
      const copia = {};
      for (const clave in especial) {
        if (Object.prototype.hasOwnProperty.call(especial, clave)) {
          copia[clave] = especial[clave];
        }
      }
      copia.fotos = fotosReales;
      return copia;
    }
    return especial;
  }

  return normal;
}

function obtenerRecuerdoDeLaRotacion() {
  const inicio = new Date(FECHA_INICIO + "T00:00:00");
  const ahora = new Date();
  const msPorDia = 24 * 60 * 60 * 1000;
  const diasTranscurridos = Math.floor((ahora - inicio) / msPorDia);
  const posicionEnCiclo = ((diasTranscurridos % 90) + 90) % 90;
  const idDelDia = ORDEN_90_DIAS[posicionEnCiclo];
  return RECUERDOS.find((r) => r.dia === idDelDia) || RECUERDOS[0];
}

function esFamiliar(tipo) {
  return tipo === "hijo" || tipo === "familia";
}

function obtenerPregunta(recuerdo) {
  // Los días especiales traen su propia pregunta fija, no usan la rotación
  if (recuerdo.pregunta_fija) return recuerdo.pregunta_fija;
  const pool = esFamiliar(recuerdo.tipo) ? PREGUNTAS_FAMILIA : PREGUNTAS_PAREJA;
  return pool[(recuerdo.dia - 1) % pool.length];
}

function obtenerCierre(recuerdo) {
  if (recuerdo.cierre_fijo) return recuerdo.cierre_fijo;
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
   Ayudas para imágenes
   -----------------------------------------------------
   Cada foto existe en dos tamaños:
     fotos/diaXX_N.jpg        → ligera, para el carrusel
     fotos/full/diaXX_N.jpg   → grande, solo al hacer zoom
   Así la app carga rápido y la foto ampliada se ve nítida.
   ===================================================== */
function versionGrande(ruta) {
  if (ruta.indexOf("fotos/") !== 0) return ruta;
  return ruta.replace("fotos/", "fotos/full/");
}

// Muestra la imagen con un fundido suave en cuanto termina de cargar,
// y quita el efecto de "cargando" del contenedor.
function alCargarImagen(img, contenedor) {
  function marcarLista() {
    img.classList.add("loaded");
    if (contenedor) contenedor.classList.add("loaded");
  }
  function marcarFallida() {
    // Si una foto no carga (archivo faltante o sin señal), se oculta la
    // imagen rota y el marco queda con su fondo color pergamino, en vez
    // de mostrar el ícono gris de "imagen rota" del navegador.
    img.classList.add("failed");
    if (contenedor) contenedor.classList.add("loaded", "failed");
  }
  if (img.complete && img.naturalWidth > 0) {
    marcarLista();
  } else {
    img.addEventListener("load", marcarLista, { once: true });
    img.addEventListener("error", marcarFallida, { once: true });
  }
}

/* =====================================================
   Carrusel de fotos del día
   ===================================================== */
let fotosDelDia = [];      // rutas ligeras
let tituloDelDia = "";

function construirCarrusel(fotos, lugar) {
  const carousel = document.getElementById("carousel");
  const dotsWrap = document.getElementById("carousel-dots");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");

  carousel.innerHTML = "";
  dotsWrap.innerHTML = "";
  fotosDelDia = fotos.slice();
  tituloDelDia = lugar;

  fotos.forEach(function (url, i) {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const img = document.createElement("img");
    img.src = url;
    img.alt = lugar + " — foto " + (i + 1) + " de " + fotos.length;
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";
    img.draggable = false;
    img.addEventListener("click", function () {
      abrirLightbox(i);
    });

    alCargarImagen(img, slide);
    slide.appendChild(img);
    carousel.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Ver foto " + (i + 1));
    dot.addEventListener("click", function () {
      irASlide(i);
    });
    dotsWrap.appendChild(dot);
  });

  // Las flechas solo tienen sentido si hay más de una foto
  const varias = fotos.length > 1;
  btnPrev.hidden = !varias;
  btnNext.hidden = !varias;
  dotsWrap.style.display = varias ? "" : "none";

  actualizarPuntos(0);
}

function slideActual() {
  const carousel = document.getElementById("carousel");
  if (!carousel.clientWidth) return 0;
  return Math.round(carousel.scrollLeft / carousel.clientWidth);
}

function irASlide(indice) {
  const carousel = document.getElementById("carousel");
  const total = fotosDelDia.length;
  if (!total) return;
  const destino = Math.max(0, Math.min(indice, total - 1));
  carousel.scrollTo({ left: destino * carousel.clientWidth, behavior: "smooth" });
  actualizarPuntos(destino);
}

function actualizarPuntos(indice) {
  // Bucle clásico en vez de NodeList.forEach: funciona en todos los navegadores
  const puntos = document.querySelectorAll("#carousel-dots .dot");
  for (let i = 0; i < puntos.length; i++) {
    puntos[i].classList.toggle("active", i === indice);
  }
}

// Un solo listener de scroll para todo el ciclo de vida de la app
(function conectarCarrusel() {
  const carousel = document.getElementById("carousel");
  let esperando = false;

  carousel.addEventListener("scroll", function () {
    if (esperando) return;
    esperando = true;
    requestAnimationFrame(function () {
      actualizarPuntos(slideActual());
      esperando = false;
    });
  });

  document.getElementById("carousel-prev").addEventListener("click", function () {
    irASlide(slideActual() - 1);
  });
  document.getElementById("carousel-next").addEventListener("click", function () {
    irASlide(slideActual() + 1);
  });
})();

/* =====================================================
   Visor de fotos (lightbox)
   ===================================================== */
const lightboxEl = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxHint = document.getElementById("lightbox-hint");
const lbPrev = document.getElementById("lightbox-prev");
const lbNext = document.getElementById("lightbox-next");

let indiceLightbox = 0;
let listaLightbox = [];   // rutas ligeras que se están visitando
let ultimoFoco = null;

function abrirLightbox(indice, lista, alt) {
  listaLightbox = lista || fotosDelDia;
  if (!listaLightbox.length) return;

  indiceLightbox = Math.max(0, Math.min(indice, listaLightbox.length - 1));
  ultimoFoco = document.activeElement;

  cargarFotoLightbox(alt);

  const varias = listaLightbox.length > 1;
  lbPrev.hidden = !varias;
  lbNext.hidden = !varias;

  lightboxEl.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxHint.hidden = false;
  document.getElementById("lightbox-close").focus();
}

function cargarFotoLightbox(alt) {
  const ligera = listaLightbox[indiceLightbox];
  quitarZoom();

  // Reinicia la animación de entrada aunque ya tuviera la clase puesta
  lightboxImg.classList.remove("entering");
  void lightboxImg.offsetWidth; // fuerza un reflow para poder repetir la animación
  lightboxImg.classList.add("entering");

  // Muestra primero la versión ligera (ya está en caché, aparece al instante)
  // y la cambia por la grande en cuanto termina de descargarse.
  lightboxImg.src = ligera;
  lightboxImg.alt = alt || (tituloDelDia + " — foto " + (indiceLightbox + 1));

  const grande = new Image();
  const rutaGrande = versionGrande(ligera);
  grande.onload = function () {
    if (listaLightbox[indiceLightbox] === ligera) {
      lightboxImg.src = rutaGrande;
    }
  };
  grande.src = rutaGrande;
}

function cerrarLightbox() {
  lightboxEl.hidden = true;
  document.body.classList.remove("lightbox-open");
  quitarZoom();
  if (ultimoFoco && typeof ultimoFoco.focus === "function") ultimoFoco.focus();
}

function moverLightbox(paso) {
  if (listaLightbox.length < 2) return;
  indiceLightbox = (indiceLightbox + paso + listaLightbox.length) % listaLightbox.length;
  cargarFotoLightbox();
}

function quitarZoom() {
  lightboxImg.classList.remove("zoomed");
  lightboxImg.style.transform = "";
  lightboxImg.style.transformOrigin = "";
}

document.getElementById("lightbox-close").addEventListener("click", cerrarLightbox);
lbPrev.addEventListener("click", function () { moverLightbox(-1); });
lbNext.addEventListener("click", function () { moverLightbox(1); });

// Tocar el fondo oscuro cierra el visor
lightboxEl.addEventListener("click", function (e) {
  if (e.target === lightboxEl || e.target.classList.contains("lightbox-stage")) {
    cerrarLightbox();
  }
});

// Tocar la foto alterna el zoom, centrado justo donde se tocó
lightboxImg.addEventListener("click", function (e) {
  if (lightboxImg.classList.contains("zoomed")) {
    quitarZoom();
    lightboxHint.hidden = false;
    return;
  }
  const rect = lightboxImg.getBoundingClientRect();
  const origenX = ((e.clientX - rect.left) / rect.width) * 100;
  const origenY = ((e.clientY - rect.top) / rect.height) * 100;
  lightboxImg.style.transformOrigin = origenX + "% " + origenY + "%";
  lightboxImg.style.transform = "scale(2.3)";
  lightboxImg.classList.add("zoomed");
  lightboxHint.hidden = true;
});

// Teclado: Escape cierra, flechas navegan
document.addEventListener("keydown", function (e) {
  if (!lightboxEl.hidden) {
    if (e.key === "Escape") cerrarLightbox();
    else if (e.key === "ArrowLeft") moverLightbox(-1);
    else if (e.key === "ArrowRight") moverLightbox(1);
    return;
  }
  if (!videoModal.hidden && e.key === "Escape") cerrarVideo();
});

// Deslizar el dedo para cambiar de foto (solo si no está acercada)
(function gestosLightbox() {
  let inicioX = 0;
  let inicioY = 0;

  lightboxEl.addEventListener("touchstart", function (e) {
    if (e.touches.length !== 1) return;
    inicioX = e.touches[0].clientX;
    inicioY = e.touches[0].clientY;
  }, { passive: true });

  lightboxEl.addEventListener("touchend", function (e) {
    if (lightboxImg.classList.contains("zoomed")) return;
    if (!e.changedTouches.length) return;
    const dx = e.changedTouches[0].clientX - inicioX;
    const dy = e.changedTouches[0].clientY - inicioY;
    // Solo cuenta como deslizar si el gesto fue claramente horizontal
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      moverLightbox(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
})();

/* =====================================================
   Contador animado de tiempo juntos
   ===================================================== */
function animarNumero(elemento, destino, duracion) {
  const prefiereQuieto = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefiereQuieto || destino === 0) {
    elemento.textContent = destino;
    return;
  }

  const inicio = performance.now();
  function paso(ahora) {
    const avance = Math.min((ahora - inicio) / duracion, 1);
    // Desaceleración suave al final
    const suave = 1 - Math.pow(1 - avance, 3);
    elemento.textContent = Math.round(destino * suave);
    if (avance < 1) requestAnimationFrame(paso);
    else elemento.textContent = destino;
  }
  requestAnimationFrame(paso);
}

/* =====================================================
   Construir la pantalla del día
   ===================================================== */
let recuerdoDeHoy = null;

// Cambia el ambiente visual del sitio si hoy es un día especial
// (cumpleaños o aniversario), y lo deja normal cualquier otro día.
function aplicarTemaDelDia(recuerdo) {
  document.body.classList.remove("tema-cumpleanos", "tema-aniversario");
  const banner = document.getElementById("special-banner");

  if (recuerdo.tema) {
    document.body.classList.add("tema-" + recuerdo.tema);
    banner.textContent = recuerdo.banner_texto || "";
    banner.hidden = !recuerdo.banner_texto;
  } else {
    banner.hidden = true;
  }
}

function mostrarRegaloDeHoy() {
  recuerdoDeHoy = obtenerRecuerdoDeHoy();
  const pregunta = obtenerPregunta(recuerdoDeHoy);
  const cierre = obtenerCierre(recuerdoDeHoy);

  aplicarTemaDelDia(recuerdoDeHoy);

  document.getElementById("memory-date").textContent = recuerdoDeHoy.fecha_memoria;
  document.getElementById("couple-names").textContent = NOMBRES_PAREJA;
  construirCarrusel(recuerdoDeHoy.fotos, recuerdoDeHoy.fecha_memoria);

  document.getElementById("letter-text").textContent = conNombreHijo(recuerdoDeHoy.carta);
  document.getElementById("letter-question").textContent = pregunta.pregunta;
  document.getElementById("confirm-btn").textContent = pregunta.boton;

  document.getElementById("final-message").textContent = conNombreHijo(cierre);

  const finalPhoto = document.getElementById("final-photo");
  finalPhoto.classList.remove("loaded");
  finalPhoto.src = recuerdoDeHoy.fotos[0];
  finalPhoto.alt = recuerdoDeHoy.fecha_memoria;
  alCargarImagen(finalPhoto, null);

  const splash = document.getElementById("splash");
  const daily = document.getElementById("daily");
  splash.classList.add("hiding");
  setTimeout(function () {
    splash.hidden = true;
    daily.hidden = false;
    daily.classList.add("reveal");
  }, 440);
}

/* =====================================================
   Música (YouTube, solo audio)
   ===================================================== */
const muteToggle = document.getElementById("mute-toggle");
const muteIcon = document.getElementById("mute-icon");
let ytPlayer = null;
let ytPlayerListo = false;
let reproducirEnCuantoEsteListo = false;

function intentarReproducirCancion() {
  if (ytPlayer && ytPlayerListo && typeof ytPlayer.playVideo === "function") {
    // Caso poco común: la canción tardó en cargar y ella ya avanzó hasta
    // el video sorpresa antes de que arrancara. Si es así, que empiece
    // directo en volumen bajo, para no taparle la narración justo al
    // primer segundo.
    if (videoModal && !videoModal.hidden && typeof ytPlayer.setVolume === "function") {
      volumenMusicaAntesDelVideo =
        typeof ytPlayer.getVolume === "function" ? ytPlayer.getVolume() : 100;
      ytPlayer.setVolume(VOLUMEN_MUSICA_CON_VIDEO);
    }
    ytPlayer.playVideo();
    muteToggle.hidden = false;
  } else {
    // El reproductor aún viene en camino desde internet:
    // lo dejamos marcado para que suene apenas esté listo.
    reproducirEnCuantoEsteListo = true;
  }
}

muteToggle.addEventListener("click", function () {
  if (!ytPlayer) return;
  const estaSilenciado = ytPlayer.isMuted();
  if (estaSilenciado) ytPlayer.unMute();
  else ytPlayer.mute();
  muteIcon.textContent = estaSilenciado ? "🔊" : "🔇";
  muteToggle.setAttribute("aria-label", estaSilenciado ? "Silenciar música" : "Activar música");
});

// El script de YouTube llama a esta función al terminar de cargar.
// El nombre es fijo, no lo cambies.
window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("yt-player-slot", {
    height: "0",
    width: "0",
    videoId: YOUTUBE_VIDEO_ID,
    playerVars: { autoplay: 0, controls: 0, playsinline: 1, rel: 0 },
    events: {
      onReady: function () {
        ytPlayerListo = true;
        if (reproducirEnCuantoEsteListo) intentarReproducirCancion();
      }
    }
  });
};

/* =====================================================
   Confeti de girasoles y corazones
   ===================================================== */
function lanzarConfeti(origenEl) {
  const prefiereQuieto = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefiereQuieto) return;

  const rect = origenEl.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const simbolos = ["🌻", "♥", "🌻", "♥", "✿"];
  const cantidad = 20;

  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement("span");
    pieza.className = "confetti-piece";
    pieza.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    pieza.setAttribute("aria-hidden", "true");

    const angulo = Math.random() * Math.PI * 2;
    const distancia = 80 + Math.random() * 130;
    const tx = Math.cos(angulo) * distancia;
    const ty = Math.sin(angulo) * distancia - 60; // sesgo hacia arriba
    const rot = Math.round(Math.random() * 300 - 150) + "deg";

    pieza.style.left = originX + "px";
    pieza.style.top = originY + "px";
    pieza.style.fontSize = (16 + Math.random() * 12) + "px";
    pieza.style.animationDelay = (Math.random() * 0.12) + "s";
    pieza.style.setProperty("--tx", tx + "px");
    pieza.style.setProperty("--ty", ty + "px");
    pieza.style.setProperty("--rot", rot);

    document.body.appendChild(pieza);
    setTimeout(function () { pieza.remove(); }, 1400);
  }
}

// ---------- Lluvia de corazones rojos, cayendo desde arriba ----------
function lanzarLluviaDeCorazones() {
  const prefiereQuieto = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefiereQuieto) return;

  const cantidad = 24;
  // Todo en píxeles reales (no vh/vw): más confiable en móviles, donde
  // esas unidades pueden recalcularse mal si la barra del navegador
  // aparece o desaparece mientras corre la animación.
  const anchoVentana = window.innerWidth || document.documentElement.clientWidth || 375;
  const distanciaCaida = (window.innerHeight || document.documentElement.clientHeight || 800) + 130;

  for (let i = 0; i < cantidad; i++) {
    const pieza = document.createElement("span");
    pieza.className = "heart-rain-piece";
    pieza.textContent = "❤";
    pieza.setAttribute("aria-hidden", "true");

    const duracion = 2.5 + Math.random() * 2;     // 2.5s a 4.5s de caída
    const retraso = Math.random() * 1.1;          // arrancan escalonados
    const dx = Math.round(Math.random() * 90 - 45) + "px"; // leve zigzag
    const rot = Math.round(Math.random() * 260 - 130) + "deg";

    pieza.style.left = Math.round(Math.random() * anchoVentana) + "px";
    pieza.style.fontSize = (15 + Math.random() * 17) + "px";
    pieza.style.animationDuration = duracion + "s";
    pieza.style.animationDelay = retraso + "s";
    pieza.style.setProperty("--dx", dx);
    pieza.style.setProperty("--fall", distanciaCaida + "px");
    pieza.style.setProperty("--rot", rot);

    document.body.appendChild(pieza);
    setTimeout(function () { pieza.remove(); }, (duracion + retraso) * 1000 + 200);
  }
}

/* =====================================================
   Interacción
   ===================================================== */
document.getElementById("wife-name-btn").textContent = NOMBRE_ESPOSA;

// ---------- 1. Abrir el regalo (y arrancar la canción) ----------
document.getElementById("open-gift").addEventListener("click", function (e) {
  // El intento de reproducir va aquí, dentro del primer toque del usuario:
  // es el único momento en que el celular garantiza permitir sonido.
  intentarReproducirCancion();

  e.currentTarget.disabled = true;
  // Se llama de inmediato (no con retraso) para que el desvanecimiento
  // arranque en el mismo instante del toque y se sienta fluido.
  mostrarRegaloDeHoy();
});

// ---------- 2. Abrir el sobre ----------
document.getElementById("open-letter").addEventListener("click", function (e) {
  const boton = e.currentTarget;
  boton.disabled = true;
  lanzarConfeti(boton);
  boton.classList.add("breaking");

  const envelopeWrap = document.getElementById("envelope-wrap");
  const letterWrap = document.getElementById("letter-wrap");

  envelopeWrap.classList.add("opening");          // la solapa se abre
  setTimeout(function () {
    envelopeWrap.classList.add("opened");         // el sobre se desvanece
  }, 600);

  setTimeout(function () {
    envelopeWrap.hidden = true;
    letterWrap.hidden = false;
    letterWrap.classList.add("emerge");           // la carta emerge
    letterWrap.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 730);
});

// ---------- 3. Confirmar la carta → revelar el contador ----------
document.getElementById("confirm-btn").addEventListener("click", function (e) {
  const finalWrap = document.getElementById("final-wrap");
  e.currentTarget.disabled = true;
  finalWrap.hidden = false;
  document.getElementById("footer-note").hidden = false;
  lanzarLluviaDeCorazones();

  const { años, meses, dias } = calcularTiempoJuntos(FECHA_RELACION);
  // Pequeña espera para que la animación arranque cuando ya está a la vista
  setTimeout(function () {
    animarNumero(document.getElementById("years-num"), años, 1100);
    animarNumero(document.getElementById("months-num"), meses, 1100);
    animarNumero(document.getElementById("days-num"), dias, 1100);
  }, 380);

  setTimeout(function () {
    finalWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
});

// La foto final también se puede ampliar
document.getElementById("final-photo").addEventListener("click", function (e) {
  if (!e.currentTarget.getAttribute("src")) return;
  abrirLightbox(0, [e.currentTarget.getAttribute("src")], e.currentTarget.alt);
});

/* =====================================================
   Reproductor de video — "Tengo una sorpresa más"
   ===================================================== */
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");
let ultimoFocoVideo = null;

// Guarda el volumen que tenía la canción antes de bajarla, para
// devolverla exactamente a ese nivel al cerrar el video.
let volumenMusicaAntesDelVideo = null;

function abrirVideo() {
  ultimoFocoVideo = document.activeElement;
  videoModal.hidden = false;
  document.body.classList.add("lightbox-open"); // reutiliza el mismo bloqueo de scroll

  // Se baja el volumen de la canción (no se detiene) para que se
  // escuche bien lo que dices en el video, sin perder el ambiente
  // de la música de fondo. Solo si de verdad estaba sonando.
  if (ytPlayer && ytPlayerListo && typeof ytPlayer.getPlayerState === "function") {
    if (ytPlayer.getPlayerState() === 1 /* YT.PlayerState.PLAYING */ &&
        typeof ytPlayer.setVolume === "function") {
      volumenMusicaAntesDelVideo =
        typeof ytPlayer.getVolume === "function" ? ytPlayer.getVolume() : 100;
      ytPlayer.setVolume(VOLUMEN_MUSICA_CON_VIDEO);
    }
  }

  // Se llama aquí, dentro del propio toque del usuario: es el momento en
  // que el navegador garantiza permitir la reproducción con sonido.
  const intento = videoPlayer.play();
  if (intento && typeof intento.catch === "function") {
    intento.catch(function () {
      // Si el navegador igual lo bloquea, ella puede darle play con los
      // controles nativos del reproductor — no pasa nada grave.
    });
  }

  document.getElementById("video-close").focus();
}

function cerrarVideo() {
  videoPlayer.pause();
  videoModal.hidden = true;
  document.body.classList.remove("lightbox-open");

  // La canción vuelve exactamente al volumen que tenía antes del video,
  // solo si fue este video quien se lo bajó (si ella la había silenciado
  // antes a propósito, se queda como estaba).
  if (volumenMusicaAntesDelVideo !== null &&
      ytPlayer && typeof ytPlayer.setVolume === "function") {
    ytPlayer.setVolume(volumenMusicaAntesDelVideo);
  }
  volumenMusicaAntesDelVideo = null;

  if (ultimoFocoVideo && typeof ultimoFocoVideo.focus === "function") {
    ultimoFocoVideo.focus();
  }
}

document.getElementById("open-video").addEventListener("click", abrirVideo);
document.getElementById("video-close").addEventListener("click", cerrarVideo);

// Tocar el fondo oscuro también cierra el video
videoModal.addEventListener("click", function (e) {
  if (e.target === videoModal || e.target.classList.contains("video-stage")) {
    cerrarVideo();
  }
});

// ---------- 4. "Verlo de nuevo" ----------
function reiniciarRegalo() {
  const splash = document.getElementById("splash");
  const daily = document.getElementById("daily");
  const envelopeWrap = document.getElementById("envelope-wrap");
  const letterWrap = document.getElementById("letter-wrap");
  const finalWrap = document.getElementById("final-wrap");
  const sealBtn = document.getElementById("open-letter");

  // Pantallas de vuelta a su estado inicial
  daily.hidden = true;
  daily.classList.remove("reveal");
  splash.hidden = false;
  splash.classList.remove("hiding");
  document.getElementById("open-gift").disabled = false;

  document.body.classList.remove("tema-cumpleanos", "tema-aniversario");
  document.getElementById("special-banner").hidden = true;

  envelopeWrap.hidden = false;
  envelopeWrap.classList.remove("opening", "opened");
  sealBtn.classList.remove("breaking");
  sealBtn.disabled = false;

  letterWrap.hidden = true;
  letterWrap.classList.remove("emerge");
  finalWrap.hidden = true;
  document.getElementById("footer-note").hidden = true;

  // Si el video quedó abierto, se cierra y vuelve al inicio
  if (!videoModal.hidden) cerrarVideo();
  try { videoPlayer.currentTime = 0; } catch (err) { /* aún no había cargado, no pasa nada */ }
  document.getElementById("confirm-btn").disabled = false;

  // Contador y carrusel a cero
  document.getElementById("years-num").textContent = "0";
  document.getElementById("months-num").textContent = "0";
  document.getElementById("days-num").textContent = "0";
  const carousel = document.getElementById("carousel");
  carousel.scrollLeft = 0;
  actualizarPuntos(0);

  // La canción vuelve al principio, lista para sonar otra vez
  if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
    ytPlayer.pauseVideo();
    if (typeof ytPlayer.seekTo === "function") ytPlayer.seekTo(0, true);
  }
  muteToggle.hidden = true;
  reproducirEnCuantoEsteListo = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("restart-btn").addEventListener("click", reiniciarRegalo);

/* =====================================================
   Service Worker (PWA)
   ===================================================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {
      // Si falla (por ejemplo al abrir el archivo en local sin servidor),
      // la app sigue funcionando igual, solo sin modo offline.
    });
  });
}
