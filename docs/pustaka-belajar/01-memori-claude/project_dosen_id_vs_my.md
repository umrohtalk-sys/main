---
name: project-dosen-id-vs-my
description: "Video ±295s BM belah dua dosen Indonesia vs pensyarah Malaysia (gaji, swasta, cukai, sistem PT, beban, UKT vs gaji minimum, APK, profesor, pensiun, paspor); hook wang"
metadata:
  node_type: memory
  type: project
  originSessionId: 60848b75-b161-4f28-bbb9-09035f9823bc
  modified: 2026-11-07T21:24:11.129Z
---

8 Nov 2026. Folder `video-dosen-id-vs-my-20261108-0411-bm`, server "dosen-id-vs-my-film" port 9014. Salinan enjin video guru ID vs MY pagi itu, tokoh lelaki Pak Bima / Dr. Hafiz. Stesen baharu: x24 kampus mini (120 kotak vs 20 UA), x36 kaunter yuran (blok "1 bulan gaji minimum" + tangki subsidi), x72 konvokesyen (barisan 10, profesor berjubah). Sumber di sumber.md.
**Why:** user mahu hook terus soal wang ("dosen Indonesia gajinya segini, Malaysia segini"), bukan pembuka umum; copywriting gaya video cikgu tapi fokus dosen.
**How to apply:** main.js ada `K(i, 'kata', n)` cari waktu kata ikut awalan, lebih selamat daripada indeks. Tukar hook tanpa jana semula semua suara: `_alat/tts_hook.py N` (jana baris 0..N-1 sahaja, sambung ke suara/full-asal.*).

Related: [[project-pendidikan-id-vs-my]] [[feedback-elevenlabs-v4-turbo-daud]]

Versi pendek 1:59 (user minta reel maks 2 menit): folder `video-dosen-id-vs-my-20261108-0557-bm-pendek`, port 9015, 23 baris, tempo 1,35, 0 kredit. `_alat/potong_suara.py <indeks...>` memotong baris dari rakaman panjang. Beban kerja, sistem kampus dan enrolmen dibuang. Mix kini `apad` supaya kad sumber tak terpotong.
