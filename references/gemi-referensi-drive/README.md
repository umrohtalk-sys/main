# Referensi dari Google Drive: `video gemi/gemi-referensi`

Ringkasan video referensi Anda (95 detik, landscape, Bahasa Melayu). Yang disimpan di sini hanya bagian penting, bukan seluruh folder `_render/node_modules` dan lainnya.

| File | Isi |
|---|---|
| [`grid1.jpg`](grid1.jpg) | Lembar kontak 48 frame dari video asli |
| [`detail1.jpg`](detail1.jpg) | 8 frame resolusi besar (REFERENSI, "Ha…", BERI ARAH, JELAS, dll.) |
| [`asal/scenes.js`](asal/scenes.js) | Kode 15 babak asli (salinan, untuk dipelajari) |
| [`asal/words.json`](asal/words.json) | Timing tiap kata dari Whisper (209 kata, 0–89,9 detik) |

Sumber di Drive: `video gemi/gemi-referensi/` berisi `scenes.js`, `_src/`, `_tr/`, `_render/`, dan `out/gemi-referensi-95s.mp4`. Suaranya ada di `_tr/suara16.pcm` (float32, 16 kHz, mono, 90,3 detik).

## Gaya yang dipakai

- **Font:** Archivo 800–900 untuk judul, Instrument Serif *italic* untuk baris "suara" atau kutipan, dan Space Mono untuk label teknis.
- **Palet jenama (Si Bulat):** kertas `#F9F3E5`, tinta `#191512`, oren `#F05323`, mango `#F8A81B`, hijau `#12946A`, ungu `#8B7BE8`, merah jambu `#F7A8C4`.
- **Maskot:** Si Bulat, gumpalan oren dengan 8 ekspresi (`calm`, `happy`, `wink`, `thinking`, `cheer`, `oops`, `look`, `blink`). Masuk dengan efek *squash & stretch*.
- **Struktur:** 15 babak. Kata besar muncul tepat saat diucapkan. Transisi berganti-ganti antara *wipe*, *slats*, *iris*, dan *push*.
- **HUD:** nomor babak (`03/15 — REFERENSI`), kode waktu, bar kemajuan, dan sari kata kecil di bawah.
- **Audio:** suara ditambah skor musik dari Web Audio, dengan *sidechain ducking*.

## Yang diperbaiki di remake

| Asli | Remake (`projects/gemi-referensi-remake`) |
|---|---|
| Latar berganti warna tiap babak (hitam, oren, mango, krem) | **Satu latar kertas** untuk seluruh video. Warna hanya dibawa oleh tipografi dan elemen, jadi mata fokus pada kata |
| Ada musik latar | **Tanpa musik**: suara saja, dinormalkan ke −16 LUFS |
| Sebagian besar ilustrasi diam | **Lebih interaktif**: kursor mengklik, tombol simpan, toast "Disimpan", mengetik prompt, kotak centang ditandai satu per satu, kartu jadi tangga, dan Si Bulat melompat |
| Engine terikat ke proyek | Engine `kinetik.js` bisa dipakai ulang lewat skill `video-tipografi-melayu` |
| 15 babak | 16 babak. Ada babak "SIMPAN" yang menyambung langsung dari dinding inspirasi, dan penutup kiasmus "Belajar bina → Bina untuk belajar" dengan kata yang benar-benar bertukar tempat |
