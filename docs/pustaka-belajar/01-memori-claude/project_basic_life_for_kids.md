---
name: project-basic-life-for-kids
description: App kemahiran hidup BM untuk kanak-kanak 5-10 tahun; sumber di folder deploy Downloads, UI kit kanvas di Artifact
metadata:
  type: project
---

"Basic Life for Kids" — app permainan kemahiran hidup Bahasa Melayu (umur 5–10). Sumbernya satu fail `index.html` (~1959 baris, semua skrin dirender oleh objek `$skrin`) dalam folder deploy Netlify `/Users/auzanhasfi/Downloads/deploy-6a7dc1edb90a573c319cc52a`, bersama `ui-kit.html` dan `panduan.html`.

Pada 2026-09-06 saya bina UI kit kanvas per-skrin (36 artboard, 5 muka) di `app matematika/ui-kit-basic-life-kids-20260906/` dan terbit ke Artifact https://claude.ai/code/artifact/77250c5d-dc18-489b-91fd-853f22e2e6f2 — republish dengan file path yang sama.

**Why:** markup setiap artboard dijana dengan menjalankan enjin app sebenar dalam Node (`harness.mjs` guna `vm` + stub DOM), bukan ditaip semula — jadi nilai reka bentuk tak pernah terpesong dari app.

**How to apply:** untuk kemas kini kit: edit `build.mjs` → `node build.mjs && node measure.mjs` (ukur tinggi guna preview server `ukur-ui-kit`) → `node layout.mjs` → seed semula → republish. Ikut [[feedback-versioned-filenames]] dan [[feedback-netlify-ready-output]].
