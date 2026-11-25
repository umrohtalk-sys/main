# Contoh posting yang sudah terbit (ekspor Repliz, terbaru di atas)

Dipakai sebagai rujukan gaya. Waktu dalam UTC (WIB = +7).


---

## 2026-11-23 23:05 UTC · threads @auzanhasfi · video

Media: 1 file (video)

```text
20 tahun kemudian di pasar raya: "Cikgu! Ingat saya lagi tak?" Kau dah lupa nama dia, tapi dia tak pernah lupa kau. Siapa cikgu yang korang tak pernah lupa? 💛

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 23:03 UTC · threads @auzan_hasfi · video

Media: 1 file (video)

```text
Bos, pengurus, pengarah — gelaran tu tinggal atas meja bila keluar pejabat. Tapi "cikgu"? Murid dah jadi doktor pun tetap panggil kau cikgu 🍎

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 22:55 UTC · threads @edugamelabs.id · text

```text
Aku ketagihan bikin game sendiri buat murid. Kali ini ala Cut the Rope.

Ceritanya panjang, aku tulis di bawah.
```

**Bagian 2**
```text
Awalnya sederhana. Aku capek lihat murid ngerjain LKS sambil nguap.

Terus aku ingat game potong tali yang dulu viral. Tokohnya lapar, permen digantung pakai tali, kita harus potong tali di urutan yang pas supaya permennya jatuh ke mulut.

Aku tambahkan satu aturan: bintang di tiap level cuma bisa diambil kalau jawab soal dengan benar. Ternyata murid malah ngejar bintangnya, bukan cuma permennya.
```

**Bagian 3**
```text
Ini game-nya. Coba mainkan dua tiga level dulu, biar kebayang

preview.edugamelabs.com/kertas-tinta/games/potong-tali-clawd/
```

**Bagian 4**
```text
Sekarang caranya. Aku tulis pelan-pelan supaya guru yang belum pernah pakai AI pun bisa ikut.

LANGKAH 1: Salin prompt

Prompt lengkapnya ada di lampiran bawah ini. Tekan lama, salin semua. Lalu ganti bagian dalam [kurung] sesuai kelas kalian. Bagian lain biarkan saja.
```

Lampiran (prompt panjang):
```text
PROMPT GAME POTONG TALI (ala Cut the Rope)
(salin semua, ganti bagian dalam [kurung])


PERAN

Kamu adalah pengembang game edukasi dan desainer UI untuk anak sekolah.


TUJUAN

Buatkan game puzzle fisika dalam SATU file HTML (HTML, CSS, dan JavaScript jadi satu). Game harus bisa langsung dibuka di browser HP dan laptop tanpa instalasi.


DATA KELAS

- Jenjang: [Kelas 2 SD]
- Mata pelajaran: [Matematika]
- Materi: [Penjumlahan dan pengurangan sampai 50]
- Jumlah soal: [30 soal]
- Bahasa: Bahasa Indonesia yang ramah anak


ALUR PERMAINAN

1. Di setiap level ada permen yang digantung dengan 1 sampai 3 tali, dan tokoh maskot lucu yang menunggu di bawah dengan mulut terbuka.

2. Pemain menggeser jari (HP) atau mouse (laptop) untuk memotong tali. Permen berayun dan jatuh mengikuti fisika.

3. Ada 3 bintang di setiap level. Saat permen menyentuh bintang, muncul soal dengan 3 pilihan jawaban. Benar = bintang didapat. Salah = bintang hilang, tampilkan penjelasan singkat jawaban yang benar.

4. Permen masuk ke mulut tokoh = level selesai. Permen jatuh keluar layar = ulang level.

5. Ada 15 level dalam 3 dunia: Kardus, Kebun, dan Langit. Makin lama makin banyak tali, gelembung yang mengangkat permen, dan duri.

6. Akhir level: jumlah bintang, jumlah jawaban benar, tombol "Lanjut" dan "Ulang".


MODE KELAS

- Pilihan level soal: Mudah / Sedang / Sulit.

- Mode kelompok: 2 kelompok bergantian, jumlah bintang tiap kelompok tampil di atas.


TAMPILAN

- Gaya kartun cerah, warna pastel, sudut membulat.

- Soal ditulis besar dan jelas, tombol jawaban besar (minimal 56 px).

- Efek kecil: tali putus dengan bunyi "tes", bintang berkilau, tokoh tersenyum saat makan permen.

- Efek suara sederhana dengan Web Audio API, plus tombol bisu.


SOAL

- Tulis 30 soal sendiri sesuai materi dan jenjang di atas.

- Simpan semua soal dalam satu array di bagian paling atas kode, supaya guru mudah menggantinya.

- Acak urutan soal dan posisi jawaban.


TEKNIS

- Tanpa library dan tanpa gambar dari luar. Fisika tali dibuat sendiri (verlet), semua grafis dengan Canvas.

- Responsif: tampilan potret di HP, tampilan lebar di laptop atau proyektor.

- Simpan bintang tiap level di perangkat (localStorage).


HASIL

Berikan kode lengkap dalam satu file, lalu jelaskan singkat cara mengganti soal.
```

**Bagian 5**
```text
LANGKAH 2: Tempel ke AI. Pilih satu yang paling kalian nyaman.

Kalau pakai CLAUDE:
1. Buka claude.ai, login pakai Gmail
2. Klik New chat
3. Tempel prompt tadi, tekan Enter
4. Tunggu 1 sampai 2 menit. Game muncul di panel sebelah kanan, namanya Artifact
5. Langsung mainkan di situ
6. Mau dibagikan, klik Publish lalu Copy link
```

**Bagian 6**
```text
Kalau pakai GEMINI:
1. Buka gemini.google.com, login pakai Gmail
2. Di kotak chat, klik Tools, pilih Canvas
3. Tempel prompt tadi, tekan Enter
4. Setelah kodenya jadi, klik Preview di kanan atas
5. Game langsung bisa dimainkan
6. Mau dibagikan, klik Share lalu Copy link
```

**Bagian 7**
```text
Kalau pakai CHATGPT:
1. Buka chatgpt.com, login
2. Di kotak chat, klik + lalu pilih Canvas
3. Tempel prompt tadi, tekan Enter
4. Setelah kodenya jadi, klik Preview di kanan atas
5. Game langsung bisa dimainkan
6. Mau dibagikan, klik Share. Atau salin kodenya, simpan jadi file game.html, buka di browser
```

**Bagian 8**
```text
LANGKAH 3: Perbaiki pelan-pelan

Jujur, percobaan pertama hampir selalu ada yang kurang. Aku juga gitu kok.

Nggak usah buka kode. Ketik saja di chat yang sama, kayak ngobrol biasa:
"Talinya susah dipotong di HP, gampangkan"
"Ganti soalnya jadi perkalian 2 sampai 5"
"Level 3 terlalu susah, kurangi talinya"

AI-nya langsung perbaiki.
```

**Bagian 9**
```text
LANGKAH 4: Bawa ke kelas

Kirim link-nya ke grup WhatsApp kelas atau Google Classroom. Murid main di HP masing-masing, nggak perlu download apa-apa.

Kalau murid belum pegang HP, tampilkan di proyektor. Satu anak maju potong tali, teman sekelas bantu jawab soal. Kelasnya jadi ramai, tapi ramai yang belajar.
```

**Bagian 10**
```text
Kalau mau lihat prompt game lain dulu, aku punya galeri prompt yang gratis. Ada contoh game dan aplikasi yang bisa langsung dimainkan dan disalin prompt-nya.

demoprompt.edugamelabs.com/id
```

**Bagian 11**
```text
Kenapa aku sarankan versi Pro?

Karena galeri gratis itu baru sebagian. Di Pro semua template game dan aplikasi terbuka. Ada Prompt Generator, tinggal pilih jenis game, isi mapel dan kelas, prompt panjang kayak tadi langsung jadi. Ada juga panduan sampai bisa jual game sendiri jadi produk digital.

Sekali beli, bisa dipakai untuk semua mapel.

lptoolsid.edugamelabs.com/id/
```

**Bagian 12**
```text
Terakhir, aku punya grup WhatsApp komunitas buat guru yang mau belajar bikin game dan aplikasi sendiri. Gratis, bebas tanya apa saja di sana.

chat.whatsapp.com/I9TMY7nm3CU1afwM34jcDm

Kalau mentok di langkah mana pun, tulis di komentar ya. Aku balas satu-satu.
```

---

## 2026-11-23 22:55 UTC · threads @auzanhasfi · text

```text
Aku dah ketagih bina game sendiri. Kali ni aku buat ala Angry Birds untuk kelas Matematik.

Aku cerita penuh kat bawah.
```

**Bagian 2**
```text
Mula-mula aku buat game ni sebab satu je. Murid aku cepat bosan bila latihan Tambah Tolak.

Jadi aku fikir, kalau soalan tu jadi "syarat" untuk main, mesti diorang sanggup jawab. Dan betul. Sebelum lontar burung, murid kena jawab soalan dulu. Betul, dapat kuasa khas. Salah, lontar biasa je.

Yang buat aku terharu, budak yang selalu senyap pun minta "cikgu, satu lagi".
```

**Bagian 3**
```text
Ni game dia. Ada 5 jenis watak, ada yang laju, ada yang meletup, ada yang berat. Cuba main dulu sekejap

preview.edugamelabs.com/kertas-tinta/games/lastik-clawd/
```

**Bagian 4**
```text
Sekarang cara buat dia. Aku tulis satu-satu supaya cikgu yang tak pernah guna AI pun boleh ikut.

LANGKAH 1: Salin prompt

Prompt penuh aku letak dalam lampiran bawah ni. Tekan lama, salin semua. Lepas tu tukar bahagian dalam [kurungan] ikut kelas korang. Yang lain jangan usik.
```

Lampiran (prompt panjang):
```text
PROMPT GAME LASTIK SOALAN (ala Angry Birds)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game lastik dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan. Boleh guna Matter.js dari cdnjs untuk fizik.


DATA KELAS

- Tahap: [Tahun 2]
- Subjek: [Matematik]
- Topik: [Tambah dan tolak dalam lingkungan 100]
- Bilangan soalan: [30 soalan aneka pilihan, 3 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Di kiri ada lastik, di kanan ada menara kayu dan batu dengan raksasa comel di dalamnya.

2. Ada 5 jenis watak untuk dilontar: biasa, laju, bom, pecah tiga, dan berat. Setiap satu warna dan aksesori berbeza.

3. Sebelum setiap lontaran, muncul satu soalan. Jawapan betul = kuasa khas watak itu aktif (ketuk skrin semasa terbang). Jawapan salah = lontaran biasa tanpa kuasa, dan tunjuk jawapan betul dengan penerangan ringkas.

4. Tarik lastik ke belakang untuk bidik, lepaskan untuk lontar. Tunjuk garis titik arah lontaran.

5. Ada 5 tahap: Tambah, Tolak, Darab, Bahagi, dan Campur. Tahap terakhir ada raja raksasa.

6. Habiskan semua raksasa untuk menang. Dapat 1 hingga 3 bintang ikut baki lontaran.


MOD KELAS

- Mod 2 pemain di satu skrin: bergilir lontar dan jawab, skor setiap pemain di atas.

- Cikgu boleh pilih tahap Mudah atau Mencabar.


PAPARAN

- Gaya kartun ceria, langit cerah, warna lembut.

- Soalan ditulis besar, butang jawapan besar (minimum 56 px).

- Efek kecil: kayu patah, debu, raksasa terkejut bila jatuh (bukan ganas).

- Bunyi ringkas dibuat dengan Web Audio API, ada butang senyap.


SOALAN

- Tulis 30 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan.


TEKNIKAL

- Tanpa gambar dari luar. Semua grafik guna Canvas.

- Responsif: landskap di telefon, skrin penuh di laptop atau projektor.

- Simpan bintang setiap tahap dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 5**
```text
LANGKAH 2: Tampal dalam AI. Pilih satu je yang korang selesa.

Kalau guna CLAUDE:
1. Buka claude.ai, log masuk guna Gmail
2. Tekan New chat
3. Tampal prompt tadi, tekan Enter
4. Tunggu 1 hingga 2 minit. Game akan keluar kat panel sebelah kanan, nama dia Artifact
5. Main terus kat situ
6. Nak kongsi, tekan Publish, lepas tu Copy link
```

**Bagian 6**
```text
Kalau guna GEMINI:
1. Buka gemini.google.com, log masuk guna Gmail
2. Kat kotak chat, tekan Tools, pilih Canvas
3. Tampal prompt tadi, tekan Enter
4. Bila kod dah siap, tekan Preview kat atas kanan
5. Game boleh terus main
6. Nak kongsi, tekan Share, lepas tu Copy link
```

**Bagian 7**
```text
Kalau guna CHATGPT:
1. Buka chatgpt.com, log masuk
2. Kat kotak chat, tekan + dan pilih Canvas
3. Tampal prompt tadi, tekan Enter
4. Bila kod siap, tekan Preview kat atas kanan
5. Game boleh terus main
6. Nak kongsi, tekan Share. Atau salin kod, simpan jadi fail game.html, buka kat browser
```

**Bagian 8**
```text
LANGKAH 3: Baiki sikit-sikit

Jujur, kali pertama selalunya ada je yang tak kena. Aku pun selalu macam tu.

Tak payah buka kod. Taip je dalam chat yang sama, macam tegur kawan:
"Lastik susah nak tarik kat telefon, mudahkan"
"Tukar soalan ke sifir 2 hingga 5"
"Menara terlalu kuat, lemahkan sikit"

AI akan betulkan sendiri.
```

**Bagian 9**
```text
LANGKAH 4: Bawa masuk kelas

Hantar link tadi kat grup WhatsApp kelas atau Google Classroom. Murid main kat telefon masing-masing, tak perlu download apa-apa.

Kalau kelas tak ada telefon, buka kat projektor. Panggil murid seorang-seorang ke depan, satu kelas tolong jawab. Kelas jadi riuh, tapi riuh yang belajar.
```

**Bagian 10**
```text
Kalau nak tengok prompt game lain dulu, aku ada galeri prompt yang percuma. Ada game dan apps yang boleh terus main dan salin prompt dia.

demoprompt.edugamelabs.com
```

**Bagian 11**
```text
Kenapa aku cadangkan versi Pro?

Sebab galeri percuma tu cuma sebahagian. Dalam Pro, semua template game dan apps terbuka. Ada Prompt Generator, korang pilih jenis game, isi subjek dan tahun, prompt terus siap tanpa perlu karang sendiri. Ada juga panduan sampai boleh jual game tu sebagai produk digital.

Sekali beli, guna untuk semua subjek.

lptoolsid.edugamelabs.com/ms/
```

**Bagian 12**
```text
Last sekali, aku ada grup WhatsApp komuniti untuk cikgu yang nak belajar bina game dan apps sendiri. Percuma, boleh tanya apa-apa kat situ.

chat.whatsapp.com/KzZo7lCMKNuIZ79rBMScxX

Kalau tersekat kat mana-mana langkah, komen je kat bawah. Aku balas satu-satu.
```

---

## 2026-11-23 22:55 UTC · threads @auzan_hasfi · text

```text
Cikgu, aku bina game ala Roblox untuk kelas. Murid aku sampai tak nak rehat.

Ni cerita dan caranya.
```

**Bagian 2**
```text
Awalnya aku perasan satu benda. Bila sebut Roblox, mata budak-budak terus bersinar. Bila sebut latihan Matematik, semua mengeluh.

Jadi aku gabungkan. Watak lompat dari pelantar ke pelantar macam obby Roblox. Setiap kali sampai pintu, kena jawab soalan baru pintu terbuka. Jawab salah, kena cari jalan lain.

Sekarang diorang yang ingatkan aku: "cikgu, hari ni main dunia tu tak?"
```

**Bagian 3**
```text
Ni game dia. 3D, ada beberapa dunia, boleh main kat telefon dan laptop

preview.edugamelabs.com/kertas-tinta/games/dunia-clawd/
```

**Bagian 4**
```text
STEP 1: Ambil prompt

Prompt penuh aku letak dalam lampiran. Tekan lama, salin semua.

Cuma tukar bahagian dalam [kurungan]: tahun, subjek dan topik. Prompt ni panjang sebab memang kena lengkap. Lagi lengkap prompt, lagi kurang kena baiki nanti.
```

Lampiran (prompt panjang):
```text
PROMPT GAME DUNIA 3D (ala Roblox obby)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan 3D dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game platform 3D dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Guna Three.js dari cdnjs. Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 4]
- Subjek: [Matematik]
- Topik: [Pecahan setara]
- Bilangan soalan: [30 soalan aneka pilihan, 3 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Ada satu lobi dengan 3 portal ke 3 dunia: Obby (lompat pelantar), Menara (panjat ke atas), dan Pulau (kumpul syiling).

2. Watak comel bergerak guna kayu bedik di skrin (telefon) atau W A S D (laptop), butang Lompat besar.

3. Dalam setiap dunia ada pintu soalan. Soalan muncul di depan pintu dengan 3 pintu jawapan. Masuk pintu betul = terus ke bahagian seterusnya. Pintu salah = jatuh ke laluan bawah yang lebih panjang, dan tunjuk jawapan betul dengan penerangan ringkas.

4. Ada titik simpan (checkpoint). Jatuh dari pelantar = kembali ke titik simpan terakhir.

5. Kumpul syiling untuk beli topi dan warna baju di lobi.

6. Habis satu dunia = dapat lencana. Skrin akhir: masa, jumlah soalan betul, lencana.


MOD KELAS

- Tahap Mudah / Sederhana / Mencabar (jarak pelantar dan masa menjawab).

- Papan markah tempatan untuk 5 masa terpantas.


PAPARAN

- Gaya blok 3D ringkas, warna terang tapi lembut, langit cerah.

- Soalan ditulis besar di atas skrin.

- Butang besar (minimum 56 px) untuk telefon.

- Bunyi ringkas dibuat dengan Web Audio API, ada butang senyap.


SOALAN

- Tulis 30 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan.


TEKNIKAL

- Tanpa model 3D atau gambar dari luar. Semua bentuk dibina dengan geometri Three.js.

- Pastikan lancar di telefon biasa (bayang-bayang ringkas, objek tak terlalu banyak).

- Simpan syiling, lencana dan pakaian dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 5**
```text
STEP 2: Tampal dalam AI

Claude (claude.ai)
New chat, tampal prompt, Enter. Game keluar kat panel kanan, nama dia Artifact. Tekan Publish, lepas tu Copy link.

Gemini (gemini.google.com)
Tekan Tools, pilih Canvas, tampal prompt, Enter. Tekan Preview kat atas kanan, lepas tu Share.

ChatGPT (chatgpt.com)
Tekan +, pilih Canvas, tampal prompt, Enter. Tekan Preview, lepas tu Share.
```

**Bagian 6**
```text
Pengalaman aku: game 3D macam ni agak berat, jadi Claude paling lancar hasilnya.

Kalau baru nak cuba, mula dengan Gemini pun ok. Percuma, log masuk terus guna akaun Gmail sekolah. Nanti dah biasa baru cuba yang lain.
```

**Bagian 7**
```text
STEP 3: Tegur AI macam tegur murid

Game pertama memang jarang terus sempurna. Tak apa. Taip je dalam chat yang sama:
"Watak lompat tak cukup tinggi"
"Kat telefon tersekat-sekat, ringankan"
"Tukar topik ke Perpuluhan"

AI akan betulkan. Kod tak payah buka langsung.
```

**Bagian 8**
```text
STEP 4: Jadikan aktiviti kelas

Aku buat macam ni: hantar link kat grup kelas, bagi masa 15 minit, siapa habis dunia Obby paling cepat dengan jawapan betul paling banyak, dia menang.

Kalau tak ada telefon, buka kat projektor dan main secara kumpulan. Seorang kawal, yang lain tolong jawab.
```

**Bagian 9**
```text
Nak tengok prompt game lain? Galeri prompt aku boleh cuba percuma. Ada contoh game dan apps yang terus boleh main.

demoprompt.edugamelabs.com
```

**Bagian 10**
```text
Kenapa ramai cikgu ambil versi Pro?

Sebab tak perlu karang prompt sendiri lagi. Dalam Pro ada Prompt Generator, pilih jenis game, isi subjek dan tahun, prompt panjang macam tadi terus siap. Semua template game dan apps terbuka, dan ada panduan sampai boleh jual game sendiri sebagai produk digital.

lptoolsid.edugamelabs.com/ms/

Nak link terus? Komen NAK.
```

**Bagian 11**
```text
Satu lagi, kalau nak belajar sama-sama, join grup WhatsApp komuniti kami. Percuma, ramai cikgu kongsi game masing-masing kat situ.

chat.whatsapp.com/KzZo7lCMKNuIZ79rBMScxX

Ada soalan, tanya je kat komen ya.
```

---

## 2026-11-23 22:45 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Most job titles stay at the office. "Cikgu" stays for life.

Kajian McKinsey menyebut: sistem pendidikan tak boleh lebih hebat daripada kualiti gurunya. Malaysia ada lebih 422,000 cikgu yang mendidik hampir 5 juta murid setiap hari.

Itu amanah, dan amanah itu berat. Tapi ada satu benda yang profesion lain tak ada: murid yang dah jadi doktor, jurutera, profesor, tetap panggil kau "cikgu". Dua puluh tahun kemudian pun.

Gaji boleh habis. Jawatan boleh tamat. Tapi nama cikgu hidup dalam ingatan murid sampai bila-bila.

Terima kasih kepada semua cikgu.

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 22:45 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Satu-satunya gelaran yang tak hilang walaupun dah bersara: CIKGU 🍎

Murid dah jadi doktor, profesor, tetap panggil "cikgu". 20 tahun kemudian di pasar raya: "Cikgu! Ingat saya lagi tak?"

Gaji boleh habis, jawatan boleh tamat. Nama cikgu kekal dalam ingatan murid.

Tag cikgu yang korang tak pernah lupa 💛

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 22:45 UTC · pinterest @whitespace92 · video · Gelaran seumur hidup: kenapa cikgu tetap dipanggil cikgu

Media: 1 file (video)

```text
Bos dan pengarah, gelarannya tinggal di pejabat. Cikgu lain: murid yang dah jadi doktor dan profesor tetap panggil "cikgu", 20 tahun kemudian pun. Video animasi isometrik BM tentang beratnya amanah cikgu dan kenapa nama cikgu hidup dalam ingatan murid sampai bila-bila. Nak buat video macam ni? Lawati link.

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 22:44 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Ada satu gelaran yang tak hilang walaupun kau dah bersara: CIKGU 🍎

Di pejabat orang panggil kau bos, encik pengurus, tuan pengarah. Keluar pejabat, gelaran itu tinggal di atas meja.

Cikgu lain.
Murid kau dah jadi doktor, tetap panggil kau cikgu.
Dah jadi profesor, pun tetap panggil kau cikgu.

20 tahun kemudian di pasar raya: "Cikgu! Ingat saya lagi tak?"
Kau dah lupa nama dia. Tapi dia tak pernah lupa kau.

Gaji boleh habis. Jawatan boleh tamat. Tapi nama cikgu hidup dalam ingatan murid sampai bila-bila.

Tag cikgu yang korang tak pernah lupa 💛

Nak buat video macam ni? Komen TOOLS.
Nak mentoring terus dengan saya? Link di bio.

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-23 12:48 UTC · threads @auzan_hasfi · text

```text
Murid lelaki dalam kelas aku memang susah nak fokus waktu Matematik. Tapi bab bola sepak, semua jadi pakar.

Jadi aku cuba satu benda. Aku bina game bola sepak macam PES, dan setiap kali ada peluang gol, kena jawab soalan dulu. Betul, dapat tendangan super.

Hasilnya, budak yang paling senyap pun angkat tangan. Ni cara aku buat.
```

**Bagian 2**
```text
Cuba main dulu game dia. Pemain stickman, 11 lawan 11, siap ada adu penalti

preview.edugamelabs.com/kertas-tinta/games/liga-stik-pro/
```

**Bagian 3**
```text
STEP 1: Ambil prompt

Prompt penuh ada dalam lampiran. Tekan lama, salin semua.

Yang perlu korang ubah cuma dalam [kurungan]: tahun, subjek dan topik. Selebihnya biar je, prompt tu dah lengkap.
```

Lampiran (prompt panjang):
```text
PROMPT GAME BOLA SEPAK SOALAN (ala PES)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game bola sepak dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 6]
- Subjek: [Matematik]
- Topik: [Peratus]
- Bilangan soalan: [30 soalan aneka pilihan, 4 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Padang dilihat dari atas, kamera ikut bola. Dua pasukan 11 pemain stickman berwarna, formasi 4-3-3.

2. Pemain kawal satu pemain yang paling dekat dengan bola: gerak guna kayu bedik di skrin (telefon) atau anak panah (laptop), butang Hantar dan Tendang.

3. Setiap 45 saat, atau bila pemain masuk kotak penalti, muncul "Soal Momen". Jawapan betul = bar Semangat penuh dan dapat satu Tendangan Super (hampir pasti gol). Jawapan salah = tunjuk jawapan betul dengan penerangan ringkas.

4. Pilih pasukan dari 6 kelab rekaan dengan warna jersi berbeza.

5. Perlawanan 2 x 3 minit. Kalau seri, adu penalti 5 sepakan, setiap sepakan perlu jawab satu soalan dulu.

6. Skrin akhir: keputusan, penjaring, jumlah soalan betul, butang "Main semula".


MOD KELAS

- Mod 2 pemain di satu skrin (projektor): pasukan kiri lawan pasukan kanan, bergilir menjawab Soal Momen.

- Tahap lawan komputer: Mudah / Sederhana / Sukar.


PAPARAN

- Gaya siaran TV ringkas: papan skor di atas, jam perlawanan, nama pasukan.

- Butang besar supaya senang ditekan di telefon.

- Efek kecil: jaring bergoyang bila gol, sorakan penonton, replay ringkas gol.

- Bunyi ringkas dibuat dengan Web Audio API (tanpa fail luar), ada butang senyap.


SOALAN

- Tulis 30 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan.


TEKNIKAL

- Tanpa library dan tanpa gambar dari luar. Semua grafik guna Canvas.

- Responsif: landskap di telefon, skrin penuh di laptop atau projektor.

- Simpan rekod menang dan kalah dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 4**
```text
STEP 2: Tampal dalam AI yang korang guna

Claude (claude.ai)
New chat, tampal prompt, Enter. Game keluar kat panel kanan (Artifact). Tekan Publish, Copy link.

Gemini (gemini.google.com)
Tekan Tools, pilih Canvas, tampal prompt, Enter. Tekan Preview, lepas tu Share.

ChatGPT (chatgpt.com)
Tekan +, pilih Canvas, tampal prompt, Enter. Tekan Preview, lepas tu Share.
```

**Bagian 5**
```text
Pengalaman aku sendiri: game bola ni agak berat, jadi Claude paling lancar hasilnya.

Kalau baru nak cuba-cuba, Gemini pun ok. Percuma, log masuk terus guna akaun Gmail sekolah.
```

**Bagian 6**
```text
STEP 3: Tegur je AI tu macam tegur murid

Ada yang tak kena? Taip dalam chat yang sama:
"Pemain lawan terlalu laju, perlahankan"
"Soalan tukar ke topik Wang"
"Butang tendang besarkan sikit"

AI akan betulkan. Kod tak payah buka langsung.
```

**Bagian 7**
```text
STEP 4: Jadikan perlawanan kelas

Buka kat projektor, bahagi kelas jadi dua pasukan. Setiap Soal Momen, kumpulan bincang dulu sebelum jawab.

Aku buat waktu PdP terakhir hari Jumaat. Tak ada siapa nak balik awal.
```

**Bagian 8**
```text
Nak tengok prompt game lain? Galeri prompt aku boleh cuba percuma, ada contoh game dan apps yang terus boleh main.

demoprompt.edugamelabs.com
```

**Bagian 9**
```text
Tapi kalau tanya aku, versi Pro yang paling berbaloi.

Semua template game dan apps terbuka. Ada Prompt Generator, pilih jenis game, isi subjek dan tahun, prompt terus siap. Ada juga panduan sampai korang boleh jual game sendiri sebagai produk digital.

lptoolsid.edugamelabs.com/ms/
```

**Bagian 10**
```text
Nak link Pro terus? Komen NAK, nanti aku balas.

Kalau tersekat kat mana-mana step pun, tanya je kat komen.
```

---

## 2026-11-23 12:48 UTC · threads @auzanhasfi · text

```text
Aku ni cikgu yang dah tak boleh berhenti bina game sendiri untuk murid. Serius.

Minggu ni aku buat game ala Clash Royale. Murid letak kad, serang menara lawan, tapi eliksir dia tak datang sendiri. Kena jawab soalan Matematik dulu baru dapat.

Budak-budak aku sampai berebut nak giliran. Aku kongsi cara buat dia satu-satu kat bawah ni.
```

**Bagian 2**
```text
Ni game dia. Cuba main sekejap, baru faham kenapa murid aku tak nak berhenti

preview.edugamelabs.com/kertas-tinta/games/mahkota-clawd/
```

**Bagian 3**
```text
LANGKAH 1: Salin prompt

Aku letak prompt penuh dalam lampiran bawah ni. Tekan lama, salin semua.

Lepas tu tukar je bahagian dalam [kurungan]. Contohnya [Tahun 5] tukar jadi tahun kelas korang, [Pecahan] tukar jadi topik minggu ni.
```

Lampiran (prompt panjang):
```text
PROMPT GAME ARENA KAD (ala Clash Royale)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game arena kad dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 5]
- Subjek: [Matematik]
- Topik: [Pecahan]
- Bilangan soalan: [25 soalan aneka pilihan, 4 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Arena menegak: 2 lorong, sungai di tengah, 2 jambatan. Setiap pihak ada 2 menara kecil dan 1 menara raja.

2. Pemain ada 4 kad di tangan (contoh: Pahlawan, Pemanah, Raksasa, Bola Api). Seret kad ke arena untuk keluarkan askar.

3. Setiap kad perlukan eliksir. Eliksir TIDAK naik sendiri. Di atas kad ada panel soalan: jawapan betul = +2 eliksir, 3 betul berturut-turut = +3. Jawapan salah = panel dikunci 3 saat dan tunjuk jawapan betul.

4. Lawan dikawal komputer dengan 2 tahap: Santai dan Tangguh.

5. Masa perlawanan 3 minit. Minit terakhir, eliksir dari soalan jadi dua kali ganda.

6. Siapa musnahkan menara raja dulu, menang. Kalau masa tamat, kira menara yang tinggal. Skrin akhir: mahkota, skor, jumlah soalan betul, butang "Main semula".


MOD KELAS

- Mod 2 pemain di satu skrin (projektor): dua kumpulan bergilir menjawab.

- Cikgu boleh pilih masa perlawanan: 2, 3 atau 5 minit.


PAPARAN

- Gaya kartun ceria, watak comel, warna terang tapi lembut.

- Butang dan kad besar supaya senang ditekan di telefon.

- Efek kecil: kad jatuh berdebu, menara bergegar bila kena serang, mahkota terbang bila menang.

- Bunyi ringkas dibuat dengan Web Audio API (tanpa fail luar), ada butang senyap.


SOALAN

- Tulis 25 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan.


TEKNIKAL

- Tanpa library dan tanpa gambar dari luar. Semua grafik guna Canvas, CSS atau SVG.

- Responsif: potret di telefon, landskap di laptop atau projektor.

- Simpan trofi dan skor tertinggi dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 4**
```text
LANGKAH 2: Tampal dalam AI. Pilih satu je yang korang biasa guna.

Kalau CLAUDE:
1. Buka claude.ai, log masuk guna Gmail
2. Tekan New chat
3. Tampal prompt, tekan Enter
4. Tunggu sekejap, game keluar kat panel sebelah kanan (nama dia Artifact)
5. Main terus kat situ
6. Nak kongsi, tekan Publish, lepas tu Copy link
```

**Bagian 5**
```text
Kalau GEMINI:
1. Buka gemini.google.com, log masuk guna Gmail
2. Kat kotak chat, tekan Tools, pilih Canvas
3. Tampal prompt, tekan Enter
4. Bila kod siap, tekan Preview kat atas kanan
5. Game boleh terus main
6. Nak kongsi, tekan Share, lepas tu Copy link
```

**Bagian 6**
```text
Kalau CHATGPT:
1. Buka chatgpt.com, log masuk
2. Kat kotak chat, tekan + dan pilih Canvas
3. Tampal prompt, tekan Enter
4. Bila kod siap, tekan Preview kat atas kanan
5. Game boleh terus main
6. Nak kongsi, tekan Share. Atau salin kod, simpan jadi fail game.html, buka kat browser
```

**Bagian 7**
```text
LANGKAH 3: Baiki sikit-sikit

Jujur, kali pertama selalunya ada je yang tak kena. Aku pun macam tu.

Tak payah sentuh kod. Taip je dalam chat yang sama, contohnya:
"Lawan terlalu kuat, lemahkan sikit"
"Tukar soalan ke topik Perpuluhan"
"Kad terlalu kecil kat telefon, besarkan"

AI akan baiki sendiri.
```

**Bagian 8**
```text
LANGKAH 4: Bawa masuk kelas

Hantar link kat grup WhatsApp kelas atau Google Classroom. Murid main kat telefon masing-masing.

Atau buka kat projektor, bahagi kelas jadi dua kumpulan, lawan guna Mod 2 Pemain. Kelas aku jadi riuh, tapi riuh yang belajar.
```

**Bagian 9**
```text
Kalau nak tengok prompt game lain dulu, aku ada galeri prompt yang percuma. Ada game dan apps yang boleh terus main.

demoprompt.edugamelabs.com
```

**Bagian 10**
```text
Tapi kalau korang memang nak serius bina game untuk kelas, aku cadangkan terus ambil versi Pro. Lagi berbaloi.

Dalam Pro ada semua template game dan apps, Prompt Generator (isi subjek, tahun dan topik, prompt terus siap), dan panduan sampai boleh jual game tu sebagai produk digital.

lptoolsid.edugamelabs.com/ms/
```

**Bagian 11**
```text
Itu je dari aku. Kalau tersekat kat mana-mana langkah, tulis kat komen. Aku baca semua dan balas satu-satu.
```

---

## 2026-11-23 12:48 UTC · threads @edugamelabs.id · text

```text
Aku tuh guru yang sekarang malah ketagihan bikin game sendiri buat murid. Beneran.

Kali ini aku bikin game bola hamster. Tokohnya ada di dalam bola bening, menggelinding di lintasan, dan setiap ketemu gerbang ada 3 pintu jawaban. Salah pilih, bolanya mental balik.

Murid-murid sampai teriak-teriak sendiri pas mainnya. Caranya aku tulis lengkap di bawah ini.
```

**Bagian 2**
```text
Ini game-nya. Coba mainkan sebentar, biar kebayang

preview.edugamelabs.com/kertas-tinta/games/bola-hamster-clawd/
```

**Bagian 3**
```text
LANGKAH 1: Salin prompt

Prompt lengkapnya ada di lampiran bawah ini. Tekan lama, salin semua.

Terus ganti bagian dalam [kurung] saja. Misalnya [Kelas 3 SD] diganti kelas kalian, [Penjumlahan dan pengurangan] diganti materi minggu ini.
```

Lampiran (prompt panjang):
```text
PROMPT GAME BOLA HAMSTER (ala Hamsterball)
(salin semua, ganti bagian dalam [kurung])


PERAN

Kamu adalah pengembang game edukasi dan desainer UI untuk anak sekolah.


TUJUAN

Buatkan game bola menggelinding dalam SATU file HTML (HTML, CSS, dan JavaScript jadi satu). Game harus bisa langsung dibuka di browser HP dan laptop tanpa instalasi.


DATA KELAS

- Jenjang: [Kelas 3 SD]
- Mata pelajaran: [Matematika]
- Materi: [Penjumlahan dan pengurangan]
- Jumlah soal: [24 soal]
- Bahasa: Bahasa Indonesia yang ramah anak


ALUR PERMAINAN

1. Tokoh maskot lucu ada di dalam bola bening. Pemain menggelindingkan bola dengan memiringkan HP, geser layar, atau tombol panah di laptop.

2. Ada 4 lintasan bertema: Taman, Jembatan Es, Pabrik Roda Gigi, Menara Awan. Makin lama makin sulit (tikungan, lantai bergerak, jurang).

3. Di setiap gerbang ada soal besar di atas dan 3 pintu berisi 3 pilihan jawaban. Masuk pintu yang benar = lanjut dan dapat bintang. Pintu salah = bola memantul balik, pintu itu tertutup, tampilkan penjelasan singkat jawaban yang benar.

4. Ada biji/koin di sepanjang jalan dan titik simpan (checkpoint).

5. Pemain punya 5 nyawa. Jatuh ke jurang = kurang 1 nyawa, mulai lagi dari titik simpan.

6. Akhir lintasan: 1 sampai 3 bintang, waktu tempuh, jumlah jawaban benar, tombol "Lanjut" dan "Main lagi".


MODE KELAS

- Pilihan level: Mudah / Sedang / Menantang.

- Mode lomba waktu: siapa paling cepat selesai dengan jawaban benar terbanyak.


TAMPILAN

- Gaya kartun cerah, warna pastel, sudut membulat.

- Soal ditulis besar dan jelas.

- Tombol besar (minimal 56 px) supaya mudah ditekan di HP.

- Efek kecil: bola berkilau, bintang beterbangan saat benar, pintu bergetar saat salah.

- Efek suara sederhana dengan Web Audio API (tanpa file luar), plus tombol bisu.


SOAL

- Tulis 24 soal sendiri sesuai materi dan jenjang di atas.

- Simpan semua soal dalam satu array di bagian paling atas kode, supaya guru mudah menggantinya.

- Acak urutan soal dan posisi jawaban di setiap gerbang.


TEKNIS

- Tanpa library dan tanpa gambar dari luar. Semua grafis dibuat dengan Canvas, CSS, atau SVG.

- Responsif: tampilan potret di HP, tampilan lebar di laptop atau proyektor.

- Simpan bintang dan rekor waktu di perangkat (localStorage).


HASIL

Berikan kode lengkap dalam satu file, lalu jelaskan singkat cara mengganti soal.
```

**Bagian 4**
```text
LANGKAH 2: Tempel ke AI. Pilih satu yang biasa kalian pakai.

Kalau CLAUDE:
1. Buka claude.ai, login pakai Gmail
2. Klik New chat
3. Tempel prompt, tekan Enter
4. Tunggu sebentar, game muncul di panel sebelah kanan (namanya Artifact)
5. Langsung mainkan di situ
6. Mau dibagikan, klik Publish lalu Copy link
```

**Bagian 5**
```text
Kalau GEMINI:
1. Buka gemini.google.com, login pakai Gmail
2. Di kotak chat, klik Tools, pilih Canvas
3. Tempel prompt, tekan Enter
4. Setelah kodenya jadi, klik Preview di kanan atas
5. Game langsung bisa dimainkan
6. Mau dibagikan, klik Share lalu Copy link
```

**Bagian 6**
```text
Kalau CHATGPT:
1. Buka chatgpt.com, login
2. Di kotak chat, klik + lalu pilih Canvas
3. Tempel prompt, tekan Enter
4. Setelah kodenya jadi, klik Preview di kanan atas
5. Game langsung bisa dimainkan
6. Mau dibagikan, klik Share. Atau salin kodenya, simpan jadi file game.html, buka di browser
```

**Bagian 7**
```text
LANGKAH 3: Perbaiki pelan-pelan

Jujur, percobaan pertama hampir selalu ada yang kurang. Aku juga gitu kok.

Nggak usah buka kode. Ketik saja di chat yang sama, misalnya:
"Bolanya terlalu licin, kurangi kecepatannya"
"Ganti soalnya jadi materi Perkalian"
"Tombolnya kekecilan di HP, perbesar"

AI-nya langsung perbaiki.
```

**Bagian 8**
```text
LANGKAH 4: Bawa ke kelas

Kirim link-nya ke grup WhatsApp kelas atau Google Classroom. Murid main di HP masing-masing.

Bisa juga ditampilkan di proyektor, terus adu cepat antar kelompok pakai mode lomba waktu. Kelasnya jadi ramai, tapi ramai yang belajar.
```

**Bagian 9**
```text
Kalau mau lihat prompt game lain dulu, aku punya galeri prompt yang gratis. Ada contoh game dan aplikasi yang bisa langsung dimainkan.

demoprompt.edugamelabs.com/id
```

**Bagian 10**
```text
Tapi kalau kalian memang serius mau rutin bikin game buat kelas, aku sarankan langsung ambil versi Pro. Jauh lebih worth it.

Di Pro semua template game dan aplikasi terbuka, ada Prompt Generator (isi mapel, kelas, materi, prompt langsung jadi), dan panduan sampai bisa jual game sendiri jadi produk digital.

lptoolsid.edugamelabs.com/id/
```

**Bagian 11**
```text
Segitu dulu dari aku. Kalau mentok di langkah mana pun, tulis di komentar ya. Aku baca semua dan balas satu-satu.
```

---

## 2026-11-22 21:40 UTC · threads @auzan_hasfi · text

```text
Cikgu, jangan suruh AI "buatkan game" je. Memang hasilnya hambar 😅

Aku dah cuba banyak kali. Rupanya rahsia dia kat prompt. Bila prompt tu lengkap, AI boleh bina game macam Plants vs Zombies, siap dengan soalan Matematik untuk kelas 🌻

Ni cara aku buat, satu-satu, dari kosong sampai murid main 👇
```

**Bagian 2**
```text
Ni hasil dia. Murid kena jawab soalan dulu baru dapat "matahari" untuk tanam pokok 🎮

preview.edugamelabs.com/kertas-tinta/games/clawd-vs-zombi/
```

**Bagian 3**
```text
STEP 1: Ambil prompt

Prompt penuh aku letak dalam lampiran bawah ni. Tekan lama → Salin semua.

Yang korang perlu tukar cuma bahagian dalam [kurungan]: tahun, subjek, topik. Contoh [Tahun 4] → [Tahun 5], [Darab dan bahagi] → [Wang] 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME PERTAHANAN TAMAN (ala Plants vs Zombies)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game pertahanan taman dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 4]
- Subjek: [Matematik]
- Topik: [Darab dan bahagi]
- Bilangan soalan: [20 soalan aneka pilihan, 4 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Papan permainan 5 lorong x 9 petak. Raksasa comel bergerak perlahan dari kanan ke kiri.

2. Murid tanam pokok pertahanan di petak untuk menghalang raksasa.

3. Untuk tanam pokok, murid perlukan "matahari". Setiap 10 saat muncul kotak soalan: jawapan betul = +50 matahari. Jawapan salah = tunjuk jawapan betul dengan penerangan ringkas.

4. Ada 4 jenis pokok: penembak (100 matahari), dinding (50), penembak berganda (200), bom (150).

5. Ada 5 gelombang raksasa, makin lama makin laju. Gelombang terakhir ada raksasa besar.

6. Kalau raksasa sampai ke hujung kiri, permainan tamat. Skrin akhir: skor, jumlah soalan betul, butang "Main semula".


MOD KELAS

- Pilihan tahap: Mudah / Sederhana / Sukar (laju raksasa dan masa menjawab).

- Mod 2 pemain: bergilir menjawab, skor setiap pemain di bahagian atas.


PAPARAN

- Gaya kartun ceria, warna lembut, bucu bulat.

- Butang besar (minimum 56 px) supaya senang ditekan di telefon.

- Animasi kecil: pokok bergoyang, peluru terbang, raksasa jatuh secara comel (bukan ganas).

- Bunyi ringkas dibuat dengan Web Audio API (tanpa fail luar), ada butang senyap.


SOALAN

- Tulis 20 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan setiap kali main.


TEKNIKAL

- Tanpa library dan tanpa gambar dari luar. Semua grafik guna CSS, SVG atau Canvas.

- Responsif: potret di telefon, landskap di laptop atau projektor.

- Simpan skor tertinggi dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 4**
```text
STEP 2: Pilih AI yang korang selesa

🟠 Claude (claude.ai)
New chat → tampal prompt → Enter → game muncul kat panel kanan (Artifact) → tekan Publish → Copy link

🔵 Gemini (gemini.google.com)
Tools → Canvas → tampal prompt → Enter → tekan Preview → Share → Copy link

🟢 ChatGPT (chatgpt.com)
+ → Canvas → tampal prompt → Enter → tekan Preview → Share
```

**Bagian 5**
```text
Tips aku: kalau baru nak mula, guna Gemini dulu sebab percuma dan log masuk terus guna Gmail sekolah.

Kalau nak game yang lebih cantik dan lancar, Claude paling power untuk bina game 🔥
```

**Bagian 6**
```text
STEP 3: Baiki guna ayat biasa

Game pertama jarang terus sempurna. Tak apa. Taip je dalam chat sama:

"Raksasa terlalu laju, perlahankan"
"Soalan tukar ke topik Pecahan"
"Tambah skrin pemenang yang lebih meriah"

Tak perlu buka kod langsung.
```

**Bagian 7**
```text
STEP 4: Bawa masuk kelas

Kongsi link kat grup kelas atau Google Classroom. Murid main kat telefon sendiri.

Atau buka kat projektor, buat Mod 2 Pemain, lawan antara kumpulan. Kelas terus hidup 😂
```

**Bagian 8**
```text
Nak cuba prompt lain dulu? Galeri prompt PERCUMA ada kat sini, ada game dan apps siap boleh main 👇

demoprompt.edugamelabs.com
```

**Bagian 9**
```text
Tapi yang paling berbaloi tetap versi Pro 😁

✅ Semua template game & apps
✅ Prompt Generator: pilih jenis game, isi subjek & tahun, prompt siap
✅ Panduan sampai boleh jual game sebagai produk digital

lptoolsid.edugamelabs.com/ms/
```

**Bagian 10**
```text
Nak link Pro terus? Komen NAK, aku balas 🙌

Ada yang tersekat kat mana-mana step, tanya je kat komen ya 😊
```

---

## 2026-11-22 21:40 UTC · threads @auzanhasfi · text

```text
Aku ni cikgu yang ketagih bina game pendidikan sendiri sejak jumpa cara ni 😭

Kali ni aku buat game ala-ala Plants vs Zombies, tapi nak dapat "matahari" untuk tanam pokok, murid kena jawab soalan Matematik dulu 🌻

Tak perlu pandai coding. Aku kongsi step by step penuh kat bawah, dari salin prompt sampai murid boleh main 👇
```

**Bagian 2**
```text
macam ni gamenya, cuba main dulu 🎮

preview.edugamelabs.com/kertas-tinta/games/clawd-vs-zombi/
```

**Bagian 3**
```text
LANGKAH 1: Salin prompt dulu

Buka lampiran kat bawah ni → tekan lama → Salin semua.

Lepas tu tukar bahagian dalam [kurungan] ikut kelas korang. Contoh: [Tahun 4] jadi [Tahun 6], [Darab dan bahagi] jadi [Pecahan] 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME PERTAHANAN TAMAN (ala Plants vs Zombies)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game pertahanan taman dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 4]
- Subjek: [Matematik]
- Topik: [Darab dan bahagi]
- Bilangan soalan: [20 soalan aneka pilihan, 4 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Papan permainan 5 lorong x 9 petak. Raksasa comel bergerak perlahan dari kanan ke kiri.

2. Murid tanam pokok pertahanan di petak untuk menghalang raksasa.

3. Untuk tanam pokok, murid perlukan "matahari". Setiap 10 saat muncul kotak soalan: jawapan betul = +50 matahari. Jawapan salah = tunjuk jawapan betul dengan penerangan ringkas.

4. Ada 4 jenis pokok: penembak (100 matahari), dinding (50), penembak berganda (200), bom (150).

5. Ada 5 gelombang raksasa, makin lama makin laju. Gelombang terakhir ada raksasa besar.

6. Kalau raksasa sampai ke hujung kiri, permainan tamat. Skrin akhir: skor, jumlah soalan betul, butang "Main semula".


MOD KELAS

- Pilihan tahap: Mudah / Sederhana / Sukar (laju raksasa dan masa menjawab).

- Mod 2 pemain: bergilir menjawab, skor setiap pemain di bahagian atas.


PAPARAN

- Gaya kartun ceria, warna lembut, bucu bulat.

- Butang besar (minimum 56 px) supaya senang ditekan di telefon.

- Animasi kecil: pokok bergoyang, peluru terbang, raksasa jatuh secara comel (bukan ganas).

- Bunyi ringkas dibuat dengan Web Audio API (tanpa fail luar), ada butang senyap.


SOALAN

- Tulis 20 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan setiap kali main.


TEKNIKAL

- Tanpa library dan tanpa gambar dari luar. Semua grafik guna CSS, SVG atau Canvas.

- Responsif: potret di telefon, landskap di laptop atau projektor.

- Simpan skor tertinggi dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 4**
```text
LANGKAH 2 (pilih satu AI). Kalau guna CLAUDE:

1. Buka claude.ai, log masuk guna Gmail
2. Tekan "New chat"
3. Tampal prompt tadi, tekan Enter
4. Tunggu 1–2 minit. Game keluar kat panel sebelah kanan (itu namanya Artifact)
5. Terus main kat panel tu
6. Nak kongsi: tekan "Publish" kat atas kanan → "Copy link"
```

**Bagian 5**
```text
Kalau guna GEMINI:

1. Buka gemini.google.com, log masuk guna Gmail
2. Kat kotak chat, tekan "Tools" → pilih "Canvas"
3. Tampal prompt tadi, tekan Enter
4. Bila kod dah siap, tekan butang "Preview" kat atas kanan Canvas
5. Game terus boleh main
6. Nak kongsi: tekan "Share" → "Copy link"
```

**Bagian 6**
```text
Kalau guna CHATGPT:

1. Buka chatgpt.com, log masuk
2. Kat kotak chat, tekan "+" → pilih "Canvas"
3. Tampal prompt tadi, tekan Enter
4. Bila kod siap, tekan "Preview" kat atas kanan Canvas
5. Game terus boleh main
6. Nak kongsi: tekan "Share", atau salin kod → simpan jadi fail game.html → buka kat browser
```

**Bagian 7**
```text
LANGKAH 3: Uji & baiki

Main sendiri 2 kali dulu. Ada yang tak kena? Tak payah sentuh kod, taip je dalam chat yang sama:

"Butang terlalu kecil, besarkan"
"Tambah 10 soalan lagi"
"Tukar warna ikut warna sekolah"
"Game tak jalan, tolong baiki"

AI akan update game tu terus.
```

**Bagian 8**
```text
LANGKAH 4: Kongsi dengan murid

Hantar link tadi kat grup WhatsApp kelas atau Google Classroom.

Murid terus main kat telefon, tak perlu download apa-apa 📱
```

**Bagian 9**
```text
nak lagi banyak prompt game macam ni? ada galeri prompt PERCUMA, boleh terus cuba 👇

demoprompt.edugamelabs.com
```

**Bagian 10**
```text
tapi kalau nak lagi berbaloi, ambil yang Pro 😁

🎮 Semua template game & apps terbuka
🤖 Prompt Generator: isi subjek, tahun, topik, prompt terus jadi
📚 Step by step dari bina sampai boleh jual sebagai produk digital
✨ Tak perlu pandai coding

lptoolsid.edugamelabs.com/ms/
```

**Bagian 11**
```text
jom bina game sendiri, guna dalam kelas, lepas tu boleh tambah pendapatan sekali 🙌

tersekat kat langkah mana? komen je kat bawah, aku balas satu-satu 😊
```

---

## 2026-11-22 21:40 UTC · threads @edugamelabs.id · text

```text
Aku tuh guru yang jadi ketagihan bikin game edukasi sendiri sejak nemu cara ini 😭

Kali ini aku bikin game lari ala-ala Temple Run. Tokohnya dikejar monster, dan di setiap gerbang murid harus pilih jalur dengan jawaban Matematika yang benar 🏃‍♂️

Nggak perlu bisa coding. Aku bagikan step by step lengkap di bawah, dari salin prompt sampai murid bisa main 👇
```

**Bagian 2**
```text
kayak gini game-nya, coba mainkan dulu 🎮

preview.edugamelabs.com/kertas-tinta/games/lari-clawd/
```

**Bagian 3**
```text
LANGKAH 1: Salin prompt dulu

Buka lampiran di bawah ini → tekan lama → Salin semua.

Lalu ganti bagian dalam [kurung] sesuai kelas kalian. Contoh: [Kelas 4 SD] jadi [Kelas 6 SD], [Perkalian dan pembagian] jadi [Pecahan] 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME LARI JAWAB SOAL (ala Temple Run)
(salin semua, ganti bagian dalam [kurung])


PERAN

Kamu adalah pengembang game edukasi dan desainer UI untuk anak sekolah.


TUJUAN

Buatkan game lari tanpa henti dalam SATU file HTML (HTML, CSS, dan JavaScript jadi satu). Game harus bisa langsung dibuka di browser HP dan laptop tanpa instalasi.


DATA KELAS

- Jenjang: [Kelas 4 SD]
- Mata pelajaran: [Matematika]
- Materi: [Perkalian dan pembagian]
- Jumlah soal: [20 soal]
- Bahasa: Bahasa Indonesia yang ramah anak


ALUR PERMAINAN

1. Layar pembuka: judul game, tokoh maskot lucu, tombol "Mulai".

2. Tokoh berlari otomatis di jalan 3 jalur, dikejar monster lucu dari belakang.

3. Pemain pindah jalur dengan geser layar (HP) atau tombol panah (laptop), lompat untuk menghindari rintangan.

4. Setiap beberapa detik muncul gerbang soal: soal tampil di atas, 3 jalur berisi 3 pilihan jawaban. Pemain harus masuk ke jalur jawaban yang benar.

5. Jawaban benar: tokoh makin cepat, dapat 10 poin dan koin. Jawaban salah: monster makin dekat, tampilkan penjelasan singkat jawaban yang benar.

6. Kalau salah 3 kali, monster menangkap tokoh dan permainan selesai. Layar akhir: skor, jumlah jawaban benar, jarak tempuh, tombol "Main lagi".


MODE KELAS

- Pilihan level: Mudah / Sedang / Sulit (kecepatan lari dan waktu berpikir).

- Mode 2 pemain bergantian, skor tiap pemain tampil di atas.


TAMPILAN

- Gaya kartun cerah, warna lembut, sudut membulat.

- Soal ditulis besar dan jelas di bagian atas layar.

- Tombol besar (minimal 56 px) supaya mudah ditekan di HP.

- Animasi kecil: koin berkilau, tokoh melompat, monster lucu (tidak menyeramkan).

- Efek suara sederhana dengan Web Audio API (tanpa file luar), plus tombol bisu.


SOAL

- Tulis 20 soal sendiri sesuai materi dan jenjang di atas.

- Simpan semua soal dalam satu array di bagian paling atas kode, supaya guru mudah menggantinya.

- Acak urutan soal dan posisi jawaban di setiap gerbang.


TEKNIS

- Tanpa library dan tanpa gambar dari luar. Semua grafis dibuat dengan CSS, SVG, atau Canvas.

- Responsif: tampilan potret di HP, tampilan lebar di laptop atau proyektor.

- Simpan skor tertinggi di perangkat (localStorage).


HASIL

Berikan kode lengkap dalam satu file, lalu jelaskan singkat cara mengganti soal.
```

**Bagian 4**
```text
LANGKAH 2 (pilih salah satu AI). Kalau pakai CLAUDE:

1. Buka claude.ai, login pakai Gmail
2. Klik "New chat"
3. Tempel prompt tadi, tekan Enter
4. Tunggu 1–2 menit. Game muncul di panel sebelah kanan (namanya Artifact)
5. Langsung mainkan di panel itu
6. Mau dibagikan: klik "Publish" di kanan atas → "Copy link"
```

**Bagian 5**
```text
Kalau pakai GEMINI:

1. Buka gemini.google.com, login pakai Gmail
2. Di kotak chat, klik "Tools" → pilih "Canvas"
3. Tempel prompt tadi, tekan Enter
4. Setelah kodenya jadi, klik tombol "Preview" di kanan atas Canvas
5. Game langsung bisa dimainkan
6. Mau dibagikan: klik "Share" → "Copy link"
```

**Bagian 6**
```text
Kalau pakai CHATGPT:

1. Buka chatgpt.com, login
2. Di kotak chat, klik "+" → pilih "Canvas"
3. Tempel prompt tadi, tekan Enter
4. Setelah kodenya jadi, klik "Preview" di kanan atas Canvas
5. Game langsung bisa dimainkan
6. Mau dibagikan: klik "Share", atau salin kodenya → simpan jadi file game.html → buka di browser
```

**Bagian 7**
```text
LANGKAH 3: Uji & perbaiki

Mainkan sendiri 2 kali dulu. Ada yang kurang? Nggak usah sentuh kode, ketik saja di chat yang sama:

"Tombolnya kekecilan, perbesar"
"Tambah 10 soal lagi"
"Ganti warnanya jadi warna sekolah"
"Game-nya nggak jalan, tolong perbaiki"

AI langsung update game-nya.
```

**Bagian 8**
```text
LANGKAH 4: Bagikan ke murid

Kirim link tadi ke grup WhatsApp kelas atau Google Classroom.

Murid langsung main di HP, nggak perlu download apa-apa 📱
```

**Bagian 9**
```text
mau lebih banyak prompt game kayak gini? ada galeri prompt GRATIS, bisa langsung dicoba 👇

demoprompt.edugamelabs.com/id
```

**Bagian 10**
```text
tapi kalau mau lebih worth it, ambil yang Pro 😁

🎮 Semua template game & app terbuka
🤖 Prompt Generator: isi mapel, kelas, materi, prompt langsung jadi
📚 Step by step dari bikin sampai bisa dijual jadi produk digital
✨ Nggak perlu bisa coding

lptoolsid.edugamelabs.com/id/
```

**Bagian 11**
```text
yuk bikin game sendiri, pakai di kelas, terus bisa nambah penghasilan juga 🙌

mentok di langkah mana? tulis aja di komentar, aku balas satu-satu 😊
```

---

## 2026-11-22 21:30 UTC · threads @auzanhasfi · text

```text
Aku ni cikgu yang ketagih bina game pendidikan sendiri sejak jumpa cara ni 😭

Kali ni aku buat game ala-ala Plants vs Zombies, tapi nak dapat "matahari" untuk tanam pokok, murid kena jawab soalan Matematik dulu 🌻

Aku guna Claude, tapi korang boleh je guna Gemini atau ChatGPT. Tinggal copy paste prompt kat bawah ni je 👇
```

**Bagian 2**
```text
macam ni gamenya, cuba main dulu 🎮

preview.edugamelabs.com/kertas-tinta/games/clawd-vs-zombi/
```

**Bagian 3**
```text
Cara aku bina, step by step:

1. Buka Claude / Gemini / ChatGPT
2. Salin prompt penuh kat bawah ni
3. Tukar bahagian [kurungan] ikut subjek & tahun murid
4. Tekan hantar, tunggu game siap
5. Main 2 kali dulu, suruh AI baiki apa yang kurang
6. Share link kat murid, terus main kat telefon
```

**Bagian 4**
```text
Ni prompt penuh dia. Buka lampiran, salin semua, tukar bahagian dalam [kurungan] 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME PERTAHANAN TAMAN (ala Plants vs Zombies)
(salin semua, tukar bahagian dalam [kurungan])


PERANAN

Kamu ialah pembangun game pendidikan dan pereka UI untuk murid sekolah.


MATLAMAT

Bina game pertahanan taman dalam SATU fail HTML (HTML, CSS dan JavaScript dalam satu fail). Game mesti boleh terus dibuka di browser telefon dan laptop tanpa pemasangan.


DATA KELAS

- Tahap: [Tahun 4]
- Subjek: [Matematik]
- Topik: [Darab dan bahagi]
- Bilangan soalan: [20 soalan aneka pilihan, 4 pilihan jawapan]
- Bahasa: Bahasa Melayu yang mesra murid


CARA MAIN

1. Papan permainan 5 lorong x 9 petak. Raksasa comel bergerak perlahan dari kanan ke kiri.

2. Murid tanam pokok pertahanan di petak untuk menghalang raksasa.

3. Untuk tanam pokok, murid perlukan "matahari". Setiap 10 saat muncul kotak soalan: jawapan betul = +50 matahari. Jawapan salah = tunjuk jawapan betul dengan penerangan ringkas.

4. Ada 4 jenis pokok: penembak (100 matahari), dinding (50), penembak berganda (200), bom (150).

5. Ada 5 gelombang raksasa, makin lama makin laju. Gelombang terakhir ada raksasa besar.

6. Kalau raksasa sampai ke hujung kiri, permainan tamat. Skrin akhir: skor, jumlah soalan betul, butang "Main semula".


MOD KELAS

- Pilihan tahap: Mudah / Sederhana / Sukar (laju raksasa dan masa menjawab).

- Mod 2 pemain: bergilir menjawab, skor setiap pemain di bahagian atas.


PAPARAN

- Gaya kartun ceria, warna lembut, bucu bulat.

- Butang besar (minimum 56 px) supaya senang ditekan di telefon.

- Animasi kecil: pokok bergoyang, peluru terbang, raksasa jatuh secara comel (bukan ganas).

- Bunyi ringkas dibuat dengan Web Audio API (tanpa fail luar), ada butang senyap.


SOALAN

- Tulis 20 soalan sendiri ikut topik dan tahap di atas.

- Simpan semua soalan dalam satu array di bahagian paling atas kod supaya cikgu senang tukar.

- Rawak susunan soalan dan pilihan jawapan setiap kali main.


TEKNIKAL

- Tanpa library dan tanpa gambar dari luar. Semua grafik guna CSS, SVG atau Canvas.

- Responsif: potret di telefon, landskap di laptop atau projektor.

- Simpan skor tertinggi dalam peranti (localStorage).


HASIL

Berikan kod penuh dalam satu fail, kemudian terangkan ringkas cara tukar soalan.
```

**Bagian 5**
```text
nak lagi banyak prompt game macam ni? ada galeri prompt PERCUMA, boleh terus cuba 👇

demoprompt.edugamelabs.com
```

**Bagian 6**
```text
tapi kalau nak lagi berbaloi, ambil yang Pro 😁

🎮 Semua template game & apps terbuka
🤖 Prompt Generator: isi subjek, tahun, topik, prompt terus jadi
📚 Step by step dari bina sampai boleh jual sebagai produk digital
✨ Tak perlu pandai coding

lptoolsid.edugamelabs.com/ms/
```

**Bagian 7**
```text
jom bina game sendiri, guna dalam kelas, lepas tu boleh tambah pendapatan sekali 🙌

ada soalan? komen je kat bawah, aku balas satu-satu 😊
```

---

## 2026-11-22 21:30 UTC · threads @edugamelabs.id · text

```text
Aku tuh guru yang jadi ketagihan bikin game edukasi sendiri sejak nemu cara ini 😭

Kali ini aku bikin game lari ala-ala Temple Run. Tokohnya dikejar monster, dan di setiap gerbang murid harus pilih jalur dengan jawaban Matematika yang benar 🏃‍♂️

Aku pakai Claude, tapi kalian bisa pakai Gemini atau ChatGPT juga. Tinggal copy paste prompt di bawah ini 👇
```

**Bagian 2**
```text
kayak gini game-nya, coba mainkan dulu 🎮

preview.edugamelabs.com/kertas-tinta/games/lari-clawd/
```

**Bagian 3**
```text
Cara aku bikin, step by step:

1. Buka Claude / Gemini / ChatGPT
2. Salin prompt lengkap di bawah ini
3. Ganti bagian [kurung] sesuai mapel & kelas murid
4. Kirim, tunggu game-nya jadi
5. Mainkan 2 kali dulu, minta AI perbaiki yang kurang
6. Bagikan link ke murid, langsung main di HP
```

**Bagian 4**
```text
Ini prompt lengkapnya. Buka lampirannya, salin semua, ganti bagian dalam [kurung] 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME LARI JAWAB SOAL (ala Temple Run)
(salin semua, ganti bagian dalam [kurung])


PERAN

Kamu adalah pengembang game edukasi dan desainer UI untuk anak sekolah.


TUJUAN

Buatkan game lari tanpa henti dalam SATU file HTML (HTML, CSS, dan JavaScript jadi satu). Game harus bisa langsung dibuka di browser HP dan laptop tanpa instalasi.


DATA KELAS

- Jenjang: [Kelas 4 SD]
- Mata pelajaran: [Matematika]
- Materi: [Perkalian dan pembagian]
- Jumlah soal: [20 soal]
- Bahasa: Bahasa Indonesia yang ramah anak


ALUR PERMAINAN

1. Layar pembuka: judul game, tokoh maskot lucu, tombol "Mulai".

2. Tokoh berlari otomatis di jalan 3 jalur, dikejar monster lucu dari belakang.

3. Pemain pindah jalur dengan geser layar (HP) atau tombol panah (laptop), lompat untuk menghindari rintangan.

4. Setiap beberapa detik muncul gerbang soal: soal tampil di atas, 3 jalur berisi 3 pilihan jawaban. Pemain harus masuk ke jalur jawaban yang benar.

5. Jawaban benar: tokoh makin cepat, dapat 10 poin dan koin. Jawaban salah: monster makin dekat, tampilkan penjelasan singkat jawaban yang benar.

6. Kalau salah 3 kali, monster menangkap tokoh dan permainan selesai. Layar akhir: skor, jumlah jawaban benar, jarak tempuh, tombol "Main lagi".


MODE KELAS

- Pilihan level: Mudah / Sedang / Sulit (kecepatan lari dan waktu berpikir).

- Mode 2 pemain bergantian, skor tiap pemain tampil di atas.


TAMPILAN

- Gaya kartun cerah, warna lembut, sudut membulat.

- Soal ditulis besar dan jelas di bagian atas layar.

- Tombol besar (minimal 56 px) supaya mudah ditekan di HP.

- Animasi kecil: koin berkilau, tokoh melompat, monster lucu (tidak menyeramkan).

- Efek suara sederhana dengan Web Audio API (tanpa file luar), plus tombol bisu.


SOAL

- Tulis 20 soal sendiri sesuai materi dan jenjang di atas.

- Simpan semua soal dalam satu array di bagian paling atas kode, supaya guru mudah menggantinya.

- Acak urutan soal dan posisi jawaban di setiap gerbang.


TEKNIS

- Tanpa library dan tanpa gambar dari luar. Semua grafis dibuat dengan CSS, SVG, atau Canvas.

- Responsif: tampilan potret di HP, tampilan lebar di laptop atau proyektor.

- Simpan skor tertinggi di perangkat (localStorage).


HASIL

Berikan kode lengkap dalam satu file, lalu jelaskan singkat cara mengganti soal.
```

**Bagian 5**
```text
mau lebih banyak prompt game kayak gini? ada galeri prompt GRATIS, bisa langsung dicoba 👇

demoprompt.edugamelabs.com/id
```

**Bagian 6**
```text
tapi kalau mau lebih worth it, ambil yang Pro 😁

🎮 Semua template game & app terbuka
🤖 Prompt Generator: isi mapel, kelas, materi, prompt langsung jadi
📚 Step by step dari bikin sampai bisa dijual jadi produk digital
✨ Nggak perlu bisa coding

lptoolsid.edugamelabs.com/id/
```

**Bagian 7**
```text
yuk bikin game sendiri, pakai di kelas, terus bisa nambah penghasilan juga 🙌

ada pertanyaan? tulis aja di komentar, aku balas satu-satu 😊
```

---

## 2026-11-22 14:20 UTC · threads @edugamelabs.id · text

```text
Jam terakhir, kelas 5 sudah ngantuk semua. Saya coba satu hal: kuis IPA saya ubah jadi game.

Hasilnya? Murid minta "satu ronde lagi, Bu" sampai bel pulang.

Tanpa coding. Saya ceritakan caranya di bawah 👇
```

**Bagian 2**
```text
Dulu saya pikir bikin game edukasi itu harus bisa coding, atau bayar programmer.

Ternyata cukup satu prompt yang rapi. Saya tempel ke Claude (Gemini dan ChatGPT juga bisa), tunggu sebentar, dan game sudah bisa dimainkan di laptop atau HP murid.
```

**Bagian 3**
```text
Kuncinya bukan prompt yang pendek, tapi prompt yang lengkap:

1. Siapa pemainnya (kelas berapa)
2. Materi dan jumlah soal
3. Cara main dan aturan skor
4. Tampilan dan bahasa
5. Apa yang terjadi saat salah dan saat menang

Semakin jelas prompt-nya, semakin sedikit revisi.
```

**Bagian 4**
```text
Ini prompt lengkap yang saya pakai. Buka lampirannya, salin semua, lalu ganti bagian dalam [kurung] sesuai kelas Anda 👇
```

Lampiran (prompt panjang):
```text
PROMPT GAME KUIS PETUALANGAN
(salin semua, ganti bagian dalam [kurung])


PERAN

Kamu adalah pengembang game edukasi dan desainer UI untuk anak sekolah.


TUJUAN

Buatkan game kuis petualangan dalam SATU file HTML (HTML, CSS, dan JavaScript jadi satu). Game harus bisa langsung dibuka di browser HP dan laptop tanpa instalasi.


DATA KELAS

- Jenjang: [Kelas 5 SD]
- Mata pelajaran: [IPA]
- Materi: [Sistem peredaran darah manusia]
- Jumlah soal: [10 soal pilihan ganda, 4 opsi]
- Bahasa: Bahasa Indonesia yang ramah anak


ALUR PERMAINAN

1. Layar pembuka: judul game, tokoh maskot, tombol "Mulai".

2. Pemain berjalan di peta dengan 10 pos. Setiap pos berisi 1 soal.

3. Jawaban benar: tokoh maju ke pos berikutnya, dapat 10 poin dan 1 bintang.

4. Jawaban salah: tampilkan penjelasan singkat jawaban yang benar, lalu pemain boleh mencoba sekali lagi untuk 5 poin.

5. Pemain punya 3 nyawa. Kalau nyawa habis, tampilkan layar "Coba lagi" beserta skornya.

6. Layar akhir: skor total, jumlah bintang, pesan penyemangat, dan tombol "Main lagi".


MODE KELAS

- Tombol "Mode 2 Tim": dua tim bergantian menjawab, skor tiap tim tampil di bagian atas, dan ada layar pemenang di akhir.

- Timer 20 detik per soal, bisa dimatikan oleh guru.


TAMPILAN

- Gaya kartun cerah, warna lembut, sudut membulat.

- Tombol besar (minimal 56 px) supaya mudah ditekan di HP.

- Huruf besar, jelas, dan kontras tinggi.

- Animasi kecil saat benar (bintang meletup) dan saat salah (tokoh menggeleng).

- Efek suara sederhana dibuat dengan Web Audio API (tanpa file dari luar), plus tombol bisu.


SOAL

- Tulis 10 soal sendiri sesuai materi dan jenjang di atas.

- Simpan semua soal dalam satu array di bagian paling atas kode, supaya guru mudah menggantinya.

- Acak urutan soal dan urutan pilihan jawaban setiap kali main.


TEKNIS

- Tanpa library dan tanpa gambar dari luar. Semua grafis dibuat dengan CSS atau SVG.

- Responsif: tampilan potret di HP, tampilan lebar di laptop atau proyektor.

- Simpan skor tertinggi di perangkat (localStorage).


HASIL

Berikan kode lengkap dalam satu file, lalu jelaskan singkat cara mengganti soal.
```

**Bagian 5**
```text
Setelah game jadi, uji dulu 2 kali sendiri. Kalau ada yang kurang, cukup bilang ke AI-nya:

"Tombolnya kurang besar"
"Tambahkan level bonus"
"Ganti warnanya jadi warna sekolah"

Tidak perlu menyentuh kode sama sekali.
```

**Bagian 6**
```text
Mau lihat contoh prompt lain, lengkap dengan hasil game dan app-nya?

Galeri Prompt untuk membuat game dan app, gratis dicoba:
demoprompt.edugamelabs.com/id
```

**Bagian 7**
```text
Kalau Anda ingin rutin bikin game dan app untuk kelas, versi Pro jauh lebih worth it:

+ Semua jenis game & app terbuka
+ Prompt Generator: isi mapel, kelas, materi, prompt langsung jadi
+ Galeri prompt siap pakai + panduan sampai bisa dijual

lptoolsid.edugamelabs.com/id/

Ada pertanyaan? Tulis di komentar, saya balas satu per satu 🙏
```

---

## 2026-11-22 12:49 UTC · threads @auzanhasfi · album

Media: 10 file (image)

```text
Cikgu, AI bukan ganti cikgu. Ia jimatkan masa cikgu. Ni 5 cara nak mula 👇

#fyp #cikgu #malaysian #malaysia #carousel
```

---

## 2026-11-22 12:49 UTC · instagram @auzan_hasfi · album

Media: 10 file (image)

```text
Cikgu, AI bukan untuk ganti cikgu. Ia untuk jimatkan masa cikgu. 💙

329,414 guru di Malaysia sudah terima latihan AI. 260 sekolah sudah jadi Bilik Darjah AI, dan Asas AI masuk sekolah rendah mulai 2027. Giliran cikgu pula.

5 use case yang boleh terus dicuba minggu ini:

01 · Bina app kuiz kelas sendiri, tanpa koding. Terangkan app, minta satu fail HTML, cuba dan minta ubah, kongsi pautan. Murid main terus di telefon.
02 · Satu topik jadi video 60 saat yang murid tonton habis: skrip ikut DSKP, takarir BM + EN, suara AI.
03 · Buntu idea PdPc? Dapat 10 aktiviti dalam 2 minit: set induksi, PAK21, permainan ulang kaji, soalan KBAT.
04 · Satu lembaran kerja, 3 aras untuk murid yang berbeza, siap dengan skema jawapan.
05 · Kerja kertas sejam siap dalam 10 minit: ulasan PBD, surat ibu bapa, minit mesyuarat, laporan program.

Ingat: AI pembantu, cikgu tetap penentu. Jangan masukkan nama penuh, IC atau markah sebenar murid, dan semak semula fakta ikut DSKP.

Slaid 9 ada prompt asas yang cikgu boleh salin terus 📌

Simpan dulu, kongsi dengan rakan sekolah. Nak tools yang saya guna? Komen TOOLS, saya hantar link terus ke DM 👇

#fyp #cikgu #malaysian #malaysia #carousel
```

---

## 2026-11-22 12:49 UTC · tiktok @eduapp.id0 · album · 5 cara cikgu guna AI yang betul-betul jimat masa

Media: 10 file (image)

```text
Cikgu, AI bukan untuk ganti cikgu. Ia untuk jimatkan masa cikgu 💙

5 use case yang boleh terus dicuba:
01 Bina app kuiz kelas, tanpa koding
02 Satu topik jadi video 60 saat
03 10 idea aktiviti PdPc dalam 2 minit
04 Lembaran kerja 3 aras
05 Ulasan PBD, surat ibu bapa & minit mesyuarat

Slaid 9 ada prompt asas untuk disalin 📌 Simpan dulu!

#fyp #cikgu #malaysian #malaysia #carousel
```

---

## 2026-11-22 12:49 UTC · threads @auzan_hasfi · album

Media: 10 file (image)

```text
5 cara cikgu guna AI yang betul-betul jimat masa. Simpan dulu 📌

#fyp #cikgu #malaysian #malaysia #carousel
```

---

## 2026-11-22 11:15 UTC · pinterest @whitespace92 · video · Cikgu Banyak Cuti? Realiti Cuti Sekolah Cikgu

Media: 1 file (video)

```text
Realiti cuti sekolah seorang cikgu di Malaysia: boleh diarah bertugas sampai separuh cuti penggal, kelas tambahan SPM, tanda kertas, masuk markah, rancangan tahunan dan kemas kelas. Cuti rehat khas cuma 10 hari setahun dengan izin pengetua.

#fyp #cikgu #malaysian #fypp #reels
```

---

## 2026-11-22 11:15 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
"Seronoknya jadi cikgu, cuti banyak." Betul ke? 🤔

Ikut Cikgu Aina masa cuti sekolah. Hari pertama cuti, telefon dah berbunyi: mesyuarat, kursus, program sekolah. Ikut kementerian, cikgu boleh diarah bertugas sampai separuh cuti penggal.

Murid SPM ada kelas tambahan. Kertas peperiksaan belum habis tanda. Markah kena masuk sistem. Rancangan tahunan, lembaran kerja (cetak guna duit sendiri), cat dinding kelas, tampal carta.

Satu fakta lagi: penjawat awam lain ada cuti rehat tahunan. Cikgu cuma dapat cuti rehat khas 10 hari setahun, itu pun kena minta izin pengetua.

Badan ada di rumah. Kepala masih di kelas 💛

Tag cikgu yang korang kenal 👇

Nak buat video macam ni? Komen TOOLS, saya hantar link terus ke DM.
Nak mentoring terus dengan saya? Link di bio.

#fyp #cikgu #malaysian #fypp #reels
```

---

## 2026-11-22 11:15 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Cikgu banyak cuti? Jom tengok apa cikgu buat masa cuti sekolah 🤔

Mesyuarat, kursus, kelas tambahan SPM, tanda kertas, masuk markah, rancangan tahunan, cat dinding kelas 😅
Cuti rehat khas pula 10 hari setahun je, itu pun kena minta izin pengetua.

Badan di rumah, kepala masih di kelas 💛

Tag cikgu yang korang kenal 👇

#fyp #cikgu #malaysian #fypp #reels
```

---

## 2026-11-22 11:12 UTC · threads @edugamelabs.id · text

```text
Game ular tangga digital seperti ini sekarang bisa jadi dalam 10 menit saja. Caranya:
```

**Bagian 2**
```text
1. Tentukan tema kelas

Ambil tema singkat, contoh adab makan atau rukun harian. Tulis dalam satu kalimat.
```

**Bagian 3**
```text
2. Minta Gemini bikin game

“Create a single-file HTML snakes and ladders game for TPQ pupils aged 7 to 9, 36 squares, each square shows a short Indonesian question on [theme].”
```

**Bagian 4**
```text
3. Uji dulu

Main sendiri dari awal sampai akhir, pastikan soal dan isinya sesuai sebelum dipakai di kelas.
```

**Bagian 5**
```text
Kalau Bapak Ibu mau langsung dapat prompt game dan app edukasi yang tinggal tempel, saya punya Prompt Generator.

Pilih jenis game atau app, isi topik, salin promptnya ke Gemini, ChatGPT, atau Claude.

Cek di sini: https://lptoolsid.edugamelabs.com/id/
```

---

## 2026-11-22 11:12 UTC · threads @auzanhasfi · text

```text
Saya cuba ubah lembaran kerja prasekolah jadi teka silang kata guna ChatGPT. Ini apa yang jadi.
```

**Bagian 2**
```text
1. Langkah pertama memang berjaya.

ChatGPT beri senarai perkataan dan grid. Tapi kotak terlalu kecil dan soalan terlalu panjang untuk murid 5 tahun.
```

**Bagian 3**
```text
2. Apa yang saya baiki:

Minta gambar kecil di sebelah soalan dan kurangkan perkataan, sampai murid boleh baca sendiri. Lebih kurang tiga kali cuba baru jadi.
```

**Bagian 4**
```text
3. Prompt akhir yang berjaya:

“Create a crossword for 5 year olds with 6 words, 4 to 5 letters each, a small picture next to each clue, big boxes, one-word clues in Malay.”

Cuba sendiri dulu sebelum bawa ke kelas.
```

**Bagian 5**
```text
Cikgu yang nak buat game dan app belajar sendiri tanpa pening tulis prompt, boleh guna Prompt Generator saya.

Pilih jenis game, isi subjek dan topik, terus dapat prompt siap tampal.

Lagi info: https://lptoolsid.edugamelabs.com/ms/
```

---

## 2026-11-22 11:12 UTC · threads @auzan_hasfi · text

```text
KHAS UNTUK USAHAWAN KECIL

Framework prompt untuk buat game kuiz yang boleh dikongsi terus dengan pelanggan kursus korang.

Ini framework yang saya guna:
```

**Bagian 2**
```text
1. Tetapkan ini dalam prompt:

+ Topik kursus
+ Bilangan soalan
+ Jenis game
+ Gaya warna jenama
+ Bahasa
```

**Bagian 3**
```text
2. Contoh pertama, tampal ke Gemini Canvas:

“Make a 10-question quiz game for a small business course on [topic], big buttons, score at the end, Malay language.”
```

**Bagian 4**
```text
3. Contoh kedua, untuk pelanggan baharu:

“Make a 5-question welcome quiz with a friendly tone, one tip after each answer.”

Uji sekali dulu sebelum hantar. Mudahkan?
```

**Bagian 5**
```text
Kalau korang nak terus dapat prompt game dan app yang siap tampal, tanpa fikir dari kosong, saya ada Prompt Generator.

Pilih jenis game atau app, isi topik, salin prompt ke Gemini, ChatGPT atau Claude.

Tengok sini: https://lptoolsid.edugamelabs.com/ms/
```

---

## 2026-11-21 05:50 UTC · threads @edugamelabs.id · video

Media: 1 file (video)

```text
Satu gaji, sepuluh peran. Tapi besok jam 5 pagi, guru tetap bangun lagi. 💛
```

---

## 2026-11-21 05:50 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Mau jadi guru? Ikuti dulu perjalanan Bu Aina 🍎

Jam 5 pagi sudah bangun. Guru piket, wali kelas, pelatih bola, konselor, teknisi proyektor. Satu gaji, sepuluh peran. Jam 10 malam, chat wali murid masih masuk.

Gajinya? 74% guru honorer digaji di bawah Rp2 juta sebulan (survei IDEAS, 2024).

Tapi suatu hari, murid yang dulu tidak kenal huruf datang memeluk: "Bu, saya sudah bisa baca."

Dan besok, jam 5 pagi, bangun lagi.

Tag guru yang kamu sayang 💛

#fyp #guru #guruhonorer #pendidikan #fypシ
```

---

## 2026-11-21 00:44 UTC · threads @auzan_hasfi · video

Media: 1 file (video)

```text
Kalau RM1 juta masuk akaun semua rakyat Malaysia serentak, kita kaya ke… atau roti canai jadi RM300? 💸

#fyp #malaysia #tiktok #fypp #reels
```

---

## 2026-11-21 00:44 UTC · threads @auzanhasfi · video

Media: 1 file (video)

```text
Semua orang dapat RM1 juta. Kau ada satu jam sebelum harga jadi gila. Apa kau buat dulu? 👇

#fyp #malaysia #tiktok #fypp #reels
```

---

## 2026-11-21 00:44 UTC · tiktok @diarymalaysia · video

Media: 1 file (video)

```text
Apa jadi kalau RM1 juta masuk akaun SEMUA rakyat Malaysia serentak? 💸

Hari pertama heboh. Pakcik nasi lemak terus bersara, pekerja block nombor bos 😂
Tapi barang tetap sama, rider semua bercuti di Jepun, mamak 24 jam pun tutup. Roti canai sekeping jadi RM300!

Akhirnya duit sejuta tak ada beza dengan duit monopoli.

Kau ada satu jam sebelum harga jadi gila. Apa kau buat? Jom adu jawapan kat komen 👇

#fyp #malaysia #tiktok #fypp #reels
```

---

## 2026-11-21 00:44 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Apa jadi kalau tiba-tiba RM1 juta masuk akaun SEMUA rakyat Malaysia pada masa yang sama? 💸

Hari pertama memang heboh. Pakcik nasi lemak terus bersara. Pekerja terus block nombor bos. Ramai rasa masalah hidup dah selesai.

Masalahnya, duit dalam negara bertambah RM34 trilion, tapi barang tetap sama. Rider semua bercuti di Jepun, mamak 24 jam pun tutup, roti canai sekeping jadi RM300. Beras hilang dari rak, duit RM100 pun ditolak makcik jaga tandas 😅

Akhirnya duit sejuta dalam akaun tak ada beza dengan duit monopoli. Tapi selalu ada segelintir orang bijak yang justeru untung.

Kalau esok benda ni jadi betul, kau ada satu jam sebelum harga seluruh Malaysia jadi gila. Apa kau buat dalam jam pertama? Jom adu jawapan kat komen 👇

Nak buat video macam ni? Komen TOOLS, saya hantar link terus ke DM.

#fyp #malaysia #tiktok #fypp #reels
```

---

## 2026-11-20 23:46 UTC · threads @auzan_hasfi · video

Media: 1 file (video)

```text
Kalau cikgu tu sebuah aplikasi 📱

Ciri asal: mengajar.
Ciri tambahan percuma: kerani, MC majlis, jurugambar, bendahari, kaunselor.
Kemas kini: tukar menteri, tukar versi.
Bateri: 100% pukul 7 pagi, 35% pukul 2 petang.
Ralat: terus hang bila dengar perkataan "nazir".

Tapi tetap lima bintang, dan tak boleh dipadam 💛

Apa lagi ciri aplikasi cikgu?

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 23:46 UTC · threads @auzanhasfi · video

Media: 1 file (video)

```text
Cikgu, cuba jujur 😅

Kalau korang ni sebuah aplikasi, bateri tinggal berapa peratus sekarang?

Pukul 7 pagi 100%. Lepas perhimpunan 70%. Pukul 2 petang 35%. Notifikasi grup ibu bapa masih masuk, dan butang "matikan" memang tak wujud.

Tapi bekas murid tetap tulis: "Dulu selalu kena marah, sekarang rindu pula." ⭐⭐⭐⭐⭐

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 23:46 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Kalau cikgu tu sebuah aplikasi 📱

Ciri asal: mengajar. Ciri percuma: kerani, MC, jurugambar, bendahari, kaunselor 😅
Bateri 100% pukul 7 pagi, 35% pukul 2 petang. Notifikasi grup ibu bapa? Tak boleh matikan.

Tapi tetap lima bintang ⭐ dan tak boleh dipadam 💛

Apa lagi ciri aplikasi cikgu? Komen bawah 👇

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 23:46 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Bayangkan kalau cikgu tu sebuah aplikasi 📱

Nama: Cikgu Malaysia. Saiz nampak kecil, tapi bila dibuka, cirinya banyak gila.

Mula-mula satu ciri sahaja: mengajar. Lama-lama tambah sendiri: kerani, pengacara majlis, jurugambar, bendahari, kaunselor tak bertauliah. Semua percuma.

Bateri 100% pukul 7 pagi. Lepas perhimpunan tinggal 70%. Notifikasi grup ibu bapa tak pernah berhenti, dan butang "matikan notifikasi" memang tak wujud.

Tapi ulasannya tetap lima bintang ⭐⭐⭐⭐⭐
Dan inilah satu-satunya aplikasi yang tak boleh dipadam. Sekali terpasang dalam hidup murid, kekal selamanya 💛

Apa lagi ciri aplikasi cikgu? Tulis di ruang komen 👇

Nak buat video macam ni? Komen TOOLS, saya hantar link terus ke DM.

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 23:46 UTC · pinterest @whitespace92 · video · Kalau Cikgu Tu Sebuah Aplikasi

Media: 1 file (video)

```text
Bayangkan kalau cikgu itu sebuah aplikasi: satu ciri asal (mengajar) tapi tambah sendiri jadi kerani, MC, jurugambar, bendahari dan kaunselor. Bateri 100% pukul 7 pagi, 35% pukul 2 petang, notifikasi grup ibu bapa tak berhenti. Tapi tetap lima bintang dan tak boleh dipadam dari hidup murid.

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 23:46 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Bayangkan kalau cikgu itu sebuah aplikasi.

Pada asalnya hanya ada satu ciri: mengajar. Dari tahun ke tahun, ciri baharu bertambah sendiri — kerani, pengacara majlis, jurugambar, bendahari, malah kaunselor tanpa tauliah. Semuanya tanpa bayaran tambahan.

Kemas kini pula kerap: tukar menteri, tukar versi. Kurikulum lama kekal, kurikulum baharu ditambah.

Baterinya penuh pada jam 7 pagi, tinggal 35% menjelang jam 2 petang, namun aplikasi ini tetap perlu berjalan. Notifikasi daripada grup ibu bapa, grup sekolah dan grup kelas tidak pernah berhenti.

Walaupun begitu, ulasannya tetap lima bintang. Dan inilah satu-satunya aplikasi yang tidak boleh dipadam: sekali terpasang dalam hidup seorang murid, ia kekal selamanya.

Hormat kepada semua cikgu. Pada pendapat anda, apa lagi "ciri" seorang cikgu?

#fyp #malaysia #cikgu #reel #reels
```

---

## 2026-11-20 11:40 UTC · pinterest @whitespace92 · video · 12 Perkataan Sama, Maksud Terbalik: Indonesia vs Malaysia

Media: 1 file (video)

```text
Perkataan Melayu yang sama tapi maksud berbeza di Indonesia dan Malaysia: kereta, percuma, seronok, banci, tandas, pejabat, budak, jemput, pusing, kakitangan, comel, tambang. Sesuai untuk belajar bahasa dan budaya serumpun.

#fyp #malaysia #melayu #indonesia #reels
```

---

## 2026-11-20 11:40 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Satu bahasa, dua makna.

Bahasa Melayu dan bahasa Indonesia berkongsi akar yang sama, tetapi banyak perkataan membawa maksud yang berbeza, malah terbalik. "Pejabat" di Malaysia bermaksud office, di Indonesia pula pegawai tinggi. "Kakitangan" di sini ialah pekerja, di sana boleh bermaksud rakan penjenayah.

Bagi sesiapa yang bekerja, mengajar atau berniaga merentas Malaysia dan Indonesia, perbezaan kecil ini penting untuk komunikasi yang tepat.

Perkataan mana yang pernah buat anda salah faham?

#fyp #malaysia #melayu #indonesia #reels
```

---

## 2026-11-20 11:40 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
12 perkataan yang sama tapi maksudnya terbalik di Indonesia vs Malaysia 🇮🇩🇲🇾

"Budak" di Malaysia kanak-kanak, di Indonesia hamba. "Pusing" di sini berputar, di sana sakit kepala. "Comel" di sini cute, di sana mulut becok 😂

Korang orang Malaysia atau Indonesia? Perkataan mana paling kelakar?

#fyp #malaysia #melayu #indonesia #reels
```

---

## 2026-11-20 11:40 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Perkataan sama, tapi maksud terbalik di Indonesia dan Malaysia 🇮🇩🇲🇾

Kereta. Percuma. Seronok. Banci. Tandas. Pejabat. Budak. Comel. Tambang...

Di Malaysia "percuma" maksudnya free, tapi di Indonesia maksudnya sia-sia. "Tandas" di sini bilik air, di sana habis licin 😂

Mana satu yang paling buat korang terkejut? Komen kat bawah 👇

Nak buat video macam ni? Komen TOOLS.

#fyp #malaysia #melayu #indonesia #reels
```

---

## 2026-11-19 12:27 UTC · pinterest @whitespace92 · video · Nak Jadi Cikgu? Satu Hari dalam Hidup Cikgu

Media: 1 file (video)

```text
Perjalanan menjadi cikgu di Malaysia: 5 tahun IPG, praktikum, posting seberang laut, lalu satu hari kerja dari 5 pagi hingga 10 malam. Satu gaji, sepuluh jawatan, purata 57 jam seminggu. Tapi berbaloi bila murid berkata "Cikgu, saya dah boleh baca."

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 12:27 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Nak jadi cikgu? Ini perjalanannya.

Lima tahun di IPG: setahun persediaan, empat tahun ijazah, praktikum yang menguji emosi. Kemudian surat posting tiba, selalunya jauh dari kampung, malah ke seberang laut.

Satu hari seorang cikgu bermula jam 5 pagi. Guru bertugas, guru kelas, guru ganti, jurulatih sukan, kaunselor, juruteknik. Satu gaji, sepuluh jawatan. Malam pula untuk PBD, laporan dan RPH. Kajian kementerian (2011) mencatatkan purata 57 jam kerja seminggu.

Namun ada saat yang membuat semuanya berbaloi: murid yang dulu tidak kenal huruf datang dan berkata, "Cikgu, saya dah boleh baca."

Hormat kepada semua cikgu yang bangun semula esok pagi.

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 12:27 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Nak jadi cikgu? Ni satu hari dalam hidup seorang cikgu 🍎

Bangun 5 pagi. Jaga pagar, masuk kelas 30 murid 30 perangai, rehat sambil semak buku, petang jadi jurulatih bola. Malam buka laptop: PBD, laporan, RPH.

Satu gaji, sepuluh jawatan. Purata 57 jam seminggu.

Tapi bila murid kata "Cikgu, saya dah boleh baca", semua penat hilang.

Tag cikgu yang korang sayang 💛

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 12:27 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Nak jadi cikgu? Ikut dulu perjalanan Cikgu Aina 🍎

5 tahun di IPG. Praktikum sampai menangis dalam kereta. Surat posting sampai, seberang laut.

Jam 5 pagi bangun. Guru bertugas, guru kelas, jurulatih bola, kaunselor, juruteknik projektor. Satu gaji, sepuluh jawatan. Pukul 10 malam, mesej ibu bapa masih masuk.

Tapi satu hari, murid yang dulu tak kenal huruf datang peluk: "Cikgu, saya dah boleh baca."

Dan esok, jam 5 pagi, bangun lagi.

Tag cikgu yang korang sayang 💛

Nak buat video macam ni? Komen TOOLS.
Nak mentoring terus dengan saya? Link di bio.

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 11:37 UTC · pinterest @whitespace92 · video · Tak Pandai Animasi? Buat Video dengan Claude

Media: 1 file (video)

```text
Tak pandai animasi tapi capai 2 juta tontonan. Tanpa After Effects, tanpa animator: prompt + skill motion dalam Claude, siap gambar, gerakan dan takarir. Sesuai untuk cikgu mengajar, promosi dan jualan tanpa tunjuk muka.

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 11:37 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Saya tak pandai buat animasi. Tapi kandungan video saya sudah mencapai 2 juta tontonan, dengan pengikut dari Malaysia, Indonesia, Brunei, Singapura dan Thailand.

Tanpa After Effects. Tanpa mengupah animator. Semuanya dihasilkan dengan Claude.

Aliran kerjanya mudah: buka Claude, masukkan prompt dan skill motion yang saya bina sendiri, lalu Claude menyusun visual, gerakan dan takarir. Mahu ubah gaya? Cukup satu arahan.

Format ini sesuai untuk pendidik, usahawan dan sesiapa yang mahu mengajar, mempromosi atau menjual tanpa perlu tunjuk muka.

Semua tools saya kumpulkan di sini: lpvideo.edugamelabs.com

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 11:37 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Tak pandai animasi, tapi video macam ni dah capai 2 juta tontonan 🎬

Tak guna After Effects, tak upah animator. Semua dibuat dengan Claude: prompt + skill motion, Claude susun gambar, gerakan sampai takarir.

Boleh untuk mengajar, promosi sampai jualan, tanpa tunjuk muka.

Nak tools yang sama? Link: lpvideo.edugamelabs.com

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-19 11:37 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Saya tak pandai buat animasi. Tapi akaun ni dah capai 2 juta tontonan 🎬

Pengikut datang dari Malaysia, Indonesia, Brunei, Singapura dan Thailand.

Tak guna After Effects. Tak upah animator. Semua dibuat dengan Claude.

Buka Claude, masukkan prompt dan skill motion, Claude susun gambar, gerakan sampai takarir. Tak kena? Cakap je. Nak tukar gaya? Sekali arahan, siap.

Boleh guna untuk mengajar, promosi sampai jualan, tanpa tunjuk muka.

Komen TOOLS, saya hantar link terus ke DM 👇

#fyp #malaysia #cikgu #fypシ #reels
```

---

## 2026-11-18 10:18 UTC · pinterest @whitespace92 · video · Cara Cikgu Damaikan Murid Bergaduh

Media: 1 file (video)

```text
Cara cikgu di China memisahkan dua murid yang bergaduh: berdiri atas bangku yang sama, siapa jatuh dulu mengaku salah. Bila seorang hampir jatuh, yang lain terus memeluknya. Idea pengurusan bilik darjah tanpa marah.

#fyp #malaysia #cikgusekolah #fypシ
```

---

## 2026-11-18 10:18 UTC · linkedin @auzan-hasfi-715a131a3 · video

Media: 1 file (video)

```text
Cara seorang cikgu di China memisahkan dua murid yang bergaduh, tanpa marah dan tanpa hukuman berat.

Dua murid disuruh berdiri di atas bangku yang sama. Sesiapa yang hilang imbangan dahulu perlu mengaku salah. Masing-masing rasa diri betul, tiada siapa mahu mengalah.

Tapi apabila salah seorang hampir jatuh, murid yang seorang lagi terus memeluknya. Saat itu, mereka sedar dan tersenyum.

Pengajaran untuk bilik darjah, dan juga untuk kita di tempat kerja: kadang-kadang kita terlalu sibuk membuktikan siapa betul, sampai lupa orang di depan kita ialah rakan sepasukan.

Apa pendapat anda tentang pendekatan ini?

#fyp #malaysia #cikgusekolah #fypシ
```

---

## 2026-11-18 10:18 UTC · tiktok @eduapp.id0 · video

Media: 1 file (video)

```text
Macam ni cara cikgu di China memisahkan dua murid yang bergaduh 👀

Tak perlu marah, tak perlu tengking. Cikgu suruh dua-dua berdiri atas bangku yang sama. Siapa jatuh dulu, dia kena mengaku salah.

Tapi bila seorang hampir jatuh, yang seorang lagi terus peluk dia.

Dan dua-dua tersenyum.

Apa gunanya menang bergaduh, kalau kita hilang orang yang kita sayang?

Cikgu, pernah cuba cara macam ni dalam kelas? Kongsi kat komen 👇

#fyp #malaysia #cikgusekolah #fypシ
```

---

## 2026-11-18 10:18 UTC · instagram @auzan_hasfi · video

Media: 1 file (video)

```text
Macam ni cara cikgu di China memisahkan dua murid yang bergaduh 👀

Tak perlu marah, tak perlu tengking. Cikgu suruh dua-dua berdiri atas bangku yang sama. Siapa jatuh dulu, dia kena mengaku salah.

Tapi bila seorang hampir jatuh, yang seorang lagi terus peluk dia.

Dan dua-dua tersenyum.

Apa gunanya menang bergaduh, kalau kita hilang orang yang kita sayang?

Cikgu, pernah cuba cara macam ni dalam kelas? Kongsi kat komen 👇

#fyp #malaysia #cikgusekolah #fypシ
```

---

## 2026-11-17 14:40 UTC · threads @edugamelabs.id · text

```text
Dulu saya kira bikin game edukasi itu harus jago coding.

Ternyata sekarang cukup tahu mau ngajarin apa, sisanya bisa dibantu AI.

Saya rangkum cara yang saya pakai jadi satu app, supaya guru dan dosen lain bisa langsung coba tanpa ribet.

Penjelasannya di bawah ya
```

**Bagian 2**
```text
Namanya Prompt Generator

Isinya bukan game jadi, tapi "resep" untuk bikin game atau app sendiri. Tinggal pilih jenisnya, isi mapel, kelas dan materinya, lalu app menyusun prompt yang lengkap.

Prompt itu tinggal ditempel ke Claude, ChatGPT atau Gemini. Mau yang gratis juga bisa.
```

**Bagian 3**
```text
Beberapa yang sudah jadi dari prompt ini

Game platformer hitung-hitungan, escape room yang pintunya baru kebuka kalau soalnya benar, sampai game ketapel ala Angry Birds yang pakai soal matematika

Bisa dipakai di kelas, dibagikan ke siswa lewat link, atau dijual sebagai produk digital

Coba versi demonya gratis:
demoprompt.edugamelabs.com/id
```

**Bagian 4**
```text
Versi lengkapnya ada lebih banyak jenis game dan app, galeri prompt siap pakai, plus panduan dari bikin sampai jualan

lptoolsid.edugamelabs.com/id

Kalau masih bingung mulai dari mana, tulis saja di kolom komentar. Nanti saya bantu arahkan
```

---

## 2026-11-17 14:33 UTC · threads @auzanhasfi · text

```text
Cikgu pernah tak nak buat aktiviti kelas yang lain dari biasa, tapi tak cukup masa nak sediakan?

Saya pun selalu macam tu.

Sebab tu saya bina satu alat kecil untuk diri sendiri. Sekarang saya kongsikan dengan cikgu-cikgu lain.

Cara dia berfungsi saya terangkan kat bawah
```

**Bagian 2**
```text
Caranya 3 langkah je

1. Pilih nak bina apa: game kuiz, app latihan, worksheet interaktif
2. Isi subjek, tahun dan topik
3. Salin prompt yang keluar, tampal dalam Claude atau ChatGPT atau Gemini

AI akan bina bahan tu terus. Cikgu cuma main dan semak.
```

**Bagian 3**
```text
Contoh yang saya dah buat untuk murid sendiri

Game Clawd vs Zombi dengan soalan matematik, game lari ala Temple Run yang kena jawab soalan untuk teruskan, dan kuiz sejarah Malaysia

Murid lebih semangat sebab rasa macam main game, bukan buat latihan

Nak cuba dulu, demo percuma kat sini:
demoprompt.edugamelabs.com
```

**Bagian 4**
```text
Versi penuh ada lebih banyak jenis game dan app, galeri prompt siap guna, dan panduan langkah demi langkah sampai boleh jual hasil sendiri

lptoolsmy.edugamelabs.com

Komen "PROMPT" kalau nak saya terangkan lebih lanjut
```

---

## 2026-11-17 14:26 UTC · threads @auzan_hasfi · text

```text
Cikgu, saya nak share satu app yang saya guna hari-hari untuk bina bahan PdP

Dulu nak buat satu game kuiz pun boleh makan masa seminggu. Sekarang saya cuma pilih jenis game, isi topik, salin prompt, tampal dalam AI. Siap dalam beberapa minit.

Tak perlu pandai coding pun!

Saya letak cara guna dan contoh kat bawah 👇
```

**Bagian 2**
```text
Nama app ni Prompt Generator

Cikgu pilih jenis game atau app, pilih subjek dan tahun, lepas tu app terus susun prompt lengkap untuk cikgu.

Prompt tu boleh guna kat Claude, ChatGPT, Gemini pun boleh

Nak cuba versi demo dulu:
demoprompt.edugamelabs.com
```

**Bagian 3**
```text
Macam ni contoh yang dah jadi

Game final boss matematik, game ala Mobile Legends dengan soalan, game lompat kira, semua dibina guna prompt dari app ni

Lepas siap, cikgu boleh guna dalam kelas, kongsi dengan murid, atau sell sebagai produk digital untuk jana pendapatan
```

**Bagian 4**
```text
Kalau cikgu nak versi penuh dengan semua jenis game, gallery prompt dan panduan step by step

lptoolsmy.edugamelabs.com

Ada soalan, tanya je kat ruangan komen. Saya balas satu-satu 🙏
```