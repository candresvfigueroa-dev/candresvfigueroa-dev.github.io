/* ══════════════════════════════════════
   DATOS DE NIVELES
══════════════════════════════════════ */
const niveles = [
  {
    sit: "Llegas al salón y ves a tus compañeros.",
    img: "img/llegas_salon.png",
    imgAlt: "Estudiantes saludándose en un salón",
    opts: ["No decir nada", "Decir hola y saludar", "Empujar a alguien para pasar"],
    correct: 1,
    retros: [
      "😶 Quedarte en silencio crea distancia con los demás. No saludar puede hacer que tus compañeros piensen que no te interesa relacionarte con ellos.",
      "🎉 ¡Muy bien! Saludar es la base de cualquier relación positiva. Un simple 'hola' genera confianza, crea buen ambiente y muestra respeto hacia quienes te rodean.",
      "😟 Empujar a alguien nunca es una opción aceptable. Causa daño físico y emocional, genera miedo y rompe la confianza entre compañeros."
    ]
  },
  {
    sit: "Necesitas un lápiz pero no tienes.",
    img: "img/lapiz.png",
    imgAlt: "Materiales escolares sobre una mesa",
    opts: ["Quitárselo a alguien", "Pedir prestado amablemente", "No hacer nada"],
    correct: 1,
    retros: [
      "😕 Tomar las cosas de otros sin permiso es una falta de respeto. Genera conflictos, desconfianza y puede arruinar tu relación con ese compañero.",
      "🙌 ¡Excelente! Pedir prestado con amabilidad muestra madurez y respeto. La mayoría de las personas están dispuestas a ayudar cuando se les pide de forma cordial.",
      "🙁 Quedarte sin participar cuando puedes pedir ayuda no tiene sentido. Comunicarte con los demás es una habilidad importante que te abrirá muchas puertas."
    ]
  },
  {
    sit: "Tu amigo te está contando algo importante.",
    img: "img/contando.png",
    imgAlt: "Dos amigos conversando atentamente",
    opts: ["Interrumpirlo para hablar tú", "Escuchar con atención", "Ignorarlo y hacer otra cosa"],
    correct: 1,
    retros: [
      "😕 Interrumpir le dice al otro que lo que tú tienes que decir importa más. Eso hace que la persona se sienta ignorada y puede dañar la confianza en la amistad.",
      "👏 ¡Perfecto! Escuchar de verdad es uno de los regalos más grandes que puedes darle a alguien. Fortalece la amistad y demuestra que te importa lo que siente.",
      "😟 Ignorar a alguien que te habla puede herirlo profundamente. Le dice que su historia no vale tu tiempo, y eso aleja las relaciones."
    ]
  },
  {
    sit: "Estás haciendo un trabajo en grupo con tus compañeros.",
    img: "img/grupo.png",
    imgAlt: "Grupo de estudiantes trabajando juntos",
    opts: ["Hacerlo solo sin el grupo", "No participar y esperar", "Compartir ideas y colaborar"],
    correct: 2,
    retros: [
      "🤔 Hacer el trabajo solo excluye al grupo y rompe la dinámica de equipo. Además, pierdes la oportunidad de aprender de los demás y de obtener mejores resultados juntos.",
      "🙁 No participar es injusto con tus compañeros que sí se esfuerzan. Tu aportación es valiosa: cada persona tiene perspectivas únicas que enriquecen el resultado final.",
      "💡 ¡Genial! Colaborar une distintas fortalezas y perspectivas. Los equipos que trabajan juntos con respeto logran resultados mucho mejores y crean lazos más fuertes."
    ]
  },
  {
    sit: "Juegas un juego y pierdes.",
    img: "img/videojuegos.png",
    imgAlt: "Niños jugando un juego de mesa",
    opts: ["Enojarte y hacer un berrinche", "Aceptar el resultado con calma", "Irte sin decir nada"],
    correct: 1,
    retros: [
      "😣 El enojo no cambia el resultado y arruina el momento para todos. Aprender a manejar la frustración ante una derrota es una habilidad emocional muy valiosa.",
      "🏆 ¡Excelente! Aceptar perder con calma y felicitar al ganador muestra madurez emocional. Eso te convierte en alguien con quien todos quieren jugar.",
      "🙂 Irte sin decir nada puede parecer una mala reacción ante la derrota. Quedarte, reconocer el juego y despedirte bien muestra respeto hacia todos los que participaron."
    ]
  },
  {
    sit: "Hay una fila y tú llegas después.",
    img: "img/fila.png",
    imgAlt: "Personas haciendo fila ordenadamente",
    opts: ["Colarte al frente", "Esperar tu turno", "Empujar a otros para avanzar"],
    correct: 1,
    retros: [
      "😕 Colarse es injusto porque ignora el tiempo y el esfuerzo de quienes llegaron antes. Genera molestia, conflictos y muestra falta de respeto hacia los demás.",
      "👏 ¡Correcto! Esperar tu turno demuestra respeto y consideración. Es una norma básica de convivencia que hace que todo funcione mejor para todos.",
      "😟 Empujar puede lastimar a alguien físicamente y crea un ambiente hostil. Solo empeora la situación y puede generar conflictos mayores."
    ]
  },
  {
    sit: "Notas que un compañero está triste y solo.",
    img: "img/triste.png",
    imgAlt: "Persona ofreciendo apoyo a un amigo",
    opts: ["Burlarte de su tristeza", "Acercarte y preguntarle cómo está", "Ignorarlo"],
    correct: 1,
    retros: [
      "😢 Burlarse de alguien que está triste causa un daño emocional muy profundo. Empeora su estado, destruye la confianza y puede dejar una herida difícil de sanar.",
      "❤️ ¡Qué bonito gesto! Acercarte a alguien triste puede cambiarle el día por completo. La empatía, ponerse en el lugar del otro, es uno de los valores más poderosos que existen.",
      "🙁 Ignorar a alguien que sufre es una oportunidad perdida de hacer el bien. A veces basta con acercarse y preguntar '¿estás bien?' para que alguien se sienta menos solo."
    ]
  },
  {
    sit: "Alguien te está hablando directamente.",
    img: "img/hablando.png",
    imgAlt: "Dos personas en conversación atenta",
    opts: ["Mirar el celular sin prestar atención", "Escuchar y mantener contacto visual", "Irte mientras te hablan"],
    correct: 1,
    retros: [
      "😕 Usar el celular mientras alguien te habla envía un mensaje claro: 'lo que dices no me importa'. Es una de las formas más comunes de faltar el respeto hoy en día.",
      "👏 ¡Muy bien! Escuchar con atención y mantener contacto visual demuestra respeto genuino. La persona se siente valorada e importante, lo que fortalece cualquier relación.",
      "😟 Irte mientras alguien te habla es una de las actitudes más groseras que existen. Indica que esa persona y su tiempo no tienen ningún valor para ti."
    ]
  },
  {
    sit: "Alguien te ayuda con algo difícil.",
    img: "img/ayuda.png",
    imgAlt: "Persona ayudando a otra con una tarea",
    opts: ["No decir nada y seguir", "Agradecer de corazón", "Ignorar lo que hicieron"],
    correct: 1,
    retros: [
      "🙁 No reconocer la ayuda puede hacer sentir al otro que su esfuerzo fue invisible. El agradecimiento es la forma natural de cerrar ese intercambio con respeto.",
      "🙌 ¡Perfecto! Dar las gracias de corazón fortalece los vínculos y motiva a las personas a seguir siendo generosas. Es un acto simple con un gran impacto en las relaciones.",
      "😕 Ignorar la ayuda recibida puede percibirse como ingratitud o arrogancia. Con el tiempo, las personas dejan de querer ayudar a quienes no reconocen su esfuerzo."
    ]
  },
  {
    sit: "Tienes un problema con un compañero.",
    img: "img/problema.png",
    imgAlt: "Dos personas hablando para resolver un conflicto",
    opts: ["Pelear y discutir a los gritos", "Hablar con calma y buscar solución", "Ignorar el problema"],
    correct: 1,
    retros: [
      "😣 Pelear a los gritos escala el conflicto y daña la relación. Rara vez resuelve algo y solo genera más tensión, resentimiento y distancia entre las personas.",
      "💬 ¡Excelente! Hablar con calma permite entender el punto de vista del otro y encontrar una solución justa para ambos. Es la base de una convivencia sana y respetuosa.",
      "🤔 Ignorar un conflicto no lo hace desaparecer; generalmente crece y se vuelve más difícil de resolver. Enfrentarlo con respeto y comunicación siempre es la mejor opción."
    ]
  }
];

/* ══════════════════════════════════════
   ESTADO DEL JUEGO
══════════════════════════════════════ */
let nivelActual    = 0;
let puntaje        = 0;
let completados    = [];
let intentosNivel  = 0;
let musicaActiva   = false;
let musicaNode     = null;
let rachaActual    = 0;
let mejorRacha     = 0;
let timerInterval  = null;
let tiempoRestante = 30;
let timerActivo    = false;
let historialPartidas = [];
let nombreJugador  = '';
let modoRepaso     = false;
let nivelRepaso    = [];
let nivelRepasoIdx = 0;
let intentosPorNivel = {}; // {nivelIdx: intentos}

/* ══════════════════════════════════════
   GUARDADO — localStorage
══════════════════════════════════════ */
const SAVE_KEY     = 'respondeConmigo_progreso';
const STATS_KEY    = 'respondeConmigo_stats';
const NOMBRE_KEY   = 'respondeConmigo_nombre';

function guardarProgreso() {
  const datos = {
    nivelActual, puntaje,
    completados: [...completados],
    rachaActual, mejorRacha,
    intentosPorNivel: {...intentosPorNivel},
    fechaGuardado: new Date().toISOString()
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(datos));
    mostrarToast('💾 Progreso guardado');
  } catch(e) { mostrarToast('⚠️ No se pudo guardar'); }
}

function cargarProgreso() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function borrarProgreso() { localStorage.removeItem(SAVE_KEY); }

function guardarEstadisticas() {
  try {
    const stats = JSON.parse(localStorage.getItem(STATS_KEY) || '[]');
    stats.push({
      fecha: new Date().toISOString(),
      puntaje, completados: completados.length,
      mejorRacha, nombre: nombreJugador
    });
    if (stats.length > 10) stats.splice(0, stats.length - 10);
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch(e) {}
}

function cargarEstadisticas() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY) || '[]');
  } catch(e) { return []; }
}

function cargarNombre() {
  nombreJugador = localStorage.getItem(NOMBRE_KEY) || '';
}

function guardarNombre(n) {
  nombreJugador = n.trim();
  if (nombreJugador) localStorage.setItem(NOMBRE_KEY, nombreJugador);
}

function formatearFecha(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('es-CO', {day:'2-digit',month:'short',year:'numeric'})
    + ' ' + d.toLocaleTimeString('es-CO', {hour:'2-digit',minute:'2-digit'});
}

/* ══ TOAST ══ */
function mostrarToast(msg, tipo='verde') {
  let toast = document.getElementById('toast-msg');
  toast.textContent = msg;
  toast.className = 'visible tipo-' + tipo;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = ''; }, 2400);
}

/* ══════════════════════════════════════
   MODAL DE CARGA
══════════════════════════════════════ */
function mostrarModalCarga() {
  cargarNombre();
  const guardado = cargarProgreso();
  if (!guardado) {
    mostrarModalNombre();
    return;
  }
  const modal = document.getElementById('modal-carga');
  document.getElementById('modal-info').innerHTML =
    `<strong>Jugador:</strong> ${guardado.nombre || nombreJugador || '—'}<br>
     <strong>Nivel alcanzado:</strong> ${guardado.nivelActual + 1} de 10<br>
     <strong>Completados:</strong> ${guardado.completados.length} niveles<br>
     <strong>Puntaje:</strong> ⭐ ${guardado.puntaje} pts<br>
     <strong>Mejor racha:</strong> 🔥 ${guardado.mejorRacha || 0}<br>
     <strong>Guardado:</strong> ${formatearFecha(guardado.fechaGuardado)}`;
  modal.style.display = 'flex';
}

function mostrarModalNombre() {
  if (nombreJugador) { show('s-menu'); return; }
  document.getElementById('modal-nombre').style.display = 'flex';
  setTimeout(() => document.getElementById('input-nombre').focus(), 200);
}

function confirmarNombre() {
  const val = document.getElementById('input-nombre').value.trim();
  guardarNombre(val || 'Jugador');
  document.getElementById('modal-nombre').style.display = 'none';
  show('s-menu');
}

function continuarPartida() {
  const g = cargarProgreso();
  if (!g) return;
  nivelActual = g.nivelActual; puntaje = g.puntaje;
  completados = g.completados || [];
  rachaActual = g.rachaActual || 0;
  mejorRacha  = g.mejorRacha  || 0;
  intentosPorNivel = g.intentosPorNivel || {};
  cerrarModal('modal-carga');
  show('s-menu');
}

function nuevaPartida() {
  borrarProgreso();
  puntaje = 0; completados = []; nivelActual = 0;
  intentosNivel = 0; rachaActual = 0; mejorRacha = 0;
  intentosPorNivel = {};
  nombreJugador = '';
  localStorage.removeItem(NOMBRE_KEY);
  const input = document.getElementById('input-nombre');
  if (input) input.value = '';
  cerrarModal('modal-carga');
  mostrarModalNombre();
}

function cerrarModal(id) {
  document.getElementById(id).style.display = 'none';
}

function autoGuardar() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      nivelActual, puntaje,
      completados: [...completados],
      rachaActual, mejorRacha,
      intentosPorNivel: {...intentosPorNivel},
      nombre: nombreJugador,
      fechaGuardado: new Date().toISOString()
    }));
  } catch(e) {}
}

/* ══════════════════════════════════════
   WEB AUDIO
══════════════════════════════════════ */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function crearMusica() {
  const secuencia = [
    [523,0.25],[587,0.25],[659,0.25],[698,0.25],
    [784,0.5],[784,0.25],[698,0.25],
    [659,0.25],[587,0.25],[523,0.5],
    [523,0.25],[494,0.25],[523,0.25],[587,0.25],
    [659,0.5],[659,0.25],[587,0.25],
    [523,0.25],[440,0.25],[494,0.25],[523,0.25],
    [587,0.5],[659,0.5],
    [523,0.25],[587,0.25],[659,0.25],[784,0.25],
    [880,0.5],[784,0.25],[698,0.25],
    [659,0.25],[587,0.25],[523,1.0]
  ];
  const durTotal = secuencia.reduce((s,n)=>s+n[1],0);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
  gain.connect(audioCtx.destination);
  function tocar(offset) {
    let t = audioCtx.currentTime + offset;
    secuencia.forEach(([f,d]) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g); g.connect(gain);
      o.type = 'sine';
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.4, t);
      g.gain.exponentialRampToValueAtTime(0.001, t+d-0.02);
      o.start(t); o.stop(t+d);
      t += d;
    });
    return durTotal;
  }
  let ac = 0;
  for (let i=0; i<30; i++) ac += tocar(ac);
  return gain;
}

function toggleMusica() {
  const btn = document.getElementById('btn-musica');
  if (audioCtx.state === 'suspended') audioCtx.resume();
  musicaActiva = !musicaActiva;
  if (musicaActiva) {
    musicaNode = crearMusica();
    btn.textContent = '🎵'; btn.classList.remove('silenciado');
  } else {
    if (musicaNode) musicaNode.gain.setValueAtTime(0, audioCtx.currentTime);
    btn.textContent = '🔇'; btn.classList.add('silenciado');
  }
}

function tono(f, d, tipo='sine', vol=0.3) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.connect(g); g.connect(audioCtx.destination);
  o.type = tipo; o.frequency.setValueAtTime(f, audioCtx.currentTime);
  g.gain.setValueAtTime(vol, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime+d);
  o.start(); o.stop(audioCtx.currentTime+d);
}

function sonidoCorrecto() {
  tono(523,0.1,'sine',0.6); setTimeout(()=>tono(659,0.1,'sine',0.6),90);
  setTimeout(()=>tono(784,0.2,'sine',0.6),180);
}
function sonidoIncorrecto() {
  tono(300,0.12,'sawtooth',0.5); setTimeout(()=>tono(220,0.2,'sawtooth',0.3),120);
}
function sonidoClick()  { tono(440,0.06,'sine',0.2); }
function sonidoRacha()  {
  [523,659,784,1047,1319].forEach((n,i)=>setTimeout(()=>tono(n,0.12,'sine',0.5),i*80));
}
function sonidoFinal()  {
  [523,659,784,1047].forEach((n,i)=>setTimeout(()=>tono(n,0.2,'sine',0.6),i*110));
}
function sonidoTimer()  { tono(880,0.05,'square',0.15); }

/* ══ VIBRACIÓN ══ */
function vibrar(patron) {
  if (navigator.vibrate) navigator.vibrate(patron);
}

/* ══════════════════════════════════════
   CONFETI
══════════════════════════════════════ */
function lanzarConfeti() {
  const colores = ['#a78bfa','#f472b6','#60a5fa','#34d399','#fbbf24','#f87171','#818cf8'];
  for (let i=0; i<70; i++) {
    setTimeout(()=>{
      const p = document.createElement('div');
      p.className = 'confeti-pieza';
      p.style.left = Math.random()*100+'vw';
      p.style.background = colores[Math.floor(Math.random()*colores.length)];
      p.style.width  = (6+Math.random()*10)+'px';
      p.style.height = (6+Math.random()*10)+'px';
      p.style.borderRadius = Math.random()>0.5 ? '50%' : '2px';
      p.style.animationDuration = (1.5+Math.random()*2.5)+'s';
      document.body.appendChild(p);
      setTimeout(()=>p.remove(), 5000);
    }, i*35);
  }
}

/* ══════════════════════════════════════
   OVERLAY FEEDBACK
══════════════════════════════════════ */
function mostrarOverlay(icono) {
  const ov = document.getElementById('overlay-feedback');
  document.getElementById('overlay-icono').textContent = icono;
  ov.style.display = 'flex';
  setTimeout(()=>{ ov.style.display='none'; }, 850);
}

function flashPantalla(tipo) {
  document.body.classList.remove('flash-correcto','flash-incorrecto');
  void document.body.offsetWidth;
  document.body.classList.add(tipo==='correcto'?'flash-correcto':'flash-incorrecto');
  setTimeout(()=>document.body.classList.remove('flash-correcto','flash-incorrecto'),500);
}

/* ══════════════════════════════════════
   TEMPORIZADOR
══════════════════════════════════════ */
function iniciarTimer() {
  detenerTimer();
  tiempoRestante = 30;
  actualizarTimerUI();
  timerInterval = setInterval(()=>{
    tiempoRestante--;
    actualizarTimerUI();
    if (tiempoRestante <= 5) sonidoTimer();
    if (tiempoRestante <= 0) {
      detenerTimer();
      tiempoAgotado();
    }
  }, 1000);
}

function detenerTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function actualizarTimerUI() {
  const el = document.getElementById('timer-bar');
  const txt = document.getElementById('timer-txt');
  if (!el || !txt) return;
  const pct = (tiempoRestante / 30) * 100;
  el.style.width = pct + '%';
  txt.textContent = tiempoRestante + 's';
  el.className = 'timer-fill' +
    (tiempoRestante <= 10 ? ' urgente' : tiempoRestante <= 20 ? ' medio' : '');
}

function tiempoAgotado() {
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
  rachaActual = 0;
  actualizarRachaUI();
  vibrar([200,100,200]);
  const rb = document.getElementById('retro-box');
  rb.className = 'retro-box wrong';
  document.getElementById('retro-label').textContent = '⏰ ¡Tiempo agotado!';
  document.getElementById('retro-texto').textContent = 'Se acabó el tiempo. Lee la situación con calma e intenta de nuevo.';
  rb.style.display = 'block';
  document.getElementById('hint-msg').style.display = 'block';
  document.getElementById('btn-reintentar').style.display = 'block';
  sonidoIncorrecto();
  mostrarOverlay('⏰');
  flashPantalla('incorrecto');
}

/* ══════════════════════════════════════
   RACHA
══════════════════════════════════════ */
function actualizarRachaUI() {
  const el = document.getElementById('racha-badge');
  if (!el) return;
  el.textContent = '🔥 ' + rachaActual;
  el.className = 'racha-badge' + (rachaActual >= 3 ? ' racha-alta' : '');
}

function mostrarBonusRacha(pts) {
  const el = document.createElement('div');
  el.className = 'bonus-popup';
  el.textContent = '+' + pts + ' racha 🔥';
  document.getElementById('s-nivel').appendChild(el);
  setTimeout(()=>el.remove(), 1500);
}

/* ══════════════════════════════════════
   NAVEGACIÓN
══════════════════════════════════════ */
function show(id) {
  sonidoClick();
  detenerTimer();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const pantalla = document.getElementById(id);
  pantalla.classList.add('active');
  pantalla.querySelectorAll('.animar-entrada').forEach((el,i)=>{
    el.style.animationDelay = (i*0.08)+'s';
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
  if (id === 's-menu') renderMenu();
  if (id === 's-stats') renderStats();
}

window.addEventListener('DOMContentLoaded', ()=>{
  mostrarModalCarga();
});

/* ══════════════════════════════════════
   MENÚ DE NIVELES
══════════════════════════════════════ */
function renderMenu() {
  // Nombre del jugador
  const nameEl = document.getElementById('menu-nombre');
  if (nameEl) nameEl.textContent = nombreJugador ? '👤 ' + nombreJugador : '';

  const g = document.getElementById('levels-grid');
  g.innerHTML = '';
  for (let i=0; i<10; i++) {
    const b = document.createElement('button');
    const desbloqueado = i === 0 || completados.includes(i-1);
    const hecho = completados.includes(i);
    const intentos = intentosPorNivel[i] || 0;
    const medalla = hecho ? (intentos <= 1 ? '🥇' : intentos <= 2 ? '🥈' : '🥉') : '';

    b.className = 'lvl-btn' + (hecho ? ' done' : '');
    b.innerHTML = `<span class="lvl-num">N${i+1}</span>${medalla ? '<span class="lvl-medalla">'+medalla+'</span>' : ''}`;
    b.disabled = !desbloqueado;
    b.style.animationDelay = (i*0.05)+'s';
    if (desbloqueado) b.onclick = ()=>startLevel(i);
    if (b.title !== undefined && hecho)
      b.title = medalla === '🥇' ? 'Oro: 1er intento' : medalla === '🥈' ? 'Plata: 2do intento' : 'Bronce: 3+ intentos';
    g.appendChild(b);
  }

  document.getElementById('menu-score').textContent = '⭐ ' + puntaje + ' pts';
  document.getElementById('menu-racha').textContent = '🔥 Racha: ' + mejorRacha;

  const guardado = cargarProgreso();
  const fechaEl = document.getElementById('menu-fecha');
  if (fechaEl) fechaEl.textContent = guardado ? '💾 ' + formatearFecha(guardado.fechaGuardado) : '';

  // Barra de progreso general
  const barra = document.getElementById('progreso-general');
  if (barra) {
    const pct = (completados.length / 10) * 100;
    barra.style.width = pct + '%';
    document.getElementById('progreso-txt').textContent = completados.length + '/10 niveles';
  }

  // Mostrar botón repaso si hay niveles fallidos
  const nivelFallados = [];
  for (let i=0; i<10; i++) {
    if ((intentosPorNivel[i] || 0) > 1 && completados.includes(i)) nivelFallados.push(i);
  }
  const btnRepaso = document.getElementById('btn-repaso');
  if (btnRepaso) btnRepaso.style.display = nivelFallados.length > 0 ? 'block' : 'none';
}

/* ══════════════════════════════════════
   MODO REPASO
══════════════════════════════════════ */
function iniciarRepaso() {
  nivelRepaso = [];
  for (let i=0; i<10; i++) {
    if ((intentosPorNivel[i]||0) > 1 && completados.includes(i)) nivelRepaso.push(i);
  }
  if (!nivelRepaso.length) { mostrarToast('¡Sin niveles para repasar!','verde'); return; }
  modoRepaso = true;
  nivelRepasoIdx = 0;
  startLevel(nivelRepaso[nivelRepasoIdx]);
}

/* ══════════════════════════════════════
   INICIAR NIVEL
══════════════════════════════════════ */
function startLevel(idx) {
  nivelActual   = idx;
  intentosNivel = 0;
  timerActivo   = true;
  const n = niveles[idx];

  document.getElementById('nivel-num').textContent      = modoRepaso ? '🔁 Repaso' : 'Nivel '+(idx+1)+' de 10';
  document.getElementById('nivel-score').textContent    = '⭐ ' + puntaje + ' pts';
  document.getElementById('intentos-badge').textContent = '0 intentos';
  actualizarRachaUI();

  const img = document.getElementById('nivel-img');
  img.src = n.img; img.alt = n.imgAlt;
  img.style.animation = 'none';
  void img.offsetWidth;
  img.style.animation = 'entradaAbajo 0.5s ease forwards';

  document.getElementById('situacion-text').textContent   = n.sit;
  renderOpciones();
  document.getElementById('retro-box').style.display      = 'none';
  document.getElementById('hint-msg').style.display       = 'none';
  document.getElementById('btn-siguiente').style.display  = 'none';
  document.getElementById('btn-reintentar').style.display = 'none';

  // Barra de progreso del nivel
  const barraEl = document.getElementById('barra-nivel');
  if (barraEl) {
    barraEl.style.width = ((idx / 10) * 100) + '%';
  }

  show('s-nivel');
  iniciarTimer();
}

/* ══════════════════════════════════════
   RENDERIZAR OPCIONES
══════════════════════════════════════ */
function renderOpciones() {
  const n    = niveles[nivelActual];
  const opts = document.getElementById('opciones');
  opts.innerHTML = '';
  n.opts.forEach((o,i)=>{
    const b = document.createElement('button');
    b.className = 'opt-btn';
    b.textContent = ['A','B','C'][i]+') '+o;
    b.style.animationDelay = (i*0.09)+'s';
    b.style.animation = 'deslizarOpt 0.4s ease backwards';
    b.onclick = ()=>responder(i,b);
    opts.appendChild(b);
  });
}

/* ══════════════════════════════════════
   RESPONDER
══════════════════════════════════════ */
function responder(idx, btn) {
  detenerTimer();
  const n = niveles[nivelActual];
  document.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
  intentosNivel++;
  document.getElementById('intentos-badge').textContent = ''+intentosNivel+(intentosNivel===1?' intento':' intentos');

  const rb = document.getElementById('retro-box');
  const rl = document.getElementById('retro-label');
  const rt = document.getElementById('retro-texto');

  if (idx === n.correct) {
    btn.classList.add('correct');
    sonidoCorrecto();
    flashPantalla('correcto');
    vibrar([50,30,50]);
    mostrarOverlay('✅');

    // Racha
    rachaActual++;
    if (rachaActual > mejorRacha) mejorRacha = rachaActual;
    actualizarRachaUI();

    // Bonus racha
    let ptsBase = intentosNivel === 1 ? 10 : 5;
    let ptsBonus = 0;
    if (rachaActual >= 3 && intentosNivel === 1) {
      ptsBonus = 5;
      setTimeout(()=>{ sonidoRacha(); mostrarBonusRacha(ptsBonus); }, 400);
    }

    // Velocidad bonus
    let ptsVelocidad = 0;
    if (intentosNivel === 1 && tiempoRestante >= 20) ptsVelocidad = 3;

    const ptsTotales = ptsBase + ptsBonus + ptsVelocidad;
    puntaje += ptsTotales;

    rb.className = 'retro-box correct';
    let labelExtra = '';
    if (ptsBonus) labelExtra += ' 🔥+'+ptsBonus;
    if (ptsVelocidad) labelExtra += ' ⚡+'+ptsVelocidad;
    rl.innerHTML = '✅ Correcto: <strong>'+['A','B','C'][idx]+') '+n.opts[idx]+'</strong>'+labelExtra;
    rt.textContent = n.retros[idx];
    rb.style.display = 'block';

    document.getElementById('nivel-score').textContent = '⭐ '+puntaje+' pts';
    document.getElementById('hint-msg').style.display     = 'none';
    document.getElementById('btn-siguiente').style.display  = 'block';
    document.getElementById('btn-reintentar').style.display = 'none';

    if (!completados.includes(nivelActual)) completados.push(nivelActual);
    intentosPorNivel[nivelActual] = intentosNivel;
    autoGuardar();

  } else {
    btn.classList.add('wrong');
    sonidoIncorrecto();
    flashPantalla('incorrecto');
    vibrar([150,80,150]);
    mostrarOverlay('❌');

    rachaActual = 0;
    actualizarRachaUI();

    rb.className = 'retro-box wrong';
    rl.innerHTML = '❌ Incorrecto: <strong>'+['A','B','C'][idx]+') '+n.opts[idx]+'</strong>';
    rt.textContent = n.retros[idx];
    rb.style.display = 'block';
    document.getElementById('hint-msg').style.display      = 'block';
    document.getElementById('btn-reintentar').style.display = 'block';
    document.getElementById('btn-siguiente').style.display  = 'none';
  }
}

/* ══════════════════════════════════════
   REINTENTAR
══════════════════════════════════════ */
function reintentar() {
  sonidoClick();
  document.getElementById('retro-box').style.display      = 'none';
  document.getElementById('hint-msg').style.display       = 'none';
  document.getElementById('btn-reintentar').style.display = 'none';
  renderOpciones();
  iniciarTimer();
}

/* ══════════════════════════════════════
   SIGUIENTE NIVEL
══════════════════════════════════════ */
function siguiente() {
  sonidoClick();

  if (modoRepaso) {
    nivelRepasoIdx++;
    if (nivelRepasoIdx < nivelRepaso.length) {
      startLevel(nivelRepaso[nivelRepasoIdx]);
    } else {
      modoRepaso = false;
      mostrarToast('🎓 ¡Repaso completado!','verde');
      show('s-menu');
    }
    return;
  }

  if (nivelActual < 9) {
    startLevel(nivelActual + 1);
  } else {
    guardarEstadisticas();
    borrarProgreso();
    sonidoFinal();
    lanzarConfeti();
    renderPantallaFinal();
    show('s-final');
  }
}

/* ══════════════════════════════════════
   PANTALLA FINAL
══════════════════════════════════════ */
function renderPantallaFinal() {
  const oro   = Object.values(intentosPorNivel).filter(v=>v<=1).length;
  const plata = Object.values(intentosPorNivel).filter(v=>v===2).length;
  const bronce= Object.values(intentosPorNivel).filter(v=>v>=3).length;
  const pctMax = 130; // 10×10 base + bonos posibles
  const estrellasNum = puntaje >= 90 ? 3 : puntaje >= 60 ? 2 : 1;
  const estrellas = '⭐'.repeat(estrellasNum) + '☆'.repeat(3-estrellasNum);

  document.getElementById('final-nombre').textContent = nombreJugador ? '¡Felicidades, '+nombreJugador+'!' : '¡Lo lograste!';
  document.getElementById('final-score').innerHTML =
    `<div class="final-estrellas">${estrellas}</div>
     <div class="final-pts">⭐ ${puntaje} puntos</div>
     <div class="final-medallas">🥇 ${oro} &nbsp; 🥈 ${plata} &nbsp; 🥉 ${bronce}</div>
     <div class="final-racha">🔥 Mejor racha: ${mejorRacha}</div>`;
}

/* ══════════════════════════════════════
   COMPARTIR
══════════════════════════════════════ */
function compartirResultado() {
  const txt = `🎮 Responde Conmigo\n👤 ${nombreJugador}\n⭐ ${puntaje} pts\n🔥 Racha: ${mejorRacha}\n¡Aprendí habilidades sociales!`;
  if (navigator.share) {
    navigator.share({ title: 'Responde Conmigo', text: txt });
  } else {
    navigator.clipboard.writeText(txt).then(()=>mostrarToast('📋 Copiado al portapapeles','verde'));
  }
}

/* ══════════════════════════════════════
   ESTADÍSTICAS
══════════════════════════════════════ */
function renderStats() {
  const stats = cargarEstadisticas();
  const el = document.getElementById('stats-lista');
  if (!stats.length) {
    el.innerHTML = '<div class="stats-empty">Aún no hay partidas registradas.<br>¡Completa tu primera partida!</div>';
    return;
  }
  el.innerHTML = stats.slice().reverse().map((s,i)=>`
    <div class="stat-card ${i===0?'stat-card-top':''}">
      <div class="stat-top">
        <span class="stat-nombre">${s.nombre||'Jugador'}</span>
        <span class="stat-pts">⭐ ${s.puntaje} pts</span>
      </div>
      <div class="stat-bottom">
        <span>✅ ${s.completados}/10</span>
        <span>🔥 ${s.mejorRacha||0}</span>
        <span class="stat-fecha">${formatearFecha(s.fecha)}</span>
      </div>
    </div>
  `).join('');
}

function borrarEstadisticas() {
  if (confirm('¿Borrar todo el historial de partidas?')) {
    localStorage.removeItem(STATS_KEY);
    renderStats();
    mostrarToast('🗑️ Historial borrado','rojo');
  }
}

/* ══════════════════════════════════════
   REINICIAR
══════════════════════════════════════ */
function reiniciar() {
  sonidoClick();
  borrarProgreso();
  puntaje=0; completados=[]; nivelActual=0;
  intentosNivel=0; rachaActual=0; mejorRacha=0;
  intentosPorNivel={}; modoRepaso=false;
  nombreJugador='';
  localStorage.removeItem(NOMBRE_KEY);

  // Limpiar el input y mostrar modal de nombre
  const input = document.getElementById('input-nombre');
  if (input) input.value='';
  document.getElementById('modal-nombre').style.display = 'flex';
show('s-inicio');
setTimeout(()=>mostrarModalNombre(), 300);
}
