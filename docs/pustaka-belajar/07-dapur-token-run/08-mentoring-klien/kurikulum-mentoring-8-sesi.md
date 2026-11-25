# Kurikulum Mentoring 1-on-1: Bikin App, Game, dan Video dengan AI

Mentor: Auzan Hasfi, EduGame Labs, Jember
Versi: draf 1, 21 November 2026
Format: 1-on-1 via Zoom, 8 sesi, sekitar 90 menit per sesi (durasi dan jumlah sesi masih perlu dikonfirmasi, lihat LAPORAN.md)
Harga: Rp 350.000 (ID, via WA) | USD 25 (EN)

---

## 1. Tujuan program

Setelah 8 sesi, mentee mampu:

- membuat app web sederhana (landing page, katalog, form pesanan, atau pencatatan) dengan bantuan AI tanpa menulis kode dari nol;
- membuat game edukasi satu halaman dengan skor dan level yang bisa dimainkan di HP;
- membuat video pendek 30 sampai 60 detik dengan animasi sederhana dan takarir;
- mempublikasikan hasil ke tautan sendiri dan menjelaskan cara memperbaikinya sendiri.

Yang tidak termasuk: belajar pemrograman formal, bank soal atau isi pelajaran (isi game dan video ditulis mentee sendiri), serta desain grafis tingkat profesional.

## 2. Prasyarat

- HP (Android atau iPhone). Laptop membantu tetapi tidak wajib.
- Satu akun asisten AI: Claude, Gemini, atau ChatGPT. Prinsip program sama untuk ketiganya; mentor menyesuaikan contoh sesuai akun mentee.
- Email untuk akun penerbitan tautan (misalnya layanan unggah folder seperti Netlify Drop; cek paket dan syarat terbaru saat sesi).
- Waktu latihan sekitar 3 jam per minggu (asumsi, perlu diverifikasi dengan mentee baru).

## 3. Prinsip yang dipakai sepanjang program

1. Tulis brief sebelum prompt: tujuan, pengguna, isi, larangan.
2. Satu perubahan per prompt. Lebih mudah dicek dan diperbaiki.
3. Uji di HP setiap selesai satu perubahan.
4. Simpan versi dengan nama bertanggal dan keterangan singkat, contoh: `app-katalog-20261201-1930-harga-baru.html`.
5. Kalau ada error, salin pesan error secara utuh, minta AI menjelaskan penyebabnya dulu, baru minta perbaikan.
6. Jangan mengarang angka, testimoni, atau hasil. Pakai data asli mentee atau tulis `[isi angka asli]`.

---

## Sesi 1: Mulai dari masalah, bukan dari alat

**Tujuan:** memilih satu masalah nyata dan menulis brief satu halaman.

**Materi**
- Tiga jenis hasil: app, game, video. Cara memilih satu untuk 8 minggu pertama.
- Memilih asisten AI: kelebihan, batas, dan cara mencoba prompt yang sama di dua asisten.
- Anatomi prompt: peran, tujuan, konteks, batasan, format hasil.
- Brief satu halaman: masalah, pengguna, hasil yang diinginkan, data yang dimiliki, larangan.

**Latihan praktik**
- Mentee menulis brief untuk satu ide (usaha, murid, atau konten).
- Mentor membaca brief dan menanyakan tiga hal yang masih kabur.

**Tugas rumah**
- Kirim ulang brief dengan jawaban atas tiga pertanyaan itu.
- Kirim prompt yang sama ke dua asisten AI, catat perbedaan hasilnya di workbook.

**Hasil akhir sesi**
- Brief final satu halaman (workbook halaman sesi 1).
- Satu jenis hasil dipilih: app, game, atau video.

---

## Sesi 2: Landing page pertama

**Tujuan:** membuat satu halaman web dari brief dan membukanya di HP.

**Materi**
- Struktur halaman: judul yang menjelaskan manfaat, penjelasan singkat, bukti (foto asli, angka asli, atau ulasan dengan izin), ajakan ke WA.
- Hasil AI berupa satu file `index.html`. Cara membaca hasil dan mengenali bagian yang perlu diubah.
- Revisi bertahap: satu bagian per prompt.
- Tombol WA dengan pesan terisi.

**Latihan praktik**
- Buat halaman dari brief.
- Lakukan lima revisi berurutan: judul, warna tombol, urutan bagian, teks harga, tombol WA.

**Tugas rumah**
- Ganti semua teks contoh dengan data asli mentee.
- Tambahkan tiga foto nyata.

**Hasil akhir sesi**
- Satu file `index.html` yang tampil rapi di HP.
- Tombol WA membuka chat dengan nomor yang benar.

---

## Sesi 3: Uji dan rapikan di HP

**Tujuan:** menguji app seperti pengguna sungguhan, bukan hanya di laptop.

**Materi**
- Checklist uji: lebar layar sekitar 360 px, tombol cukup besar untuk jari, tidak ada teks terpotong, gambar memuat saat sinyal lambat, nomor dan harga sudah benar.
- Cara mencatat temuan: apa yang dilihat, di HP apa, langkah untuk mengulangi.
- Perbaikan dengan prompt yang menyebut bagian spesifik.

**Latihan praktik**
- Uji di dua HP berbeda.
- Catat sepuluh temuan, perbaiki lima yang paling penting.

**Tugas rumah**
- Minta satu orang (keluarga atau teman) mencoba app tanpa dijelaskan. Catat di mana dia bingung.

**Hasil akhir sesi**
- Daftar bug dengan status tertutup atau terbuka.
- Catatan uji dari orang kedua.

---

## Sesi 4: Form, katalog, dan data sederhana

**Tujuan:** menambah fitur input: form pesanan, katalog produk, atau pencatatan sederhana.

**Materi**
- Konsep data: daftar produk disimpan di mana (di dalam file, atau di penyimpanan browser), dan apa risikonya bila HP diganti.
- Form pesanan yang membuka WhatsApp dengan ringkasan pesanan terisi.
- Tombol salin ringkasan dan ekspor teks sederhana.
- Batas yang perlu disadari: data di browser tidak otomatis sinkron antar perangkat.

**Latihan praktik**
- Buat form pesanan yang membuka WA dengan ringkasan, termasuk jumlah dan total.

**Tugas rumah**
- Isi katalog dengan minimal 10 produk atau layanan asli, lengkap dengan harga.

**Hasil akhir sesi**
- App katalog atau form berfungsi dari HP.
- Mentee bisa menjelaskan di mana data tersimpan dan apa yang terjadi bila dibuka di perangkat lain.

---

## Sesi 5: Game edukasi satu halaman

**Tujuan:** merancang dan membuat game dengan mekanik yang jelas.

**Materi**
- Tiga mekanik dasar: kuis cepat (pilih jawaban), tangkap-jatuh (geser untuk menangkap), lompat-hindari (ketuk untuk melompat).
- Skor, nyawa, dan level: aturan sederhana yang bisa diubah lewat prompt.
- Prinsip game untuk anak dan orang dewasa: tujuan dipahami dalam 5 detik, tombol cukup besar, umpan balik langsung saat benar atau salah.
- Isi game berasal dari mentee, bukan dari bank soal mentor.

**Latihan praktik**
- Pilih satu mekanik dan buat versi dengan tiga level.
- Uji tiga putaran di HP, catat bagian yang membosankan atau membingungkan.

**Tugas rumah**
- Tulis 20 isi game (kata, angka, gambar, atau situasi) dari materi mentee sendiri.

**Hasil akhir sesi**
- Game satu halaman dengan papan skor, bisa dimainkan dari awal sampai akhir di HP.

---

## Sesi 6: Karakter, aset, dan gaya yang konsisten

**Tujuan:** membuat maskot atau karakter yang dipakai ulang di app, game, dan video.

**Materi**
- Lembar karakter: nama, ciri khas, ekspresi dasar, warna, cara bicara.
- Palet warna: tiga sampai lima warna, satu warna aksen.
- Ikon untuk antarmuka: gunakan ikon, bukan emoji, agar tampilan rapi di semua HP.
- Aset gambar: format PNG dengan latar transparan bila perlu; ukuran file kecil agar cepat dimuat.
- Folder aset proyek dengan nama file bertanggal.

**Latihan praktik**
- Buat satu karakter dengan empat ekspresi.
- Pasang karakter yang sama di app dan game.

**Tugas rumah**
- Susun folder aset proyek (maksimal 12 file utama) dan tulis daftar isinya.

**Hasil akhir sesi**
- Folder aset proyek.
- Karakter tampil konsisten di app dan game.

---

## Sesi 7: Video pendek dengan animasi

**Tujuan:** membuat video 30 sampai 60 detik dengan naskah, adegan, dan takarir.

**Materi**
- Naskah tiga bagian: masalah (0 sampai 5 detik), cara atau solusi (5 sampai 40 detik), ajakan (40 sampai 60 detik).
- Storyboard enam sampai delapan adegan, dengan durasi per adegan.
- Takarir di area yang aman: jangan menutup wajah, karakter, atau tombol penting.
- Suara: narasi sendiri atau musik latar yang pelan. Mentee memastikan hak pakai musik dan suara.
- Ekspor MP4. Versi vertikal 9:16 untuk Reels dan TikTok; versi horizontal 16:9 bila diperlukan.

**Latihan praktik**
- Tulis naskah, buat storyboard, lalu buat video versi 1 (tanpa suara pun boleh).

**Tugas rumah**
- Tonton video bersama tiga orang, catat satu hal yang paling membingungkan dari masing-masing.
- Revisi satu kali, lalu ekspor versi final.

**Hasil akhir sesi**
- Satu video MP4 30 sampai 60 detik dengan takarir, file bernama bertanggal.

---

## Sesi 8: Publikasi dan menjelaskan hasil

**Tujuan:** mempublikasikan karya dan menyiapkan cara menawarkannya dengan jujur.

**Materi**
- Menerbitkan folder berisi `index.html` ke tautan publik. Cek tautan di HP dan dua browser.
- Membagikan karya: WA, Instagram, Threads, atau TikTok, sesuai target pembaca.
- Pesan penawaran yang menyebut apa yang dibuat, untuk siapa, dan apa yang bisa diminta.
- Mencatat hasil dengan angka asli. Bila belum ada hasil, tulis `[isi angka asli]` dan jangan mengisi perkiraan.

**Latihan praktik**
- Terbitkan satu karya. Kirim tautannya ke tiga orang dan catat reaksinya.
- Tulis satu postingan atau pesan penawaran.

**Tugas akhir**
- Rekam demo karya selama 3 menit (layar HP atau laptop) dan kirim ke grup mentoring.

**Hasil akhir program**
- Satu karya publik (app, game, atau video).
- Rencana 30 hari ke depan: satu target per minggu.

---

## Catatan untuk mentor

- Setiap sesi dibuka dengan meninjau hasil sesi sebelumnya (10 menit).
- Mentee yang belum selesai satu sesi tidak dipaksa lanjut; sesi berikutnya diulang dari hasil terakhir.
- Jangan menjanjikan penghasilan atau jumlah pesanan. Program mengajarkan cara membuat dan menerbitkan karya.
- Setiap contoh di kelas harus memakai data sendiri atau data yang sudah diizinkan pemiliknya.
