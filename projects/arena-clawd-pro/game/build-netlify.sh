#!/bin/sh
# game.html -> ../netlify/ (folder siap unggah ke Netlify) + ../arena-clawd-pro-netlify.zip
cd "$(dirname "$0")"
OUT=../netlify
rm -rf "$OUT" && mkdir -p "$OUT"
{ printf '<!doctype html>\n<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  printf '<meta property="og:title" content="Arena Clawd Pro"><meta property="og:description" content="Game MOBA matematika main sendiri untuk SD kelas 1-6: 6 hero, Soal Gempur, Ultimate Matematika, Belajar, Latihan, Kemajuan."><meta property="og:image" content="sampul.jpg"><meta name="theme-color" content="#efebe2">\n'
  cat game.html; printf '\n</html>\n'; } > "$OUT/index.html"
cp ../sampul-arena-clawd-pro.jpg "$OUT/sampul.jpg"
cat > "$OUT/netlify.toml" <<'T'
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Robots-Tag = "noindex, nofollow"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
T
printf 'User-agent: *\nDisallow: /\n' > "$OUT/robots.txt"
cat > "$OUT/BACA-SAYA.txt" <<'T'
Arena Clawd Pro - folder siap unggah ke Netlify.
Cara 1: app.netlify.com -> Add new site -> Deploy manually -> seret folder ini (atau file zip-nya).
Cara 2: netlify deploy --dir . --prod  (dari dalam folder ini, dengan Netlify CLI).
Isi: index.html (game lengkap satu file), sampul.jpg, netlify.toml, robots.txt.
T
rm -f ../arena-clawd-pro-netlify.zip && (cd "$OUT" && zip -qr ../arena-clawd-pro-netlify.zip .)
echo "netlify/ dan arena-clawd-pro-netlify.zip siap"
