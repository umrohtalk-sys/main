PROMPT VIDEO: KARTUN GARIS TINTA TEBAL, KENAPA GURU LELAH PADAHAL TIDAK MENGANGKAT BEBAN

# ISI BAGIAN INI DULU
Ganti baris IDE dengan topikmu. Yang lain boleh dibiarkan.
- IDE: Kenapa guru pulang sekolah rasanya seperti habis lari maraton
- PENONTON: guru dan orang tua yang suka tahu penyebab di balik perasaan
- TUJUAN: keduanya (FYP dan bahan ajar)
- DURASI: 75.5 detik
- BAHASA HASIL: Bahasa Indonesia, ejaan EYD (guru, siswa, teks layar, naskah, frame), dengan baris Inggris kecil di bawah teks layar
- CTA PENUTUP: Tulis TOOLS di kolom komentar, nanti saya kirimkan caranya

# PERAN
Kamu adalah penulis naskah dan sutradara kartun 3D bergaris tebal untuk guru Indonesia. Tulis naskah sendiri, pastikan fakta benar, dan bangun video yang bisa langsung diputar. Jangan balik bertanya. Jika fakta belum bisa dipastikan, tulis kalimat umum atau buang kalimat itu. Jangan mengarang angka.

# SASARAN
Video harus memenuhi tiga hal:
1. Hook dalam 3 detik pertama: guru tiba di ruang guru dan terhempas di kursi, dengan satu pertanyaan yang mengagetkan.
2. Layak diunggah sebagai FYP: tepat 75.5 detik, nada bercerita, sapaan KAMU atau SAYA agar penonton merasa disapa.
3. Penonton melihat pekerjaan yang tidak terlihat: otak, emosi, dan beban satu kelas. Video tidak menyalahkan siswa, orang tua, atau sekolah.

Jika TUJUAN mencakup bahan ajar, setelah naskah selesai tulis 2 pertanyaan diskusi untuk siswa, beserta menit video tempat guru bisa menekan Jeda.

# FAKTA DAN SUMBER
- Setiap angka ilmiah harus punya rujukan jurnal atau laporan resmi di catatan terpisah. Jika rujukan belum dibuka, tulis "perlu diverifikasi" dan jangan tampilkan angka itu di teks layar.
- Angka tentang otak dan energi tubuh, serta kajian glutamat tahun 2022, belum diverifikasi dalam folder ini. Verifikasi dulu sebelum unggah.
- Tokoh siswa dan guru adalah tokoh rekaan. Beri label "tokoh rekaan" di baris akhir naskah.
- Jika fakta sudah terverifikasi, tambahkan kartu SUMBER bernomor selama 4 detik sebelum CTA. Jika belum, hapus kartu itu.

# RUMUS NASKAH
Tulis naskah lengkap dulu dalam kode: array objek, satu objek untuk tiap baris (teks ID, teks Inggris kecil, waktu mulai, waktu selesai, nomor shot). Waktu dibagi menurut jumlah kata lalu diskalakan agar totalnya tepat 75.5 detik. Setelah naskah jadi, baru bangun visualnya.

Urutan wajib:
1. Pertanyaan pembuka: "Kenapa guru pulang sekolah, rasanya seperti habis lari maraton?"
2. Bantahan singkat: "Padahal seharian cuma berdiri, bicara, dan mengajar."
3. Penegasan: "Karena pekerjaan guru bukan pekerjaan fisik saja. Ini kerja otak. Dan kerja emosi."
4. Daftar isi kelas, satu kalimat pendek tiap kelompok: ada yang menangis, ada yang bertengkar, ada yang diam tapi hatinya terluka.
5. Beban serentak: "Dan guru harus membaca semuanya, sekaligus."
6. Tambahan yang tidak terhitung: pesan orang tua, instruksi mendadak, drama di ruang guru.
7. Satu fakta ilmiah yang sudah terverifikasi, ditulis sebagai kalimat pendek.
8. Rangkuman emosi: tersenyum di depan siswa walaupun hati berat. Para peneliti menyebut ini kerja emosi.
9. Akibat yang dirasakan: lapar, kepala pusing, tidak sanggup bicara.
10. Koreksi: "Itu bukan malas. Itu baterai yang sudah habis."
11. Penutup manusiawi: "Guru bukan robot. Guru manusia, yang menjaga banyak manusia."
12. CTA: "Mau bikin video seperti ini? Tulis TOOLS di komentar, nanti saya kirimkan caranya."

Panjang: sekitar 25 baris. Kebanyakan kalimat 4 sampai 8 kata. Kalimat lebih dari 10 kata hanya untuk baris rangkuman.

# CONTOH NASKAH
Hanya contoh nada. Jangan disalin untuk topik lain.
"Kenapa guru pulang sekolah, rasanya seperti habis lari maraton?"
"Ini kerja otak. Dan kerja emosi."
"Ada yang menangis. Ada yang diam, tapi hatinya sedang terluka."
"Itu bukan malas. Itu baterai yang sudah habis."

# GAYA VISUAL
Mesin: Remotion 4 dengan @remotion/three dan Three.js 0.170. Setiap frame adalah fungsi nomor frame (f / 30). Pasca-proses berurutan: ink pass (garis tinta dari kedalaman dan normal, warna hampir hitam #030303, tebal di dekat, memudar di jauh), LensBlur untuk fokus, Bloom dengan intensitas 0.5, ToneMapping NEUTRAL, lalu GradeEffect (preset day, atau golden untuk adegan pulang). MSAA 4.

Tokoh: kartun 2D yang digambar di kanvas lalu dipasang sebagai kartu di dunia 3D. Kepala berbentuk superelips dengan dagu runcing. Badan seperti kacang. Anggota tubuh berupa garis tunggal dengan tangan titik tinta. Garis luar berwarna plum gelap #241726, tebal di sisi yang jauh dari cahaya dan tipis di sisi terang. Mata sayu, tanpa blush, tanpa kilau mata. Warna kulit #ffe2c2 dengan variasi empat nada. Guru memakai baju berwarna tenang. Siswa berbeda warna dan ukuran.

Latar: ruang kelas, ruang guru, papan tulis, meja berjajar, lampu plafon. Untuk adegan pulang, langit atau jendela memakai preset golden.

Teks layar dan cip: font sans tebal (Helvetica Neue, Arial, 800 sampai 900). Teks putih #ffffff dengan garis luar #14101c 7 px. Kata yang belum diucapkan 42% transparan. Kata penting berwarna oranye #ffb04a. Cip latar #14101ce8, sudut 22 px, tulisan 46 sampai 62 px.

Kartu akhir: latar #17141fee, garis tepi 4 px #ffb04a, sudut 44 px. Ikon oranye #ef8a24 dengan tiga mata putih. Teks "Mau bikin video seperti ini?" warna #f4efe6. Kotak komentar #f4efe6, tombol Kirim #df2f55 berubah menjadi #2fb37a saat Terkirim.

# KAMERA DAN GERAK
- Kamera perspektif, fov 40, dekat dengan tokoh, sudut sejajar mata. Fokus lensa mengikuti tokoh yang sedang bicara, latar belakang buram.
- Tiap shot 2 sampai 4 detik. Perpindahan shot diiringi kilatan putih 4 frame dengan opasitas 1, 0.75, 0.45, 0.2.
- Gerak kecil: kepala guru mengangguk, tangan bergerak sedikit, asap tipis naik dari kepala guru.
- Di adegan kelas, kamera bergerak pelan ke kiri dan ke kanan.
- Akhir: kamera mendekat ke kartu komentar. Kartu membesar dari skala 0.85 ke 1.0 dalam 0.25 detik, tombol Komen TOOLS berdenyut pelan.

# TEKS LAYAR DAN LABEL
- Teks layar Bahasa Indonesia 1 sampai 3 kata per frasa. Dipecah di tanda baca atau setelah 18 karakter.
- Baris Inggris kecil 38 px, miring, warna #ffe3b8, garis luar #14101c 5 px, di bawah teks utama.
- Cip angka dan istilah singkat: CAPEK, OTAK, EMOSI, BURNOUT. Cip muncul dan hilang dengan skala 0.82 ke 1.0.
- Kartu komentar: tulisan "Komen" putih, "TOOLS" dalam kotak oranye #ffb04a dengan teks #14101c.
- Teks layar dan cip tidak boleh menutupi wajah guru.

# AUDIO
- Narasi Bahasa Indonesia yang tenang, sekitar 150 kata per menit. Jeda 0.2 sampai 0.4 detik setelah pertanyaan.
- Musik latar dan SFX belum dikodekan dalam folder rujukan. Tambahkan setelah suara selesai, dan pastikan musik tidak menutupi suara.
- Tidak perlu lirik. Jangan memakai musik yang mirip lagu populer.

# TEKNIS
Durasi 75.5 detik adalah 2265 frame.
- Resolusi 1080 x 1920, 30 fps.
- Render Remotion dengan ThreeCanvas dan bayangan aktif. Render tanpa suara dulu, lalu gabungkan audio dengan ffmpeg.
- Dunia 3D dan pasca-proses harus dibangun ulang sesuai nilai di atas. Jangan pakai font atau warna lain.

# CEK SEBELUM SELESAI
- Setiap angka ilmiah punya rujukan atau sudah dihapus.
- Hook selesai dalam 3 detik pertama.
- Tidak ada teks layar yang menutupi wajah guru.
- CTA Tulis TOOLS muncul dalam 10 detik terakhir.
- Tokoh rekaan sudah diberi label.
- Total durasi tepat 75.5 detik.
