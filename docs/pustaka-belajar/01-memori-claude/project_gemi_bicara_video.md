---
name: project-gemi-bicara-video
description: Video 56s potret BM tanpa suara — maskot gemi SVG bercakap (mulut .gm-m) + latar motion, gaya rujukan igexport-DeZWCyuihJr (classai.id)
metadata:
  type: project
---
2026-10-12: user minta remake rujukan ~/Downloads/igexport-DeZWCyuihJr_frames (latar biru gelap, takarir kata demi kata, maskot bercakap kanan bawah, "Komen X" di akhir) untuk app gemi, TANPA suara, maskot gemi bercakap.
Folder `video-gemi-bicara-20261012-2131-potret-tanpa-suara/`. `_render/mulut.mjs` bungkus mulut+lidah dalam `<g class="gm-m">` (9 pose: wave backpack cape globe laptop tablet tablet2 celebration heart) + awalan ID gradien per pose → maskot-bicara/. Film = `_sumber/film.src.html` (skrip SKRIP [masa,'teks *kunci*'], BABAK, POSE, SKRIN) → `node _render/gen.mjs` → gemi-bicara-potret.html (pratonton main) → `node _render/render.mjs <nama>.mp4` (~1.5 min). Semak: `node _render/sheet.mjs <t...>` → _semak/. Skrin app dari gemi-launch-20260926-0800-kajian-kes-bm. Belum ada suara/muzik, belum deploy.
**How to apply:** tukar copy di SKRIP; nak suara nanti → selaraskan masa SKRIP dengan voice-over.
