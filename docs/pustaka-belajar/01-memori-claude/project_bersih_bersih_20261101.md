---
name: project-bersih-bersih-20261101
description: 1 Nov 2026 revisi lama dan node_modules di app matematika dipindah ke Trash; nama folder di memori lain bisa sudah tidak ada
metadata:
  node_type: memory
  type: project
  originSessionId: 524e709c-ff9b-4b41-a42d-08720a6674d2
  modified: 2026-11-01T13:55:09.913Z
---

Pada 2026-11-01, 131 item di `app matematika` dipindah ke Trash atas permintaan user (revisi lama, `node_modules` besar, `out/bundle`, `_uji`, zip lama). Daftarnya ada di `_log-bersih-bersih-20261101.txt`.

**Why:** user ingin hanya versi final yang tersisa, supaya disk lega.

**How to apply:** kalau memori lain menyebut folder lama, cek dulu masih ada atau tidak. `video-pg-galeri-manfaat-roblox-20261031-0444-suara-laki-potret-id/node_modules` kini symlink putus: hapus symlink-nya lalu `npm install` sebelum render ulang. Project dengan `node_modules` yang dibuang juga perlu `npm install`.
