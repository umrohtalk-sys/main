---
name: project_threads_screenshot_extension
description: "Extension Chrome MV3 untuk screenshot thread Threads (manual tombol kamera + Run otomatis), folder di Downloads"
metadata:
  node_type: memory
  type: project
  originSessionId: 0d85dcc9-8307-44da-ae43-c27e7db9e3dc
  modified: 2026-11-18T11:51:03.690Z
---

Extension "Threads Screenshot" (18 Nov 2026) di ~/Downloads/threads-screenshot-extension-20261118-1729/ — dipasang lewat chrome://extensions → Load unpacked.
- Manual: tombol kamera muncul saat kursor di atas thread, shortcut Alt+Shift+S.
- Run: mode "Di beranda" (scroll + potret di tempat) atau "Buka tiap thread" (klik → potret → back). Riwayat yang sudah diambil disimpan di storage.local.
- Hasil: ~/Downloads/Threads Screenshot/threads-<user>-<idpost>.png; thread panjang digulir & disambung.
- Pemilih post: div[data-pressable-container="true"] + cadangan dari link /post/ yang berisi <time>. Kalau Threads ganti DOM, perbaiki di content.js (allPosts/fallbackPosts).
- Sudah diuji di halaman tiruan (headless Chrome, puppeteer installExtension); belum diuji di threads.com asli.
