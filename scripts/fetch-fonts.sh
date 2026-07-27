#!/usr/bin/env bash
# Re-download the self-hosted webfonts from Google and rebuild the @font-face
# block at the top of modernist.css. Run only when a family or weight changes.
#
#   bash scripts/fetch-fonts.sh
#
# Both families are SIL Open Font License 1.1, which permits redistribution.
# We self-host so that reading a page does not hand a visitor's IP to Google.
set -euo pipefail
cd "$(dirname "$0")/.."
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36'
URL='https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Bebas+Neue&display=swap'
curl -sS -A "$UA" "$URL" -o /tmp/gf.css
python3 scripts/_rebuild-fontface.py /tmp/gf.css
echo "Done. Check the @font-face block at the top of modernist.css."
