#!/bin/bash
# build.sh fichero.md salida.pdf "Cabecera derecha"
set -e
IN="$1"; OUT="$2"; HDR="${3:-}"
TMP=$(mktemp /tmp/preambleXXXX.tex)
sed "s|HEADERRIGHT|${HDR}|" /home/claude/endes/preamble.tex > "$TMP"
export TEXINPUTS="/home/claude/endes/texstub:$TEXINPUTS"
pandoc "$IN" -o "$OUT" \
  --pdf-engine=xelatex \
  -H "$TMP" \
  --lua-filter=/home/claude/endes/cajas.lua --resource-path=/home/claude/endes \
  -V mainfont="Carlito" -V monofont="DejaVu Sans Mono" -V fontsize=11pt \
  -V geometry:"a4paper,top=2.4cm,bottom=2.2cm,left=2.3cm,right=2.3cm" \
  -V colorlinks=true -V linkcolor=azulud -V toccolor=azulud -V urlcolor=naranja \
  -V lang=es-ES --highlight-style=tango --toc --toc-depth=2
rm -f "$TMP"
