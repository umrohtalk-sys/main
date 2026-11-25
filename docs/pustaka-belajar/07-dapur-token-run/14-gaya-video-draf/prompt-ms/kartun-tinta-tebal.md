PROMPT VIDEO: KARTUN TINTA TEBAL, KENAPA CIKGU PENAT WALAUPUN TAK ANGKAT BARANG

# ISI BAHAGIAN INI DAHULU
Tukar baris IDEA kepada topik anda. Yang lain boleh kekal.
- IDEA: Kenapa cikgu balik sekolah rasa macam baru lepas lari maraton
- PENONTON: cikgu dan ibu bapa yang suka tahu sebab di sebalik perasaan
- TUJUAN: kedua-duanya (FYP dan bahan mengajar)
- TEMPOH: 75.5 saat
- BAHASA HASIL: Bahasa Melayu Malaysia, ejaan Malaysia (cikgu, murid, takarir, naskhah, bingkai), dengan baris Inggeris kecil di bawah takarir
- CTA PENUTUP: Komen TOOLS, nanti saya hantar caranya

# PERANAN
Anda ialah penulis naskhah dan pengarah kartun 3D bergaris tebal untuk cikgu Malaysia. Tulis naskhah sendiri, pastikan fakta sahih, dan bina video yang boleh dimainkan terus. Jangan tanya soalan balik. Jika fakta belum disahkan, tulis ayat umum atau buang ayat itu. Jangan reka angka.

# MATLAMAT
Video mesti memenuhi tiga syarat:
1. Hook dalam 3 saat pertama: cikgu tiba di bilik guru dan rebah di kerusi, dengan satu soalan yang mengejutkan.
2. Boleh dimuat naik sebagai FYP: tepat 75.5 saat, nada bercerita, kata ganti KAU atau SAYA supaya penonton rasa disapa.
3. Penonton melihat kerja yang tak nampak: otak, emosi, dan beban satu kelas. Video tidak menyalahkan murid, ibu bapa atau sekolah.

Jika TUJUAN merangkumi bahan mengajar, selepas naskhah siap tulis 2 soalan perbincangan untuk murid, serta masa video untuk ditekan Jeda.

# FAKTA DAN SUMBER
- Setiap angka sains mesti ada rujukan jurnal atau laporan rasmi dalam nota luar fail. Jika rujukan belum dibuka, tulis "perlu disahkan" dan jangan paparkan angka pada takarir.
- Angka berkaitan otak dan tenaga badan, serta kajian glutamat tahun 2022, belum disahkan dalam folder ini. Sahkan dahulu sebelum upload.
- Watak murid dan cikgu ialah watak rekaan. Labelkan "watak rekaan" pada baris akhir naskhah.
- Jika fakta disahkan, tambah kad SUMBER bernombor selama 4 saat sebelum CTA. Jika tidak, buang kad itu.

# FORMULA NASKHAH
Tulis naskhah penuh dahulu dalam kod: array objek, satu objek untuk setiap baris (teks BM, teks Inggeris kecil, masa mula, masa tamat, nombor syot). Masa diagih mengikut bilangan kata lalu diskala supaya jumlahnya tepat 75.5 saat. Selepas naskhah siap, baru bina visual.

Susunan wajib:
1. Soalan hook: "Kenapa cikgu balik sekolah, rasa macam baru lepas lari maraton?"
2. Bantahan ringkas: "Padahal seharian cuma berdiri, bercakap, mengajar."
3. Penegasan: "Sebab kerja cikgu bukan kerja badan saja. Ini kerja otak. Dan kerja emosi."
4. Senarai watak dalam kelas, satu ayat pendek untuk setiap kumpulan: ada yang menangis, ada yang bergaduh, ada yang diam tapi hatinya luka.
5. Beban serentak: "Dan cikgu kena baca semuanya, serentak."
6. Tambahan yang tak dikira: mesej ibu bapa, arahan mengejut, drama di bilik guru.
7. Satu fakta sains yang sudah disahkan, ditulis sebagai ayat pendek.
8. Rumusan emosi: senyum depan murid walaupun hati berat. Pengkaji panggil ini kerja emosi.
9. Akibat yang dirasa: lapar, kepala pening, tak larat bercakap.
10. Pembetulan: "Itu bukan malas. Itu bateri yang dah habis."
11. Penutup manusiawi: "Cikgu bukan robot. Cikgu manusia, yang menjaga ramai manusia."
12. CTA: "Nak buat video macam ni? Komen TOOLS, nanti saya hantar caranya."

Panjang: kira-kira 25 baris. Kebanyakan ayat 4 hingga 8 patah kata. Ayat lebih 10 patah kata hanya untuk baris rumusan.

# CONTOH NASKHAH
Rujukan nada sahaja. Jangan salin untuk topik lain.
"Kenapa cikgu balik sekolah, rasa macam baru lepas lari maraton?"
"Ini kerja otak. Dan kerja emosi."
"Ada yang menangis. Ada yang diam, tapi hatinya sedang luka."
"Itu bukan malas. Itu bateri yang dah habis."

# GAYA VISUAL
Enjin: Remotion 4 dengan @remotion/three dan Three.js 0.170. Setiap frame ialah fungsi nombor frame (f / 30). Pasca proses berantai: ink pass (garis tinta dari kedalaman dan normal, warna hampir hitam #030303, lebih tebal dekat, pudar jauh), LensBlur untuk fokus, Bloom dengan intensiti 0.5, ToneMapping NEUTRAL, lalu GradeEffect (preset day, atau golden untuk adegan pulang). MSAA 4.

Watak: kartun 2D yang dilukis di kanvas lalu dipasang sebagai kad dalam dunia 3D. Kepala berbentuk superelips dengan dagu tirus. Badan seperti kacang. Anggota berupa garis tunggal dengan tangan titik dakwat. Garis luar warna plum gelap #241726, tebal di sisi jauh cahaya dan nipis di sisi cahaya. Mata kuyu dan lesu, tanpa blush, tanpa kilau mata. Warna kulit #ffe2c2 dengan variasi empat tona. Cikgu memakai pakaian warna tenang. Murid berbeza warna dan saiz.

Dunia: bilik darjah, bilik guru, papan hitam, meja berderet, lampu siling. Latar langit atau tingkap menggunakan preset golden untuk adegan pulang.

Takarir dan cip: fon sans tebal (Helvetica Neue, Arial, 800 hingga 900). Takarir putih #ffffff dengan garis luar #14101c 7 px. Kata yang belum disebut 42% legap. Kata penting berwarna oren #ffb04a. Cip latar #14101ce8, sudut 22 px, tulisan 46 hingga 62 px.

Kad akhir: latar #17141fee, sempadan 4 px #ffb04a, sudut 44 px. Ikon oren #ef8a24 dengan tiga mata putih. Teks "Nak buat video macam ni?" #f4efe6. Kotak komen #f4efe6, butang Hantar #df2f55 bertukar #2fb37a bila Dihantar.

# KAMERA DAN GERAK
- Kamera perspektif, fov 40, dekat dengan watak, sudut paras mata. Fokus lensa ikut watak yang sedang bercakap, latar belakang kabur.
- Setiap syot 2 hingga 4 saat. Potongan diiringi kilat putih empat bingkai dengan kelegapan 1, 0.75, 0.45, 0.2.
- Gerak kecil: kepala cikgu mengangguk, tangan bergerak sedikit, asap nipis naik dari kepala cikgu.
- Dalam adegan kelas, kamera bergerak perlahan ke kiri dan ke kanan.
- Akhir: kamera mendekat ke kad komen. Kad membesar dari skala 0.85 ke 1.0 dalam 0.25 saat, butang Komen TOOLS berdenyut perlahan.

# TEKS LAYAR DAN LABEL
- Takarir BM 1 hingga 3 patah kata setiap frasa. Pecah pada tanda baca atau selepas 18 aksara.
- Baris Inggeris kecil 38 px, italic, warna #ffe3b8, garis luar #14101c 5 px, diletakkan di bawah takarir utama.
- Cip angka dan istilah ringkas: PENAT, OTAK, EMOSI, BURNOUT. Cip muncul dan hilang dengan skala 0.82 ke 1.0.
- Kad komen: tulisan "Komen" putih, "TOOLS" dalam kotak oren #ffb04a dengan teks #14101c.
- Takarir dan cip tidak boleh menutup wajah cikgu.

# AUDIO
- Suara naratif BM tenang, kadar sekitar 150 patah kata seminit. Jeda 0.2 hingga 0.4 saat selepas soalan.
- Muzik latar dan SFX belum dikodkan dalam folder rujukan. Tambah selepas suara siap dan pastikan muzik tidak menutup suara.
- Video tidak perlu lirik. Jangan gunakan muzik yang menyerupai lagu terkenal.

# TEKNIKAL
Tempoh 75.5 saat ialah 2265 bingkai.
- Resolusi 1080 x 1920, 30 fps.
- Render Remotion dengan ThreeCanvas dan shadows aktif. Render senyap dahulu, kemudian gabungkan audio dengan ffmpeg.
- Dunia 3D dan pasca proses mesti dibina semula mengikut nilai di atas. Jangan guna fon atau warna lain.

# SEMAK SEBELUM SIAP
- Setiap angka sains ada rujukan atau sudah dibuang.
- Hook selesai dalam 3 saat pertama.
- Tiada takarir yang menutup muka cikgu.
- CTA Komen TOOLS muncul dalam 10 saat terakhir.
- Watak rekaan dilabel.
- Jumlah durasi tepat 75.5 saat.
