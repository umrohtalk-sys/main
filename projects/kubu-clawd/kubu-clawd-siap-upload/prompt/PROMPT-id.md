# Prompt lengkap: Kubu Clawd

> Salin seluruh teks di bawah ini ke AI coding agent (Claude, ChatGPT, Cursor, dll). Prompt ini menjelaskan game secara utuh: tampilan, data, angka keseimbangan, peta, rumus, AI pasukan, soal matematika, teks antarmuka, dan cara mengujinya, supaya hasilnya sama dengan Kubu Clawd.

---

## 0. Tugas

Buatkan game web **Kubu Clawd**: game strategi desa seperti Clash of Clans (versi sederhana) untuk belajar matematika anak SD kelas 1–6. Pemain membangun desa milik Clawd, mengumpulkan **emas** dan **tinta ajaib**, melatih pasukan, lalu menyerbu kampung **Si Comot**. Soal matematika menjadi bagian dari permainan: mempercepat bangunan, membuka peti, mengeluarkan mantra, dan menggandakan jarahan. Semua gambar dan nama dibuat sendiri (jangan memakai aset atau nama karakter Supercell).

Hasil akhir:
1. `game.html` — satu file HTML + CSS + JavaScript murni (ES5, IIFE `'use strict'`), **tanpa library dan tanpa gambar luar**. Semua grafis digambar dengan Canvas 2D. Satu-satunya sumber luar adalah Google Fonts.
2. Folder `netlify/` siap unggah: `index.html` (game.html dibungkus `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + meta og:title/og:description/og:image), `sampul.jpg` (960×600), `netlify.toml` (publish ".", header `X-Content-Type-Options: nosniff` dan `X-Robots-Tag: noindex, nofollow`, `index.html` tanpa cache, redirect `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), dan zip folder itu.
3. Layar penuh seperti game HP: nyaman di HP portrait (390×844) dan desktop (1280×800).

---

## 1. Gaya visual "kertas & tinta"

Token CSS:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --gold-dark #a87516
--tinta #9b5cc4  --tinta-dark #6b3a8f  --gem #3fae7f  --enemy #2c3e6b  --danger #d9534a
```
Font Google: **Source Serif 4** (judul), **Geist** (UI), **Caveat** (tulisan tangan: angka melayang, spanduk), **IBM Plex Mono** (label kecil huruf besar).

Alat tinta (wajib): `hsh(n)` acak berbenih; `inkCircle` lingkaran bergoyang; `scratch` arsiran goresan pena di dalam bentuk; `star4` bintang garis; `wobRect`; pattern butiran kertas 128×128. Semua bangunan bergaris tinta 1,4–1,5 px.

Karakter:
- **Clawd** (`drawClawd`): badan kotak oranye bergaris tinta, 4 kaki kecil yang berayun saat berlari, 2 lengan, mata persegi. Varian: pedang pensil + jubah merah (Penebas), busur + ikat kepala (Pemanah), syal gelap hijau + kantong (Pencuri), helm + perisai bulat + mahkota, besar (Raksasa), Clawd abu memegang bom berkedip (Pembobol Tembok), helm kuning + palu (tukang).
- **Si Comot**: gumpalan tinta biru bermata dua (pemanah di menara musuh).

Bangunan musuh memakai atap/bendera biru `#3d5288`, bangunan kita oranye/merah.

---

## 2. Proyeksi isometrik dan kamera

- Grid **36×36 petak**. Area bangun petak 2–33 (`LO=2`, `HI=34`); 2 petak pinggir untuk menurunkan pasukan.
- Proyeksi: `P(x,y) = ((x−y)×32, (x+y)×16)` (petak 64×32 px). Kebalikannya `unP`.
- Tinggi bangunan dikali `HM = 1,35` di fungsi `up(p,h)` supaya bangunan tampak gagah.
- Tanah dilukis sekali ke kanvas terpisah: hijau `#c9d9a1` (musuh `#c4cf9f`) berpetak catur samar, 5000 goresan rumput, 70 bunga kecil, tepi berlian bergaris tinta tebal, garis putus-putus batas area bangun, 150 pohon hutan di luar berlian.
- Kamera: geser 1 jari, cubit 2 jari dan roda mouse untuk zoom (ke arah kursor), tombol + dan −. Zoom awal = `max(zoomMinimal × 1,9; HP 0,62 / desktop 0,8)`.
- Urutan gambar berdasarkan kedalaman `x + y + ukuran`.

---

## 3. Bangunan (`cost/time/hp[i]` = biaya, waktu (detik), nyawa untuk level i+1)

| id | Nama (ID / MS) | Ukuran | Bayar | Biaya | Waktu | Nyawa | Lain |
|---|---|---|---|---|---|---|---|
| balai | Balai Desa / Dewan Kampung | 4 | emas | 0, 1000, 3000, 8000, 20000 | 0, 30, 90, 180, 300 | 450, 1600, 1850, 2100, 2400 | simpan 1000/1500/2500/4000/6000 tiap sumber; maks Lv 5 |
| tambang | Tambang Emas / Lombong Emas | 3 | tinta | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | hasil 60/120/180 per menit, wadah 500/1000/1500 |
| pompa | Pompa Tinta / Pam Dakwat | 3 | emas | 150, 300, 700 | 10, 40, 90 | 400, 440, 480 | sama seperti tambang |
| gudangE | Gudang Emas / Stor Emas | 3 | tinta | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | kapasitas 1500/3000/6000 |
| gudangT | Gudang Tinta / Stor Dakwat | 3 | emas | 300, 750, 1500 | 15, 60, 120 | 400, 600, 800 | kapasitas 1500/3000/6000 |
| pondok | Pondok Tukang | 2 | permata | 250 | 0 | 250 | 1 tukang; maks Lv 1 |
| barak | Barak / Berek | 3 | tinta | 200, 800, 2000 | 10, 60, 120 | 250, 290, 330 | antrean 20/25/30 |
| kemah | Kemah Pasukan / Khemah Pasukan | 4 | tinta | 250, 1000, 2500 | 15, 60, 150 | 250, 270, 290 | kapasitas pasukan 20/30/40 |
| meriam | Meriam | 3 | emas | 250, 1000, 3000 | 10, 60, 150 | 420, 470, 520 | dps 9/11/15, jangkauan 9, jeda 0,8 s |
| menara | Menara Pemanah | 3 | emas | 1000, 2000, 4000 | 20, 90, 180 | 380, 420, 460 | dps 11/15/19, jangkauan 10, jeda 1 s |
| mortir | Mortir / Mortar | 3 | emas | 3000, 6000, 10000 | 60, 150, 240 | 400, 450, 500 | damage 20/25/30 area 1,5, jangkauan 4–11, jeda 5 s |
| tembok | Tembok | 1 | emas | 50, 200, 600 | 0 | 300, 500, 700 | warna kayu/batu/emas |
| bom | Bom | 1 | emas | 400, 1000, 1500 | 0, 10, 20 | – | jebakan tersembunyi, damage 20/24/29 area 1,5 |

Level bangunan maksimal 3, tapi level L ≥ 2 butuh Balai Desa ≥ L.

Batas jumlah per level Balai Desa (Lv 1→5): tambang 1,2,3,4,5 · pompa 1,2,3,4,5 · gudangE 1,1,2,2,2 · gudangT 1,1,2,2,2 · pondok 2,3,3,4,4 · barak 1,1,2,2,3 · kemah 1,1,2,2,3 · meriam 1,2,2,3,3 · menara 0,1,1,2,3 · mortir 0,0,1,1,2 · tembok 0,25,50,75,100 · bom 0,2,2,4,4.

Gambar tiap bangunan (kotak isometrik `rbox` + hiasan, alas rumput lebih gelap):
- **Balai Desa**: kotak krem tinggi 26+4×Lv, atap limas merah (Lv 5 ungu; musuh biru) berarsir, pintu kayu, jendela, bendera emas di puncak.
- **Tambang**: alas cokelat, kerangka kayu A dengan roda berputar, tumpukan koin emas.
- **Pompa Tinta**: alas batu, tabung silinder berisi tinta ungu berkilau, tuas pompa bergoyang, gelembung naik.
- **Gudang Emas**: peti kayu berpita besi, tumpukan koin di atas sebanyak isi gudang.
- **Gudang Tinta**: tabung kaca bening berisi tinta ungu setinggi isi gudang.
- **Barak**: rumah dengan atap pelana hijau (Lv 3 merah) dan tanda pedang bersilang.
- **Kemah**: tanah lapang berbentuk berlian, 10 batu melingkar, api unggun menyala, pasukan yang siap berdiri melingkar.
- **Pondok Tukang**: rumah kecil atap cokelat, tukang Clawd berhelm kuning berdiri di depan (hilang saat semua tukang sibuk).
- **Meriam**: alas batu bundar, laras tebal gelap berputar menghadap sasaran, roda kayu.
- **Menara Pemanah**: 4 kaki kayu, panggung, Clawd pemanah di atas (musuh: Si Comot).
- **Mortir**: alas bundar lebar, tabung pendek gelap menghadap sasaran.
- **Tembok**: balok kecil yang tersambung otomatis ke tembok di kiri dan atasnya.
- **Situs bangun**: tanah krem + perancah kayu + tukang memalu + bar progres + sisa waktu.

---

## 4. Desa pemain

Keadaan awal: emas 750, tinta 750, permata 50, trofi 0. Balai Lv 1 (16,16), 2 pondok (13,16) & (20,18), tambang (12,20), pompa (20,12), barak (16,22), kemah (21,21), dan 12 pohon/batu acak di pinggir.

- **Kapasitas** emas/tinta = simpanan Balai + total kapasitas gudang yang sudah jadi.
- **Produksi** tambang/pompa jalan terus, juga saat game ditutup (dihitung saat dibuka lagi, maks 8 jam). Gelembung 🪙/🧪 muncul di atas bila isi ≥ 15; ketuk untuk memanen. Kalau gudang penuh: toast "Gudang penuh!".
- **Tukang** = jumlah pondok. Membangun/menaikkan level memakai 1 tukang selama waktunya. Percepat: 💎 = ceil(sisa detik / 30) atau **✏️ Soal: benar = −60 detik**.
- **Penghalang** pohon (bayar 100 tinta, besar 200) dan batu (100 emas): disingkirkan 5 detik, memberi 1–4 permata.
- **Peti Soal**: muncul tiap 90 detik (maks 2) di petak kosong; ketuk → soal → benar = 3–6 permata atau 150×LvBalai emas/tinta.
- **Misi** (kartu kiri atas, hadiah permata): kumpulkan emas (10), bangun Meriam (10), buka Peti Soal (10), latih 10 pasukan (15), menang Kampanye 1 (20), Balai Lv 2 (25), pasang 10 tembok (20), 3 bintang (30), Balai Lv 3 (40), taklukkan 5 kampung (50), Balai Lv 5 (100).
- **Menaruh bangunan**: dari Toko muncul bayangan bangunan di petak kosong terdekat; geser untuk memindah; petak hijau = boleh, merah = tidak; tombol ✓ dan ✕. Tembok: setelah ✓ langsung siap menaruh tembok berikutnya di sebelahnya. Bangunan bisa dipindah (Pindah).
- Simpan otomatis tiap 5 detik di localStorage `kubu-clawd-desa`.

Panel bangunan terpilih (bawah tengah): nama + LV, bar progres, tombol Info, Kumpulkan, Latih, Tingkatkan (biaya atau alasan terkunci), Selesaikan 💎, ✏️ Soal −60 detik, Pindah. Bangunan terpilih bergaris putih berdenyut; pertahanan menampilkan lingkaran jangkauan.

---

## 5. Pasukan

| id | Nama (ID / MS) | Tempat | Nyawa | DPS | Jangkauan | Laju (petak/s) | Biaya tinta | Waktu | Target | Buka |
|---|---|---|---|---|---|---|---|---|---|---|
| penebas | Penebas | 1 | 45 | 8 | 0,75 | 1,6 | 25 | 4 s | bangunan terdekat | Balai 1 |
| pemanah | Pemanah | 1 | 22 | 7 | 3,5 | 1,6 | 50 | 5 s | terdekat, dari jauh | Balai 1 |
| pencuri | Pencuri | 1 | 25 | 11 (2× ke sumber daya) | 0,75 | 2,6 | 25 | 5 s | tambang, pompa, gudang, balai | Balai 2 |
| raksasa | Raksasa / Gergasi | 5 | 300 | 11 | 1,1 | 1,1 | 250 | 15 s | pertahanan saja | Balai 3 |
| pembobol | Pembobol Tembok / Pemecah Tembok | 2 | 20 | 12 (40× ke tembok, area 1,2) | 0,75 | 2,4 | 100 | 8 s | tembok terdekat, lalu meledak | Balai 3 |

- Latihan di **Barak**: antrean dengan kapasitas total barak; waktu berjalan × jumlah barak; pasukan selesai masuk Kemah bila masih ada tempat. Ketuk pasukan di antrean untuk membatalkan (tinta kembali). **✏️ Soal: benar = 1 pasukan selesai sekarang.**
- Kalau target utama habis, pasukan beralih ke bangunan apa saja.

---

## 6. Kampung Si Comot (pembuat otomatis)

`genVillage(level 1–10, seed, lootEmas, lootTinta)` dengan acak berbenih (mulberry32):
- Balai musuh = `min(5, 1 + floor((level−1)/2))`. Level bangunan acak sekitar `1 + floor((level−1)/3)`, dibatasi oleh level maksimal bangunannya.
- Balai di (16,16). Inti: semua meriam, menara, mortir, gudang sesuai batas, diletakkan spiral radius 3,5–9 dengan jarak 1 petak.
- Tembok: `min(batas, 20 + level×8)` buah, membentuk cincin mengelilingi inti; kalau tidak cukup, cincin rapat mengelilingi Balai saja.
- Luar: tambang & pompa (`min(batas, 1 + floor(level/3))` pasang), barak, kemah, 2 pondok di radius 10–16.
- Bom acak di dalam area inti.
- **Jarahan**: 50% di gudang, 30% di tambang/pompa, 20% di Balai.
- **Kampanye Comot** 10 kampung: Pondok Comot, Ladang Tinta, Kubu Kayu, Desa Berpagar, Lembah Meriam, Bukit Pemanah, Kota Mortir, Benteng Batu, Benteng Ganda, Istana Raja Comot. Jarahan awal `300 + i×350` per sumber, berkurang setiap diambil. Kampung berikutnya terbuka setelah kampung sebelumnya dapat ≥ 1 bintang.
- **Cari Lawan**: bayar `20 × LvBalai` emas, level `LvBalai×2 − 1 ± 1`, jarahan acak `(200 + level×300) × 0,6–1,2`. Tombol **"Cari lagi"** sebelum menurunkan pasukan.

---

## 7. Pertempuran

- Waktu **3:00**. Pilih kartu pasukan di baki bawah, lalu ketuk atau geser di peta (menahan jari menurunkan 1 pasukan tiap 0,14 s).
- **Zona merah**: petak yang ditempati bangunan atau tembok yang masih berdiri beserta 1 petak di sekelilingnya. Saat kartu pasukan dipilih, zona merah tampil merah transparan bertepi merah; menurunkan di sana memunculkan toast dan zona berkedip.
- **Pencarian jalan Dijkstra** (8 arah, tidak boleh memotong sudut bangunan): bangunan lain tidak bisa dilewati; tembok boleh dilewati dengan biaya +7 (Pembobol +1), artinya pasukan harus **memukul tembok** dulu bila tembok menghalangi. Tujuan = petak kosong yang jaraknya ke kotak target ≤ jangkauan + 0,45. Jalan dihitung ulang tiap 4 s dan setiap ada bangunan/tembok hancur.
- Serangan 1× per detik (Amarah: 1,2×). Pemanah menembakkan panah melengkung. Pembobol meledak (area 1,2) lalu mati.
- **Pertahanan**: meriam peluru (12 petak/s), menara panah (16 petak/s), mortir peluru melengkung 1,3 s yang meledak area 1,5 dan tidak bisa menembak < 4 petak. Bom meledak 0,4 s setelah pasukan masuk radius 1,2.
- **Nyawa bangunan** tampil saat terluka; bangunan hancur menjadi puing; jarahan keluar sedikit demi sedikit sesuai damage.
- **Persentase** = bangunan non-tembok non-jebakan yang hancur. **Bintang**: ≥ 50% · Balai hancur · 100%.
- Pertempuran berakhir bila waktu habis, 100% hancur (0,8 s kemudian), tombol Akhiri, atau semua pasukan & mantra habis dan tidak ada pasukan hidup (1,5 s kemudian).
- **Mantra** (gratis tiap pertempuran: Petir 1 (2 bila Balai ≥ 4), Pulih 1, Amarah 1 bila Balai ≥ 2). Pilih kartu mantra, ketuk lokasi → muncul **soal (lebih sulit 1 tingkat)**: benar = 100%, salah = 50% (tetap keluar).
  - Petir: 3 sambaran (jeda 0,22 s) di radius 2, masing-masing 140 × kekuatan ke bangunan dalam 1,3 petak.
  - Pulih: lingkaran r 3 selama 8 s, +30 × kekuatan nyawa/detik.
  - Amarah: lingkaran r 3 selama 8 s, damage × (1 + 0,6 × kekuatan) dan laju lebih cepat.
- HUD: jarahan didapat/tersedia (kiri atas), waktu (tengah atas), bintang + persen (kanan atas), baki kartu (jumlah, gambar pasukan), tombol Akhiri/Pulang, petunjuk tulisan tangan.

**Hasil**: cap MENANG/KALAH, 3 bintang besar, "N% hancur · nama kampung", emas & tinta dijarah, trofi (menang `+8 + bintang×4 + floor(level/2)`, kalah −4 dan tidak di bawah 0), pasukan dipakai. **✏️ Soal Bonus Jarahan**: benar = jarahan ×1,5 (sekali). Tombol Pulang: jarahan masuk gudang (dibatasi kapasitas), pasukan yang dipakai hilang, bintang & sisa jarahan kampanye disimpan.

Liga dari trofi: Kayu 0 · Perunggu 100 · Perak 300 · Emas 600 · Kristal 1000.

---

## 8. Soal matematika

Pakai generator soal yang sama dengan Arena Clawd Pro: `mkQ(topik, tingkat, tier)`, level gabungan `lv = min(9, indexTingkat×3 + tier)`; tabel rentang angka penjumlahan, pengurangan, perkalian, dan pembagian per lv 0–9; soal angka hilang (□) bila lv ≥ 8; 3 pilihan di lv 0, selain itu 4 (pengecoh ±1, ±2, ±10, ±a/±b untuk perkalian, ±100/±20 bila jawaban ≥ 100); penjelasan langkah (pecah puluhan & satuan, penjumlahan berulang, "cari angka yang dikali…", operasi kebalikan, baris "Cek dengan kebalikan").

- Tier dasar = `min(2, floor((LvBalai−1)/2))`; mantra dan bonus jarahan +1 (maks 3).
- Lembar soal: tag, judul, kotak hadiah (ikon + teks), label "TOPIK · TINGKAT · tingkat N", visual emoji (bila ada), soal besar, 3–4 tombol besar (tombol 1–4 di keyboard). Benar → konfeti, "Benar! 🎉", tutup 1,1 s. Salah → tombol merah bergetar, jawaban benar hijau, "Jawabannya X. Tidak apa-apa, lihat caranya:" + kotak penjelasan hijau + tombol "Lanjut ▸". Pertempuran berhenti selama soal tampil.
- Setiap jawaban dicatat di localStorage `kubu-clawd-kemajuan` (benar/total per topik + 8 soal salah terakhir).

---

## 9. Antarmuka

- **Layar judul**: gambar desa, tag "Kertas & tinta · strategi desa matematika", judul "Kubu Clawd", pengantar, 4 kotak cara main (Bangun, Kumpulkan, Serang, Soal), tombol bahasa, tombol "Mulai bermain ▸" / "Lanjutkan desaku ▸", catatan "Terinspirasi dari game strategi desa seperti Clash of Clans. Semua gambar dan nama dibuat sendiri."
- **HUD desa**: kiri atas = lencana Lv Balai + trofi + liga, tukang bebas/total + pekerjaan berikutnya, kartu misi (tombol "Ambil N 💎"). Kanan atas = bar emas, tinta (terisi sesuai kapasitas, "maks N"), permata. Kiri bawah = tombol merah besar "⚔ Serang!" + jumlah pasukan. Kanan bawah = Pasukan (badge antrean), Toko, Buku. Kanan tengah = +, −, 🔊.
- **Toko**: tab Ekonomi (tambang, pompa, gudang emas, gudang tinta, pondok), Pertahanan (meriam, menara, mortir, tembok, bom), Pasukan (barak, kemah); kartu dengan gambar bangunan mini, biaya, waktu, jumlah/batas, "Butuh Balai Desa Lv N".
- **Pasukan**: kapasitas, pasukan siap (chip bergambar), antrean (ketuk untuk batal), tombol ✏️ soal, kartu latih (biaya, waktu, tempat, nyawa, deskripsi, terkunci).
- **Serang**: daftar 10 kampung kampanye (bintang, sisa jarahan, gembok) + tombol "🔍 Cari lawan · 🪙 biaya".
- **Buku**: tab Belajar (4 kartu konsep bertema desa, mis. "12 tembok × 50 emas"), Latihan (10 soal tanpa tekanan + ulangi soal salah), Kemajuan (statistik, bar akurasi per topik, soal salah + penjelasan), Pengaturan (topik, tingkat, bahasa, "Mulai desa baru" dengan konfirmasi di halaman).
- Bahasa Indonesia (lalai) dan Melayu lewat `L(id, ms)`, disimpan di `kubu-clawd-lang`. Suara Web Audio (tanpa file); musik saat bertempur; bisu disimpan di `kubu-clawd-mute`.

---

## 10. Kait uji `window.__game`

`keadaan` (judul/desa/tempur/hasil/soal), `info`, `tempur`, `soalIni`, `langkah(detik)`, `maju(detik)` (memajukan jam desa), `emas(n)`, `tinta(n)`, `permata(n)`, `taruh(jenis,x,y)`, `selesai()`, `pilih(jenis)`, `tingkatkan(jenis)`, `latih(jenis,n)`, `pasukanInstan(jenis,n)`, `serang(i)`, `cari()`, `turun(jenis,x,y,n)`, `bolehTurun(x,y)`, `mantra(jenis,x,y)`, `jawabUji(benar)`, `lanjut()`, `akhiri()`, `pulang()`, `peti()`, `kumpul()`, `kamera(x,y,zoom)`.

---

## 11. Daftar periksa sebelum selesai

Uji di **390×844** dan **1280×800** tanpa error konsol:
1. Layar judul, desa awal, gelembung panen, misi bisa diambil.
2. Toko → taruh → ✓, tukang bekerja, percepat dengan soal.
3. Latih pasukan, kemah penuh menghentikan latihan.
4. Peti Soal benar dan salah (penjelasan + Lanjut).
5. Zona merah menolak pasukan; pasukan memukul tembok bila terhalang; tidak ada pasukan yang macet.
6. Kesepuluh kampung kampanye bisa dimainkan sampai selesai; bintang, persen, jarahan, trofi benar.
7. Mantra dengan soal, bonus jarahan, pulang membawa jarahan.
8. Bahasa Melayu, Buku, simpanan bertahan setelah halaman dimuat ulang.
9. Buat folder `netlify/` + zip, jalankan `python3 -m http.server` di dalamnya dan buka `http://localhost:8000/`.
