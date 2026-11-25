---
name: project-londrequ-iklan-motion
description: "Iklan 60 s Londrequ Express Jember (ID), voice-over user, potret + kotak, motion UI interaktif; folder ~/Documents/video-londrequ-iklan-20261004-1246-motion-ads-id"
metadata:
  type: project
---

Dibuat 2026-10-04 dari voice-over user (Generated Audio …12_43PM.wav), pola mesin dari iklan Bidan Virda motionpro (Canvas + `_render/render.mjs`, FMT=sq untuk kotak, K=.6). User menyebut "Laundryku Express" = Londrequ Express [[project-londrequ-express-brand]].

Gerak: transisi pintu mesin cuci (iris + busa) & sapuan biru, chip dipilih kursor, kolom cari diketik, kartu notifikasi + keranjang penuh, coret MENCUCI/MENYETRIKA, seret keranjang ke mesin, daftar layanan dengan saklar, kartu persona digeser, chat HP, CTA WA 0812-3335-6786. Waktu kata dari Whisper per kata (`kata.mjs` → `wordt.mjs` → words.js). Musik sintesis 112 BPM `musik.mjs` (volume kecil, duck di bawah suara).

**How to apply:** revisi edit scenes.js lalu `node _render/render.mjs mp4 x.mp4` (+ `FMT=sq`). Output akhir disalin dengan nama bertimestamp ke out/.
