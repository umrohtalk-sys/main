---
name: project-gemi-alur-interaktif
description: "Redesign app gemi v3.0 ikut pola UX rujukan Mobbin (Brink podcast) — folder -20260917-0317-redesign-alur-interaktif, log masuk mock"
metadata: 
  node_type: memory
  type: project
  originSessionId: 419c43ab-fb86-485a-94a5-7b1476538eb6
  modified: 2026-09-16T20:50:51.856Z
---

Dibina 2026-09-17 dalam `gemi-app-20260917-0317-redesign-alur-interaktif/` (salinan [[project-gemi-app-belajar]]).
Rujukan: 78 frame `~/Downloads/screen-capture_3__frames/` (Mobbin "Brink — Podcast player"); analisa di
`_analisa/ANALISA-UIUX-REFERENSI-BRINK.md` (episod→pelajaran, player→pembaca, transkrip→Mod Fokus, Brief→Kuiz Kilat).

**Why:** pengguna mahu ambil intinya sahaja (bukan salin podcast), kekal maskot + brand kit, sangat interaktif & readable;
log masuk/keluar cuma butang MOCK — belum disambung ke Clerk (pengguna sebut Clerk untuk masa depan).
**How to apply:** app.js lama dipecah: js/teras.js (state, kulit modul, komponen), skrin-utama.js, skrin-belajar.js,
lapis.js (sheet/dialog), app.js (router, dok, tindakan, suara Web Speech), i18n3.js (label + MINAT). Uji dengan harness vm
(scratchpad uji/uji.mjs pola) + browser; SW cache-first — naikkan VERSI sw.js & unregister SW sebelum uji semula.
Sticky dalam skrin perlu `overflow-x:clip`, bukan `overflow:hidden`. Belum deploy ke Netlify.
