# Arena Clawd Pro — status (24 Okt 2026)

STATUS: **selesai dan bisa dimainkan.** Semua 11 poin daftar fitur di bawah sudah dibuat dan lulus uji main otomatis
(HP 390×844 dan desktop 1280×800, lihat `bukti/laporan.md`).

- `game.html` = sumber (format Artifact, tanpa doctype). `sh build.sh` menulis `index.html` lengkap.
- `uji/senario.json` = skenario uji main (format sama dengan Arena Clawd v2). `bukti/` = tangkapan layar + laporan.
- Sampul: `sampul/arena-clawd-pro.jpg` (960×600). Entri galeri sudah ditambah di array `DATA` pada `index.html` akar.
- Prompt detail 3 bahasa untuk Prompt Generator: `PROMPT-id.md`, `PROMPT-ms.md`, `PROMPT-en.md` di folder ini.

## Yang sudah dibuat
1. Bahasa Indonesia (lalai) + Melayu: `L(id, ms)` / `tx([id, ms])`, disimpan di localStorage `arena-pro-lang`.
2. 6 hero: Pahlawan, Perisai (tank), Pemanah, Penyihir, Bayangan (assassin), Penyembuh (support), masing-masing 3 skill + aksesori sendiri.
3. Mode `satu` (1 lorong, 3 menara per tim) dan `tiga` (peta v2 + menara tier 3). Kamp, semak, dan pohon dijana per mode; jalur kamp→lorong dikosongkan.
4. Rantai perisai: tier 2 ← tier 1 lorong sama; tier 3 ← satu lorong bersih; inti ← tier 3. Menang = Inti Istana Comot hancur; kalah = inti kita hancur.
5. Minion: dekat, jauh, meriam (tiap gelombang ke-3, damage 2,6× ke bangunan), super (dari Penyembuh, Penyu, dan buff Meriam Bonus).
6. Semak: hero tidak terlihat minion/menara musuh sampai 1,2 s setelah menyerang (tidak menyerang otomatis di dalam semak).
7. Kuis di dalam gameplay: Soal Gempur (⚡/G), Ultimate Matematika (tier +1, 150%/70%), soal kilat 60–75 s (6 buff), soal saat tumbang, kombo 3 benar = Ledakan Kombo, tingkat naik tiap 5 level, penjelasan cara + tombol Lanjut saat salah. Benar = +40 XP +30 koin.
8. Menu bertab: Main · Belajar (4 kartu + Latihan 5 soal) · Latihan (10 soal tanpa tekanan) · Kemajuan (`arena-pro-kemajuan`).
9. Layar akhir = laporan belajar (statistik, akurasi per topik, soal salah + penjelasan, tombol latihan soal yang salah).
10. Toko: 8 item + Ramuan Nyawa (90 koin, +40%, tanpa slot).
11. Kait uji `window.__game`: keadaan, info, soalIni, langkah, gerak, ke, skill(n, langsung), spell, naik, beli, kedai, tutupKedai, balik, xp, emas, soalan, jawabUji, lanjut, runtuh(n), gempur, hancurInti, hancurKita, cedera, monster, semak(i).

## Langkah tersisa (butuh akses push)
- game-preview: gabungkan branch `arena-clawd-pro-wip` ke `main` bila sudah dicoba (main langsung tayang di preview.edugamelabs.com).
- prompt-generator (private): salin folder ini ke `contoh/kertas-tinta/games/arena-clawd-pro/`, tambah entri KT_GAMES + KT_IDE + KW_TPL di `js/template-kt.js`, tempel isi `PROMPT-*.md` lewat `Object.assign` di akhir `js/detail-{id,ms,en}.js`, terjemahan di `js/i18n-{ms,en}.js`, sampul `vid/template/arena-clawd-pro-edu.jpg`. Contoh pola: lari-clawd.
