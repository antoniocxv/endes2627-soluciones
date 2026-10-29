#!/bin/bash
set -e
pandoc "$1" -o "$2" \
  --lua-filter=/home/claude/endes/word/cajas-docx.lua \
  --resource-path=/home/claude/endes \
  --reference-doc=/home/claude/endes/word/reference.docx \
  -V lang=es-ES -M toc-title="Índice" --toc --toc-depth=2 --highlight-style=tango
