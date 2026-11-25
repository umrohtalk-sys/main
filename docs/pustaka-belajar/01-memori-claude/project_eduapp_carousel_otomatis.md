---
name: project-eduapp-carousel-otomatis
description: Tugas terjadwal tiap 8 jam bikin carousel guru/dosen 3:4 dari 100 judul set 2 dan kirim ke draf TikTok eduapp.id0
metadata:
  type: project
---

Folder ~/Downloads/eduapp-carousel-otomatis-20261014-0600. Scheduled task `eduapp-carousel-8-jam` (cron 0 6,14,22 * * *, mode Bypass). Mulai 14 Okt 2026, #1 MPLS dikirim manual. mesin/buat.py render|kirim; kirim pakai REST Zernio (token dibaca dari ~/.claude.json, header MCP zernio), draft:true.

**Why:** user minta otomatis, urut judul, hemat token (awalnya 6 jam lalu diralat jadi 8 jam / 3 sehari).
**How to apply:** ubah jadwal lewat update_scheduled_task; lompat judul dengan edit data/status.json. Lihat [[project-guru-dosen-carousel-fyp]].
