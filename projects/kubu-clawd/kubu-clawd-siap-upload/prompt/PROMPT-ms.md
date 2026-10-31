# Prompt lengkap: Kubu Clawd

> Salin keseluruhan teks di bawah ke AI coding agent (Claude, ChatGPT, Cursor, dll). Prompt ini menerangkan game sepenuhnya: rupa, data, angka keseimbangan, peta, rumus, AI pasukan, soalan matematik, teks antara muka dan cara mengujinya, supaya hasilnya sama dengan Kubu Clawd. Teks dalam game ialah Bahasa Indonesia (lalai) dan Bahasa Melayu melalui `L(id, ms)`.

---

## 0. Tugasan

Bina game web **Kubu Clawd**: game strategi kampung seperti Clash of Clans (versi ringkas) untuk belajar matematik bagi murid sekolah rendah Tahun 1–6. Pemain membina kampung milik Clawd, mengutip **emas** dan **dakwat ajaib**, melatih pasukan, kemudian menyerbu kampung **Si Comot**. Soalan matematik menjadi sebahagian daripada permainan: mempercepat bangunan, membuka peti, mengeluarkan mantra, dan menggandakan jarahan. Semua gambar dan nama dibuat sendiri (jangan guna aset atau nama watak Supercell).

Hasil akhir:
1. `game.html` — satu fail HTML + CSS + JavaScript tulen (ES5, IIFE `'use strict'`), **tanpa pustaka dan tanpa imej luar**. Semua grafik dilukis dengan Canvas 2D. Satu-satunya sumber luar ialah Google Fonts.
2. Folder `netlify/` sedia dimuat naik: `index.html` (game.html dibalut `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + meta og:title/og:description/og:image), `sampul.jpg` (960×600), `netlify.toml` (publish ".", pengepala `X-Content-Type-Options: nosniff` dan `X-Robots-Tag: noindex, nofollow`, `index.html` tanpa cache, ubah hala `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), dan zip folder itu.
3. Skrin penuh seperti game telefon: selesa di telefon menegak (390×844) dan desktop (1280×800).

---

## 1. Gaya visual "kertas & dakwat"

Token CSS:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --gold-dark #a87516
--tinta #9b5cc4  --tinta-dark #6b3a8f  --gem #3fae7f  --enemy #2c3e6b  --danger #d9534a
```
Fon Google: **Source Serif 4** (tajuk), **Geist** (UI), **Caveat** (tulisan tangan: angka terapung, sepanduk), **IBM Plex Mono** (label kecil huruf besar).

Alat dakwat (wajib): `hsh(n)` rawak berbenih; `inkCircle` bulatan bergoyang; `scratch` lorekan goresan pen di dalam bentuk; `star4` bintang garisan; `wobRect`; pattern butiran kertas 128×128. Semua bangunan bergaris dakwat 1,4–1,5 px.

Watak:
- **Clawd** (`drawClawd`): badan kotak oren bergaris dakwat, 4 kaki kecil yang berayun ketika berlari, 2 lengan, mata segi empat. Varian: pedang pensel + jubah merah (Penebas), busur + ikat kepala (Pemanah), selendang gelap hijau + uncang (Pencuri), topi besi + perisai bulat + mahkota, besar (Gergasi), Clawd kelabu memegang bom berkelip (Pemecah Tembok), topi besi kuning + tukul (tukang).
- **Si Comot**: gumpalan dakwat biru bermata dua (pemanah di menara musuh).

Bangunan musuh menggunakan bumbung/bendera biru `#3d5288`, bangunan kita oren/merah.

---

## 2. Unjuran isometrik dan kamera

- Grid **36×36 petak**. Kawasan bina petak 2–33 (`LO=2`, `HI=34`); 2 petak tepi untuk menurunkan pasukan.
- Unjuran: `P(x,y) = ((x−y)×32, (x+y)×16)` (petak 64×32 px). Songsangnya `unP`.
- Tinggi bangunan didarab `HM = 1,35` dalam fungsi `up(p,h)` supaya bangunan nampak gagah.
- Tanah dilukis sekali ke kanvas berasingan: hijau `#c9d9a1` (musuh `#c4cf9f`) berpetak catur samar, 5000 goresan rumput, 70 bunga kecil, tepi berlian bergaris dakwat tebal, garisan putus-putus sempadan kawasan bina, 150 pokok hutan di luar berlian.
- Kamera: seret 1 jari, cubit 2 jari dan roda tetikus untuk zum (ke arah kursor), butang + dan −. Zum awal = `max(zumMinimum × 1,9; telefon 0,62 / desktop 0,8)`.
- Susunan lukisan mengikut kedalaman `x + y + saiz`.

---

## 3. Bangunan (`cost/time/hp[i]` = kos, masa (saat), nyawa untuk tahap i+1)

| id | Nama (ID / MS) | Saiz | Bayar | Kos | Masa | Nyawa | Lain |
|---|---|---|---|---|---|---|---|
| balai | Balai Desa / Dewan Kampung | 4 | emas | 0, 1000, 3000, 8000, 20000 | 0, 30, 90, 180, 300 | 450, 1600, 1850, 2100, 2400 | simpan 1000/1500/2500/4000/6000 setiap sumber; maks Thp 5 |
| tambang | Tambang Emas / Lombong Emas | 3 | dakwat | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | hasil 60/120/180 seminit, bekas 500/1000/1500 |
| pompa | Pompa Tinta / Pam Dakwat | 3 | emas | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | sama seperti lombong |
| gudangE | Gudang Emas / Stor Emas | 3 | dakwat | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | kapasiti 1500/3000/6000 |
| gudangT | Gudang Tinta / Stor Dakwat | 3 | emas | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | kapasiti 1500/3000/6000 |
| pondok | Pondok Tukang | 2 | permata | 250 | 0 | 250 | 1 tukang; maks Thp 1 |
| barak | Barak / Berek | 3 | dakwat | 200, 800, 2000 | 10, 60, 120 | 250, 290, 330 | barisan 20/25/30 |
| kemah | Kemah Pasukan / Khemah Pasukan | 4 | dakwat | 250, 1000, 2500 | 15, 60, 150 | 250, 270, 290 | kapasiti pasukan 20/30/40 |
| meriam | Meriam | 3 | emas | 250, 1000, 3000 | 10, 60, 150 | 420, 470, 520 | dps 9/11/15, jarak 9, sela 0,8 s |
| menara | Menara Pemanah | 3 | emas | 1000, 2000, 4000 | 20, 90, 180 | 380, 420, 460 | dps 11/15/19, jarak 10, sela 1 s |
| mortir | Mortir / Mortar | 3 | emas | 3000, 6000, 10000 | 60, 150, 240 | 400, 450, 500 | cedera 20/25/30 kawasan 1,5, jarak 4–11, sela 5 s |
| tembok | Tembok | 1 | emas | 50, 200, 600 | 0 | 300, 500, 700 | warna kayu/batu/emas |
| bom | Bom | 1 | emas | 400, 1000, 1500 | 0, 10, 20 | – | perangkap tersembunyi, cedera 20/24/29 kawasan 1,5 |

Tahap bangunan maksimum 3, tetapi tahap L ≥ 2 memerlukan Dewan Kampung ≥ L.

Had bilangan mengikut tahap Dewan Kampung (Thp 1→5): tambang 1,2,3,4,5 · pompa 1,2,3,4,5 · gudangE 1,1,2,2,2 · gudangT 1,1,2,2,2 · pondok 2,3,3,4,4 · barak 1,1,2,2,3 · kemah 1,1,2,2,3 · meriam 1,2,2,3,3 · menara 0,1,1,2,3 · mortir 0,0,1,1,2 · tembok 0,25,50,75,100 · bom 0,2,2,4,4.

Lukisan setiap bangunan (kotak isometrik `rbox` + hiasan, tapak rumput lebih gelap):
- **Dewan Kampung**: kotak krim tinggi 26+4×Thp, bumbung limas merah (Thp 5 ungu; musuh biru) berlorek, pintu kayu, tingkap, bendera emas di puncak.
- **Lombong**: tapak coklat, rangka kayu A dengan roda berpusing, timbunan syiling emas.
- **Pam Dakwat**: tapak batu, tangki silinder berisi dakwat ungu berkilau, tuil pam bergoyang, gelembung naik.
- **Stor Emas**: peti kayu berjalur besi, timbunan syiling di atas mengikut isi stor.
- **Stor Dakwat**: tabung kaca jernih berisi dakwat ungu setinggi isi stor.
- **Berek**: rumah dengan bumbung pelana hijau (Thp 3 merah) dan tanda pedang bersilang.
- **Khemah**: tanah lapang berbentuk berlian, 10 batu melingkar, unggun api menyala, pasukan yang sedia berdiri melingkar.
- **Pondok Tukang**: rumah kecil bumbung coklat, tukang Clawd bertopi besi kuning berdiri di depan (hilang apabila semua tukang sibuk).
- **Meriam**: tapak batu bulat, laras tebal gelap berpusing menghadap sasaran, roda kayu.
- **Menara Pemanah**: 4 kaki kayu, pentas, Clawd pemanah di atas (musuh: Si Comot).
- **Mortar**: tapak bulat lebar, tabung pendek gelap menghadap sasaran.
- **Tembok**: blok kecil yang bersambung automatik ke tembok di kiri dan atasnya.
- **Tapak bina**: tanah krim + perancah kayu + tukang mengetuk + bar kemajuan + baki masa.

---

## 4. Kampung pemain

Keadaan awal: emas 750, dakwat 750, permata 50, trofi 0. Dewan Thp 1 (16,16), 2 pondok (13,16) & (20,18), lombong (12,20), pam (20,12), berek (16,22), khemah (21,21), dan 12 pokok/batu rawak di tepi.

- **Kapasiti** emas/dakwat = simpanan Dewan + jumlah kapasiti stor yang sudah siap.
- **Pengeluaran** lombong/pam berjalan terus, juga semasa game ditutup (dikira apabila dibuka semula, maks 8 jam). Gelembung 🪙/🧪 muncul di atas jika isi ≥ 15; ketik untuk mengutip. Jika stor penuh: toast "Stor penuh!".
- **Tukang** = bilangan pondok. Membina/menaik taraf menggunakan 1 tukang selama masanya. Percepat: 💎 = ceil(baki saat / 30) atau **✏️ Soalan: betul = −60 saat**.
- **Penghalang** pokok (bayar 100 dakwat, besar 200) dan batu (100 emas): dialihkan 5 saat, memberi 1–4 permata.
- **Peti Soalan**: muncul setiap 90 saat (maks 2) di petak kosong; ketik → soalan → betul = 3–6 permata atau 150×ThpDewan emas/dakwat.
- **Misi** (kad kiri atas, hadiah permata): kutip emas (10), bina Meriam (10), buka Peti Soalan (10), latih 10 pasukan (15), menang Kempen 1 (20), Dewan Thp 2 (25), pasang 10 tembok (20), 3 bintang (30), Dewan Thp 3 (40), takluk 5 kampung (50), Dewan Thp 5 (100).
- **Meletak bangunan**: dari Kedai muncul bayang bangunan di petak kosong terdekat; seret untuk mengalih; petak hijau = boleh, merah = tidak; butang ✓ dan ✕. Tembok: selepas ✓ terus sedia meletak tembok seterusnya di sebelahnya. Bangunan boleh dialih (Alih).
- Simpan automatik setiap 5 saat dalam localStorage `kubu-clawd-desa`.

Panel bangunan terpilih (bawah tengah): nama + LV, bar kemajuan, butang Info, Kutip, Latih, Naik taraf (kos atau sebab berkunci), Siapkan 💎, ✏️ Soalan −60 saat, Alih. Bangunan terpilih bergaris putih berdenyut; pertahanan memaparkan bulatan jarak.

---

## 5. Pasukan

| id | Nama (ID / MS) | Ruang | Nyawa | DPS | Jarak | Laju (petak/s) | Kos dakwat | Masa | Sasaran | Buka |
|---|---|---|---|---|---|---|---|---|---|---|
| penebas | Penebas | 1 | 45 | 8 | 0,75 | 1,6 | 25 | 4 s | bangunan terdekat | Dewan 1 |
| pemanah | Pemanah | 1 | 22 | 7 | 3,5 | 1,6 | 50 | 5 s | terdekat, dari jauh | Dewan 1 |
| pencuri | Pencuri | 1 | 25 | 11 (2× ke sumber) | 0,75 | 2,6 | 25 | 5 s | lombong, pam, stor, dewan | Dewan 2 |
| raksasa | Raksasa / Gergasi | 5 | 300 | 11 | 1,1 | 1,1 | 250 | 15 s | pertahanan sahaja | Dewan 3 |
| pembobol | Pembobol Tembok / Pemecah Tembok | 2 | 20 | 12 (40× ke tembok, kawasan 1,2) | 0,75 | 2,4 | 100 | 8 s | tembok terdekat, kemudian meletup | Dewan 3 |

- Latihan di **Berek**: barisan dengan kapasiti jumlah berek; masa berjalan × bilangan berek; pasukan siap masuk Khemah jika masih ada ruang. Ketik pasukan dalam barisan untuk membatalkan (dakwat dikembalikan). **✏️ Soalan: betul = 1 pasukan siap sekarang.**
- Jika sasaran utama habis, pasukan beralih ke bangunan apa saja.

---

## 6. Kampung Si Comot (penjana automatik)

`genVillage(level 1–10, seed, jarahanEmas, jarahanDakwat)` dengan rawak berbenih (mulberry32):
- Dewan musuh = `min(5, 1 + floor((level−1)/2))`. Tahap bangunan rawak sekitar `1 + floor((level−1)/3)`, dihadkan oleh tahap maksimum bangunannya.
- Dewan di (16,16). Teras: semua meriam, menara, mortar, stor mengikut had, diletak berlingkar radius 3,5–9 dengan jarak 1 petak.
- Tembok: `min(had, 20 + level×8)` ketul, membentuk gelang mengelilingi teras; jika tidak cukup, gelang rapat mengelilingi Dewan sahaja.
- Luar: lombong & pam (`min(had, 1 + floor(level/3))` pasang), berek, khemah, 2 pondok pada radius 10–16.
- Bom rawak di dalam kawasan teras.
- **Jarahan**: 50% di stor, 30% di lombong/pam, 20% di Dewan.
- **Kempen Comot** 10 kampung: Pondok Comot, Ladang Dakwat, Kubu Kayu, Kampung Berpagar, Lembah Meriam, Bukit Pemanah, Kota Mortar, Benteng Batu, Benteng Berganda, Istana Raja Comot. Jarahan awal `300 + i×350` setiap sumber, berkurang setiap kali diambil. Kampung seterusnya terbuka selepas kampung sebelumnya mendapat ≥ 1 bintang.
- **Cari Lawan**: bayar `20 × ThpDewan` emas, level `ThpDewan×2 − 1 ± 1`, jarahan rawak `(200 + level×300) × 0,6–1,2`. Butang **"Cari lagi"** sebelum menurunkan pasukan.

---

## 7. Pertempuran

- Masa **3:00**. Pilih kad pasukan di dulang bawah, kemudian ketik atau seret di peta (menahan jari menurunkan 1 pasukan setiap 0,14 s).
- **Zon merah**: petak yang diduduki bangunan atau tembok yang masih berdiri berserta 1 petak di sekelilingnya. Apabila kad pasukan dipilih, zon merah dipaparkan merah lutsinar bertepi merah; menurunkan di situ memunculkan toast dan zon berkelip.
- **Pencarian laluan Dijkstra** (8 arah, tidak boleh memotong sudut bangunan): bangunan lain tidak boleh dilalui; tembok boleh dilalui dengan kos +7 (Pemecah +1), bermaksud pasukan mesti **memukul tembok** dahulu jika tembok menghalang. Destinasi = petak kosong yang jaraknya ke kotak sasaran ≤ jarak + 0,45. Laluan dikira semula setiap 4 s dan setiap kali bangunan/tembok musnah.
- Serangan 1× sesaat (Marah: 1,2×). Pemanah menembak panah melengkung. Pemecah meletup (kawasan 1,2) kemudian mati.
- **Pertahanan**: meriam peluru (12 petak/s), menara panah (16 petak/s), mortar peluru melengkung 1,3 s yang meletup kawasan 1,5 dan tidak boleh menembak < 4 petak. Bom meletup 0,4 s selepas pasukan masuk radius 1,2.
- **Nyawa bangunan** dipaparkan apabila cedera; bangunan musnah menjadi runtuhan; jarahan keluar sedikit demi sedikit mengikut cedera.
- **Peratus** = bangunan bukan tembok bukan perangkap yang musnah. **Bintang**: ≥ 50% · Dewan musnah · 100%.
- Pertempuran tamat apabila masa habis, 100% musnah (0,8 s kemudian), butang Tamat, atau semua pasukan & mantra habis dan tiada pasukan hidup (1,5 s kemudian).
- **Mantra** (percuma setiap pertempuran: Kilat 1 (2 jika Dewan ≥ 4), Pulih 1, Marah 1 jika Dewan ≥ 2). Pilih kad mantra, ketik lokasi → muncul **soalan (lebih sukar 1 tahap)**: betul = 100%, salah = 50% (tetap keluar).
  - Kilat: 3 panahan (sela 0,22 s) dalam radius 2, setiap satu 140 × kekuatan ke bangunan dalam 1,3 petak.
  - Pulih: bulatan r 3 selama 8 s, +30 × kekuatan nyawa/saat.
  - Marah: bulatan r 3 selama 8 s, cedera × (1 + 0,6 × kekuatan) dan laju lebih pantas.
- HUD: jarahan diperoleh/tersedia (kiri atas), masa (tengah atas), bintang + peratus (kanan atas), dulang kad (bilangan, gambar pasukan), butang Tamat/Balik, petunjuk tulisan tangan.

**Keputusan**: cap MENANG/KALAH, 3 bintang besar, "N% musnah · nama kampung", emas & dakwat dijarah, trofi (menang `+8 + bintang×4 + floor(level/2)`, kalah −4 dan tidak di bawah 0), pasukan digunakan. **✏️ Soalan Bonus Jarahan**: betul = jarahan ×1,5 (sekali). Butang Balik: jarahan masuk stor (dihadkan kapasiti), pasukan yang digunakan hilang, bintang & baki jarahan kempen disimpan.

Liga daripada trofi: Kayu 0 · Gangsa 100 · Perak 300 · Emas 600 · Kristal 1000.

---

## 8. Soalan matematik

Guna penjana soalan yang sama dengan Arena Clawd Pro: `mkQ(topik, tahap, tier)`, tahap gabungan `lv = min(9, indeksTahap×3 + tier)`; jadual julat nombor tambah, tolak, darab, dan bahagi untuk lv 0–9; soalan nombor hilang (□) jika lv ≥ 8; 3 pilihan pada lv 0, selain itu 4 (pengecoh ±1, ±2, ±10, ±a/±b untuk darab, ±100/±20 jika jawapan ≥ 100); penerangan langkah (pecahkan puluh & sa, tambah berulang, "cari nombor yang didarab…", operasi songsang, baris "Semak dengan songsang").

- Tier asas = `min(2, floor((ThpDewan−1)/2))`; mantra dan bonus jarahan +1 (maks 3).
- Helaian soalan: tag, tajuk, kotak hadiah (ikon + teks), label "TOPIK · TAHAP · tahap N", visual emoji (jika ada), soalan besar, 3–4 butang besar (kekunci 1–4). Betul → konfeti, "Betul! 🎉", tutup 1,1 s. Salah → butang merah bergegar, jawapan betul hijau, "Jawapannya X. Tak apa, lihat caranya:" + kotak penerangan hijau + butang "Teruskan ▸". Pertempuran berhenti semasa soalan dipaparkan.
- Setiap jawapan direkod dalam localStorage `kubu-clawd-kemajuan` (betul/jumlah ikut topik + 8 soalan salah terakhir).

---

## 9. Antara muka

- **Skrin tajuk**: gambar kampung, tag "Kertas & dakwat · strategi kampung matematik", tajuk "Kubu Clawd", pengenalan, 4 kotak cara main (Bina, Kutip, Serang, Soalan), butang bahasa, butang "Mula bermain ▸" / "Sambung kampung aku ▸", nota "Diilhamkan daripada game strategi kampung seperti Clash of Clans. Semua gambar dan nama dibuat sendiri."
- **HUD kampung**: kiri atas = lencana Thp Dewan + trofi + liga, tukang bebas/jumlah + kerja seterusnya, kad misi (butang "Ambil N 💎"). Kanan atas = bar emas, dakwat (terisi mengikut kapasiti, "maks N"), permata. Kiri bawah = butang merah besar "⚔ Serang!" + bilangan pasukan. Kanan bawah = Pasukan (lencana barisan), Kedai, Buku. Kanan tengah = +, −, 🔊.
- **Kedai**: tab Ekonomi (lombong, pam, stor emas, stor dakwat, pondok), Pertahanan (meriam, menara, mortar, tembok, bom), Pasukan (berek, khemah); kad dengan gambar bangunan mini, kos, masa, bilangan/had, "Perlu Dewan Kampung Thp N".
- **Pasukan**: kapasiti, pasukan sedia (cip bergambar), barisan (ketik untuk batal), butang ✏️ soalan, kad latih (kos, masa, ruang, nyawa, penerangan, berkunci).
- **Serang**: senarai 10 kampung kempen (bintang, baki jarahan, mangga) + butang "🔍 Cari lawan · 🪙 kos".
- **Buku**: tab Belajar (4 kad konsep bertema kampung, cth. "12 tembok × 50 emas"), Latihan (10 soalan tanpa tekanan + ulang soalan salah), Kemajuan (statistik, bar ketepatan ikut topik, soalan salah + penerangan), Tetapan (topik, tahap, bahasa, "Mula kampung baharu" dengan pengesahan dalam halaman).
- Bahasa Indonesia (lalai) dan Melayu melalui `L(id, ms)`, disimpan dalam `kubu-clawd-lang`. Bunyi Web Audio (tanpa fail); muzik semasa bertempur; senyap disimpan dalam `kubu-clawd-mute`.

---

## 10. Cangkuk ujian `window.__game`

`keadaan` (judul/desa/tempur/hasil/soal), `info`, `tempur`, `soalIni`, `langkah(saat)`, `maju(saat)` (memajukan jam kampung), `emas(n)`, `tinta(n)`, `permata(n)`, `taruh(jenis,x,y)`, `selesai()`, `pilih(jenis)`, `tingkatkan(jenis)`, `latih(jenis,n)`, `pasukanInstan(jenis,n)`, `serang(i)`, `cari()`, `turun(jenis,x,y,n)`, `bolehTurun(x,y)`, `mantra(jenis,x,y)`, `jawabUji(betul)`, `lanjut()`, `akhiri()`, `pulang()`, `peti()`, `kumpul()`, `kamera(x,y,zum)`.

---

## 11. Senarai semak sebelum siap

Uji pada **390×844** dan **1280×800** tanpa ralat konsol:
1. Skrin tajuk, kampung awal, gelembung kutipan, misi boleh diambil.
2. Kedai → letak → ✓, tukang bekerja, percepat dengan soalan.
3. Latih pasukan, khemah penuh menghentikan latihan.
4. Peti Soalan betul dan salah (penerangan + Teruskan).
5. Zon merah menolak pasukan; pasukan memukul tembok jika terhalang; tiada pasukan tersekat.
6. Kesepuluh kampung kempen boleh dimainkan hingga tamat; bintang, peratus, jarahan, trofi betul.
7. Mantra dengan soalan, bonus jarahan, balik membawa jarahan.
8. Bahasa Melayu, Buku, simpanan kekal selepas halaman dimuat semula.
9. Bina folder `netlify/` + zip, jalankan `python3 -m http.server` di dalamnya dan buka `http://localhost:8000/`.
