---
title: "Ejercicios de la sesión 1"
subtitle: "UD1 · Desarrollo del software · Entornos de Desarrollo · 1.º DAW"
---

# Cómo funciona esta hoja

Seis ejercicios cortos repartidos a lo largo de las dos horas, más una práctica de 25 minutos al
final. Ninguno se califica **salvo el E6 y la P1.1**, que se suben a Moodle.

| Ej. | Cuándo | Duración | ¿Se entrega? |
|----------------|----------------------------------------------|---------------------|---------------------------|
| E1 | Al empezar | 5 min | No |
| E2 | Tras las capas | 4 + 2 min | No |
| E3 | Tras las llamadas al sistema | 4 + 2 min | No |
| E4 | Tras programa/aplicación | 3 + 2 min | No |
| E5 | Tras la cadena de compilación | 4 + 2 min | No |
| P1.1 | Última media hora | 25 min | **Sí** |
| E6 | Cierre | 5 min | **Sí** |

\newpage

# E1 · Arranque en frío

**5 minutos. Individual. Sin buscar en internet y sin hablar con nadie.**

Describe en **tres líneas** qué ocurre desde que haces doble clic en el icono de un programa
hasta que aparece su ventana en pantalla.

Vale perfectamente escribir «no tengo ni idea». Esto no se corrige ni se recoge: es una foto de
lo que sabes ahora mismo, y al final de la clase la vas a comparar con lo que sabrás dentro de
dos horas. Guárdala.

\vspace{3.5cm}

# E2 · Clasificar

**4 minutos por parejas + 2 de puesta en común.**

Clasifica cada elemento en **software de sistema**, **software de programación** o **software de
aplicación**. Pon una interrogación al lado de los que no tengas claros: esos son justo los que
vamos a discutir.

| Elemento | Clasificación |
|------------------------------------------------------------------------|--------------------------------------|
| El controlador de la impresora | |
| Google Chrome | |
| Visual Studio Code | |
| La UEFI (lo que antes era la BIOS) | |
| Photoshop | |
| npm | |
| El antivirus | |
| Node.js | |
| El compilador de C | |
| El Buscaminas | |

# E3 · Por qué no arranca

**4 minutos + 2 de puesta en común.**

Te descargas un programa para Windows —un fichero `.exe`— y lo intentas abrir en Linux. No
funciona.

1. Da **dos razones distintas** de por qué no funciona.
2. Di **en qué capa** del sistema está cada una de esas razones.
3. *No vale responder «porque son sistemas operativos distintos»: eso no explica nada.*

**Si acabas pronto:** ¿por qué un fichero `.js` sí se puede ejecutar en Windows y en Linux?

\newpage

# E4 · Programa o aplicación

**3 minutos + 2 de puesta en común.**

Di si cada uno es un **programa** o una **aplicación**, y sobre todo **por qué**.

| Elemento | ¿Programa o aplicación? | Por qué |
|---------------------------------------------------------|------------------------------------|-----------------|
| El comando `ping` | | |
| WhatsApp en el móvil | | |
| Un script que renombra 200 fotos | | |
| Moodle | | |
| El servicio que gestiona la cola de impresión | | |
| Microsoft Office | | |

**Y una última, que es la difícil:** la Moodle del instituto, ¿es software a medida o software
estándar? Justifícalo en dos líneas.

# E5 · Ordena la cadena

**4 minutos + 2 de puesta en común.**

1. Ordena estos nueve elementos tal y como ocurren al compilar un programa en C:

   `hola.s` · `enlazador` · `hola.exe` · `preprocesador` · `hola.o` · `hola.c` ·
   `compilador` · `hola.i` · `ensamblador`

2. ¿En cuál de los cuatro pasos entra el contenido de `stdio.h`?

3. ¿Después de cuál de los cuatro pasos deja el fichero de poder leerse con el Bloc de notas?

4. ¿Cuál de los cuatro pasos **no existe** cuando ejecutas `node hola.js`?

\newpage

# P1.1 · Mirar dentro de un binario

**25 minutos, por parejas. Se entrega en Moodle.**

Un programa no es magia: es un fichero lleno de bytes. Y los primeros bytes de casi cualquier
fichero dicen qué tipo de fichero es. A esos primeros bytes se les llama **firma** o *número
mágico*.

## Preparación

Instala en Visual Studio Code la extensión **Hex Editor** (de Microsoft). Con ella puedes abrir
cualquier fichero con el botón derecho → *Open With…* → *Hex Editor*.

*Alternativa sin instalar nada:* la página `hexed.it`, que trabaja en tu propio navegador y no
sube el fichero a ningún servidor.

## Pasos

1. Crea un fichero `hola.js` con una línea de código. Ábrelo con el editor normal: se lee.
   Ábrelo ahora con el editor hexadecimal y fíjate en la **columna de la derecha**: es el mismo
   contenido, interpretado como texto.

2. Abre ahora un ejecutable de verdad: `C:\Windows\System32\notepad.exe` en Windows, o `/bin/ls`
   en Linux. Anota **los primeros bytes** y qué letras forman en la columna de la derecha.

3. Repite con una imagen `.png`, con un `.pdf` y con un `.zip`. Anota la firma de cada uno.

4. **Busca texto legible dentro del ejecutable.** Baja por el fichero: vas a encontrar nombres de
   funciones, rutas y mensajes de error. Copia dos de ellos.

5. Abre un fichero `.docx` con el editor hexadecimal y mira sus cuatro primeros bytes. ¿Te suena
   de algo esa firma? ¿Qué conclusión sacas?

## Qué se entrega

Un documento con:

| Fichero | Primeros bytes (hex) | Letras que forman | Tamaño |
|--------------------|-------------------------------------|----------------------------------|--------------------|
| | | | |

Cinco ficheros como mínimo, los dos textos que hayas encontrado dentro del ejecutable, y una
conclusión de **tres líneas** respondiendo a esto: si cambio la extensión de un fichero, ¿cambia
el fichero? ¿Cómo sabe entonces el sistema operativo qué tipo de fichero es?

\newpage

# E6 · Relee lo que escribiste hace dos horas

**5 minutos. Se entrega en Moodle.**

1. Saca lo que escribiste en el **E1**, al principio de la clase.

2. Escríbelo otra vez, ahora, con lo que sabes. Usa al menos **tres** de estas palabras:

   *ejecutable · bibliotecas · llamada al sistema · núcleo · formato · memoria*

3. Pon las dos versiones en el mismo documento, una debajo de otra, y súbelo a Moodle.

La diferencia entre las dos versiones es exactamente lo que has aprendido hoy. Guarda el
documento: lo vamos a volver a hacer en la última sesión de la unidad.
