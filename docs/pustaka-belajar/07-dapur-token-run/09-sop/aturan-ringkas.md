# Aturan kerja user (ringkas)

Sumber: catatan feedback di memori (Okt sampai Nov 2026). Satu halaman.

## Nama dan lokasi file
1. Setiap file hasil diberi nama `{project}-{YYYYMMDD}-{HHMM}-{ringkas}`. Tidak pernah timpa revisi lama.
2. Hasil akhir ke `~/Downloads/`, bukan folder app matematika. Kunci `.kunci` tidak pernah ikut.
3. Web dan game dalam bentuk folder statik dengan file terpisah, bukan satu index.html panjang.
4. Setelah membuat output, jalankan `open -R` dan beri path lengkap.
5. Deploy: folder siap seret ke app.netlify.com/drop, dengan `netlify.toml` dan README langkah.

## Video
6. Cover judul 0 sampai 3 detik di semua video; judul hilang setelah itu; frame 0 sudah berjudul.
7. Tulisan, takarir, dan label tidak menutupi tokoh atau gameplay. Gameplay tidak dipenuhi materi.
8. Narasi tempo santai, sekitar 150 kata per menit. Jeda napas, bukan dipotong keras atau atempo.
9. Musik dan SFX pakai ulang dari project lama, musik pelan. Whoosh transisi WAJIB jana baru dan beda tiap potongan.
10. Tokoh 3D gempal untuk video cikgu dan murid, bukan stickman.
11. Gaya infografik = plate penuh layar, bukan bingkai jalur hitam.
12. Gerak kamera linear. Tidak ada jeda hitam atau frame identik panjang.
13. Master besar dihapus setelah versi kecil lolos cek.
14. Video di bawah 25 MB bila diminta (2-pass x264).
15. Tidak transkrip dengan Whisper. Copywriting diambil dari takarir di screenshot dan cap waktu ElevenLabs.
16. Video rujukan Instagram: unduh file asli saja dengan yt-dlp, tanpa salinan H.264.
17. Narasi BM pakai ElevenLabs `eleven_v4_turbo` dengan Daud M. Laporkan kredit dan Rupiah.
18. Takarir dwibahasa Melayu + English untuk video BM.
19. Setiap video beda gaya dari yang sebelumnya.

## Ikon dan tampilan
20. Tanpa emoji. Ikon garis elegan, warna solid, judul serif.
21. Tidak ada testimoni, rating, atau klaim palsu.
22. Gaya boleh meniru referensi user, tetapi palet mengikuti brand project, bukan palet referensi.

## Posting dan automation
23. Posting video ke IG, TikTok, LinkedIn, Pinterest lewat Repliz. Caption langsung, tanpa TXT.
24. Pratonton TXT hanya untuk thread Threads, dan hanya bila diminta.
25. Threads video dikompres 720p (sekitar 7 MB untuk 90 detik).
26. Thread dan caption: copy berbeda antar akun, singkat bila diminta.
27. Automation komen: match exact untuk kata umum; typo tolerance dimatikan; cek log sebelum balas manual.
28. Komen dari akun sendiri tidak memicu automation; tes dari akun lain.

## Model dan biaya
29. Prompt (isi prompt generator) ditulis oleh agen Haiku. Pasang dan perbaikan besar oleh Opus. Perbaikan kecil oleh Sonnet.
30. OpenRouter (DeepSeek) tidak dipakai kecuali user yang minta. Tes maksimum satu kali.
31. Generate musik dan SFX baru dihindari untuk hemat kredit.

## Proses
32. Skrip di scratchpad bisa hilang antar sesi. Simpan skrip di folder project.
33. Setiap perubahan app: naikkan VERSI service worker.
34. Uji lokal: unregister service worker dan hapus cache dulu. Clerk tidak bisa di localhost, pakai `?uji=1`.
35. Game dan app baru diuji dimainkan (telefon 390x844 dan desktop 1366x768) dan ada tangkapan skrin bukti sebelum dikira siap.
36. Deploy hanya bila diminta. Jangan deploy dari folder induk app matematika.
37. Tanya sekali di awal bila ada pilihan format (mis. carousel atau cover tunggal) daripada menebak.
38. Sebelum publish: cek ukuran (Netlify di bawah 24 MB).
39. Rujukan dan indeks: cek `index_video_project.md` sebelum video baru supaya tidak mengulang.
40. Repo video Opus 5.5: repo tanpa lisensi hanya dipelajari, jangan salin kodenya.
