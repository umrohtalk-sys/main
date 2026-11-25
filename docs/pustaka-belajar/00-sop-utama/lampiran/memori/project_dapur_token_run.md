---
name: project-dapur-token-run
description: Run agentic 21 Nov 2026 — artifact Dapur Token (100 use case + 10 sistem), hasil di ~/Downloads/dapur-token-jalan-20261121-1403, Bank Konten IG+Threads, routine S1 Senin 07:00
metadata:
  type: project
---
21 Nov 2026: user minta habiskan kuota mingguan untuk sistem agentic yang relevan bisnis. Artifact rencana: https://claude.ai/artifact/XoF1j6YktACoY8toY4mv37 (100 use case, 10 sistem S1–S10, simulasi IG asli).
Folder hasil: ~/Downloads/dapur-token-jalan-20261121-1403/ (01 S1 analis IG, 02 riset game remake, 03 naskah format juara, 04 video kit, 05 katalog aset, 06 funnel, 07 app Bank Konten, 08 mentoring, 09 SOP, 10–12 prototipe game, 13 video jembatan, 14 draf gaya video). Scheduled task `s1-analis-konten-ig-mingguan` Senin 07:00 (Bypass).

**Why:** user TIDAK mau bank soal / soalan (Cambridge dll.) dan tidak perlu jadwal 48 jam; fokus video, app, game, + bank konten judul Threads & IG jadi satu.
**How to apply:** ide konten baru → skema bank-konten-items.json (judul, platform ig|threads|keduanya, format, pilar, bahasa, hook, isi dengan "\n---\n" antar post thread, cta, tags, sumber) supaya bisa diimpor ke app Bank Konten. Data IG: format perbandingan negara ≈46% tayangan, promo produk ≈1,5%; CTA jelas di caption menaikkan komen minat produk. Penjaga laptop `_data/penjaga.sh` menidurkan laptop jika 20 menit tanpa aktivitas.

Selesai 21 Nov malam: 8 game baru (10,11,12,18,19,21,22,23 — semua lulus bot HP+desktop, belum diuji murid, belum deploy), video promo 24-video-promo-5-game (35 s), portofolio 17 (43 item), QA 16 (38 situs 200), radar 15. Bank Konten 329 item; seed hasil dijana `python3 -I _data/gabung-seed.py` → 07-bank-konten/data/seed-hasil.js. Dasbor: index.html di folder run. Artifact v2 punya bagian "Hasil run".
Deploy 21 Nov: Bank Konten LIVE https://bank-konten-auzan.netlify.app (siteId f501ce0d-b0f3-463b-a3f0-a85d8cd23118, deploy MCP dari salinan bersih). 8 game masuk Prompt Generator Pro + game-preview (lihat [[project-prompt-generator-game]]), bukan situs galeri terpisah — user minta masuk PG Pro.
