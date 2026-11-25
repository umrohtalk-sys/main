---
name: project-rbt-app-preview
description: Preview RBT App (Reka Bentuk & Teknologi BM) — video 45s potret gaya gemi + carousel 5 slaid BM/ID, maskot Biko memerang
metadata:
  type: project
---
2026-09-26. App sumber: ~/Downloads/deploy-6a8a792eb14d3abbdb574164 (RBT App, 8 modul/26 pelajaran/34 kuiz, maskot "Biko si memerang" dari icons.js maskot(), mood biasa/gembira/fikir/sedih/wow).
- Video: `app matematika/video-rbt-app-preview-20260926-1057-potret-bm`, src/scenes/RBT.tsx (struktur 12 babak gaya gemi, disalin dari [[project-claude-pemula-bina-app-video]] versi gaya-gemi), lagu sama 116 BPM. _aset/cap.mjs tangkap skrin + jana SVG Biko (tambah mood "kelip" untuk kelip). Output ~/Downloads/rbt-app-preview-20260926-1108-video-45s-bm-potret.mp4.
- Carousel: `app matematika/carousel-rbt-app-preview-20260926-1105-5-slaid` (pola [[project-englisha-preview-video]] carousel; MS default + ID; Biko dilukis sebaris dalam template, kelip/lirik; build via node _sumber/build.mjs). Zip ~/Downloads/rbt-app-carousel-20260926-1108-5-slaid-netlify.zip. Belum deploy.
- Gotcha: html2canvas merosakkan kad yang ada box-shadow spread negatif + border (jalur kelabu) — guna kad tanpa border/bayang.
- App ada pepijat kecil: ikon lencana (star/fire/book/trophy/medal/compass) tiada dalam IKON, jadi bulatan lime kosong di Profil.

## Versi Indonesia (1 Okt 2026)
Folder video-rbt-app-preview-20261001-0127-potret-id: teks video ID + layar app diterjemahkan lewat _aset/id-app.js (override MODUL/LENCANA/SLAID + ganti teks UI tiap lukis()), nama murid Raka Pratama, Tingkatan→Kelas 7–9, carian "gir". Output /Users/auzanhasfi/Downloads/rbt-app-preview-20261001-0131-video-45s-indonesia-potret.mp4.
