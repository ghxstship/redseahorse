#!/usr/bin/env python3
"""Turn a Google Fonts css2 response into local files + a @font-face block."""
import re, sys, pathlib, urllib.request
css = open(sys.argv[1]).read()
out = pathlib.Path('public/fonts'); out.mkdir(parents=True, exist_ok=True)
UA = {'User-Agent': 'Mozilla/5.0 AppleWebKit/537.36 Chrome/126 Safari/537.36'}
faces = []
for _, subset, body in re.findall(r'(/\* ([a-z0-9-]+) \*/\s*)?@font-face \{([^}]*)\}', css):
    fam = re.search(r"font-family: '([^']+)'", body).group(1)
    wt = (re.search(r'font-weight: (\d+)', body) or [None, '400'])[1] if False else (re.search(r'font-weight: (\d+)', body).group(1) if re.search(r'font-weight: (\d+)', body) else '400')
    rng = re.search(r'unicode-range: ([^;]+);', body).group(1).strip()
    url = re.search(r'url\((https[^)]+)\)', body).group(1)
    name = f"{fam.lower().replace(' ', '-')}-{wt}-{subset or 'x'}.woff2"
    (out / name).write_bytes(urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30).read())
    faces.append((fam, wt, rng, name))
head = pathlib.Path('modernist.css').read_text()
block = "\n".join(
    f"@font-face {{\n  font-family: '{f}';\n  font-style: normal;\n  font-weight: {w};\n"
    f"  font-display: swap;\n  src: url('/fonts/{n}') format('woff2');\n  unicode-range: {r};\n}}"
    for f, w, r, n in faces)
head = re.sub(r'@font-face \{[\s\S]*?\n\}\n(?=\n:root)', block + "\n", head, count=1)
pathlib.Path('modernist.css').write_text(head)
print(f"{len(faces)} faces written")
