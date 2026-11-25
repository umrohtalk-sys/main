---
name: feedback-output-ke-downloads
description: "Semua file hasil akhir (video dan lainnya) buatan Claude Code ditaruh di ~/Downloads, bukan di folder app matematika"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 2b0284d7-fbb7-4324-ba8c-8e47ad27acff
  modified: 2026-11-04T11:57:51.542Z
---

File hasil akhir, terutama MP4, selalu ditaruh di `~/Downloads`. Jangan tinggalkan hasil akhir di dalam folder `app matematika`.
**Why:** user bingung mencari file yang tersimpan di folder project (4 Nov 2026). Aturan ini user minta berlaku untuk semua file buatan Claude Code di sini.
**How to apply:** kerjakan di folder project seperti biasa (kode, aset, render sementara), lalu `mv` hasil akhir ke `~/Downloads` dengan nama ber-cap waktu, jangan timpa file yang sudah ada. Setelah itu `open -R` dan beri path Downloads. Kunci `.kunci` tidak pernah ikut.

Related: [[feedback_versioned_filenames]] [[feedback-reveal-output-finder]] [[feedback-hapus-master-video]]

4 Nov 2026: 91 video jadi lama dipindah ke ~/Downloads (62 dipindah, 29 kembar identik dihapus dari project); daftar asal-tujuan di `~/Downloads/daftar-pindah-video-20261104-1859.tsv`. Aset app (`vid/`, `public/`, `aset/`, `site*/`) sengaja tidak dipindah supaya app tidak rusak.

19 Nov 2026: user minta video di bawah 25 MB — kod semula 2-pass libx264 (bitrate = ~22 MB × 8 / durasi, tolak audio 128k).
