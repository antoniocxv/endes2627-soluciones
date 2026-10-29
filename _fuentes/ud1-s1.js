const L = require('./lib');
const IMG = '/home/claude/endes/img';
const p = L.nuevo();
const UD = 'UD1 · Sesión 1 de 4 · 2 h';
let n = 1;

// ───────────────────────────────── 1 · Portada
L.portada(p, {
  ud: 'UNIDAD DIDÁCTICA 1 · SESIÓN 1',
  titulo: 'Qué es el software y qué pasa cuando lo ejecutas',
  subtitulo: 'Entornos de Desarrollo · 1.º DAW · Antonio Vázquez Carreño',
  horas: 2,
}).addNotes(
`[0:00 · 3 min]

Hoy empezamos materia. Dos horas, seis ejercicios cortos y una práctica al final en la que vais a abrir un programa por dentro.

La pregunta que quiero que os llevéis contestada al salir es: ¿qué narices pasa entre que haces doble clic en un icono y aparece la ventana?

Aviso de método: hoy vais a escribir bastante. Cada 10 o 12 minutos paramos y hacéis algo. Traed el cuaderno o un documento abierto.`);

// ───────────────────────────────── 2 · Plan de la sesión
L.listaNumerada(p, {
  ud: UD, n: n++, titulo: 'El plan de hoy',
  items: [
    ['Bloque A · Las capas del sistema', 'Dónde vive tu código · E1 y E2'],
    ['Bloque B · Tu código nunca toca el disco', 'Seis capas para guardar un fichero · E3'],
    ['Descanso', '10 minutos'],
    ['Bloque C · Programa, aplicación, a medida', 'E4'],
    ['Bloque D · Fuente, objeto y ejecutable', 'La cadena en C · E5'],
    ['Práctica P1.1 · Mirar dentro de un binario', 'Editor hexadecimal · 25 min'],
  ],
}).addNotes(
`[0:03 · 2 min]

Enseñad el plan y decid la hora del descanso en voz alta: a la hora aproximadamente. Que sepan que existe reduce a la mitad las miradas al móvil.

No leáis la diapositiva entera. Señalad el descanso y la práctica, que es lo que les interesa.`);

// ───────────────────────────────── 3 · E1
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E1',
  titulo: 'Arranque en frío · 5 minutos',
  items: [
    'Coge papel o abre un documento. Sin buscar en internet y sin hablar con nadie.',
    'Describe en TRES líneas qué ocurre desde que haces doble clic en el icono de un programa hasta que aparece su ventana.',
    'Vale decir «no tengo ni idea». Es información útil.',
    'Guárdalo. Al final de la clase lo vas a releer y lo vas a corregir tú mismo.',
  ],
  entrega: 'No se recoge, no se califica. Es tu foto del «antes».',
}).addNotes(
`[0:05 · 5 min]

Esto es lo más importante de la clase y parece lo más tonto.

Cronometrad de verdad 5 minutos. Paseaos por el aula pero NO ayudéis, no deis pistas y no respondáis preguntas: la gracia es que se vea a sí mismo sin red.

Cuando terminen, NO lo corrijáis. Decid solo: «guardadlo, esto lo volvemos a leer a las nueve menos cuarto». Si lo corregís ahora, matáis el efecto del cierre.

Lo que vais a ver, y os sirve de diagnóstico: unos escribirán «se abre el programa» (no saben nada), otros «el SO carga el ejecutable en memoria» (vienen de algo) y alguno mencionará el enlazador o las bibliotecas (ese ya ha programado en C).`);

// ───────────────────────────────── 4 · Qué es el software
L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Software y hardware',
  sub: 'Lo intangible y lo que se puede tirar al suelo',
  izq: {
    titulo: 'Software (IEEE 729)',
    items: [
      'Programas, procedimientos, reglas,',
      'documentación y datos asociados',
      'Se DESARROLLA, no se fabrica',
      'No se estropea con el uso',
      'Copiarlo da un clon idéntico',
    ],
  },
  der: {
    titulo: 'Consecuencias de eso',
    items: [
      'No hay «desgaste»: si falla hoy, fallaba ya',
      'El coste está en las personas, no en la materia',
      'La copia cuesta cero: por eso el modelo de negocio es la licencia',
      'Y por eso la calidad se decide antes de escribir código',
    ],
  },
}).addNotes(
`[0:10 · 5 min]

La definición del IEEE incluye la documentación y los datos. Eso les sorprende y conviene subrayarlo: el manual forma parte del software. Es la primera pista de la UD4.

«El software no se estropea»: insistid. Un coche se desgasta; un programa que lleva diez años funcionando y hoy falla no se ha desgastado, es que hoy le ha llegado una entrada que nunca le había llegado. El fallo estaba ahí desde el primer día.

Anécdota de un minuto si va sobrada la cosa: el efecto 2000, o el fallo del Ariane 5, que explotó por convertir un número de 64 bits a 16.`);

// ───────────────────────────────── 5 · Las capas
L.imagen(p, {
  ud: UD, n: n++, titulo: 'Las capas del sistema',
  ruta: `${IMG}/s1-capas.png`,
  texto: ['Cada capa solo habla con la de debajo.', 'Tu programa no toca el disco: se lo pide al de abajo.'],
}).addNotes(
`[0:15 · 6 min]

Las cuatro capas. La clave es la frase de abajo: cada capa solo habla con la de debajo.

Dos preguntas al aire mientras lo explicáis (que contesten en voz alta, sin levantar la mano):
- ¿Dónde meteríais VS Code? → programación.
- ¿Y el navegador? → aplicación. Aunque tenga DevTools dentro. Un programa puede llevar herramientas de programación dentro sin dejar de ser una aplicación.

La confusión típica: creen que «software de sistema» es Windows y punto. Recordad que los controladores y la UEFI también están ahí.`);

// ───────────────────────────────── 6 · E2
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E2',
  titulo: 'Clasificar · 4 minutos, por parejas',
  items: [
    'Clasifica cada uno en SISTEMA, PROGRAMACIÓN o APLICACIÓN.',
    'El controlador de la impresora · Google Chrome · VS Code · la UEFI · Photoshop',
    'npm · el antivirus · Node.js · el compilador de C · el Buscaminas',
    'Marca con una interrogación los que no tengas claros. Esos son los interesantes.',
  ],
  entrega: 'Puesta en común de 2 minutos. Discutimos solo los dudosos.',
}).addNotes(
`[0:21 · 6 min en total: 4 de trabajo + 2 de puesta en común]

Solución rápida:
- Sistema: controlador de impresora, UEFI, antivirus (discutible: mucha gente lo pone en aplicación; lo defendible es sistema, porque se engancha al núcleo).
- Programación: VS Code, npm, el compilador de C, Node.js (también discutible: Node es un entorno de ejecución; según para qué se use es una cosa u otra).
- Aplicación: Chrome, Photoshop, Buscaminas.

NO deis la solución como si fuera un dogma. Los tres dudosos —antivirus, npm y Node— son el ejercicio de verdad. Preguntad «¿por qué lo has puesto ahí?» y dejad que se defiendan. Si alguien argumenta bien que Node es de sistema porque otros programas dependen de él, dadlo por bueno: lo que evalúa el criterio es que sepan justificar, no que acierten la etiqueta.`);

// ───────────────────────────────── 7 · La cadena de llamadas
L.codigo(p, {
  ud: UD, n: n++, titulo: 'Tu código nunca toca el disco',
  sub: 'Una línea de JavaScript, seis capas por debajo',
  lineas: [
    "const fs = require('node:fs');",
    "fs.writeFileSync('tareas.json', datos);",
    '',
    '//  tu código',
    '//    -> Node',
    '//      -> libc',
    '//        -> llamada al sistema write()',
    '//          -> núcleo del SO',
    '//            -> controlador de disco',
    '//              -> el cabezal del disco se mueve',
  ],
  pie: 'Ninguna capa se salta a la siguiente. Y en ninguna de ellas hay magia.',
}).addNotes(
`[0:27 · 8 min]

Aquí es donde se les cae la venda. Una línea de JavaScript, que parece trivial, atraviesa seis capas.

Puntos que hay que decir:
1. Tu programa NO tiene permiso para tocar el disco. Nadie lo tiene salvo el núcleo. Lo que hace es pedirlo.
2. Esa petición se llama «llamada al sistema». Es la frontera entre modo usuario y modo núcleo.
3. Esa frontera es la razón de que existan los sistemas operativos multiusuario: si cada programa pudiera escribir donde quisiera, cualquier programa podría leer tus contraseñas.

Si tenéis proyector y ganas, en Linux: strace node -e "require('fs').writeFileSync('x','hola')" y buscad la línea del write. Impresiona bastante ver las 300 llamadas al sistema que hacen falta para escribir cuatro letras. Si es Windows, contadlo sin más.`);

// ───────────────────────────────── 8 · E3
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E3',
  titulo: 'Por qué no arranca · 4 minutos',
  items: [
    'Te bajas un programa para Windows (un .exe) y lo intentas abrir en Linux. No funciona.',
    'Da DOS razones distintas, y di en qué capa está cada una.',
    'Pista: no vale «porque son sistemas distintos». Eso no explica nada.',
    'Extra para quien vaya rápido: ¿por qué un .js sí funciona en los dos?',
  ],
  entrega: 'Se comenta en voz alta. Dos minutos.',
}).addNotes(
`[0:35 · 6 min: 4 + 2 de comentario]

Respuestas buenas (con dos basta):
1. El FORMATO del ejecutable es distinto. Windows usa PE (que empieza por «MZ») y Linux usa ELF. El SO ni siquiera reconoce el fichero como algo ejecutable. → capa de sistema.
2. Las LLAMADAS AL SISTEMA son distintas. El .exe pide cosas a la API de Windows, y esas funciones no existen en Linux. → frontera sistema/núcleo.
3. Las BIBLIOTECAS que necesita (las DLL) no están. → enlace dinámico.

Ojo, error frecuente: dirán «porque el procesador es distinto». NO. Los dos corren en x86-64: el código máquina es el mismo. Lo que cambia es el envoltorio y a quién le pide las cosas. Este matiz merece dos minutos, porque es el que de verdad no entienden.

El extra: un .js no es un ejecutable, es texto. Lo que se ejecuta es Node, que sí hay versión para cada sistema. El programa portable no es tu código: es el intérprete.

Esto enlaza directo con el bloque D.`);

// ───────────────────────────────── 9 · Idea
L.idea(p, {
  ud: UD, etiqueta: 'LA FRASE DE LA SESIÓN',
  texto: 'Un programa no es portable porque esté bien escrito. Es portable porque alguien ha portado la capa de debajo.',
  detalle: 'Java, Python, JavaScript y el navegador son portables porque hay una máquina virtual o un intérprete compilado para cada sistema. Alguien hizo ese trabajo.',
}).addNotes(
`[0:41 · 2 min]

Diapositiva de respiro. Leedla, dejad tres segundos de silencio y pasad.

Si queréis rematar: «escribe una vez, ejecuta en cualquier sitio» fue el eslogan de Sun con Java en 1995. Funciona, pero el truco no está en Java: está en que Sun escribió una máquina virtual distinta para cada sistema operativo. El trabajo no desaparece, se hace una vez y lo aprovechan todos.`);

// ───────────────────────────────── 10 · Descanso
L.cierre(p, {
  ud: UD, titulo: 'Descanso · 10 minutos',
  items: [
    'Volvemos puntuales, que la segunda hora es la buena',
    'Antes de salir: ¿alguien tiene todavía el ejercicio E1 sin escribir?',
  ],
}).addNotes(
`[0:43 · 10 min]

Decid la hora exacta de vuelta en voz alta y escribidla en la pizarra. Si no, se convierten en quince minutos.

Aprovechad para comprobar que el proyector y vuestros ficheros de ejemplo de la práctica P1.1 funcionan. Si dependéis de internet para algo, probadlo ahora.`);

// ───────────────────────────────── 11 · Programa vs aplicación
L.dosColumnas(p, {
  ud: UD, n: n++, titulo: 'Programa, aplicación, sistema',
  izq: {
    titulo: 'Programa',
    items: [
      'Un conjunto de instrucciones',
      'Hace UNA función determinada',
      'Un .exe, un script, un servicio',
      'Ejemplo: el comando ping',
    ],
  },
  der: {
    titulo: 'Aplicación',
    items: [
      'Uno o VARIOS programas',
      'Permite al usuario hacer una TAREA completa',
      'Suele tener interfaz e instalador',
      'Ejemplo: Photoshop · un ERP · Moodle',
    ],
  },
}).addNotes(
`[0:53 · 6 min]

Distinción sencilla pero que cae en el examen. La frase que la fija: «todo programa es software, toda aplicación es uno o varios programas, pero no todo programa es una aplicación».

Decid también lo de las SUITES: Office, LibreOffice. Varias aplicaciones que se venden e instalan juntas.

Y aprovechad para meter, en dos minutos, software a medida frente a software estándar:
- A medida: se adapta al cliente, es caro (lo paga uno solo), suele traer errores al principio porque lo ha probado poca gente.
- Estándar o «enlatado»: más barato porque el precio se reparte, más probado, pero te sobran funciones y te faltan otras. El cliente se adapta al software.
Esto sale seguro en la prueba escrita de la UD1.`);

// ───────────────────────────────── 12 · E4
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E4',
  titulo: 'Programa o aplicación · 3 minutos',
  items: [
    'Di si cada uno es un PROGRAMA o una APLICACIÓN, y por qué.',
    'El comando ping · WhatsApp en el móvil · un script que renombra 200 fotos',
    'Moodle · el servicio que imprime en cola · Microsoft Office',
    'Y una última: ¿software a medida o estándar? La Moodle del instituto.',
  ],
  entrega: 'Al aire. Nos interesa el «por qué», no la etiqueta.',
}).addNotes(
`[0:59 · 5 min: 3 + 2]

Solución:
- Programa: ping, el script de renombrar, el servicio de cola de impresión.
- Aplicación: WhatsApp, Moodle, Office (además suite).

La última es la buena y por eso la he puesto: Moodle es software ESTÁNDAR (es un producto genérico que usan miles de centros) pero está CONFIGURADO y personalizado para la Junta. Esa es exactamente la situación real de casi todo el software que se compra: ni a medida puro ni enlatado puro.

Si sale el debate de «pero está muy personalizado, entonces es a medida», perfecto: dejadlo correr un minuto. La respuesta es que configurar no es desarrollar.`);

// ───────────────────────────────── 13 · Fuente / objeto / ejecutable
L.tabla(p, {
  ud: UD, n: n++, titulo: 'Fuente, objeto y ejecutable',
  sub: 'Tres ficheros, tres cosas muy distintas',
  cabecera: ['', 'Código fuente', 'Código objeto', 'Ejecutable'],
  anchos: [2.0, 2.3, 2.3, 2.3],
  filas: [
    ['Qué es', 'Lo que escribes tú', 'Traducido, incompleto', 'Traducido y completo'],
    ['¿Se lee?', 'Sí, es texto', 'No, es binario', 'No, es binario'],
    ['Extensión', '.c .java .js', '.o .obj .class', '.exe · sin extensión'],
    ['¿Arranca?', 'No', 'NO', 'Sí'],
    ['Le falta', '—', 'Las bibliotecas', 'Nada'],
  ],
}).addNotes(
`[1:04 · 7 min]

La fila que importa es la última: al código objeto le faltan las bibliotecas.

Explicadlo con el ejemplo: tú escribes printf. Tú no has escrito printf. printf está en una biblioteca que alguien compiló hace años. Cuando el compilador llega a esa línea, deja un hueco que dice «aquí va printf, ya lo rellenará alguien». Ese alguien es el enlazador.

Por eso un .o no arranca aunque ya sea binario: está lleno de huecos.

Y de paso, el error que van a ver mil veces en su vida: «undefined reference to printf» no es un error de compilación, es del enlazador. Significa que el hueco se quedó sin rellenar. Distinguir errores de compilación de errores de enlazado les va a ahorrar horas.`);

// ───────────────────────────────── 14 · La cadena
L.imagen(p, {
  ud: UD, n: n++, titulo: 'La cadena completa en C',
  ruta: `${IMG}/s1-cadena.png`,
  texto: ['Al escribir gcc hola.c -o hola, gcc hace los cuatro pasos seguidos.', 'Y borra los intermedios, por eso parece que solo hay uno.'],
}).addNotes(
`[1:11 · 8 min]

Los cuatro pasos. Que quede claro que gcc no es el compilador: gcc es el director de orquesta que llama a cuatro programas distintos.

Qué hace cada uno, en una frase:
- Preprocesador: es un buscar y reemplazar glorificado. Pega dentro el contenido de los #include y sustituye los #define. Sale TEXTO, más largo que el original.
- Compilador: traduce a ensamblador. Sigue siendo texto, pero ya es específico de esta arquitectura.
- Ensamblador: pasa el ensamblador a código máquina. Aquí deja de leerse.
- Enlazador: junta tu .o con las bibliotecas y rellena los huecos.

Demo de dos minutos si tenéis gcc en el proyector:
  gcc -E hola.c | wc -l     -> de 6 líneas a más de 700
Ese número, 700, vale más que toda la explicación.`);

// ───────────────────────────────── 15 · E5
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E5',
  titulo: 'Ordena la cadena · 4 minutos',
  items: [
    'Ordena estos nueve elementos: hola.s · enlazador · hola.exe · preprocesador · hola.o · hola.c · compilador · hola.i · ensamblador',
    '¿En cuál de los cuatro pasos entra el contenido de stdio.h?',
    '¿En cuál de los cuatro pasos deja el fichero de poder leerse con el Bloc de notas?',
    '¿Cuál de los cuatro pasos NO existe cuando ejecutas node hola.js?',
  ],
  entrega: 'Las tres preguntas son las que van a caer en la prueba escrita.',
}).addNotes(
`[1:19 · 6 min: 4 + 2]

Solución:
- Orden: hola.c → preprocesador → hola.i → compilador → hola.s → ensamblador → hola.o → enlazador → hola.exe
- stdio.h entra en el PREPROCESADOR. Lo que entra es la declaración de printf, no su código; el código llega en el enlazado. Este matiz es el que separa un 7 de un 10.
- Deja de leerse tras el ENSAMBLADOR: el .o ya es binario. El .s todavía es texto.
- La pregunta trampa: cuando haces node hola.js no existe NINGUNO de los cuatro como paso previo. No hay fichero intermedio que tú veas. Node hace su propia traducción por dentro, en memoria, mientras ejecuta. Eso es la compilación JIT y se ve en detalle la semana que viene.

Si alguien pregunta «¿entonces JavaScript es interpretado o compilado?», esa es la pregunta de la sesión 3. Decidle que la anote y que no os deje escaquearos.`);

// ───────────────────────────────── 16 · P1.1 planteamiento
L.idea(p, {
  ud: UD, etiqueta: 'PRÁCTICA P1.1 · 25 MINUTOS',
  texto: 'Un programa no es magia. Es un fichero lleno de bytes, y los primeros bytes dicen qué tipo de fichero es.',
  detalle: 'Vamos a abrir por dentro un ejecutable, una imagen y un fichero de código, y a comprobar que el sistema operativo los distingue por sus primeros bytes, no por la extensión.',
}).addNotes(
`[1:25 · 2 min de planteamiento]

Esta es la parte que recuerdan en junio.

Montaje: necesitan la extensión «Hex Editor» de Microsoft en VS Code (se instala en 20 segundos). Si el aula no tiene internet o da problemas, plan B: hexed.it en el navegador, que no sube nada a ningún sitio, o el comando certutil -dump en Windows.

Preparad vosotros el caso de la extensión cambiada ANTES de clase: coged un .png, renombradlo a .txt y a .exe, y tenedlo listo. Es el momento de la clase.`);

// ───────────────────────────────── 17 · P1.1 guion
L.practica(p, {
  ud: UD, n: n++, codigoP: 'P1.1',
  titulo: 'Mirar dentro · 25 minutos, por parejas',
  items: [
    'Instala la extensión Hex Editor en VS Code (Microsoft).',
    'Abre un .js cualquiera con el editor normal: se lee. Ábrelo con el editor hexadecimal: mira la columna de la derecha.',
    'Abre ahora C:\\Windows\\System32\\notepad.exe (o /bin/ls). Anota los DOS primeros bytes y qué letras son.',
    'Abre un .png y anota los cuatro primeros bytes. Luego un .pdf. Luego un .zip.',
    'Busca texto legible dentro del ejecutable: nombres de funciones, mensajes de error, rutas.',
  ],
  entrega: 'Tabla con 5 ficheros: nombre, primeros bytes en hexadecimal, qué letras forman, tamaño.',
}).addNotes(
`[1:27 · 25 min]

Las firmas que van a encontrar (tenedlas a mano):
  4D 5A          = "MZ"     ejecutable de Windows (PE). Son las iniciales de Mark Zbikowski, un ingeniero de Microsoft de 1983. Sigue ahí cuarenta años después.
  7F 45 4C 46    = ".ELF"   ejecutable de Linux
  89 50 4E 47    = ".PNG"
  25 50 44 46    = "%PDF"
  50 4B 03 04    = "PK.."   zip (y por tanto .docx, .xlsx, .odt, .jar: son zips)
  CA FE BA BE    = "cafebabe"  un .class de Java. Si alguien tiene Java, enseñádselo: es la mejor.

El momento de la clase, dejadlo para los últimos 5 minutos:
Cogéis el .png que habéis preparado renombrado a .exe. Se lo pasáis o lo enseñáis en el proyector.
- Windows dice que es un ejecutable (por la extensión).
- El editor hexadecimal dice 89 50 4E 47: es un PNG.
- Y si lo renombráis a .txt sigue siendo un PNG.
Conclusión que tienen que escribir ellos: LA EXTENSIÓN ES UNA ETIQUETA PARA LAS PERSONAS. El contenido es lo que manda. De ahí se sale directo a por qué llegan virus en ficheros que parecen fotos.

Si alguien termina pronto: que busque dentro de notepad.exe la cadena de texto de algún mensaje de error, o que abra un .docx con el editor hexadecimal y descubra que es un zip.`);

// ───────────────────────────────── 18 · Cierre E1
L.practica(p, {
  ud: UD, n: n++, codigoP: 'E6',
  titulo: 'Relee lo que escribiste hace dos horas · 5 minutos',
  items: [
    'Saca el papel del ejercicio E1.',
    'Reescríbelo ahora, con lo que sabes. Usa al menos tres de estas palabras: ejecutable, bibliotecas, llamada al sistema, núcleo, formato, memoria.',
    'Compara las dos versiones.',
    'Esa diferencia es lo que has aprendido hoy. Guárdalo: lo vamos a volver a hacer en la última sesión de la unidad.',
  ],
  entrega: 'Sube las dos versiones a Moodle, en el mismo documento. Esta sí se recoge.',
}).addNotes(
`[1:52 · 6 min]

El cierre. No os lo saltéis por falta de tiempo: si vais mal, recortad la práctica, no esto.

La versión buena, por si alguien pregunta, más o menos:
Al hacer doble clic, el sistema operativo lee la cabecera del fichero y comprueba que es un ejecutable de su formato. Reserva memoria, carga el código, resuelve y carga las bibliotecas dinámicas que necesita, y le dice a la CPU que empiece en la primera instrucción. A partir de ahí el programa pide al núcleo, mediante llamadas al sistema, todo lo que necesita: ficheros, ventana, red.

No se la deis escrita. Que la construyan y luego la comentáis.

Decidles que guarden el documento: en la sesión 4, antes de la prueba escrita, lo vuelven a hacer.`);

// ───────────────────────────────── 19 · Para casa
L.cierre(p, {
  ud: UD, titulo: 'Para el martes',
  items: [
    'Subir a Moodle el documento del E6 con las dos versiones',
    'Subir la tabla de firmas de la práctica P1.1',
    'Traer localizado un fichero raro de vuestro ordenador y su firma hexadecimal',
    'Pensar: ¿JavaScript es compilado o interpretado? Lo discutimos el martes',
  ],
}).addNotes(
`[1:58 · 2 min]

Tres tareas cortas. Fecha en Moodle, no la repitáis de memoria.

La cuarta no es una tarea, es un anzuelo para la sesión 3. Si alguien llega el martes con la respuesta a medias, ya habéis ganado.

Si sobra tiempo: turno de preguntas. Si falta, esta diapositiva se lee en treinta segundos y se sale a la hora. Salir puntual el primer día de materia vale más de lo que parece.`);

p.writeFile({ fileName: '/home/claude/endes/out/UD1-sesion1.pptx' })
  .then(f => console.log('OK', f));
