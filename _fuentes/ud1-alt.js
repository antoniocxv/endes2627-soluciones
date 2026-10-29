const L = require('./lib');
const IMG = '/home/claude/endes/img';
const p = L.nuevo();
const UD = 'UD1 · Desarrollo del software';
let n = 1;

// ─────────────────────────────── 1
L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 1',
  titulo: 'Desarrollo del software',
  subtitulo: 'Qué escribes, en qué se convierte y quién lo traduce',
  horas: 12,
});

// ─────────────────────────────── 2
L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Qué vamos a ver',
  sub: 'RA1 — Identifica los elementos que intervienen en el desarrollo de software',
  items: [
    ['Qué es el software', 'Y por qué no se parece a ninguna otra cosa que se fabrique'],
    ['Código fuente y programa', 'La distinción que lo explica casi todo'],
    ['Los traductores', 'Compilador, intérprete y la tercera vía'],
    ['Tipos de lenguajes', 'Cuatro formas de clasificarlos, y todas a la vez'],
    ['Las herramientas del proceso', 'Quién hace cada cosa'],
    ['El ciclo de vida del software', 'De la idea al mantenimiento'],
  ],
});

// ─────────────────────────────── 3
L.idea(p, {
  ud: UD, etiqueta: 'LA PREGUNTA DE LA UNIDAD',
  texto: '¿Qué ocurre entre que escribes una línea de código y el ordenador hace algo?',
  detalle: 'Toda la unidad es la respuesta a esa pregunta. Y la respuesta no tiene magia por ninguna parte: son unos cuantos programas traduciendo, uno detrás de otro.',
});

// ─────────────────────────────── 4
L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Qué es el software',
  sub: 'Definición del estándar IEEE 729',
  izq: {
    titulo: 'Qué incluye',
    items: [
      'Los programas',
      'Los procedimientos y las reglas',
      'La DOCUMENTACIÓN',
      'Los datos asociados',
      'Todo eso junto es el software',
    ],
  },
  der: {
    titulo: 'Cuatro rasgos que lo definen',
    items: [
      'Es lógico, no físico: no se puede tocar',
      'Se DESARROLLA, no se fabrica',
      'No se estropea con el uso',
      'Una copia es idéntica al original',
    ],
  },
});

// ─────────────────────────────── 5
L.idea(p, {
  ud: UD, etiqueta: 'EL SOFTWARE NO SE ESTROPEA',
  texto: 'Un programa que lleva diez años funcionando y hoy falla no se ha desgastado. Es que hoy le ha llegado algo que nunca le había llegado.',
  detalle: 'El fallo estaba ahí desde el primer día, esperando. Por eso la calidad del software se decide antes de escribirlo, y no revisándolo cada cierto tiempo como se hace con un coche.',
});

// ─────────────────────────────── 6
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Los tipos de software',
  ruta: `${IMG}/s1-capas.png`,
  texto: ['Cada capa se apoya en la de debajo.', 'Tú vas a trabajar en las dos de arriba.'],
});

// ─────────────────────────────── 7
L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Programa, aplicación y suite',
  izq: {
    titulo: 'Programa',
    items: [
      'Instrucciones con UNA finalidad concreta',
      'Puede no tener ni ventana',
      'Ejemplo: el comando ping',
      'Ejemplo: el servicio que imprime',
    ],
  },
  der: {
    titulo: 'Aplicación',
    items: [
      'UNO o VARIOS programas juntos',
      'Le permite al usuario hacer una tarea completa',
      'Ejemplo: Photoshop, Moodle, WhatsApp',
      'Si se venden varias juntas: una suite (Office)',
    ],
  },
});

// ─────────────────────────────── 8
L.tabla(p, {
  ud: UD, n: n++, titulo: 'A medida o estándar',
  sub: 'Las dos formas de conseguir el software que necesita una empresa',
  cabecera: ['', 'A medida', 'Estándar («enlatado»)'],
  anchos: [2.4, 3.2, 3.3],
  filas: [
    ['Se hace', 'Para un solo cliente', 'Para cualquier cliente'],
    ['Se adapta', 'El programa al cliente', 'El cliente al programa'],
    ['Precio', 'Alto: lo paga uno solo', 'Bajo: se reparte entre muchos'],
    ['Errores', 'Más: lo ha probado poca gente', 'Menos: lo han probado miles'],
    ['Ejemplo', 'La gestión de una clínica concreta', 'Moodle, Office, un ERP'],
  ],
});

// ─────────────────────────────── 9
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Código fuente y programa: no son lo mismo',
  ruta: `${IMG}/s1b-fuente.png`,
});

// ─────────────────────────────── 10
L.idea(p, {
  ud: UD, etiqueta: 'LA FRASE QUE HAY QUE APRENDERSE',
  texto: 'Un programa no se escribe: se obtiene. Lo que se escribe es el código fuente.',
  detalle: 'Y entre una cosa y la otra siempre hay alguien traduciendo. Saber quién traduce, cuándo y a qué es de lo que va el resto de la unidad.',
});

// ─────────────────────────────── 11
L.tabla(p, {
  ud: UD, n: n++, titulo: 'Los tres ficheros',
  sub: 'Con nombres que se confunden constantemente',
  cabecera: ['', 'Código fuente', 'Código objeto', 'Ejecutable'],
  anchos: [2.0, 2.3, 2.3, 2.3],
  filas: [
    ['Qué es', 'Lo que escribes tú', 'Traducido, pero incompleto', 'Traducido y completo'],
    ['¿Se lee?', 'Sí, es texto', 'No, es binario', 'No, es binario'],
    ['Extensión', '.c  .java  .py', '.o  .obj  .class', '.exe · sin extensión'],
    ['¿Arranca?', 'No', 'NO', 'Sí'],
    ['Le falta', '—', 'Las bibliotecas', 'Nada'],
  ],
});

// ─────────────────────────────── 12
L.idea(p, {
  ud: UD, etiqueta: 'POR QUÉ EL CÓDIGO OBJETO NO ARRANCA',
  texto: 'Tú escribes «escribir en pantalla», pero tú no has escrito esa función. Está en una biblioteca que hizo otra persona hace años.',
  detalle: 'El traductor deja un hueco donde dice «aquí va esa función, ya la rellenará alguien». Ese alguien es el ENLAZADOR, y hasta que no pasa, el fichero está lleno de agujeros y no puede ejecutarse.',
});

// ─────────────────────────────── 13
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Compilador o intérprete',
  ruta: `${IMG}/s1b-traductores.png`,
});

// ─────────────────────────────── 14
L.tabla(p, {
  ud: UD, n: n++, titulo: 'Ventajas e inconvenientes',
  cabecera: ['', 'Compilador', 'Intérprete'],
  anchos: [2.6, 3.2, 3.1],
  filas: [
    ['Velocidad al ejecutar', 'Rápida: ya está traducido', 'Lenta: traduce mientras ejecuta'],
    ['Cuándo ves los errores', 'Antes de ejecutar, todos juntos', 'Al llegar a esa línea'],
    ['Probar un cambio', 'Hay que volver a compilar', 'Inmediato'],
    ['Repartir el programa', 'Se entrega el ejecutable', 'Hay que entregar el código fuente'],
    ['¿Funciona en otro sistema?', 'No: hay que recompilar', 'Sí, si allí está el intérprete'],
  ],
});

// ─────────────────────────────── 15
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Las tres vías',
  ruta: `${IMG}/s1b-vias.png`,
});

// ─────────────────────────────── 16
L.idea(p, {
  ud: UD, etiqueta: 'LA VÍA MIXTA: POR QUÉ EXISTE',
  texto: 'Java quería una cosa: escribir el programa una vez y que funcionara en cualquier sistema.',
  detalle: 'La solución fue no traducir hasta el final. Se traduce a un código intermedio que no es de ninguna máquina concreta, y luego cada sistema tiene su propia máquina virtual que lo termina de traducir. Lo portable no es tu código: es la máquina virtual, que alguien tuvo que escribir para cada sistema.',
});

// ─────────────────────────────── 17
L.practica(p, {
  ud: UD, n: n++, codigoP: 'P1.1',
  titulo: 'Clasificar cinco lenguajes',
  items: [
    'Para C, Python, Java, JavaScript y C#: ¿compilado, interpretado o mixto?',
    'Para cada uno: ¿qué hace falta tener instalado en el ordenador de quien lo ejecuta?',
    'Si le pasas tu programa a un cliente, ¿le estás dando también tu código fuente?',
    'Busca un caso en el que eso último sea un problema para la empresa.',
  ],
  entrega: 'Tabla de cinco filas con las tres respuestas, y un párrafo con el caso encontrado.',
});

// ─────────────────────────────── 18
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Niveles de lenguaje',
  ruta: `${IMG}/s1b-niveles.png`,
});

// ─────────────────────────────── 19
L.idea(p, {
  ud: UD, etiqueta: 'UN DETALLE QUE SORPRENDE',
  texto: 'Windows y Linux corren sobre el mismo procesador. El código máquina es exactamente el mismo.',
  detalle: 'Entonces, ¿por qué un .exe no funciona en Linux? Porque cambia el ENVOLTORIO del fichero y cambia a quién le pide las cosas el programa. La CPU no es el problema.',
});

// ─────────────────────────────── 20
L.tabla(p, {
  ud: UD, n: n++, titulo: 'Las cuatro formas de clasificar un lenguaje',
  sub: 'Son independientes: un lenguaje se clasifica en las cuatro a la vez',
  cabecera: ['Criterio', 'Categorías', 'Ejemplo: Python es…'],
  anchos: [2.2, 4.0, 2.7],
  filas: [
    ['Nivel', 'Máquina · bajo · alto nivel', 'De alto nivel'],
    ['Traducción', 'Compilado · interpretado · mixto', 'Interpretado'],
    ['Propósito', 'General · específico', 'De propósito general'],
    ['Paradigma', 'Imperativo · OO · funcional · declarativo · lógico', 'Multiparadigma'],
  ],
});

// ─────────────────────────────── 21
L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Los paradigmas, en una línea cada uno',
  sub: 'Un paradigma es una forma de organizar la solución, no una herramienta',
  items: [
    ['Imperativo', 'Le dices al ordenador CÓMO hacerlo, paso a paso'],
    ['Estructurado', 'Imperativo, pero con bucles y condicionales en vez de saltos'],
    ['Orientado a objetos', 'El programa son objetos que se mandan mensajes. Java, C#, Python'],
    ['Declarativo', 'Le dices QUÉ quieres, no cómo obtenerlo. SQL'],
    ['Funcional', 'Declarativo a base de funciones matemáticas. Haskell, Rust'],
    ['Lógico', 'Declarativo a base de reglas y relaciones. Prolog'],
  ],
});

// ─────────────────────────────── 22
L.idea(p, {
  ud: UD, etiqueta: 'CASI NINGÚN LENGUAJE ES PURO',
  texto: 'Python es imperativo, estructurado, orientado a objetos y tiene cosas funcionales. Los cuatro a la vez.',
  detalle: 'A eso se le llama multiparadigma, y hoy es lo normal. Los lenguajes puros —Prolog, Haskell— son la excepción y se usan en ámbitos muy concretos.',
});

// ─────────────────────────────── 23
L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Las herramientas del proceso',
  sub: 'Cada una hace una sola cosa. Un IDE las junta todas',
  items: [
    ['Editor', 'Donde escribes el código fuente'],
    ['Compilador o intérprete', 'Traduce'],
    ['Enlazador', 'Junta tu código con las bibliotecas y rellena los huecos'],
    ['Depurador', 'Detiene el programa y te deja mirar dentro'],
    ['Gestor de dependencias', 'Descarga las bibliotecas de otros que vas a usar'],
    ['Control de versiones', 'Guarda el histórico de cambios. Lo vemos en la UD4'],
  ],
});

// ─────────────────────────────── 24
L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'El ciclo de vida del software',
  sub: 'Las siete fases, de la idea a la jubilación del programa',
  items: [
    ['Análisis de requisitos', 'Qué tiene que hacer. Con el cliente, no sin él'],
    ['Diseño', 'Cómo se va a construir. Aquí entran los diagramas de las UD5 y UD6'],
    ['Codificación', 'Escribir el código. Es la fase más corta'],
    ['Pruebas', 'Comprobar que hace lo que debe. UD3'],
    ['Documentación', 'Atraviesa todas las fases, no va al final. UD4'],
    ['Explotación', 'Ponerlo en marcha para los usuarios reales'],
    ['Mantenimiento', 'Corregir, adaptar y mejorar. Dura años'],
  ],
});

// ─────────────────────────────── 25
L.cifras(p, {
  ud: UD, n: n++, titulo: 'Dónde se va el dinero de verdad',
  sub: 'Reparto habitual del coste total de un programa a lo largo de su vida',
  datos: [
    { valor: '~20 %', etiqueta: 'análisis, diseño, codificación y pruebas' },
    { valor: '~80 %', etiqueta: 'mantenimiento' },
    { valor: '×10', etiqueta: 'lo que cuesta arreglar un error si se detecta tarde' },
  ],
  nota: 'Por eso este módulo insiste tanto en documentar, probar y dejar el código legible: no es purismo, es lo que decide el coste de los diez años siguientes.',
});

// ─────────────────────────────── 26
L.tabla(p, {
  ud: UD, n: n++, titulo: 'Modelos de ciclo de vida',
  sub: 'Formas distintas de recorrer esas siete fases',
  cabecera: ['Modelo', 'Cómo funciona', 'Cuándo conviene'],
  anchos: [2.0, 4.0, 2.9],
  filas: [
    ['Cascada', 'Una fase detrás de otra, sin volver atrás', 'Requisitos muy claros y estables'],
    ['Prototipos', 'Se hace una maqueta y se enseña al cliente', 'El cliente no sabe qué quiere'],
    ['Incremental', 'Se entrega por trozos que funcionan', 'Se necesita algo pronto'],
    ['En espiral', 'Ciclos repetidos, analizando riesgos', 'Proyectos grandes y arriesgados'],
    ['Ágil / Scrum', 'Entregas cada 2-4 semanas, con el cliente dentro', 'Casi todo el desarrollo web actual'],
  ],
});

// ─────────────────────────────── 27
L.idea(p, {
  ud: UD, etiqueta: 'POR QUÉ CASCADA SIGUE EN LOS TEMARIOS',
  texto: 'Porque es el modelo del que todos los demás son una corrección.',
  detalle: 'Su problema es que da por supuesto que el cliente sabe desde el principio exactamente lo que quiere y no va a cambiar de opinión. Eso no pasa nunca. Todos los modelos posteriores son formas distintas de aceptar que el cliente va a cambiar de opinión.',
});

// ─────────────────────────────── 28
L.practica(p, {
  ud: UD, n: n++, codigoP: 'P1.2',
  titulo: 'Las siete fases de un encargo real',
  items: [
    'Un bar quiere una aplicación para gestionar las comandas de las mesas.',
    'Escribe qué se haría en cada una de las siete fases, con ejemplos concretos de ESTE encargo.',
    'Di qué modelo de ciclo de vida elegirías y justifícalo en cinco líneas.',
    'Señala en qué fase crees que aparecerán los problemas, y por qué.',
  ],
  entrega: 'Documento de dos páginas. Se valora la concreción: «se harían pruebas» no vale; «se probaría qué pasa si dos camareros tocan la misma mesa a la vez» sí.',
});

// ─────────────────────────────── 29
L.cierre(p, {
  ud: UD, titulo: 'Lo que hay que llevarse',
  items: [
    'El software se desarrolla, no se fabrica, y no se estropea',
    'Código fuente es texto; programa es binario. No son lo mismo',
    'Un programa no se escribe: se obtiene traduciendo',
    'Compilador: traduce todo antes. Intérprete: línea a línea',
    'La vía mixta traduce a un código intermedio y usa una máquina virtual',
    'Al código objeto le faltan las bibliotecas: por eso no arranca',
    'Un lenguaje se clasifica por nivel, traducción, propósito y paradigma',
    'El mantenimiento se lleva el 80 % del coste total',
  ],
});

p.writeFile({ fileName: '/home/claude/endes/out/UD1-alt.pptx' })
  .then(f => console.log('OK', f));
