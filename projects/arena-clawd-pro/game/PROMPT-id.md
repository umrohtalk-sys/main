# Prompt: Arena Clawd Pro — game MOBA matematika main sendiri (gaya kertas & tinta)

Buatkan satu file HTML (HTML + CSS + JavaScript murni, tanpa library, tanpa gambar luar; semua grafis digambar di Canvas 2D) berjudul **Arena Clawd Pro**: game MOBA edukasi matematika untuk anak SD kelas 1–6. Pemain mengendalikan satu hero, musuhnya **hanya minion dan menara** (tanpa hero musuh, tanpa boss). Soal matematika menjadi bagian dari gameplay, bukan kuis terpisah. Harus enak dimainkan di HP (layar sentuh, 390×844) dan desktop (keyboard).

## 1. Gaya visual
- Tema "kertas & tinta": latar kertas `#efebe2`, kartu `#faf8f2`, tinta `#2e2620`, aksen oranye `#d8714f`, emas `#e2a93b`, musuh biru tinta `#2c3e6b`. Garis tepi bergoyang seperti digambar pena (titik-titik garis diberi sedikit acak), arsiran goresan pena di dalam bentuk, tekstur butiran kertas.
- Font Google: Source Serif 4 (judul), Geist (UI), Caveat (tulisan tangan, angka melayang, spanduk), IBM Plex Mono (label kecil).
- Hero = "Clawd": badan kotak oranye bergaris tinta dengan 4 kaki kecil, 2 lengan, mata persegi. Setiap hero punya warna dan aksesori sendiri (pedang pensil + jubah, perisai bulat + helm, busur + ikat kepala, topi penyihir + tongkat bintang, syal gelap + belati, mahkota daun + tongkat hati).
- Musuh = "Si Comot": gumpalan tinta biru bermata dua dengan ujung bawah bergerigi. Minion jauh membawa tongkat ungu, minion meriam membawa meriam, minion super lebih besar dan bermahkota.

## 2. Menu bertab (bahasa Indonesia lalai + tombol bahasa Melayu)
- Semua teks lewat fungsi `L(id, ms)`; pilihan bahasa disimpan di localStorage.
- Kepala menu: kanvas pratinjau peta mini yang bergerak, judul "Arena Clawd" + lencana PRO, satu kalimat pengantar, catatan tulisan tangan "musuhnya hanya minion & menara".
- Tab **Main**: (1) pilih 6 hero (kartu dengan gambar hero, peran, 3 nama skill), (2) pilih spell (Kilas, Pulih, Hukuman, Lari Kencang, Perisai), (3) mode arena 1 lorong / 3 lorong, (4) topik soal (Campuran, Penjumlahan, Pengurangan, Perkalian, Pembagian) dan tingkat (Mudah kelas 1–2, Sedang kelas 3–4, Sulit kelas 5–6), tombol "Mulai bertarung", skor terbaik, 4 kotak cara main. Simpan pilihan di localStorage.
- Tab **Belajar**: 4 kartu konsep (tambah, kurang, kali, bagi): pengertian 1 kalimat, contoh visual emoji, 3 langkah, contoh berhitung (mis. 34 + 25 → 30 + 20 = 50, 4 + 5 = 9 → 59), tips, tombol "Latihan 5 soal".
- Tab **Latihan**: 10 soal tanpa waktu dan tanpa musuh; tiap jawaban salah menampilkan jawaban benar + penjelasan cara + tombol Lanjut; ringkasan skor di akhir; tombol "Ulangi soal yang salah".
- Tab **Kemajuan** (localStorage): jumlah main, menang, skor terbaik, akurasi total, bar akurasi per topik, 8 soal salah terakhir beserta penjelasannya, tombol latihan soal yang salah dan hapus kemajuan.

## 3. Peta dan mode
- Dunia 2000×2000, kamera mengikuti hero, peta dilukis sekali ke kanvas terpisah. Markas Clawd kiri bawah, Istana Comot kanan atas, sungai tinta diagonal.
- **Mode 1 lorong**: satu lorong tengah diagonal; menara musuh tier 1/2/3 di 60%/72%/86% lorong, menara kita di 40%/28%/14%.
- **Mode 3 lorong**: lorong atas, tengah, bawah; musuh punya 2 menara di tiap lorong + 1 menara tier 3 di tengah (7 total).
- Hutan: pohon diacak (seed tetap) tetapi tidak menutup lorong, sungai, markas, kamp monster, semak, dan jalur kamp → lorong.
- Kamp monster hutan: Kelomang (pulih nyawa 35% + lari cepat), Kumbang Merah (buff serangan membakar), Siput Biru (buff skill cepat siap), Penyu Tinta (perisai 40% + minion super).
- **Semak** (rumput tinggi): hero di dalam semak tidak terlihat minion dan menara musuh sampai 1,2 detik setelah ia menyerang; di semak hero tidak menyerang otomatis.

## 4. Menara, inti, dan rantai perisai
- Menara menembak minion lawan dulu; menara musuh baru menembak hero bila tidak ada minion.
- Tier 2 kebal sampai tier 1 di lorong yang sama roboh; tier 3 kebal sampai satu lorong bersih; **Inti Istana Comot** kebal sampai tier 3 roboh. Bangunan kebal tampak berkubah biru.
- Menang = Inti Istana Comot hancur. Kalah = inti markas kita hancur (aturan perisai yang sama berlaku untuk pihak kita).

## 5. Minion
- Gelombang tiap 28 detik di setiap lorong untuk dua tim: 3 minion dekat + 1 minion jauh; tiap gelombang ke-3 ditambah **minion meriam** (lambat, jarak jauh, damage 2,6× ke bangunan). **Minion super** (nyawa besar) datang dari skill Penyembuh, Penyu Tinta, dan buff kuis Meriam Bonus.
- Minion berjalan mengikuti titik lorong, berhenti dan menyerang musuh terdekat, lalu lanjut. Musuh sedikit lebih kuat tiap gelombang. Mengalahkan minion memberi XP dan koin.

## 6. Hero (6) — semua 3 skill, ultimate terbuka di level 4, level maks 15
1. **Pahlawan** (petarung): Terjang Pensil (melesat + memperlambat), Putar Gasing (area + pulih + kurangi damage), ult Hentakan Bumi (lompat, hentak, pingsan).
2. **Perisai** (tank, nyawa 1500): Hantam Perisai (area 150 di depan, pingsan 0,8 s), Tembok Kertas (perisai 30% + kebal 4 s, minion musuh dekat terpancing menyerangnya), ult Benteng Raksasa (cincin 270, pingsan 1,6 s).
3. **Pemanah** (jarak jauh): Panah Tinta (menembus barisan), Langkah Angin (lompat menghindar, 3 serangan berikutnya lebih kuat), ult Hujan Panah.
4. **Penyihir**: Bola Bintang (meledak), Rantai Petir (melompat ke 4 musuh), ult Hujan Bintang.
5. **Bayangan** (assassin, cepat): Lompat Bayangan (meluncur ke musuh terdekat; siap lagi bila musuh itu kalah), Tusuk Kembar (2 pukulan), ult Tarian Bayangan (1,6 s tak bisa diserang, memukul semua musuh radius 230 tiap 0,2 s).
6. **Penyembuh** (support): Cahaya Pulih (pulihkan diri + minion kawan), Gelembung Lindung (minion kawan −50% damage diterima, +50% serangan, 6 s), ult Panggil Pasukan (3 minion super, 5 bila soal ultimatenya benar).
- Poin skill tiap naik level (tombol + kuning di atas tombol skill). Spell punya jeda sendiri. Pulang ke markas (3 detik diam) dan pulih cepat di markas.

## 7. Soal matematika di dalam gameplay (inti game)
- **Soal Gempur**: tombol ⚡ (tombol G) muncul bila hero dekat menara/inti musuh yang tidak kebal. Benar = pensil raksasa jatuh, −18% nyawa menara (inti −12%), siap lagi 20 detik; salah = siap lagi 12 detik.
- **Ultimate Matematika**: menekan ultimate memunculkan soal satu tingkat lebih sulit. Benar = ultimate 150%; salah = 70% (ultimate tetap keluar).
- **Soal kilat** tiap 60–75 detik dengan hadiah acak: Kuasa Pensil (+40% serangan), Sepatu Ajaib (cepat), Perisai Kertas (damage ½), Pulih Penuh, Peti Koin (+200), Meriam Bonus.
- **Soal saat tumbang**: benar = langsung bangkit di markas.
- **Kombo**: 3 jawaban benar beruntun = Ledakan Kombo (ledakan area 280 + 150 koin). Kombo tampil di HUD sebagai 3 bulatan.
- Setiap jawaban benar: +40 XP dan +30 koin. Game berhenti selama soal tampil.
- **Tingkat soal naik tiap 5 level hero** (tier 0–2) di dalam tingkat yang dipilih: Mudah = penjumlahan/pengurangan sampai 20 dengan gambar emoji, perkalian 2/5/10; Sedang = 2 angka, perkalian 2–9, pembagian; Sulit = 3–4 angka, perkalian 2 angka, dan soal angka hilang (□ + 25 = 70).
- Pilihan jawaban 3–4 tombol besar (pengecoh ±1, ±2, ±10). Tombol 1–4 di keyboard.
- **Salah = jangan dihukum keras**: tampilkan jawaban benar + penjelasan langkah (pecah puluhan dan satuan, penjumlahan berulang untuk perkalian, "cari angka yang dikali …" untuk pembagian, operasi kebalikan untuk angka hilang) + baris "Cek dengan kebalikan", lalu tombol Lanjut.

## 8. HUD dan kontrol
- Peta mini kiri atas (menara, minion, monster, hero, kotak kamera), nama hero + level + bar XP, koin + tombol Toko, info waktu / menara roboh / minion dikalahkan, bulatan kombo, buff aktif, bar nyawa Inti Istana Comot saat dekat, spanduk tulisan tangan untuk kejadian penting, angka damage melayang.
- HP: joystick muncul di tempat jari menyentuh separuh kiri; kanan bawah tombol SERANG besar, 3 skill (Q E R) melingkar, spell (F), pulang (B), ⚡ Soal Gempur. Lingkaran gelap menunjukkan jeda skill.
- Desktop: WASD/panah, J/Spasi serang, Q E R, F, G, B, I toko, P jeda.
- Tombol jeda dan suara di pojok kanan atas; game otomatis jeda saat tab disembunyikan.

## 9. Toko
- 8 item (maks 6 slot): Pedang Pensil +22 serangan, Sepatu Lari +40 kecepatan, Jaket Kertas +350 nyawa, Jam Pasir skill −15% jeda, Tongkat Bintang skill +30%, Perisai Buku −15% damage diterima, Daun Penawar pulih 12% dari damage, Busur Cepat +20% kecepatan serang. Ditambah **Ramuan Nyawa** (90 koin, langsung +40% nyawa, tidak memakai slot). Game berhenti saat toko dibuka.

## 10. Layar akhir = laporan belajar
- Cap MENANG/KALAH, bintang (menang; ≤1 kali tumbang; akurasi ≥75%), statistik (soal benar, akurasi, kombo terpanjang, pensil raksasa, waktu, menara roboh, minion dikalahkan, level), bar akurasi per topik, daftar soal yang salah + penjelasan, tombol Main lagi, Latihan soal yang salah, Menu. Simpan skor terbaik dan kemajuan.

## 11. Suara dan kualitas
- Bunyi dibuat dengan Web Audio (tanpa file): tebasan, tembakan, ledakan, naik level, koin, benar, salah, musik latar sederhana; tombol bisu disimpan di localStorage.
- Target 60 fps; batasi jumlah partikel dan minion; layar sentuh tanpa scroll tidak sengaja (`touch-action: none` di kanvas); tombol minimal 44 px; hormati `prefers-reduced-motion` untuk animasi kertas.
- Sediakan kait uji `window.__game` (keadaan, info, langkah(detik), gerak, skill, beli, soalan, jawabUji(benar), lanjut, gempur, runtuh(n), hancurInti) supaya game bisa diuji otomatis.
- Sebelum selesai, mainkan sendiri di ukuran HP dan desktop: menang, kalah, semua hero, kedua mode, soal benar dan salah, latihan, dan kemajuan harus berjalan tanpa error di konsol.
