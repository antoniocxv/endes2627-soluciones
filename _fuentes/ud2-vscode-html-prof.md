---
title: "VS Code con HTML y Emmet · Guion del profesorado"
subtitle: "UD2 · Cómo darlo, solucionario y rúbrica"
---

# Cómo repartirlo

| Sesión | Qué se hace | Apartados | Duración |
|---------------|-------------------------------------------------------|--------------------|--------------------|
| A (1 h) | Extensiones, Live Server, atajos, formateo | 1.1 – 1.6 | 1 h |
| B (2 h) | **Emmet**, en el proyector y practicando a la vez | 2.1 – 2.15 | 2 h |
| C (1 h) | Ejercicio de teoría **T2.2** en clase | Parte 3 | 1 h |
| D (2 h) | Ejercicio práctico **P2.2** en el aula | Parte 4 | 2 h + casa |

::: ojo
**La sesión B no se da hablando: se da escribiendo.** Todo el mundo con el editor abierto y un
fichero `prueba.html`. Tú escribes una abreviatura en el proyector, ellos la escriben, pulsan Tab
a la vez y comparan. Emmet no se entiende leyendo una tabla de símbolos: se entiende viéndolo
expandirse.

Reparte la sesión en bloques de cinco minutos: explicas un operador, lo prueban tres veces, y
pasas al siguiente.
:::

## El arranque que funciona

Los primeros cinco minutos de la sesión B, en este orden exacto:

1. «Escribid a mano una lista con cinco elementos. Cronómetro en marcha.» Tardan entre 40 y 90
   segundos, y a alguno se le olvidará cerrar un `li`.
2. Borrarlo todo.
3. «Ahora escribid `ul>li*5` y pulsad Tab.» Tres segundos.
4. Silencio deliberado de dos segundos.
5. «Esto es la clase de hoy.»

No hace falta más motivación que esa.

## Los tres momentos que hay que reservar

| Momento | Cuándo | Por qué |
|------------------------------------|---------------------|-----------------------------------------------------|
| Las etiquetas implícitas | Apartado 2.8 | Que `ul>.elemento` saque `li` les parece brujería |
| **Envolver con abreviatura** | Apartado 2.11 | Es lo más útil y lo que nadie conoce |
| Emmet en CSS | Apartado 2.13 | Dos minutos, pero se acuerdan en la UD de estilos |

::: idea
**El de envolver con abreviatura hazlo con un caso real.** Copia de una web cualquiera el menú de
navegación, pégalo en el editor como texto suelto y conviértelo en un `nav>ul>li*>a[href=#]`
delante de ellos. El efecto es considerable.
:::

\newpage

# Solucionario T2.2

## Bloque A

1. **No.** Emmet viene integrado en VS Code desde 2015 (versión 0.10.6). Las extensiones de Emmet
   que hay en el marketplace son antiguas y **dan conflicto** con la integrada.
2. Dos de estas: recarga automática al guardar · sirve la página por HTTP como un servidor real ·
   las rutas relativas se comportan igual que en producción · se puede abrir desde el móvil con
   la IP del equipo.
3. Al cambiar el nombre de una etiqueta de apertura, cambia sola la de cierre. Evita el error de
   etiquetas descuadradas, que en HTML es el más común y el más difícil de localizar a ojo.
4. **No, se ve exactamente igual.** Al navegador la sangría le da igual. La sangría es para las
   personas: para leer el código y para ver la estructura de un vistazo.
5. Pliega todo el documento. Se usa para comprobar de un vistazo la estructura general de la
   página y detectar anidamientos mal hechos.
6. Dos de: etiqueta sin cerrar · `id` duplicado · imagen sin atributo `alt` · caracteres
   especiales sin escapar. El del `alt` es un requisito de accesibilidad.

## Bloque B · De abreviatura a HTML

| # | Abreviatura | Resultado |
|-----------|---------------------------------------|------------------------------------------------------------|
| 7 | `header>h1+p` | `header` con `h1` y `p` dentro, hermanos |
| 8 | `ul>li*4` | `ul` con cuatro `li` vacíos |
| 9 | `div.tarjeta>h2+p` | `<div class="tarjeta">` con `h2` y `p` dentro |
| 10 | `section#contacto.panel` | `<section id="contacto" class="panel"></section>` |
| 11 | `a[href=... title=...]{Volver}` | `<a href="index.html" title="Portada">Volver</a>` |
| 12 | `ol>li.paso$*3` | `ol` con `li` de clases `paso1`, `paso2`, `paso3` |
| 13 | `(h2+p)*2` | `h2`, `p`, `h2`, `p` · **todos hermanos, sin contenedor** |
| 14 | `table>tr*2>td*3` | `table` con dos `tr`, cada uno con tres `td` |
| 15 | `ul>li{Tema $@-}*3` | Textos «Tema 3», «Tema 2», «Tema 1» · **al revés** |
| 16 | `div>span^p` | `<div><span></span></div>` y `<p></p>` **fuera** del div |

::: ojo
**Las tres que separan notas son la 13, la 15 y la 16.**

- En la **13**, mucha gente pondrá un contenedor alrededor. No lo hay: los paréntesis solo
  agrupan para el `*`, no crean ninguna etiqueta.
- En la **15**, el `$@-` invierte la numeración. Si alguien escribe «Tema 1, 2, 3» no ha leído la
  tabla.
- En la **16** está la clave de todo el bloque: que el `<p>` quede **fuera** del div. Si lo ponen
  dentro, no han entendido el `^`.
:::

## Bloque C · De HTML a abreviatura

| # | Respuesta | También vale |
|--------------|------------------------------------------------|------------------------------------------------|
| 17 | `nav>ul>li*2` | — |
| 18 | `.caja.grande` | `div.caja.grande` |
| 19 | `section#galeria>h2{Galería}` | — |
| 20 | `ul>li.item$*4` | — |
| 21 | `(header>h1)+(footer>p)` | `header>h1^footer>p` |
| 22 | `ul>li*3>a[href=#]{Enlace $}` | `ul>li*3>a[href=#]{Enlace $}` |

En la 18, lo que se pide es «la más corta»: `.caja.grande` son trece caracteres y
`div.caja.grande` dieciséis. Las dos generan lo mismo, pero solo una responde a lo preguntado.

## Bloque D · Razonar

23. Porque Emmet mira **el contexto**: si el padre es `ul` u `ol`, la etiqueta implícita es `li`;
    si es `table` o `tbody`, es `tr`; si es `tr`, es `td`; si es `select`, es `option`. En
    cualquier otro caso, `div`.

24. Las dos salen de un nivel de anidamiento. `^` sube uno (`^^` dos, y así); los paréntesis
    delimitan un bloque cerrado. Ejemplo equivalente: `div>p^section` y `(div>p)+section` dan lo
    mismo. **Se acepta cualquiera de las dos preferencias si está razonada**, pero la respuesta
    buena menciona que los paréntesis se leen mejor cuando hay varios niveles.

25. Seleccionar las siete líneas → `Ctrl+Mayús+P` → *Emmet: Wrap with Abbreviation* → escribir
    `ul>li*` → Enter. **La clave es el asterisco sin número**: significa «tantos como líneas
    haya». Si escriben `li*7` también funciona, pero han entendido menos.

26. **Por los espacios.** Emmet no admite espacios en la abreviatura salvo dentro de `[ ]` y de
    `{ }`.

27. Porque el atributo `lang` le dice al navegador y sobre todo **a los lectores de pantalla** en
    qué idioma está el texto. Con `lang="en"`, un lector de pantalla pronuncia el español con
    fonética inglesa y se vuelve incomprensible. Es un requisito de accesibilidad (criterio WCAG
    3.1.1). Se arregla de forma permanente con `emmet.variables` en la configuración.

28. Abierta. **Respuestas de nivel alto** reconocen que tiene parte de razón —hay que saber qué
    HTML estás generando, y Emmet no te lo enseña— pero distinguen entre *aprender el lenguaje* y
    *producir código*: Emmet no escribe nada que tú no le hayas dicho, y de hecho exige conocer
    bien la estructura para poder describirla. Además elimina la clase de error que no aporta
    nada al aprendizaje: etiquetas sin cerrar.

    **Respuestas de nivel bajo:** «es más rápido» y punto.

\newpage

# Solucionario P2.2 · las abreviaturas

Todas estas están comprobadas y producen exactamente lo que pide el enunciado.

**Fase 1 · Esqueleto**

```
!
```

**Fase 2 · Cabecera y menú** — una sola abreviatura

```
header>h1{Ficha de APELLIDOS}+nav>ul>li*4>a[href=#seccion$]{Enlace $}
```

Y luego cambian los cuatro textos y los cuatro destinos a mano. También es válido escribir los
cuatro enlaces literales dentro de la abreviatura, pero es más largo.

**Fase 3 · Datos**

```
section#datos>h2{Mis datos}+dl>(dt+dd)*4
```

**Fase 4 · Tabla** — las dos formas son correctas

```
section#modulos>h2{Modulos}+table>(thead>tr>th*3)+(tbody>tr*4>td*3)
```

```
section#modulos>h2{Modulos}+table>thead>tr>th*3^^tbody>tr*4>td*3
```

**Fase 5 · Aficiones**

```
section#aficiones>h2{Aficiones}+ul>li*5
```

**Fase 5 · Formulario**

```
section#contacto>h2{Contacto}+form[action=# method=post]>(label[for=nombre]{Nombre}+input:text#nombre)+(label[for=correo]{Correo}+input:email#correo)+(label[for=mensaje]{Mensaje}+textarea#mensaje)+button[type=submit]{Enviar}
```

**Fase 6 · Pie y relleno**

```
footer>p{Pagina de APELLIDOS - 1.o DAW - curso 2026/2027}
```

```
section>p*3>lorem8
```

**Fase 7 · Envolver**

```
ul>li*>strong
```

**El reto opcional** — toda la estructura en una sola abreviatura:

```
(header>h1{Ficha de APELLIDOS}+nav>ul>li*4>a[href=#])+(main>(section#datos>h2)+(section#modulos>h2)+(section#aficiones>h2)+(section#contacto>h2))+(footer>p)
```

::: idea
**Por qué el reto solo sale con paréntesis.** El intento natural es usar `^^^` para salir del
`header` y llegar al nivel del `main`, y **no funciona**: se queda dentro. Quien lo intente con
`^` va a pelearse un rato y luego va a entender, sin que nadie se lo explique, por qué los
paréntesis son mejores.

Es el mejor argumento posible a favor del apartado 2.3 de la guía, y por eso el reto está puesto.
:::

## Los tres fallos que vas a ver en las entregas

| Fallo | Qué indica | Cómo se detecta |
|---------------------------------------------------|-----------------------------|------------------------------|
| El HTML está perfecto pero la tabla de abreviaturas está vacía o es genérica | Lo escribió a mano o lo copió | Pregúntale por la fase 4 en voz alta |
| Las abreviaturas de la tabla no generan lo que hay en el fichero | Las escribió después, de memoria | Pégalas en tu editor y expándelas |
| La captura 2 (antes de pulsar Tab) no existe | Se saltó el proceso | Es obligatoria, y por eso está |

::: ojo
**La captura 2 es la que hace honesta la práctica.** Pedir la pantalla justo *antes* de expandir
obliga a pasar por el proceso. Insiste en ella al mandar la tarea.
:::

\newpage

# Rúbrica analítica · P2.2

Siete criterios, cinco niveles. **Total: 100 puntos.**

## 1 · Entorno y Live Server (10 p)

| Nivel | Puntos | Descriptor |
|-----------------|------------|----------------------------------------------------------------------------------|
| Excelente | 10 | Captura 1 con editor y navegador a la vez y la dirección `127.0.0.1` visible; se aprecia el flujo de trabajo a dos paneles |
| Sobresaliente | 8 | Captura correcta con la dirección de Live Server |
| Bueno | 6 | Usa Live Server pero la captura no lo demuestra bien |
| Aceptable | 4 | Abre la página con `file://` |
| Bajo | 0 | No documenta la fase |

## 2 · Uso real de Emmet (25 p)

| Nivel | Puntos | Descriptor |
|---------------|-----------|------------------------------------------------------------------------------------|
| Excelente | 25 | Las nueve abreviaturas de la tabla son correctas y generan exactamente el HTML entregado; incluye las capturas de antes y después de expandir |
| Sobresaliente | 20 | Las nueve abreviaturas correctas; falta alguna captura del proceso |
| Bueno | 15 | Siete u ocho abreviaturas correctas |
| Aceptable | 10 | La mitad de la tabla, o abreviaturas que no generan lo entregado |
| Bajo | 0 | Tabla vacía, genérica, o evidencia de HTML escrito a mano |

## 3 · Estructura de la página (20 p)

| Nivel | Puntos | Descriptor |
|-----------------|------------|---------------------------------------------------------------------------------|
| Excelente | 20 | Las ocho fases completas, etiquetas semánticas correctas, anidamiento impecable y los enlaces del menú funcionando |
| Sobresaliente | 16 | Las ocho fases; algún detalle menor de anidamiento |
| Bueno | 12 | Falta una fase o los enlaces del menú no saltan |
| Aceptable | 8 | Faltan dos o más fases |
| Bajo | 0 | Página incompleta o que no abre |

## 4 · Dominio de las abreviaturas avanzadas (20 p)

| Nivel | Puntos | Descriptor |
|----------------|-----------|-----------------------------------------------------------------------------------|
| Excelente | 20 | Tabla en una sola abreviatura, formulario completo en una sola, *wrap with abbreviation* con `li*` sin número, y `lorem` bien usado |
| Sobresaliente | 16 | Tres de esas cuatro |
| Bueno | 12 | Dos de las cuatro |
| Aceptable | 8 | Solo usa `>`, `+` y `*` |
| Bajo | 0 | No usa numeración, agrupación ni envolver |

## 5 · Formateo, validación y accesibilidad (10 p)

| Nivel | Puntos | Descriptor |
|------------------|-------------|-------------------------------------------------------------------------------|
| Excelente | 10 | Prettier activo, sin avisos de HTMLHint, `lang="es"`, `title` correcto y captura del documento plegado |
| Sobresaliente | 8 | Sin avisos y con `lang="es"`; falta la captura del plegado |
| Bueno | 6 | Queda algún aviso sin resolver |
| Aceptable | 4 | Sangría desordenada o `lang="en"` sin cambiar |
| Bajo | 0 | Ni formatea ni valida |

## 6 · Reflexión final (10 p)

| Nivel | Puntos | Descriptor |
|----------------------|---------------|-------------------------------------------------------------------------|
| Excelente | 10 | Las cuatro respuestas, con criterio propio y ejemplos de su propia práctica |
| Sobresaliente | 8 | Las cuatro respuestas correctas pero genéricas |
| Bueno | 6 | Dos o tres respuestas |
| Aceptable | 4 | Respuestas de una línea sin contenido |
| Bajo | 0 | Sin reflexión |

## 7 · Identidad y presentación (5 p)

| Nivel | Puntos | Descriptor |
|-----------------|------------|---------------------------------------------------------------------------------|
| Excelente | 5 | Apellidos en el nombre del fichero, el `title`, el `h1` y el `footer`; PDF ordenado con las siete capturas numeradas |
| Sobresaliente | 4 | Apellidos en los cuatro sitios, presentación mejorable |
| Bueno | 3 | Falta en uno de los cuatro |
| Aceptable | 2 | Solo en el nombre del fichero |
| Bajo | 0 | Sin identificar |

**Reto opcional:** hasta **+5 puntos** sobre la nota final si consigue la estructura completa en
una sola abreviatura y la pega en la memoria. No se resta a nadie por no hacerlo.

::: ojo
**Los criterios 2 y 4 suman 45 puntos**, y es a propósito: son los que miden si han usado la
herramienta o han escrito HTML a mano y luego han rellenado la tabla. Lo demás es contexto.

Igual que en la P2.1, díselo antes de empezar: **una página perfecta sin la tabla de abreviaturas
no llega al 5**.
:::

# Rúbrica T2.2

El ejercicio de teoría se corrige por puntos, no por rúbrica, porque las respuestas son cerradas:

| Bloque | Preguntas | Puntos cada una | Total |
|-----------------------------------|-----------------------|--------------------------------|--------------------|
| A · Entorno | 1 – 6 | 0,4 | 2,4 |
| B · A HTML | 7 – 16 | 0,25 | 2,5 |
| C · A abreviatura | 17 – 22 | 0,35 | 2,1 |
| D · Razonar | 23 – 28 | 0,5 | 3,0 |
| | | **Total** | **10** |

Las de razonar valen el doble que las mecánicas a propósito, y la 28 —la del compañero que dice
que Emmet es para vagos— es la que mejor distingue a quien ha entendido la herramienta de quien
se ha aprendido la tabla de símbolos.

# Antes de la clase

- [ ] Comprobar que **Live Server** se puede instalar en los equipos del aula.
- [ ] Comprobar que el cortafuegos del centro no bloquea el puerto **5500**. Si lo bloquea, usar
      **Live Preview** de Microsoft, que va por dentro de VS Code.
- [ ] Tener un fichero `prueba.html` vacío listo en el proyector para la sesión B.
- [ ] Tener copiado un menú de navegación de una web real, como texto suelto, para la demostración
      de *envolver con abreviatura*.
- [ ] Crear las dos tareas en Moodle **con la rúbrica puesta** antes de mandarlas.
