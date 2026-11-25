PROMPT VIDEO: KALENDAR CUTI ISOMETRIK, KENAPA CIKGU TAK BENAR-BENAR BERCUTI

# ISI BAHAGIAN INI DAHULU
Tukar baris IDEA kepada topik anda. Yang lain boleh kekal.
- IDEA: Orang nampak cikgu banyak cuti, tapi tak nampak apa yang cikgu buat masa cuti
- PENONTON: cikgu, guru sandaran dan orang awam yang sering dengar cikgu banyak cuti
- TUJUAN: kedua-duanya (FYP dan bahan mengajar)
- TEMPOH: 75 saat
- BAHASA HASIL: Bahasa Melayu Malaysia, ejaan Malaysia (cikgu, murid, takarir, naskhah, bingkai)
- CTA PENUTUP: Komen TOOLS, nanti saya hantar caranya. Mentoring di link bio

# PERANAN
Anda ialah penulis naskhah dan pengarah animasi isometrik low-poly untuk cikgu Malaysia. Tulis naskhah sendiri, sahkan fakta dengan sumber rasmi, dan bina video yang boleh dimainkan terus. Jangan tanya soalan balik. Jika fakta belum disahkan, buang ayat itu.

# MATLAMAT
1. Hook dalam 3 saat pertama: tanggapan umum yang dibantah dengan satu baris.
2. Naskhah 2 hingga 4 saat setiap baris, bahasa lisan, dengan watak Cikgu Aina sebagai pencerita rekaan.
3. Penonton melihat kerja tersembunyi semasa cuti: arahan, kelas tambahan, tanda kertas, kemas kelas, mesyuarat. Video tidak menyerang Kementerian atau sekolah, hanya menerangkan keadaan.

# FAKTA DAN SUMBER
- Fakta dalam folder rujukan datang dari sumber Malaysia: jawapan Dewan Rakyat (BH 2023) mengenai cikgu diarah bertugas sehingga separuh cuti penggal; pekeliling Cuti Rehat Khas 10 hari setahun, 15 hari bagi lebih 10 tahun perkhidmatan; laporan NUTP mengenai program di luar waktu. Sahkan semula setiap pautan sebelum guna.
- Untuk versi Indonesia, fakta mesti diganti dengan aturan resmi Indonesia. Jangan terjemah angka Malaysia.
- Kalendar 28 hari dan "hari tanpa kerja 8/28" ialah contoh cerita, bukan statistik. Tulis itu dalam takarir.
- Watak Cikgu Aina dan sekolah ialah rekaan. Labelkan "watak rekaan" pada kad nama.

# FORMULA NASKHAH
Tulis naskhah penuh dahulu dalam kod: array baris (teks, anggaran masa mula dan tamat, senarai cip yang dipaut ke dunia 3D). Masa diskala mengikut bilangan kata supaya jumlah tepat 75 saat. Baru bina visual.

Susunan wajib:
1. Tanggapan umum: "Orang kata, seronoknya jadi cikgu. Cuti banyak."
2. Pembetulan: "Tapi orang tak nampak, apa cikgu buat masa cuti."
3. Perkenalan watak: "Ini Cikgu Aina. Sekolah dah tutup. Murid dah balik kampung."
4. Panggilan kerja: telefon berbunyi, mesyuarat, kursus, program sekolah.
5. Fakta arahan bertugas dengan sumber.
6. Kerja tersembunyi: kelas tambahan, tanda kertas, markah masuk sistem, rancangan tahunan, cetak lembaran kerja guna duit sendiri, kemas kelas.
7. Mesyuarat lagi seminggu sebelum sekolah buka.
8. Fakta cuti rehat khas, dan syarat izin pengetua.
9. Soalan kepada penonton: "Jadi bila cikgu cuti, betul-betul rehat ke?"
10. Jawapan emosi: "Badan ada di rumah. Kepala masih di kelas."
11. Hari pertama sekolah: tiga puluh murid masuk kelas, kelas sudah siap.
12. Penutup: "Dan tiada siapa tahu, itulah cuti seorang cikgu."
13. CTA Komen TOOLS dan mentoring di bio.

Panjang: 23 baris untuk 75 saat. Kebanyakan baris 2 hingga 4 saat.

# CONTOH NASKHAH
Rujukan nada sahaja. Jangan salin untuk topik lain.
"Orang kata, seronoknya jadi cikgu. Cuti banyak."
"Tapi orang tak nampak, apa cikgu buat masa cuti."
"Badan ada di rumah. Kepala masih di kelas."

# GAYA VISUAL
Enjin: Three.js dengan PerspectiveCamera fov 22, sudut atas kira-kira 30 darjah, dikunci sepanjang video. Kamera dialihkan dengan setViewOffset (1080 x 1920) supaya ruang atas dan bawah seimbang. Latar langit hijau #9DBE6C. Cahaya: HemisphereLight #FFFDF4 dan #B9AE8E, DirectionalLight #FFF3DC dengan bayang PCFSoft 4096 px, radius 5.

Dunia tetap: rumah Cikgu Aina, sekolah, kelas, bilik guru, jalan dengan lorong putih, pagar biru, pokok low-poly, kalendar besar di dinding. Bangunan bumbung bata atau biru, lantai kayu terang, papan hijau, meja kayu berderet.

Watak: bentuk low-poly. Cikgu Aina memakai pakaian biru tua #2C3757, tudung #A5475A, dan cermin mata. Jiran memakai warna #6A3F73 dan #3E6C6A. Murid berseragam putih dan biru tua, sekitar 30 orang, berjalan, duduk dan berkedip. Watak kecil dibuat dengan skala 0.62.

Overlay 2D di atas kanvas: kad nama bergantung dengan tali #3D6FA8, kad jam dan kiraan jawatan, tag dipaut ke objek 3D, takarir karaoke, surat penempatan, telefon mesej ibu bapa malam, kad 57 jam, dan kad CTA.
Warna kad: navy #1F2A44, putih #FFFDF6, hijau #2F8A5A, merah #C8322B, emas #E0A83A, teal #2D6C7A, merah jambu #D9607A.
Fon: Nunito untuk teks utama, Caveat untuk nota tulisan tangan.

# KAMERA DAN GERAK
- Kamera dikunci ke waktu kata. Setiap perpindahan tempat mengikut satu garis masa (go, cam, tagAt) supaya penonton kekal dalam satu dunia.
- Kamera bergerak dari rumah ke sekolah, kemudian ke kalendar. Tiada lompatan sudut mendadak.
- Watak dalam dunia hanya bergerak perlahan: berjalan, menoleh, menunduk ke telefon.
- Syot dekat hanya untuk kad nama dan telefon, pendek sahaja.

# TEKS LAYAR DAN LABEL
- Takarir karaoke Nunito 900, saiz 70 px, di tengah 1300 px dari atas. Kata yang sedang disebut berwarna #FFD25E, kata lain putih. Garis luar #1F2A44 15 px.
- Tag dipaut ke dunia 3D: "kalendar cuti", "surat penempatan", "kelas tambahan".
- Kad 57 jam dan kad 10 hari ditulis sebagai contoh cerita, bukan statistik rasmi.
- Kad CTA: "Komen TOOLS" dan "mentoring di link bio".

# AUDIO
- Narasi BM lelaki (suara Daud) dengan kadar santai, jeda 0.1 saat antara baris.
- Mesej telefon mempunyai bunyi notifikasi pendek. Bunyi kertas untuk kad surat.
- Muzik latar lembut, berhenti sebentar pada baris "Badan ada di rumah. Kepala masih di kelas."
- Tiada lirik.

# TEKNIKAL
Tempoh 75 saat ialah 2250 bingkai.
- Resolusi 1080 x 1920, 30 fps.
- Sistem timeline ditulis sebagai fungsi murni waktu (seek(t)). Setiap frame dilukis semula, tiada keadaan tersimpan.
- Render dari kanvas WebGL ke kanvas 2D overlay, kemudian muxing audio dengan ffmpeg.
- Bayang diaktifkan. Pastikan semua watak masuk dan keluar dengan tepat.

# SEMAK SEBELUM SIAP
- Setiap fakta sudah disahkan sumbernya, atau dibuang.
- Cikgu Aina dilabel watak rekaan.
- Takarir tidak menutup kad atau watak utama.
- Kalendar 28 hari dilabel sebagai contoh cerita.
- Hook selesai dalam 3 saat pertama.
- Jumlah durasi tepat 75 saat.
