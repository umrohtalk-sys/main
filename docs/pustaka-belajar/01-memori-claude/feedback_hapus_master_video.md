---
name: feedback-hapus-master-video
description: "Setelah render video 3D selesai dan versi HP jadi, hapus file master besar (±600 MB) — Mac user kecil"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2604184d-b827-4651-8325-180132d4b6b4
  modified: 2026-10-30T21:31:56.840Z
---

Begitu versi HP (≤30 MB) sudah dibuat dan dicek, langsung hapus file master MP4 (CRF 15, ±600 MB) dan folder kerja besar di scratchpad. Serahkan hanya versi HP.
**Why:** user bilang Mac-nya kecil (disk 87% penuh, 31 Okt 2026); master tidak dipakai.
**How to apply:** di render.py/akhir pipeline, master boleh jadi file sementara untuk 2-pass, lalu rm setelah HP lolos cek. Lihat [[project-guru-mie-instan-thriller]].
