# Laporan: video kit A (hook, what-if, teknik mengajar)

Tarikh: 21 Nov 2026. Sumber data: `~/Downloads/dapur-token-jalan-20261121-1403/_data/reels-ringkas.json` (53 reel, 22 Sep hingga 21 Nov 2026).

## Fail yang dihasilkan

| Fail | Kandungan |
|---|---|
| `/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/04-video-kit-a/hook-bank.md` | 300 hook BM (maks 12 kata, semua disahkan oleh skrip), 30 setiap pola, 10 pola. Setiap pola ada reel terdekat dan tayangannya. |
| `/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/04-video-kit-a/what-if.md` | 20 skenario "Apa jadi kalau...": judul cover, 6 babak, penutup soalan. |
| `/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/04-video-kit-a/teknik-mengajar.md` | Episod 2 hingga 21 siri Teknik mengajar 1 minit: nama teknik, masalah, 3 hingga 4 langkah, dialog cikgu-murid, takarir EN. |
| `/Users/auzanhasfi/Downloads/dapur-token-jalan-20261121-1403/04-video-kit-a/bank-konten-items.json` | 70 item mengikut skema yang diberi: 30 hook (3 setiap pola), 20 what-if, 20 episod. |

Tiada soal atau kuiz dibuat. Tiada carian web dibuat.

## Median tayangan mengikut pola

| Pola | Reel dipadankan | Median | Tertinggi |
|---|---:|---:|---:|
| Nak jadi (ajakan kerjaya) | 4 | 86.147 | 598.415 |
| Pengakuan / curhat | 6 | 10.249 | 222.917 |
| Angka mengejut | 4 | 14.603 | 37.128 |
| Soalan | 7 | 3.877 | 97.425 |
| Perbandingan (X vs Y) | 10 | 7.119 | 929.346 |
| POV / bayangkan | 5 | 3.977 | 109.059 |
| Kalau… / Macam mana bila… | 5 | 4.503 | 6.659 |
| Senarai | 3 | 3.277 | 133.544 |
| Mitos vs fakta | 5 | 3.154 | 4.738 |
| Rahsia / cara tersembunyi | 1 | 2.766 | 2.766 |

## Penemuan utama

- **Isyarat paling kuat ialah ajakan kerjaya.** Dua reel 'Nak jadi cikgu' mencapai 598.415 dan 133.544 tayangan. Median pola ini tertinggi (86.147), tetapi hanya empat reel. Median itu dibentuk oleh reel #4 (133.544) dan #8 (38.750), bukan oleh reel 598.415.
- **Perbandingan 'Malaysia vs negara lain' mempunyai reel tertinggi keseluruhan** (929.346), tetapi median hanya sederhana. Satu reel itu menanggung purata.
- **Pengakuan curhat ialah satu lagi isyarat kuat.** Reel 'Curhatan cikgu' mencapai 222.917. Pengakuan pendek (13 dan 14) juga mendapat tayangan baik.
- **Pola Mitos vs fakta dan Senarai tidak disokong data.** Tiada reel yang benar-benar memakai format 'Mitos:' atau senarai nombor. Padanan bersifat longgar.
- **Pola Rahsia tiada bukti sama sekali.** Hanya satu padanan lemah (reel China). Perlu ujian A/B sebelum mengandalkannya.
- **Reel terbaru (#51 dan #52) tidak boleh dibandingkan.** Reel #52 (21 Nov, 162 tayangan) baru beberapa jam. Jangan buat kesimpulan dari reel itu.

## Had dan perkara yang perlu disemak

- **Sampel kecil.** 53 reel, dan setiap pola 1 hingga 10 reel. Ini petunjuk, bukan bukti.
- **Padanan dibuat manual pada caption sahaja.** Tiada transkrip video, jadi tidak tahu apa yang dikatakan dalam 3 saat pertama. Tayangan juga dipengaruhi visual, masa siaran dan pengikut.
- **Janji dalam hook mesti ditunaikan dalam isi.** Hook angka seperti "9 daripada 10 murid lupa nota" ialah contoh gaya, bukan statistik yang disahkan. Sahkan sumber sebelum guna.
- **Pengakuan (curhat) mesti dari pengalaman sebenar.** Jangan guna ayat pengakuan yang tidak berlaku.
- **Kandungan Teknik mengajar disediakan dari pengetahuan umum,** bukan dari sumber yang disahkan (tiada carian web). Sebelum rakam, semak langkah dan dialog dengan cikgu yang biasa mengajar topik itu.
- **Episod 1 (Papan jawapan) tidak ada dalam folder ini.** Format penutupnya diambil dari nota memori projek, bukan dari fail video.
- **CTA dalam item JSON** (GAME, VIDEO, TOOLS, PROMPT) adalah pilihan awal mengikut pola. Semak sama ada ia sepadan dengan kata kunci automasi komen yang sedang aktif sebelum jadual siaran.
- **Item hook menggunakan isi templat mengikut pola.** Isi sebenar perlu ditulis semasa skrip dibina.

## Cara jana semula

Skrip sumber ialah `/private/tmp/claude-501/-Users-auzanhasfi--claude-spares-spare-ZS0lbd/094b172b-0f7b-4bfa-a44c-990c99108cb7/scratchpad/build.py` (di luar folder projek). Ia membaca JSON di atas dan menulis semua empat fail. Ubah hook atau episod dalam skrip itu, kemudian jalankan `python3 -I build.py`.
