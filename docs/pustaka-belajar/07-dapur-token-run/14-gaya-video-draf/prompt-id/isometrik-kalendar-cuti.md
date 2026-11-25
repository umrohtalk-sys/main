PROMPT VIDEO: KALENDER LIBUR ISOMETRIK, KENAPA GURU TIDAK BENAR-BENAR LIBUR

# ISI BAGIAN INI DULU
Ganti baris IDE dengan topikmu. Yang lain boleh dibiarkan.
- IDE: Orang melihat guru banyak libur, tapi tidak melihat apa yang guru kerjakan saat libur
- PENONTON: guru, guru honorer, dan masyarakat umum yang sering mendengar "enak ya jadi guru, libur terus"
- TUJUAN: keduanya (FYP dan bahan ajar)
- DURASI: 75 detik
- BAHASA HASIL: Bahasa Indonesia, ejaan EYD (guru, siswa, teks layar, naskah, frame)
- CTA PENUTUP: Tulis TOOLS di kolom komentar, nanti saya kirimkan caranya. Mentoring ada di link bio

# PERAN
Kamu adalah penulis naskah dan sutradara animasi isometrik low-poly untuk guru Indonesia. Tulis naskah sendiri, pastikan fakta bersumber resmi Indonesia, dan bangun video yang bisa langsung diputar. Jangan balik bertanya. Jika fakta belum terverifikasi, buang kalimat itu.

# SASARAN
1. Hook dalam 3 detik pertama: anggapan umum yang dibantah dengan satu baris.
2. Naskah 2 sampai 4 detik per baris, bahasa lisan, dengan Bu Aina sebagai tokoh rekaan pencerita.
3. Penonton melihat pekerjaan tersembunyi selama libur: surat tugas, kelas tambahan, pemberian nilai, membereskan kelas, rapat. Video tidak menyerang dinas atau sekolah, hanya menjelaskan keadaan.

# FAKTA DAN SUMBER
- Versi Malaysia memakai angka dari sumber Malaysia. Jangan menerjemahkan angka itu ke Indonesia.
- Untuk versi Indonesia, isi setiap angka dengan aturan resmi: Permendikdasmen, peraturan kepegawaian (ASN/BKN), dan ketentuan daerah. Jika angka belum ada, tulis kalimat umum dan beri tanda [ISI: sumber].
- Hari libur khusus, izin tugas saat libur, dan jumlah jam kerja berbeda antar daerah dan status guru. Tulis ini sebagai "tergantung aturan daerah dan status kepegawaian".
- Kalender 28 hari dan "hari tanpa kerja 8/28" adalah contoh cerita, bukan statistik. Tulis itu di teks layar.
- Bu Aina dan sekolahnya adalah tokoh rekaan. Beri label "tokoh rekaan" pada kartu nama.

# RUMUS NASKAH
Tulis naskah lengkap dulu dalam kode: array baris (teks, perkiraan waktu mulai dan selesai, daftar cip yang ditautkan ke dunia 3D). Waktu diskalakan menurut jumlah kata agar totalnya tepat 75 detik. Setelah itu baru bangun visualnya.

Urutan wajib:
1. Anggapan umum: "Orang bilang, enaknya jadi guru. Libur banyak."
2. Koreksi: "Tapi orang tidak lihat, apa yang guru kerjakan saat libur."
3. Perkenalan: "Ini Bu Aina. Sekolah sudah tutup. Siswa sudah pulang kampung."
4. Panggilan kerja: telepon berbunyi, rapat, pelatihan, kegiatan sekolah.
5. Fakta surat tugas, dengan sumber.
6. Pekerjaan tersembunyi: kelas tambahan, koreksi lembar jawaban, input nilai ke sistem, rencana tahunan, cetak lembar kerja pakai uang sendiri, membereskan kelas.
7. Rapat lagi seminggu sebelum sekolah dibuka.
8. Pertanyaan kepada penonton: "Jadi, kalau guru libur, benar-benar istirahat?"
9. Jawaban emosional: "Badan ada di rumah. Kepala masih di kelas."
10. Hari pertama sekolah: tiga puluh siswa masuk kelas, kelas sudah siap.
11. Penutup: "Dan tidak ada yang tahu, itulah libur seorang guru."
12. CTA: Tulis TOOLS di komentar dan mentoring di link bio.

Panjang: sekitar 23 baris untuk 75 detik. Kebanyakan baris 2 sampai 4 detik.

# CONTOH NASKAH
Hanya contoh nada. Jangan disalin untuk topik lain.
"Orang bilang, enaknya jadi guru. Libur banyak."
"Tapi orang tidak lihat, apa yang guru kerjakan saat libur."
"Badan ada di rumah. Kepala masih di kelas."

# GAYA VISUAL
Mesin: Three.js dengan PerspectiveCamera fov 22, sudut atas sekitar 30 derajat, dikunci sepanjang video. Kamera digeser dengan setViewOffset (1080 x 1920) agar ruang atas dan bawah seimbang. Latar langit hijau #9DBE6C. Cahaya: HemisphereLight #FFFDF4 dan #B9AE8E, DirectionalLight #FFF3DC dengan bayangan PCFSoft 4096 px, radius 5.

Dunia tetap: rumah Bu Aina, sekolah, kelas, ruang guru, jalan dengan garis putih, pagar biru, pohon low-poly, kalender besar di dinding. Bangunan atap bata atau biru, lantai kayu terang, papan hijau, meja kayu berjajar.

Tokoh: bentuk low-poly. Bu Aina memakai baju biru tua #2C3757, jilbab #A5475A, dan kacamata. Tokoh tetangga memakai warna #6A3F73 dan #3E6C6A. Siswa berseragam merah putih dan biru tua, sekitar 30 orang, berjalan, duduk, dan berkedip. Tokoh kecil dibuat dengan skala 0.62.

Overlay 2D di atas kanvas: kartu nama dengan tali #3D6FA8, kartu jam dan hitungan jabatan, tag yang ditautkan ke objek 3D, teks karaoke, surat penugasan, pesan telepon orang tua malam hari, kartu 57 jam, dan kartu CTA.
Warna kartu: navy #1F2A44, putih #FFFDF6, hijau #2F8A5A, merah #C8322B, emas #E0A83A, teal #2D6C7A, merah muda #D9607A.
Font: Nunito untuk teks utama, Caveat untuk catatan tulisan tangan.

# KAMERA DAN GERAK
- Kamera dikunci ke waktu kata. Setiap perpindahan tempat mengikuti satu garis waktu (go, cam, tagAt) agar penonton tetap berada dalam satu dunia.
- Kamera bergerak dari rumah ke sekolah, lalu ke kalender. Tidak ada lompatan sudut yang mendadak.
- Tokoh di dunia hanya bergerak pelan: berjalan, menoleh, menunduk ke ponsel.
- Shot dekat hanya untuk kartu nama dan ponsel, singkat saja.

# TEKS LAYAR DAN LABEL
- Teks karaoke Nunito 900, ukuran 70 px, di tengah 1300 px dari atas. Kata yang sedang diucapkan berwarna #FFD25E, kata lain putih. Garis luar #1F2A44 15 px.
- Tag yang ditautkan ke dunia 3D: "kalender libur", "surat tugas", "kelas tambahan".
- Kartu 57 jam dan kartu 10 hari ditulis sebagai contoh cerita, bukan statistik resmi.
- Kartu CTA: "Tulis TOOLS" dan "mentoring di link bio".

# AUDIO
- Narasi Bahasa Indonesia suara pria dengan tempo santai, jeda 0.1 detik antar baris.
- Pesan ponsel memakai bunyi notifikasi pendek. Bunyi kertas untuk kartu surat.
- Musik latar lembut, berhenti sebentar pada baris "Badan ada di rumah. Kepala masih di kelas."
- Tidak ada lirik.

# TEKNIS
Durasi 75 detik adalah 2250 frame.
- Resolusi 1080 x 1920, 30 fps.
- Timeline ditulis sebagai fungsi murni waktu (seek(t)). Setiap frame digambar ulang, tidak ada keadaan tersimpan.
- Render dari kanvas WebGL ke kanvas 2D overlay, lalu gabungkan audio dengan ffmpeg.
- Bayangan diaktifkan. Pastikan semua tokoh masuk dan keluar dengan tepat.

# CEK SEBELUM SELESAI
- Setiap fakta sudah bersumber resmi Indonesia, atau dihapus.
- Bu Aina diberi label tokoh rekaan.
- Teks layar tidak menutupi kartu atau tokoh utama.
- Kalender 28 hari diberi label sebagai contoh cerita.
- Hook selesai dalam 3 detik pertama.
- Total durasi tepat 75 detik.
