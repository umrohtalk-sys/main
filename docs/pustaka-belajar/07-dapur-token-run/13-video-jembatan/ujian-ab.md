# Ujian A/B: adakah jembatan menambah minat produk?

Soalan: dengan topik cikgu yang sama, adakah CTA dan jembatan produk di hujung video menghasilkan lebih komen minat produk per 1.000 tayangan, tanpa menurunkan tayangan?

## Metrik utama

**Komen minat per 1.000 tayangan** = (komen yang mengandungi kata kunci GAME, PROMPT, VIDEO atau TOOLS) / tayangan x 1.000

- Kira hanya komen dari pengguna. Balasan auto-DM akun tidak dikira.
- Kata kunci dikira sekali setiap akaun. Komen "Prompt" dan "prompt pls" dikira sebagai satu minat.
- Tayangan diambil dari rapor reel pada hari ke-7 selepas siar (tetap, sama untuk semua varian).

Metrik sekunder (untuk semak, bukan keputusan): tayangan median, share%, save%, watch time. Jika tayangan varian B turun lebih 30% berbanding A, jangan buat keputusan dari metrik komen sahaja.

## Pengumpulan data (penting)

Rapor S1 hanya ambil 201 komen dari 10 reel, terbaru dulu, dan reel #1 cuma 72 daripada 1.975 komen. Itu sampel bias. Untuk ujian ini:

1. Ambil **semua** komen setiap reel melalui pagination comments_get_inbox_post_comments sampai habis, atau tetapkan had tarikh tetap (contoh: 7 hari pertama selepas siar).
2. Simpan mentah dalam fail JSON (satu fail setiap reel, tarikh tangkap). Jangan kira dengan tangan.
3. Kira kata kunci dengan skrip, bukan dengan mata.

## Reka bentuk

Setiap pasangan ialah satu topik cikgu yang sama, dua versi:

- **A (kawalan):** isi topik + ucapan penutup biasa (contoh "Komen pendapat anda"). Tiada jembatan, tiada demo, tiada kata kunci produk.
- **B (jembatan):** isi topik sama + jembatan 55–68 s + CTA kata kunci + caption IG dengan CTA di baris pertama.

Hanya satu perkara yang berubah: jembatan dan CTA. Hook, cover, durasi, waktu siar, dan muzik kekal sama.

Contoh pasangan minggu pertama:
- Pasangan 1: topik perbandingan negara (Thailand) A vs B. Ambil 02 sebagai B. Buat A dengan sama tetapi buang babak 55–68 s.
- Pasangan 2: karier tadika A vs B (templat 01).

Jadual siar: pasangan siar dalam tetingkap sama (hari dan jam sama, selang 3 hari antara pasangan supaya tidak saling mempengaruhi).

## Saiz sampel dan keputusan

- Minimum 4 reel setiap varian (8 reel total) sebelum buat keputusan.
- Minimum 20 komen minat setiap varian. Di bawah itu, catat sahaja sebagai "belum cukup data".
- Keputusan B menang jika kadar komen minat B lebih tinggi sekurang-kurangnya 30% daripada A, dan tayangan B tidak turun lebih 30%.
- Jika tidak ada perbezaan jelas, kekalkan jembatan sebagai pilihan kecil dan uji CTA lain (TOOLS lawan VIDEO) pada topik yang sama.

## Baseline untuk minggu depan

Dari rapor S1 (sampel, bukan kadar penuh):
- Perbandingan negara: 2,32 komen per 1.000 tayangan (semua komen, bukan minat sahaja).
- Produk-jembatan: 6,4 komen per 1.000 tayangan (semua komen).
- Reel Cikgu Aina dengan CTA TOOLS: 15 komen minat dalam 16 sampel. Tayangan reel itu tidak ada dalam rapor, ambil dari data S1 sebelum mengira baseline.

Ukur baseline minat sebenar pada minggu pertama: sahkan tayangan reel 1–2 minggu lalu, kemudian kira komen minat dengan kaedah di atas.

## Lembaran hasil (salin untuk setiap pasangan)

| Pasangan | Topik | Varian | Reel | Tayangan (hari 7) | Komen minat | Komen minat/1k | Keputusan |
|---|---|---|---|---|---|---|---|
| 1 | Thailand | A | | | | | |
| 1 | Thailand | B | 02 | | | | |

## Peringatan

- Akaun ini cuma satu. Satu reel viral boleh mengubah angka. Lihat median, bukan purata.
- Auto-DM kata kunci membalas dalam 10–20 saat. Itu bagus untuk pengalaman, tetapi jangan kira DM sebagai minat komen.
- Jangan ubah CTA di pertengahan minggu.
