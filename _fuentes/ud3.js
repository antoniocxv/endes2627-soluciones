const L = require('./lib');

const p = L.nuevo();
const UD = 'UD3 · Diseño y realización de pruebas';
let n = 1;

L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 3',
  titulo: 'Diseño y realización de pruebas',
  subtitulo: 'Lo que separa a quien programa de quien entrega software',
  horas: 15,
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Qué vamos a ver',
  sub: 'RA3 — Diseña y realiza pruebas para verificar el funcionamiento de aplicaciones',
  items: [
    ['Por qué se prueba', 'El coste del error y casos reales'],
    ['Tipos de prueba', 'Caja negra y blanca; la pirámide'],
    ['Diseño de casos de prueba', 'Clases, valores límite, tablas, cobertura'],
    ['Documentación', 'Plan de pruebas e informe de incidencias'],
    ['Depuración', 'El depurador de VS Code'],
    ['Pruebas automáticas con Jest, TDD e integración continua', ''],
  ],
});

L.cifras(p, {
  ud: UD, n: n++, titulo: 'El coste de encontrar el error tarde',
  datos: [
    { valor: '1×', etiqueta: 'si se detecta en la fase de requisitos' },
    { valor: '10×', etiqueta: 'si se detecta durante la codificación' },
    { valor: '50-150×', etiqueta: 'si llega a producción' },
  ],
  nota: 'Y eso solo cuenta el coste de arreglarlo: no la factura de datos corruptos, clientes perdidos o sanciones.',
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Tres desastres que se podían haber probado',
  items: [
    ['Ariane 5 (1996) — 370 M$', 'Código reutilizado del Ariane 4, no probado con los datos del nuevo cohete'],
    ['Mars Climate Orbiter (1999) — 125 M$', 'Un módulo en unidades imperiales, otro en métricas: fallo de integración'],
    ['Knight Capital (2012) — 440 M$ en 45 min', 'Un despliegue dejó código antiguo activo en 1 de 8 servidores'],
  ],
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Verificación y validación',
  sub: 'Dos preguntas distintas que se confunden constantemente',
  izq: {
    titulo: 'Verificación',
    items: [
      '¿Estamos construyendo el producto CORRECTAMENTE?',
      '¿Cumple las especificaciones?',
      'Comprobación técnica interna',
      'La hace el equipo de desarrollo',
    ],
  },
  der: {
    titulo: 'Validación',
    items: [
      '¿Estamos construyendo el producto CORRECTO?',
      '¿Es lo que el cliente necesitaba?',
      'Comprobación con el usuario',
      'Un programa puede pasar la verificación y suspender la validación',
    ],
  },
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Error, defecto y fallo',
  sub: 'Terminología ISTQB: se pregunta en los exámenes',
  items: [
    ['Error', 'La equivocación humana: alguien escribió < donde iba <='],
    ['Defecto (bug)', 'La consecuencia en el código: esa línea mal escrita'],
    ['Fallo', 'Lo que percibe el usuario: «la última tarea no aparece»'],
    ['Ojo', 'Un defecto solo produce fallo si se ejecuta con los datos adecuados'],
  ],
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'La pirámide de pruebas',
  lineas: [
    '              /\\',
    '             /  \\     Aceptación / E2E    pocas, lentas, caras',
    '            /----\\',
    '           /      \\   Integración         algunas',
    '          /--------\\',
    '         /          \\ Unitarias           muchas, rápidas, baratas',
    '        /------------\\',
  ],
  pie: 'Una prueba unitaria tarda milisegundos y señala la línea; una E2E tarda minutos y dice «algo ha fallado».',
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Caja negra y caja blanca',
  cabecera: ['', 'Caja negra', 'Caja blanca'],
  anchos: [2.0, 3.45, 3.45],
  filas: [
    ['Qué ves', 'Solo entradas y salidas', 'La estructura del código'],
    ['Diseñas casos', 'Desde los requisitos', 'Desde los caminos del código'],
    ['Encuentra', 'Funcionalidad que falta', 'Caminos no ejercitados'],
    ['No encuentra', 'Caminos internos sin cubrir', 'Lo que nunca se implementó'],
    ['Técnicas', 'Clases, valores límite, tablas', 'Cobertura de sentencias y ramas'],
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Clases de equivalencia y valores límite',
  sub: 'validarEdadAcceso(edad): acepta entre 18 y 65',
  cabecera: ['Valor', 'Esperado', 'Por qué'],
  anchos: [1.9, 2.4, 4.6],
  filas: [
    ['10', 'Rechaza', 'Representante de la clase inválida inferior'],
    ['17 / 18 / 19', 'No / Sí / Sí', 'Límite inferior y sus vecinos'],
    ['40', 'Acepta', 'Representante de la clase válida'],
    ['64 / 65 / 66', 'Sí / Sí / No', 'Límite superior y sus vecinos'],
    ['"hola", undefined', 'Rechaza', 'Clases inválidas por tipo y por ausencia'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'CUIDADO CON LA COBERTURA',
  texto: 'Un 100 % de cobertura no significa que el programa esté bien.',
  detalle: 'Significa que todas las líneas se han ejecutado, no que el resultado sea correcto. Una prueba que ejecuta todo y comprueba expect(true).toBe(true) da 100 % y vale cero.',
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Documentar una incidencia',
  cabecera: ['Campo', 'Ejemplo'],
  anchos: [2.7, 6.2],
  filas: [
    ['Título', 'Se pierden las tareas si no existe la carpeta data'],
    ['Severidad / Prioridad', 'Alta (pérdida de datos) / Alta'],
    ['Entorno', 'Node 20.11, Windows 11, versión 0.3.2'],
    ['Pasos', '1. Borrar data/  2. npm start -- añadir "prueba"'],
    ['Esperado / Obtenido', 'Se crea la carpeta / Error ENOENT'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'NO SON LO MISMO',
  texto: 'Severidad es el daño técnico. Prioridad es la urgencia de negocio.',
  detalle: 'Una errata en el logotipo de la portada: severidad baja, prioridad altísima el día del lanzamiento. Un fallo que corrompe datos en un módulo que usa una persona al año: severidad crítica, prioridad media.',
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Depurar: el método',
  sub: 'Antes de tocar el depurador',
  items: [
    ['Reproduce', 'Si no lo reproduces de forma fiable, no lo arreglas'],
    ['Reduce', 'Al caso mínimo que sigue fallando'],
    ['Formula una hipótesis', 'Por escrito, antes de mirar'],
    ['Comprueba con el depurador', 'Punto de ruptura, variables, pila de llamadas'],
    ['Corrige', ''],
    ['Escribe la prueba que lo detecta', 'Para que no vuelva nunca'],
  ],
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'El depurador de VS Code',
  izq: {
    titulo: 'Puntos de parada',
    items: [
      'Punto de ruptura: detiene en esa línea',
      'Condicional: solo si i === 42',
      'Logpoint: escribe un mensaje sin detener y sin tocar el código',
    ],
  },
  der: {
    titulo: 'Moverse y mirar',
    items: [
      'F10 paso por encima · F11 paso por dentro',
      'Shift+F11 salir · F5 continuar',
      'Variables, inspección (watch), pila de llamadas',
      'skipFiles: ["<node_internals>/**"]',
    ],
  },
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Anatomía de una prueba con Jest',
  lineas: [
    "describe('Tarea', () => {",
    '',
    "  test('crea una tarea pendiente por defecto', () => {",
    "    const t = new Tarea({ id: 1, titulo: 'Estudiar' });  // Arrange",
    '    expect(t.hecha).toBe(false);                         // Assert',
    '  });',
    '',
    '  test.each([',
    "    ['2026-01-01', '2026-02-01', true ],   // fecha pasada",
    "    ['2026-02-01', '2026-02-01', false],   // mismo día: LÍMITE",
    "  ])('límite %s vs %s -> %s', (limite, ahora, esperado) => {",
    '    ...',
    '  });',
    '});',
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'EL ERROR CLÁSICO',
  texto: 'expect({a:1}).toBe({a:1}) falla. Y expect(0.1 + 0.2).toBe(0.3) también.',
  detalle: 'toBe compara identidad (===): dos objetos distintos en memoria no son el mismo. Usa toEqual. Y 0.1 + 0.2 da 0.30000000000000004 en coma flotante: usa toBeCloseTo.',
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'TDD: rojo, verde, refactor',
  items: [
    ['ROJO', 'Escribe una prueba que falle. El código todavía no existe'],
    ['VERDE', 'Escribe el mínimo código que la hace pasar. Vale hacer trampas'],
    ['REFACTOR', 'Limpia, con la red de la prueba protegiéndote'],
    ['Y vuelta a empezar', 'El rasgo que lo define: la prueba se escribe ANTES'],
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'ISO/IEC 25010: calidad del producto',
  cabecera: ['Característica', 'Característica'],
  anchos: [4.45, 4.45],
  filas: [
    ['Adecuación funcional', 'Fiabilidad'],
    ['Eficiencia de desempeño', 'Seguridad'],
    ['Compatibilidad', 'Mantenibilidad (incluye ser probable)'],
    ['Usabilidad', 'Portabilidad'],
  ],
});

L.practica(p, {
  ud: UD, n: n++, codigoP: 'P3.5',
  titulo: 'Entrega evaluable de la unidad',
  items: [
    'Plan de pruebas y tabla de 25 casos documentados con los 7 campos.',
    'Batería de Jest con 30 pruebas, describe anidados, test.each y un mock.',
    'Cobertura ≥ 80 % con umbral configurado en jest.config.js.',
    'Una función desarrollada con TDD: entrega la versión que falla y la que pasa.',
    'Esta batería es la que pondrás a correr sola en UD4 con GitHub Actions.',
  ],
  entrega: 'Repositorio con todo lo anterior + el relato de la caza de un error real con el depurador.',
});

L.cierre(p, {
  ud: UD, titulo: 'Lo que hay que llevarse',
  items: [
    'Verificación: contra la especificación. Validación: contra la necesidad',
    'Error → defecto → fallo',
    'Muchas unitarias, pocas E2E',
    'Clases de equivalencia + valores límite, siempre juntas',
    'Cobertura alta no garantiza corrección',
    'Severidad ≠ prioridad',
    'Cada bug arreglado deja tras de sí una prueba de regresión',
    'TDD: la prueba se escribe antes que el código',
  ],
});

p.writeFile({ fileName: '/home/claude/endes/out/UD3-presentacion.pptx' })
  .then(f => console.log('OK', f));
