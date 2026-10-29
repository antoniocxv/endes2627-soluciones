---
title: "Instalar un entorno de desarrollo en Debian"
subtitle: "Práctica P2.3 · UD2 · Entornos de Desarrollo · 1.º DAW"
---

# De qué va esta práctica

Cada grupo instala **un entorno de desarrollo distinto** en Debian y escribe un **tutorial paso a
paso** con capturas, de forma que otra persona pueda instalarlo siguiendo vuestras instrucciones
sin saber nada del tema.

::: idea
**Lo que se evalúa no es que consigas instalarlo.** Eso, con suerte, lo consigue cualquiera a la
tercera. Lo que se evalúa es **el tutorial**: que esté completo, que se entienda y que funcione
cuando otro lo sigue.

De hecho, la última fase de la práctica es exactamente esa: **otro grupo va a seguir vuestro
tutorial delante de vosotros**, y lo que le pase a ese grupo cuenta para vuestra nota.
:::

**Grupos de 3 personas. Seis programas distintos.** Cada uno se instala con un **método
diferente**, y esa es la gracia: al final, entre todos, habremos visto las seis formas de
instalar software que existen en Linux.

\newpage

# El reparto

| Grupo | Programa | Qué es | Método de instalación | Peso aprox. |
|--------|-------------------|---------------------------|--------------------------------------|-------------------|
| **1** | **Geany** | Editor ligero con funciones de IDE | `apt` desde el repositorio oficial, **en terminal** | 2 MB |
| **2** | **Bluefish** | Editor orientado a HTML y web | El **mismo** repositorio, pero con el **gestor gráfico** | 1 MB |
| **3** | **Visual Studio Code** | El editor más usado del sector | Fichero **`.deb` descargado suelto** | ~110 MB |
| **4** | **VSCodium** | VS Code sin las partes propietarias | Añadiendo un **repositorio de terceros** | ~120 MB |
| **5** | **Pulsar** | Sucesor del editor Atom | **AppImage**: no se instala, se ejecuta | ~180 MB |
| **6** | **Thonny** | IDE de Python para aprender | **Flatpak** desde Flathub | ~200 MB + entorno base |

::: ojo
**Ninguno de los seis es pesado ni complicado.** Están elegidos a propósito para que la práctica
vaya de **cómo se instala**, no de pelearse con el programa. Si acabáis pronto, en la fase 5 hay
trabajo extra.
:::

## Grupos 3 y 4: atención

Visual Studio Code y VSCodium son **el mismo editor**. VSCodium se compila a partir del mismo
código fuente, pero quitando la telemetría y las partes con licencia propietaria de Microsoft.

En la puesta en común tendréis que explicar entre los dos grupos por qué existen los dos y qué
diferencia hay. Id pensándolo.

\newpage

# Qué tenéis que hacer

## Fase 1 · Preparar el terreno (todos los grupos)

1. Arrancad la máquina virtual con Debian.
2. Abrid una terminal y ejecutad:

```
lsb_release -a
```

Apuntad **qué versión de Debian** tenéis. Todo el tutorial depende de eso: unas instrucciones
para Debian 12 pueden no valer para Debian 13.

3. Actualizad la lista de paquetes:

```
sudo apt update
```

**Captura 1:** la terminal con la versión de Debian y el resultado de `apt update`.

::: ojo
**Muy importante para todas las capturas:** en la terminal tiene que verse el *prompt*, es decir,
la parte de la izquierda que pone `usuario@maquina:~$`. Renombrad la máquina o el usuario con
**el apellido de uno de vosotros** antes de empezar, para que se vea en todas las capturas.

Se hace así, y luego se reinicia:

```
sudo hostnamectl set-hostname debian-APELLIDO
```
:::

## Fase 2 · Buscar la información oficial

**No busquéis «cómo instalar X» en Google y copiéis el primer blog.** La mitad están desfasados y
os van a dar instrucciones que ya no funcionan.

Buscad la **página oficial** del programa y, dentro de ella, su sección de descarga o de
instalación para Linux.

En el tutorial tenéis que poner:

- La **dirección web oficial** del programa.
- La **dirección exacta** de la página de instalación que habéis seguido.
- La **versión** que habéis instalado.
- La **licencia** del programa (libre o propietaria, y cuál).

## Fase 3 · Instalarlo y documentarlo a la vez

Aquí está el trabajo de verdad. **Id capturando mientras instaláis**, no después: si lo dejáis
para el final, tendréis que desinstalarlo y repetirlo todo.

**Repartíos los papeles**, y **rotad en cada paso** para que los tres hagáis de todo:

| Papel | Qué hace |
|---------------------------|-----------------------------------------------------------------------------------|
| **Manos** | Teclea y ejecuta. No hace nada sin decirlo en voz alta |
| **Cámara** | Captura la pantalla en cada paso y numera las capturas |
| **Notario** | Escribe lo que se hace y, sobre todo, **lo que sale mal** |

::: idea
**El papel del notario es el más importante.** Lo que de verdad vale de un tutorial son los
errores: «si aquí te sale este mensaje, es porque te falta tal cosa». Eso es lo que no viene en
ninguna documentación oficial y lo que hace que vuestro tutorial sirva para algo.

Apuntad **todos** los errores, aunque os parezcan tontos. Sobre todo los tontos.
:::

## Fase 4 · Comprobar que funciona

No basta con que el programa arranque. Tenéis que demostrar que **sirve para trabajar**:

1. Abrid el programa.
2. Crear un fichero nuevo llamado `prueba_APELLIDOS.html` con este contenido:

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Prueba de APELLIDOS</title>
</head>
<body>
	<h1>Instalado por APELLIDO1, APELLIDO2 y APELLIDO3</h1>
</body>
</html>
```

3. Guardadlo y abridlo con el navegador.

**Captura final:** el programa abierto con vuestro fichero dentro, donde se vean los apellidos.

## Fase 5 · Las preguntas del tutorial

Al final del documento, contestad a estas seis. **Son la parte que más puntúa**, porque es donde
se ve si habéis entendido qué habéis hecho o solo habéis copiado comandos.

1. **¿De dónde ha salido el programa?** ¿De un repositorio de Debian, de la web del fabricante,
   de otro sitio? ¿Quién responde de que ese fichero sea de fiar?

2. **¿Hace falta ser administrador** (`sudo`) para instalarlo? ¿Por qué sí o por qué no?

3. **¿Dónde se ha instalado?** Buscad la ruta con uno de estos comandos y poned el resultado:

```
which NOMBRE_DEL_PROGRAMA
dpkg -L NOMBRE_DEL_PAQUETE | head -20
```

4. **¿Cómo se actualiza** cuando salga una versión nueva? ¿Solo, con `apt upgrade`, o hay que
   volver a descargarlo a mano?

5. **¿Cómo se desinstala?** Probadlo de verdad, desinstaladlo y volvedlo a instalar siguiendo
   vuestro propio tutorial. *Esta es la mejor forma de comprobar que el tutorial está completo.*

6. **¿Qué ventaja y qué inconveniente** tiene vuestro método frente a los demás? Mirad la tabla
   del reparto para saber qué hacen los otros grupos.

## Fase 6 · La prueba de fuego

En la última sesión, **cada grupo le pasa su tutorial a otro grupo**, que tiene que instalar el
programa siguiéndolo **sin preguntar nada** y partiendo de una máquina limpia.

El grupo que lo prueba rellena esta ficha, que se entrega con la práctica:

| Pregunta | Respuesta |
|-------------------------------------------------------------------------------------|-------------------------|
| ¿Habéis conseguido instalarlo solo con el tutorial? | |
| ¿En qué paso os habéis atascado, si os habéis atascado? | |
| ¿Qué información faltaba? | |
| ¿Qué sobraba? | |
| Del 1 al 5, ¿cómo de claro estaba? | |

\newpage

# Qué se entrega

Un **PDF por grupo** con esta estructura:

| Apartado | Contenido |
|--------------------------------------|------------------------------------------------------------------------|
| Portada | Programa, método, **los tres apellidos** y la versión de Debian |
| Ficha técnica | Web oficial, versión instalada, licencia, tamaño |
| Requisitos previos | Qué hace falta tener antes de empezar |
| **Instalación paso a paso** | Numerado, con los comandos exactos y las capturas |
| Problemas encontrados | Cada error, su mensaje literal y cómo se resolvió |
| Comprobación | La captura del fichero `prueba_APELLIDOS.html` abierto |
| Desinstalación | Los pasos para dejar la máquina como estaba |
| Las seis preguntas | Respondidas |
| Ficha de la prueba de fuego | Rellenada por el grupo que os ha probado |

**Nombre del fichero:** `P2.3_GRUPO_programa.pdf`, por ejemplo `P2.3_G3_vscode.pdf`.

::: ojo
**Sobre los comandos en el tutorial.** Ponedlos como texto que se pueda copiar, **no solo dentro
de una captura de pantalla**. Quien siga el tutorial tiene que poder copiar y pegar el comando;
si solo está en una foto, tendrá que teclearlo mirando la imagen y se equivocará.

Las capturas son para enseñar **qué se ve**, no para transmitir texto.
:::

# Reglas del juego

1. **Nada de copiar tutoriales de internet.** Podéis leerlos para orientaros, pero el vuestro
   tiene que estar escrito por vosotros, con vuestras capturas y vuestra máquina. Se nota
   muchísimo cuando no es así: el nombre de usuario de las capturas no coincide, las versiones no
   cuadran, aparecen pasos de otra distribución.

2. **Se puede usar inteligencia artificial** para entender qué hace un comando, pero hay que
   decirlo al final del documento y **comprobar todo lo que diga**. Con instalaciones de Linux se
   inventa comandos que no existen con bastante frecuencia.

3. **Si algo no funciona, no lo escondáis.** Un tutorial que dice «aquí nos dio este error y lo
   resolvimos así» vale mucho más que uno donde todo sale perfecto a la primera. Nunca sale
   perfecto a la primera.

\newpage

# Ayuda de arranque para cada grupo

Aquí tenéis **la pista mínima** de por dónde empezar. **No son las instrucciones completas**: el
resto lo buscáis vosotros, que de eso va la práctica.

## Grupo 1 · Geany — apt en terminal

El programa está en el repositorio oficial de Debian. Se instala con un solo comando de `apt`.
Averiguad cuál.

**Extra si acabáis pronto:** ¿qué diferencia hay entre `apt install`, `apt-get install` y
`aptitude install`? ¿Y entre `apt update` y `apt upgrade`? Esa última confunde a todo el mundo.

## Grupo 2 · Bluefish — gestor gráfico

Está en el mismo repositorio que Geany, pero vosotros **no podéis usar la terminal para
instalarlo**. Buscad el gestor de software gráfico de vuestro escritorio: según la versión de
Debian será *Software de GNOME*, *Discover* o **Synaptic** (este último puede que tengáis que
instalarlo primero).

**Lo que tenéis que explicar:** habéis hecho exactamente lo mismo que el grupo 1, pero con
ratón. ¿Qué está pasando por debajo? ¿Por qué se necesita la contraseña?

## Grupo 3 · Visual Studio Code — fichero `.deb` suelto

Microsoft publica un fichero `.deb` en su página de descargas. Lo descargáis y lo instaláis.

**Cuidado con esto:** el comando correcto para instalar un `.deb` local es
`sudo apt install ./fichero.deb`, **con el `./` delante**. Si lo escribís sin el punto y la
barra, `apt` pensará que es el nombre de un paquete del repositorio y os dirá que no existe. Es
el error clásico y merece un apartado entero en vuestro tutorial.

**Extra:** después de instalarlo, mirad si se ha añadido solo un repositorio al sistema.
Comprobadlo en `/etc/apt/sources.list.d/`. ¿Por qué creéis que lo hace?

## Grupo 4 · VSCodium — repositorio de terceros

Es el método más largo y el más profesional. Tendréis que:

1. Descargar la **clave GPG** del repositorio y guardarla en el sitio correcto.
2. Añadir el repositorio a la lista de fuentes del sistema.
3. Actualizar la lista de paquetes.
4. Instalarlo como cualquier otro paquete.

**Lo que tenéis que explicar, y es lo importante:** ¿para qué sirve la clave GPG? ¿Qué pasaría si
no la pusierais? Ahí está toda la razón de ser de este método.

## Grupo 5 · Pulsar — AppImage

Un **AppImage** es un único fichero que lleva dentro el programa y todo lo que necesita. No se
instala: se descarga, se le dan permisos de ejecución y se ejecuta.

Vais a necesitar entender qué hace este comando, y explicarlo:

```
chmod +x nombre_del_fichero.AppImage
```

**Lo que tenéis que explicar:** ¿dónde queda el programa? ¿Aparece en el menú de aplicaciones?
¿Cómo se «desinstala»? ¿Qué pasa si movéis el fichero a otra carpeta?

## Grupo 6 · Thonny — Flatpak

**Flatpak** es un sistema de paquetes que funciona igual en cualquier distribución de Linux.
Puede que Debian no lo traiga instalado: entonces vuestro primer paso es instalar el propio
`flatpak`, y después añadir el repositorio **Flathub**.

::: ojo
**Aviso:** la primera aplicación que instaléis con Flatpak descargará también un «entorno base»
que ocupa bastante y tarda un rato. Las siguientes ya no, porque lo reutilizan. Explicad esto en
el tutorial, porque quien lo siga se va a asustar al ver la descarga.
:::

**Lo que tenéis que explicar:** Thonny **también está en el repositorio normal de Debian**.
Entonces, ¿para qué sirve instalarlo por Flatpak? Dad al menos una razón a favor de cada opción.

\newpage

# Puesta en común

En la última sesión, cada grupo expone **cinco minutos** y entre todos rellenamos esta tabla en
la pizarra. Copiadla también en vuestra entrega:

| | ¿Necesita sudo? | ¿Se actualiza solo? | ¿Quién garantiza el fichero? | Espacio | Facilidad (1-5) |
|--------------------|-----------------|--------------------|--------------------------|-----------|-----------------|
| apt (repo oficial) | | | | | |
| Gestor gráfico | | | | | |
| `.deb` suelto | | | | | |
| Repo de terceros | | | | | |
| AppImage | | | | | |
| Flatpak | | | | | |

Y contestamos entre todos a la pregunta final:

> **Eres el responsable informático de una empresa con 40 equipos con Linux. ¿Qué método
> elegirías para instalar el editor que va a usar todo el mundo, y por qué?**

::: idea
No hay una respuesta única, pero sí hay respuestas mejores que otras. Pensad en qué pasa dentro
de dos años, cuando salga una versión con un fallo de seguridad y haya que actualizar los 40
equipos.
:::
