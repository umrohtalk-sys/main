---
name: aimc-section-threads
description: "AIMC ID section sec:\"th\" Jual Produk Digital lewat Threads + tombol ukuran huruf, LIVE 23 Okt 2026, folder -20261023-1943"
metadata:
  node_type: memory
  type: project
  originSessionId: 1b95c5da-3b94-415d-a823-0b0dbc7d9426
  modified: 2026-10-23T12:50:54.201Z
---

23 Okt 2026: app AI Masterclass ID ([[project-aimasterclass-edugamelabs]]) dapat section `sec:'th'` "Jual Produk Digital lewat Threads": 8 modul × 3 langkah + 32 kuis + koleksi thmula/thkotak/thlampiran. Isi = sari RINGKAS (user minta "inti-intinya aja, step by step") dari threads-jual-produk-digital-id-20261023-1400/MENJUAL-...-INDONESIA-20261023-1700.txt (16 modul). Versi BM (app-pemula-nocode-ms-20261023-1957-section-threads, SW aimc-v4-threads, LIVE aimasterclass.edugamelabs.com) = th_ms.py: TXT BM aslinya masih tentang pasaran Indonesia (Rp, QRIS), jadi angka & peraturan DITUKAR ke Malaysia dari _build-jual-malaysia/04-MALAYSIA-DIGITAL-MARKET-SYSTEM.txt (Threads 3,6 juta, DuitNow/FPX/TNG, CPETTR 2024, PDPA, SSM/LHDN, TikTok Shop MY larang produk digital, NSRC 997). Produk contoh BM: Pek Prompt AI RPH RM29. Label huruf BM: "Saiz huruf".

Juga ditambah pilihan ukuran huruf (4 level, `zoom` pada isi pelajaran & bab panduan, disimpan di localStorage `aimc.fontsize`), tombol di atas tiap pelajaran + kartu di Profil.

- LIVE dari `app-pemula-nocode-id-20261023-1943-section-threads`, SW `aimc-v6-threads`. Clerk tidak disentuh (md5 sama).
- Build `_build-threads/`: th_id.py (isi), dsl.py (+F = blok flow), jana-th.py [ms] <app> → js/data-threads.js, pasang-th.py [ms] <app> (tidak idempoten; basis folder -20260929-1911 masing-masing), serve.js (port 8890, launch "aimc-id-threads", folder ikut env AIMC_DIR, lalai kini BM).

**How to apply:** section berikutnya mulai dari folder -1943 (ID) / -1957 (BM); patch pasang-* lama mengandalkan string yang kini sudah berubah di app.js (pelajaran/guide item dibungkus div zoom).
