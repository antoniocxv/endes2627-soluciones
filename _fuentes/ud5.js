const L = require('./lib');
const IMG = '/home/claude/endes/img';

const p = L.nuevo();
const UD = 'UD5 · Diagramas de clases';
let n = 1;

L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 5',
  titulo: 'Elaboración de diagramas de clases',
  subtitulo: 'La fotografía de un sistema: qué hay y cómo se relaciona',
  horas: 12,
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Qué vamos a ver',
  sub: 'RA5 — Representa la estructura de una aplicación mediante diagramas de clases',
  items: [
    ['Repaso de POO', 'Clase, objeto y los cuatro pilares'],
    ['UML', 'Qué es, quién lo estandariza, qué diagramas tiene'],
    ['El diagrama de clases', 'Notación, visibilidad, abstractas e interfaces'],
    ['Las seis relaciones', 'Y cómo no confundir agregación con composición'],
    ['De los requisitos al diagrama', 'El método de los sustantivos'],
    ['Herramientas y generación de código', 'PlantUML y Visual Paradigm'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'POR QUÉ UN DIAGRAMA',
  texto: 'Quince clases caben en una hoja. El código equivalente son 1.500 líneas en 15 ficheros.',
  detalle: 'Sirve para pensar el diseño cuando cambiar de opinión todavía es gratis, comunicarlo al equipo y documentar un sistema para quien llegue nuevo.',
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Los cuatro pilares de la POO',
  izq: {
    titulo: 'Abstracción y encapsulación',
    items: [
      'Abstracción: quedarse con lo esencial PARA EL PROBLEMA',
      'El modelo depende del problema, no de la realidad',
      'Encapsulación: datos privados, acceso por métodos',
      'La clase controla su propia coherencia',
    ],
  },
  der: {
    titulo: 'Herencia y polimorfismo',
    items: [
      'Herencia: relación «es un»; reutiliza y extiende',
      'Polimorfismo: mismo mensaje, comportamientos distintos',
      'Regla «es un»: Proyecto ES UN Elemento → herencia',
      'Proyecto TIENE Tareas → composición, no herencia',
    ],
  },
});

L.codigo(p, {
  ud: UD, n: n++, titulo: 'Los 14 diagramas de UML 2.5',
  lineas: [
    '                      Diagramas UML',
    '                ┌──────────┴──────────┐',
    '           ESTRUCTURA           COMPORTAMIENTO',
    '                │                      │',
    '   ├─ Clases    │      ├─ Casos de uso │',
    '   ├─ Objetos   │      ├─ Actividad    │',
    '   ├─ Componentes      ├─ Estados      │',
    '   ├─ Despliegue       └─ Interacción ─┤',
    '   ├─ Paquetes  │            ├─ Secuencia',
    '   ├─ Perfiles  │            ├─ Comunicación',
    '   └─ Estructura│            ├─ Tiempos',
    '      compuesta │            └─ Visión general',
  ],
  pie: 'En el módulo vemos clases (UD5) y comportamiento (UD6). Los demás, conviene saber nombrarlos.',
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Notación de una clase',
  ruta: `${IMG}/d1-clase.png`,
  texto: [
    'Tres compartimentos: nombre, atributos, operaciones',
    '+ público   - privado   # protegido   ~ paquete',
    'Miembro estático: subrayado',
    'Clase o método abstracto: en cursiva',
    'Interfaz: estereotipo <<interface>>',
    'atributo : tipo [multiplicidad] = valor',
  ],
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'Las relaciones, de un vistazo',
  ruta: `${IMG}/d2-relaciones.png`,
  texto: [
    'Asociación: línea simple, «conoce a»',
    'Agregación: rombo BLANCO, la parte sobrevive',
    'Composición: rombo NEGRO, la parte muere con el todo',
    'Herencia: triángulo hueco, línea continua',
    'Realización: triángulo hueco, línea discontinua',
    'Dependencia: flecha abierta, línea discontinua',
  ],
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'Multiplicidad',
  cabecera: ['Notación', 'Significa', 'Ejemplo'],
  anchos: [2.1, 3.0, 3.8],
  filas: [
    ['1', 'Exactamente uno', 'Una tarea pertenece a 1 usuario'],
    ['0..1', 'Cero o uno (opcional)', 'Fecha límite opcional'],
    ['* o 0..*', 'Cero o muchos', 'Un usuario, 0..* tareas'],
    ['1..*', 'Uno o muchos', 'Un pedido, 1..* líneas'],
    ['2..5', 'Entre dos y cinco', 'Una partida, 2..5 jugadores'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'LA PREGUNTA ESTRELLA',
  texto: 'Agregación o composición: el criterio es el ciclo de vida.',
  detalle: 'Si al destruir el todo las partes deben destruirse → composición (rombo negro). Si sobreviven → agregación (rombo blanco). Segundo criterio: en composición la parte pertenece a UN solo todo.',
});

L.imagen(p, {
  ud: UD, n: n++, titulo: 'GestorTareas: las seis relaciones en un diagrama',
  ruta: `${IMG}/d3-gestor.png`,
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Del enunciado al diagrama',
  sub: 'Método de los sustantivos (Abbott)',
  items: [
    ['Subraya los sustantivos', 'Candidatos a clase o a atributo'],
    ['Subraya los verbos', 'Candidatos a método o a relación'],
    ['Subraya los adjetivos', 'Candidatos a atributo o a subclase'],
    ['Depura', 'Sinónimos fuera; lo que es atributo simple, fuera de clases'],
    ['Comprueba el ámbito', '¿«Usuario» es una clase o un actor de UD6?'],
  ],
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Señales de un mal diseño',
  izq: {
    titulo: 'Sobra',
    items: [
      'Clase con un atributo y ningún método: era un atributo',
      'Clase con 20 métodos sin relación: son dos clases',
      'Herencia de más de 3 niveles',
      'Clases Gestor, Manager, Utils, Helper: el cajón de sastre',
    ],
  },
  der: {
    titulo: 'Falta',
    items: [
      'Relaciones sin multiplicidad',
      'Bidireccionalidad en todas partes: acoplamiento innecesario',
      'Diagramas con 40 clases y todos sus getters: ilegible = inútil',
      'Un diagrama pone lo relevante para lo que quiere comunicar',
    ],
  },
});

L.tabla(p, {
  ud: UD, n: n++, titulo: 'De UML a código',
  cabecera: ['UML', 'JavaScript / TypeScript'],
  anchos: [4.0, 4.9],
  filas: [
    ['Atributo privado  -', '#campo (JS)  /  private (TS)'],
    ['Miembro estático (subrayado)', 'static'],
    ['Generalización', 'extends'],
    ['Realización', 'implements (TS)'],
    ['Asociación 1 → 0..*', 'Un array como atributo'],
    ['Composición', 'El objeto se CREA en el constructor del todo'],
    ['Agregación', 'El objeto se RECIBE como parámetro'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'SE VE EN EL CÓDIGO',
  texto: 'Si el todo lo crea, lo posee: es composición.',
  detalle: 'this.lineas = [new Linea(...)] es composición. constructor(almacen) { this.almacen = almacen } es agregación. La diferencia que parece teórica se lee directamente en el constructor.',
});

L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Dos herramientas, dos usos',
  sub: 'Hay que saber manejar las dos',
  izq: {
    titulo: 'PlantUML (texto)',
    items: [
      'Se versiona en Git y se revisa en un pull request',
      'Rápido de escribir; el diagrama se autoorganiza',
      'No controlas la colocación exacta',
      'Para diagramas que viven DENTRO del repositorio',
    ],
  },
  der: {
    titulo: 'Visual Paradigm (CASE)',
    items: [
      'Community Edition gratuita para uso no comercial',
      'Genera código e ingeniería inversa',
      'Comprueba la consistencia del modelo',
      '.vpp es binario: Git no puede fusionarlo',
      'Para cuando el ENTREGABLE es el diagrama',
    ],
  },
});

L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'Visual Paradigm: las cuatro trampas',
  sub: 'Los errores que se repiten curso tras curso',
  items: [
    ['Rombo hueco vs relleno', 'Agregación y composición están pegadas en la barra'],
    ['Atributos sin tipo', 'Se escribe nombre : Tipo en el propio campo'],
    ['Generalization donde va Realization', 'Herencia es continua; implementar interfaz, discontinua'],
    ['Exportar con Print Screen', 'File → Export → PNG, marcando Diagram only'],
  ],
});

L.idea(p, {
  ud: UD, etiqueta: 'DEL DIAGRAMA AL CÓDIGO',
  texto: 'Instant Generator genera el esqueleto; Instant Reverse dibuja el diagrama de un código que ya existe.',
  detalle: 'Lo segundo es la forma más rápida de documentar un proyecto heredado, y también la más rápida de descubrir que el diseño real no se parece al que se dibujó en su día.',
});

L.practica(p, {
  ud: UD, n: n++, codigoP: 'P5.2',
  titulo: 'Modelar desde cero: Biblioteca',
  items: [
    'Aplica el método de los sustantivos y justifica qué descartas.',
    'Diagrama en PlantUML con al menos una herencia, una composición, una agregación y un enumerado.',
    'Todas las multiplicidades y dos roles con nombre.',
    'Justifica por qué Libro–Ejemplar es composición y no agregación.',
    '¿Dónde modelas «no más de tres préstamos activos»?',
  ],
  entrega: 'docs/biblioteca.puml + justificación + el código JavaScript de tres clases.',
});

L.cierre(p, {
  ud: UD, titulo: 'Lo que hay que llevarse',
  items: [
    'UML es un lenguaje gráfico estándar del OMG, no una metodología',
    '+ público, - privado, # protegido, ~ paquete',
    'Abstracta en cursiva; estático subrayado',
    'Rombo blanco = agregación; rombo negro = composición',
    'Triángulo hueco continuo = herencia; discontinuo = realización',
    'Multiplicidad en las dos puntas, siempre',
    'Sustantivos → clases; verbos → métodos',
    'Directa: diagrama → código. Inversa: código → diagrama',
  ],
});

p.writeFile({ fileName: '/home/claude/endes/out/UD5-presentacion.pptx' })
  .then(f => console.log('OK', f));
