# Laporan: 4 gaya video draf (Sistem S10 Pabrik Gaya Video)

Status: DRAF. Tidak menyentuh repo Prompt Generator, tidak commit, tidak push. Semua tulisan hanya di folder ini.

## Gaya yang dipilih

| id | Judul MS | Projek sumber | Kategori | Durasi |
|---|---|---|---|---|
| kartun-tinta-tebal | Kartun Tinta Tebal | video-cikgu-cepat-penat-20261121-0451-reaksi-bm | konsep | 75.5 s |
| drama-kaca-3d-gelap | Drama Kaca 3D Gelap | video-granat-gelas-20261121-0344-zackd-3d-en | cerita | 24.3 s |
| isometrik-kalendar-cuti | Kalendar Cuti Isometrik | video-cikgu-cuti-20261119-2159-isometrik-bm | cerita | 75 s |
| dokumenter-satelit-campur | Dokumenter Satelit Campur | video-petronas-20261121-0439-dokumenter-bm | peta | 82 s |

Sebab pemilihan, dengan jujur soal tahap pertindihan:

- **kartun-tinta-tebal** (cikgu cepat penat): paling berbeza. Pipeline ink pass di atas dunia 3D, watak kartun 2D dilukis di kanvas dan dipasang sebagai kad, LensBlur, Bloom, dan kad komen Komen TOOLS. Tiada gaya sedia ada memakai pasca ink. Topiknya bertindih dengan `reaksi-kartun` dan `sains-emosi-reaksi`, tetapi gayanya berlainan.
- **drama-kaca-3d-gelap** (granat dalam gelas): set berwatak (tentera IK, pintu, gelas lathe, 70 serpihan kaca), pencahayaan gelap dengan kilat, label pil. Tindih sebahagian dengan `cara-kerja-3d-makro` (format 24 s, Zack D, narasi EN dengan takarir BM). Dipilih kerana tindihan itu berada pada format, bukan pada set.
- **isometrik-kalendar-cuti** (cikgu cuti, bukan dalam senarai calon asal tetapi dalam julat 19 Nov): overlay 2D berlapis (kad nama bergantung, kalendar, cip dipaut ke objek 3D, takarir karaoke). Tindih tinggi dengan `isometrik-cerita` dan `hari-kerja-isometrik`. Saya ambil kerana overlay kalendar dan kad nama belum ada dalam galeri. Jika mahu hanya senarai asal, gantikan dengan yang lain.
- **dokumenter-satelit-campur** (Petronas): tindih tinggi dengan `peta-berwarna-bendera`, `peta-harga-dokumenter` dan `belah-dua-kanvas`. Diambil kerana tekstur dokumen (font Special Elite, Old Standard, cap) dan kombinasi peta plate belum ada dalam bentuk ini. Ini calon paling lemah dari segi keunikan.

## Calon yang tidak dipilih

| Projek | Sebab tidak dipilih |
|---|---|
| video-rumah-sekolah-pertama-20261118-1854-infografik-bm | Hampir sama dengan `infografik-plate-3d` (tokoh dan angka di latar sekolah) dan `tabiat-bernombor` (tiga kebiasaan bernombor). |
| video-pemanas-co-20261121-0351-3d-potret-en | Hampir sama dengan `bahaya-rumah-3d` (kamar malam, molekul, peringatan). |
| video-mykad-vs-ktp-20261121-0521-mix-belah-dua-bm | Hampir sama dengan `mix-belah-dua-adegan` dan keluarga belah-dua. |
| video-jago-ngomong-stand-out-20261119-2015-kartun-id | Hampir sama dengan `kartun-kantor-tipe`. |
| video-kata-id-vs-my-20261119-2045-belah-dua-bm | Hampir sama dengan `kamus-belah-dua`. |
| video-rm1-juta-semua-rakyat-20261121-0638-whatif-3d-bm | Hampir sama dengan `what-if-3d` dan `andaian-3d-masyarakat`. |
| video-cikgu-gelaran-20261119-2211-isometrik-bm | Keluarga yang sama dengan cikgu-cuti. Dipilih satu sahaja. |
| video-cikgu-sehari-20261121-1241-isometrik-id | Hampir sama dengan `hari-kerja-isometrik`. |

## Fail sumber

Kod utama yang dibaca (sebahagian, dalam had kira-kira 600 baris setiap projek):

- kartun-tinta-tebal: `src/videos/reaksi/Reaksi.tsx` (140 baris), `toon.ts` (permulaan 200 baris), `ink.ts` (12 baris pertama), `grade.ts` (8 baris), `world.ts` (10 baris), `package.json`, `naskah.json`.
- drama-kaca-3d-gelap: `js/main.js` (120 baris pertama), `README.md`, `naskah-v1.txt`.
- isometrik-kalendar-cuti: `js/main.js` (190 baris), `js/timeline.js`, `js/overlay.js` (40 baris pertama), `sumber.md`.
- dokumenter-satelit-campur: `js/film.js` (60 baris pertama), `naskah-v2.txt`.

MP4 sumber (ditemui di ~/Downloads):

- kartun-tinta-tebal: `/Users/auzanhasfi/Downloads/video-cikgu-cepat-penat-20261121-0509-reaksi-bm-komen-tools.mp4`
- drama-kaca-3d-gelap: `/Users/auzanhasfi/Downloads/video-granat-gelas-20261121-0404-zackd-3d-en.mp4`
- isometrik-kalendar-cuti: tidak ditemui. Hanya `audio/mix.m4a` dalam projek.
- dokumenter-satelit-campur: `/Users/auzanhasfi/Downloads/video-petronas-tersingkir-20261121-0506-bm-takarir-bm-en.mp4`

Rujukan contoh format: `~/Downloads/prompt-generator-20261109-2029-bahasa-output-5/prompt-video/_sumber/prompt/isometrik-cerita.md` (dibaca satu fail sahaja). Aturan ID dibaca dari `_sumber/ATURAN-PROMPT-ID.md`. Senarai id sedia ada dari `js/video-gaya.js` (58 gaya).

Fail yang ditulis:

- `prompt-ms/kartun-tinta-tebal.md`, `prompt-ms/drama-kaca-3d-gelap.md`, `prompt-ms/isometrik-kalendar-cuti.md`, `prompt-ms/dokumenter-satelit-campur.md`
- `prompt-id/` untuk empat id yang sama
- `kartu.json` (4 entri)

Folder `.kunci/` dalam projek tidak dibaca.

## Apa yang belum diuji atau belum disahkan

1. **Panjang prompt**: setiap fail MS dan ID sekitar 5.5 hingga 7.3 ribu aksara, belum 12 ribu. Struktur 12 bahagian sama dengan sumber, tetapi isi lebih ringkas. Perlu ditambah jika mahu sepadan dengan gaya sedia ada.
2. **Pemeriksaan hex**: belum dijalankan skrip penuh (bandingan semua `#hex` sumber dengan hasil). Hanya warna utama yang dipindahkan.
3. **Pemeriksaan kata Melayu dalam ID**: grep dijalankan. Yang tinggal ialah `tapi`, `kamu`, `karena`, dan `sebab`, yang sah dalam Bahasa Indonesia. `bingkai` sudah diganti dengan `frame`.
4. **Fakta belum disahkan**:
   - cikgu-cepat-penat: angka otak dan tenaga, serta kajian glutamat 2022. Perlu sumber.
   - granat: kisah "gelas dan pintu" ialah dakwaan cerita, ditandai "konon" dalam ID dan "dikatakan" dalam MS. Jangan dinyatakan sebagai fakta sejarah.
   - cikgu-cuti: fakta Malaysia (surat tugas, CRK 10 hari dan 15 hari, sumber pautan di `sumber.md`) belum dibuka semula. Versi ID tidak punya angka. Ada placeholder `[ISI: sumber]` yang mesti diganti dengan aturan Indonesia, misalnya Permendikdasmen atau aturan ASN/BKN.
   - petronas: angka penutupan 2012, sembilan SPBU, kilang Brazil 220 juta liter, dividen RM32 bilion, RON95 RM1.99, Pertalite Rp10.000 RON90. Semua perlu disahkan dan kurs semasa.
5. **Belum dimasukkan ke galeri**: `js/video-gaya.js` tidak disentuh. Tiada fail `vid/gaya/*.mp4`, poster, atau cuplik untuk empat gaya ini.
6. **Belum dijalankan dalam pipeline**: `_sumber/jana-prompt.mjs` tidak dijalankan, jadi tiada pengesahan bahawa prompt ini diterima oleh generator.
7. **Audio belum dikodkan** untuk kartun-tinta-tebal dan drama-kaca (muzik dan SFX). Untuk isometrik-kalendar-cuti, folder `audio/events.json` ada tetapi tidak dibaca penuh.
8. **Pendekatan remake**: drama-kaca-3d-gelap ialah remake gaya Zack D. Yang dipinjam hanya gaya visual dan tempo. Naskah dan watak baharu.

## Langkah seterusnya (cadangan)

- Semak 4 prompt MS dan ID oleh pemilik projek, terutama bahagian fakta.
- Tambah panjang setiap prompt hingga kira-kira 12 ribu aksara jika mahu sepadan dengan 58 gaya sedia ada.
- Jalankan skrip pemeriksaan hex dan grep Melayu sebelum keputusan akhir.
- Jika diluluskan, pindahkan ke repo Prompt Generator dalam langkah berasingan, dengan kartu dan video.
