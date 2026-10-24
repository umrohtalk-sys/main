# Prompt lengkap: Arena Clawd Pro

> Salin seluruh teks di bawah ini ke AI coding agent (Claude, ChatGPT, Cursor, dll). Prompt ini menjelaskan game secara utuh: tampilan, data, angka keseimbangan, koordinat peta, rumus, generator soal, teks antarmuka, dan cara mengujinya, supaya hasilnya sama persis dengan Arena Clawd Pro.

---

## 0. Tugas

Buatkan game web **Arena Clawd Pro**: game MOBA (seperti Mobile Legends, versi sederhana) untuk belajar matematika anak SD kelas 1–6. Pemain mengendalikan **satu hero** bernama Clawd. **Musuhnya hanya minion dan menara** (tidak ada hero musuh, tidak ada boss). Soal matematika menjadi bagian dari pertarungan: merobohkan menara, mengeluarkan ultimate, mendapat kekuatan, dan bangkit setelah tumbang.

Hasil akhir:
1. `game.html` — satu file berisi HTML + CSS + JavaScript murni (ES5, IIFE `'use strict'`), **tanpa library dan tanpa gambar luar**. Semua grafis digambar dengan Canvas 2D. Satu-satunya sumber luar adalah Google Fonts.
2. Folder `netlify/` siap unggah: `index.html` (game.html dibungkus `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + meta og:title/og:description/og:image), `sampul.jpg` (960×600, tangkapan layar gameplay), `netlify.toml` (publish ".", header `X-Content-Type-Options: nosniff` dan `X-Robots-Tag: noindex, nofollow`, `index.html` tanpa cache, redirect `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), dan zip folder itu.
3. Harus nyaman di HP (layar sentuh 390×844) dan desktop (keyboard), 60 fps.

---

## 1. Gaya visual "kertas & tinta"

Token warna CSS:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --enemy #2c3e6b
```
Warna kanvas: tinta `#2e2620`, kertas `#efebe2`/`#faf8f2`, emas `#e2a93b`, Clawd `#d8714f` (bayangan `#a94c33`), Comot biru `#2c3e6b`, ungu `#5a2d58`, langit `#6fa8dc`.

Font (Google Fonts): **Source Serif 4** 400/700 (judul), **Geist** 400/600/800 (UI), **Caveat** 600/700 (tulisan tangan: angka damage, spanduk, catatan), **IBM Plex Mono** 400/500 (label kecil huruf besar, letter-spacing .08em).

Alat gambar tinta (wajib, dipakai di semua gambar):
- `hsh(n)` = pecahan dari `sin(n*12.9898)*43758.5453` (acak berbenih).
- `wobRect(x,y,w,h,u,amp)` — persegi yang tepinya dipecah tiap 8 px dan digeser acak ±amp, seperti digambar pena.
- `inkCircle(cx,cy,r,u,amp,lw,col,fill)` — lingkaran bergoyang.
- `scratch(x,y,w,h,n,col,alpha,ang,u)` — n goresan pendek 2,5–7,5 px bersudut `ang` (arsiran pena) di dalam bentuk (pakai `clip`).
- `star4` — bintang garis 4+4 sudut. `heart` — hati kecil bergaris.
- Tekstur butiran kertas: kanvas 128×128 berisi titik acak transparan, dipakai sebagai pattern.
- Gerakan "seed" tinta berganti 7× per detik (`seed = floor(time*7)`) supaya garis bergetar halus.

Kartu/tombol HTML: border 1,5 px tinta, radius 8–12 px, bayangan keras `6px 6px 0 rgba(46,38,32,.85)` untuk lembar dialog. Lembar dialog muncul dengan animasi jatuh (`translateY(-30px) rotate(-3deg) scale(.9)` → normal, cubic-bezier memantul). Hormati `prefers-reduced-motion`.

### Karakter
- **Clawd** (`drawClawd(cx, footY, opsi)`): badan `wobRect(-17,-29,34,20)` diisi warna hero + arsiran warna gelap hero, 4 kaki 3,6×10 di x = −14, −8,6, 5, 10,4 (berayun saat lari: `sin(t*20)`), 2 lengan 5×6,5 (lengan depan naik 6 px saat menyerang), 2 mata persegi 2,9×6,2. Ekspresi: senang (mata ^), sakit (mata ×), kedip, marah (alis miring). Opsi: `s` skala, `face` arah (−1/1), `hero`, `run`, `atk`, `pencil` (minion jauh), `crown` (minion super), `cannon` (minion meriam), `col`.
- Aksesori per hero: Pahlawan = jubah merah `#d9534a` berkibar + pedang pensil kuning; Perisai = helm abu `#9aa3a8` berbulu merah + perisai bulat `#c9d2a0` bertengah emas; Pemanah = ikat kepala merah + busur cokelat `#8f5a1f`; Penyihir = topi ungu `#5a3d8f` berbintang + tongkat bintang emas; Bayangan = syal gelap `#3a3150` melintang mata + ekor syal berkibar + belati perak; Penyembuh = mahkota 5 daun hijau + tongkat berujung hati `#e8607e`.
- **Si Comot** (`drawComot(x,y,r,opsi)`): gumpalan tinta biru, atas setengah lingkaran bergelombang, bawah bergerigi 6 titik yang bergoyang, 2 mata putih lonjong dengan pupil mengikuti arah, alis putih marah. Minion jauh warna ungu `#5a2d58` + tongkat bola ungu; meriam `r 17` + meriam gelap di belakang; super `r 20` warna `#1f2b4d` + mahkota emas.
- Monster hutan digambar tangan: Kelomang (cangkang spiral oranye, 6 kaki), Kumbang Merah (elips merah bertotol + antena, partikel api), Siput Biru (cangkang spiral biru + bintang putih berkedip), Penyu Tinta (cangkang heksagon hijau tua besar, kepala bergoyang, lingkaran merah peringatan saat akan menghentak).

---

## 2. Struktur halaman

```
<main> (max-width 1100px, flex kolom, gap 14px)
  <section id="menu" class="card">
     .brand: <canvas id="heroCv" 220×220> + teks (tag, h1 "Arena Clawd" + lencana PRO miring oranye, intro, catatan tulisan tangan)
     .topbar: .tabs (role=tablist) + tombol bahasa [Indonesia | Melayu]
     #tabMain  #tabBelajar  #tabLatihan  #tabKemajuan
  <section id="game" hidden>
     .stage (tinggi min(80vh,700px), min 440px, border, radius 12) berisi <canvas id="cv"> penuh + tombol ⏸ dan 🔊 di kanan atas + .toast
     p.hint (tulisan tangan, petunjuk kontrol)
<div class="sheet" id="sheet" hidden><div class="paper" id="paper" role="dialog"></div></div>
```
Semua tombol penting punya atribut `data-uji` (untuk uji otomatis): `mula`, `hero-<id>`, `spell-<id>`, `mode-satu/tiga`, `topik-<id>`, `tingkat-<id>`, `tab-<id>`, `lang-id/ms`, `opt`, `lanjut`, `beli-<id>`, `tutup-kedai`, `sambung`, `main-semula`, `latih-salah`, `ke-menu`, `latihan-mula`, `latihan-lanjut`, `latihan-salah`, `latihan-ulang`, `latih-<topik>`, `kemajuan-latih`, `kemajuan-hapus`, `jeda`.

Di HP (≤760 px) kartu hero 2 kolom, gambar di atas teks (64 px), daftar skill disembunyikan; spell 2 kolom; tingkat (≤560 px) bertumpuk vertikal.

---

## 3. Bahasa

Indonesia (lalai) dan Melayu. Semua teks lewat `L(id, ms)`; data teks disimpan sebagai `[id, ms]` dan dibaca `tx(arr)`. Simpan di localStorage `arena-pro-lang`. Ganti bahasa = gambar ulang menu dan label peta. Contoh pasangan istilah: Toko/Kedai, Koin/Syiling, Level/Tahap, Soal/Soalan, Benar/Betul, Jawaban/Jawapan, Pulang/Balik, Lanjut/Teruskan, Penjumlahan/Tambah, Pengurangan/Tolak, Perkalian/Darab, Pembagian/Bahagi, Campuran/Campur, Sedang/Sederhana, Sulit/Sukar, kelas/tahun, detik/saat, roboh/runtuh, hancur/musnah, Markas/Pangkalan.

---

## 4. Menu bertab

Kepala: tag "Kertas & tinta · MOBA matematika · main sendiri"; intro "Pilih hero Clawd, ikuti minion menyusuri lorong, robohkan menara Si Comot, lalu hancurkan Inti Istana Comot. Jawab soal untuk Soal Gempur, Ultimate Matematika, dan Ledakan Kombo."; catatan "musuhnya hanya minion & menara, tanpa hero musuh!". Kanvas `heroCv` menampilkan peta mini mode terpilih, menara (kotak oranye/biru), inti (kotak besar), kamp (lingkaran berwarna), titik minion bergerak di lorong, dan hero terpilih berlari (skala 5).

**Tab Main** (4 langkah bernomor + tombol):
1. Pilih hero — 6 kartu (kanvas 168×168 gambar hero skala 2,6 yang ikut bergerak, peran huruf kecil kapital, nama, 3 skill dengan ikon; ult diberi "(ultimate)"). Terpilih = latar putih + cincin emas 3 px.
2. Pilih spell — 5 kartu (ikon, nama, deskripsi).
3. Mode arena — 2 kartu: **1 lorong** "Satu lorong tengah, 3 menara tiap tim. Cepat dan fokus, cocok untuk pemula." / **3 lorong** "Peta penuh: lorong atas, tengah, bawah, hutan, dan 7 menara musuh. Lebih strategis."
4. Soal matematika — chip topik (Campuran, Penjumlahan +, Pengurangan −, Perkalian ×, Pembagian ÷) dan segmen tingkat (Mudah · kelas 1–2, Sedang · kelas 3–4, Sulit · kelas 5–6) dengan keterangan "soal makin sulit tiap naik 5 level".
Lalu tombol oranye besar "Mulai bertarung ▸", "Skor terbaik: N", dan 4 kotak cara main bergaris putus-putus: Gerak / Serang & skill / ⚡ Soal Gempur / Menang. Semua pilihan disimpan di localStorage `arena-pro-set` `{hero, spell, mode, topik, diff}`. Lalai: pahlawan, kilas, satu, campur, mudah.

**Tab Belajar**: kalimat pembuka + 4 kartu (2 kolom, 1 kolom di HP). Setiap kartu: lingkaran simbol (+ − × ÷), judul topik, pengertian, visual emoji, 3 langkah bernomor, kotak contoh hijau, tips tulisan tangan hijau, tombol "Latihan 5 soal ▸".
- Tambah: "Menjumlahkan = menggabungkan dua kelompok menjadi satu." 🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎. Langkah: mulai dari angka lebih besar; hitung maju sebanyak angka kedua; angka besar: puluhan dulu lalu satuan. Contoh **34 + 25** → 30 + 20 = 50, 4 + 5 = 9 → 50 + 9 = **59**. Tips: urutan boleh ditukar 3 + 8 = 8 + 3.
- Kurang: "Mengurangi = mengambil sebagian dari sebuah kelompok." 🍬🍬🍬~~🍬🍬~~ = 🍬🍬🍬. Contoh **58 − 23** → 58 − 20 = 38, 38 − 3 = **35**. Tips: cek dengan kebalikan 35 + 23 = 58 ✓.
- Kali: "Perkalian = penjumlahan berulang." ⭐⭐⭐ + ⭐⭐⭐ + ⭐⭐⭐ = 3 × 3. Langkah: 4 × 3 = 3+3+3+3 = 12; hafalkan 2, 5, 10 dulu; angka besar dipecah. Contoh **14 × 3** → 10 × 3 = 30, 4 × 3 = 12 → **42**. Tips: 2 × 7 = 7 × 2.
- Bagi: "Pembagian = membagi sama rata ke beberapa kelompok." 🐟🐟 | 🐟🐟 | 🐟🐟 = 6 ÷ 3. Langkah: berapa kali 3 sampai 12; pakai perkalian 3 × 4 = 12; pecah dulu 48 = 40 + 8. Contoh **48 ÷ 4** → 40 ÷ 4 = 10, 8 ÷ 4 = 2 → **12**. Tips: pembagian kebalikan perkalian.

**Tab Latihan**: tanpa waktu dan tanpa musuh. Layar awal menampilkan topik & tingkat aktif, tombol "Mulai 10 soal ▸" dan "Ulangi soal yang salah (N)". Soal 1–4 tier 0, soal 5–10 tier 1. Tiap soal: baris kemajuan "judul · Soal i/n · benar k", visual (jika ada), soal besar, tombol jawaban. Setelah menjawab: benar → "Benar!"; salah → "Jawabannya X." + kotak penjelasan; lalu tombol "Lanjut ▸". Layar akhir: cap skor k/n (hijau bila ≥60%, merah bila kurang), pesan (100% "Sempurna! Siap bertarung di arena." / ≥60% "Bagus! Terus berlatih ya." / lainnya "Tidak apa-apa, baca lagi tab Belajar lalu coba lagi."), tombol "Latihan lagi" dan "Main sekarang ▸". Latihan juga mencatat kemajuan.

**Tab Kemajuan**: 4 kotak statistik (Kali main, Menang, Skor terbaik, Akurasi total (N soal)), bar akurasi per topik, "8 soal salah terakhir" (soal ditulis lengkap dengan jawaban, plus kotak penjelasan), tombol "Latihan soal yang salah" dan "Hapus kemajuan" (dengan konfirmasi).

Penyimpanan `arena-pro-kemajuan`: `{ main, menang, best, topik: { tambah:[benar,total], kurang:[…], kali:[…], bagi:[…] }, salah: [ {ty,a,b,c,miss,ans,lv} … maks 8, terbaru di depan ] }`. Setiap jawaban (di arena atau latihan) menambah statistik topik; jawaban salah dimasukkan ke depan daftar `salah` (tanpa duplikat teks soal); jawaban benar untuk soal yang ada di daftar menghapusnya. Semua akses localStorage dibungkus try/catch.

---

## 5. Generator soal (wajib persis)

`mkQ(topik, tingkat, tier)`. Level gabungan `lv = min(9, indexTingkat*3 + tier)` (mudah=0, sedang=1, sulit=2). `tier` = `min(2, floor((levelHero−1)/5))`, **+1 untuk Ultimate Matematika**.

Topik "campuran": jika mudah dan tier 0, pilih acak dari [tambah, kurang, tambah, kurang, kali]; selain itu acak dari keempat operasi.

**Penjumlahan** a + b (rentang a, b per lv):
| lv | a | b |
|---|---|---|
| 0 | 1–5 | 1–5 |
| 1 | 2–9 | 2–9 |
| 2 | 10–40 | 1–9 |
| 3 | 10–59 | 10–39 |
| 4 | 20–79 | 12–49 |
| 5 | 100–499 | 10–99 |
| 6 | 100–899 | 100–899 |
| 7 | 1000–4999 | 100–999 |
| 8 | 1000–8999 | 1000–4999 |
| 9 | 1000–8999 | 1000–8999 |
Visual emoji bila lv ≤ 1 dan hasil ≤ 10: emoji×a `+` emoji×b.

**Pengurangan** a − b: a per lv = 2–10, 11–18, 20–59, 30–99, 50–99, 100–499, 300–999, 1000–4999, 1000–9999, 2000–9999. b: lv0 1..a−1; lv1 2–9; lv2 1–9; lv3 10..min(29,a−1); lv4 15..min(49,a−1); lv5 10–99; lv6 100..min(299,a−1); lv7–9 100..min(999,a−1). Visual lv0: emoji×hasil lalu emoji×b dicoret pudar.

**Perkalian** a × b: lv0 a∈{2,5,10}, b 1–5; lv1 a∈{2,3,4,5,10}, b 1–10; lv2 a 2–5, b 2–10; lv3 a 2–6, b 2–10; lv4 a 2–9, b 2–10; lv5 a 11–25, b 2–5; lv6 a 12–49, b 3–9; lv7 a 11–30, b 11–19; lv8 a 12–60, b 3–9; lv9 a 100–250, b 2–9. Untuk lv ≤ 4 tukar a dan b secara acak 50%. Visual lv0 bila a,b ≤ 5: a kelompok emoji×b dipisah "+".

**Pembagian** a ÷ b = c (b pembagi, c hasil, a = b×c): lv0 b=2, c 1–5; lv1 b∈{2,5,10}, c 1–5; lv2 b 2–5, c 1–10; lv3 b 2–5, c 2–10; lv4 b 2–9, c 2–10; lv5 b 2–9, c 6–12; lv6 b 3–9, c 11–25; lv7 b 3–9, c 20–60; lv8 b 3–9, c 11–40; lv9 b 4–9, c 50–120.

**Angka hilang**: bila lv ≥ 8, 50% soal menjadi `□ op b = c` (jawab a) atau `a op □ = c` (jawab b).

Teks soal: `a + b = ?`, simbol `+ − × ÷`, `□` untuk angka hilang.

**Pilihan jawaban**: lv0 → 3 pilihan, selain itu 4. Pengecoh = jawaban ± salah satu dari [1, 2, 10, 1, 2]; untuk perkalian biasa ditambah ±a dan ±b; bila jawaban ≥ 100 ditambah ±100 dan ±20. Tidak boleh negatif atau kembar; diacak.

**Penjelasan `explain(q)`** (daftar langkah bernomor, angka hasil ditebalkan):
- Angka hilang: "Kotak □ adalah angka yang hilang. Pakai operasi **kebalikan**:" → `□ = c − b = a` (tambah, hilang depan), `□ = c − a` (tambah, hilang belakang), `□ = c + b` / `□ = a − c` (kurang), `□ = c ÷ b` / `□ = c ÷ a` (kali), `□ = c × b` / `□ = a ÷ c` (bagi) → "Cek: a op b = c ✓".
- Tambah: bila a dan b < 10 → "Mulai dari **a**, hitung maju b langkah:" + deret `a+1 → … → c`. Selain itu pecah b = bagian besar + sisa (bagian besar = b dibulatkan ke bawah ke puluhan; jika b ≥ 100 ke ratusan) → `a + besar = m` → `m + sisa = c`. Lalu "Cek dengan kebalikan: c − b = a ✓".
- Kurang: bila b < 10 dan a ≤ 20 → hitung mundur dengan deret; selain itu pecah b, kurangi bagian besar dulu. "Cek dengan kebalikan: c + b = a ✓".
- Kali (lo = angka kecil, hi = angka besar): bila (lo ≤ 5 dan hi ≤ 12) atau hi ≤ 10 → "a × b artinya penjumlahan berulang: hi ditambah lo kali." + `hi + hi + … = c`. Bila lo < 10 dan hi kelipatan 10 → "hitung hi/10 × lo, lalu tambahkan satu nol". Bila lo < 10 → pecah hi = besar + sisa, kalikan masing-masing, jumlahkan. Selain itu (2 angka × 2 angka) pecah b. "Cek dengan kebalikan: c ÷ lo = hi ✓".
- Bagi: "Cari angka yang kalau dikali b hasilnya a." Bila c ≥ 10 dan c bukan kelipatan 10 → `a = b×puluhan + b×satuan → … ÷ b = puluhan, … ÷ b = satuan` → `puluhan + satuan = c`; selain itu `b × c = a`. Penutup "Jadi a ÷ b = c. Cek: c × b = a ✓".
Kotak penjelasan: judul "Cara menghitung", latar hijau muda `#eef4e2`, garis putus-putus hijau.

---

## 6. Peta dan dua mode

Dunia 2000×2000, digambar sekali ke kanvas tersembunyi `MAP` dan peta mini `MINI` 220×220 (gambar ulang saat mode/bahasa berganti). Kamera mengikuti hero (lerp 0,15), zoom `min(lebar,tinggi)/760` (×1,08 bila layar sangat lebar), dijepit ke tepi dunia, goyang layar saat ledakan.

- Markas Clawd `BASE0 (190,1810)`, Istana Comot `BASE1 (1810,190)`, titik muncul hero `(330,1680)`. Markas = lingkaran r 250 (oranye muda `#f6d1bd` / biru muda `#c9d2e8`) + arsiran + cincin r 200. Label tulisan tangan "Markas Clawd", "Istana Comot", "~ sungai tinta ~" (diputar 45°).
- Latar `#dfe5c6` + pattern butiran + 9000 goresan rumput `#8fae64`.
- Sungai: garis tebal 130 px `#bcd8e3` bertepi tinta dari (0,0) ke (2000,2000) yang berkelok `sin(t*9)*30`, plus 60 riak putih.
- Lorong: garis 150 px `#ecd9ae` bertepi tinta + garis tengah putus-putus.
  - atas: (190,1810) → (205,1500) → (205,205) → (1500,205) → (1810,190)
  - tengah: (190,1810) → (1810,190); `midP(t) = (190+1620t, 1810−1620t)`
  - bawah: (190,1810) → (500,1795) → (1795,1795) → (1795,500) → (1810,190)
- Jalan setapak 46 px (`#e6dcb8`, 55% transparan) dari tiap kamp ke titik terdekat di lorong.

**Mode `satu` (1 lorong)**: lorong tengah saja. Menara musuh tier 1/2/3 di `midP(0.6)`, `midP(0.72)`, `midP(0.86)`; menara kita tier 1/2/3 di `midP(0.4)`, `midP(0.28)`, `midP(0.14)`. Kamp: Siput Biru (600,900), Kumbang Merah (1500,1250), Kelomang (700,700) dan (1240,1240), Penyu Tinta (1350,1550). Semak: (489,1299), (863,1349), (1137,651), (1511,701). 170 pohon.

**Mode `tiga` (3 lorong)**: menara musuh atas (820,205) t1, (1360,205) t2; tengah midP(0.62) t1, midP(0.78) t2, midP(0.88) **t3**; bawah (1795,1180) t1, (1795,640) t2. Menara kita: atas (205,1120), tengah midP(0.3), bawah (880,1795) (semua t1) + midP(0.14) t3. Kamp: Biru (520,1050) & (1050,520), Merah (1050,1480) & (1480,1050), Kelomang (560,560) & (1440,1440), Penyu (1185,1185). Semak: (863,1349), (1137,651), (330,950), (1050,330), (1670,1050), (950,1670). 140 pohon.

**Pohon**: posisi acak berbenih (benih berbeda per mode), r 26–52; ditolak bila < 115+r dari lorong, < 95+r dari sungai, < 330 dari markas, < 150+r dari kamp, < 75+r dari jalan setapak kamp, < 95+r dari semak, atau bertumpuk pohon lain. Gambar: bayangan elips, `inkCircle` hijau `#8cb35a`/`#7aa64c`, arsiran `#3f6b22`, kilau terang. Pohon menghalangi hero (tabrakan lingkaran r pohon + 0,7×r hero).

**Kamp**: lingkaran r 70 (penyu 95) krem/hijau pudar + lingkaran dalam putus-putus.

**Semak**: elips 78×50, hijau `rgba(78,128,52,.55)` bertepi putus-putus + 46 helai rumput melengkung `#2f5418`.

---

## 7. Bangunan

| | HP | jangkauan | jeda tembak | damage ke minion | damage ke hero |
|---|---|---|---|---|---|
| Menara musuh t1/t2/t3 | 1900 / 2600 / 3000 | 300 | 1,2 s | 85 | min(110, 55 + 0,06×detik) |
| Menara kita t1/t2/t3 | 2400 / 2800 / 3200 | 300 | 1,2 s | 85 | – |
| Inti markas kita | 4500 (di BASE0+(20,−20), r 46) | 320 | 1,2 s | 85 | – |
| **Inti Istana Comot** | 6000 (di BASE1+(−20,20), r 50) | 330 | 1,0 s | 110 | min(140, 85 + 0,06×detik) |

- Menara selalu memilih minion lawan terdekat dulu; menara/inti musuh baru menembak hero bila tidak ada minion dan hero tidak tersembunyi. Tembakan = sinar tebal (biru `#6b7fb0` / oranye `#f2b04a`).
- **Rantai perisai** (berlaku untuk kedua tim): tier 2 kebal selama tier 1 di lorong yang sama berdiri; tier 3 kebal sampai ada satu lorong yang semua menara tier 1–2 tim itu sudah roboh; inti kebal selama masih ada tier 3 tim itu. Bangunan kebal digambar dengan kubah biru transparan berdenyut, bar HP abu-biru, dan pukulan ke sana memunculkan teks "Terlindung!".
- Gambar menara: alas lingkaran abu, badan `wobRect` 34×74 (t3 ×1,12; inti ×1,45) warna muda + arsiran warna tim, atap warna tim, kristal belah ketupat melayang (emas untuk kita, biru untuk musuh). Inti musuh punya 4 benteng di atap. Label "T1/T2/T3" bila dekat hero; label "Inti Istana Comot" / "Inti Markas". Menara roboh = puing abu.
- Roboh menara musuh: +160 XP, +220 koin, spanduk "Menara musuh roboh! (n/total)"; saat perisai inti pecah toast "Perisai Inti Istana Comot pecah! Serang inti di kanan atas 🏰". Menara kita roboh: toast peringatan.
- **Menang** = Inti Istana Comot hancur. **Kalah** = inti markas kita hancur.

---

## 8. Minion

| jenis | HP dasar | damage | jangkauan | kecepatan | r | jeda serang |
|---|---|---|---|---|---|---|
| dekat | 280 | 18 | 52 | 105 | 15 | 1,0 s |
| jauh | 190 | 24 | 210 | 105 | 15 | 1,3 s |
| meriam | 520 | 30 (×2,6 ke bangunan) | 240 | 85 | 18 | 1,8 s |
| super | 900 | 45 | 60 | 110 | 20 | 0,9 s |

- Gelombang pertama 3 detik setelah mulai, lalu tiap 28 s. Tiap lorong, tiap tim: dekat, dekat, dekat, jauh (+ meriam tiap gelombang ke-3), muncul berurutan jeda 0,7 s, 150 px dari markas. Skala HP dan damage: musuh `1 + 0,05×gelombang`, kita `1 + 0,035×gelombang`. Maksimal 170 unit.
- AI: setiap 0,3 s cari target terdekat dalam jangkauan+150 (minion/hero/monster tidak, lalu bangunan). Ada target → dekati lalu serang; minion jauh/meriam menembak proyektil (peluru kuning kita, tetes ungu musuh, bola meriam gelap). Tidak ada target → jalan ke titik lorong berikutnya. Minion saling dorong supaya tidak menumpuk.
- Minion musuh mati dekat hero (≤700): +22 XP & +12 koin, atau +34 XP & +28 koin jika hero yang membunuh (meriam ×2). 3 bunuhan dalam 2,5 s → spanduk "Tiga Sekaligus!", 5 → "Ganas! Lima minion!".
- Gambar: minion kita = Clawd kecil (skala 0,6; meriam 0,72; super 0,9 warna `#e9945f` bermahkota); minion musuh = Comot r 14 (meriam 17, super 20). Bar HP kecil saat terluka (selalu untuk meriam/super).

---

## 9. Hero

Statistik (HP, +HP/level, serangan, +serangan/level, jangkauan, jeda serang, kecepatan, pengali skill):
| id | nama | warna | HP | +HP | ATK | +ATK | jangkauan | jeda | laju | sp |
|---|---|---|---|---|---|---|---|---|---|---|
| pahlawan | Clawd Pahlawan (petarung, dekat) | #d8714f | 1150 | 125 | 58 | 8 | 95 | 0,75 | 255 | 1 |
| perisai | Clawd Perisai (tank) | #a3b86c | 1500 | 150 | 44 | 6 | 90 | 0,85 | 240 | 1 |
| pemanah | Clawd Pemanah (jauh) | #f2c14e | 860 | 95 | 52 | 8 | 270 | 0,62 | 250 | 1 |
| sihir | Clawd Penyihir | #7f9fd9 | 820 | 90 | 46 | 7 | 235 | 0,85 | 245 | 1,25 |
| bayang | Clawd Bayangan (assassin, dekat) | #8a78b8 | 820 | 92 | 62 | 9 | 92 | 0,60 | 278 | 1 |
| penyembuh | Clawd Penyembuh (support, jauh) | #f19bb4 | 900 | 100 | 40 | 6 | 240 | 0,80 | 248 | 1,1 |

Rumus:
- `damageSkill(dasar, rasio, n) = (dasar + seranganEfektif × rasio) × (1 + 0,22×(levelSkill−1)) × sp × pengaliUltimate`
- `jedaSkill(n) = jedaDasar × max(0,4, 1 − cdrItem − (buffBiru ? 0,25 : 0)) × (1 − 0,06×(levelSkill−1))`
- Serangan efektif = serangan × 1,4 (buff Kuasa) × 1,1 (buff Merah).
- XP untuk naik = `90 + level×60`, level maks 15. Naik level: statistik dihitung ulang, +200 HP, pilar cahaya emas, angka "Level N!". Level 4 membuka ultimate (spanduk "Ultimate terbuka! …"); level lain memberi 1 poin skill (tombol + kuning). Skill 1–2 maks level 5; ultimate maks 3 dan butuh level hero 8 lalu 12.
- Pulih alami 0,4% HP/s (1,2% saat buff Biru). Di dalam markas (r 250) pulih 22% HP/s. Koin pasif +1,6/s, koin awal 300.
- Tumbang: muncul lagi setelah `6 + 0,6×level` detik di titik muncul; 0,9 s setelah tumbang muncul soal (lihat §11).
- Pulang (B): diam 3 s (lingkaran progres biru), batal bila bergerak/menyerang/terkena damage.
- Serang otomatis saat diam (kecuali di dalam semak) atau saat tombol serang ditahan; menyasar unit terdekat dulu, lalu bangunan. Hero jarak dekat = tebasan langsung; jarak jauh = panah (Pemanah), bola ungu (Penyihir), hati (Penyembuh).

Skill (angka dalam kurung = damage dasar + rasio × serangan, dimasukkan ke rumus `damageSkill`; jeda dasar dalam detik; arah bidik = musuh terdekat, atau arah joystick, atau serong depan):
- **Pahlawan**: Q Terjang Pensil (6 s) melesat 1300/s selama 0,2 s, kena musuh yang dilewati `(70 + 1,2×ATK)` + lambat 1,5 s. E Putar Gasing (9 s) area 175 `(60 + 1,1×ATK)`, pulih 9% HP, damage diterima ×0,7 selama 3 s. R Hentakan Bumi (30 s) lompat 0,5 s ke target (≤480), kebal saat melayang, mendarat area 230 `(170 + 2×ATK)` + pingsan 1,3 s.
- **Perisai**: Q Hantam Perisai (6 s) area 150 berpusat 90 px di depan, `(60 + 1,0×ATK)`, pingsan 0,8 s. E Tembok Kertas (12 s) perisai 30% HP + damage diterima ×0,5 selama 4 s + minion musuh dalam jangkauan+220 dipaksa menyerang hero; teks "Ayo serang aku!". R Benteng Raksasa (32 s) cincin 270 `(150 + 1,6×ATK)` + pingsan 1,6 s + perisai 25%.
- **Pemanah**: Q Panah Tinta (5 s) panah besar 1000/s selama 0,75 s menembus `(85 + 1,3×ATK)`. E Langkah Angin (8 s) lompat menjauh 1000/s 0,18 s, 3 serangan berikutnya ×1,6. R Hujan Panah (28 s) 8 gelombang panah tiap 0,25 s di area 200 `(36 + 0,5×ATK)` + lambat.
- **Penyihir**: Q Bola Bintang (4 s) bola 650/s meledak area 115 `(100 + 1,6×ATK)`. E Rantai Petir (8 s) mengenai target + lompat ke 3 musuh lain (≤230 tiap lompatan) `(75 + 1,2×ATK)` + pingsan 0,7 s. R Hujan Bintang (30 s) 8 bintang jatuh tiap 0,15 s area 115 `(110 + 1,3×ATK)`.
- **Bayangan**: Q Lompat Bayangan (7 s) meluncur 1500/s ke unit musuh terdekat (≤420) `(80 + 1,3×ATK)`; bila target itu mati → jeda Q direset ke 0,3 s + teks "Siap lagi!". E Tusuk Kembar (5 s) 2 tusukan `(55 + 1,0×ATK)` berjarak 0,18 s. R Tarian Bayangan (30 s) 1,6 s tidak bisa diserang/ditarget, tiap 0,2 s memukul semua musuh radius 230 `(40 + 0,55×ATK)`, bayangan hero bermunculan.
- **Penyembuh**: Q Cahaya Pulih (8 s) pulih 15% HP diri, minion kawan ≤320 pulih 40%, area 180 `(40 + 0,6×ATK)`. E Gelembung Lindung (14 s) minion kawan ≤350 mendapat gelembung 6 s (damage diterima ×0,5, serangan ×1,5). R Panggil Pasukan (40 s) memunculkan minion super di dekat hero menuju lorong terdekat: 5 bila soal ultimate benar, 3 bila salah; HP ×(1 + 0,25×(levelUlt−1)).

**Spell** (F): Kilas ⚡ 40 s (pindah 240 px), Pulih 💚 50 s (+30% HP), Hukuman 🗡 30 s (petir ke monster/minion ≤260: 650+40×level ke monster, 500 ke minion), Lari Kencang 👟 45 s (+60% laju 5 s), Perisai 🛡 50 s (perisai 30% HP 4 s).

---

## 10. Monster hutan (tim netral)

| | HP | damage | r | muncul lagi | koin | XP | hadiah |
|---|---|---|---|---|---|---|---|
| Kelomang | 520 | 0 (kabur) | 22 | 45 s | 60 | 30 | +35% HP + laju 8 s |
| Kumbang Merah | 1300 | 32 | 28 | 70 s | 110 | 80 | buff Merah 70 s: +10% serangan, serangan membakar 3 s + lambat |
| Siput Biru | 1300 | 28 | 28 | 70 s | 110 | 80 | buff Biru 70 s: jeda skill −25%, pulih ×3 |
| Penyu Tinta | 3200 | 60 (hentakan area 150 setelah peringatan 0,8 s, tiap 2,4 s) | 44 | 120 s (muncul pertama di detik 60) | 260 | 160 | perisai 40% HP + 1 minion super di tiap lorong |

Monster hanya menyerang bila dipukul hero, kembali ke kamp bila terlalu jauh (>380 dari kamp atau hero >520) sambil pulih 25%/s. Nama monster tampil saat hero dekat.

---

## 11. Soal di dalam pertarungan (inti game)

Game berhenti (state `soalan`) selama soal tampil di lembar dialog. Lembar berisi: tag, judul, kotak hadiah bergaris putus-putus (ikon besar + teks), label kecil "TOPIK · TINGKAT · tingkat N", visual emoji (bila ada), soal besar (Geist 800, 40–60 px), 3–4 tombol jawaban besar (2 kolom, 3 kolom bila 3 pilihan), area umpan balik tulisan tangan, area penjelasan, baris kombo "Kombo ●○○ · 3 benar beruntun = Ledakan Kombo", konfeti saat benar. Tombol 1–4 di keyboard memilih jawaban.

Jenis soal:
1. **Soal Gempur** — tombol ⚡ "SOAL" (G) muncul bila hero berjarak < jangkauan+130 dari menara/inti musuh yang tidak kebal; tombol berdenyut emas saat siap, berjeda melingkar saat tidak. Jeda awal 8 s. Benar → pensil raksasa (kuning, ujung kayu, penghapus merah muda, panjang ~214 px) jatuh dari langit 0,5 s dengan bayangan merah di tanah, lalu mengurangi **18% HP maks menara (inti 12%)** langsung (menembus item/perisai), goyang layar, serpihan; jeda 20 s. Salah → jeda 12 s.
2. **Ultimate Matematika** — menekan R memunculkan soal tier+1. Benar → ultimate dengan pengali **1,5**; salah → **0,7** (ultimate tetap keluar setelah tombol Lanjut). Ikon ✏️ kecil di tombol R.
3. **Soal kilat** — pertama di detik 55, lalu tiap 60–75 s (hanya saat hero hidup). Hadiah acak: Kuasa Pensil ⚔ (+40% serangan 25 s), Sepatu Ajaib 👟 (laju ×1,3 & serangan +25% 25 s), Perisai Kertas 🛡 (damage diterima ×0,5 25 s), Pulih Penuh 💚 (HP penuh + semua jeda skill 0), Peti Koin 🪙 (+200), Meriam Bonus 💣 (1 minion meriam + 1 minion super keluar di tiap lorong kita).
4. **Soal saat tumbang** — bila waktu bangkit masih > 1,5 s. Benar → langsung bangkit.

Setiap jawaban benar: +40 XP, +30 koin, kombo +1, bunyi benar, konfeti, umpan balik hijau "Benar! … +40 XP +30 🪙", tutup otomatis 1,25 s. Setiap jawaban salah: kombo jadi 0, tombol salah merah bergetar, tombol benar hijau, "Jawabannya X. Tidak apa-apa, lihat caranya:" + kotak penjelasan + tombol "Lanjut ▸" (Enter/Spasi juga). **Tidak ada hukuman tambahan saat salah.**

**Ledakan Kombo**: saat kombo mencapai 3 setelah lembar ditutup → kombo kembali 0, spanduk "LEDAKAN KOMBO! 3 benar beruntun 💥", +150 koin, ledakan area 280 di sekitar hero dengan damage `220 + 2,2×serangan` ke semua musuh kecuali inti.

Saat tier soal naik (level 6 dan 11) muncul toast "Soal naik tingkat! Sekarang lebih menantang ✏️".

---

## 12. Semak

`h.inBush` = posisi hero di dalam elips semak. Hero **tersembunyi** bila di dalam semak dan sudah ≥ 1,2 s sejak terakhir menyerang/memakai skill (atau sedang Tarian Bayangan). Hero tersembunyi tidak ditarget minion/menara, proyektil yang sedang menuju hero hilang. Di dalam semak hero tidak menyerang otomatis. Hero digambar 50% transparan dengan label "🌿 tersembunyi" (hijau) atau "🌿 terlihat (baru menyerang)" (merah bata).

---

## 13. HUD kanvas

- Kiri atas: peta mini (ukuran `min(160, 0,28×sisi terpendek)`) berbingkai, kotak menara/inti, titik minion (lebih besar untuk meriam/super), titik monster berwarna, titik hero berpinggir putih, kotak kamera.
- Di bawahnya: kotak "Nama · Lv N" + bar XP emas; kotak kuning `#fbefc9` "🪙 koin" + "🛒 Toko" (ketuk membuka toko) + titik merah berdenyut bila ada item terjangkau.
- Tengah atas (pindah ke bawah peta mini di layar sempit): "mm:ss  🗼menara/total  ⚔bunuhan"; di bawahnya kotak "Kombo" dengan 3 bulatan (oranye `#e8703a` terisi); lalu kotak buff aktif "🔥 12s".
- Bar HP Inti Istana Comot saat hero ≤650 darinya (ungu, abu-biru bila kebal, ikon 🛡).
- Spanduk tulisan tangan miring kuning di 30% tinggi layar (2,4 s, muncul membesar). Toast HTML di atas. Saat tumbang layar digelapkan + "Clawd bangkit dalam N…".
- Angka melayang Caveat: emas (serangan hero), ungu (skill), merah (damage ke kita), hijau (pulih).
- Bar HP hero dengan bagian perisai putih, lencana level emas di kirinya.

Tombol sentuh (u = skala `clamp(0,78, sisi terpendek/430, 1,25)`, pusat serang `(lebar−76u, tinggi−76u)`):
- SERANG r 46u warna hero; skill Q/E/R r 32u di offset (−118,−8), (−96,−100), (−12,−128); spell F r 25u di (−196,18); pulang 🏠 B r 22u di (−196,−52); ⚡ Soal Gempur r 34u di (−30,−214) hanya bila tersedia.
- Jeda = juring gelap; angka detik di tengah; titik emas di bawah tombol = level skill; 🔒 bila ultimate belum terbuka; tombol + emas kecil di kiri atas tombol skill bila bisa dinaikkan.
- Joystick: muncul di titik sentuh pada 60% kiri layar, radius 58u, kenop 26u warna hero; saat tidak dipakai tampil pudar di kiri bawah.

Keyboard: WASD/panah gerak, J/Spasi serang, Q E R (atau 1 2 3) skill, Shift/Ctrl+Q/E/R naikkan skill, F spell, G Soal Gempur, B pulang, I toko, P/Esc jeda. Game otomatis jeda saat tab disembunyikan.

---

## 14. Toko

Lembar "Toko 🪙 N", teks "Beli sampai 6 item. Game berhenti selama toko dibuka.", baris 6 slot tas, grid 2 kolom:
- **Ramuan Nyawa** 🧪 90 koin: langsung +40% HP maks, tidak memakai slot, bisa dibeli berulang (nonaktif bila HP penuh).
- Pedang Pensil 🗡 300 (+22 serangan) · Sepatu Lari 👟 250 (+40 laju) · Jaket Kertas 🧥 300 (+350 HP) · Jam Pasir ⏳ 400 (jeda skill −15%) · Tongkat Bintang 🪄 450 (skill +30%) · Perisai Buku 📘 400 (damage diterima −15%) · Daun Penawar 🍃 450 (pulih 12% dari damage yang diberikan) · Busur Cepat 🏹 350 (kecepatan serang +20%).
Item yang dimiliki ditandai ✓ hijau muda. Baris statistik: Serangan · Nyawa x/y · Kecepatan. Tombol "Kembali bertarung ▸".

---

## 15. Layar akhir = laporan belajar

- Menang (1,5 s setelah inti hancur): cap "MENANG!" hijau miring, 3 bintang (1 + [tumbang ≤ 1] + [akurasi ≥ 75%]), judul "Inti Istana Comot hancur! Arena milik Clawd.", konfeti, bunyi menang.
- Kalah: cap "KALAH" merah, "Inti Markas Clawd hancur", tips.
- "Laporan belajar": 8 kotak statistik — Soal benar a/b, Akurasi %, Kombo terpanjang, Pensil raksasa, Waktu, Menara roboh x/y, Minion dikalahkan, Level Clawd.
- "Akurasi per topik": bar (hijau ≥75%, emas ≥50%, oranye <50%) dengan "benar/total · %".
- "Soal yang perlu diulang": maks 5 soal salah (soal lengkap dengan jawaban digarisbawahi, "kamu jawab X", kotak penjelasan); bila semua benar: "Semua soal benar — hebat!".
- Skor = `bunuhan×20 + menara×300 + monster×80 + benar×150 + ledakanKombo×200 + (menang ? 1500 + max(0, 1200 − detik)×2 : 0)`; "· skor terbaik baru!" bila memecahkan rekor.
- Tombol: "Main lagi", "Latihan soal yang salah" (membuka tab Latihan berisi soal-soal tadi), "Menu".

---

## 16. Jeda dan suara

Jeda: lembar "Jeda / Minion kedua tim beristirahat sebentar." dengan "Lanjut ▸" dan "Menu". Suara dengan Web Audio (tanpa file): tembak, tebas, pukul, letus, kilat, ledakan, dash, putar, petir, ultimate, bintang, hentak, naik level, koin, sakit, pulih, benar (5 nada naik), salah, menang, kalah, tap, kilas, kombo; musik latar arpeggio 126 bpm (4 akor) yang berhenti saat soal/jeda. Bisu disimpan di `arena-pro-mute`.

---

## 17. Kait uji `window.__game`

`keadaan` ('menu'|'main'|'soalan'|'kedai'|'jeda'|'menang'|'kalah'), `info` (mode, t, hp, max, lvl, sl, pts, cd, emas, item, menara, menaraTotal, bunuh, monster, buff, inti, intiPerisai, mati, kombo, komboMaks, ledakan, gempurCd, gempurSiap, soal, benar, tersembunyi, semak, minion per jenis), `soalIni` (teks, jawab, ty, lv, why, penjelasan), `langkah(detik)` (simulasi 30 fps), `gerak(x,y)`, `ke(x,y)`, `skill(n, langsung)`, `spell()`, `naik(n)`, `beli(id)`, `kedai()`, `tutupKedai()`, `balik()`, `xp(n)`, `emas(n)`, `soalan()`, `jawabUji(benar)`, `lanjut()`, `runtuh(n)`, `gempur()`, `hancurInti()`, `hancurKita()`, `cedera(n)`, `monster(jenis)`, `semak(i)`.

---

## 18. Daftar periksa sebelum selesai

Uji sendiri dengan browser di ukuran **390×844** dan **1280×800**, tanpa error di konsol:
1. Menu tampil rapi (kartu hero tidak terpotong), ganti bahasa Indonesia ↔ Melayu mengubah semua teks.
2. Mode 1 lorong dan 3 lorong bisa dimulai; minion keluar, berjalan, bertarung.
3. Keenam hero: Q, E, R berfungsi dan berjeda.
4. Soal Gempur muncul dekat menara, jawaban benar menjatuhkan pensil dan mengurangi HP.
5. Jawaban salah menampilkan penjelasan + Lanjut; Ultimate Matematika 150%/70%.
6. 3 benar beruntun = Ledakan Kombo; soal saat tumbang membangkitkan hero.
7. Semak menyembunyikan hero; toko & ramuan berfungsi.
8. Rantai perisai benar; menang dan kalah menampilkan laporan belajar; Main lagi dan Latihan soal yang salah berfungsi.
9. Tab Belajar, Latihan, Kemajuan berfungsi dan tersimpan setelah halaman dimuat ulang.
10. Buat folder `netlify/` + zip, jalankan `python3 -m http.server` di folder itu dan pastikan game terbuka di `http://localhost:8000/`.
