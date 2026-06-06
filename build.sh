#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$ROOT/ui_kits/website"
DIST="$ROOT/dist"

rm -rf "$DIST"
mkdir -p "$DIST"

cp -R "$SRC"/. "$DIST"/

for f in colors_and_type.css components.css terminal.css polish.css phase-detail.js; do
  cp "$ROOT/$f" "$DIST/$f"
done
cp -R "$ROOT/assets" "$DIST/assets"

python3 - <<'PY'
import os, re
DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist") if False else "dist"
ATTR_RE = re.compile(r'((?:href|src)\s*=\s*")(\.\./\.\./)([^"]*)(")')

count = 0
for dirpath, _, files in os.walk(DIST):
    for name in files:
        if not name.endswith((".html", ".xml")):
            continue
        path = os.path.join(dirpath, name)
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
        new = ATTR_RE.sub(lambda m: m.group(1) + m.group(3) + m.group(4), text)
        if new != text:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(new)
            count += 1
print(f"rewrote paths in {count} files")
PY

touch "$DIST/.nojekyll"

echo "build: dist/ ready ($(find "$DIST" -type f | wc -l | tr -d ' ') files)"
