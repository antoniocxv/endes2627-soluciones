# ESTADO — ENDES 26/27

> Memoria de trabajo para retomar sesiones con Claude. Al empezar: "lee ESTADO.md".
> Actualizar al final de cada sesión (Hecho / Pendiente / Decisiones).

## Repositorios

| Repo | Visibilidad | Carpeta local | Contenido |
|---|---|---|---|
| `endes2627-soluciones` | Privado | `C:\claude\endes` | **Todo**. Es donde se trabaja |
| `endes2627` | Público | `C:\claude\endes2627` | Solo material del alumnado. Lo genera `publicar.ps1`; no editar a mano |

## Flujo de trabajo (dos PCs)

1. Al empezar: `bajar.ps1`
2. Trabajar en `C:\claude\endes`
3. Al terminar: `subir.ps1 -m "qué he hecho"` → sube el privado y regenera/sube el público

Si se edita el mismo Word en los dos PCs sin sincronizar, hay conflicto (los binarios no se fusionan). Siempre `bajar` antes de tocar nada.

**Poner en marcha el segundo PC (una sola vez):** renombrar la carpeta `C:\claude\endes` que ya exista y ejecutar
`git clone https://github.com/<usuario>/endes2627-soluciones.git C:\claude\endes`.
El público se clona solo la primera vez que se lance `subir.ps1`.

## Estructura

```
00 - General\          programación, calendario, presentación del módulo, diario de sesiones, informe Moodle anterior
UDn - ...\             apuntes (.pdf + .docx) y presentación (.pptx) en la raíz de la unidad
  <actividad>\         una carpeta por sesión/práctica/tarea con todos sus archivos
_curso-anterior\       curso-anterior-2526.zip (recursos del Moodle 25/26). El .mbz (382 MB) solo en local
_fuentes\              .md / .js / .puml de los que se generan PDF, DOCX y PPTX
_plantillas\           entorno de compilación (pandoc + LaTeX). Ver _plantillas\LEEME.md
_publico\README.md     README que se publica en el repo público
_papelera\             local, no se sube (.gitignore)
```

## Qué NO se publica (definido en `publicar.ps1`)

- Carpetas: `_fuentes`, `_plantillas`, `_curso-anterior`, `_papelera`, `_publico`
- Archivos que contengan: `guion del profesorado`, `solucionario`, `solucion de referencia`, `vaciado` (datos del alumnado), `moodle.xml` (llevan respuestas), `Informe-Moodle`, `Diario de sesiones`
- Scripts `.ps1`, `ESTADO.md`, `README.md` privado

**Convención de nombres:** todo lo del profesor debe llevar `(guion del profesorado)` o `solucionario` en el nombre para que no se publique. Si se crea otro tipo de archivo privado, añadir su patrón a `$xf` en `publicar.ps1`.

## Contenido por unidad

| UD | Apuntes | Presentación | Actividades |
|---|---|---|---|
| UD1 | ✔ | ✔ (+ v1 antigua) | Sesión 1, Evaluación inicial, Tareas |
| UD2 | ✔ | ✔ | P2.1 VS Code + Python, P2.2 HTML + Emmet, P2.3 IDE en Debian, P2.4 Diagnóstico y tipos de error, Manuales GitHub (básico y avanzado) |
| UD3 | ✔ | ✔ | — |
| UD4 | ✔ | ✔ | — |
| UD5 | ✔ | ✔ | — |
| UD6 | ✔ | ✔ | — |

## Hecho

- 2026-10-29: material reorganizado por unidades (`ordenar-ud.ps1`, ya en `_papelera`). Word junto a su PDF. Curso anterior comprimido en zip.
- 2026-10-29: creados los repos `endes2627` (público) y `endes2627-soluciones` (privado) y scripts `bajar` / `subir` / `publicar`.

## Pendiente

- Vaciar `_papelera` cuando se revise.
- Decidir si se conserva la presentación UD1 v1.

## Decisiones

- Dos repos: privado completo + público generado (no se puede tener visibilidad por carpeta en GitHub).
- El `.mbz` del curso anterior no se sube (límite de 100 MB de GitHub).
- Material para el alumnado sin notas al profesor; lo del profesor en archivo aparte.
- Desde la sesión de Claude no se pueden ejecutar comandos en el PC: git se lanza con los scripts.
