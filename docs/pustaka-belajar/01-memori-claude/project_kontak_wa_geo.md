---
name: project-kontak-wa-geo
description: "Tombol kontak melayang kontak.js (WA/IG/Threads) + redirect bahasa ikut negara di lptools, lpindo/lpmalay, demoprompt, galeri video — LIVE 10 Nov 2026"
metadata:
  node_type: memory
  type: project
  originSessionId: c144f8bb-16a7-40d8-aed4-12c686e88326
  modified: 2026-11-10T11:08:59.360Z
---

10 Nov 2026, semua LIVE. `kontak.js` (satu file, sama di semua situs): tombol hijau melayang di KIRI bawah (kanan sudah ada maskot lptools & tombol Pro demo); diklik → panel ke atas: WhatsApp wa.me/6285704973827 (teks pra-isi ikut bahasa + `data-halaman`), DM Instagram ig.me/m/auzan_hasfi, DM Threads threads.com/@auzan_hasfi. Bahasa ID/MS/EN dari `<html lang>`, ikut berubah saat bahasa diganti. Naik sendiri di atas `.ck-bilah` lptools di HP. Event Clarity kontak_buka/kontak_wa/ig/threads. Sumber ikon Simple Icons.

Folder (~/Downloads, -20261110-1801-*): lp-prompt-generator-…-kontak-wa-geo (jana.py blok "REVISI 10 Nov"), lp-edugamelabs-{id,ms}-…-kontak-wa-geo (rakit.mjs blok "m."; APP dicari juga di app matematika), prompt-generator-demo-…-kontak-wa-geo (push 7ac91ac), demo-prompt-video-…-kontak-wa.

Geo (`_redirects`, Netlify Country): lptoolsid/lpindo → MY, BN, SG ke versi Melayu; lptoolsmy/lpmalay → ID ke versi Indonesia; negara lain tetap di halaman yang dibuka (11 Nov: LP kini punya EN dan digabung, lihat [[project-lp-3bahasa-satu-situs]]). `?lang=xx` = tetap di halaman itu, tidak dialihkan. demoprompt `/` → /id (ID), /ms (MY, BN), /en (SG & lainnya) dengan `?geo=1`; app.js memakai bahasa tersimpan di localStorage kalau ada lalu membuang geo=1. Galeri Prompt Video hanya BM, tanpa geo.

**Why:** user mau semua LP & demo bisa konsultasi lewat WA/IG/Threads, dan pengunjung otomatis dapat bahasa negaranya.
**How to apply:** uji geo dengan `curl -sI -H "Cookie: nf_country=MY" <url>`. Pengguna di Indonesia yang mau melihat versi MY harus pakai `?lang=ms`. Versi English LP belum dibuat. Lihat [[project-lp-pg-wtm-checkout]] [[project-lp-ilmu-jadi-produk]] [[project-prompt-generator-demo]] [[project-demo-prompt-video]].
