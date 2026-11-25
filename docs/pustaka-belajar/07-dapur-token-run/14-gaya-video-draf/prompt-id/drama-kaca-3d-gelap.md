PROMPT VIDEO: DRAMA KACA 3D GELAP, KENAPA GRANAT DIMASUKKAN KE DALAM GELAS

# ISI BAGIAN INI DULU
Ganti baris IDE dengan topikmu. Yang lain boleh dibiarkan.
- IDE: Kenapa granat yang pinnya sudah dicabut tidak meledak, karena berada di dalam gelas kaca
- PENONTON: pelajar sejarah, penyuka fakta unik, dan guru yang ingin memberi contoh sebab-akibat
- TUJUAN: keduanya (FYP dan bahan ajar)
- DURASI: 24.3 detik
- BAHASA HASIL: English untuk narasi, dengan teks layar Bahasa Indonesia, ejaan EYD (guru, siswa, teks layar, frame)
- CTA PENUTUP: Simpan video ini untuk teman yang suka fakta sejarah yang aneh

# PERAN
Kamu adalah penulis naskah dan sutradara animasi 3D bergaya thriller senyap untuk guru Indonesia. Tulis naskah sendiri dalam Inggris sederhana, dengan teks layar Indonesia. Dari rujukan hanya gaya visual dan tempo yang dipinjam. Cerita dan tokoh harus baru. Jangan balik bertanya.

# SASARAN
1. Hook dalam 2 detik pertama: satu benda kecil di tangan, satu pertanyaan yang mengejutkan.
2. Naskah padat, sekitar 16 shot, setiap shot diikat pada satu frasa suara.
3. Penonton memahami satu prinsip sebab-akibat dalam 24 detik. Tidak ada nasihat keselamatan yang menggurui, dan tidak ada gambar senjata sungguhan yang bisa ditiru.

Jika TUJUAN mencakup bahan ajar, tulis 2 pertanyaan diskusi dan titik Jeda pada shot terakhir.

# FAKTA DAN SUMBER
- Kisah "gelas dan pintu" adalah klaim dalam cerita populer, bukan fakta sejarah yang terverifikasi. Tulis "konon" atau "menurut cerita" di narasi dan teks layar.
- Jangan mengarang tanggal, tempat pasukan, atau angka. Jika tidak ada sumber, pakai kalimat umum.
- Tokoh tentara dan ruangan adalah rekaan. Beri label "adegan rekaan" pada kartu akhir.
- Tidak perlu kartu sumber panjang. Cukup satu kartu 3 detik: "Klaim, belum terverifikasi".

# RUMUS NASKAH
Tulis naskah lengkap dulu dalam kode: array objek (teks EN, teks layar ID, waktu mulai, waktu selesai, nomor shot, label pil). Waktu diikat pada kata-kata narasi. Setelah itu baru bangun visualnya.

Urutan wajib:
1. Pertanyaan pembuka: "So why doesn't this grenade explode? The pin is already pulled."
2. Jawaban kecil: "Because it's inside a glass cup."
3. Fungsi: "The glass holds the safety lever, so the fuse never starts."
4. Klaim asal: "Some say soldiers came up with this trick."
5. Persiapan: cangkir diletakkan di atas pintu yang sedikit terbuka.
6. Dorongan: "When an enemy pushed, the cup fell and shattered."
7. Akibat: tuas terlepas, sumbu mulai terbakar.
8. Tesis satu baris: "One glass turned a grenade into a booby trap."
9. Ledakan dan kartu penutup, dengan label pil dan kartu adegan rekaan.

Setiap baris narasi 2 sampai 6 detik. Jangan memuat lebih dari satu ide per shot.

# CONTOH NASKAH
Hanya contoh nada. Jangan disalin untuk topik lain.
"This grenade's pin is already pulled."
"So why doesn't it explode?"
"One glass turned a grenade into a booby trap."

# GAYA VISUAL
Mesin: Three.js dengan EffectComposer, RenderPass, UnrealBloomPass (kekuatan 0.3), OutputPass, dan ShaderPass Lensa. Resolusi 1080 x 1920 dengan HalfFloat, samples 4. ToneMapping ACES Filmic, exposure 1.2.

Set: ruangan gelap dengan pintu biru yang sedikit terbuka, lantai segi delapan, meja kayu, gelas kaca berbentuk lathe, granat prosedural dengan tuas, pin, dan sumbu. Latar belakang hampir hitam #0b0d10. Pencahayaan: cahaya utama hangat #ffe4c4 dengan intensitas tinggi dan bayangan lembut 4096 px; cahaya pengisi dingin #bcd2ff; cahaya sumbu #ff8a3a; cahaya ledakan #ffa04a. Hemisphere #b8cce4 dan #4a3a2c.

Tokoh: tentara 3D dengan seragam kusam, lengan digerakkan dengan IK. Warna kulit sedang. Wajah tidak perlu detail tinggi. Tangan prop untuk shot dekat.

Kaca: 70 pecahan kaca tipis, transparan 42%, pantulan lingkungan tinggi. Pecahan terbang dan jatuh mengikuti waktu.

Efek: asap dan api sebagai sprite, percikan sebagai sprite tambahan. Lensa: DOF semu, blur gerak, vinyet, grain halus, kilatan ledakan pada shot akhir.

# KAMERA DAN GERAK
- Kamera perspektif fov 32, jarak dekat dan shot makro. Bergerak pelan di setiap shot.
- Sebagian shot close-up tangan dan granat. Sebagian shot lebar memperlihatkan ruangan.
- Saat dorongan, pintu bergerak pelan dari sudut 0.24 ke 1.05 radian. Cangkir jatuh dengan lengkung sederhana.
- Ledakan: kilatan, kamera bergetar 3 frame, asap naik.

# TEKS LAYAR DAN LABEL
- Teks layar Bahasa Indonesia dalam kotak gelap, tulisan putih. Kata yang sedang diucapkan berwarna hijau limau (gaya rujukan).
- Label pil gelap dengan huruf besar: PIN PULLED, GLASS CUP, SAFETY LEVER, FUSE OFF, SLIGHTLY OPEN, FUSE BURNING.
- Label pil muncul saat objek disebut. Label tidak boleh menutupi granat.
- Kartu akhir: kartu adegan rekaan dan kartu "Klaim, belum terverifikasi" selama 3 detik.

# AUDIO
- Narasi EN, suara pria tenang (Jarnathan, eleven_v4_turbo). v4 tidak menerima parameter speed, jadi jeda panjang (lebih dari 0.26 detik) dipendekkan menjadi 0.17 detik dengan fade 25 ms.
- SFX pintu, kaca pecah, klik tuas, desis sumbu, ledakan rendah.
- Tidak ada musik berlirik. Musik tegang rendah saja, dan berhenti sebelum ledakan.

# TEKNIS
Durasi 24.3 detik adalah 729 frame.
- Resolusi 1080 x 1920, 30 fps.
- Setiap waktu diambil dari suara melalui fungsi A(frasa) pada cap waktu kata. Jumlah kata narasi harus sama dengan teksnya.
- Render tanpa suara dulu, lalu campur suara dengan ffmpeg. Pastikan panjang audio dan video sama persis.

# CEK SEBELUM SELESAI
- Klaim diberi label sebagai klaim.
- Tidak ada instruksi membuat bahan peledak atau senjata.
- Teks layar tidak menutupi granat dan gelas.
- Ledakan jatuh tepat pada kata "trap".
- Semua label pil muncul dan hilang pada waktu yang benar.
