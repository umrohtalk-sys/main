# Prompt lengkap: Arena Clawd Pro

> Salin keseluruhan teks di bawah ke AI coding agent (Claude, ChatGPT, Cursor, dll). Prompt ini menerangkan game sepenuhnya: rupa, data, angka keseimbangan, koordinat peta, rumus, penjana soalan, teks antara muka dan cara mengujinya, supaya hasilnya sama persis dengan Arena Clawd Pro. Teks dalam game adalah Bahasa Indonesia (lalai) dan Bahasa Melayu; teks yang dipetik di bawah ialah versi Indonesia, versi Melayunya disediakan melalui `L(id, ms)`.

---

## 0. Tugasan

Bina game web **Arena Clawd Pro**: game MOBA (seperti Mobile Legends, versi ringkas) untuk belajar matematik bagi murid sekolah rendah Tahun 1–6. Pemain mengawal **satu hero** bernama Clawd. **Musuhnya hanya minion dan menara** (tiada hero musuh, tiada boss). Soalan matematik menjadi sebahagian daripada pertarungan: meruntuhkan menara, mengeluarkan ultimate, mendapat kuasa, dan bangkit selepas tumbang.

Hasil akhir:
1. `game.html` — satu fail berisi HTML + CSS + JavaScript tulen (ES5, IIFE `'use strict'`), **tanpa pustaka dan tanpa imej luar**. Semua grafik dilukis dengan Canvas 2D. Satu-satunya sumber luar ialah Google Fonts.
2. Folder `netlify/` sedia dimuat naik: `index.html` (game.html dibalut `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` + meta og:title/og:description/og:image), `sampul.jpg` (960×600, tangkapan skrin gameplay), `netlify.toml` (publish ".", pengepala `X-Content-Type-Options: nosniff` dan `X-Robots-Tag: noindex, nofollow`, `index.html` tanpa cache, ubah hala `/*` → `/index.html` status 200), `robots.txt` (`Disallow: /`), dan zip folder itu.
3. Mesti selesa di telefon (skrin sentuh 390×844) dan desktop (papan kekunci), 60 fps.

---

## 1. Gaya visual "kertas & dakwat"

Token warna CSS:
```
--paper #efebe2  --paper-2 #faf8f2  --ink #2e2620  --muted #6d665b  --line #d6d0c3
--accent #d8714f  --accent-dark #b4553a  --leaf #6fa83c  --leaf-dark #3f6b22  --gold #e2a93b  --enemy #2c3e6b
```
Warna kanvas: dakwat `#2e2620`, kertas `#efebe2`/`#faf8f2`, emas `#e2a93b`, Clawd `#d8714f` (bayang `#a94c33`), Comot biru `#2c3e6b`, ungu `#5a2d58`, langit `#6fa8dc`.

Fon (Google Fonts): **Source Serif 4** 400/700 (tajuk), **Geist** 400/600/800 (UI), **Caveat** 600/700 (tulisan tangan: angka cedera, sepanduk, nota), **IBM Plex Mono** 400/500 (label kecil huruf besar, letter-spacing .08em).

Alat lukisan dakwat (wajib, digunakan untuk semua lukisan):
- `hsh(n)` = pecahan daripada `sin(n*12.9898)*43758.5453` (rawak berbenih).
- `wobRect(x,y,w,h,u,amp)` — segi empat yang tepinya dipecah setiap 8 px dan dianjak rawak ±amp, seperti dilukis pen.
- `inkCircle(cx,cy,r,u,amp,lw,col,fill)` — bulatan bergoyang.
- `scratch(x,y,w,h,n,col,alpha,ang,u)` — n goresan pendek 2,5–7,5 px bersudut `ang` (lorekan pen) di dalam bentuk (guna `clip`).
- `star4` — bintang garisan 4+4 bucu. `heart` — hati kecil bergaris.
- Tekstur butiran kertas: kanvas 128×128 berisi titik rawak lutsinar, digunakan sebagai pattern.
- "Seed" dakwat berubah 7× sesaat (`seed = floor(time*7)`) supaya garisan bergetar halus.

Kad/butang HTML: sempadan 1,5 px dakwat, radius 8–12 px, bayang keras `6px 6px 0 rgba(46,38,32,.85)` untuk helaian dialog. Helaian muncul dengan animasi jatuh (`translateY(-30px) rotate(-3deg) scale(.9)` → normal, cubic-bezier melantun). Hormati `prefers-reduced-motion`.

### Watak
- **Clawd** (`drawClawd(cx, footY, pilihan)`): badan `wobRect(-17,-29,34,20)` diisi warna hero + lorekan warna gelap hero, 4 kaki 3,6×10 pada x = −14, −8,6, 5, 10,4 (berayun ketika lari: `sin(t*20)`), 2 lengan 5×6,5 (lengan depan naik 6 px ketika menyerang), 2 mata segi empat 2,9×6,2. Ekspresi: gembira (mata ^), sakit (mata ×), kelip, marah (kening senget). Pilihan: `s` skala, `face` arah (−1/1), `hero`, `run`, `atk`, `pencil` (minion jauh), `crown` (minion super), `cannon` (minion meriam), `col`.
- Aksesori setiap hero: Pahlawan = jubah merah `#d9534a` berkibar + pedang pensel kuning; Perisai = topi besi kelabu `#9aa3a8` berbulu merah + perisai bulat `#c9d2a0` bertengah emas; Pemanah = ikat kepala merah + busur coklat `#8f5a1f`; Ahli Sihir = topi ungu `#5a3d8f` berbintang + tongkat bintang emas; Bayang = selendang gelap `#3a3150` melintang mata + ekor selendang berkibar + belati perak; Penyembuh = mahkota 5 daun hijau + tongkat berhujung hati `#e8607e`.
- **Si Comot** (`drawComot(x,y,r,pilihan)`): gumpalan dakwat biru, atas separuh bulatan beralun, bawah bergerigi 6 titik yang bergoyang, 2 mata putih bujur dengan anak mata mengikut arah, kening putih marah. Minion jauh berwarna ungu `#5a2d58` + tongkat bola ungu; meriam `r 17` + meriam gelap di belakang; super `r 20` warna `#1f2b4d` + mahkota emas.
- Monster hutan dilukis tangan: Kelomang (cengkerang lingkaran oren, 6 kaki), Kumbang Merah (elips merah bertompok + sesungut, zarah api), Siput Biru (cengkerang lingkaran biru + bintang putih berkelip), Penyu Dakwat (cengkerang heksagon hijau tua besar, kepala bergoyang, bulatan merah amaran sebelum menghentak).

---

## 2. Struktur halaman

```
<main> (max-width 1100px, flex lajur, gap 14px)
  <section id="menu" class="card">
     .brand: <canvas id="heroCv" 220×220> + teks (tag, h1 "Arena Clawd" + lencana PRO senget oren, pengenalan, nota tulisan tangan)
     .topbar: .tabs (role=tablist) + butang bahasa [Indonesia | Melayu]
     #tabMain  #tabBelajar  #tabLatihan  #tabKemajuan
  <section id="game" hidden>
     .stage (tinggi min(80vh,700px), min 440px, sempadan, radius 12) berisi <canvas id="cv"> penuh + butang ⏸ dan 🔊 di kanan atas + .toast
     p.hint (tulisan tangan, petunjuk kawalan)
<div class="sheet" id="sheet" hidden><div class="paper" id="paper" role="dialog"></div></div>
```
Semua butang penting ada atribut `data-uji` (untuk ujian automatik): `mula`, `hero-<id>`, `spell-<id>`, `mode-satu/tiga`, `topik-<id>`, `tingkat-<id>`, `tab-<id>`, `lang-id/ms`, `opt`, `lanjut`, `beli-<id>`, `tutup-kedai`, `sambung`, `main-semula`, `latih-salah`, `ke-menu`, `latihan-mula`, `latihan-lanjut`, `latihan-salah`, `latihan-ulang`, `latih-<topik>`, `kemajuan-latih`, `kemajuan-hapus`, `jeda`.

Di telefon (≤760 px) kad hero 2 lajur, gambar di atas teks (64 px), senarai skill disembunyikan; spell 2 lajur; tahap (≤560 px) bertindan menegak.

---

## 3. Bahasa

Indonesia (lalai) dan Melayu. Semua teks melalui `L(id, ms)`; data teks disimpan sebagai `[id, ms]` dan dibaca dengan `tx(arr)`. Simpan dalam localStorage `arena-pro-lang`. Tukar bahasa = lukis semula menu dan label peta. Pasangan istilah (ID/MS): Toko/Kedai, Koin/Syiling, Level/Tahap, Soal/Soalan, Benar/Betul, Jawaban/Jawapan, Pulang/Balik, Lanjut/Teruskan, Penjumlahan/Tambah, Pengurangan/Tolak, Perkalian/Darab, Pembagian/Bahagi, Campuran/Campur, Sedang/Sederhana, Sulit/Sukar, kelas/tahun, detik/saat, roboh/runtuh, hancur/musnah, Markas/Pangkalan.

---

## 4. Menu bertab

Kepala: tag "Kertas & tinta · MOBA matematika · main sendiri" (MS: "Kertas & dakwat · MOBA matematik · main seorang"); pengenalan "Pilih hero Clawd, ikuti minion menyusuri lorong, robohkan menara Si Comot, lalu hancurkan Inti Istana Comot. Jawab soal untuk Soal Gempur, Ultimate Matematika, dan Ledakan Kombo."; nota "musuhnya hanya minion & menara, tanpa hero musuh!". Kanvas `heroCv` memaparkan peta mini mod yang dipilih, menara (kotak oren/biru), teras (kotak besar), kem (bulatan berwarna), titik minion bergerak di lorong, dan hero terpilih berlari (skala 5).

**Tab Main** (4 langkah bernombor + butang):
1. Pilih hero — 6 kad (kanvas 168×168 gambar hero skala 2,6 yang bergerak, peranan huruf kecil besar, nama, 3 skill dengan ikon; ult ditanda "(ultimate)"). Terpilih = latar putih + gelang emas 3 px.
2. Pilih spell — 5 kad (ikon, nama, penerangan).
3. Mod arena — 2 kad: **1 lorong** "Satu lorong tengah, 3 menara setiap pasukan. Pantas dan fokus, sesuai untuk pemula." / **3 lorong** "Peta penuh: lorong atas, tengah, bawah, hutan, dan 7 menara musuh. Lebih strategik."
4. Soalan matematik — cip topik (Campur, Tambah +, Tolak −, Darab ×, Bahagi ÷) dan segmen tahap (Mudah · tahun 1–2, Sederhana · tahun 3–4, Sukar · tahun 5–6) dengan keterangan "soalan makin sukar setiap naik 5 tahap".
Kemudian butang oren besar "Mula bertarung ▸", "Skor terbaik: N", dan 4 kotak cara main bergaris putus-putus: Gerak / Serang & skill / ⚡ Soalan Gempur / Menang. Semua pilihan disimpan dalam localStorage `arena-pro-set` `{hero, spell, mode, topik, diff}`. Lalai: pahlawan, kilas, satu, campur, mudah.

**Tab Belajar**: ayat pembuka + 4 kad (2 lajur, 1 lajur di telefon). Setiap kad: bulatan simbol (+ − × ÷), tajuk topik, maksud, visual emoji, 3 langkah bernombor, kotak contoh hijau, petua tulisan tangan hijau, butang "Latihan 5 soalan ▸".
- Tambah: "Tambah = menggabungkan dua kumpulan menjadi satu." 🍎🍎🍎 + 🍎🍎 = 🍎🍎🍎🍎🍎. Langkah: mula dari nombor lebih besar; kira ke depan sebanyak nombor kedua; nombor besar: puluh dahulu kemudian sa. Contoh **34 + 25** → 30 + 20 = 50, 4 + 5 = 9 → 50 + 9 = **59**. Petua: susunan boleh ditukar 3 + 8 = 8 + 3.
- Tolak: "Tolak = mengambil sebahagian daripada satu kumpulan." 🍬🍬🍬~~🍬🍬~~ = 🍬🍬🍬. Contoh **58 − 23** → 58 − 20 = 38, 38 − 3 = **35**. Petua: semak dengan songsang 35 + 23 = 58 ✓.
- Darab: "Darab = tambah berulang." ⭐⭐⭐ + ⭐⭐⭐ + ⭐⭐⭐ = 3 × 3. Langkah: 4 × 3 = 3+3+3+3 = 12; hafal sifir 2, 5, 10 dahulu; nombor besar dipecahkan. Contoh **14 × 3** → 10 × 3 = 30, 4 × 3 = 12 → **42**. Petua: 2 × 7 = 7 × 2.
- Bahagi: "Bahagi = membahagi sama rata kepada beberapa kumpulan." 🐟🐟 | 🐟🐟 | 🐟🐟 = 6 ÷ 3. Langkah: berapa kali 3 sampai 12; guna darab 3 × 4 = 12; pecahkan dahulu 48 = 40 + 8. Contoh **48 ÷ 4** → 40 ÷ 4 = 10, 8 ÷ 4 = 2 → **12**. Petua: bahagi ialah songsang darab.

**Tab Latihan**: tanpa masa dan tanpa musuh. Skrin awal memaparkan topik & tahap aktif, butang "Mula 10 soalan ▸" dan "Ulang soalan yang salah (N)". Soalan 1–4 tier 0, soalan 5–10 tier 1. Setiap soalan: baris kemajuan "tajuk · Soalan i/n · betul k", visual (jika ada), soalan besar, butang jawapan. Selepas menjawab: betul → "Betul!"; salah → "Jawapannya X." + kotak penerangan; kemudian butang "Teruskan ▸". Skrin akhir: cap skor k/n (hijau jika ≥60%, merah jika kurang), mesej (100% "Sempurna! Sedia bertarung di arena." / ≥60% "Bagus! Teruskan berlatih." / lain-lain "Tak apa, baca semula tab Belajar kemudian cuba lagi."), butang "Latihan lagi" dan "Main sekarang ▸". Latihan juga merekod kemajuan.

**Tab Kemajuan**: 4 kotak statistik (Kali main, Menang, Skor terbaik, Ketepatan keseluruhan (N soalan)), bar ketepatan ikut topik, "8 soalan salah terakhir" (soalan ditulis lengkap dengan jawapan, serta kotak penerangan), butang "Latih soalan yang salah" dan "Padam kemajuan" (dengan pengesahan).

Storan `arena-pro-kemajuan`: `{ main, menang, best, topik: { tambah:[betul,jumlah], kurang:[…], kali:[…], bagi:[…] }, salah: [ {ty,a,b,c,miss,ans,lv} … maks 8, terbaharu di depan ] }`. Setiap jawapan (di arena atau latihan) menambah statistik topik; jawapan salah dimasukkan ke depan senarai `salah` (tanpa pendua teks soalan); jawapan betul untuk soalan dalam senarai itu memadamkannya. Semua akses localStorage dibalut try/catch.

---

## 5. Penjana soalan (wajib tepat)

`mkQ(topik, tahap, tier)`. Tahap gabungan `lv = min(9, indeksTahap*3 + tier)` (mudah=0, sederhana=1, sukar=2). `tier` = `min(2, floor((tahapHero−1)/5))`, **+1 untuk Ultimate Matematik**.

Topik "campur": jika mudah dan tier 0, pilih rawak daripada [tambah, tolak, tambah, tolak, darab]; selain itu rawak daripada keempat-empat operasi.

**Tambah** a + b (julat a, b mengikut lv):
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
Visual emoji jika lv ≤ 1 dan hasil ≤ 10: emoji×a `+` emoji×b.

**Tolak** a − b: a mengikut lv = 2–10, 11–18, 20–59, 30–99, 50–99, 100–499, 300–999, 1000–4999, 1000–9999, 2000–9999. b: lv0 1..a−1; lv1 2–9; lv2 1–9; lv3 10..min(29,a−1); lv4 15..min(49,a−1); lv5 10–99; lv6 100..min(299,a−1); lv7–9 100..min(999,a−1). Visual lv0: emoji×hasil kemudian emoji×b dipangkah pudar.

**Darab** a × b: lv0 a∈{2,5,10}, b 1–5; lv1 a∈{2,3,4,5,10}, b 1–10; lv2 a 2–5, b 2–10; lv3 a 2–6, b 2–10; lv4 a 2–9, b 2–10; lv5 a 11–25, b 2–5; lv6 a 12–49, b 3–9; lv7 a 11–30, b 11–19; lv8 a 12–60, b 3–9; lv9 a 100–250, b 2–9. Untuk lv ≤ 4 tukar a dan b secara rawak 50%. Visual lv0 jika a,b ≤ 5: a kumpulan emoji×b dipisahkan "+".

**Bahagi** a ÷ b = c (b pembahagi, c hasil, a = b×c): lv0 b=2, c 1–5; lv1 b∈{2,5,10}, c 1–5; lv2 b 2–5, c 1–10; lv3 b 2–5, c 2–10; lv4 b 2–9, c 2–10; lv5 b 2–9, c 6–12; lv6 b 3–9, c 11–25; lv7 b 3–9, c 20–60; lv8 b 3–9, c 11–40; lv9 b 4–9, c 50–120.

**Nombor hilang**: jika lv ≥ 8, 50% soalan menjadi `□ op b = c` (jawapan a) atau `a op □ = c` (jawapan b).

Teks soalan: `a + b = ?`, simbol `+ − × ÷`, `□` untuk nombor hilang.

**Pilihan jawapan**: lv0 → 3 pilihan, selain itu 4. Pengecoh = jawapan ± salah satu daripada [1, 2, 10, 1, 2]; untuk darab biasa ditambah ±a dan ±b; jika jawapan ≥ 100 ditambah ±100 dan ±20. Tidak boleh negatif atau berganda; dirawak.

**Penerangan `explain(q)`** (senarai langkah bernombor, angka hasil ditebalkan):
- Nombor hilang: "Kotak □ ialah nombor yang hilang. Guna operasi **songsang**:" → `□ = c − b = a` (tambah, hilang depan), `□ = c − a` (tambah, hilang belakang), `□ = c + b` / `□ = a − c` (tolak), `□ = c ÷ b` / `□ = c ÷ a` (darab), `□ = c × b` / `□ = a ÷ c` (bahagi) → "Semak: a op b = c ✓".
- Tambah: jika a dan b < 10 → "Mula dari **a**, kira ke depan b langkah:" + deret `a+1 → … → c`. Selain itu pecahkan b = bahagian besar + baki (bahagian besar = b dibundarkan ke bawah kepada puluh; kepada ratus jika b ≥ 100) → `a + besar = m` → `m + baki = c`. Kemudian "Semak dengan songsang: c − b = a ✓".
- Tolak: jika b < 10 dan a ≤ 20 → kira ke belakang dengan deret; selain itu pecahkan b, tolak bahagian besar dahulu. "Semak dengan songsang: c + b = a ✓".
- Darab (lo = nombor kecil, hi = nombor besar): jika (lo ≤ 5 dan hi ≤ 12) atau hi ≤ 10 → "a × b bermaksud tambah berulang: hi ditambah lo kali." + `hi + hi + … = c`. Jika lo < 10 dan hi gandaan 10 → "kira hi/10 × lo, kemudian tambah satu sifar". Jika lo < 10 → pecahkan hi = besar + baki, darab setiap satu, jumlahkan. Selain itu (2 digit × 2 digit) pecahkan b. "Semak dengan songsang: c ÷ lo = hi ✓".
- Bahagi: "Cari nombor yang jika didarab b hasilnya a." Jika c ≥ 10 dan c bukan gandaan 10 → `a = b×puluh + b×sa → … ÷ b = puluh, … ÷ b = sa` → `puluh + sa = c`; selain itu `b × c = a`. Penutup "Jadi a ÷ b = c. Semak: c × b = a ✓".
Kotak penerangan: tajuk "Cara mengira", latar hijau muda `#eef4e2`, garis putus-putus hijau.

---

## 6. Peta dan dua mod

Dunia 2000×2000, dilukis sekali ke kanvas tersembunyi `MAP` dan peta mini `MINI` 220×220 (dilukis semula apabila mod/bahasa bertukar). Kamera mengikut hero (lerp 0,15), zum `min(lebar,tinggi)/760` (×1,08 jika skrin sangat lebar), dikepit ke tepi dunia, gegaran skrin ketika letupan.

- Pangkalan Clawd `BASE0 (190,1810)`, Istana Comot `BASE1 (1810,190)`, titik muncul hero `(330,1680)`. Pangkalan = bulatan r 250 (oren muda `#f6d1bd` / biru muda `#c9d2e8`) + lorekan + gelang r 200. Label tulisan tangan "Pangkalan Clawd", "Istana Comot", "~ sungai dakwat ~" (diputar 45°).
- Latar `#dfe5c6` + pattern butiran + 9000 goresan rumput `#8fae64`.
- Sungai: jalur tebal 130 px `#bcd8e3` bertepi dakwat dari (0,0) ke (2000,2000) yang berliku `sin(t*9)*30`, serta 60 riak putih.
- Lorong: jalur 150 px `#ecd9ae` bertepi dakwat + garisan tengah putus-putus.
  - atas: (190,1810) → (205,1500) → (205,205) → (1500,205) → (1810,190)
  - tengah: (190,1810) → (1810,190); `midP(t) = (190+1620t, 1810−1620t)`
  - bawah: (190,1810) → (500,1795) → (1795,1795) → (1795,500) → (1810,190)
- Denai 46 px (`#e6dcb8`, 55% lutsinar) dari setiap kem ke titik terdekat di lorong.

**Mod `satu` (1 lorong)**: lorong tengah sahaja. Menara musuh tier 1/2/3 pada `midP(0.6)`, `midP(0.72)`, `midP(0.86)`; menara kita tier 1/2/3 pada `midP(0.4)`, `midP(0.28)`, `midP(0.14)`. Kem: Siput Biru (600,900), Kumbang Merah (1500,1250), Kelomang (700,700) dan (1240,1240), Penyu Dakwat (1350,1550). Semak: (489,1299), (863,1349), (1137,651), (1511,701). 170 pokok.

**Mod `tiga` (3 lorong)**: menara musuh atas (820,205) t1, (1360,205) t2; tengah midP(0.62) t1, midP(0.78) t2, midP(0.88) **t3**; bawah (1795,1180) t1, (1795,640) t2. Menara kita: atas (205,1120), tengah midP(0.3), bawah (880,1795) (semua t1) + midP(0.14) t3. Kem: Biru (520,1050) & (1050,520), Merah (1050,1480) & (1480,1050), Kelomang (560,560) & (1440,1440), Penyu (1185,1185). Semak: (863,1349), (1137,651), (330,950), (1050,330), (1670,1050), (950,1670). 140 pokok.

**Pokok**: kedudukan rawak berbenih (benih berbeza setiap mod), r 26–52; ditolak jika < 115+r dari lorong, < 95+r dari sungai, < 330 dari pangkalan, < 150+r dari kem, < 75+r dari denai kem, < 95+r dari semak, atau bertindih pokok lain. Lukisan: bayang elips, `inkCircle` hijau `#8cb35a`/`#7aa64c`, lorekan `#3f6b22`, kilauan cerah. Pokok menghalang hero (perlanggaran bulatan r pokok + 0,7×r hero).

**Kem**: bulatan r 70 (penyu 95) krim/hijau pudar + bulatan dalam putus-putus.

**Semak**: elips 78×50, hijau `rgba(78,128,52,.55)` bertepi putus-putus + 46 helai rumput melengkung `#2f5418`.

---

## 7. Bangunan

| | HP | jarak | sela tembakan | cedera pada minion | cedera pada hero |
|---|---|---|---|---|---|
| Menara musuh t1/t2/t3 | 1900 / 2600 / 3000 | 300 | 1,2 s | 85 | min(110, 55 + 0,06×saat) |
| Menara kita t1/t2/t3 | 2400 / 2800 / 3200 | 300 | 1,2 s | 85 | – |
| Teras pangkalan kita | 4500 (pada BASE0+(20,−20), r 46) | 320 | 1,2 s | 85 | – |
| **Inti Istana Comot** | 6000 (pada BASE1+(−20,20), r 50) | 330 | 1,0 s | 110 | min(140, 85 + 0,06×saat) |

- Menara sentiasa memilih minion lawan terdekat dahulu; menara/teras musuh hanya menembak hero jika tiada minion dan hero tidak tersorok. Tembakan = sinar tebal (biru `#6b7fb0` / oren `#f2b04a`).
- **Rantai perisai** (untuk kedua-dua pasukan): tier 2 kebal selagi tier 1 di lorong yang sama berdiri; tier 3 kebal sehingga ada satu lorong yang semua menara tier 1–2 pasukan itu sudah runtuh; teras kebal selagi masih ada tier 3 pasukan itu. Bangunan kebal dilukis dengan kubah biru lutsinar berdenyut, bar HP kelabu-biru, dan pukulan ke atasnya memaparkan "Dilindungi!".
- Lukisan menara: tapak bulat kelabu, badan `wobRect` 34×74 (t3 ×1,12; teras ×1,45) warna muda + lorekan warna pasukan, bumbung warna pasukan, kristal belah ketupat terapung (emas untuk kita, biru untuk musuh). Teras musuh ada 4 benteng di bumbung. Label "T1/T2/T3" jika dekat hero; label "Inti Istana Comot" / "Teras Pangkalan". Menara runtuh = runtuhan kelabu.
- Menara musuh runtuh: +160 XP, +220 syiling, sepanduk "Menara musuh runtuh! (n/jumlah)"; apabila perisai teras pecah, toast "Perisai Inti Istana Comot pecah! Serang inti di kanan atas 🏰". Menara kita runtuh: toast amaran.
- **Menang** = Inti Istana Comot musnah. **Kalah** = teras pangkalan kita musnah.

---

## 8. Minion

| jenis | HP asas | cedera | jarak | laju | r | sela serangan |
|---|---|---|---|---|---|---|
| dekat | 280 | 18 | 52 | 105 | 15 | 1,0 s |
| jauh | 190 | 24 | 210 | 105 | 15 | 1,3 s |
| meriam | 520 | 30 (×2,6 pada bangunan) | 240 | 85 | 18 | 1,8 s |
| super | 900 | 45 | 60 | 110 | 20 | 0,9 s |

- Gelombang pertama 3 saat selepas mula, kemudian setiap 28 s. Setiap lorong, setiap pasukan: dekat, dekat, dekat, jauh (+ meriam setiap gelombang ke-3), muncul berturutan dengan sela 0,7 s, 150 px dari pangkalan. Skala HP dan cedera: musuh `1 + 0,05×gelombang`, kita `1 + 0,035×gelombang`. Maksimum 170 unit.
- AI: setiap 0,3 s cari sasaran terdekat dalam jarak+150 (unit dahulu, kemudian bangunan). Ada sasaran → dekati lalu serang; minion jauh/meriam menembak peluru (peluru kuning kita, titisan ungu musuh, bola meriam gelap). Tiada sasaran → berjalan ke titik lorong seterusnya. Minion saling menolak supaya tidak bertindih.
- Minion musuh mati dekat hero (≤700): +22 XP & +12 syiling, atau +34 XP & +28 syiling jika hero yang menumpaskan (meriam ×2). 3 tumpasan dalam 2,5 s → sepanduk "Tiga Sekali Gus!", 5 → "Ganas! Lima minion!".
- Lukisan: minion kita = Clawd kecil (skala 0,6; meriam 0,72; super 0,9 warna `#e9945f` bermahkota); minion musuh = Comot r 14 (meriam 17, super 20). Bar HP kecil ketika cedera (sentiasa untuk meriam/super).

---

## 9. Hero

Statistik (HP, +HP/tahap, serangan, +serangan/tahap, jarak, sela serangan, laju, pengganda skill):
| id | nama | warna | HP | +HP | ATK | +ATK | jarak | sela | laju | sp |
|---|---|---|---|---|---|---|---|---|---|---|
| pahlawan | Clawd Pahlawan (pejuang, dekat) | #d8714f | 1150 | 125 | 58 | 8 | 95 | 0,75 | 255 | 1 |
| perisai | Clawd Perisai (kebal) | #a3b86c | 1500 | 150 | 44 | 6 | 90 | 0,85 | 240 | 1 |
| pemanah | Clawd Pemanah (jauh) | #f2c14e | 860 | 95 | 52 | 8 | 270 | 0,62 | 250 | 1 |
| sihir | Clawd Ahli Sihir | #7f9fd9 | 820 | 90 | 46 | 7 | 235 | 0,85 | 245 | 1,25 |
| bayang | Clawd Bayang (pembunuh, dekat) | #8a78b8 | 820 | 92 | 62 | 9 | 92 | 0,60 | 278 | 1 |
| penyembuh | Clawd Penyembuh (sokongan, jauh) | #f19bb4 | 900 | 100 | 40 | 6 | 240 | 0,80 | 248 | 1,1 |

Rumus:
- `cederaSkill(asas, nisbah, n) = (asas + seranganBerkesan × nisbah) × (1 + 0,22×(tahapSkill−1)) × sp × penggandaUltimate`
- `masaTungguSkill(n) = masaTungguAsas × max(0,4, 1 − cdrItem − (buffBiru ? 0,25 : 0)) × (1 − 0,06×(tahapSkill−1))`
- Serangan berkesan = serangan × 1,4 (buff Kuasa) × 1,1 (buff Merah).
- XP untuk naik = `90 + tahap×60`, tahap maksimum 15. Naik tahap: statistik dikira semula, +200 HP, tiang cahaya emas, teks "Tahap N!". Tahap 4 membuka ultimate (sepanduk "Ultimate terbuka! …"); tahap lain memberi 1 mata skill (butang + kuning). Skill 1–2 maks tahap 5; ultimate maks 3 dan memerlukan tahap hero 8 kemudian 12.
- Pulih semula jadi 0,4% HP/s (1,2% ketika buff Biru). Dalam pangkalan (r 250) pulih 22% HP/s. Syiling pasif +1,6/s, syiling awal 300.
- Tumbang: muncul semula selepas `6 + 0,6×tahap` saat di titik muncul; 0,9 s selepas tumbang muncul soalan (lihat §11).
- Balik (B): diam 3 s (gelang kemajuan biru), batal jika bergerak/menyerang/terkena cedera.
- Serang automatik ketika diam (kecuali dalam semak) atau ketika butang serang ditahan; menyasar unit terdekat dahulu, kemudian bangunan. Hero jarak dekat = tetakan terus; jarak jauh = panah (Pemanah), bola ungu (Ahli Sihir), hati (Penyembuh).

Skill (angka dalam kurungan = cedera asas + nisbah × serangan, dimasukkan ke rumus `cederaSkill`; masa tunggu asas dalam saat; arah bidik = musuh terdekat, atau arah joystick, atau serong depan):
- **Pahlawan**: Q Terjah Pensel (6 s) meluru 1300/s selama 0,2 s, kena musuh yang dilalui `(70 + 1,2×ATK)` + perlahan 1,5 s. E Pusing Puting (9 s) kawasan 175 `(60 + 1,1×ATK)`, pulih 9% HP, cedera diterima ×0,7 selama 3 s. R Hentakan Bumi (30 s) lompat 0,5 s ke sasaran (≤480), kebal ketika melayang, mendarat kawasan 230 `(170 + 2×ATK)` + pengsan 1,3 s.
- **Perisai**: Q Hentam Perisai (6 s) kawasan 150 berpusat 90 px di depan, `(60 + 1,0×ATK)`, pengsan 0,8 s. E Tembok Kertas (12 s) perisai 30% HP + cedera diterima ×0,5 selama 4 s + minion musuh dalam jarak+220 dipaksa menyerang hero; teks "Mari serang aku!". R Benteng Gergasi (32 s) gelang 270 `(150 + 1,6×ATK)` + pengsan 1,6 s + perisai 25%.
- **Pemanah**: Q Panah Dakwat (5 s) panah besar 1000/s selama 0,75 s menembusi `(85 + 1,3×ATK)`. E Langkah Angin (8 s) lompat menjauh 1000/s 0,18 s, 3 serangan seterusnya ×1,6. R Hujan Panah (28 s) 8 gelombang panah setiap 0,25 s di kawasan 200 `(36 + 0,5×ATK)` + perlahan.
- **Ahli Sihir**: Q Bola Bintang (4 s) bola 650/s meletup kawasan 115 `(100 + 1,6×ATK)`. E Rantai Kilat (8 s) mengenai sasaran + lompat ke 3 musuh lain (≤230 setiap lompatan) `(75 + 1,2×ATK)` + pengsan 0,7 s. R Hujan Bintang (30 s) 8 bintang jatuh setiap 0,15 s kawasan 115 `(110 + 1,3×ATK)`.
- **Bayang**: Q Lompat Bayang (7 s) meluncur 1500/s ke unit musuh terdekat (≤420) `(80 + 1,3×ATK)`; jika sasaran itu tumpas → masa tunggu Q diset semula ke 0,3 s + teks "Sedia semula!". E Tikam Kembar (5 s) 2 tikaman `(55 + 1,0×ATK)` bersela 0,18 s. R Tarian Bayang (30 s) 1,6 s tidak boleh diserang/disasar, setiap 0,2 s memukul semua musuh radius 230 `(40 + 0,55×ATK)`, bayang hero bermunculan.
- **Penyembuh**: Q Cahaya Pulih (8 s) pulih 15% HP diri, minion kawan ≤320 pulih 40%, kawasan 180 `(40 + 0,6×ATK)`. E Gelembung Lindung (14 s) minion kawan ≤350 mendapat gelembung 6 s (cedera diterima ×0,5, serangan ×1,5). R Panggil Pasukan (40 s) memunculkan minion super di sebelah hero menuju lorong terdekat: 5 jika soalan ultimate betul, 3 jika salah; HP ×(1 + 0,25×(tahapUlt−1)).

**Spell** (F): Kilas ⚡ 40 s (pindah 240 px), Pulih 💚 50 s (+30% HP), Hukuman 🗡 30 s (kilat ke monster/minion ≤260: 650+40×tahap pada monster, 500 pada minion), Pecut 👟 45 s (+60% laju 5 s), Perisai 🛡 50 s (perisai 30% HP 4 s).

---

## 10. Monster hutan (pasukan neutral)

| | HP | cedera | r | muncul semula | syiling | XP | hadiah |
|---|---|---|---|---|---|---|---|
| Kelomang | 520 | 0 (lari) | 22 | 45 s | 60 | 30 | +35% HP + laju 8 s |
| Kumbang Merah | 1300 | 32 | 28 | 70 s | 110 | 80 | buff Merah 70 s: +10% serangan, serangan membakar 3 s + perlahan |
| Siput Biru | 1300 | 28 | 28 | 70 s | 110 | 80 | buff Biru 70 s: masa tunggu skill −25%, pulih ×3 |
| Penyu Dakwat | 3200 | 60 (hentakan kawasan 150 selepas amaran 0,8 s, setiap 2,4 s) | 44 | 120 s (muncul pertama pada saat ke-60) | 260 | 160 | perisai 40% HP + 1 minion super di setiap lorong |

Monster hanya menyerang jika dipukul hero, kembali ke kem jika terlalu jauh (>380 dari kem atau hero >520) sambil pulih 25%/s. Nama monster dipaparkan apabila hero dekat.

---

## 11. Soalan dalam pertarungan (teras game)

Game berhenti (state `soalan`) selama soalan dipaparkan dalam helaian dialog. Helaian berisi: tag, tajuk, kotak hadiah bergaris putus-putus (ikon besar + teks), label kecil "TOPIK · TAHAP · tahap N", visual emoji (jika ada), soalan besar (Geist 800, 40–60 px), 3–4 butang jawapan besar (2 lajur, 3 lajur jika 3 pilihan), ruang maklum balas tulisan tangan, ruang penerangan, baris kombo "Kombo ●○○ · 3 betul berturut = Letupan Kombo", konfeti ketika betul. Kekunci 1–4 memilih jawapan.

Jenis soalan:
1. **Soalan Gempur** — butang ⚡ "SOALAN" (G) muncul apabila hero berjarak < jarak+130 dari menara/teras musuh yang tidak kebal; butang berdenyut emas ketika sedia, bermasa tunggu bulat ketika tidak. Masa tunggu awal 8 s. Betul → pensel gergasi (kuning, hujung kayu, pemadam merah jambu, panjang ~214 px) jatuh dari langit 0,5 s dengan bayang merah di tanah, kemudian mengurangkan **18% HP maksimum menara (teras 12%)** terus (menembusi item/perisai), gegaran skrin, serpihan; masa tunggu 20 s. Salah → masa tunggu 12 s.
2. **Ultimate Matematik** — menekan R memunculkan soalan tier+1. Betul → ultimate dengan pengganda **1,5**; salah → **0,7** (ultimate tetap keluar selepas butang Teruskan). Ikon ✏️ kecil pada butang R.
3. **Soalan kilat** — pertama pada saat ke-55, kemudian setiap 60–75 s (hanya ketika hero hidup). Hadiah rawak: Kuasa Pensel ⚔ (+40% serangan 25 s), Kasut Ajaib 👟 (laju ×1,3 & kelajuan serangan +25% 25 s), Perisai Kertas 🛡 (cedera diterima ×0,5 25 s), Pulih Penuh 💚 (HP penuh + semua masa tunggu skill 0), Peti Syiling 🪙 (+200), Meriam Bonus 💣 (1 minion meriam + 1 minion super keluar di setiap lorong kita).
4. **Soalan ketika tumbang** — jika masa bangkit masih > 1,5 s. Betul → terus bangkit.

Setiap jawapan betul: +40 XP, +30 syiling, kombo +1, bunyi betul, konfeti, maklum balas hijau "Betul! … +40 XP +30 🪙", tutup automatik 1,25 s. Setiap jawapan salah: kombo menjadi 0, butang salah merah bergegar, butang betul hijau, "Jawapannya X. Tak apa, lihat caranya:" + kotak penerangan + butang "Teruskan ▸" (Enter/Space juga). **Tiada hukuman tambahan ketika salah.**

**Letupan Kombo**: apabila kombo mencapai 3 selepas helaian ditutup → kombo kembali 0, sepanduk "LETUPAN KOMBO! 3 betul berturut 💥", +150 syiling, letupan kawasan 280 di sekeliling hero dengan cedera `220 + 2,2×serangan` pada semua musuh kecuali teras.

Apabila tier soalan naik (tahap 6 dan 11) muncul toast "Soalan naik tahap! Kini lebih mencabar ✏️".

---

## 12. Semak

`h.inBush` = kedudukan hero di dalam elips semak. Hero **tersorok** jika di dalam semak dan sudah ≥ 1,2 s sejak kali terakhir menyerang/menggunakan skill (atau ketika Tarian Bayang). Hero tersorok tidak disasar minion/menara, peluru yang sedang menuju hero hilang. Dalam semak hero tidak menyerang automatik. Hero dilukis 50% lutsinar dengan label "🌿 tersorok" (hijau) atau "🌿 kelihatan (baru menyerang)" (merah bata).

---

## 13. HUD kanvas

- Kiri atas: peta mini (saiz `min(160, 0,28×sisi terpendek)`) berbingkai, kotak menara/teras, titik minion (lebih besar untuk meriam/super), titik monster berwarna, titik hero bertepi putih, kotak kamera.
- Di bawahnya: kotak "Nama · Thp N" + bar XP emas; kotak kuning `#fbefc9` "🪙 syiling" + "🛒 Kedai" (ketik untuk membuka kedai) + titik merah berdenyut jika ada item mampu dibeli.
- Tengah atas (berpindah ke bawah peta mini di skrin sempit): "mm:ss  🗼menara/jumlah  ⚔tumpasan"; di bawahnya kotak "Kombo" dengan 3 bulatan (oren `#e8703a` diisi); kemudian kotak buff aktif "🔥 12s".
- Bar HP Inti Istana Comot apabila hero ≤650 darinya (ungu, kelabu-biru jika kebal, ikon 🛡).
- Sepanduk tulisan tangan senget kuning pada 30% tinggi skrin (2,4 s, muncul membesar). Toast HTML di atas. Ketika tumbang skrin digelapkan + "Clawd bangkit dalam N…".
- Angka terapung Caveat: emas (serangan hero), ungu (skill), merah (cedera pada kita), hijau (pulih).
- Bar HP hero dengan bahagian perisai putih, lencana tahap emas di kirinya.

Butang sentuh (u = skala `clamp(0,78, sisi terpendek/430, 1,25)`, pusat serang `(lebar−76u, tinggi−76u)`):
- SERANG r 46u warna hero; skill Q/E/R r 32u pada offset (−118,−8), (−96,−100), (−12,−128); spell F r 25u pada (−196,18); balik 🏠 B r 22u pada (−196,−52); ⚡ Soalan Gempur r 34u pada (−30,−214) hanya apabila tersedia.
- Masa tunggu = juring gelap; angka saat di tengah; titik emas di bawah butang = tahap skill; 🔒 jika ultimate belum terbuka; butang + emas kecil di kiri atas butang skill jika boleh dinaikkan.
- Joystick: muncul di titik sentuhan pada 60% kiri skrin, radius 58u, tombol 26u warna hero; ketika tidak digunakan dipaparkan pudar di kiri bawah.

Papan kekunci: WASD/anak panah gerak, J/Space serang, Q E R (atau 1 2 3) skill, Shift/Ctrl+Q/E/R naikkan skill, F spell, G Soalan Gempur, B balik, I kedai, P/Esc jeda. Game jeda automatik apabila tab disembunyikan.

---

## 14. Kedai

Helaian "Kedai 🪙 N", teks "Beli sehingga 6 item. Game berhenti semasa kedai dibuka.", baris 6 slot beg, grid 2 lajur:
- **Ramuan Nyawa** 🧪 90 syiling: terus +40% HP maksimum, tidak guna slot, boleh dibeli berulang kali (dinyahaktif jika HP penuh).
- Pedang Pensel 🗡 300 (+22 serangan) · Kasut Lari 👟 250 (+40 laju) · Jaket Kertas 🧥 300 (+350 HP) · Jam Pasir ⏳ 400 (masa tunggu skill −15%) · Tongkat Bintang 🪄 450 (skill +30%) · Perisai Buku 📘 400 (cedera diterima −15%) · Daun Penawar 🍃 450 (pulih 12% daripada cedera diberi) · Busur Laju 🏹 350 (kelajuan serangan +20%).
Item yang dimiliki ditanda ✓ hijau muda. Baris statistik: Serangan · Nyawa x/y · Laju. Butang "Kembali bertarung ▸".

---

## 15. Skrin akhir = laporan pembelajaran

- Menang (1,5 s selepas teras musnah): cap "MENANG!" hijau senget, 3 bintang (1 + [tumbang ≤ 1] + [ketepatan ≥ 75%]), tajuk "Inti Istana Comot musnah! Arena milik Clawd.", konfeti, bunyi menang.
- Kalah: cap "KALAH" merah, "Teras Pangkalan Clawd musnah", petua.
- "Laporan pembelajaran": 8 kotak statistik — Soalan betul a/b, Ketepatan %, Kombo terpanjang, Pensel gergasi, Masa, Menara runtuh x/y, Minion ditumpaskan, Tahap Clawd.
- "Ketepatan ikut topik": bar (hijau ≥75%, emas ≥50%, oren <50%) dengan "betul/jumlah · %".
- "Soalan yang perlu diulang": maks 5 soalan salah (soalan lengkap dengan jawapan bergaris bawah, "kamu jawab X", kotak penerangan); jika semua betul: "Semua soalan betul — hebat!".
- Skor = `tumpasan×20 + menara×300 + monster×80 + betul×150 + letupanKombo×200 + (menang ? 1500 + max(0, 1200 − saat)×2 : 0)`; "· skor terbaik baharu!" jika memecahkan rekod.
- Butang: "Main semula", "Latih soalan yang salah" (membuka tab Latihan berisi soalan-soalan tadi), "Menu".

---

## 16. Jeda dan bunyi

Jeda: helaian "Jeda / Minion kedua-dua pasukan berehat sekejap." dengan "Sambung ▸" dan "Menu". Bunyi dengan Web Audio (tanpa fail): tembak, tetak, pukul, letus, kilat, letupan, meluru, pusing, guruh, ultimate, bintang, hentak, naik tahap, syiling, sakit, pulih, betul (5 nada naik), salah, menang, kalah, ketik, kilas, kombo; muzik latar arpeggio 126 bpm (4 kord) yang berhenti ketika soalan/jeda. Senyap disimpan dalam `arena-pro-mute`.

---

## 17. Cangkuk ujian `window.__game`

`keadaan` ('menu'|'main'|'soalan'|'kedai'|'jeda'|'menang'|'kalah'), `info` (mode, t, hp, max, lvl, sl, pts, cd, emas, item, menara, menaraTotal, bunuh, monster, buff, inti, intiPerisai, mati, kombo, komboMaks, ledakan, gempurCd, gempurSiap, soal, benar, tersembunyi, semak, minion mengikut jenis), `soalIni` (teks, jawab, ty, lv, why, penjelasan), `langkah(saat)` (simulasi 30 fps), `gerak(x,y)`, `ke(x,y)`, `skill(n, langsung)`, `spell()`, `naik(n)`, `beli(id)`, `kedai()`, `tutupKedai()`, `balik()`, `xp(n)`, `emas(n)`, `soalan()`, `jawabUji(betul)`, `lanjut()`, `runtuh(n)`, `gempur()`, `hancurInti()`, `hancurKita()`, `cedera(n)`, `monster(jenis)`, `semak(i)`.

---

## 18. Senarai semak sebelum siap

Uji sendiri dengan pelayar pada saiz **390×844** dan **1280×800**, tanpa ralat di konsol:
1. Menu kemas (kad hero tidak terpotong), tukar bahasa Indonesia ↔ Melayu mengubah semua teks.
2. Mod 1 lorong dan 3 lorong boleh dimulakan; minion keluar, berjalan, bertarung.
3. Keenam-enam hero: Q, E, R berfungsi dan bermasa tunggu.
4. Soalan Gempur muncul dekat menara, jawapan betul menjatuhkan pensel dan mengurangkan HP.
5. Jawapan salah memaparkan penerangan + Teruskan; Ultimate Matematik 150%/70%.
6. 3 betul berturut = Letupan Kombo; soalan ketika tumbang membangkitkan hero.
7. Semak menyorokkan hero; kedai & ramuan berfungsi.
8. Rantai perisai betul; menang dan kalah memaparkan laporan pembelajaran; Main semula dan Latih soalan yang salah berfungsi.
9. Tab Belajar, Latihan, Kemajuan berfungsi dan tersimpan selepas halaman dimuat semula.
10. Bina folder `netlify/` + zip, jalankan `python3 -m http.server` dalam folder itu dan pastikan game terbuka di `http://localhost:8000/`.
