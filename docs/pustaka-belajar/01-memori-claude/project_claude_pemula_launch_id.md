---
name: project-claude-pemula-launch-id
description: LP peluncuran Claude untuk Pemula (ID) gaya kajian kasus seperti LP gemi — folder claude-pemula-launch-id-20260926-1100-kajian-kes, artifact SCQGcWe, LIVE di lpindo
metadata:
  type: project
---
2026-09-26: user minta versi Indonesia dari [[project-gemi-launch-kajian-kes]] untuk app AI Masterclass ID ([[project-aimasterclass-edugamelabs]]), tapi fokus inti (bukan semua mockup), desain sebagus LP gemi. Folder `claude-pemula-launch-id-20260926-1100-kajian-kes/` (Netlify-ready, 1.3 MB). Artifact https://claude.ai/artifact/SCQGcWeZFEMbGdQCGKqvAP. **LIVE di lpindo.edugamelabs.com** (26 Sep 2026, deploy 6ab75d06d74a19284e6f9da9, siteId 93707aa2-4f08-47f9-a8ad-36942f620406) — menggantikan LP jualan -0923-id-font-lama. Deploy dari salinan bersih `claude-pemula-launch-id-20260926-1100-kajian-kes-netlify/` (tanpa _sumber).

Jana: `node _sumber/gen.mjs` — baca data dari `app-pemula-nocode-id-20260926-0951-section-antigravity` (41 modul/395 pelajaran/199 kuis: inti 11, Antigravity 5, Malaysia 25). CSS = `dasar.css` (lp.css gemi yang di-retoken ke krem/oranye) + `lp.css` (lapisan Claude Pemula). Maskot Si Bulat: `bulat-svg.js` (sama dgn js/mascot.js app, wajah dipisah mata/mulut untuk kedip/lirik), dipakai Node & browser. Layar: `_sumber/tangkap/tangkap.mjs` (app dilayani port 8832, request Clerk diblok, AUTH disimulasikan) → 15 webp. Font Outfit + Plus Jakarta + DM Mono. LINK_BELI = myr.id Rp 55.000 (sama dengan lpindo). Preview launch.json "claude-pemula-launch-id" port 8833.

2026-09-26 13:02: teks "AI MASTERCLASS · ID" (logo) dan domain aimasterclassid di footer DIHAPUS — link app itu rahasia, jangan pernah tampil di LP. Terkini: folder `claude-pemula-launch-id-20260926-1302-hapus-aimc` (+ `-netlify`), deploy 6ab75ff3e0a386487bec890d ke lpindo.

**Why:** klaim di halaman hanya yang terbukti di app/LP live (tanpa janji "update gratis", tanpa klaim sinkron lintas perangkat).
**How to apply:** ubah teks di gen.mjs lalu jana ulang ke folder bertanggal baru; deploy perlu site Netlify baru atau pilih dari user.
