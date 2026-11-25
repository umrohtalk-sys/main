---
name: gemi-film-preview-app
description: Film potret 60s "preview app gemi" — tangkapan layar asli app dalam HP + titik ketuk, maskot berkedip/melirik; folder video-gemi-app-preview-20260919-0451-potret
metadata:
  type: project
---
Dibuat 2026-09-19. Rujukan: ~/Downloads/YTDown_com_YouTube_Best-Motion-Graphics-_frames (promo app Converse Bank oleh Burnwe: kaca biru, titik ketuk hitam, HP miring gelap, kolase, kartu "Get", logo).
Bahasa Indonesia, harga Rp55.000 / RM15 sekali bayar (sama dengan [[gemi-film-promo]]).

Paip: `_render/cap.mjs <folder> steps.json` menangkap app [[project-gemi-maskot-svg-hidup]] (390x844 @3x, server http dalaman, state disemai lewat evaluateOnNewDocument — app menimpa localStorage masa unload).
Langkah `*-penuh` = jalur skrol penuh + `*-kaki` dok bawah. `maskot-varian.mjs` jana SVG kelip (-h/-k, .gm-l scaleY) & lirik (-l/-r, .gm-p translate); `raster.mjs` tukar ke WebP guna Chrome (tiada cwebp).
Film: gemi-app-preview-potret.html (13 adegan, M_FILES = senarai varian maskot). `node render.mjs mp4` → out/*-audio-keras.mp4 (-14.5 LUFS). siap-netlify/ = index.html + img.
Artifact: https://claude.ai/artifact/JMgNg66TZa4JYvqhNHZf56

**Why:** user mahu video terangkan fitur app dengan preview klik/skrol sebenar, warna brand + maskot interaktif.
**How to apply:** tukar layar → tambah langkah dalam steps.json, tangkap semula, raster, rujuk dalam APP[]; koordinat ketuk diambil dari dump rect data-act (unit app 390 lebar).
