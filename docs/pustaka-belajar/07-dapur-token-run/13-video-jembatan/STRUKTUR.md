# Formula jembatan: topik cikgu ke produk

Tujuan: video tentang cikgu (yang sudah terbukti tayang besar) berakhir dengan satu langkah kecil yang cikgu boleh buat sendiri, dan satu CTA kata kunci. Produk muncul sebagai contoh, bukan sebagai iklan.

## Susunan 70 saat (9:16, BM santai ~150 kata/minit)

| Masa | Bahagian | Isi |
|---|---|---|
| 0–3 s | Cover judul | Teks besar, satu ayat, soalan atau janji. Tiada logo produk. |
| 3–55 s | Isi topik cikgu | 4 babak: hook, angka atau cerita, sebab, soalan penonton. Sama seperti format juara. |
| 55–68 s | Jembatan | Satu transisi ayat, satu teks layar, demo layar produk 10–13 s. |
| 68–70 s | CTA | Ucapan "Komen [KATA KUNCI]" + teks layar yang sama. |

Caption IG: baris pertama wajib CTA ("Komen [KATA KUNCI] untuk link"). Alasan: rapor S1 menunjukkan komen minat produk naik bila CTA jelas di caption dan akhir video, dan reel tanpa CTA hanya 2 dari 72 komen minat.

## 5 pola kalimat transisi (topik ke produk, tidak terasa jualan)

Setiap naskah pakai satu pola sahaja. Jangan gabung dua pola dalam satu video.

1. **Masalah lalu cara kecil.** "Masalah ni bukan baru. Cikgu boleh cuba satu cara kecil."
2. **Pengakuan batas.** "Saya tak boleh tukar gaji. Tapi cikgu boleh tukar cara kongsi maklumat macam ni."
3. **Soalan pembuka.** "Persoalannya, siapa yang sediakan bahan untuk kelas esok? Ada cara untuk ringankan itu."
4. **Cikgu buat sendiri.** "Cikgu tak perlu tunggu sekolah beli alat. Cikgu boleh buat ini sendiri dalam beberapa minit."
5. **Contoh dari kerja harian.** "Ini cara yang saya tunjuk dalam demo. Cikgu boleh tiru langkah yang sama dengan topik sendiri."

Peraturan: transisi mesti merujuk masalah yang baru disebut dalam isi topik. Jangan sebut nama produk sebelum 55 s. Jangan guna perkataan "beli", "harga", "diskaun" dalam jembatan.

## Tiga aturan kandungan

1. **Angka wajib ada sumber.** Setiap angka dalam isi topik ada sumber di bahagian Sumber templat. Jika belum disahkan, tulis "anggaran" atau tunda angka itu.
2. **Tiada bait politik.** Bandingan negara fokus kepada guru: gaji, masa, kelas, hormat. Komen rapor menunjukkan permintaan bandingan negara besar, tetapi reel yang menjurus ke politik Indonesia-Malaysia menarik komen keluhan, bukan pembeli.
3. **Demo nyata sahaja.** Setiap jembatan merakam skrin produk sebenar. Tiada mockup, tiada skrin palsu.

## Jadual CTA dan landing (ikut brief)

| Kata kunci | Landing dalam automation Zernio | Dipakai untuk |
|---|---|---|
| GAME | Demo Prompt Generator (menurut brief). Lihat nota di bawah. | Naskah dengan demo game Clawd (04, 08) |
| PROMPT | Demo Prompt Generator | 01, 05, 09 |
| VIDEO | LP Prompt Video | 02, 07, 10 |
| TOOLS | LP Prompt Video (menurut brief) | 03, 06 |

Nota penting: GAME dipetakan ke demo Prompt Generator, tetapi naskah 04 dan 08 menunjukkan game Clawd. Sebelum tayang, sahkan pautan GAME dalam automation. Jika kekal ke Prompt Generator, tukar CTA 04 dan 08 kepada PROMPT (dan kemas kini bank-konten-items.json). Kata kunci NAK (LP tools) tidak digunakan dalam bank ini.

## Bank b-roll yang perlu dirakam (telefon, skrin penuh, 9:16)

- **Prompt Generator** (generator.edugamelabs.com): pilih gaya, taip topik, papar hasil prompt. Rakam 25–30 s, potong ikut babak.
- **Prompt Generator Video** (generator.edugamelabs.com/prompt-video): senarai 49 gaya, pilih satu, papar prompt.
- **Galeri Prompt Video** (galeri-prompt-video.netlify.app): tunjuk contoh, scroll cepat, buka satu prompt.
- **LP Prompt Video** (lpvideo.edugamelabs.com): halaman utama, 3 bahasa, senarai gaya.
- **Dunia Clawd (mod soal guru)**: cikgu tulis soalan, pautan atau PIN untuk murid, skrin murid main, laporan ringkas. Rakam gameplay sebenar, bukan mockup.
- **Modul Soal Guru**: skrin buat soalan dan paparan laporan.

Rakam setiap klip dua kali (satu bersih tanpa notifikasi). Simpan master di folder projek, bukan di Downloads.

## Fail dalam folder ini

- `templat/01` hingga `templat/10`: naskah penuh, teks layar, shot list, CTA, caption IG, thread pendamping, sumber.
- `bank-konten-items.json`: 10 reel dan 10 thread dalam skema S8.
- `ujian-ab.md`: cara ukur minggu depan.
- `LAPORAN.md`: ringkasan dan perkara perlu disahkan.
