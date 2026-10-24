# Prompt: Arena Clawd Pro — game MOBA matematik main seorang (gaya kertas & dakwat)

Buatkan satu fail HTML (HTML + CSS + JavaScript tulen, tanpa pustaka, tanpa imej luar; semua grafik dilukis dengan Canvas 2D) bertajuk **Arena Clawd Pro**: game MOBA pendidikan matematik untuk murid sekolah rendah Tahun 1–6. Pemain mengawal satu hero, musuhnya **hanya minion dan menara** (tiada hero musuh, tiada boss). Soalan matematik menjadi sebahagian daripada gameplay, bukan kuiz berasingan. Mesti selesa dimainkan di telefon (skrin sentuh, 390×844) dan desktop (papan kekunci).

## 1. Gaya visual
- Tema "kertas & dakwat": latar kertas `#efebe2`, kad `#faf8f2`, dakwat `#2e2620`, aksen oren `#d8714f`, emas `#e2a93b`, musuh biru dakwat `#2c3e6b`. Garisan tepi bergoyang seperti dilukis pen (titik garisan diberi sedikit rawak), lorekan goresan pen di dalam bentuk, tekstur butiran kertas.
- Fon Google: Source Serif 4 (tajuk), Geist (UI), Caveat (tulisan tangan, angka terapung, sepanduk), IBM Plex Mono (label kecil).
- Hero = "Clawd": badan kotak oren bergaris dakwat dengan 4 kaki kecil, 2 lengan, mata segi empat. Setiap hero ada warna dan aksesori sendiri (pedang pensel + jubah, perisai bulat + topi besi, busur + ikat kepala, topi ahli sihir + tongkat bintang, selendang gelap + belati, mahkota daun + tongkat hati).
- Musuh = "Si Comot": gumpalan dakwat biru bermata dua dengan hujung bawah bergerigi. Minion jauh membawa tongkat ungu, minion meriam membawa meriam, minion super lebih besar dan bermahkota.

## 2. Menu bertab (Bahasa Indonesia lalai + butang Bahasa Melayu)
- Semua teks melalui fungsi `L(id, ms)`; pilihan bahasa disimpan dalam localStorage.
- Kepala menu: kanvas pratonton peta mini yang bergerak, tajuk "Arena Clawd" + lencana PRO, satu ayat pengenalan, nota tulisan tangan "musuhnya hanya minion & menara".
- Tab **Main**: (1) pilih 6 hero (kad dengan gambar hero, peranan, 3 nama skill), (2) pilih spell (Kilas, Pulih, Hukuman, Pecut, Perisai), (3) mod arena 1 lorong / 3 lorong, (4) topik soalan (Campur, Tambah, Tolak, Darab, Bahagi) dan tahap (Mudah Tahun 1–2, Sederhana Tahun 3–4, Sukar Tahun 5–6), butang "Mula bertarung", skor terbaik, 4 kotak cara main. Simpan pilihan dalam localStorage.
- Tab **Belajar**: 4 kad konsep (tambah, tolak, darab, bahagi): maksud 1 ayat, contoh visual emoji, 3 langkah, contoh pengiraan (cth. 34 + 25 → 30 + 20 = 50, 4 + 5 = 9 → 59), petua, butang "Latihan 5 soalan".
- Tab **Latihan**: 10 soalan tanpa masa dan tanpa musuh; setiap jawapan salah menunjukkan jawapan betul + penerangan cara + butang Teruskan; ringkasan skor di akhir; butang "Ulang soalan yang salah".
- Tab **Kemajuan** (localStorage): bilangan main, menang, skor terbaik, ketepatan keseluruhan, bar ketepatan ikut topik, 8 soalan salah terakhir bersama penerangan, butang latih soalan yang salah dan padam kemajuan.

## 3. Peta dan mod
- Dunia 2000×2000, kamera mengikut hero, peta dilukis sekali ke kanvas berasingan. Pangkalan Clawd kiri bawah, Istana Comot kanan atas, sungai dakwat menyerong.
- **Mod 1 lorong**: satu lorong tengah menyerong; menara musuh tier 1/2/3 pada 60%/72%/86% lorong, menara kita pada 40%/28%/14%.
- **Mod 3 lorong**: lorong atas, tengah, bawah; musuh ada 2 menara di setiap lorong + 1 menara tier 3 di tengah (7 semuanya).
- Hutan: pokok dirawak (seed tetap) tetapi tidak menutup lorong, sungai, pangkalan, kem monster, semak, dan laluan kem → lorong.
- Kem monster hutan: Kelomang (pulih nyawa 35% + lari laju), Kumbang Merah (buff serangan membakar), Siput Biru (buff skill cepat sedia), Penyu Dakwat (perisai 40% + minion super).
- **Semak** (rumput tinggi): hero dalam semak tidak kelihatan oleh minion dan menara musuh sehingga 1,2 saat selepas dia menyerang; dalam semak hero tidak menyerang secara automatik.

## 4. Menara, teras dan rantai perisai
- Menara menembak minion lawan dahulu; menara musuh hanya menembak hero jika tiada minion.
- Tier 2 kebal sehingga tier 1 di lorong yang sama runtuh; tier 3 kebal sehingga satu lorong bersih; **Inti Istana Comot** kebal sehingga tier 3 runtuh. Bangunan kebal kelihatan berkubah biru.
- Menang = Inti Istana Comot musnah. Kalah = teras pangkalan kita musnah (peraturan perisai yang sama untuk pihak kita).

## 5. Minion
- Gelombang setiap 28 saat di setiap lorong untuk kedua-dua pasukan: 3 minion dekat + 1 minion jauh; setiap gelombang ke-3 ditambah **minion meriam** (perlahan, jarak jauh, cedera 2,6× pada bangunan). **Minion super** (nyawa besar) datang daripada skill Penyembuh, Penyu Dakwat, dan buff kuiz Meriam Bonus.
- Minion berjalan mengikut titik lorong, berhenti dan menyerang musuh terdekat, kemudian meneruskan perjalanan. Musuh sedikit lebih kuat setiap gelombang. Menumpaskan minion memberi XP dan syiling.

## 6. Hero (6) — semua 3 skill, ultimate terbuka pada tahap 4, tahap maksimum 15
1. **Pahlawan** (pejuang): Terjah Pensel (meluru + memperlahankan), Pusing Puting (kawasan + pulih + kurang cedera), ult Hentakan Bumi (lompat, hentak, pengsan).
2. **Perisai** (kebal, nyawa 1500): Hentam Perisai (kawasan 150 di depan, pengsan 0,8 s), Tembok Kertas (perisai 30% + kebal 4 s, minion musuh dekat terpancing menyerangnya), ult Benteng Gergasi (gelang 270, pengsan 1,6 s).
3. **Pemanah** (jarak jauh): Panah Dakwat (menembusi barisan), Langkah Angin (lompat elak, 3 serangan seterusnya lebih kuat), ult Hujan Panah.
4. **Ahli Sihir**: Bola Bintang (meletup), Rantai Kilat (melompat ke 4 musuh), ult Hujan Bintang.
5. **Bayang** (pembunuh, pantas): Lompat Bayang (meluncur ke musuh terdekat; sedia semula jika musuh itu tumpas), Tikam Kembar (2 pukulan), ult Tarian Bayang (1,6 s tidak boleh diserang, memukul semua musuh radius 230 setiap 0,2 s).
6. **Penyembuh** (sokongan): Cahaya Pulih (pulih diri + minion kawan), Gelembung Lindung (minion kawan −50% cedera diterima, +50% serangan, 6 s), ult Panggil Pasukan (3 minion super, 5 jika soalan ultimate betul).
- Mata skill setiap naik tahap (butang + kuning di atas butang skill). Spell ada masa tunggu sendiri. Balik ke pangkalan (3 saat diam) dan pulih cepat di pangkalan.

## 7. Soalan matematik dalam gameplay (teras game)
- **Soalan Gempur**: butang ⚡ (kekunci G) muncul apabila hero dekat menara/teras musuh yang tidak kebal. Betul = pensel gergasi jatuh, −18% nyawa menara (teras −12%), sedia semula 20 saat; salah = sedia semula 12 saat.
- **Ultimate Matematik**: menekan ultimate memunculkan soalan satu tahap lebih sukar. Betul = ultimate 150%; salah = 70% (ultimate tetap keluar).
- **Soalan kilat** setiap 60–75 saat dengan hadiah rawak: Kuasa Pensel (+40% serangan), Kasut Ajaib (laju), Perisai Kertas (cedera ½), Pulih Penuh, Peti Syiling (+200), Meriam Bonus.
- **Soalan ketika tumbang**: betul = terus bangkit di pangkalan.
- **Kombo**: 3 jawapan betul berturut-turut = Letupan Kombo (letupan kawasan 280 + 150 syiling). Kombo dipaparkan pada HUD sebagai 3 bulatan.
- Setiap jawapan betul: +40 XP dan +30 syiling. Game berhenti semasa soalan dipaparkan.
- **Tahap soalan naik setiap 5 tahap hero** (tier 0–2) dalam tahap yang dipilih: Mudah = tambah/tolak hingga 20 dengan gambar emoji, darab 2/5/10; Sederhana = 2 digit, darab 2–9, bahagi; Sukar = 3–4 digit, darab 2 digit, dan soalan nombor hilang (□ + 25 = 70).
- Pilihan jawapan 3–4 butang besar (pengecoh ±1, ±2, ±10). Kekunci 1–4 pada papan kekunci.
- **Salah = jangan dihukum keras**: paparkan jawapan betul + penerangan langkah (pecahkan puluh dan sa, tambah berulang untuk darab, "cari nombor yang didarab …" untuk bahagi, operasi songsang untuk nombor hilang) + baris "Semak dengan songsang", kemudian butang Teruskan.

## 8. HUD dan kawalan
- Peta mini kiri atas (menara, minion, monster, hero, kotak kamera), nama hero + tahap + bar XP, syiling + butang Kedai, info masa / menara runtuh / minion ditumpaskan, bulatan kombo, buff aktif, bar nyawa Inti Istana Comot apabila dekat, sepanduk tulisan tangan untuk peristiwa penting, angka cedera terapung.
- Telefon: joystick muncul di tempat jari menyentuh separuh kiri; kanan bawah butang SERANG besar, 3 skill (Q E R) melengkung, spell (F), balik (B), ⚡ Soalan Gempur. Bulatan gelap menunjukkan masa tunggu skill.
- Desktop: WASD/anak panah, J/Space serang, Q E R, F, G, B, I kedai, P jeda.
- Butang jeda dan bunyi di penjuru kanan atas; game jeda automatik apabila tab disembunyikan.

## 9. Kedai
- 8 item (maks 6 slot): Pedang Pensel +22 serangan, Kasut Lari +40 laju, Jaket Kertas +350 nyawa, Jam Pasir masa tunggu skill −15%, Tongkat Bintang skill +30%, Perisai Buku −15% cedera diterima, Daun Penawar pulih 12% daripada cedera diberi, Busur Laju +20% kelajuan serangan. Ditambah **Ramuan Nyawa** (90 syiling, terus +40% nyawa, tidak guna slot). Game berhenti semasa kedai dibuka.

## 10. Skrin akhir = laporan pembelajaran
- Cap MENANG/KALAH, bintang (menang; ≤1 kali tumbang; ketepatan ≥75%), statistik (soalan betul, ketepatan, kombo terpanjang, pensel gergasi, masa, menara runtuh, minion ditumpaskan, tahap), bar ketepatan ikut topik, senarai soalan salah + penerangan, butang Main semula, Latih soalan yang salah, Menu. Simpan skor terbaik dan kemajuan.

## 11. Bunyi dan kualiti
- Bunyi dijana dengan Web Audio (tanpa fail): tetakan, tembakan, letupan, naik tahap, syiling, betul, salah, muzik latar ringkas; butang senyap disimpan dalam localStorage.
- Sasaran 60 fps; hadkan bilangan zarah dan minion; skrin sentuh tanpa skrol tidak sengaja (`touch-action: none` pada kanvas); butang sekurang-kurangnya 44 px; hormati `prefers-reduced-motion` untuk animasi kertas.
- Sediakan cangkuk ujian `window.__game` (keadaan, info, langkah(saat), gerak, skill, beli, soalan, jawabUji(betul), lanjut, gempur, runtuh(n), hancurInti) supaya game boleh diuji secara automatik.
- Sebelum siap, mainkan sendiri pada saiz telefon dan desktop: menang, kalah, semua hero, kedua-dua mod, soalan betul dan salah, latihan, dan kemajuan mesti berjalan tanpa ralat di konsol.
