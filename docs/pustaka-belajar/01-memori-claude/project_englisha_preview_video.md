---
name: project-englisha-preview-video
description: Video preview Englisha 45s ID (Remotion + kanvas, maskot kucing gemi SVG), UI kit grid PNG, dek 3 slide artifact 76pz2Qm
metadata:
  type: project
---
2026-09-23. User minta preview app Englisha (folder englisha/, app anak BM/EN) dengan pesan: dibuat pakai Claude Opus di Google Antigravity, gratis dengan Google AI Pro, dibangun dengan fundamental app gemi. Musik ~/Downloads/gemi-app-showcase [usesuno.com].mp3 (233 s; 116 BPM, ketukan ~0.0 s, drop 8.27 s) dipotong 45 s.
- Video: folder video-englisha-preview-20260923-2041-potret-id (composition EnglishaPreview, node_modules symlink ke folder tips-bina-app -bm). Gaya ikut token Englisha (stiker border tinta), maskot = SVG kucing gemi baru di-inline (src/lib/maskot-svg.ts, kelip via --kel). Output ~/Downloads/englisha-preview-20260923-2054-video-45s-potret.mp4.
- UI kit grid: ~/Downloads/englisha-uikit-20260923-2054-screenshot-grid.png (+ zip 19 layar).
- Dek 3 slide: folder englisha-presentasi-20260923-2052-3-slide (+zip), artifact https://claude.ai/artifact/76pz2QmgNX2eg58C9gsLrm. Belum deploy.
**How to apply:** untuk video preview app lain, pakai ulang Feature layout di src/scenes/Features.tsx dan _aset/cap.mjs. Related: [[project-gemi-tips-bina-app]], [[project-gemi-maskot-svg-baru]].

Revisi 2026-09-23 21:00: user minta video dalam Bahasa Melayu (isi lain sama) → folder video-englisha-preview-20260923-2100-potret-bm (lang ms, skrin BM; kuiz BM = "Fish" kanan bawah), output ~/Downloads/englisha-preview-20260923-2107-video-45s-bm.mp4.
Dek 3 slide diganti dengan carousel 5 slaid ID+MS gaya ~/Downloads/index prompt .html (pola carousel gemi biru, maskot SVG hidup, download JPEG): folder carousel-englisha-preview-gemi-20260923-2104-5-slaid (screenshot di-inline sebagai data URI lewat /*LAYAR*/ dalam build.mjs).
