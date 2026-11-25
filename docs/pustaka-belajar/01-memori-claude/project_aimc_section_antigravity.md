---
name: project-aimc-section-antigravity
description: "Section \"Bangun App dengan Google Antigravity\" (5 modul/25 pelajaran) di AIMC ID — live 26 Sep 2026, build di _build-antigravity-id"
metadata:
  type: project
---

26 September 2026: app AI Masterclass ID ([[project-aimasterclass-edugamelabs]]) dapat section ketiga dari `~/Downloads/modul-baru/03-GOOGLE-ANTIGRAVITY.txt`. User mengira sumbernya BM, padahal TXT itu sudah berbahasa Indonesia. Jadi tidak ada terjemahan, cuma lokalisasi: Sejarah Malaysia/Tahun 4 → Indonesia/kelas 4, dan rujukan "Gemi" dinetralkan.

- Basis: `app-pemula-nocode-id-20260924-1826-section-jual-malaysia` (sama dengan live sebelum deploy ini).
- Hasil: `app-pemula-nocode-id-20260926-0951-section-antigravity` (+ zip). **Sudah DEPLOY** ke aimasterclassid.edugamelabs.com (deploy 6ab733dac41bcab3ef6e25b5); Clerk terverifikasi berjalan di live.
- Build `_build-antigravity-id/`: `jana-ag.py` (memakai parser jm dari [[project-aimc-section-jual-malaysia]] + penyesuaian teks lewat REPL), `kuis_ag.py`, `pasang-section.py` (tidak idempoten), `serve.js` (port 8825, launch.json `aimc-id-antigravity`).
- Modul `sec:'ag'` ada di indeks 36–40. App ID sekarang punya array `SECTIONS` (pola [[project-aimc-section-video-opus]]); section Malaysia tetap memakai kode MY_MODS lama. Sertifikat tetap modul inti.

**Why:** user ingin menambah section berulang kali ke app yang sama, dan minta langsung deploy.
**How to apply:** section berikutnya dimulai dari folder -0951, lalu tambah entri SECTIONS + string UI + koleksi LIBRARY. Clerk jangan disentuh.
