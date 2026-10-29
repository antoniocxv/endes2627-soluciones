---
title: "Evaluación inicial · Guion del profesorado"
subtitle: "Entornos de Desarrollo · 1.º DAW · Corrección, interpretación y acta"
---

# Qué exige la norma y qué no

La evaluación inicial en la FP andaluza la regula el **artículo 11 de la Orden de 29 de septiembre
de 2010** (BOJA núm. 202, de 15 de octubre de 2010), que regula la evaluación en las enseñanzas de
formación profesional inicial en Andalucía.

Lo que dice, en lo que nos afecta:

| Apartado | Qué establece |
|-----------|---------------------------------------------------------------------------------------------------|
| Art. 11.1 | Durante el **primer mes** desde el comienzo de las actividades lectivas, el profesorado realizará una evaluación inicial para indagar sobre las características y el nivel de competencias del alumnado |
| Art. 11.2 | Se convoca una **sesión de evaluación inicial** del equipo docente, en la que se recaba información de los documentos del alumnado y de su experiencia previa |
| Art. 11.3 | Es el **punto de referencia** para las decisiones del equipo docente. **En ningún caso conlleva calificación** para el alumnado. Los acuerdos se recogen en **acta según el modelo del Anexo V** |

::: ojo
**Tres consecuencias prácticas que conviene tener claras:**

1. **No se puede calificar.** Ni poner nota, ni que influya en la primera evaluación, ni guardarlo
   como «prueba de nivel». Si se califica, se está incumpliendo el artículo 11.3.
2. **No basta con pasar el cuestionario.** La norma pide una *sesión* del equipo docente y un
   *acta*. El cuestionario es el insumo; el acta es lo que exige la norma.
3. **Tiene que servir para algo.** Es «punto de referencia para las decisiones del equipo
   docente»: si el resultado no modifica nada de la programación, no se ha hecho una evaluación
   inicial, se ha hecho un trámite. Al final de este documento hay una tabla de decisiones.
:::

**Plazo para este curso:** el curso empieza el 15 de septiembre de 2026, así que el mes vence el
**15 de octubre de 2026**. Conviene pasarlo en la primera o segunda semana para tener los datos
antes de la sesión de evaluación inicial del equipo docente.

\newpage

# Cómo pasarlo

**Duración: 30 minutos.** Encaja bien en una sesión de 1 hora, dejando 20 minutos de clase normal
después, o al final de la primera sesión larga.

| Parte | Qué mide | Min. |
|----------------|-----------------------------------------------------------------------------|----------------|
| A | Procedencia, experiencia previa y medios disponibles | 6 |
| B | Conocimientos previos, mapeados a los seis RA del módulo | 12 |
| C | Razonamiento y forma de abordar problemas | 8 |
| D | Autopercepción, expectativas y dificultades | 4 |

**Lo que hay que decir antes de repartirlo**, literalmente, porque cambia mucho los resultados:

> «Esto no es un examen. No se califica, no cuenta para la nota y no va a vuestro expediente. Lo
> hago porque me obliga la normativa, sí, pero sobre todo porque necesito saber de dónde partís
> para no dar por sabido lo que no sabéis. Si marcáis "no lo sé" no perdéis nada: al contrario, me
> estáis diciendo exactamente qué tengo que explicar. Lo peor que podéis hacer es adivinar.»

Esa última frase es la importante. Si adivinan, la Parte B no vale nada.

::: idea
**No lo pases el primer día.** El primer día están nerviosos, no se conocen y tienden a quedar
bien. Funciona mucho mejor en la segunda o tercera sesión, cuando ya has dado algo de materia y
han visto que no muerdes.
:::

# Clave de corrección de la Parte B

| Ítem | Correcta | Qué RA explora | Qué significa fallarlo |
|--------|--------------------------------------------|---------------|-------------------------------------------|
| B1 | **b** | RA1 | Normal en quien no ha programado. No es preocupante |
| B2 | **a** | RA1 | Es el concepto central de la UD1. Espera fallos |
| B3 | **b** | RA1 | Si falla mucha gente, la P1.1 del hexadecimal es más necesaria aún |
| B4 | **c** | RA2 | Frecuente confundir IDE con editor. La UD2 lo arregla |
| B5 | **b** | RA3 | Muy revelador: casi nadie ha usado un depurador |
| B6 | **b** | RA4 | Mucha gente contesta «a» confundiendo Git con GitHub |
| B7 | **b** | RA4 | Solo lo sabe quien ha trabajado en equipo con Git |
| B8 | **b** | RA3 | Indicador de si alguien viene de un entorno profesional |
| B9 | **a** | RA4 | La opción «c» es el error clásico: refactorizar no es arreglar |
| B10 | **b** | RA5 | Depende por completo de si han dado POO antes |
| B11 | **b** | RA5 / RA6 | Lo habitual es no haberlo visto nunca |
| B12 | **b** | RA6 | Ídem |
| B13 | Análisis 1 · Diseño 2 · Codificación 3 · Pruebas 4 · Mantenimiento 5 | RA1 | Cuenta como acierto solo si el orden es exacto |
| B14 | — | Transversal | No tiene respuesta correcta: es un dato |

**Puntuación orientativa** (para ti, no para ellos): 1 punto por acierto en B1–B13. Máximo 13.
Las respuestas «No lo sé» no restan y conviene contarlas aparte: **el número de "no lo sé" del
grupo es el dato más útil de toda la prueba.**

\newpage

# Cómo leer los resultados

## Por bloques de conocimiento

Agrupa los aciertos así y calcula el porcentaje del grupo:

| Bloque | Ítems | Unidad afectada |
|---------------------------------------------|---------------------------------|---------------------------------|
| Conceptos de desarrollo | B1, B2, B3, B13 | UD1 |
| Entornos y herramientas | B4, B14 | UD2 |
| Pruebas y depuración | B5, B8 | UD3 |
| Versiones y calidad | B6, B7, B9 | UD4 |
| Modelado | B10, B11, B12 | UD5 y UD6 |

## Semáforo por bloque

| % de aciertos del grupo | Lectura | Qué hacer |
|--------------------------|------------------------|-----------------------------------------------------------|
| Menos del 30 % | Punto de partida cero | Es lo esperable. Dar la unidad completa, sin dar nada por sabido |
| Entre 30 % y 60 % | Grupo desigual | Riesgo alto de aburrir a unos y perder a otros. Prever ampliación y refuerzo |
| Más del 60 % | Ya lo traen | Se puede acelerar y dedicar el tiempo ganado a la parte práctica |

::: ojo
**Lo normal en 1.º de DAW**, por si sirve de referencia: los bloques de modelado (B10–B12) y de
versiones (B6, B7, B9) suelen salir por debajo del 25 %, y el de conceptos (B1–B3) entre el 40 % y
el 60 % según cuánta gente venga de bachillerato de ciencias o de un grado medio.

Si el bloque de versiones sale por encima del 50 %, tienes en clase gente que ya ha trabajado, y
eso cambia la UD4 entera: pasa de enseñar Git a enseñar a trabajar bien con Git.
:::

## Qué mirar en la Parte C

No se puntúa. Se lee buscando tres señales:

| Señal | Qué indica | Dónde se ve |
|----------------------------------------------------|-------------------------------------------|---------------|
| Descompone el problema en pasos antes de programar | Pensamiento algorítmico ya formado | C1 |
| Menciona probar con casos concretos, o «probaría con el año 2000» | Mentalidad de pruebas. Oro puro | C1 y C2 |
| Dice «miraría el código» sin más | Aún no tiene método de depuración | C2 |
| Propone repartirse ficheros o partes distintas | Intuye el problema de la concurrencia | C3 |
| Propone pasarse el archivo por WhatsApp | Es la respuesta más común. Perfecta para abrir la UD4 | C3 |

::: idea
**Guarda las respuestas de C3.** Cuando llegues a Git en la UD4, lee en voz alta (sin nombres) dos
o tres de las que propongan pasarse ficheros por WhatsApp o por correo. La clase entera entiende
para qué sirve un control de versiones en treinta segundos, y lo entiende a partir de sus propias
palabras.
:::

## Qué mirar en la Parte D

- **D1**, la autoevaluación, cruzada con la Parte B: quien se puntúa alto y falla la B suele
  necesitar apoyo temprano; quien se puntúa bajo y acierta suele ser el que menos participa y más
  sabe. Los dos casos merecen una conversación de dos minutos en el pasillo.
- **D3 y D4** son las que de verdad importan para el acta. Ahí salen los problemas de horario,
  de medios y de conciliación.
- **A7 y A8** determinan si puedes mandar trabajo para casa y si tienes que preparar instrucciones
  para dos sistemas operativos.

\newpage

# De los resultados a las decisiones

Esta es la tabla que justifica ante el departamento que la evaluación inicial ha servido para algo.
Rellena la columna de la derecha después de vaciar los datos.

| Si el resultado es… | Decisión que tomo |
|-----------------------------------------------------------------------------|---------------------------------|
| Más del 40 % no ha programado nunca (A2) | |
| Más del 30 % no tiene ordenador propio (A7) | |
| Hay más de dos personas trabajando a jornada completa (A6) | |
| El bloque de conceptos (UD1) sale por debajo del 30 % | |
| El bloque de versiones (UD4) sale por encima del 50 % | |
| El bloque de modelado (UD5–UD6) sale por debajo del 20 % | |
| Nadie ha usado la terminal con soltura (B14) | |
| Aparecen alumnos con perfiles muy desiguales | |

**Decisiones habituales y defendibles**, por si sirven de punto de partida:

- **Si nadie ha usado la terminal**, añadir 1 hora a la UD2 para una sesión de línea de comandos
  básica, restándola del colchón de UD2. Sin eso, la UD4 (Git) se hace cuesta arriba.
- **Si hay mucha desigualdad**, montar las prácticas por parejas mezclando niveles, y preparar un
  «si terminas pronto» en cada práctica. Ya está previsto en la sesión 1 de la UD1.
- **Si hay poca gente con ordenador propio**, todas las entregas tienen que poder hacerse en el
  aula, y no se puede exigir instalar nada en casa.
- **Si hay alumnado trabajando**, revisar las fechas de entrega para que no caigan todas en la
  misma semana, y avisar por escrito del régimen de no asistentes.

# Texto para el acta (Anexo V)

El acta del Anexo V la levanta el tutor en la sesión de evaluación inicial. Esto es lo que puedes
aportar tú como profesor del módulo, para copiar y adaptar:

> **Módulo profesional: Entornos de Desarrollo (0373).**
>
> Se ha realizado una prueba de evaluación inicial de carácter diagnóstico, sin calificación, con
> fecha \_\_/\_\_/2026 y participación de \_\_\_ de los \_\_\_ alumnos y alumnas matriculados.
> La prueba recoge procedencia académica y experiencia previa, un cuestionario de conocimientos
> previos vinculado a los seis resultados de aprendizaje del módulo, tres cuestiones abiertas de
> razonamiento y una autoevaluación de destrezas de partida.
>
> **Resultados generales:** el \_\_\_ % del alumnado declara no haber programado nunca. Los
> bloques con menor nivel de partida son \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ y los de mayor
> nivel \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_. Se detecta un grupo
> \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (homogéneo / desigual) en cuanto a conocimientos previos.
>
> **Medios disponibles:** el \_\_\_ % dispone de ordenador propio; el \_\_\_ % compagina los
> estudios con actividad laboral.
>
> **Decisiones adoptadas para la programación del módulo:**
> 1. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
> 2. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
> 3. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
>
> **Alumnado que requiere seguimiento específico:** se informa al equipo docente de \_\_\_ casos
> por \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (medios, horario laboral, nivel de
> partida), sin que ello conlleve adaptación que afecte a la consecución de los resultados de
> aprendizaje.

::: ojo
La última frase importa: en FP las adaptaciones **no pueden afectar a la consecución de los
resultados de aprendizaje** ni al grado de adquisición de la competencia general del título. Se
adapta el cómo, nunca el qué.
:::

# Después: devolver el resultado

Dedica **diez minutos de clase**, una semana después, a contarle al grupo qué ha salido en
conjunto, sin nombres, y qué vas a cambiar por ello. Tres razones:

1. Cierra el círculo: si les pides datos y no devuelves nada, la próxima vez contestan de cualquier
   manera.
2. Que oigan «el 70 % de la clase no ha programado nunca» tranquiliza a quien creía ser el único.
3. Es la evidencia más limpia de que la evaluación inicial ha tenido efecto sobre la programación,
   que es justo lo que pide el artículo 11.3.

\newpage

# Montarlo en Moodle

El fichero `eval-inicial-moodle.xml` tiene las **34 preguntas** repartidas en cuatro categorías,
listo para importar.

## Importar

1. En tu curso: *Más → Banco de preguntas → Importar*.
2. Formato **Moodle XML**, arrastra el fichero, *Importar*.
3. Se crean cuatro categorías bajo `ENDES - Evaluacion inicial`: A, B, C y D.

## Crear el cuestionario

*Añadir una actividad → Cuestionario*, y luego *Preguntas → Añadir → del banco de preguntas*,
seleccionando las cuatro categorías. Añádelas **en orden A, B, C, D**.

::: ojo
**Los seis ajustes que hay que cambiar sí o sí**, porque son los que hacen que esto cumpla el
artículo 11.3 y no parezca un examen:

| Apartado | Ajuste | Valor |
|------------------------|---------------------------------------------------|-----------------------------------|
| Calificación | **Calificación máxima** | **0** |
| Calificación | Intentos permitidos | 1 |
| Calificación | Método de calificación | Calificación más alta |
| Esquema | Página nueva | Cada 10 preguntas |
| Comportamiento | Cómo se comportan las preguntas | Retroalimentación diferida |
| Revisión | **«Si la respuesta es correcta» y «Puntos»** | **Desmarcar TODO** |

El último es el importante. Las preguntas de las partes A y D no tienen respuesta correcta, así
que Moodle las marca como fallo. Si dejas activada la revisión, el alumnado ve una pantalla roja
llena de errores en preguntas que solo preguntaban si tiene ordenador en casa.

Lo que sí conviene dejar marcado en Revisión es **«Retroalimentación general»**: así, al terminar,
cada uno lee la explicación de los conceptos de la parte B. Convierte el cuestionario en la
primera clase del módulo.
:::

## De dónde sacas los datos después

| Qué quieres | Dónde está |
|----------------------------------------------|----------------------------------------------------------------|
| Qué contestó cada persona | *Resultados → Respuestas*, y **Descargar como Excel** |
| Porcentaje de acierto por pregunta | *Resultados → Estadísticas* |
| Las respuestas abiertas C y D | *Resultados → Respuestas*, columna de cada pregunta |

::: idea
La tabla que descargas de *Respuestas* sustituye a la hoja **Vaciado** del Excel. Pega las
columnas de la parte B en esa hoja y la pestaña **Perfil del grupo** te calcula sola los
porcentajes por bloque y el semáforo.

Si lo haces en papel, rellenas la hoja Vaciado a mano y funciona igual.
:::

## Y una advertencia sobre el anonimato

Un cuestionario de Moodle **no es anónimo**: sabes quién ha contestado qué. Eso es lo que quieres
aquí, porque la parte D te sirve para detectar casos individuales.

Pero díselo. Si les dices «esto es anónimo» y luego comentas en clase algo que solo pudo decir una
persona, has perdido la confianza del grupo para todo el curso. La fórmula que funciona es:
**«sé quién ha contestado qué, lo leo yo solo, y no lo comparto con nadie».**
