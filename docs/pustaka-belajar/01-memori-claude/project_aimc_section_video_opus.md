---
name: project-aimc-section-video-opus
description: "Section \"Bina Video dengan Claude Opus\" (6 modul/30 pelajaran) di app AI Masterclass BM — folder, 3 skrip build, pola SECTIONS"
metadata:
  node_type: memory
  type: project
  originSessionId: 2e181141-b591-4c57-be2d-8a919b484bd2
  modified: 2026-09-24T21:18:41.674Z
---

25 September 2026: app AI Masterclass versi BM ([[project-aimasterclass-edugamelabs]]) dapat section baru dari TXT [[project-modul-video-claude-opus]].

- Basis: unduhan deploy live `~/Downloads/deploy-6a9bdc05c7e4b26a8ffadc9d` (11 modul BM, app.js identik dengan versi ID sebelum patch).
- Hasil: `app matematika/app-pemula-nocode-ms-20260925-0411-section-video-claude-opus` (+ zip `-0418-`). Belum deploy.
- Build di `app matematika/_build-video-opus/`: `jana-video.py` (TXT → js/data-video.js; meminjam parser `_build-jual-malaysia/jana-malaysia.py` via importlib, tambah tabel lajur-rata, kotak/pohon, arahan terminal, prompt berbilang baris), `kuis_video.py` (6 modul = Bahagian A–F, tajuk pelajaran, 30 kuiz), `pasang-section.py` (patch app BERSIH — tidak idempoten).
- Pola app: modul `sec:'vid'`, koleksi `sec:'vid'` + `pos`, dan array `SECTIONS` di app.js (lebih umum daripada versi ID yang hardcode `MY_MODS`). Sijil/tahap tetap modul inti (`CORE_MODS`).

**Why:** pengguna mahu tambah section berulang kali ke app yang sama; SECTIONS membolehkan section berikutnya cukup satu baris config + data.
**How to apply:** untuk section baru, tambah entri SECTIONS + UI strings + koleksi LIBRARY; jangan sentuh Clerk. Tes lokal via launch.json `aimc-ms-video` (port 8824), login dilewati di konsol.
