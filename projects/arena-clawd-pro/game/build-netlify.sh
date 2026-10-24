#!/bin/sh
# game.html + PROMPT-*.md -> ../arena-clawd-pro-siap-upload/ (satu folder: game siap Netlify + prompt) dan zip-nya
cd "$(dirname "$0")"
PAK=../arena-clawd-pro-siap-upload
OUT=$PAK/game-netlify
rm -rf "$PAK" && mkdir -p "$OUT" "$PAK/prompt"
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
cp PROMPT-id.md PROMPT-ms.md PROMPT-en.md "$PAK/prompt/"
cp ../sampul-arena-clawd-pro.jpg "$PAK/prompt/sampul.jpg"
cat > "$PAK/BACA-SAYA.txt" <<'T'
ARENA CLAWD PRO - satu folder siap unggah

game-netlify/   Game lengkap. Seret folder ini ke Netlify (app.netlify.com -> Add new site -> Deploy manually).
                Isi: index.html, sampul.jpg, netlify.toml, robots.txt.
prompt/         Prompt detail untuk membuat game ini: PROMPT-id.md (Indonesia), PROMPT-ms.md (Melayu),
                PROMPT-en.md (Inggris), plus sampul.jpg untuk kartu di Prompt Generator.

Prompt sengaja dipisah dari folder game supaya tidak ikut tayang di situs game.
Coba di komputer: buka game-netlify/index.html di Chrome, atau dari dalam game-netlify/ jalankan
  python3 -m http.server 8765
lalu buka http://localhost:8765/
T
rm -f ../arena-clawd-pro-siap-upload.zip && (cd .. && zip -qr arena-clawd-pro-siap-upload.zip arena-clawd-pro-siap-upload)
echo "arena-clawd-pro-siap-upload/ dan arena-clawd-pro-siap-upload.zip siap"
