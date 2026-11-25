---
name: project-uikit-gemi-skrin
description: UI kit gemi (uikit-gemi-20260913-0253-skrin-terkini) — 35 artboard dijana terus daripada enjin app gemi
metadata:
  type: project
---
Dibina 2026-09-13, ganti "Panduan Google AI UI Kit" lama (nama fail sengaja berbeza).
Kanvas: https://claude.ai/code/artifact/679ff588-f447-4cc4-bb76-71ac23afe973
Folder `uikit-gemi-20260913-0253-skrin-terkini/`: 35 `.dc.html` (1 kulit + 28 skrin + 6 papan
jenama), `canvas.json` (2 halaman: Skrin app · Asas jenama), `img/` 71 aset, `gen-uikit.mjs`.

**Cara ia dijana:** `node gen-uikit.mjs` memuat js/ [[project-gemi-app-belajar]] dalam `vm`
dengan DOM tiruan, set keadaan demo (progress, XP, lencana), panggil `SKRIN[nama]()` + `kaki()`,
bungkus dalam bingkai 390×844, dan tulis artboard. Papan jenama pun guna komponen app yang sama
(btn/listCard/segCtl/ring/corak/ic) supaya kit tak boleh terpesong daripada app.

**How to apply:** ubah app → `node gen-uikit.mjs` → seed semula dengan helper skill `/design`
(`seed-canvas.mjs --template ... --artboard <setiap .dc.html> --image img/*.png --canvas canvas.json`)
→ terbit semula ke URL yang sama dengan `contract: "0.1.31"`.
**Perangkap:** rujukan imej dalam .dc.html mesti nama fail kosong (bukan `img/...`) — penjana
sudah tulis semula. Tinggi papan jenama diukur dengan Chrome headless (`document.body.scrollHeight`
pada lebar 1240) sebelum tetapkan `h` dalam canvas.json, kalau tidak kandungan terpotong.
Skrin tidak melukis bar status palsu (peraturan skill /design).
