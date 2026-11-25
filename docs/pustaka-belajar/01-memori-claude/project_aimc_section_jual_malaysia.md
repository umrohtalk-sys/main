---
name: project-aimc-section-jual-malaysia
description: "Section baru \"Jual Produk Digital ke Malaysia\" (25 modul) di app AI Masterclass ID — folder, generator, dan keputusan sertifikat"
metadata:
  node_type: memory
  type: project
  originSessionId: 2e181141-b591-4c57-be2d-8a919b484bd2
  modified: 2026-09-24T11:41:48.292Z
---

Pada 24 September 2026 app AI Masterclass versi ID ([[project-aimasterclass-edugamelabs]]) dapat section kedua di tab Modul: "Jual Produk Digital ke Malaysia" — 25 modul / 197 pelajaran / 100 kuis + 3 koleksi (data pasar, bonus template & 100 prompt, lampiran).

- Basis: folder unduhan deploy live `~/Downloads/deploy-6a9bdc242b99195751f03f71` (11 modul, bukan 10 seperti di readme lamanya).
- Hasil: `app matematika/app-pemula-nocode-id-20260924-1826-section-jual-malaysia` (+ zip `-1841-`). Belum deploy — user deploy sendiri.
- Data `js/data-malaysia.js` DIJANA oleh `app matematika/_build-jual-malaysia/jana-malaysia.py` dari TXT materi; kuis/tag/subjudul ditulis tangan di `kuis_malaysia.py`. `preview.js` di folder sama mencetak blok untuk ditinjau.
- Modul Malaysia di-push ke `MODULES` dengan `sec:'my'`; koleksi di `LIBRARY` dengan `sec:'my'` + `pos:'before'|'after'`. Blok baru `table` dan `flow` ditambah di `blockHTML` (app.js).
- Tes lokal: `.claude/launch.json` nama `aimc-id-malaysia` (port 8823); login dilewati via konsol (`AUTH.user={id:'tes'}`) karena Clerk live menolak localhost.

**Why:** sertifikat & level sengaja tetap dihitung dari 11 modul inti (`CORE_MODS`, placeholder `{CM}/{CL}/{CQ}`), supaya pengguna yang sudah lulus tidak kehilangan sertifikat saat section baru ditambah.
**How to apply:** kalau menambah section/trek lain, pakai pola `sec:` yang sama dan jangan masukkan ke syarat sertifikat kecuali user minta; Clerk tetap tidak disentuh.
