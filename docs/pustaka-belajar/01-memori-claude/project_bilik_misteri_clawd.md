---
name: project-bilik-misteri-clawd
description: "Game escape room labirin gaya Pac-Man, Clawd + Si Comot, soalan English kanak-kanak UI BM; remake gaya kertas tinta; artifact 2gdJmtVztb2Uwqw9oJUT6m, belum deploy"
metadata:
  type: project
---

Dibuat 17 Okt 2026. Folder `game-escape-room-clawd-20261017-1613-labirin-english-bm/` (BERDIRI SENDIRI, situs kertas tinta tidak diubah — user minta jangan diotak-atik).
- 4 bilik (Warna, Haiwan, Makanan, Gelap), tiap bilik: peti 1 → pintu merah, peti 2 → pintu biru, peti 3 → kunci emas → pintu KELUAR + soalan eja. Pemadam = power-up kejar Si Comot. Mudah/Sukar.
- Sumber `game.html` (format Artifact tanpa doctype) → `sh build.sh` jana `index.html` untuk Netlify. Peta disemak BFS (`__game.petaRosak`).
- Kait ujian: `__game.langkah(s)`, `kePeti(n)`, `keKeluar()`, `jawabUji(b)`, `selesaiPeti()`; `?bilik=N`.
- Artifact https://claude.ai/artifact/2gdJmtVztb2Uwqw9oJUT6m; zip ~/Downloads/...-netlify.zip; belum deploy.
Lihat [[project-game-kertas-tinta]], [[project-petualangan-fotosintesis]].
