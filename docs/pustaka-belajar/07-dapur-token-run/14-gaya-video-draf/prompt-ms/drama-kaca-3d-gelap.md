PROMPT VIDEO: DRAMA KACA 3D GELAP, KENAPA GRANAT DIMASUKKAN DALAM GELAS

# ISI BAHAGIAN INI DAHULU
Tukar baris IDEA kepada topik anda. Yang lain boleh kekal.
- IDEA: Kenapa granat yang sudah tercabut pin boleh tak meletup, kerana berada dalam gelas kaca
- PENONTON: pelajar sejarah, peminat fakta pelik dan cikgu yang mahu tunjuk contoh sebab-akibat
- TUJUAN: kedua-duanya (FYP dan bahan mengajar)
- TEMPOH: 24.3 saat
- BAHASA HASIL: English untuk narasi, dengan takarir Bahasa Melayu Malaysia, ejaan Malaysia (cikgu, murid, takarir, bingkai)
- CTA PENUTUP: Simpan video ini untuk rakan yang suka fakta sejarah pelik

# PERANAN
Anda ialah penulis naskhah dan pengarah animasi 3D bergaya thriller senyap untuk cikgu Malaysia. Tulis naskhah sendiri dalam Inggeris ringkas, dengan takarir Melayu. Hanya gaya visual dan rentak yang dipinjam dari rujukan, cerita dan watak mesti baharu. Jangan tanya soalan balik.

# MATLAMAT
1. Hook dalam 2 saat pertama: satu benda kecil di tangan, satu soalan yang mengejutkan.
2. Naskhah padat, sekitar 16 syot, setiap syot diikat pada satu frasa suara.
3. Penonton memahami satu prinsip sebab-akibat dalam 24 saat. Tiada nasihat keselamatan yang menggurui, tiada gambar senjata sebenar yang boleh ditiru.

Jika TUJUAN merangkumi bahan mengajar, tulis 2 soalan perbincangan dan masa Jeda pada syot akhir.

# FAKTA DAN SUMBER
- Kisah "gelas dan pintu" ialah dakwaan dalam cerita popular, bukan fakta sejarah yang disahkan. Tulis "dikatakan" atau "menurut cerita" dalam narasi dan takarir.
- Jangan reka tarikh, tempat tentera atau angka. Jika tiada sumber, guna ayat umum.
- Watak askar dan bilik ialah watak rekaan. Labelkan "adegan rekaan" pada kad akhir.
- Tidak perlu kad sumber panjang. Cukup satu kad 3 saat: "Dakwaan, belum disahkan".

# FORMULA NASKHAH
Tulis naskhah penuh dahulu dalam kod: array objek (teks EN, takarir BM, masa mula, masa tamat, nombor syot, label pil). Masa diikat pada kata-kata narasi. Baru bina visual.

Susunan wajib:
1. Soalan hook: "So why doesn't this grenade explode? The pin is already pulled."
2. Jawapan kecil: "Because it's inside a glass cup."
3. Fungsi: "The glass holds the safety lever, so the fuse never starts."
4. Dakwaan asal: "Some say soldiers came up with this trick."
5. Set-up: cawan diletak di atas pintu yang terbuka sedikit.
6. Tolakan: "When an enemy pushed, the cup fell and shattered."
7. Akibat: tuil terlepas, sumbu mula terbakar.
8. Tesis satu baris: "One glass turned a grenade into a booby trap."
9. Letupan dan kad penutup, dengan label pil dan kad adegan rekaan.

Setiap baris narasi 2 hingga 6 saat. Jangan letak lebih dari satu idea setiap syot.

# CONTOH NASKHAH
Rujukan nada sahaja. Jangan salin untuk topik lain.
"This grenade's pin is already pulled."
"So why doesn't it explode?"
"One glass turned a grenade into a booby trap."

# GAYA VISUAL
Enjin: Three.js dengan EffectComposer, RenderPass, UnrealBloomPass (kekuatan 0.3), OutputPass dan ShaderPass Lensa. Resolusi 1080 x 1920 dengan HalfFloat, samples 4. ToneMapping ACES Filmic, exposure 1.2.

Set: bilik gelap dengan pintu biru terbuka sedikit, lantai oktagon, meja kayu, gelas kaca berbentuk lathe, granat prosedural dengan tuil, pin dan sumbu. Latar belakang hampir hitam #0b0d10. Pencahayaan: cahaya utama hangat #ffe4c4 dengan intensiti tinggi dan bayang lembut 4096 px; isi cahaya sejuk #bcd2ff; cahaya sumbu #ff8a3a; cahaya letupan #ffa04a. Hemisphere #b8cce4 dan #4a3a2c.

Watak: askar 3D berseragam kusam, dengan lengan yang digerakkan IK. Kulit tona sederhana. Muka tidak perlu perincian tinggi. Tangan prop untuk syot dekat.

Kaca: 70 serpihan kaca nipis, transparan 42%, pantulan persekitaran tinggi. Serpihan terbang dan jatuh mengikut masa.

Kesan: asap dan api sebagai sprite, percikan sebagai sprite tambahan. Lensa: DOF palsu, kabur gerak, vignet, grain halus, kilat letupan pada syot akhir.

# KAMERA DAN GERAK
- Kamera perspektif fov 32, jarak dekat dan syot makro. Bergerak perlahan pada setiap syot.
- Sebahagian syot ialah close-up tangan dan granat. Sebahagian syot lebar memperlihatkan bilik.
- Ketika tolakan, pintu bergerak perlahan dari sudut 0.24 ke 1.05 radian. Cawan jatuh dengan lengkung ringkas.
- Letupan: kilat, kamera bergetar 3 bingkai, asap naik.

# TEKS LAYAR DAN LABEL
- Takarir BM dalam kotak gelap, teks putih, kata yang sedang disebut berwarna hijau limau (gaya rujukan).
- Label pil berwarna gelap dengan huruf besar: PIN PULLED, GLASS CUP, SAFETY LEVER, FUSE OFF, SLIGHTLY OPEN, FUSE BURNING.
- Label pil muncul ketika objek dirujuk. Label tidak boleh menutup granat.
- Kad akhir: kad adegan rekaan dan kad "Dakwaan, belum disahkan" selama 3 saat.

# AUDIO
- Narasi EN suara lelaki tenang (Jarnathan, eleven_v4_turbo). v4 tidak menerima parameter speed, jadi jeda panjang (lebih 0.26 saat) dikurangkan kepada 0.17 saat dengan fade 25 ms.
- Kesan bunyi pintu, kaca pecah, klik tuil, desis sumbu, letupan rendah.
- Tiada muzik lirik. Muzik tegang rendah sahaja, dan muzik berhenti sebelum letupan.

# TEKNIKAL
Tempoh 24.3 saat ialah 729 bingkai.
- Resolusi 1080 x 1920, 30 fps.
- Setiap masa diambil dari suara melalui fungsi A(frasa) pada cap waktu kata. Jumlah kata narasi mesti sama dengan teks.
- Render senyap dahulu, kemudian campur suara dengan ffmpeg. Pastikan audio tepat sama panjang dengan video.

# SEMAK SEBELUM SIAP
- Dakwaan dilabel sebagai dakwaan.
- Tiada arahan membuat bahan letupan atau senjata.
- Takarir tidak menutup granat dan gelas.
- Letupan jatuh tepat pada kata "trap".
- Semua label pil muncul dan hilang pada masa yang betul.
