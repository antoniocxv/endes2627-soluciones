const L = require('./lib');
const IMG = '/home/claude/endes/img';

const p = L.nuevo();
const UD = 'UD6 · Diagramas de comportamiento';
let n = 1;

L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 6',
  titulo: 'Elaboración de diagramas de comportamiento',
  subtitulo: 'Si UD5 era la fotografía, esto es la película',
  horas: 12,
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Qué vamos a ver',
  sub: 'RA6 — Representa el comportamiento de una aplicación mediante diagramas UML',
  items: [
    ['Casos de uso', 'Actores, include, extend y descripción textual'],
    ['Diagramas de secuencia', 'Líneas de vida, mensajes, fragmentos combinados'],
    ['Diagramas de comunicación', 'La misma información, otra vista'],
    ['Diagramas de estados', 'El ciclo de vida de un objeto'],
    ['Diagramas de actividad', 'Flujos, decisiones, paralelismo y calles'],
    ['Coherencia entre diagramas', 'Que el modelo encaje consigo mismo y con el código'],
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Cada diagrama responde a una pregunta',
  cabecera: ['Diagrama', 'Responde a'],
  anchos: [2.9, 6.0],
  filas: [
    ['Casos de uso', '¿Qué puede hacer cada tipo de usuario?'],
    ['Secuencia', '¿En qué orden se envían los mensajes?'],
    ['Comunicación', '¿Quién habla con quién?'],
    ['Estados', '¿Por qué situaciones pasa un objeto y qué las provoca?'],
    ['Actividad', '¿Cuál es el flujo, con decisiones y paralelismos?'],
  ],
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Diagrama de casos de uso',
  ruta: `${IMG}/d4-casosuso.png`,
  texto: [
    'Actor = un ROL, no una persona',
    'Un actor puede ser otro sistema o un temporizador',
    'El rectángulo es la frontera del sistema',
    'include: el base SIEMPRE ejecuta el incluido',
    'extend: comportamiento OPCIONAL',
    'Es el diagrama que se le enseña al cliente',
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'TRUCO PARA LAS FLECHAS',
  texto: 'La punta señala de qué depende cada cosa.',
  detalle: 'En include, el caso base depende del incluido (no funciona sin él) → la flecha apunta al incluido. En extend, la extensión depende del base (no existe sin él) → la flecha apunta al base. Van al revés.',
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'La descripción textual del caso de uso',
  lineas: [
    'CU-01: Añadir tarea',
    '  Actor principal: Usuario',
    '  Precondiciones:  El almacén es accesible',
    '  Postcondiciones: Existe una tarea nueva, pendiente, con id único',
    '',
    '  Flujo principal',
    '    1. El usuario introduce el comando con un título',
    '    2. El sistema valida el título',
    '    3..7  carga, genera id, crea, guarda, informa',
    '',
    '  Flujos alternativos',
    '    2a. Título vacío -> mensaje y vuelta al paso 1',
    '    6a. No se puede escribir -> error del SO, no se crea nada',
  ],
  pie: 'Los flujos alternativos son EXACTAMENTE los casos de prueba que necesitarás en UD3.',
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Diagrama de secuencia',
  ruta: `${IMG}/d5-secuencia.png`,
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Leer un diagrama de secuencia',
  izq: {
    titulo: 'Elementos',
    items: [
      'Línea de vida: el objeto, con su vertical discontinua',
      'Rectángulo estrecho: está ejecutando algo',
      'Flecha con punta rellena: mensaje síncrono (espera)',
      'Flecha con punta abierta: asíncrono (no espera)',
      'Flecha discontinua hacia atrás: la respuesta',
      'X al final: el objeto se destruye',
    ],
  },
  der: {
    titulo: 'Fragmentos combinados',
    items: [
      'alt — alternativa (if / else)',
      'opt — opcional (if sin else)',
      'loop — bucle',
      'par — en paralelo',
      'break — ruptura del flujo',
      'ref — referencia a otro diagrama',
    ],
  },
});

L.idea(p, {
  ud: UD, etiqueta: 'ENLACE CON UD3',
  texto: 'Un diagrama de secuencia es la traza de ejecución dibujada.',
  detalle: 'Cuando pongas un punto de ruptura y mires la pila de llamadas en el depurador, estarás viendo el mismo diagrama puesto en vertical. Son dos vistas de lo mismo.',
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Diagrama de comunicación',
  ruta: `${IMG}/d8-comunicacion.png`,
  texto: [
    'La misma información que la secuencia',
    'El orden lo da la numeración, no la posición',
    'Numeración jerárquica: 1, 2, 2.1, 2.2, 2.2.1',
    'Énfasis en la estructura de la colaboración',
    'Con muchos mensajes se convierte en una maraña',
    'Son semánticamente equivalentes: se convierten entre sí',
  ],
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Diagrama de estados',
  ruta: `${IMG}/d6-estados.png`,
  texto: [
    'Círculo negro: estado inicial',
    'Rectángulo redondeado: un estado',
    'Transición: evento [guarda] / acción',
    'entry / do / exit dentro del estado',
    'Círculo con anillo: estado final',
    'Útil cuando el objeto se comporta distinto según su estado',
  ],
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'De la máquina de estados al código',
  lineas: [
    'const TRANSICIONES = {',
    '  [ESTADO.PENDIENTE]: { empezar: EN_CURSO, vencer: VENCIDA },',
    '  [ESTADO.EN_CURSO]:  { pausar: PENDIENTE, completar: HECHA,',
    '                        vencer: VENCIDA },',
    '  [ESTADO.VENCIDA]:   { completar: HECHA },',
    '  [ESTADO.HECHA]:     {},',
    '};',
    '',
    'aplicar(evento) {',
    '  const destino = TRANSICIONES[this.estado][evento];',
    '  if (!destino) throw new Error(`No se puede ${evento} desde ${this.estado}`);',
    '  this.estado = destino;',
    '}',
  ],
  pie: 'El diagrama te da gratis la lista de transiciones INVÁLIDAS que hay que rechazar y probar.',
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Diagrama de actividad con calles',
  ruta: `${IMG}/d7-actividad.png`,
});

L.idea(p, {
  ud: UD, etiqueta: 'EL ERROR TÍPICO',
  texto: 'Rombo: se elige UN camino. Barra gruesa: se toman TODOS a la vez.',
  detalle: 'El rombo es un if. La barra (fork) es concurrencia, y toda bifurcación necesita su unión (join). Las calles indican QUIÉN ejecuta cada acción: es lo que hace que el diagrama se entienda en una reunión.',
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Comprobación de coherencia',
  sub: 'Los diagramas no son dibujos sueltos: forman un modelo',
  cabecera: ['Comprobación', 'Qué verificar'],
  anchos: [3.2, 5.7],
  filas: [
    ['Secuencia ↔ Clases', 'Todo objeto de la secuencia es una clase'],
    ['Secuencia ↔ Clases', 'Todo mensaje es un método público de la receptora'],
    ['Secuencia ↔ Clases', 'Si A envía a B, existe relación A → B'],
    ['Estados ↔ Clases', 'Los estados son valores de un atributo'],
    ['Casos de uso ↔ Actividad', 'Cada flujo alternativo es un camino'],
    ['Todos ↔ Código', 'Los nombres coinciden exactamente'],
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Los mismos diagramas en Visual Paradigm',
  sub: 'Los enunciados de fuera lo presuponen: hay que saber usarlo',
  cabecera: ['Diagrama', 'New Diagram →', 'La trampa'],
  anchos: [2.3, 3.0, 3.6],
  filas: [
    ['Casos de uso', 'Use Case Diagram', 'include apunta al incluido; extend, al revés'],
    ['Secuencia', 'Sequence Diagram', 'Las respuestas son Return Message, discontinuas'],
    ['Comunicación', 'Communication Diagram', 'Hay que numerar los mensajes a mano'],
    ['Estados', 'State Machine Diagram', 'evento [guarda] / acción, con corchetes y barra'],
    ['Actividad', 'Activity Diagram', 'Decision (una rama) ≠ Fork (todas, en paralelo)'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'LA HERRAMIENTA NO ES EL CONTENIDO',
  texto: 'El criterio evalúa notación UML correcta y coherencia entre diagramas, no una herramienta concreta.',
  detalle: 'Entrega con la que te sientas seguro, pero sabiendo usar las dos: eso sí te lo van a pedir en una empresa.',
});

L.practica(p, {
  ud: UD, n: n++, codigoP: 'P6.4',
  titulo: 'Proyecto integrador del módulo',
  items: [
    'Casos de uso completos + descripción textual de tres, con flujos alternativos.',
    'Diagrama de clases actualizado y coherente con el código.',
    'Dos diagramas de secuencia con fragmentos combinados y uno de comunicación.',
    'Diagrama de estados de Tarea y diagrama de actividad con calles.',
    'Verificación de coherencia + tabla de trazabilidad caso de uso ↔ prueba ↔ clase.',
  ],
  entrega: 'Repositorio con todos los diagramas en PlantUML en docs/, y dos de ellos además en Visual Paradigm.',
});

L.cierre(p, {
  ud: UD, titulo: 'Lo que hay que llevarse',
  items: [
    'Un actor es un rol, y puede no ser humano',
    'include siempre; extend a veces; las flechas van al revés',
    'Los flujos alternativos son los casos de prueba',
    'Punta rellena = síncrono; discontinua hacia atrás = respuesta',
    'alt, opt, loop, par: la lógica de control en el diagrama',
    'Transición = evento [guarda] / acción',
    'Rombo elige un camino; la barra los toma todos',
    'Todo mensaje de la secuencia es un método del diagrama de clases',
  ],
});

p.writeFile({ fileName: '/home/claude/endes/out/UD6-presentacion.pptx' })
  .then(f => console.log('OK', f));
