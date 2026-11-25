---
name: project-misi-detektif-nyamuk
description: "Game detektif BM Pendidikan Kesihatan Tahun 3 (denggi & malaria) model ASSURE, Clawd detektif + Raja Comot; artifact XsRvQDP, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: 06de3b60-51d3-4693-b4a8-e047bdcc027d
  modified: 2026-10-31T21:38:30.691Z
---

Dibuat 1 Nov 2026. User minta game "lebih banyak pembelajaran, game di awal", dikemas sebagai detektif, aset gabungan game Clawd (Arena Clawd Pro, Clawd Kilat, Siaga Merdeka). Halaman keputusan ASSURE sebelumnya: folder `keputusan-game-assure-nyamuk-20261101-0410/`, artifact D6aaBbXHT7PTVMo3k9oq3j.
- Folder `game-misi-detektif-nyamuk-20261101-0417-detektif-clawd-bm/` (index.html + css/gaya.css + js/00..15 + 99, BACA-SAYA.md). Semua teks pelajaran di js/01-data.js.
- Alur: prolog tangkap 3 nyamuk → peta Taman Seri Bersih → 6 stesen berurutan (TP1–TP6: kenal, rantai, simptom, ronda, cerita bercabang, poster) masing-masing kad pelajaran dengan petunjuk diketik + cabaran → Paya Raja Comot Uji Minda 8 soalan (salah tak kalah, soalan diulang) → sijil + laporan TP. Si Comot jatuhkan takungan di peta, dibersihkan selepas stesen ronda. Tombol Dengar (speechSynthesis ms-MY), saiz huruf.
- Isi: malaria ditulis "parasit" (buku teks salah tulis virus); fogging oleh pegawai kesihatan.
- Artifact = `_artifact/misi-detektif-nyamuk.html` dijana `python3 _artifact/bina.py`; https://claude.ai/artifact/XsRvQDPu1Pt9W6UrieaEFB
- Uji: `node ~/.claude/skills/studio-game-web/scripts/main-uji.mjs . uji/senario.json` (kait `__game.mainStesen(i, salah, henti)` / `mainAkhir`). Lulus telefon + desktop.
- Zip ~/Downloads/misi-detektif-nyamuk-20261101-0438-netlify-siap-upload.zip; belum deploy.
Lihat [[project-arena-clawd]], [[feedback-output-folder]].
