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

SP = {4: "--sp-1", 8: "--sp-2", 12: "--sp-3", 16: "--sp-4", 24: "--sp-5",
      32: "--sp-6", 48: "--sp-7", 64: "--sp-8", 96: "--sp-9", 128: "--sp-10"}
RAD = {4: "--r-1", 8: "--r-2", 12: "--r-3"}
SP_PROPS = {"padding", "margin", "gap", "row-gap", "column-gap", "inset",
            "top", "right", "bottom", "left",
            "padding-top", "padding-right", "padding-bottom", "padding-left",
            "margin-top", "margin-right", "margin-bottom", "margin-left"}
RAD_PROPS = {"border-radius", "border-top-left-radius", "border-top-right-radius",
             "border-bottom-left-radius", "border-bottom-right-radius"}


def fs_token(n: int) -> str:
    if n <= 12: return "var(--fs-label)"
    if n <= 14: return "var(--fs-small)"
    if n <= 16: return "var(--fs-body)"
    if n <= 20: return "var(--fs-body-l)"
    if n <= 24: return "var(--fs-h3)"
    if n <= 31: return "var(--fs-h2)"
    if n <= 44: return "var(--fs-h1)"
    return None  # leave very large (display) sizes alone


def sub_scale(value: str, table: dict) -> str:
    def repl(m):
        n = int(m.group(1))
        return "var(" + table[n] + ")" if n in table else m.group(0)
    return re.sub(r"\b(\d+)px\b", repl, value)


def tokenize_style(css: str) -> str:
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
            new = sub_scale(val, SP)
        elif prop in RAD_PROPS:
            def repl(mm):
                n = int(mm.group(1))
                if n >= 999: return "var(--r-pill)"
                return "var(" + RAD[n] + ")" if n in RAD else mm.group(0)
            new = re.sub(r"\b(\d+)px\b", repl, val)
        if new != val:
            return f"{m.group('prop')}:{new}"
        return m.group(0)

    return decl.sub(handle, css)


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
