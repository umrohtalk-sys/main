# SOP: Game web edukasi (HTML, CSS, JS statik)

**Kapan dipakai:** game kuiz, game kelas, escape room, RPG, final boss, game kosakata untuk murid. Bukan Godot, Unity, atau Unreal. Gunakan skill `studio-game-web` bila tersedia.

## Input yang dibutuhkan
- Brief satu halaman: tujuan belajar, kelas atau umur, bahasa (BM, ID, atau dwibahasa ms/id), mekanik utama, tema.
- Materi: soalan dan jawapan, atau sumber teks (contoh `_sumber/*.txt`).
- Maskot: maskot project (ikut memori project terkait, mis. English Kita). Templat hanya pemegang tempat.
- Tahap ketelitian: cepat (lalai), standard, atau ketat. Ketat untuk satu sistem sahaja bila diminta.

## Langkah
1. Tulis brief satu halaman. Cadang satu game dulu, bukan banyak sekaligus.
2. Buat folder bertimestamp dari templat (`scripts/game-baru.sh`): `index.html`, `css/`, `js/` dipecah per bahagian (`data.js`, `i18n.js`, `game.js`). Sertakan `netlify.toml` dan `README.txt` dengan langkah seret ke app.netlify.com/drop.
3. Isi materi di `data.js`. Teks dwibahasa lewat `i18n.js`.
4. Sediakan hook `window.__game` dan atribut `data-uji` supaya game dapat diuji otomatis.
5. Mekanik: pilihan salah tidak mematikan permainan terus. Berikan petunjuk, bukan hukuman yang membosankan.
6. Teks materi hanya bila memang bahagian aksi. Buang kotak penjelasan dan HUD yang ramai.
7. Jalankan main-uji: `node ~/.claude/skills/studio-game-web/scripts/main-uji.mjs . uji/senario.json`. Lulus telefon 390x844 dan desktop 1366x768.
8. Simpan tangkapan skrin bukti di folder `uji/`. Game belum siap sebelum dimainkan dan ditangkap skrin.
9. Naikkan VERSI service worker bila ada (lihat sop-app-pwa.md).
10. Serah ke `~/Downloads/` sebagai folder atau zip dengan nama bertimestamp.

## Aturan wajib
- Output berbentuk folder dengan file terpisah, bukan satu index.html panjang. Sertakan `BACA-SAYA.md` berisi daftar file.
- Statik, tanpa build. Siap seret ke Netlify.
- Ikon garis elegan, bukan emoji. Warna solid, judul serif.
- Teks tidak menutupi gameplay.
- Maskot hanya dari aset project yang diizinkan.
- Isi yang dijana dari sumber: edit sumber, jana semula, lalu audit.

## Checklist QA
- [ ] Main-uji telefon dan desktop lulus tanpa ralat konsol, 404, atau skrol mendatar
- [ ] Tangkapan skrin bukti tersimpan
- [ ] Materi benar, dwibahasa konsisten
- [ ] Tidak ada tulisan menutupi aksi
- [ ] Tidak ada ikon emoji
- [ ] `netlify.toml` dan README ada
- [ ] Nama folder bertimestamp

## Kesalahan yang pernah terjadi
- Satu index.html 180 KB sulit dibaca. User minta pecah per bahagian.
- Galeri mock kotak-kotak dibuang. Diganti templat dari repo user.
- Emoji di menu, HUD, dan toast ditolak. Diganti ikon SVG.
- Bug closure: `gerak` menangkap `let y` yang berubah (platform terbang). Salin ke const dulu dalam closure.
- HUD ditulis ulang setiap 0.3 detik sehingga ketukan tombol hilang. Pakai setH() (tulis hanya bila berubah).
- Pratinjau bergantung pada requestAnimationFrame. Tab tersembunyi menjeda rAF. Jangan jadikan logik bergantung padanya.
- Kelas generik (.bos, .wira, .kecil) bertembung antar elemen. Gunakan awalan unik.
- Game Clawd Fotosintesis dikritik kerana terlalu banyak tulisan.

## Sumber
Memori: reference-studio-game-web-skill, project-bilik-misteri-clawd, project-lastik-clawd, project-lompat-hitung, project-arena-clawd, project-catur-ajaib-clawd, project-potong-tali-clawd, project-clawd-vs-zombi, project-misi-detektif-nyamuk. Feedback: output-folder, netlify-ready-output, ikon-elegan, kurang-tulisan-gameplay, tulisan-tidak-menutupi.
