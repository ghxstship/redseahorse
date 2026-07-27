#!/usr/bin/env python3
"""Compose the default social card: public/og/default.png, 1200x630.

    python3 scripts/build-og-card.py

Black ground, the white flag centred. No text baked in, on purpose: every
platform renders the title and description as live text beside the image, and
type inside the image is the first thing to get cropped when a platform picks
a different aspect ratio. A mark on a field survives every crop.

1200x630 is the 1.91:1 that Open Graph, X and LinkedIn all want. Pure stdlib
so there is no image library to install and no build-time dependency.
"""

import pathlib
import struct
import zlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
FLAG = ROOT / "assets/skull-bone-mark.png"   # 480x368, transparent, white ink
OUT = ROOT / "public/og/default.png"

W, H = 1200, 630
BG = (0, 0, 0)
FLAG_W = 360          # the mark sits at 30% of the card width


def read_png(path):
    """Minimal PNG reader: returns (w, h, channels, raw RGBA-ish rows)."""
    d = path.read_bytes()
    pos, idat, w = 8, b"", None
    while pos < len(d):
        ln = struct.unpack(">I", d[pos:pos + 4])[0]
        typ, data = d[pos + 4:pos + 8], d[pos + 8:pos + 8 + ln]
        if typ == b"IHDR":
            w, h, bd, ct = struct.unpack(">IIBB", data[:10])
        elif typ == b"IDAT":
            idat += data
        pos += 12 + ln
    ch = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[ct]
    raw, stride = zlib.decompress(idat), w * ch
    out, prev, i = bytearray(), bytearray(stride), 0
    for _ in range(h):
        f = raw[i]; i += 1
        line = bytearray(raw[i:i + stride]); i += stride
        for x in range(stride):
            a = line[x - ch] if x >= ch else 0
            b = prev[x]
            c = prev[x - ch] if x >= ch else 0
            if f == 1: line[x] = (line[x] + a) & 255
            elif f == 2: line[x] = (line[x] + b) & 255
            elif f == 3: line[x] = (line[x] + (a + b) // 2) & 255
            elif f == 4:
                p = a + b - c
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pr = a if (pa <= pb and pa <= pc) else (b if pb <= pc else c)
                line[x] = (line[x] + pr) & 255
        out += line; prev = line
    return w, h, ch, bytes(out)


def write_png(path, w, h, rgb):
    """RGB8, no alpha — a social card is never composited over anything."""
    raw = b"".join(b"\x00" + rgb[y * w * 3:(y + 1) * w * 3] for y in range(h))
    def chunk(t, d):
        return struct.pack(">I", len(d)) + t + d + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )


fw, fh, fch, fpx = read_png(FLAG)
scale = FLAG_W / fw
dw, dh = FLAG_W, round(fh * scale)
ox, oy = (W - dw) // 2, (H - dh) // 2

card = bytearray(bytes(BG) * (W * H))
for y in range(dh):
    sy = min(fh - 1, int(y / scale))
    for x in range(dw):
        sx = min(fw - 1, int(x / scale))
        s = (sy * fw + sx) * fch
        r, g, b = fpx[s], fpx[s + 1], fpx[s + 2]
        a = fpx[s + fch - 1] / 255 if fch in (2, 4) else 1.0
        if a <= 0.004:
            continue
        d = ((oy + y) * W + ox + x) * 3
        for k, v in enumerate((r, g, b)):
            card[d + k] = round(v * a + card[d + k] * (1 - a))

write_png(OUT, W, H, bytes(card))
print(f"wrote {OUT.relative_to(ROOT)}  {W}x{H}  {OUT.stat().st_size / 1024:.1f} KB  "
      f"(mark {dw}x{dh} centred)")
