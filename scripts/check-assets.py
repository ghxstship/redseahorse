#!/usr/bin/env python3
"""Fail if assets/ and public/assets/ have drifted.

Two copies exist on purpose: public/assets/ is what the site serves, and
assets/ is what the standalone source previews reach via ../../assets. They
have to stay byte-identical, and nothing enforced that — the tight-cropped
flag had to be copied into both by hand, which is exactly how a pair like this
starts diverging.
"""
import hashlib
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
A, B = ROOT / "assets", ROOT / "public/assets"
h = lambda p: hashlib.sha1(p.read_bytes()).hexdigest()

problems = []
for p in sorted(A.iterdir()):
    if not p.is_file() or p.name.startswith("."):
        continue
    q = B / p.name
    if not q.exists():
        problems.append(f"missing from public/assets: {p.name}")
    elif h(p) != h(q):
        problems.append(f"diverged: {p.name}")
for q in sorted(B.iterdir()):
    if q.is_file() and not q.name.startswith(".") and not (A / q.name).exists():
        problems.append(f"missing from assets/: {q.name}")

for x in problems:
    print("  " + x)
print(f"assets: {'IN SYNC' if not problems else str(len(problems)) + ' problem(s)'}")
sys.exit(1 if problems else 0)
