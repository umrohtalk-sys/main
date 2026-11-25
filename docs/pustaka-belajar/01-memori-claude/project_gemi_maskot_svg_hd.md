---
name: project-gemi-maskot-svg-hd
description: "Trace ulang 44 pose maskot gemi jadi SVG HD via VTracer (2026-09-18) — paket di ~/Downloads/mascot, belum dipasang ke app"
metadata: 
  node_type: memory
  type: project
  originSessionId: e6345297-daf2-4b4c-90f8-92f38524e158
  modified: 2026-09-18T12:38:40.663Z
---

2026-09-18: user minta SVG maskot gemi lebih detail/bagus pakai VTracer, cek 3x, lihat review dulu, JANGAN pasang ke app dulu.
Sumber: `~/Downloads/mascot/poses/*.png` (hero & point pakai `hd/`); SVG lama di `~/Downloads/mascot/svg/`.
Paket: `~/Downloads/mascot/gemi-maskot-svg-20260918-1934-vtracer-hd/` (+ .zip): `svg/` flat (disarankan), `svg-soft/` (blur filter), `_pipeline/trace.py` + `check.py`.
Review artifact: https://claude.ai/artifact/9SWNjjAkA8nCnNoKAY4gxy

**Why:** PNG sumber ber-dither (titik-titik) — itu penyebab SVG lama belang & bergerigi; trace langsung tak akan bersih.
**How to apply:** jalankan ulang pipeline dengan venv berisi vtracer/opencv/resvg-py (dibuat di scratchpad, perlu dibuat lagi). Kalau user bilang "pasang": salin svg/ ke app [[project-gemi-kad-maskot-jelas]] / [[project-gemi-app-belajar]] (nama file sama gemi-<pose>.svg) lalu naikkan VERSI sw.js.
