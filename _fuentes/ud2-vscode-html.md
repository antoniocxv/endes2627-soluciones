---
title: "Visual Studio Code con HTML y Emmet"
subtitle: "UD2 · Entornos de Desarrollo · 1.º DAW · Guía y ejercicios"
---

# Qué vas a encontrar aquí

| Parte | Contenido |
|----------------|----------------------------------------------------------------------------------------------|
| 1 | VS Code preparado para HTML: extensiones, vista previa, atajos |
| 2 | **Emmet a fondo**: la herramienta que te va a ahorrar más tiempo del curso |
| 3 | **Ejercicio de teoría** T2.2 |
| 4 | **Ejercicio práctico** P2.2 |

::: idea
**Este documento no enseña HTML.** El lenguaje lo das en Lenguajes de Marcas; aquí se trata de
manejar la **herramienta**. Todo el HTML que aparece es sencillo a propósito, y lo que se evalúa
es lo rápido y lo bien que lo produces con el entorno.
:::

\newpage

# PARTE 1 · VS Code preparado para HTML

## 1.1 · La buena noticia: Emmet ya viene puesto

Lo primero que hay que saber, porque casi todos los tutoriales de internet se equivocan en esto:

::: ojo
**Emmet viene incluido en VS Code. No hay que instalar ninguna extensión.**

Si buscas «emmet» en el marketplace te saldrán extensiones antiguas, de la época en que sí hacía
falta instalarla. **No instales ninguna**: te van a dar conflictos con la que ya está dentro.
:::

Compruébalo ahora mismo: crea un fichero `prueba.html`, escribe `ul>li*3` y pulsa **Tab**. Si se
convierte en una lista con tres elementos, Emmet está funcionando y no tienes que hacer nada más.

## 1.2 · Extensiones que sí conviene instalar

| Extensión | Quién la publica | Para qué |
|--------------------------|------------------------|------------------------------------------------------------|
| **Live Server** | Ritwick Dey | Abre la página en el navegador y **la recarga sola** al guardar |
| **Auto Rename Tag** | Jun Han | Cambias `<div>` y te cambia el `</div>` |
| **Prettier** | Prettier | Formatea el HTML al guardar |
| **HTMLHint** | HTMLHint | Avisa de HTML mal construido |
| **Color Highlight** | Sergii Naumov | Pinta los colores que escribes en el código |

::: idea
**Sobre Live Server.** Microsoft tiene su propia extensión, **Live Preview**, que abre la página
*dentro* de VS Code en lugar de en el navegador. Las dos valen.

Yo recomiendo **Live Server** por una razón concreta: al abrirse en el navegador de verdad, tienes
las herramientas de desarrollo completas, y las vas a necesitar. La de Microsoft está bien para un
vistazo rápido.
:::

## 1.3 · Las dos formas de ver tu página, y por qué una es mejor

**La mala:** doble clic en el `.html` desde el explorador de archivos. Se abre en el navegador con
una dirección tipo `file:///C:/DAW/pagina.html`.

**La buena:** clic derecho sobre el fichero en VS Code → **Open with Live Server**. O el botón
**Go Live** de la barra de estado, abajo a la derecha. Se abre con una dirección tipo
`http://127.0.0.1:5500/pagina.html`.

| | `file://` | Live Server |
|------------------------------------|---------------------------------|-----------------------------------------|
| Recarga al guardar | No, hay que pulsar F5 | **Sí, sola** |
| Simula un servidor real | No | Sí |
| Rutas relativas | A veces fallan | Funcionan como en producción |
| Verlo desde el móvil | Imposible | Posible, por la IP del equipo |

::: ojo
La recarga automática cambia por completo la forma de trabajar: pones VS Code en media pantalla y
el navegador en la otra media, y ves cada cambio al instante sin tocar nada. Cuando te
acostumbras, no hay vuelta atrás.
:::

## 1.4 · Atajos de HTML que se usan todos los días

| Atajo | Qué hace |
|----------------------------------|----------------------------------------------------------------------------|
| **Tab** | **Expandir la abreviatura de Emmet.** El más importante |
| `Ctrl+/` | Comentar o descomentar. En HTML pone `<!-- -->` |
| `Mayús+Alt+F` | Formatear el documento |
| `Ctrl+K` `Ctrl+0` | Plegar todo. Ideal para ver la estructura de la página |
| `Ctrl+K` `Ctrl+J` | Desplegar todo |
| `Mayús+Alt+→` | Ampliar la selección al bloque que lo contiene |
| `Ctrl+D` | Seleccionar la siguiente aparición de lo seleccionado |
| `Alt+clic` | Poner **varios cursores** a la vez |
| `Alt+Mayús+↓` | Duplicar la línea |
| `Ctrl+Mayús+O` | Saltar a un elemento de la página por su nombre |

::: idea
**`Ctrl+K` `Ctrl+0` merece una prueba.** Pliega toda la página y de golpe ves su esqueleto:
header, main, footer. Es la forma más rápida de comprobar que la estructura está bien anidada y
que no se te ha colado una sección dentro de otra sin querer.

**`Alt+clic` y los varios cursores.** Haz clic manteniendo Alt en cinco sitios distintos y
escribe: se escribe en los cinco a la vez. Para rellenar cinco etiquetas parecidas no hay nada
más rápido.
:::

## 1.5 · Formatear el HTML

Igual que con Python, no se ordena a mano. Con Prettier instalado, en la configuración (`Ctrl+,`
→ icono de *Abrir configuración (JSON)*):

```json
{
  "editor.formatOnSave": true,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

A partir de ahí, `Ctrl+S` deja la sangría perfecta y los atributos alineados.

::: ojo
Un HTML mal sangrado **funciona igual de bien** en el navegador: al navegador la sangría le da
igual. La sangría es para las personas. Y esa es justo la razón por la que hay que cuidarla: el
código lo vas a leer tú dentro de tres semanas, o un compañero la semana que viene.
:::

## 1.6 · Los avisos de HTMLHint

Con HTMLHint instalado, empiezas a ver subrayados donde antes no había nada:

| Aviso típico | Qué significa |
|--------------------------------------------------|------------------------------------------------------------|
| `Special characters must be escaped` | Has escrito un `<` o un `&` suelto en el texto |
| `Tag must be paired` | Abriste una etiqueta y no la cerraste |
| `Duplicate ID` | Dos elementos con el mismo `id`, y eso no vale |
| `An alt attribute must be present` | Una imagen sin texto alternativo |

El último es de accesibilidad y es obligatorio por normativa en cualquier web pública.

\newpage

# PARTE 2 · Emmet

## 2.1 · Qué es y por qué importa

Emmet convierte **abreviaturas cortas** en HTML completo. Escribes esto:

```
ul>li*3
```

pulsas **Tab**, y aparece esto:

```html
<ul>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

Ocho caracteres se convierten en cinco líneas. En una página real la diferencia son minutos por
bloque y **muchísimos errores de etiquetas sin cerrar que ya no cometes**, porque no las escribes
tú.

::: idea
Emmet nació en 2008 con el nombre de *Zen Coding*, creado por el desarrollador ruso **Sergey
Chikuyonok**. Hoy está integrado de serie en VS Code, en los editores de JetBrains y en casi todo
lo demás. Es una de esas herramientas que, cuando la conoces, no entiendes cómo has trabajado sin
ella.
:::

## 2.2 · Lo primero de todo: el esqueleto

En un fichero `.html` vacío, escribe un signo de exclamación y pulsa Tab:

```
!
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

::: ojo
**Dos cosas que hay que cambiar siempre** en cuanto aparece:

1. `lang="en"` → `lang="es"`. Le dice al navegador y a los lectores de pantalla en qué idioma
   está la página. Si lo dejas en inglés, un lector de pantalla leerá el español con acento
   inglés y no se entenderá nada.
2. `<title>Document</title>` → el título de verdad. Es lo que se ve en la pestaña del navegador y
   lo primero que lee Google.

Se puede configurar para que salga ya en español. Está en el apartado 2.12.
:::

## 2.3 · Los cinco operadores

Todo Emmet se construye con cinco símbolos. Son estos.

### `>` · hijo

Mete lo de la derecha **dentro** de lo de la izquierda.

```
nav>ul>li
```

```html
<nav>
	<ul>
		<li></li>
	</ul>
</nav>
```

### `+` · hermano

Pone lo de la derecha **al lado** de lo de la izquierda, al mismo nivel.

```
h1+p+footer
```

```html
<h1></h1>
<p></p>
<footer></footer>
```

### `^` · subir un nivel

Saca lo siguiente del elemento en el que estabas.

```
div>p^section
```

```html
<div>
	<p></p>
</div>
<section></section>
```

Se puede repetir para subir varios niveles: `^^` sube dos.

### `*` · multiplicar

```
ul>li*4
```

```html
<ul>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

### `( )` · agrupar

Sirve para que `*` y `+` afecten a un bloque entero y no solo al último elemento.

```
(header>h1)+(main>p)+footer
```

```html
<header>
	<h1></h1>
</header>
<main>
	<p></p>
</main>
<footer></footer>
```

Y combinando con `*`:

```
dl>(dt+dd)*2
```

```html
<dl>
	<dt></dt>
	<dd></dd>
	<dt></dt>
	<dd></dd>
</dl>
```

::: idea
**`^` frente a `( )`.** Las dos sirven para salir de un bloque, y casi siempre son
intercambiables. Consejo práctico: **usa paréntesis**. Se leen mucho mejor y no te equivocas
contando niveles. El `^` deja de ser legible en cuanto hay tres o cuatro.
:::

## 2.4 · Identificadores, clases y el `div` invisible

| Escribes | Sale |
|-----------------------------------------|---------------------------------------------------------------------|
| `div.caja` | `<div class="caja"></div>` |
| `#cabecera` | `<div id="cabecera"></div>` |
| `p.texto.grande` | `<p class="texto grande"></p>` |
| `section#datos.panel` | `<section id="datos" class="panel"></section>` |

**Si no escribes el nombre de la etiqueta, Emmet pone `div`.** Por eso `#cabecera` sale como un
div con ese id. Ahorra mucho tecleo, porque la mayoría de los contenedores son divs.

## 2.5 · Atributos

Entre corchetes, separados por espacios:

```
a[href=# title=Inicio]
```

```html
<a href="#" title="Inicio"></a>
```

```
img[src=logo.png alt=Logotipo]
```

```html
<img src="logo.png" alt="Logotipo">
```

Si el valor lleva espacios, ponlo entre comillas: `[title="Página de inicio"]`.

## 2.6 · Texto con llaves

```
h1{Bienvenido}
```

```html
<h1>Bienvenido</h1>
```

Combinándolo con todo lo anterior es donde Emmet empieza a lucir:

```
nav>ul>li*3>a[href=#]{Enlace}
```

```html
<nav>
	<ul>
		<li><a href="#">Enlace</a></li>
		<li><a href="#">Enlace</a></li>
		<li><a href="#">Enlace</a></li>
	</ul>
</nav>
```

## 2.7 · Numeración con `$`

El símbolo del dólar se sustituye por el número de repetición.

| Escribes | Resultado |
|---------------------------------------|-----------------------------------------------------------------------|
| `ul>li.item$*3` | clases `item1`, `item2`, `item3` |
| `ul>li.item$$*3` | clases `item01`, `item02`, `item03` (dos cifras) |
| `ul>li{Elemento $}*3` | textos «Elemento 1», «Elemento 2», «Elemento 3» |
| `ul>li{Item $@-}*3` | **al revés**: 3, 2, 1 |
| `ul>li{Item $@3}*3` | **empieza en 3**: 3, 4, 5 |

Ejemplo completo:

```
ul>li*3>{Elemento $}
```

```html
<ul>
	<li>Elemento 1</li>
	<li>Elemento 2</li>
	<li>Elemento 3</li>
</ul>
```

## 2.8 · Etiquetas implícitas: Emmet sabe dónde está

Esta es la parte que más sorprende. Emmet **mira dentro de qué etiqueta estás** y elige la hija
correcta él solo.

```
ul>.elemento*2
```

```html
<ul>
	<li class="elemento"></li>
	<li class="elemento"></li>
</ul>
```

No ha puesto `div`: ha puesto `li`, porque dentro de un `ul` lo que va es un `li`.

Con una tabla:

```
table>.fila*2>.celda*2
```

```html
<table>
	<tr class="fila">
		<td class="celda"></td>
		<td class="celda"></td>
	</tr>
	<tr class="fila">
		<td class="celda"></td>
		<td class="celda"></td>
	</tr>
</table>
```

| Dentro de… | La etiqueta implícita es |
|-------------------------------------------------|-------------------------------------------------------------|
| `ul` o `ol` | `li` |
| `table` o `tbody` | `tr` |
| `tr` | `td` |
| `select` | `option` |
| Cualquier otra | `div` |

## 2.9 · Texto de relleno: `lorem`

Para probar cómo queda una página necesitas texto, y escribirlo a mano es una pérdida de tiempo.

| Escribes | Sale |
|-------------------------------|-------------------------------------------------------------------------------|
| `lorem` | Un párrafo de unas 30 palabras |
| `lorem5` | Exactamente 5 palabras |
| `p*3>lorem10` | Tres párrafos de 10 palabras **distintas cada uno** |

```
p*2>lorem4
```

```html
<p>Lorem ipsum dolor sit.</p>
<p>Corporis veritatis eaque esse.</p>
```

## 2.10 · Abreviaturas con dos puntos

Atajos para cosas que se escriben mil veces:

| Escribes | Sale |
|---------------------------------------|-----------------------------------------------------------------------|
| `link:css` | `<link rel="stylesheet" href="style.css">` |
| `script:src` | `<script src=""></script>` |
| `form:post` | `<form action="" method="post"></form>` |
| `input:text` | `<input type="text" name="" id="">` |
| `input:email` | `<input type="email" name="" id="">` |
| `input:checkbox` | `<input type="checkbox" name="" id="">` |
| `btn:s` | `<button type="submit"></button>` |

## 2.11 · Envolver con abreviatura · *el truco desconocido*

Emmet no solo crea desde cero: también **envuelve texto que ya tienes**.

Imagina que tienes pegadas cinco líneas sueltas:

```
Inicio
Productos
Servicios
Sobre nosotros
Contacto
```

1. **Selecciónalas** las cinco.
2. `Ctrl+Mayús+P` → escribe **Emmet: Wrap with Abbreviation** (Envolver con abreviatura).
3. Escribe: `nav>ul>li*>a[href=#]`
4. Enter.

```html
<nav>
	<ul>
		<li><a href="#">Inicio</a></li>
		<li><a href="#">Productos</a></li>
		<li><a href="#">Servicios</a></li>
		<li><a href="#">Sobre nosotros</a></li>
		<li><a href="#">Contacto</a></li>
	</ul>
</nav>
```

::: ojo
Fíjate en el detalle: se escribe `li*` **sin número**. El asterisco solo, sin cifra, significa
«tantos como líneas haya seleccionadas». Si hubiera ocho líneas, saldrían ocho `li`.

Esto convierte una lista pegada de un Word en un menú de navegación en cinco segundos. Es, con
diferencia, lo que más tiempo ahorra de todo Emmet, y casi nadie lo conoce.
:::

## 2.12 · Configurar Emmet

En `Ctrl+,` → *Abrir configuración (JSON)*:

```json
{
  "emmet.variables": {
    "lang": "es",
    "charset": "UTF-8"
  },
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true
}
```

La primera hace que `!` genere ya `lang="es"` y no tengas que cambiarlo cada vez.

## 2.13 · Emmet también funciona en CSS

No es el objeto de este documento, pero conviene que lo sepas porque lo vas a agradecer:

| Escribes | Sale |
|-------------------------------------|-------------------------------------------------------------------------|
| `m10` | `margin: 10px;` |
| `p10-20` | `padding: 10px 20px;` |
| `w100p` | `width: 100%;` |
| `df` | `display: flex;` |
| `bgc` | `background-color: #fff;` |
| `fz16` | `font-size: 16px;` |

## 2.14 · Cuando Emmet no expande

| Síntoma | Causa | Solución |
|--------------------------------|----------------------------------|--------------------------------------------|
| Tab no hace nada | El fichero no es `.html` | Guárdalo con esa extensión |
| Tab mete una tabulación | Está desactivado | Pon `emmet.triggerExpansionOnTab` a `true` |
| Expande mal dentro de una etiqueta | El cursor está dentro de un atributo | Sácalo fuera |
| No reconoce la abreviatura | Hay un espacio de más | Emmet **no admite espacios** salvo en `[ ]` y `{ }` |

::: idea
**La causa número uno de que no funcione son los espacios.** `ul > li * 3` no expande;
`ul>li*3` sí. Todo junto y sin respirar.
:::

## 2.15 · Chuleta

| Símbolo | Significa | Ejemplo |
|-----------------------|-----------------------------------------------|----------------------------------------|
| `>` | hijo | `nav>ul` |
| `+` | hermano | `h1+p` |
| `^` | subir un nivel | `div>p^section` |
| `*` | multiplicar | `li*5` |
| `( )` | agrupar | `(dt+dd)*3` |
| `#` | identificador | `div#cabecera` |
| `.` | clase | `p.aviso` |
| `[ ]` | atributos | `a[href=#]` |
| `{ }` | texto | `h1{Hola}` |
| `$` | número de repetición | `li.item$*3` |
| `$$` | número con dos cifras | `li.item$$*3` |
| `$@-` | numeración descendente| `li{Item $@-}*3` |
| `$@5` | empezar en 5 | `li{Item $@5}*3` |
| `!` | esqueleto de la página| `!` |
| `lorem` | texto de relleno | `p*3>lorem8` |

\newpage

# PARTE 3 · Ejercicio de teoría T2.2

**Individual. Sin ordenador: esto se hace a mano o en un documento, pensando.**

Pon tus apellidos en el nombre del fichero: `T2.2_apellido1_apellido2.pdf`.

## Bloque A · El entorno (respuesta de una o dos frases)

1. ¿Hay que instalar alguna extensión para usar Emmet en VS Code? Explica por qué.

2. Un compañero abre su página haciendo doble clic en el fichero y la dirección empieza por
   `file:///`. Dile **dos ventajas** concretas de usar Live Server en su lugar.

3. ¿Qué hace la extensión **Auto Rename Tag** y qué tipo de error te evita?

4. Tu HTML está todo pegado a la izquierda, sin sangrar. ¿Se ve peor en el navegador? Justifica
   la respuesta.

5. ¿Para qué sirve `Ctrl+K` `Ctrl+0` y en qué situación concreta lo usarías?

6. Cita **dos** avisos que puede darte HTMLHint y explica uno de ellos.

## Bloque B · De abreviatura a HTML

Escribe el HTML **exacto** que produce cada abreviatura. Cuida la sangría.

7. `header>h1+p`

8. `ul>li*4`

9. `div.tarjeta>h2+p`

10. `section#contacto.panel`

11. `a[href=index.html title=Portada]{Volver}`

12. `ol>li.paso$*3`

13. `(h2+p)*2`

14. `table>tr*2>td*3`

15. `ul>li{Tema $@-}*3`

16. `div>span^p`

## Bloque C · De HTML a abreviatura

Escribe **la abreviatura más corta** que genera cada bloque.

17.
```html
<nav>
	<ul>
		<li></li>
		<li></li>
	</ul>
</nav>
```

18.
```html
<div class="caja grande"></div>
```

19.
```html
<section id="galeria">
	<h2>Galería</h2>
</section>
```

20.
```html
<ul>
	<li class="item1"></li>
	<li class="item2"></li>
	<li class="item3"></li>
	<li class="item4"></li>
</ul>
```

21.
```html
<header>
	<h1></h1>
</header>
<footer>
	<p></p>
</footer>
```

22.
```html
<ul>
	<li><a href="#">Enlace 1</a></li>
	<li><a href="#">Enlace 2</a></li>
	<li><a href="#">Enlace 3</a></li>
</ul>
```

## Bloque D · Razonar

23. ¿Por qué `ul>.elemento*2` produce etiquetas `<li>` y no `<div>`? ¿Cómo lo sabe Emmet?

24. Explica la diferencia entre `^` y `( )`. Pon un ejemplo en el que las dos den el mismo
    resultado y di cuál prefieres y por qué.

25. Tienes pegadas en el editor siete líneas de texto sueltas y quieres convertirlas en una lista
    con siete `<li>`. ¿Qué harías, paso a paso? ¿Qué abreviatura escribirías exactamente?

26. La abreviatura `ul > li * 3` no expande. ¿Por qué?

27. Emmet genera `<html lang="en">`. Explica **por qué es un problema** dejarlo así y cómo se
    arregla de forma permanente.

28. Un compañero dice que Emmet «es para vagos, lo suyo es escribir el HTML a mano para
    aprender». Escribe cinco líneas respondiéndole con argumentos. Puedes darle parte de razón si
    crees que la tiene.

\newpage

# PARTE 4 · Ejercicio práctico P2.2

**Individual. Con ordenador. Se entrega en Moodle.**

Vas a construir una página completa **usando Emmet para todo**. La página es una ficha sobre ti.

::: ojo
**La regla de oro de esta práctica: no puedes escribir etiquetas a mano.** Todo el HTML tiene que
salir de abreviaturas de Emmet. El texto sí lo escribes tú, claro.

Y tienes que **demostrarlo**: en la entrega hay una tabla donde anotas, bloque a bloque, la
abreviatura que has usado. Esa tabla es lo que más puntúa.
:::

**Tus apellidos** van en el nombre del fichero (`ficha_perez_gomez.html`), en el `<title>`, en el
`<h1>` y en el `<footer>`.

## Fase 1 · Preparación

1. Crea la carpeta `P2.2` y ábrela con VS Code.
2. Crea `ficha_APELLIDOS.html`.
3. Genera el esqueleto con `!` y Tab.
4. Cambia `lang` a `es` y pon un `<title>` con tu nombre y apellidos.
5. Arranca **Live Server** y deja el navegador visible al lado.

**Captura 1:** VS Code y el navegador a la vez, con la página en blanco ya servida y la dirección
`127.0.0.1` visible.

## Fase 2 · La cabecera y el menú

Con **una sola abreviatura**, genera:

- Un `<header>` que contenga
- un `<h1>` con el texto «Ficha de TUS APELLIDOS», y
- un `<nav>` con una lista de **cuatro** enlaces que pongan «Datos», «Módulos», «Aficiones» y
  «Contacto», y que apunten a `#datos`, `#modulos`, `#aficiones` y `#contacto`.

::: idea
**Pista.** Genera primero la estructura con los textos numerados y luego cambia los cuatro
textos. Es más rápido que escribir los cuatro enlaces uno a uno, y la abreviatura sigue siendo
una sola.
:::

**Captura 2:** el momento justo **antes** de pulsar Tab, con la abreviatura escrita.
**Captura 3:** el resultado ya expandido.

## Fase 3 · Los datos

Dentro de un `<main>`, una `<section id="datos">` con un `<h2>` y una **lista de definición**
(`<dl>`) con **cuatro** pares término/descripción: ciclo, curso, módulo favorito y una aficción.

Rellena los ocho huecos con tus datos reales.

## Fase 4 · La tabla de módulos

Una `<section id="modulos">` con un `<h2>` y una **tabla** que tenga:

- Un `<thead>` con una fila de **tres** encabezados: Módulo, Horas, Profesor.
- Un `<tbody>` con **cuatro** filas de tres celdas.

Rellénala con cuatro módulos reales de tu ciclo.

::: ojo
Esta fase es la que de verdad prueba si has entendido Emmet. Se puede hacer con **una sola
abreviatura**, y para eso necesitas el operador que sube de nivel. Si no te sale a la primera, no
pasa nada: hazlo en dos, pero apunta en la memoria por qué no te salió en una.
:::

## Fase 5 · Aficiones y contacto

- Una `<section id="aficiones">` con un `<h2>` y una lista de **cinco** elementos.
- Una `<section id="contacto">` con un `<h2>` y un formulario que envíe por `post` y contenga:
  una etiqueta y un campo de texto para el nombre, una etiqueta y un campo de correo, una
  etiqueta y un área de texto para el mensaje, y un botón de enviar.

Los campos tienen que tener `id`, y cada `<label>` su `for` apuntando al campo correspondiente.

**Captura 4:** el formulario ya generado, con el código y el navegador a la vez.

## Fase 6 · Pie y relleno

- Un `<footer>` con un párrafo que diga «Página de TUS APELLIDOS · 1.º DAW · curso 2026/2027».
- Añade al final, dentro de una `<section>`, **tres párrafos de texto de relleno** de unas ocho
  palabras cada uno, generados con Emmet.

## Fase 7 · Envolver con abreviatura

1. Pega al final del `<body>` estas cinco líneas, tal cual:

```
HTML
CSS
JavaScript
Python
SQL
```

2. Selecciónalas y usa **Emmet: Wrap with Abbreviation** para convertirlas en una lista donde
   cada elemento sea un `<li>` que contenga un `<strong>` con el texto.

**Captura 5:** el cuadro de diálogo con la abreviatura escrita.
**Captura 6:** el resultado.

## Fase 8 · Formateo y comprobación

1. Guarda con `Ctrl+S` y comprueba que Prettier ha ordenado el documento.
2. Pliega todo con `Ctrl+K` `Ctrl+0` y **captura el esqueleto de la página** (captura 7).
3. Comprueba que no hay avisos de HTMLHint. Si los hay, arréglalos.
4. Comprueba que los cuatro enlaces del menú saltan a su sección.

## Qué se entrega

**1. El fichero** `ficha_APELLIDOS.html`.

**2. Un documento PDF** con las siete capturas numeradas y, sobre todo, esta tabla:

| Fase | Qué generé | Abreviatura exacta que usé |
|-----------------|----------------------------------------------|----------------------------------------------|
| 1 | Esqueleto | |
| 2 | Cabecera y menú | |
| 3 | Sección de datos | |
| 4 | Tabla de módulos | |
| 5 | Aficiones | |
| 5 | Formulario de contacto | |
| 6 | Pie | |
| 6 | Párrafos de relleno | |
| 7 | Envolver las cinco líneas | |

**3. Al final del PDF, responde:**

1. ¿Qué fase te ha costado más y por qué?
2. ¿Cuánto tiempo crees que habrías tardado escribiendo todo el HTML a mano?
3. ¿Qué abreviatura te ha parecido más útil de todas las que has usado?
4. ¿Has usado inteligencia artificial? Di dónde y para qué.

::: idea
**Reto opcional, para quien quiera nota.** Consigue generar **toda la estructura de la página**
—header, nav, main con sus cuatro secciones y footer, sin el contenido— con **una única
abreviatura de Emmet**. Si lo logras, pégala en la memoria y cronométrate.

Se puede. Es larga, pero se puede.
:::
