---
name: braineye-belajar-mata
description: PWA belajar mata BM/EN (layout UI kit Fizika SMA, warna TriEye Self, materi BrainEye Studio), LIVE braineye-belajar-mata.netlify.app, artifact W9R62B55oVfwEAoi7GBiwK
metadata:
  type: project
---
2026-10-05: ~/Downloads/braineye-belajar-mata-20261005-2110-pwa-bm-en (vanilla JS, no build). Content = BrainEye Studio (doctor's) Module 1 gaze 9 cases + Module 5 visual 7 cases, notes verbatim EN + BM translation, doctor's 5-question M1 test + case questions (js/data.js). js/engine.js ports BrainEye compute()/fields/RAPD exactly. 13 screens follow ~/Downloads/Physics SMA Student UI Kit.zip (Mula, Masuk, Utama, Topik, Modul, Nota langkah, Helaian ringkas, Pencari lesi, Makmal, Kuiz, Keputusan, Kemajuan, Profil). Lang modes both/ms/en; progress in localStorage bbm-v1. Netlify site 14a11075-1dbb-4289-b853-69f304b333cd.

**Why:** user ("dokter Sikin" content) wanted a seamless student PWA, Malay first + English, kit layout, TriEye colours.
**How to apply:** bump VERSION in sw.js on every change (cache-first; stale CSS showed during testing until caches cleared). Related [[braineye-glass]], [[braineye-3d]], [[trieye-self-video]].

Update 2026-10-07: animated/interactive version in ~/Downloads/braineye-belajar-mata-20261007-2022-animasi-interaktif (not deployed yet). Added css/fx.css + js/fx.js (ripple, per-icon animations via `ic ic-<name>` classes, count-up, tilt, confetti, Web Audio sounds with Profile toggle S.sound, swipe between lesson steps, quiz combo) and js/mascot.js (Brainy & Peek-e SVG from [[braineye-glass]]) on Mula/Masuk/Utama/Keputusan. sw VERSION bbm-v2-animasi.
