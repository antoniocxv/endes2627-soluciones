---
title: "Instalar un IDE en Debian · Guion del profesorado"
subtitle: "Práctica P2.3 · Reparto, soluciones y rúbrica"
---

# La idea de la práctica

Aparentemente es «instalar un programa». En realidad es **una práctica sobre los seis sistemas de
distribución de software que existen en Linux**, y el IDE es solo la excusa.

Por eso los seis programas están elegidos por su **método de instalación**, no por sus
características, y por eso ninguno es pesado: si el programa diera guerra, la práctica se
convertiría en otra cosa.

| Grupo | Programa | Método | Qué se aprende de verdad |
|-------------|-----------------|--------------------------------|-------------------------------------------------|
| 1 | Geany | `apt` en terminal | El caso base. Repositorios y confianza |
| 2 | Bluefish | Gestor gráfico | Que el ratón hace lo mismo que la terminal |
| 3 | VS Code | `.deb` suelto | Paquetes fuera del repositorio y sus riesgos |
| 4 | VSCodium | Repositorio de terceros | **Claves GPG y firma de paquetes** |
| 5 | Pulsar | AppImage | Software portable sin instalación |
| 6 | Thonny | Flatpak | Empaquetado universal y entornos aislados |

::: idea
**El grupo 4 es el que más aprende** y conviene asignarlo a gente que vaya suelta: entender para
qué sirve la clave GPG es el concepto más valioso de toda la práctica, y el único que tiene que
ver con seguridad.

**Los grupos 1 y 2 son los más cómodos.** Sirven para quien va más justo, pero exígeles a cambio
el apartado «extra» de su ficha, que es donde está la chicha (`apt update` frente a
`apt upgrade`, y qué hace el gestor gráfico por debajo).
:::

\newpage

# Antes de la sesión: lo que hay que resolver

::: ojo
**El problema número uno de esta práctica es el permiso de administrador.** Cuatro de los seis
métodos necesitan `sudo`. Si los equipos del aula están bloqueados, la práctica no se puede
hacer tal cual.

**Tres soluciones, por orden de preferencia:**

1. **Máquina virtual con Debian** en VirtualBox, donde ellos son administradores. Es lo ideal y
   además encaja con el contenido de la UD2 sobre entornos reproducibles.
2. **Reasignar los grupos** a los dos métodos que **no necesitan root**: AppImage (grupo 5) y
   Flatpak con `--user` (grupo 6). Se pierde media práctica.
3. Pedir una contraseña de administrador temporal al coordinador TIC.

Decide esto **antes** de repartir los grupos, no el día de la práctica.
:::

**Lista de comprobación:**

- [ ] Máquina virtual de Debian preparada, con una **instantánea limpia** guardada. Hace falta
      para la fase 6: cada grupo tiene que partir de cero.
- [ ] Comprobar que hay **salida a internet** desde la máquina virtual. Es lo que más falla.
- [ ] Comprobar el espacio libre en disco: entre Flatpak y los dos VS Code se van unos 2 GB.
- [ ] Comprobar si el proxy del centro bloquea las descargas de GitHub (afecta a los grupos 3, 4
      y 5).
- [ ] Decidir la versión de Debian y que **sea la misma para todos**, o los tutoriales no serán
      comparables.

# Reparto en el tiempo

| Sesión | Qué | Duración |
|-------------------|---------------------------------------------------------------------|----------------------|
| 1 | Presentar la práctica, formar grupos, fases 1 y 2 | 1 h |
| 2 | Fases 3 y 4: instalar y documentar | 2 h |
| 3 | Fase 5, redactar el tutorial y cerrarlo | 1 h |
| 4 | **Fase 6: prueba de fuego** + puesta en común | 2 h |

::: ojo
**La fase 6 es la que hace que esta práctica funcione**, y es la primera que se cae cuando vas
mal de tiempo. No la quites: quita antes la exposición de cinco minutos.

Que otro grupo siga tu tutorial delante de ti, y se atasque, enseña más sobre documentación que
cualquier explicación que puedas dar tú.
:::

**Cómo organizar el cruce de la fase 6**, para que nadie pruebe a quien le ha probado:

| Prueba el tutorial de… | El grupo… |
|----------------------------------------------------------------------|----------------------------------------|
| Grupo 1 | Grupo 4 |
| Grupo 2 | Grupo 5 |
| Grupo 3 | Grupo 6 |
| Grupo 4 | Grupo 2 |
| Grupo 5 | Grupo 3 |
| Grupo 6 | Grupo 1 |

\newpage

# Soluciones orientativas

No les des esto. Es para que sepas si lo que entregan tiene sentido y para poder desatascar a un
grupo sin darles la solución entera.

## Grupo 1 · Geany

```
sudo apt update
sudo apt install geany
```

**El extra.** `apt` es la interfaz moderna y pensada para personas; `apt-get` es la antigua,
estable y pensada para scripts; `aptitude` es otra alternativa con resolución de dependencias más
elaborada. Y la que confunde a todos: **`apt update` refresca la lista de paquetes disponibles;
`apt upgrade` instala las actualizaciones**. Sin el primero, el segundo no se entera de nada.

## Grupo 2 · Bluefish

Por *Software de GNOME* o por **Synaptic**, que puede requerir instalarlo antes.

**Lo que tienen que explicar:** el gestor gráfico es una **fachada** sobre el mismo sistema de
paquetes. Pide la contraseña porque instalar afecta a todo el sistema, no solo al usuario, y eso
requiere privilegios de administrador.

## Grupo 3 · Visual Studio Code

Descargar el `.deb` de `code.visualstudio.com` y:

```
sudo apt install ./code_VERSION_amd64.deb
```

**El error que van a cometer seguro:** escribirlo sin `./`. `apt` busca entonces un paquete con
ese nombre en el repositorio y responde que no existe. Tiene que aparecer en su apartado de
problemas: si no aparece, es que han copiado el tutorial de otro sitio.

**El extra.** El `.deb` de Microsoft **añade su propio repositorio** en
`/etc/apt/sources.list.d/vscode.list` (el nombre exacto varía con la versión). Lo hace para que
el editor se actualice después con `apt upgrade` como cualquier otro paquete. Es un detalle
interesante: el método 3 acaba convirtiéndose en el método 4 sin avisar, y eso da para comentario
en la puesta en común.

## Grupo 4 · VSCodium

Los cuatro pasos: descargar la clave GPG del proyecto, guardarla en `/usr/share/keyrings/`,
añadir un fichero en `/etc/apt/sources.list.d/` que apunte al repositorio y referencie esa clave,
`sudo apt update` y `sudo apt install codium`.

**Lo que hay que exigirles que expliquen**, que es el corazón de la práctica: la clave GPG sirve
para **comprobar que los paquetes vienen de quien dicen venir y no han sido manipulados por el
camino**. Sin ella, `apt` avisa de que el repositorio no está firmado y se niega a instalar, o
instala pero sin garantía ninguna. Es exactamente el mismo mecanismo que hace que puedas fiarte
de los paquetes oficiales de Debian.

::: idea
Si un grupo llega aquí, entiende esto y lo explica bien, ya ha justificado la práctica entera.
Vale la pena que lo cuenten ellos en la puesta en común en lugar de contarlo tú.
:::

## Grupo 5 · Pulsar

Descargar el `.AppImage` de `pulsar-edit.dev`, y después:

```
chmod +x Pulsar-VERSION.AppImage
./Pulsar-VERSION.AppImage
```

**Respuestas a sus preguntas:** el programa está **solo en ese fichero**, donde lo hayan dejado.
**No aparece en el menú** de aplicaciones salvo que lo integren a mano. Para «desinstalarlo» se
borra el fichero y ya está. Si lo mueven de carpeta, sigue funcionando: es autocontenido.

`chmod +x` marca el fichero como **ejecutable**. Sin eso, el sistema lo trata como un fichero de
datos cualquiera y no lo arranca. Es la primera vez que se van a topar con los permisos de Linux
y conviene dedicarle dos minutos en la puesta en común.

## Grupo 6 · Thonny

```
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.thonny.Thonny
```

**Avisos:** la primera instalación arrastra un entorno base de bastantes cientos de megas; hay
que reiniciar la sesión para que aparezca en el menú; y con `--user` se puede instalar **sin
sudo**, lo cual es la solución de emergencia si el aula está bloqueada.

**La pregunta buena** (Thonny también está en `apt`): a favor de apt, ocupa mucho menos, está
integrado y lo mantiene Debian. A favor de Flatpak, la versión suele ser **más reciente** —los
paquetes de Debian estable se quedan atrás— y la aplicación corre **aislada** del resto del
sistema. Cualquiera de las dos posturas, bien argumentada, vale.

\newpage

# Tabla de la puesta en común · solución

| Método | ¿sudo? | ¿Se actualiza solo? | ¿Quién garantiza el fichero? | Espacio | Facilidad |
|----------------|--------------|---------------------------|------------------------------|-------------|----------|
| apt (oficial) | Sí | Sí, con `apt upgrade` | **Debian**, que lo revisa y lo firma | Mínimo | 5 |
| Gestor gráfico | Sí | Sí, avisa solo | Debian, igual que el anterior | Mínimo | 5 |
| `.deb` suelto | Sí | **No**, salvo que añada su repositorio | El fabricante. Debian no ha revisado nada | Medio | 4 |
| Repo de terceros | Sí | Sí | El fabricante, **con firma GPG comprobable** | Medio | 2 |
| AppImage | **No** | **No**, a mano | Quien lo publique. Sin comprobación | Alto | 4 |
| Flatpak | No con `--user` | Sí, `flatpak update` | Flathub, con revisión y aislamiento | **El mayor** | 3 |

## La pregunta final: 40 equipos

No hay respuesta única, pero sí hay una **mejor y una peor**, y conviene que salga en el debate:

- **La mejor:** repositorio (oficial o de terceros firmado). Es la única que permite actualizar
  los 40 equipos con un comando y garantiza que todos tengan lo mismo. Si aparece una
  vulnerabilidad, se resuelve en una tarde.
- **La peor:** AppImage. Habría que ir equipo por equipo descargando el fichero nuevo a mano.
  Cuarenta veces, cada vez que salga una versión.
- **Flatpak** es una opción intermedia razonable, y quien la defienda por el aislamiento tiene
  argumentos.

::: idea
Si alguien menciona que eso se puede automatizar con un script o con una herramienta de gestión
de configuración, dale la razón y apúntalo: acaba de nombrar, sin saberlo, la idea que hay detrás
de Ansible y de todo el despliegue automatizado. Es contenido de segundo curso.
:::

\newpage

# Rúbrica analítica · P2.3

Seis criterios, cinco niveles. **Total: 100 puntos.** Nota de grupo, con el ajuste individual que
se explica al final.

## 1 · Instalación conseguida y comprobada (15 p)

| Nivel | Puntos | Descriptor |
|-----------------|------------|---------------------------------------------------------------------------------|
| Excelente | 15 | Programa instalado por el método asignado, funcionando, y captura del fichero de prueba con los tres apellidos visibles |
| Sobresaliente | 12 | Instalado y comprobado; falta algún detalle de la comprobación |
| Bueno | 9 | Instalado, pero la comprobación no demuestra que funcione |
| Aceptable | 6 | Instalado por un método distinto del asignado, sin justificarlo |
| Bajo | 0 | No lo consiguen y no documentan por qué |

## 2 · Calidad del tutorial (25 p)

| Nivel | Puntos | Descriptor |
|---------------|----------|-------------------------------------------------------------------------------------|
| Excelente | 25 | Pasos numerados, comandos copiables como texto, capturas pertinentes y numeradas, requisitos previos claros; se puede seguir sin conocimientos previos |
| Sobresaliente | 20 | Completo y claro; algún paso da por supuesto algo |
| Bueno | 15 | Se entiende, pero faltan capturas o los comandos solo están en imágenes |
| Aceptable | 10 | Lista de comandos sin explicación ni contexto |
| Bajo | 0 | Copiado de internet o ilegible |

## 3 · Problemas documentados (15 p)

| Nivel | Puntos | Descriptor |
|------------------|-------------|-------------------------------------------------------------------------------|
| Excelente | 15 | Recogen los errores con su mensaje literal, explican la causa y la solución, incluidos los errores tontos |
| Sobresaliente | 12 | Dos o más problemas bien documentados |
| Bueno | 9 | Un problema documentado |
| Aceptable | 6 | Mencionan que hubo problemas sin concretar |
| Bajo | 0 | «Todo salió perfecto a la primera» |

## 4 · Las seis preguntas (20 p)

| Nivel | Puntos | Descriptor |
|----------------|-----------|----------------------------------------------------------------------------------|
| Excelente | 20 | Las seis respondidas con criterio; comprueban la desinstalación de verdad y entienden quién garantiza el origen del software |
| Sobresaliente | 16 | Las seis correctas, alguna superficial |
| Bueno | 12 | Cuatro o cinco respondidas |
| Aceptable | 8 | Respuestas copiadas de la documentación sin entenderlas |
| Bajo | 0 | Sin responder |

## 5 · Resultado de la prueba de fuego (15 p)

| Nivel | Puntos | Descriptor |
|----------------------|---------------|-------------------------------------------------------------------------|
| Excelente | 15 | El otro grupo lo instala sin preguntar nada y valora el tutorial con un 5 |
| Sobresaliente | 12 | Lo consigue con una duda menor |
| Bueno | 9 | Lo consigue tras preguntar dos o tres veces |
| Aceptable | 6 | Lo consigue con ayuda importante |
| Bajo | 0 | El otro grupo no consigue instalarlo siguiendo el tutorial |

## 6 · Trabajo en equipo y presentación (10 p)

| Nivel | Puntos | Descriptor |
|----------------|-----------|----------------------------------------------------------------------------------|
| Excelente | 10 | Se ve la rotación de papeles, los tres apellidos aparecen, el nombre de máquina personalizado y el documento está bien presentado |
| Sobresaliente | 8 | Presentación correcta, reparto poco visible |
| Bueno | 6 | Falta alguno de los elementos de identificación |
| Aceptable | 4 | Documento desordenado |
| Bajo | 0 | Sin identificar o entregado por uno solo |

::: ojo
**Ajuste individual.** La nota es de grupo, pero si en la sesión 4 preguntas a un miembro
concreto por un paso del tutorial y no sabe explicarlo, **ese alumno baja un nivel en los
criterios 1 y 2**. Anúncialo al repartir la práctica: el efecto sobre el reparto real del trabajo
es notable.

Basta con una pregunta por persona y treinta segundos: «enséñame en tu tutorial dónde se
comprueba que se ha instalado bien y explícame por qué ese comando».
:::

# Nota sobre los programas elegidos

Están escogidos por método de instalación, pero además todos son **razonables para 1.º de DAW**:
ninguno pasa de 200 MB, ninguno necesita configurar un JDK ni un SDK, y ninguno depende de una
cuenta de usuario para arrancar.

**Los que deliberadamente NO están, por si te lo preguntan:**

| Programa | Por qué no |
|--------------------|------------------------------------------------------------------------------------------|
| Eclipse | Necesita JDK y ocupa cerca de 400 MB. La instalación se come la clase |
| NetBeans | Lo mismo, y además la versión de los repositorios suele ir atrasada |
| IntelliJ / PyCharm | Cerca de 1 GB y piden cuenta para la versión completa |
| Android Studio | Varios GB con el SDK. Impensable en dos horas |
| Brackets | **Descontinuado por Adobe en 2021.** Hay bifurcaciones de la comunidad, pero recomendar software sin mantenimiento a alumnado de primero no es buena idea |

::: idea
Si alguien pregunta por **Brackets** —es un nombre que todavía circula en los apuntes de muchos
centros—, aprovecha para explicar que Adobe lo abandonó y que hay un sucesor mantenido por la
comunidad. Es una conversación de tres minutos que enseña algo importante: **antes de elegir una
herramienta hay que mirar si sigue viva**, y eso se comprueba en su repositorio, viendo la fecha
del último cambio.
:::
