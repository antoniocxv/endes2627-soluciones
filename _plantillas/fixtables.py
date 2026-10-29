#!/usr/bin/env python3
"""Normaliza el ancho de los separadores de las tablas Markdown."""
import sys, io, re
def fix(path):
    s = io.open(path, encoding='utf-8').read().split('\n')
    out = []
    for i, line in enumerate(s):
        if re.match(r'^\s*\|[\s:|-]+\|\s*$', line) and '-' in line and i > 0 \
           and s[i-1].strip().startswith('|'):
            ncols = s[i-1].count('|') - 1
            if ncols > 0:
                out.append('|' + '|'.join(['-' * 20] * ncols) + '|')
                continue
        out.append(line)
    io.open(path, 'w', encoding='utf-8').write('\n'.join(out))
    print('ok', path)
for p in sys.argv[1:]:
    fix(p)
