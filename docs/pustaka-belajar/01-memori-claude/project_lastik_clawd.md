---
name: project-lastik-clawd
description: "Game lastik gaya Angry Birds, 5 jenis Clawd, soalan matematik sebelum lontaran, UI BM; artifact VC6ALjSEtSLur8zZPPEtj4, belum deploy"
metadata:
  type: project
---

Dibuat 17 Okt 2026 sebagai lanjutan [[project-bilik-misteri-clawd]]. Folder `game-lastik-clawd-20261017-1642-angry-matematik-bm/`.
- Fizik Matter.js 0.19.0 (cdnjs). 5 Clawd: biasa/laju/bom/pecah/berat (warna + aksesori beza). Sebelum tiap lontaran: pilih Clawd + soalan; betul = kuasa aktif (ketuk skrin / butang Kuasa), salah = tanpa kuasa.
- 5 tahap: Tambah, Tolak, Darab, Bahagi, Campur (Raja Comot). Tahun 1–2 / 3–4. Bintang di localStorage.
- Sumber game.html → `sh build.sh` → index.html. Kait ujian: `__game.pilih/jawabUji/lontar(deg,kuasa)/bidik/kuasa/langkah`.
- Pengajaran: jangan beri dua fungsi nama sama (`frame`) — punca time NaN; buang badan Matter selepas Engine.update (killQ), bukan dalam collisionStart.
- Artifact https://claude.ai/artifact/VC6ALjSEtSLur8zZPPEtj4; zip ~/Downloads/...-netlify.zip; belum deploy.
