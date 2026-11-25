---
name: project-fa-jagung
description: FA Jagung — app pupuk/jadwal/SOP jagung untuk petani (ID), remake PWA huruf besar dari FA Jagung V1; belum deploy
metadata:
  type: project
---

Remake 2026-09-26 dari `~/Downloads/FA Jagung V1.html` → folder `fa-jagung-20260926-0856-remake-pwa/` (netlify/, html/, ui-kit/, _build/). Zip: `fa-jagung-20260926-0856-remake-pwa-netlify.zip`. Artifact app https://claude.ai/artifact/JtALv1CwXU3GWySj1RxC5J, UI kit https://claude.ai/artifact/9kjt8szrUUSeJs2kPMNGuE. Preview launch.json "fa-jagung" port 8841. Belum deploy Netlify.

Sumber kebenaran: `netlify/js/{data,app,pwa,main}.js` + `netlify/css/app.css`; `python3 _build/bangun.py` menjana html/ offline, ui-kit/ (dari `_build/kit.src.html`, 10 layar hidup dirender `buatApp()`), dan dua potongan artifact. Data SOP/pupuk disalin utuh dari V1 — jangan diubah tanpa minta user.

**Why:** user minta UI bagus untuk petani (huruf besar), PWA + langkah pasang, gabung referensi app lain (gemi PWA, KIDO kit, Bidan Virda palet hijau).
**How to apply:** naikkan VERSI di sw.js setiap ubah berkas; saat uji lokal unregister SW + hapus cache dulu (cache-first). Bahasa hanya Indonesia (belum ada Jawa/Madura).
