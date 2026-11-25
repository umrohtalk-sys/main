---
name: project-gemi-maskot-3d
description: Maskot kucing gemi versi 3D Three.js (primitif, tanpa FAL), folder gemi-maskot-3d-20261012-2210-threejs, belum deploy
metadata:
  type: project
---
2026-10-12: user minta maskot gemi jadi 3D. Coba image-blaster (clone di ~/Documents/image-blaster, PNG pose wave/celebration di input/), tapi user TOLAK pakai FAL AI → maskot dibangun dari primitif Three.js 0.160 (CDN) satu index.html: lambai/lompat/putar, kedip, mata ikut pointer, ketuk = aksi acak, unduh .glb (GLTFExporter, ~1 MB), tema terang/gelap. Belum deploy.

**Why:** user tak mahu servis berbayar/API key luar untuk 3D.
**How to apply:** ubah bentuk lewat helper diKepala()/lengan()/kaki() dalam index.html; warna dari palet SVG [[project-gemi-maskot-svg-baru]]. Jangan cadangkan FAL/Meshy lagi.
