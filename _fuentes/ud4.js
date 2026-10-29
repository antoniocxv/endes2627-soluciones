const L = require('./lib');

const p = L.nuevo();
const UD = 'UD4 · Optimización y documentación';
let n = 1;

L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 4',
  titulo: 'Optimización, documentación y refactorización',
  subtitulo: 'Dejar el código como te gustaría encontrártelo',
  horas: 14,
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Qué vamos a ver',
  sub: 'RA4 — Optimiza y documenta aplicaciones, aplicando buenas prácticas de mantenimiento',
  items: [
    ['Calidad del código y deuda técnica', 'Qué se paga y cuándo'],
    ['Code smells', 'Los ocho que más vas a encontrar'],
    ['Refactorización', 'Catálogo de patrones y apoyo del IDE'],
    ['Análisis estático y formateo', 'ESLint, Prettier, métricas'],
    ['Documentación del código', 'JSDoc, generación, README'],
    ['Control de versiones con Git', 'Ramas, conflictos, remoto, pull requests'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'DEUDA TÉCNICA',
  texto: 'Tomar un atajo hoy es pedir prestado tiempo. Y se pagan intereses.',
  detalle: 'Cada cambio futuro sobre ese código cuesta más. Si la deuda no se paga nunca, llega el día en que cualquier cambio pequeño rompe tres cosas y nadie se atreve a tocar nada.',
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Los code smells más frecuentes',
  sub: 'No son errores: el programa funciona. Son síntomas',
  items: [
    ['Código duplicado', 'El peor. Lo cambiarás en dos de los tres sitios'],
    ['Método largo y clase enorme', 'Hace demasiadas cosas'],
    ['Lista de parámetros larga', 'Agrúpalos en un objeto'],
    ['Números y cadenas mágicas', 'rol === 3 no significa nada'],
    ['Nombres poco expresivos', 'd, aux, temp, proc, datos2'],
    ['Condicionales anidados', 'Cuatro if dentro de otro'],
  ],
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Antes: condicionales anidados',
  lineas: [
    'function procesar(tarea) {',
    '  if (tarea) {',
    '    if (!tarea.hecha) {',
    '      if (tarea.fechaLimite) {',
    '        if (tarea.fechaLimite < Date.now()) {',
    "          return 'vencida';",
    '        }',
    '      }',
    '    }',
    '  }',
    "  return 'ok';",
    '}',
  ],
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Después: cláusulas de guarda',
  lineas: [
    'function procesar(tarea) {',
    "  if (!tarea) return 'ok';",
    "  if (tarea.hecha) return 'ok';",
    "  if (!tarea.fechaLimite) return 'ok';",
    "  return tarea.fechaLimite < Date.now() ? 'vencida' : 'ok';",
    '}',
  ],
  pie: 'Mismo comportamiento externo, estructura interna distinta. Eso es refactorizar.',
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Qué es y qué no es refactorizar',
  izq: {
    titulo: 'Sí es',
    items: [
      'Cambiar la estructura interna',
      'Mantener idéntico el comportamiento externo',
      'Hacerlo más legible y mantenible',
      'En pasos pequeños, ejecutando entre cada uno',
    ],
  },
  der: {
    titulo: 'No es',
    items: [
      'Corregir errores — eso cambia el comportamiento',
      'Optimizar el rendimiento',
      'Añadir funcionalidad',
      'Reescribirlo entero de cero',
    ],
  },
});

L.idea(p, {
  ud: UD, etiqueta: 'REGLA DE ORO',
  texto: 'Nunca refactorices sin pruebas automáticas.',
  detalle: 'Sin una red que te diga «sigue haciendo lo mismo», no estás refactorizando: estás reescribiendo a ciegas y cruzando los dedos. Por eso UD3 y UD4 son inseparables.',
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Patrones de refactorización',
  cabecera: ['Patrón', 'Cuándo', 'Qué haces'],
  anchos: [2.6, 3.1, 3.2],
  filas: [
    ['Extraer función', 'Un trozo tiene entidad propia', 'Le das nombre'],
    ['Extraer variable', 'Expresión difícil de leer', 'Nombras un trozo'],
    ['Renombrar', 'El nombre no dice qué hace', 'F2 en todo el proyecto'],
    ['Constante con nombre', 'Aparece un literal sin explicar', 'ESTADO.EN_CURSO'],
    ['Cláusula de guarda', 'Anidamiento excesivo', 'Sales pronto'],
    ['Objeto de parámetros', 'Ocho parámetros que van juntos', 'Los agrupas'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'F2 FRENTE A CTRL+H',
  texto: 'Nunca refactorices con buscar y reemplazar.',
  detalle: 'F2 entiende el ámbito: renombra solo la variable correcta. Ctrl+H renombraría las tres variables llamadas «id» de tres funciones distintas, y además la palabra «id» dentro de un comentario.',
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Complejidad ciclomática',
  sub: '1 + número de puntos de decisión (if, for, while, case, &&, ||, ?:, catch)',
  lineas: [
    'function clasificar(t) {          // 1',
    "  if (t.hecha) return 'hecha';    // +1 = 2",
    '  if (t.fecha && t.fecha < hoy)   // +1 (if) +1 (&&) = 4',
    "    return 'vencida';",
    '  for (const e of t.etiquetas) {  // +1 = 5',
    "    if (e === 'urgente')          // +1 = 6",
    "      return 'urgente';",
    '  }',
    "  return 'normal';",
    '}',
  ],
  pie: 'Complejidad 6 = también el número mínimo de casos de prueba. Aquí enlaza con UD3.',
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'ESLint y Prettier no se solapan',
  izq: {
    titulo: 'ESLint — corrección',
    items: [
      'Variables sin usar, comparaciones sospechosas',
      'eqeqeq, prefer-const, no-var',
      'complexity, max-lines-per-function',
      'Niveles: off / warn / error',
      'npx eslint src --fix',
    ],
  },
  der: {
    titulo: 'Prettier — aspecto',
    items: [
      'Comillas, punto y coma, ancho de línea',
      'Sangrado y saltos',
      'No opina sobre si el código está bien',
      'formatOnSave: se acabaron las discusiones de estilo',
    ],
  },
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'JSDoc: documentar donde vive el código',
  lineas: [
    '/**',
    ' * Indica si la tarea ha superado su fecha límite.',
    ' *',
    ' * @param   {Date}    [ahora=new Date()] - Momento con el que comparar.',
    ' * @returns {boolean} true si está vencida y no está hecha.',
    ' * @throws  {TypeError} Si la fecha no es válida.',
    ' *',
    ' * @example',
    " * t.estaVencida(new Date('2026-02-01')); // true",
    ' */',
    'estaVencida(ahora = new Date()) { ... }',
  ],
  pie: 'npx jsdoc src -r -d docs   → y además mejora el autocompletado del IDE.',
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Comentarios: el qué y el porqué',
  izq: {
    titulo: 'Comentario inútil',
    items: [
      '// incrementa i',
      '// función que suma dos números',
      '// bucle que recorre el array',
      'Si explica QUÉ hace el código, suele ser síntoma de código poco claro',
    ],
  },
  der: {
    titulo: 'Comentario que vale oro',
    items: [
      '// La API de Correos pierde el 0 inicial de las provincias 01-09',
      '// TODO: cambiar a UUID al migrar a BD (issue #42)',
      '// HACK: Safari < 16 no soporta lookbehind',
      'Explica el PORQUÉ: eso no se deduce del código',
    ],
  },
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Git: los tres estados',
  items: [
    ['Directorio de trabajo', 'Has modificado el fichero (modified)'],
    ['Zona de preparación', 'git add — lo has marcado para el próximo commit (staged)'],
    ['Repositorio', 'git commit — queda guardado en el historial (committed)'],
    ['Remoto', 'git push — está también en GitHub'],
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Deshacer sin romper nada',
  cabecera: ['Situación', 'Comando'],
  anchos: [5.1, 3.8],
  filas: [
    ['Descartar cambios no preparados', 'git restore fichero.js'],
    ['Sacar de la zona de preparación', 'git restore --staged fichero.js'],
    ['Corregir el último commit', 'git commit --amend'],
    ['Deshacer creando historia (seguro)', 'git revert <hash>'],
    ['Borrar historia (peligroso si es pública)', 'git reset --hard <hash>'],
    ['Guardar lo que tienes a medias', 'git stash / git stash pop'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'REGLA QUE NO SE ROMPE',
  texto: 'Nunca reescribas historia que ya es pública.',
  detalle: 'git revert crea un commit nuevo que deshace: seguro en ramas compartidas. git reset --hard borra historial: si esa rama ya está en el remoto y otros la han descargado, vas a provocar un desastre.',
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Mensajes de commit que sirven para algo',
  lineas: [
    'feat(tareas):  añade el comando para etiquetar',
    'fix(almacen):  corrige la pérdida de datos al guardar sin carpeta data',
    'docs(readme):  documenta los scripts de npm',
    'refactor(formato): extrae formatearTarea de formatearLista',
    'test(tarea):   añade casos límite de estaVencida',
    'chore(deps):   actualiza eslint a 9.10',
    '',
    '// Y no:  "cambios"   "arreglos"   "asdf"   "ya funciona"   "subida final"',
  ],
  pie: 'Imperativo, menos de 50 caracteres, un commit = un cambio lógico.',
});

L.practica(p, {
  ud: UD, n: n++, codigoP: 'P4.5',
  titulo: 'El conflicto (por parejas)',
  items: [
    'A crea el repositorio en GitHub y añade a B como colaborador. Ambas clonan.',
    'Sin avisarse, A y B modifican la misma función de forma distinta.',
    'Cada una modifica además un fichero diferente.',
    'A hace push. B intenta push → error. B hace pull → conflicto.',
    'B lo resuelve con la interfaz de VS Code, hace commit y push. A hace pull.',
  ],
  entrega: 'Capturas + el fichero con las marcas de conflicto + por qué solo hubo conflicto en uno de los dos ficheros.',
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Integración continua con GitHub Actions',
  lineas: [
    'name: CI',
    'on: [push, pull_request]',
    'jobs:',
    '  pruebas:',
    '    runs-on: ubuntu-latest',
    '    steps:',
    '      - uses: actions/checkout@v4',
    '      - uses: actions/setup-node@v4',
    '        with: { node-version: 20, cache: npm }',
    '      - run: npm ci',
    '      - run: npm run lint',
    '      - run: npm test -- --coverage',
  ],
  pie: 'Ejecuta en cada push la batería que entregasteis en UD3. npm ci y no npm install: instalación exactamente reproducible del lock.',
});

L.cierre(p, {
  ud: UD, titulo: 'Lo que hay que llevarse',
  items: [
    'Refactorizar: cambia la estructura, no el comportamiento',
    'Regla de oro: nunca sin pruebas',
    'Regla de tres: a la tercera repetición, refactoriza',
    'Complejidad ciclomática = 1 + puntos de decisión',
    'ESLint dice si está bien; Prettier, cómo se ve',
    'Los comentarios buenos explican el porqué',
    'revert crea historia; reset --hard la borra',
    'Un commit = un cambio lógico, con mensaje en imperativo',
    'CI: el servidor ejecuta lint y las pruebas de UD3 en cada push',
  ],
});

p.writeFile({ fileName: '/home/claude/endes/out/UD4-presentacion.pptx' })
  .then(f => console.log('OK', f));
