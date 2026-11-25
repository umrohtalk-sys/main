---
name: project-kido-belajar-inggris
description: "KIDO — app belajar bahasa Inggris anak (folder kido/), live di kido-belajar-inggris.netlify.app, UI kit sebagai Artifact"
metadata: 
  node_type: memory
  type: project
  originSessionId: c8c4e740-c2b0-4fd7-8e93-2b6bb7d57345
  modified: 2026-09-02T12:49:54.079Z
---

KIDO adalah app belajar bahasa Inggris untuk anak, dibangun 2 September 2026 dari UI kit KODA
(Claude Design project 0ac32008-a71e-448b-a0fe-4a571d920d99) — 14 layar, 1:1 dengan artboard aslinya.
Awalnya dwibahasa EN/BM, lalu diterjemahkan penuh ke EN/ID (toggle EN/ID, string bertanda `data-ms`).

- Folder: `kido/` (index.html = app, ui-kit.html = lembar artboard, screens-a/b.js = sumber tunggal layar)
- Netlify site id `efc33702-7b47-492d-83af-5308b8a7cc38` → https://kido-belajar-inggris.netlify.app
- Design-kit sheet (format seperti BioLab UI Kit): https://claude.ai/code/artifact/16a5600a-a6c5-42f5-8a66-77cb9f127652

**Why:** dua "UI kit" berbeda ada di project ini — `ui-kit.html` (artboard, ikut Netlify) dan Artifact
design-kit (spec sheet, sengaja tidak di-Netlify, user hanya minta linknya).
**How to apply:** kalau diminta update KIDO, edit `screens-a/b.js` sekali (dipakai app + kit), lalu deploy
ulang dari dalam folder `kido/` — lihat [[reference-netlify-deploy-mcp]].
