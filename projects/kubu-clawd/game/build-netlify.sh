#!/bin/sh
# game.html (format Artifact) -> ../kubu-clawd-netlify/ (folder siap unggah ke Netlify) + ../kubu-clawd-netlify.zip
cd "$(dirname "$0")"
OUT=../kubu-clawd-siap-upload-tmp/game-netlify
rm -rf "$OUT" && mkdir -p "$OUT"
{ printf '<!doctype html>\n<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  printf '<meta property="og:title" content="Kubu Clawd"><meta property="og:description" content="Game strategi desa matematika gaya kertas & tinta: bangun desa, latih pasukan, serbu kampung Si Comot, dan jawab soal untuk mempercepat bangunan dan mengeluarkan mantra."><meta property="og:image" content="sampul.jpg"><meta name="theme-color" content="#efebe2">\n'
  cat game.html; printf '\n</html>\n'; } > "$OUT/index.html"
cp ../sampul-kubu-clawd.jpg "$OUT/sampul.jpg"
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
Kubu Clawd - folder siap unggah ke Netlify.
Cara 1: app.netlify.com -> Add new site -> Deploy manually -> seret folder ini (atau zip-nya).
Cara 2: netlify deploy --dir . --prod  (dari dalam folder ini, dengan Netlify CLI).
Coba di komputer: dari dalam folder ini jalankan  python3 -m http.server 8080  lalu buka http://localhost:8080/
Isi: index.html (game lengkap satu file), sampul.jpg, netlify.toml, robots.txt.
T



# satu folder siap unggah: game (Netlify) + prompt 3 bahasa, plus zip-nya
PAK=../kubu-clawd-siap-upload
rm -rf "$PAK" && mkdir -p "$PAK/prompt"
cp -r "$OUT" "$PAK/game-netlify" && rm -rf ../kubu-clawd-siap-upload-tmp
cp PROMPT-id.md PROMPT-ms.md PROMPT-en.md "$PAK/prompt/"
cp ../sampul-kubu-clawd.jpg "$PAK/prompt/sampul.jpg"
cat > "$PAK/BACA-SAYA.txt" <<'T'
KUBU CLAWD - satu folder siap unggah

game-netlify/   Game lengkap. Seret folder ini ke Netlify (app.netlify.com -> Add new site -> Deploy manually).
                Isi: index.html, sampul.jpg, netlify.toml, robots.txt.
prompt/         Prompt detail untuk membuat game ini: PROMPT-id.md (Indonesia), PROMPT-ms.md (Melayu),
                PROMPT-en.md (Inggris), plus sampul.jpg untuk kartu di Prompt Generator.

Prompt sengaja dipisah dari folder game supaya tidak ikut tayang di situs game.
Coba di komputer: buka game-netlify/index.html di Chrome, atau dari dalam game-netlify/ jalankan
  python3 -m http.server 8080
lalu buka http://localhost:8080/
T
rm -f ../kubu-clawd-siap-upload.zip && (cd .. && zip -qr kubu-clawd-siap-upload.zip kubu-clawd-siap-upload)
echo "kubu-clawd-siap-upload/ dan kubu-clawd-siap-upload.zip siap"
