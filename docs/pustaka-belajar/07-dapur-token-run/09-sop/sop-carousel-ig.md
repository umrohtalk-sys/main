# SOP: Carousel Instagram (slaid dan cover feed)

**Kapan dipakai:** carousel edukasi di IG (BM, ID, atau dwibahasa), cover tunggal untuk grid profil, sampul reels studio gelap. Juga versi HTML yang boleh diuji di Claude Free.

## Input yang dibutuhkan
- Topik dan kerangka slaid (cover, isi 3 sampai 8 slaid, penutup dengan CTA).
- Ukuran: feed 4:5 (1080x1350) supaya tidak terpotong di grid profil 3:4. Potret 3:4 bila diminta.
- Tanya dulu: carousel atau cover tunggal?
- CTA dan kata kunci komen (sesuai automation Zernio aktif).
- Foto klien, testimoni (hanya yang asli dan ditandai), atau foto Unsplash dengan lisensi jelas.

## Langkah
1. Salin folder carousel terdekat (mis. `carousel-gemi-quotes`, `bidan-virda-carousel`), buat folder bertimestamp baharu. Revisi = folder baru, jangan timpa.
2. Tulis kandungan per slaid di data (`data.js` atau blok `DATA MULAI/SELESAI` dalam HTML). Struktur data tidak diubah; hanya nilainya.
3. Pilih jenis slaid: cover, teks, angka, poin, langkah, banding, cek, penutup, promo. Maksimum 2 font.
4. Tema warna dari palet project (krem, putih, mint, hijau, tua, atau biru studio). Warna lain tidak dicampur.
5. Ikon SVG bernama, bukan emoji.
6. Pastikan teks tidak meluber. Gunakan auto-fit atau pecah slaid.
7. Ekspor PNG atau JPEG per slaid (html2canvas atau screenshot). Untuk eksport dari Artifact yang berjalan di sandbox, gunakan server POST lokal (srv.py) atau tombol unduh di Netlify.
8. Cek kontras teks dan ukuran di HP.
9. Serah ke `~/Downloads/` dengan nama bertimestamp, lalu `open -R`.

## Aturan wajib
- Tanpa testimoni, rating, atau jaminan palsu. Testimoni contoh harus ditandai contoh.
- Tanpa emoji. Ikon garis.
- Kata "baby spa" dan istilah layanan disebut sesuai permintaan klien (bukan hanya "pijat").
- Setiap slaid mempunyai satu idea utama.
- Jangan menulis domain yang sudah dibuang user.

## Checklist QA
- [ ] Ukuran 4:5 (atau 3:4 bila diminta)
- [ ] Teks tidak keluar dari kotak atau tertutup
- [ ] Bayangan tidak rusak (html2canvas)
- [ ] Nama klien dan istilah sesuai brief
- [ ] Slaid terakhir ada CTA
- [ ] Tidak ada duplikat judul antara slaid
- [ ] Folder bertimestamp di Downloads, `open -R`

## Kesalahan yang pernah terjadi
- Video kotak terpotong di grid profil 3:4. User minta cover 4:5.
- Jadwal carousel guru dan dosen sempat diatur 6 jam, lalu diralat ke 8 jam (3 sehari) atas permintaan user untuk hemat token. Jadwal ikut permintaan terbaru user.
- Versi "fokus quote" (kad putih) dinilai jelek. User minta layout yang sama dengan rujukan ajopro, tanpa link dan tanpa footer tertentu.
- Kad dengan border dan bayang negatif terbentuk garis kelabu saat html2canvas.
- Untuk konten feed baru, tanya dulu: carousel atau cover tunggal.

## Sumber
Memori: project-bidan-virda-carousel-ig, project-carousel-prompt-generator-fitur, project-carousel-claude-nocode-bingung-mulai, project-carousel-worksheet-5langkah, project-guru-dosen-carousel-fyp, project-cover-reels-ig, project-feed-ig-bidan-virda-20, project-skill-carousel-bidan-virda-html. Feedback: judul-cover-pembuka, gaya-infografik-tanpa-jalur, ikon-elegan.
