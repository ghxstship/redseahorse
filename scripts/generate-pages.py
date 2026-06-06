#!/usr/bin/env python3
"""
Convert the source HTML kit (`ui_kits/website/`) into a Next.js App Router tree under `app/`.

Each source `.html` becomes a `page.tsx` whose body is rendered via
`dangerouslySetInnerHTML`. Per-page `<title>` and `<meta name="description">`
become a typed `metadata` export. JSON-LD blocks are re-emitted as React
`<script>` nodes. Inline behavior scripts are emitted via `next/script` so
they execute after hydration.

Run via `pnpm run prebuild` or directly.
"""
from __future__ import annotations

import html
import json
import os
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "ui_kits" / "website"
APP = ROOT / "app"

# ---------- route mapping ----------------------------------------------------

def src_to_route(rel: Path) -> tuple[str, Path]:
    """Map ui_kits/website/X.html to (url_path, app_subdir).

    - index.html        -> ("/",            app/)
    - about.html        -> ("/about",       app/about/)
    - dir/index.html    -> ("/dir",         app/dir/)
    - dir/x.html        -> ("/dir/x",       app/dir/x/)
    """
    parts = list(rel.with_suffix("").parts)
    if parts[-1] == "index":
        parts.pop()
    url = "/" + "/".join(parts) if parts else "/"
    sub = APP.joinpath(*parts)
    return url, sub


def html_path_to_route(href: str) -> str | None:
    """Rewrite an in-kit href like `destinations/festival-production.html`
    or `../index.html#course` to a Next.js route. Returns None if href
    is external/anchor/asset and should be passed through unchanged.
    """
    if not href or href.startswith(("http://", "https://", "mailto:", "tel:", "#", "/")):
        return None
    if href.endswith((".css", ".js", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico")):
        return None

    # Split off fragment / query.
    rest, _, frag = href.partition("#")
    rest, qmark, qs = rest.partition("?")
    if not rest:
        return None

    # Resolve relative pieces against an empty base, then drop trailing index.html.
    segments: list[str] = []
    for seg in rest.split("/"):
        if seg in ("", "."):
            continue
        if seg == "..":
            if segments:
                segments.pop()
            continue
        segments.append(seg)

    if not segments:
        return None
    if not segments[-1].endswith(".html"):
        return None
    last = segments[-1][:-5]  # strip .html
    if last == "index":
        segments.pop()
    else:
        segments[-1] = last
    route = "/" + "/".join(segments) if segments else "/"
    if qmark:
        route += "?" + qs
    if frag:
        route += "#" + frag
    return route


# ---------- HTML extraction --------------------------------------------------

HEAD_RE = re.compile(r"<head[^>]*>(.*?)</head>", re.DOTALL | re.IGNORECASE)
BODY_RE = re.compile(r"<body[^>]*>(.*?)</body>", re.DOTALL | re.IGNORECASE)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.DOTALL | re.IGNORECASE)
META_RE = re.compile(r"<meta\s+([^>]+?)/?>", re.IGNORECASE)
ATTR_RE = re.compile(r'(\w[\w:-]*)\s*=\s*"([^"]*)"')
STYLE_HEAD_RE = re.compile(r"<style[^>]*>(.*?)</style>", re.DOTALL | re.IGNORECASE)
SCRIPT_RE = re.compile(r"<script\b([^>]*)>(.*?)</script>", re.DOTALL | re.IGNORECASE)
LINK_HREF_RE = re.compile(r'(href|src)\s*=\s*"([^"]+)"', re.IGNORECASE)


def parse_meta(head: str) -> dict[str, str]:
    out: dict[str, str] = {}
    for m in META_RE.finditer(head):
        attrs = dict(ATTR_RE.findall(m.group(1)))
        name = attrs.get("name") or attrs.get("property")
        if name and "content" in attrs:
            out[name.lower()] = attrs["content"]
    return out


def rewrite_links(body: str) -> str:
    def repl(m: re.Match) -> str:
        attr, val = m.group(1), m.group(2)
        # Drop CSS that's now in the layout.
        if attr.lower() == "href" and val.endswith(".css") and ("colors_and_type" in val or "components.css" in val or "terminal.css" in val or "polish.css" in val):
            return f'{attr}="#"'  # benign placeholder; whole <link> tag below also stripped
        # Asset paths -> /assets/* and /phase-detail.js
        if val.endswith("phase-detail.js"):
            return f'{attr}="/phase-detail.js"'
        m2 = re.match(r"^(?:\.\./)+assets/(.+)$", val)
        if m2:
            return f'{attr}="/assets/{m2.group(1)}"'
        # Internal HTML routes
        route = html_path_to_route(val)
        if route is not None:
            return f'{attr}="{route}"'
        return m.group(0)

    body = LINK_HREF_RE.sub(repl, body)
    # Strip stylesheet links that we replaced with href="#" markers (and any other
    # leftover <link rel="stylesheet"> pointing at the local kit files).
    body = re.sub(r'<link[^>]*rel="stylesheet"[^>]*href="#"[^>]*/?>', "", body, flags=re.IGNORECASE)
    return body


# ---------- code generation --------------------------------------------------

def js_string_literal(s: str) -> str:
    """Emit a JS backtick template literal for arbitrary HTML content."""
    return "`" + s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"


def ts_metadata_object(title: str | None, description: str | None, canonical: str | None, keywords: str | None) -> str:
    parts: list[str] = []
    if title:
        parts.append(f"  title: {json.dumps(title)},")
    if description:
        parts.append(f"  description: {json.dumps(description)},")
    if keywords:
        kw = [k.strip() for k in keywords.split(",") if k.strip()]
        parts.append(f"  keywords: {json.dumps(kw)},")
    if canonical:
        parts.append(f"  alternates: {{ canonical: {json.dumps(canonical)} }},")
    return "{\n" + "\n".join(parts) + "\n}"


def emit_page(src_rel: Path) -> None:
    text = (SRC / src_rel).read_text(encoding="utf-8")
    head_m = HEAD_RE.search(text)
    body_m = BODY_RE.search(text)
    if not body_m:
        print(f"  skip (no body): {src_rel}")
        return
    head = head_m.group(1) if head_m else ""
    body = body_m.group(1)

    title_m = TITLE_RE.search(head)
    title = html.unescape(title_m.group(1).strip()) if title_m else None
    meta = parse_meta(head)
    description = meta.get("description")
    keywords = meta.get("keywords")
    canonical = None
    can_m = re.search(r'<link\s+rel="canonical"\s+href="([^"]+)"', head, re.IGNORECASE)
    if can_m:
        canonical = can_m.group(1)

    # Page-scoped <style> blocks live in <head>; preserve them inline in the page.
    head_styles = [m.group(0) for m in STYLE_HEAD_RE.finditer(head)]

    # Collect scripts from BOTH head and body.
    jsonld_blocks: list[str] = []
    inline_scripts: list[str] = []
    external_scripts: list[str] = []

    def take_script(m: re.Match) -> str:
        attrs_raw = m.group(1) or ""
        inner = m.group(2)
        attrs = dict(ATTR_RE.findall(attrs_raw))
        if attrs.get("type", "").lower() == "application/ld+json":
            jsonld_blocks.append(inner.strip())
        elif "src" in attrs:
            external_scripts.append(attrs["src"])
        else:
            inline_scripts.append(inner)
        return ""

    SCRIPT_RE.sub(take_script, head)
    body = SCRIPT_RE.sub(take_script, body)
    body = rewrite_links(body)
    body_with_styles = "\n".join(head_styles) + "\n" + body

    url, sub = src_to_route(src_rel)

    # Special case 404.
    if src_rel.name == "404.html":
        out_path = APP / "not-found.tsx"
        component = "NotFound"
        export_metadata = False
    else:
        sub.mkdir(parents=True, exist_ok=True)
        out_path = sub / "page.tsx"
        component = "Page"
        export_metadata = True

    has_external = any(s.endswith("phase-detail.js") for s in external_scripts)

    lines: list[str] = []
    if has_external or inline_scripts:
        lines.append('import Script from "next/script";')
    if export_metadata:
        lines.append('import type { Metadata } from "next";')
    lines.append("")
    if export_metadata:
        meta_obj = ts_metadata_object(title, description, canonical, keywords)
        lines.append(f"export const metadata: Metadata = {meta_obj};")
        lines.append("")
    lines.append(f"const __html = {js_string_literal(body_with_styles)};")
    if jsonld_blocks:
        lines.append("const __jsonLd: string[] = [")
        for blk in jsonld_blocks:
            lines.append("  " + js_string_literal(blk) + ",")
        lines.append("];")
    lines.append("")
    lines.append(f"export default function {component}() {{")
    lines.append("  return (")
    lines.append("    <>")
    lines.append('      <div dangerouslySetInnerHTML={{ __html }} />')
    if jsonld_blocks:
        lines.append("      {__jsonLd.map((d, i) => (")
        lines.append('        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: d }} />')
        lines.append("      ))}")
    for i, code in enumerate(inline_scripts):
        sid = f"inline-{src_rel.with_suffix('').as_posix().replace('/', '-')}-{i}"
        safe = js_string_literal(code)
        lines.append(f'      <Script id="{sid}" strategy="afterInteractive" dangerouslySetInnerHTML={{{{ __html: {safe} }}}} />')
    if has_external:
        lines.append('      <Script src="/phase-detail.js" strategy="afterInteractive" />')
    lines.append("    </>")
    lines.append("  );")
    lines.append("}")
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"  {src_rel} -> {out_path.relative_to(ROOT)} ({url})")


# ---------- main -------------------------------------------------------------

def main() -> None:
    # Clean previously generated routes so removed pages don't linger.
    if APP.exists():
        for entry in APP.iterdir():
            if entry.name in {"layout.tsx", "globals.css"}:
                continue
            if entry.is_dir():
                shutil.rmtree(entry)
            else:
                entry.unlink()
    APP.mkdir(parents=True, exist_ok=True)

    html_files = sorted(SRC.rglob("*.html"))
    print(f"Generating {len(html_files)} pages…")
    for f in html_files:
        emit_page(f.relative_to(SRC))

    # Mirror public assets.
    public = ROOT / "public"
    public.mkdir(exist_ok=True)
    assets_dst = public / "assets"
    if assets_dst.exists():
        shutil.rmtree(assets_dst)
    shutil.copytree(ROOT / "assets", assets_dst)
    shutil.copy(ROOT / "phase-detail.js", public / "phase-detail.js")
    for f in ("robots.txt", "sitemap.xml"):
        src = SRC / f
        if src.exists():
            shutil.copy(src, public / f)

    print("Done.")


if __name__ == "__main__":
    main()
