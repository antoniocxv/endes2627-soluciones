# Plantillas de compilacion - ENDES

Con esto se reconstruye el entorno que genera los PDF y los DOCX del modulo,
sin tener que rehacerlo. Los documentos salen identicos a los ya entregados.

## Que hay aqui

| Fichero | Para que |
|---|---|
| `preamble.tex` | Estilo del PDF: colores, cabeceras, titulos y las tres cajas |
| `cajas.lua` | Convierte `::: idea`, `::: practica` y `::: ojo` en cajas de color |
| `build.sh` | Markdown -> PDF |
| `build-docx.sh` | Markdown -> Word |
| `fixtables.py` | Normaliza los separadores de las tablas. Ejecutar antes de compilar |
| `shot.js` | Captura diagramas HTML a PNG con Playwright |
| `word/cajas-docx.lua` | Equivalente de las cajas para Word |
| `word/reference.docx` | Plantilla de estilos de Word |
| `texstub/lmodern.sty` | Parche: evita el fallo "lmodern.sty not found" en Debian |

## Colores

- azulud `#1F4E79` - titulos, cabecera y caja "Idea clave"
- naranja `#C55A11` - subapartados y caja "Para el examen / Ojo"
- verde `#375623` - caja "Practica"

## Como se monta

Copiar esta carpeta a `/home/claude/endes/` y:

```
chmod +x build.sh build-docx.sh
python3 fixtables.py src/documento.md
./build.sh src/documento.md out/documento.pdf "Cabecera derecha"
./build-docx.sh src/documento.md out/documento.docx
```

Las imagenes van en `img/` y se referencian como `img/fichero.png`.
Las rutas dentro de los scripts estan fijadas a `/home/claude/endes`.

## Convenciones de los documentos

- Titulos numerados a mano (`# Parte 1. ...`, `## 1.1. ...`) y compilados SIN
  `--number-sections`, para que el indice no salga con doble numeracion.
- Sin puntos medios ni flechas en los titulares.
- Las imagenes llevan `{width=100%}`.
- Lo dirigido al profesorado va siempre en un documento aparte.
