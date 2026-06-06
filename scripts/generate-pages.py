#!/usr/bin/env python3
"""
Convert the source HTML kit (`ui_kits/website/`) into a Next.js App Router tree.

Each source `.html` becomes a fully JSX-ified `page.tsx` with:
- a typed `metadata` export (title, description, keywords, canonical),
- real React children (no dangerouslySetInnerHTML for body content),
- HTML attribute names mapped to JSX (className, htmlFor, style objects, …),
- void elements self-closed, comments → JSX comments,
- internal `<a href="/foo">` links rewritten to `<Link href="/foo">`,
- per-page JSON-LD blocks emitted as `<script type="application/ld+json">`,
- inline behavior scripts and `phase-detail.js` loaded via `next/script`,
- per-page `<style>` blocks preserved verbatim via `dangerouslySetInnerHTML`.

Run via `pnpm run prebuild` or directly: `python3 scripts/generate-pages.py`.
"""
from __future__ import annotations

import html as html_lib
import json
import os
import re
import shutil
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "ui_kits" / "website"
APP = ROOT / "app"

# Routes available to the site (populated in main from SRC tree). Used to
# down-grade dangling `<a>` links to plain anchors that we can clean up later.
VALID_ROUTES: set[str] = set()

# Elements that must be emitted self-closed in JSX.
VOID_ELEMENTS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}
# Elements whose text content must not be JSX-escaped further.
RAW_TEXT_ELEMENTS = {"script", "style"}


# ---------- route mapping ----------------------------------------------------

def src_to_route(rel: Path) -> tuple[str, Path]:
    """ui_kits/website/X.html -> (URL, output dir under app/)"""
    parts = list(rel.with_suffix("").parts)
    if parts[-1] == "index":
        parts.pop()
    url = "/" + "/".join(parts) if parts else "/"
    sub = APP.joinpath(*parts)
    return url, sub


def html_path_to_route(href: str, base_dir: tuple[str, ...] = ()) -> str | None:
    """Resolve an in-kit href to a Next.js route.

    `base_dir` is the source file's directory inside `ui_kits/website/` as a
    tuple of path parts. A relative href like `apply.html` from
    `careers/index.html` (base_dir=('careers',)) resolves to `/careers/apply`.
    """
    if not href or href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:")):
        return None
    if href.startswith("#"):
        return None
    if href.startswith("/"):
        return None
    if href.endswith((".css", ".js", ".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".pdf")):
        return None

    rest, _, frag = href.partition("#")
    rest, qmark, qs = rest.partition("?")
    if not rest:
        return None

    # Start from base_dir, then walk the href's segments resolving `..` / `.`.
    segments: list[str] = list(base_dir)
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
    last = segments[-1][:-5]
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


# ---------- HTML → tree ------------------------------------------------------

@dataclass
class Node:
    kind: str               # 'element' | 'text' | 'comment' | 'doctype'
    tag: str = ""
    attrs: list[tuple[str, str | None]] = field(default_factory=list)
    children: list["Node"] = field(default_factory=list)
    text: str = ""


class TreeBuilder(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.root = Node(kind="element", tag="#root")
        self.stack: list[Node] = [self.root]

    def _top(self) -> Node:
        return self.stack[-1]

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        node = Node(kind="element", tag=tag, attrs=attrs)
        self._top().children.append(node)
        if tag not in VOID_ELEMENTS:
            self.stack.append(node)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        node = Node(kind="element", tag=tag, attrs=attrs)
        self._top().children.append(node)

    def handle_endtag(self, tag: str) -> None:
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data: str) -> None:
        if not data:
            return
        top = self._top()
        if top.children and top.children[-1].kind == "text":
            top.children[-1].text += data
        else:
            top.children.append(Node(kind="text", text=data))

    def handle_entityref(self, name: str) -> None:
        self.handle_data(f"&{name};")

    def handle_charref(self, name: str) -> None:
        self.handle_data(f"&#{name};")

    def handle_comment(self, data: str) -> None:
        self._top().children.append(Node(kind="comment", text=data))

    def handle_decl(self, decl: str) -> None:
        self._top().children.append(Node(kind="doctype", text=decl))


def parse(text: str) -> Node:
    tb = TreeBuilder()
    tb.feed(text)
    tb.close()
    return tb.root


# ---------- HTML → JSX -------------------------------------------------------

# HTML attribute -> JSX attribute. Lowercase keys.
ATTR_RENAME = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "readonly": "readOnly",
    "maxlength": "maxLength",
    "minlength": "minLength",
    "cellpadding": "cellPadding",
    "cellspacing": "cellSpacing",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "crossorigin": "crossOrigin",
    "autoplay": "autoPlay",
    "autofocus": "autoFocus",
    "autocomplete": "autoComplete",
    "autocapitalize": "autoCapitalize",
    "spellcheck": "spellCheck",
    "srcset": "srcSet",
    "srclang": "srcLang",
    "accept-charset": "acceptCharset",
    "http-equiv": "httpEquiv",
    "enctype": "encType",
    "formaction": "formAction",
    "formenctype": "formEncType",
    "formmethod": "formMethod",
    "formnovalidate": "formNoValidate",
    "formtarget": "formTarget",
    "inputmode": "inputMode",
    "usemap": "useMap",
    "contenteditable": "contentEditable",
    "playsinline": "playsInline",
    "allowfullscreen": "allowFullScreen",
    "frameborder": "frameBorder",
    "marginheight": "marginHeight",
    "marginwidth": "marginWidth",
    "novalidate": "noValidate",
    "nomodule": "noModule",
    # SVG renames
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-opacity": "strokeOpacity",
    "fill-rule": "fillRule",
    "fill-opacity": "fillOpacity",
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-weight": "fontWeight",
    "text-anchor": "textAnchor",
    "dominant-baseline": "dominantBaseline",
    "viewbox": "viewBox",
    "preserveaspectratio": "preserveAspectRatio",
    "xmlns:xlink": "xmlnsXlink",
    "xlink:href": "xlinkHref",
}

BOOLEAN_ATTRS = {
    "checked", "disabled", "readonly", "required", "selected", "multiple",
    "autofocus", "autoplay", "controls", "loop", "muted", "open", "default",
    "hidden", "ismap", "novalidate", "nomodule", "playsinline",
    "allowfullscreen", "async", "defer", "reversed", "scoped", "seamless",
    "itemscope",
}

# Attrs typed as `number` by @types/react. When the source value is a
# numeric literal, emit as `{42}`; otherwise leave as string.
NUMERIC_ATTRS = {
    "rows", "cols", "colSpan", "rowSpan", "maxLength", "minLength",
    "size", "span", "tabIndex", "start",
}


def kebab_to_camel(name: str) -> str:
    parts = name.split("-")
    return parts[0] + "".join(p.title() for p in parts[1:])


def style_string_to_object(s: str) -> str:
    """`color: red; --x: 1` -> `{color: 'red', ['--x']: '1'}` (JS literal)."""
    items: list[str] = []
    for decl in re.split(r";(?![^()]*\))", s):
        decl = decl.strip()
        if not decl or ":" not in decl:
            continue
        key, _, value = decl.partition(":")
        key = key.strip()
        value = value.strip()
        if not key or not value:
            continue
        # JS-quote the value (single quotes, escape backslashes and quotes).
        val_lit = "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"
        if key.startswith("--"):
            items.append(f"'{key}': {val_lit}")
        elif "-" in key:
            items.append(f"{kebab_to_camel(key)}: {val_lit}")
        else:
            items.append(f"{key}: {val_lit}")
    return "{" + ", ".join(items) + "}"


def js_string_literal(s: str) -> str:
    """Backtick template literal for arbitrary text."""
    return "`" + s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"


def escape_jsx_text(s: str) -> str:
    """JSX text node — only `{` and `}` are dangerous in text. Replace with HTML entities."""
    # Preserve HTML entity references; just escape raw braces.
    return s.replace("{", "&#123;").replace("}", "&#125;")


def attr_value_jsx(value: str) -> str:
    """Emit a JSX attribute value, decoding HTML entities first."""
    decoded = html_lib.unescape(value)
    if '"' not in decoded:
        return '"' + decoded + '"'
    escaped = decoded.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    return '"' + escaped + '"' if False else '{"' + escaped + '"}'


def rewrite_asset_src(value: str) -> str:
    """Map kit-local asset paths to /-rooted public paths."""
    if value.endswith("phase-detail.js"):
        return "/phase-detail.js"
    m = re.match(r"^(?:\.\./)+assets/(.+)$", value)
    if m:
        return "/assets/" + m.group(1)
    return value


@dataclass
class EmitContext:
    inline_scripts: list[str] = field(default_factory=list)
    jsonld_blocks: list[str] = field(default_factory=list)
    needs_external_phase_detail: bool = False
    needs_link: bool = False
    needs_script: bool = False
    inline_style_blocks: list[str] = field(default_factory=list)
    # id -> name (derived from label-for) for form fields, set per <form>.
    field_names: dict[str, str] = field(default_factory=dict)
    # Source page's parent directory under ui_kits/website/, for resolving
    # relative hrefs in `<a>` tags.
    base_dir: tuple[str, ...] = ()


def _slug_label(text: str) -> str:
    import unicodedata
    decoded = html_lib.unescape(text)
    norm = unicodedata.normalize("NFKD", decoded)
    norm = "".join(c for c in norm if not unicodedata.combining(c))
    norm = re.sub(r"[^a-zA-Z0-9]+", "-", norm).strip("-").lower()
    return norm or "field"


def collect_form_field_names(form_node: Node, taken: set[str] | None = None) -> dict[str, str]:
    """Walk a <form> subtree, return {field-id: derived-name}.

    Derives names from the matching <label for=ID> text. Falls back to the id
    itself. De-duplicates within the form.
    """
    taken = taken if taken is not None else set()
    label_for: dict[str, str] = {}
    field_ids: list[str] = []

    def walk(n: Node) -> None:
        if n.kind == "element":
            tag = n.tag.lower()
            attrs = {k.lower(): v for k, v in n.attrs}
            if tag == "label" and "for" in attrs and attrs["for"]:
                txt_parts: list[str] = []
                for c in n.children:
                    if c.kind == "text":
                        txt_parts.append(c.text)
                    elif c.kind == "element":
                        for d in c.children:
                            if d.kind == "text":
                                txt_parts.append(d.text)
                label_for[attrs["for"]] = " ".join("".join(txt_parts).split())
            if tag in ("input", "select", "textarea"):
                if "id" in attrs and attrs["id"] and "name" not in attrs:
                    field_ids.append(attrs["id"])
        for c in n.children:
            walk(c)

    walk(form_node)
    result: dict[str, str] = {}
    for fid in field_ids:
        base = _slug_label(label_for.get(fid, fid))
        name = base
        i = 2
        while name in taken:
            name = f"{base}-{i}"
            i += 1
        taken.add(name)
        result[fid] = name
    return result


def emit_attrs(tag: str, attrs: list[tuple[str, str | None]], *, internal_link: bool) -> str:
    parts: list[str] = []
    seen_keys: set[str] = set()
    for raw_name, raw_value in attrs:
        name = raw_name.lower()
        # Drop inline event handlers; they don't work via React JSX without rewrites.
        if name.startswith("on"):
            continue
        # Drop stale stylesheet links — the kit CSS is loaded in app/layout.tsx.
        if tag == "link" and name == "href" and raw_value and (
            raw_value.endswith(("colors_and_type.css", "components.css", "terminal.css", "polish.css"))
        ):
            return ""  # caller will drop the whole element
        # `style="..."` -> object.
        if name == "style" and raw_value is not None:
            parts.append(f"style={{{style_string_to_object(raw_value)}}}")
            seen_keys.add("style")
            continue
        # Internal anchor href: convert in caller (so the element can become <Link>).
        if internal_link and tag == "a" and name == "href":
            # When emitting <Link>, this is rewritten at the caller; skip here.
            continue
        # Asset path rewrites for src and href on non-anchor elements.
        if name in ("src", "href") and raw_value:
            raw_value = rewrite_asset_src(raw_value)
        # Boolean attrs without value -> bare attribute (JSX supports it).
        if raw_value is None:
            if name in BOOLEAN_ATTRS:
                jsx_name = ATTR_RENAME.get(name, name)
                parts.append(jsx_name)
                seen_keys.add(jsx_name)
            else:
                jsx_name = ATTR_RENAME.get(name, name)
                parts.append(f'{jsx_name}=""')
                seen_keys.add(jsx_name)
            continue
        jsx_name = ATTR_RENAME.get(name, name)
        # Keep data-* / aria-* / xmlns and unknown-with-dash names as-is in JSX (lowercase ok).
        if jsx_name in seen_keys:
            continue
        seen_keys.add(jsx_name)
        if jsx_name in NUMERIC_ATTRS and re.fullmatch(r"-?\d+", raw_value):
            parts.append(f"{jsx_name}={{{raw_value}}}")
            continue
        parts.append(f"{jsx_name}={attr_value_jsx(raw_value)}")
    return (" " + " ".join(parts)) if parts else ""


def is_internal_anchor(attrs: list[tuple[str, str | None]], base_dir: tuple[str, ...]) -> tuple[bool, str | None]:
    """Return (is_internal, route) for an <a> element.

    A route is considered internal only if it maps to a page we actually
    generate. A relative href that escapes the site (e.g. into the brand
    kit) is *not* a valid internal link and is rejected so the caller can
    drop or rewrite it.
    """
    href = None
    for k, v in attrs:
        if k.lower() == "href":
            href = v
            break
    if not href:
        return False, None
    if href.startswith("/") and not href.startswith("//"):
        base = href.split("#", 1)[0].split("?", 1)[0]
        return (base in VALID_ROUTES, href) if VALID_ROUTES else (True, href)
    route = html_path_to_route(href, base_dir)
    if route is None:
        return False, None
    base = route.split("#", 1)[0].split("?", 1)[0]
    if VALID_ROUTES and base not in VALID_ROUTES:
        return False, None
    return True, route


def emit_node(node: Node, ctx: EmitContext, depth: int = 0) -> str:
    if node.kind == "text":
        return escape_jsx_text(node.text)
    if node.kind == "comment":
        body = node.text.replace("*/", "*\\/")
        return "{/*" + body + "*/}"
    if node.kind == "doctype":
        return ""
    if node.kind != "element":
        return ""

    tag = node.tag.lower()

    # Drop stale stylesheet <link>s for kit CSS (moved to layout).
    if tag == "link":
        for k, v in node.attrs:
            if k.lower() == "rel" and v and "stylesheet" in v.lower():
                for k2, v2 in node.attrs:
                    if k2.lower() == "href" and v2 and v2.endswith((
                        "colors_and_type.css", "components.css", "terminal.css", "polish.css",
                    )):
                        return ""

    # JSON-LD scripts and other <script> elements are extracted to ctx.
    if tag == "script":
        attrs = {k.lower(): v for k, v in node.attrs}
        inner = "".join(c.text for c in node.children if c.kind == "text")
        if attrs.get("type", "").lower() == "application/ld+json":
            ctx.jsonld_blocks.append(inner.strip())
            return ""
        if attrs.get("src", "").endswith("phase-detail.js"):
            ctx.needs_external_phase_detail = True
            ctx.needs_script = True
            return ""
        if inner.strip():
            ctx.inline_scripts.append(inner)
            ctx.needs_script = True
        return ""

    # <style> in head/body — preserve content via dangerouslySetInnerHTML.
    if tag == "style":
        css = "".join(c.text for c in node.children if c.kind == "text")
        return (
            "<style dangerouslySetInnerHTML={{ __html: "
            + js_string_literal(css)
            + " }} />"
        )

    # Map internal anchors to <Link>.
    if tag == "a":
        internal, route = is_internal_anchor(node.attrs, ctx.base_dir)
        if internal and route is not None:
            ctx.needs_link = True
            inner = "".join(emit_node(c, ctx, depth + 1) for c in node.children)
            attrs_str = emit_attrs(tag, node.attrs, internal_link=True)
            return f'<Link href="{route}"{attrs_str}>{inner}</Link>'
        # Catch in-kit links that point at pages we don't ship (e.g. the
        # internal brand kit's retail-kit.html). Drop the link element and
        # render only its children so the page stays clean.
        href_val = next((v for k, v in node.attrs if k.lower() == "href" and v), None)
        if href_val and not href_val.startswith((
            "http://", "https://", "mailto:", "tel:", "javascript:", "#",
        )):
            inner = "".join(emit_node(c, ctx, depth + 1) for c in node.children)
            return f"<span>{inner}</span>"

    # <form>: collect field-name mappings then emit normally.
    if tag == "form":
        prev_names = ctx.field_names
        ctx.field_names = {**prev_names, **collect_form_field_names(node)}
        attrs_str = emit_attrs(tag, node.attrs, internal_link=False)
        inner = "".join(emit_node(c, ctx, depth + 1) for c in node.children)
        ctx.field_names = prev_names
        return f"<{tag}{attrs_str}>{inner}</{tag}>"

    # Form fields without a `name` get one derived from the matching label.
    if tag in ("input", "select", "textarea"):
        attrs_dict = {k.lower(): v for k, v in node.attrs}
        if "name" not in attrs_dict and "id" in attrs_dict and attrs_dict["id"]:
            derived = ctx.field_names.get(attrs_dict["id"])
            if derived:
                node = Node(
                    kind="element",
                    tag=tag,
                    attrs=list(node.attrs) + [("name", derived)],
                    children=node.children,
                )

    # Generic element.
    attrs_str = emit_attrs(tag, node.attrs, internal_link=False)
    if tag in VOID_ELEMENTS:
        return f"<{tag}{attrs_str}/>"
    inner = "".join(emit_node(c, ctx, depth + 1) for c in node.children)
    return f"<{tag}{attrs_str}>{inner}</{tag}>"


# ---------- per-file pipeline ------------------------------------------------

HEAD_RE = re.compile(r"<head[^>]*>(.*?)</head>", re.DOTALL | re.IGNORECASE)
BODY_RE = re.compile(r"<body[^>]*>(.*?)</body>", re.DOTALL | re.IGNORECASE)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.DOTALL | re.IGNORECASE)


def parse_meta(head: str) -> dict[str, str]:
    out: dict[str, str] = {}
    for m in re.finditer(r"<meta\s+([^>]+?)/?>", head, re.IGNORECASE):
        attrs = dict(re.findall(r'(\w[\w:-]*)\s*=\s*"([^"]*)"', m.group(1)))
        name = attrs.get("name") or attrs.get("property")
        if name and "content" in attrs:
            out[name.lower()] = attrs["content"]
    return out


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
    title = html_lib.unescape(title_m.group(1).strip()) if title_m else None
    if title:
        # Strip trailing brand suffix; root layout's metadata template adds it.
        title = re.sub(r"\s*[—\-|·]\s*G\s?H\s?X\s?S\s?T\s?S\s?H\s?I\s?P\s*$", "", title, flags=re.IGNORECASE).strip()
    meta = parse_meta(head)
    description = meta.get("description")
    keywords = meta.get("keywords")
    canonical = None
    can_m = re.search(r'<link\s+rel="canonical"\s+href="([^"]+)"', head, re.IGNORECASE)
    if can_m:
        canonical = can_m.group(1)

    ctx = EmitContext(base_dir=tuple(src_rel.parent.parts))

    # Head: keep only <style> blocks (rendered inline in the page body) and
    # extract <script type="application/ld+json"> via emit_node's context side-effects.
    # <meta>, <link>, <title> are already represented in `metadata`/layout.
    head_tree = parse(head)
    head_jsx_parts: list[str] = []
    for child in head_tree.children:
        if child.kind == "element" and child.tag.lower() == "script":
            emit_node(child, ctx)  # captures ld+json / inline / external into ctx
            continue
        if child.kind == "element" and child.tag.lower() == "style":
            chunk = emit_node(child, ctx)
            if chunk.strip():
                head_jsx_parts.append(chunk)
            continue
        # Drop everything else (meta, link, title, doctype, whitespace).

    # Body: full JSX.
    body_tree = parse(body)
    body_jsx_parts: list[str] = [emit_node(child, ctx) for child in body_tree.children]
    body_jsx = "".join(p for p in body_jsx_parts if p)

    url, sub = src_to_route(src_rel)

    if src_rel.name == "404.html":
        out_path = APP / "not-found.tsx"
        component = "NotFound"
        export_metadata = False
    else:
        sub.mkdir(parents=True, exist_ok=True)
        out_path = sub / "page.tsx"
        component = "Page"
        export_metadata = True

    imports: list[str] = []
    if ctx.needs_link:
        imports.append('import Link from "next/link";')
    if ctx.needs_script:
        imports.append('import Script from "next/script";')
    if export_metadata:
        imports.append('import type { Metadata } from "next";')

    lines: list[str] = imports[:]
    lines.append("")
    if export_metadata:
        lines.append(f"export const metadata: Metadata = {ts_metadata_object(title, description, canonical, keywords)};")
        lines.append("")
    lines.append(f"export default function {component}() {{")
    lines.append("  return (")
    lines.append("    <>")
    # Preserve any head-level <style> blocks (rendered into <body> by React; works for global styles).
    for chunk in head_jsx_parts:
        lines.append("      " + chunk)
    lines.append("      " + body_jsx)
    for blk in ctx.jsonld_blocks:
        lit = js_string_literal(blk)
        lines.append(f'      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: {lit} }}}} />')
    for i, code in enumerate(ctx.inline_scripts):
        sid = f"inline-{src_rel.with_suffix('').as_posix().replace('/', '-')}-{i}"
        lit = js_string_literal(code)
        lines.append(f'      <Script id="{sid}" strategy="afterInteractive" dangerouslySetInnerHTML={{{{ __html: {lit} }}}} />')
    if ctx.needs_external_phase_detail:
        lines.append('      <Script src="/phase-detail.js" strategy="afterInteractive" />')
    lines.append("    </>")
    lines.append("  );")
    lines.append("}")
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"  {src_rel} -> {out_path.relative_to(ROOT)} ({url})")


def main() -> None:
    # Wipe stale routes so removed pages don't linger; keep layout/globals.
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
    # Build the route allow-list before emitting so emit_node can validate.
    VALID_ROUTES.clear()
    for f in html_files:
        if f.name == "404.html":
            continue
        rel = f.relative_to(SRC)
        url, _ = src_to_route(rel)
        VALID_ROUTES.add(url)
    print(f"Generating {len(html_files)} pages ({len(VALID_ROUTES)} routes)…")
    for f in html_files:
        emit_page(f.relative_to(SRC))

    # Public assets.
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
