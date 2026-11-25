# SOP: Video reel vertikal (9:16, 720x1280 atau 1080x1920)

**Kapan dipakai:** video pendek untuk IG Reels, TikTok, Threads, Pinterest. Tema: tutorial, reaksi, cerita cikgu, promo app/game. Bukan untuk belah dua (lihat sop-video-belah-dua.md) atau peta (lihat sop-video-peta.md).

## Input yang dibutuhkan
- Topik dan hook pembuka (kalau tidak ada, usulkan dan tanyakan dulu).
- Naskah atau catatan poin. Untuk remake: tautan atau file reel rujukan (unduh dengan yt-dlp, lihat aturan di bawah).
- Bahasa: BM, ID, atau EN. Video BM dapat takarir dwibahasa (BM + EN) sebagai default.
- Suara: Daud M (narator BM, ElevenLabs `eleven_v4_turbo`) atau Putra (ID), kecuali user minta lain.
- CTA kata kunci komen (contoh: Komen VIDEO, Komen TOOLS). Pastikan kata kunci sesuai automation Zernio yang aktif (lihat sop-automation-komen-zernio.md).
- Tema tampilan: gelap hangat, studio gelap biru, atau gaya lain yang belum dipakai pada video terbaru (user minta gaya berbeda tiap video).

## Langkah
1. **Cek indeks video lama** (`index_video_project.md`, `index_video_nov_2026.md`) supaya tidak mengulang topik atau gaya. Salin folder project paling dekat, jangan mulai kosong.
2. **Rujukan (jika ada):** unduh file asli saja dengan yt-dlp ke `~/Downloads/`, tanpa salinan H.264. Caption diambil dari `info.json` dan takarir di screenshot. Jangan jalankan Whisper.
3. **Tulis naskah** per adegan. Tempo santai, sekitar 150 kata per menit. Hook 0 sampai 3 detik langsung menampilkan judul.
4. **Narasi:** kirim naskah sebagai satu paragraf (baris baru = jeda panjang). Atur tempo lewat parameter `speed`, bukan atempo. Simpan cap waktu per kata (`/with-timestamps`) untuk menggerakkan visual dan takarir.
5. **Jeda napas:** sisipkan jeda 0.3 sampai 0.7 detik di batas kalimat. Jangan memotong jeda keras atau mempercepat audio.
6. **SFX:** pop, ding, loceng, langkah dipakai ulang dari folder `sfx/` project lama. Whoosh transisi wajib dijana baru dengan prompt unik, 6 sampai 10 variasi per video, dan tiap potongan dalam satu video memakai variasi berbeda.
7. **Susun adegan** dengan enjin project. Tokoh manusia memakai 3D gempal (orang.js), bukan stickman. Kamera linear, bukan ease-in-out per shot.
8. **Cover judul 0 sampai 3 detik:** judul tipografi besar 2 sampai 6 kata, maksimal 2 baris, masuk dengan clip-reveal atau slam, lalu keluar. Frame 0 harus sudah memuat judul (untuk cover).
9. **Takarir** aktif sejak awal, tidak menunggu judul selesai. Di area kosong, jauh dari tokoh dan aksi.
10. **Cek contact sheet** (lihat sop-qa-kontak-video.md) sebelum render final.
11. **Render** 30 fps (atau 60 fps bila diminta). Jika perlu di bawah 25 MB, pakai 2-pass x264, bitrate sekitar 22 MB x 8 / durasi, AAC 128k.
12. **Serahkan:** `mv` ke `~/Downloads/` dengan nama bertimestamp, jalankan `open -R`, beri path. Master besar dihapus setelah versi HP lolos cek.

## Aturan wajib
- Nama file: `{project}-{YYYYMMDD}-{HHMM}-{deskripsi-2-4-kata}.mp4`. Jangan timpa file lama.
- Hasil akhir hanya di `~/Downloads/`, bukan di folder app matematika.
- Takarir dan label tidak menutupi tokoh atau gameplay.
- Tidak ada emoji. Ikon garis elegan bila perlu.
- Musik pelan, tidak dominan. Tidak generate musik baru.
- Narasi tidak memakai model multilingual v2 yang mahal. Pakai `eleven_v4_turbo` (narasi BM) atau sesuai aturan project.
- Laporkan kredit ElevenLabs terpakai dan perkiraan Rupiah di akhir.
- Kunci API tersimpan di `.kunci/` (chmod 600), tidak ikut zip atau deploy.
- Fakta dibingkai jujur dan berhati-hati. Tidak ada testimoni atau klaim palsu.

## Checklist QA
- [ ] Frame 0 memuat judul, terbaca di cover
- [ ] Judul hilang setelah sekitar 2 sampai 3 detik
- [ ] Takarir tidak menutupi tokoh atau aksi
- [ ] Tidak ada jeda keras atau suara terpotong
- [ ] Tidak ada 195 frame identik berurutan (gerak macet)
- [ ] Whoosh tidak sama dengan video sebelumnya
- [ ] Ukuran sesuai target platform (Threads: lihat sop-thread-threads.md)
- [ ] Nama file bertimestamp, sudah di Downloads, `open -R` sudah dijalankan

## Kesalahan yang pernah terjadi
- Video Singapura 57 detik terlalu cepat (speed 1.1, tanpa jeda). User minta tempo santai, sekitar 1:15 sampai 1:20.
- Jeda dipotong keras ke 0.16 detik plus atempo 1.12, suara jadi patah-patah. Kamera ease-in-out membuat gerak macet.
- Whoosh yang sama di semua video membuat terasa seperti template.
- Judul di atas gameplay menutupi game. Gameplay terlalu banyak tulisan.
- Versi stickman untuk video cikgu ditolak user.
- Master 600 MB dibiarkan di disk Mac yang sudah 87% penuh.
- Narasi Daud dengan `speed` hampir tidak berubah (1.08 ke 1.18 hanya turun sekitar 2 persen). Solusinya padatkan naskah, bukan atempo.
- Master 115 MB terlalu besar. User minta output sekitar 25 MB, sehingga dikompres ulang dengan 2-pass.

## Sumber
Feedback memori: judul-cover-pembuka, tempo-santai, video-tidak-tersendat, tulisan-tidak-menutupi, kurang-tulisan-gameplay, tokoh-3d-bukan-stickman, bunyi-transisi-unik, musik-sfx-pakai-ulang, hapus-master-video, elevenlabs-v4-turbo-daud, tanpa-transkrip-whisper, output-ke-downloads, versioned-filenames, ikon-elegan.
