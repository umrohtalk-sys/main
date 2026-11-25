---
name: project-bidan-virda-care-app
description: "PWA all-in-one Bidan Virda (baby spa/pijat bayi/home care) — ERM, jadwal, keuangan, stok; artifact Au9VLZCpFaEVZ3SQB825ha, belum deploy"
metadata:
  node_type: memory
  type: project
  originSessionId: 2793bf64-3378-484e-b64f-bed26dde95f0
  modified: 2026-10-04T22:49:12.390Z
---

2026-10-05: folder `bidan-virda-app-20261005-0529-pwa-babyspa-allinone/` (sumber + `_sumber/jana-artifact.py` → `_sumber/artifact.html`), salinan bersih `-netlify/` + zip `~/Downloads/bidan-virda-care-20261005-0529-pwa-babyspa-allinone-netlify.zip`. Artifact https://claude.ai/artifact/Au9VLZCpFaEVZ3SQB825ha (gambar maskot lewat `files`). Pratinjau launch.json "bidan-virda-care-app" port 8881. Belum deploy Netlify.

Rujukan: konten = video TikTok @gocareidn (ERM GOCare untuk baby spa: dashboard, rekam medis per kunjungan, rekap PDF); layout = dashboard bento Pinterest (kartu putih + satu kartu gelap, gauge); warna & 20 maskot PNG = brand Bidan Virda ([[project-bidan-virda-lp-lpindo]]). Vanilla JS tanpa build, data di localStorage dengan data contoh fiktif (buatDataContoh di js/data.js, relatif ke hari ini).
**How to apply:** harga dari flyer; "Baby Spa Home" & "Pijat Batuk Pilek" + ongkos area = contoh. sw.js network-first (tetap naikkan VERSI). Setelah ubah kode: jalankan jana-artifact.py, salin ulang ke -netlify, publish artifact path yang sama.
