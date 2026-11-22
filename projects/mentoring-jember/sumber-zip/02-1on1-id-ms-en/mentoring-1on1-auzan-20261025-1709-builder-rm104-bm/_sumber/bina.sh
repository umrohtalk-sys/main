#!/bin/sh
# Jana index.html (Netlify) daripada _sumber/artifact.html
cd "$(dirname "$0")/.."
{ printf '<!doctype html>\n<html lang="ms">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n<link rel="icon" href="favicon.svg">\n'
  sed '/<header class="bar">/,$d' _sumber/artifact.html; printf '</head>\n<body>\n'
  sed -n '/<header class="bar">/,$p' _sumber/artifact.html; printf '</body>\n</html>\n'; } > index.html
