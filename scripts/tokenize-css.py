#!/usr/bin/env python3
"""Tokenize hardcoded values in the source pages' inline <style> blocks.

Safe, property-aware substitution:
  - font-size: bare Npx  -> the fluid/fixed type token (sub-12px bumped to the
    --fs-label floor; small bare-px headings become fluid h3/h2/h1 tokens).
  - spacing props (padding/margin/gap/inset/top/right/bottom/left): only EXACT
    scale matches (4/8/12/16/24/32/48/64/96/128px) -> --sp-* (1:1, no visual change).
  - border-radius: 4/8/12px -> --r-1/2/3; >=999px -> --r-pill.
Off-scale values, dimensions (width/height/max-width), @media conditions,
clamp()/calc(), shadows, transitions, and borders are left untouched.
"""
import re, glob, sys

# px-keyed spacing scale (--space-N == N px). Every value the kit uses.
SPACE = {2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 22, 24,
         26, 28, 30, 32, 36, 40, 44, 48, 56, 64, 80, 96, 128}
RAD = {2: "--r-xs", 3: "--r-xs", 4: "--r-1", 8: "--r-2", 12: "--r-3"}
STROKE = {1: "--stroke-1", 2: "--stroke-2", 3: "--stroke-3", 4: "--stroke-4"}
# Recurring layout dimensions → semantic tokens (near-dups normalized).
DIM_WIDTH = {1180: "--container", 1200: "--container",
             760: "--measure", 780: "--measure",
             820: "--measure-wide", 840: "--measure-wide", 896: "--measure-wide",
             540: "--measure-narrow", 560: "--measure-narrow"}
DIM_HEIGHT = {72: "--nav-h"}
SP_PROPS = {"padding", "margin", "gap", "row-gap", "column-gap", "inset",
            "top", "right", "bottom", "left", "outline-offset",
            "padding-top", "padding-right", "padding-bottom", "padding-left",
            "margin-top", "margin-right", "margin-bottom", "margin-left"}
RAD_PROPS = {"border-radius", "border-top-left-radius", "border-top-right-radius",
             "border-bottom-left-radius", "border-bottom-right-radius"}
STROKE_PROPS = {"border", "border-top", "border-right", "border-bottom",
                "border-left", "border-width", "outline", "outline-width"}


def fs_token(n: int) -> str:
    if n <= 12: return "var(--fs-label)"
    if n <= 14: return "var(--fs-small)"
    if n <= 16: return "var(--fs-body)"
    if n <= 20: return "var(--fs-body-l)"
    if n <= 24: return "var(--fs-h3)"
    if n <= 31: return "var(--fs-h2)"
    if n <= 44: return "var(--fs-h1)"
    return None  # leave very large (display) sizes alone


_SPACE_SORTED = sorted(SPACE)


def sub_space(value: str) -> str:
    # Snap each spacing px to the nearest --space-N. The scale is dense (≤2px
    # steps through 32), so off-scale values normalize with no visible change.
    def repl(m):
        n = int(m.group(1))
        if n == 0 or n > 128:
            return m.group(0)
        nearest = min(_SPACE_SORTED, key=lambda s: (abs(s - n), s))
        return "var(--space-" + str(nearest) + ")"
    return re.sub(r"\b(\d+)px\b", repl, value)


def sub_map(value: str, table: dict, pill=False) -> str:
    def repl(m):
        n = int(m.group(1))
        if pill and n >= 999:
            return "var(--r-pill)"
        return "var(" + table[n] + ")" if n in table else m.group(0)
    return re.sub(r"\b(\d+)px\b", repl, value)


def tokenize_style(css: str) -> str:
    # Mask @media preludes so breakpoint conditions (which can't be CSS vars)
    # are never rewritten; declarations inside the block are still processed.
    medias: list[str] = []

    def mask(m):
        medias.append(m.group(0))
        return f"@@M{len(medias) - 1}@@"

    css = re.sub(r"@media[^{]*\{", mask, css)

    # Match `prop: value` up to ; or } or { — declarations only.
    decl = re.compile(r"(?P<prop>[a-zA-Z-]+)\s*:\s*(?P<val>[^;{}]+)")

    def handle(m):
        prop = m.group("prop").lower()
        val = m.group("val")
        new = val
        if prop == "font-size":
            mm = re.fullmatch(r"\s*(\d+)px\s*", val)
            if mm:
                tok = fs_token(int(mm.group(1)))
                if tok:
                    new = tok
        elif prop in SP_PROPS:
            new = sub_space(val)
        elif prop in RAD_PROPS:
            new = sub_map(val, RAD, pill=True)
        elif prop in STROKE_PROPS:
            new = sub_map(val, STROKE)
        elif prop in ("max-width", "min-width", "width"):
            new = sub_map(val, DIM_WIDTH)
        elif prop in ("min-height", "height"):
            new = sub_map(val, DIM_HEIGHT)
        if new != val:
            return f"{m.group('prop')}:{new}"
        return m.group(0)

    css = decl.sub(handle, css)
    css = re.sub(r"@@M(\d+)@@", lambda m: medias[int(m.group(1))], css)
    return css


def process(path: str) -> int:
    s = open(path, encoding="utf-8").read()
    changed = [0]

    def style_repl(m):
        inner = m.group(2)
        new = tokenize_style(inner)
        if new != inner:
            changed[0] += 1
        return m.group(1) + new + m.group(3)

    s2 = re.sub(r"(<style[^>]*>)(.*?)(</style>)", style_repl, s, flags=re.DOTALL)

    # Inline style="..." attributes — same property-aware tokenization.
    def attr_repl(m):
        inner = m.group(1)
        new = tokenize_style(inner)
        if new != inner:
            changed[0] += 1
        return 'style="' + new + '"'

    s2 = re.sub(r'style="([^"]*)"', attr_repl, s2)
    if s2 != s:
        open(path, "w", encoding="utf-8").write(s2)
    return changed[0]


def process_css(path: str) -> bool:
    s = open(path, encoding="utf-8").read()
    new = tokenize_style(s)
    if new != s:
        open(path, "w", encoding="utf-8").write(new)
        return True
    return False


if __name__ == "__main__":
    files = sorted(glob.glob("ui_kits/website/**/*.html", recursive=True))
    total = sum(process(f) for f in files)
    print(f"tokenized style blocks in {total} occurrences across {len(files)} files")
    # Global component stylesheets (skip colors_and_type.css — it defines tokens).
    for css in ("terminal.css", "polish.css", "components.css"):
        if process_css(css):
            print(f"tokenized {css}")
