---
name: project-arena-clawd
description: "Game MOBA ala Mobile Legends single-player, Clawd vs minion Si Comot + menara + Raja Comot, soalan matematik asas sekali-sekala, UI BM; artifact CsDEcdsfPYhgSc7jTDAwdy, belum deploy"
metadata:
  type: project
---

Dibuat 19 Okt 2026, siri Clawd selepas [[project-bilik-misteri-clawd]] dan [[project-lastik-clawd]]. Folder `game-arena-clawd-20261019-0153-moba-matematik-bm/`.
- Peta 2000×2000: 3 lorong (atas/tengah/bawah) + sungai dakwat + hutan, pangkalan Clawd kiri bawah, Raja Comot kanan atas. 6 menara musuh (luar/dalam), 3 menara kita + pangkalan.
- Perisai: menara dalam kebal sampai menara luar lorong sama runtuh; Raja Comot kebal sampai satu lorong bersih. Kalah jika pangkalan kita runtuh.
- Kawalan: joystick kiri + butang SERANG & 3 skill (Q Tembak Tinta, E Pusing, R Hujan Bintang); WASD/J juga. Minimap kiri atas.
- Soalan kilat tiap ~55–70 s (betul = buff kuasa/laju/perisai/pulih) dan bila Clawd tumbang (betul = bangkit segera). Mudah (+/−) / Sederhana (+−×÷).
- Kait ujian: `__game.langkah/gerak/ke/skill/soalan/jawabUji/runtuh/cedera/pukulBoss/info`.
- Artifact https://claude.ai/artifact/CsDEcdsfPYhgSc7jTDAwdy; zip ~/Downloads/...-netlify.zip; belum deploy.

## Revisi 19 Okt 2026 02:08 — fitur ala ML (folder -20261019-0208-hero-spell-kedai-hutan-bm, artifact Q9yGhNgBHrhVbSjPWt2Zxi)
User minta lebih mirip ML tapi tetap main seorang: menara kurang sakit (55→maks 110 ke hero), skill 1/2/ult dengan kesan.
- 3 hero: Pahlawan (terjah/pusing/hentak lompat), Pemanah (panah tembus/langkah angin/hujan panah), Ahli Sihir (bola bintang/rantai kilat/hujan bintang). Ult terbuka Tahap 4; titik skill → butang + kuning.
- 5 battle spell (Kilas, Pulih, Hukuman, Pecut, Perisai), kedai 8 item (maks 6, game berhenti), syiling dari minion/monster/menara.
- Monster hutan: Kelomang (nyawa +35% + laju), Kumbang Merah (buff bakar), Siput Biru (cooldown −25%), Penyu (perisai + syiling, muncul 1:00).
- Butang 🏠 Balik (3 s), sepanduk "Tiga Sekaligus!/Ganas!". Belum deploy.

## Arena Clawd Pro (24 Okt 2026) — LIVE
Dari zip user ~/Downloads/arena-clawd-pro-siap-upload.zip (game-netlify/ + prompt/PROMPT-{id,ms,en}.md). 6 hero, mode 1/3 lorong, Soal Gempur, Ultimate Matematika, Ledakan Kombo, tab Belajar/Latihan/Kemajuan. Template terpisah id `arena-clawd-pro` (kat besar, bhs id) di Prompt Generator (commit 1a5711f; prompt detail = isi PROMPT-*.md tanpa baris petunjuk) dan LIVE di preview.edugamelabs.com/kertas-tinta/games/arena-clawd-pro/ (game-preview 7279aa1). KW_TPL mobile legends/moba/ml kini → arena-clawd-pro.

## Arena Clawd Pro ala Mobile Legends (24 Okt 2026) — localhost, belum deploy/push
Folder `game-arena-clawd-pro-20261024-2100-ml-lobi-hero-skin/` (launch.json `arena-pro-ml`, port 8950). User minta output berbentuk FOLDER terpisah (bukan satu index.html): css/dasar.css + css/ml.css, js/01..21 + 99 (skrip biasa berbagi global, urutan penting; `moveTo` diganti `moveUnit` karena bentrok window.moveTo). Alur: memuat → masuk (nama+avatar, localStorage `arena-pro-akun`) → lobi (rank 7×5 bintang, koin/berlian, misi harian) → cari/TERIMA → draft (PILIH HERO 40s, PERSIAPAN 30s: skin/spell/emblem/build/soal) → VS → arena layar penuh (beli cepat build kanan atas) → KEMENANGAN/KEKALAHAN (MVP, rating, medali, hadiah, laporan belajar). 30 skin (aksesori tinta di skinBack/skinFront), 6 emblem, 4 item baru. Versi lama satu file di `_asal/`.
- 24 Okt 2026 (revisi): user minta ikon & tampilan "jangan AI slop, elegan". Semua emoji diganti ikon garis js/00-ikon.js (ic()/drawIcon(), juga di kanvas HUD); css/ml.css ditulis ulang: solid biru malam #0c1526 + emas #d9b25f, judul Source Serif, tanpa gradien/italic/bayangan tebal. Hero ke-7 **Clawd Nini** (mirip Nana ML: tudung telinga kucing, bumerang, kucing Mochi ubah minion jadi anak kucing, badai 3 gelombang, pasif jadi Mochi) + 5 skin. Masih localhost 8950, belum push.
- 24 Okt 2026: versi elegan + Nini (folder) LIVE: prompt-generator commit 8c3214d, game-preview a88eb79 (contoh/kertas-tinta/games/arena-clawd-pro/ kini berisi index.html + css/ + js/). Sampul baru = layar memuat (headless Chrome 960×600). User minta prompt detail TIDAK ditulis ulang — prompt lama (versi v1, 6 hero) tetap dipakai; hanya baris tokoh kartu diubah jadi 7 hero.

## Arena Clawd v3 biasa (26 Okt 2026) — LIVE
Folder `game-arena-clawd-20261026-2134-8-hero-musuh-ai/` (index.html + css/game.css + js/00..13 + 99, ikon garis dari 00-ikon.js versi Pro, tanpa emoji; launch.json `arena-clawd-v3` port 8962). 8 hero (+Penjaga, Bayang, Penawar, Jurutera, Nini), lawan AI **Pendekar Comot** (js/08-musuh-ai.js; Santai/Seimbang/Tiada, berfikir tiap 0.4–0.55 s, ult dengan bulatan amaran, lari bila cedera), 7 spell, 12 item, 4 bakat, Naga Tinta 4:00 → naga sekutu, beli cepat (G), 4 misi, kill feed. Kait ujian tambah rival/pukulRival/pilih/cd.
- LIVE preview.edugamelabs.com/arena-clawd/ (game-preview edd9df1) dan demoprompt.edugamelabs.com (demo repo 4b3d22c: sampul baru + topik + tambahan prompt "VERSI 3" di akhir prompt arena 3 bahasa). Kedua situs Netlify auto-deploy dari GitHub. Repo prompt-generator TIDAK diubah.

## Arena Clawd Pro + Mode Guru (14 Nov 2026)
Folder `game-arena-clawd-pro-20261114-1926-soal-guru/` (dari -20261024-2100). Pakai [[project-soal-guru-modul]]: tombol "Saya guru" di layar masuk, blok Soal guru dalam soalPilih() (lobi + draft), soalBaru() menggantikan mkQ di ask() & latihan, samaJawab() untuk jawapan teks. Uji `node uji-guru.mjs <url>` (10 semakan). Disalin ke kedua repo bersama Dunia Clawd (commit 3241483 / 79f38ea).
