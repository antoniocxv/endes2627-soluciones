---
title: "Qué había realmente en el Moodle"
subtitle: "Análisis de la copia de seguridad del curso ENDES 2025/26 · IES Doñana"
---

# Resumen en una página

He abierto la copia de seguridad `copia_de_seguridad-moodle2-course-11241-endes-20260915-2108-nu.mbz`
(365 MB) y la he vaciado entera. Esto es lo que hay y lo que implica para el material que ya
tenemos preparado.

| Dato | Valor |
|-----------------------------|---------------------------------------------------------------------------------|
| Curso | Entornos de desarrollo (ENDES), id 11241 |
| Versión de Moodle | 4.5.2+ |
| Secciones | 8 (portada + 7 unidades/bloques) |
| Elementos del curso | 151 |
| Ficheros adjuntos | 82 (373 MB, de los cuales 307 MB son dos instaladores de Code::Blocks) |
| Preguntas en el banco | **337**, repartidas en 12 categorías |
| Autoría del material | Gloria García Domínguez (curso 25/26) sobre presentaciones de Ignacio Díaz Cano (2023/24) |

::: idea
**Lo importante no es el índice, son tres discrepancias.** El Moodle real no coincide ni con la
programación didáctica que me diste ni, en parte, con el material que hemos construido. Están
detalladas en el apartado «Las tres discrepancias» y hay que decidir sobre ellas antes de seguir.
:::

\newpage

# Las tres discrepancias

## 1. El orden de las unidades

La presentación de inicio de curso que subió la profesora anterior fija este orden y estas horas:

| Ev. | UD | Título | Horas |
|------------|------------|------------------------------------------------------------------------|--------------|
| 1.ª | UD1 | Elementos del desarrollo software | 10 h |
| 1.ª | UD2 | Entornos integrados de desarrollo | 23 h |
| 2.ª | UD3 | Diseño y realización de pruebas. Desarrollo guiado por pruebas | 21 h |
| 2.ª | UD4 | Optimización, versionado y documentación | 23 h |
| 3.ª | UD5 | Elaboración de diagramas de clases | 10 h |
| 3.ª | UD6 | Elaboración de diagramas de comportamiento | 12 h |

Total: **99 h**. Nuestro diario reparte 89 h hasta el 30 de abril (de las 96 h que dice la
temporalización de la programación) y coloca **UD4 antes que UD3**, siguiendo la programación
heredada. El Moodle demuestra que en la práctica se dio **UD3 antes que UD4**.

::: ojo
Las dos unidades caen dentro de la **misma evaluación**, así que el orden no afecta a las actas.
Es una decisión puramente didáctica. Argumento a favor de cada opción:

- **UD3 → UD4** (lo que se hizo): las pruebas se dan cuando el alumnado todavía tiene fresco el
  IDE y el proyecto de UD2; la refactorización llega después y se puede justificar con «refactorizo
  porque tengo pruebas que me protegen», que es el argumento correcto de Fowler.
- **UD4 → UD3** (lo que tenemos): Git y la documentación son herramientas transversales y cuanto
  antes se usen, mejor; el alumnado entrega con Git desde noviembre.

Mi recomendación: **cambiar a UD3 → UD4**. El vínculo «pruebas primero, refactorizo después» es
conceptualmente más sólido y coincide con lo que ya se dio en el centro. Git no hace falta moverlo
a UD4: en el Moodle real Git se daba **dentro de UD2** (la segunda parte del temario de UD2 es
íntegramente Git y GitHub), que es también donde lo tenemos nosotros.
:::

## 2. La fórmula de evaluación

Aquí hay un choque directo. La presentación que se dio a los alumnos en clase dice:

| Elemento | Regla del Moodle |
|-------------------------------------------|-------------------------------------------------------------------|
| Nota de cada UD | Cuestionarios teóricos × 0,7 + Prácticas × 0,3 |
| Mínimo por elemento | **4** en cada cuestionario y en cada práctica |
| Mínimo por bloque | Media aritmética de 5 en teoría **y** en práctica |
| Peso dentro de la 1.ª ev. | UD1 = 0,43 · UD2 = 0,57 |
| Peso dentro de la 2.ª ev. | UD3 = 0,57 · UD4 = 0,43 |
| Peso dentro de la 3.ª ev. | UD5 = 0,47 · UD6 = 0,53 |
| Nota final del módulo | 1.ª ev × 0,28 + 2.ª ev × 0,42 + 3.ª ev × 0,30 |

La programación didáctica, en cambio, habla de **evaluación por resultados de aprendizaje**, con
los seis RA al 16,66 % cada uno, y de un mínimo del 70 % de actividades entregadas por unidad.
Son dos sistemas distintos: uno pondera evaluaciones, el otro pondera RA.

::: ojo
**Esto hay que aclararlo antes del primer día**, porque es lo que se le dice al alumnado en la
diapositiva de evaluación y es lo que se puede reclamar. La presentación de primer día que
preparamos usa el sistema de la **programación** (RA al 16,66 %). Si el departamento sigue usando
el sistema del Moodle (70/30 y pesos por evaluación), hay que rehacer las diapositivas 6, 7 y 8.

Además, las dos reglas no son equivalentes: la ponderación 0,28 / 0,42 / 0,30 por evaluación hace
que la segunda evaluación valga casi la mitad del módulo, mientras que por RA cada unidad vale
exactamente lo mismo. Con notas dispares, la nota final cambia.
:::

## 3. El stack tecnológico

El curso anterior era **multilenguaje y bastante antiguo**:

| Unidad | Herramientas que aparecen en el Moodle |
|-----------------|---------------------------------------------------------------------------------------------|
| UD2 | Code::Blocks 20.03 con MinGW (compilar C++), Eclipse, NetBeans 8, PHPStorm |
| UD3 | JUnit 4/5, TestNG, pytest, JaCoCo (plugin de NetBeans 8) |
| UD4 | Javadoc, Sphinx + reStructuredText, Epydoc, CVS, Subversion, refactorización en Python |
| UD5–UD6 | Visual Paradigm |

Nuestro material usa **VS Code + Node.js + Jest + GitHub**, que es lo que decidiste. No hay que
cambiarlo: para 1.º DAW, cuyo ciclo es de desarrollo web, es mucho más coherente que compilar C++
en Code::Blocks o instalar plugins de NetBeans 8 (versión de 2014, descatalogada).

::: idea
Dos cosas del stack anterior sí merecen recuperarse, y las he incorporado a la lista de ajustes:

1. **Visual Paradigm** para UD5 y UD6. Es el estándar de facto en FP, tiene licencia de comunidad
   gratuita y todos los enunciados de ejercicios de UML del Moodle lo presuponen. Nuestro material
   propone PlantUML; lo razonable es dar **las dos**: PlantUML para «diagramas como código» y
   Visual Paradigm porque es lo que el alumnado se va a encontrar y lo que pide el enunciado.
2. **Un segundo lenguaje para refactorización**. Los ejercicios de refactorización del Moodle son
   `.py` y son buenos. Se pueden reutilizar tal cual como ejercicios extra.
:::

\newpage

# Lo que se recupera y ya puedes usar

## Ficheros

He reconstruido el árbol de ficheros con sus nombres originales en la carpeta
`material/moodle-anterior/`, organizado por sección y por actividad. Los 72 ficheros recuperados
incluyen:

| Categoría | Qué hay |
|----------------------------------|----------------------------------------------------------------------------|
| Temario de la profesora | `Presentacion_UD1` a `Presentacion_UD4_p2` (PDF de diapositivas) |
| Apuntes de UML | UD5 (55 pág.) y UD6 (40 pág.), bien hechos y reutilizables |
| Enunciados de proyecto | UD2 GitHub, UD4 Refactorización, UD5 y UD6 UML |
| **Rúbricas** | Proyecto de refactorización y proyecto de UML |
| Exámenes reales | Refactorización (Python), recuperaciones de UD2/UD4/UD5 |
| Ejercicios con solución | 5 ejercicios de refactorización en Python `ejercicio_N.py` / `solucion_N.py` |
| Bibliografía | Agile Samurai, TDD with Python, Python Testing with pytest, JUnit, TestNG |

No he traído los dos instaladores de Code::Blocks (307 MB entre los dos): no los vas a usar y
ocupan el 84 % de la copia.

## El banco de preguntas: 337 preguntas

Es, con diferencia, lo más valioso de la copia. Está repartido así:

| Categoría | Preguntas | Tema |
|------------------------------------|------------------|--------------------------------------------------------|
| `categoriaPrueba` | 120 | Mezcla: errores, depuración, `assertXXX`, pruebas |
| `Por defecto en EDD` | 119 | UML: clases, asociaciones, multiplicidad |
| `eddTema01` + `Porcent` | 23 | Ciclo de vida, fases |
| `Por defecto en Git` | 17 (×2) | Comandos de Git, ramas, commits |
| `eddTema02` + `Porcent` | 17 | IDE, componentes, control de versiones |
| `eddTema05Porcent` | 14 | Diagramas UML, escenarios |
| `eddTema03Porcent` | 11 | JUnit, herramientas de depuración |
| `EDD Tema 03 Pruebas 2018` | 7 | Caja negra / caja blanca, casos de prueba |
| `eddTema06Porcent` | 4 | Modelos evolutivos, casos de uso |

::: practica
**Cómo aprovecharlo sin restaurar el curso entero**

Como ya has restaurado uno de los cursos, el banco de preguntas está en tu Moodle. Para llevártelo
a tu curso de este año sin arrastrar el resto:

1. En el curso restaurado: *Más → Banco de preguntas → Exportar*.
2. Formato **Moodle XML**, selecciona la categoría y exporta.
3. En tu curso nuevo: *Banco de preguntas → Importar*, formato Moodle XML.

Revisa antes de usarlas: hay categorías duplicadas (`Por defecto en Git` aparece dos veces) y
preguntas con enunciados truncados del tipo «¿fase pruebas:?», que son de un banco antiguo
importado de otro centro y están mal redactadas. Las de UML y las de Git están bien.
:::

\newpage

# Calendario real de entregas del curso anterior

Sirve como referencia de ritmo. Fechas tomadas de las tareas del Moodle:

| Fecha | Entrega |
|----------------------------|----------------------------------------------------------------------------------|
| 21/10 | Actividad 1.1 — Algoritmos de ordenación |
| 07/11 | Actividad 1.2 — Cuestiones |
| 01/12 | Actividad 2.1 — Tutorial de instalación de un IDE |
| 05/12 | Actividad 2.2 — Compilar en Code::Blocks |
| 11/12 | Proyecto UD2 — GitHub |
| 17/01 | Actividad 4.1 — Documentación del software |
| 11/03 | Actividad 4.2 — Refactorización |
| 26/03 | Examen de refactorización |
| 06/04 | Proyecto UD4 — Refactorización |
| 20/02 – 09/03 | UD5 — Ejercicios 1 a 6 de diagramas de clases |
| 16/03 | Examen UD5 |
| 23/03 | Proyecto UD5 |
| 10/04 – 20/04 | UD6 — Ejercicios 1 a 6 de casos de uso |
| 04/05 | Proyecto UD6 |
| 08/05 | Examen UD6 |
| 18/06 | Recuperaciones de junio (UD2 Git, UD4 Refactorización, UD5 UML) |

::: ojo
Fíjate en el desfase: las fechas de UD5 y UD6 son de **febrero a mayo**, no de abril a junio. En la
práctica el curso anterior iba más adelantado de lo que dice su propio cronograma, porque UD3 y UD4
se solaparon. Nuestro diario es más realista, pero conviene tenerlo presente: **UD6 se queda corta**
si no se recorta en UD2.
:::

# Ajustes que propongo al material que ya tenemos

| # | Ajuste | Afecta a |
|---------|---------------------------------------------------------------------|--------------------------------|
| 1 | Invertir el orden: UD3 (pruebas) antes que UD4 (optimización) | Diario, portadas de UD3 y UD4 |
| 2 | Decidir el sistema de evaluación y rehacer las diapositivas 6-8 | Presentación de primer día |
| 3 | Añadir Visual Paradigm junto a PlantUML en UD5 y UD6 | UD5, UD6 |
| 4 | Incorporar los 5 ejercicios de refactorización en Python como práctica extra | UD4 |
| 5 | Reutilizar las rúbricas de proyecto de UD4 y UD5 (están bien hechas) | UD4, UD5 |
| 6 | Importar el banco de preguntas de UML y de Git | Moodle |
| 7 | Mantener el glosario por unidad: el curso anterior tenía uno por UD y es buena idea | Moodle |

::: idea
**Lo que NO hay que copiar del curso anterior:** Code::Blocks y la compilación de C++ en 1.º DAW,
NetBeans 8 con el plugin de JaCoCo (software de 2014 sin mantenimiento), CVS y Subversion como
contenido evaluable (mención histórica de dos minutos y a Git), y los cuestionarios con enunciados
del tipo «¿fase pruebas:?», que no se entienden.
:::

\newpage

# Índice completo del curso anterior

Lo que sigue es el volcado literal de las 8 secciones del Moodle, en el orden en que las veía el
alumnado.


## Sección 0 · Sección general (portada del curso)

| Tipo | Elemento |
|----------------------------|----------------------------------------------------------------------------------|
| Archivo | Presentación ENDES 25/26 |
| Glosario | Glosario general del módulo |
| Tarea | JUNIO Examen Recuperación UD2 GIT |
| Tarea | JUNIO Examen Recuperación UD4 Refactorización |
| Tarea | JUNIO Examen Recuperación UD5 UML |
| Foro | Avisos |

## Sección 1 · UD1: Elementos del desarrollo software

| Tipo | Elemento |
|-------------------------------|-------------------------------------------------------------------------------|
| Glosario | Glosario unidad 1 |
| Archivo | Temario. UD 1 |
| Rótulo | Recursos adicionales de la Unidad Didáctica 1 |
| Archivo | Introducción a la Ingeniería del Software |
| Archivo | Agile Samurai. Libro de Consulta. No para estudio. |
| Enlace | Scrum. Lista de Reproducción |
| Enlace | Guía fundamental de Scrum |
| Rótulo | Actividades evaluables de la Unidad Didáctica 1 |
| Tarea | Actividad 1.1. Algoritmos (Proyecto) |
| Tarea | Actividad 1.2. Cuestiones |
| Cuestionario | Cuestionario UD 1 |
| Cuestionario | Cuestionario UD 1 Recuperación |

## Sección 2 · UD 2: Entornos integrados de desarrollo

| Tipo | Elemento |
|----------------------------|----------------------------------------------------------------------------------|
| Glosario | Glosario unidad 2 |
| Archivo | Temario UD2. Primera parte |
| Archivo | Temario UD2. Segunda parte |
| Rótulo | Actividades evaluables de la Unidad Didáctica 2 |
| Rótulo | Actividad 1 |
| Tarea | Actividad 1: Tutorial de instalación |
| Foro | Foro. Instalación y configuración de un Entorno de Desarrollo |
| Rótulo | Actividad 2 |
| Tarea | Actividad 2. Compilar en Codeblocks |
| Rótulo | Cuestionarios teóricos |
| Cuestionario | Cuestionario UD2. Parte 1 |
| Cuestionario | Cuestionario UD2. Parte 1. Recuperación |
| Cuestionario | Cuestionario UD2. Parte 2 |
| Cuestionario | Cuestionario UD2. Parte 2. Recuperación |
| Rótulo | Proyecto UD2 |
| Tarea | Proyecto UD2: Github |
| Tarea | Prueba práctica presencial: Github_Recuperación |
| Tarea | Prueba práctica presencial: Github_B |
| Tarea | Examen Recuperación UD2 |
| Rótulo | Recursos adicionales UD2 |
| Archivo | Ejercicios practicar Git |
| Enlace | Como trabajar de programador desde casa  |
| Enlace | Programadores en remotor para Silicon Valley |

## Sección 3 · UD 3: Diseño y realización de pruebas. Desarrollo guiado por pruebas

| Tipo | Elemento |
|-------------------------------|-------------------------------------------------------------------------------|
| Rótulo | EJERCICIOS |
| Tarea | UD3 - Actividad 1 |
| Tarea | UD3 - Actividad 2 |
| Archivo | DUAL Actividades |
| Tarea | DUAL Actividades |
| Archivo | Apuntes UD3 |
| Rótulo | Actividad 3.1 |
| Foro | Foro actividad UD3. Creación de pruebas |
| Tarea | Entornos de prueba software |
| Rótulo | Recursos para actividad 3.1 |
| Archivo | Tutorial JUnit |
| Enlace | Guía de JUnit 5 |
| Archivo | JUnit 5 |
| Archivo | Test de Unidad con Pytest |
| Archivo | Tutorial TestNG |
| Enlace | Compile JUnit tests in command line |
| Rótulo | Cuestionarios teóricos (copia) (copia) |
| Cuestionario | Cuestionario UD3 |
| Cuestionario | Cuestionario UD3. Recuperación |
| Rótulo | Recursos Unidad 3 |
| Enlace | Adopt OpenJdk |
| Enlace | Testing Python in Visual Studio Code |
| Archivo | Java Quick Syntax Reference |
| Archivo | Introducción a las pruebas de sistemas de información |
| Archivo | Netbeans 8 CookBook |

## Sección 4 · UD4: Optimización, versionado y documentación

| Tipo | Elemento |
|----------------------------|----------------------------------------------------------------------------------|
| Archivo | Apuntes UD4.1: Documentación y control de versiones |
| Rótulo | Cuestionarios teóricos (copia) (copia) (copia) |
| Cuestionario | Cuestionario UD 4.1 |
| Cuestionario | Cuestionario UD 4.1 (Recuperación) |
| Rótulo | Actividad 4.1 |
| Tarea | Actividad 4.1. - Documentación del software |
| Foro | Foro actividad UD4.1.  Documentación |
| Rótulo | Refactorización |
| Archivo | Apuntes UD4.2: Refactorización |
| Archivo | Refactorización. Control de versiones. Documentación. |
| Enlace | Principios SOLID |
| Enlace | Refactorización en VSCode para Python |
| Archivo | TDD, Unit Testing y Refactorización |
| Enlace | ¿Qué es la programación extrema (XP)? |
| Carpeta | Ejercicios Para Practicar |
| Carpeta | Soluciones Ejercicios Para Practicar |
| Archivo | Ejercicios_Refactorizacion |
| Archivo | Ejercicios_Refactorizacion. Repaso_examen |
| Rótulo | Actividad 4.2. |
| Tarea | Actividad 4.2. |
| Rótulo | Cuestionarios teóricos (copia) (copia) (copia) (copia) |
| Cuestionario | Cuestionario 4.1_4.2(Documentación y refactorización) |
| Rótulo | Examen Refactorización |
| Tarea | EXAMEN Refactorización |
| Tarea | RECUPERACION EXAMEN Refactorización |
| Cuestionario | Cuestionario 4.2. Ejercicio práctico Refactorización |
| Cuestionario | Cuestionario 4.2. Ejercicio práctico Refactorización. Junio |
| Cuestionario | Cuestionario 4.2. Ejercicio práctico Refactorización. Repesca |
| Rótulo | Proyecto Refactorizacion |
| Tarea | Proyecto UD4 Refactorizacion |
| Foro | FORO: elección evaluación refactorización |
| Rótulo | Actividad 4.2 (Tercera evaluación) |
| Foro | Foro actividad UD4.2. Wiki Refactorización (tercera evaluación) |
| Tarea | Actividad Wiki |
| Wiki | Refactorización |

## Sección 5 · UD 4: Documentación

| Tipo | Elemento |
|-------------------|-------------------------------------------------------------------------------------------|
| Rótulo | Documentación del código |
| Archivo | TDD for the Web, with Python, Selenium, Django, JavaScript and pals... |
| Archivo | JaCoCo para Netbeans |
| Archivo | Plugin Netbeans para test de Cobertura: JaCoCo. Para Eclipse |
| Enlace | Documenting Python Code: A Complete Guide |
| Enlace | Generación de Documentación en Java: Javadoc. |
| Enlace | Clases autodocumentadas con restructuredText y Sphinx |
| Enlace | Generar documentación en Pycharm con  Sphinx |
| Enlace | Clases autodocumentadas con Epytext y Epydoc. |
| Enlace | Vídeo: Using Sphinx to Document Python Code |
| Enlace | Vídeo: Python Doc Strings |
| Archivo | Documentación en Python: RestructuredText y Sphinx cheat sheet (chuleta) |
| Carpeta | Documentación en Python |

## Sección 6 · UD5. UML Elaboración de Diagramas de Clases

| Tipo | Elemento |
|-------------------|-------------------------------------------------------------------------------------------|
| Rótulo | APUNTES (copia) |
| Archivo | UD5. UML Elaboración de Diagramas de Clases - Apuntes |
| Rótulo | EJERCICIOS (copia) |
| Tarea | UD5 - Ejercicio 1 - Definición de clases |
| Tarea | UD5 - Ejercicio 2 - Combate de boxeo |
| Tarea | UD5 - Ejercicio 3 - Jerarquías de clases |
| Tarea | UD5 - Ejercicio 4 - Modelado UML con Visual Paradigm |
| Tarea | UD5 - Ejercicio 5 - Burger King |
| Tarea | UD5 - Ejercicio 6 - De Diagrama de Clases a código |
| Rótulo | PROYECTO (copia) |
| Archivo | UD5. UML Elaboración de Diagramas de Clases - Proyecto - Enunciado |
| Archivo | UD5. UML Elaboración de Diagramas de Clases - Proyecto - Rúbrica |
| Archivo | UD5. UML Elaboración de Diagramas de Clases - Proyecto - Ejemplo completo |
| Tarea | UD5. UML Elaboración de Diagramas de Clases - Proyecto - Entrega |
| Rótulo | RECURSOS (copia) |
| Enlace | Visual Paradigm |
| Rótulo | EXAMEN (copia) |
| Tarea | UD5. UML Elaboración de Diagramas de Clases - Examen |
| Tarea | UD5. UML Elaboración de Diagramas de Clases - Recuperación |

## Sección 7 · UD6: UML Elaboración de Diagramas de Casos de Uso

| Tipo | Elemento |
|------------------|--------------------------------------------------------------------------------------------|
| Rótulo | APUNTES |
| Archivo | UD6. UML Elaboración de Diagramas de Casos de Uso - Apuntes |
| Rótulo | EJERCICIOS (copia) |
| Tarea | UD6 - Ejercicios 1 y 2 - Definición de elementos de un diagrama de casos de uso |
| Tarea | UD6 - Ejercicios 3 y 4 - Elaboración de diagramas de casos de uso |
| Tarea | UD6 - Ejercicios 5 y 6 - Elaboración de casos de uso |
| Rótulo | PROYECTO |
| Archivo | UD6. UML Elaboración de Casos de Uso - Proyecto - Enunciado |
| Tarea | UD6. UML Elaboración de Casos de Uso - Proyecto - Entrega |
| Rótulo | RECURSOS |
| Enlace | Visual Paradigm |
| Archivo | Casos de Uso - Plantillas |
| Enlace | Casos de Uso - Vídeo Tutorial UCAM |
| Enlace | Casos de Uso - Vídeo Tutorial UPV |
| Enlace | Casos de Uso - Web Ejemplos |
| Rótulo | EXAMEN |
| Tarea | UD6. UML Elaboración de Casos de Uso - Examen |
| Tarea | UD6. UML Elaboración de Casos de Uso - Recuperación |
