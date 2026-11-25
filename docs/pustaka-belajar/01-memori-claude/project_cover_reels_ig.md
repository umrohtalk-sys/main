---
name: project-cover-reels-ig
description: "Cover reels IG @auzan_hasfi — 70 cover BM gaya studio gelap + biru foto profil, single HTML muat turun ZIP"
metadata:
  node_type: memory
  type: project
  originSessionId: 42e03702-46cb-4d15-ac2b-55e25ace87a4
  modified: 2026-11-16T14:59:45.852Z
---

16 Nov 2026. Hasil: `~/Downloads/cover-reels-ig-20261116-2156-studio-biru-70-cover.html` (5.3 MB, frame video ditanam base64, ZIP JPG 1080×1920 dijana di pelayar). Sumber: `app matematika/cover-reels-ig-20261116-2156-studio-biru/` (template.html + list.tsv id→mp4 + fr/ frame + `python3 bina.py <out.html>`).

Gaya akhir ikut rujukan user (grid cover studio gelap, watermark tajuk samar, satu objek bercahaya, tajuk 2 baris): baris atas putih Montserrat 800, baris bawah biru #1159d6→#5d9bff Montserrat 900. Objek = frame video sebagai kad berklip / bingkai digantung / telefon / pentas putih / dua kad VS / angka logam biru. Semua tulisan dalam kotak tengah y 440–1480 supaya terbaca bila dipotong 3:4 atau 1:1. Gaya pertama (tajuk kuning ala "Malaysia underrated") ditolak user sebelum siap.

**How to apply:** video baru → tambah baris di list.tsv + entri D_ (id, h, a, b, k?, pos?) lalu bina semula. Frame video EN dipilih tanpa takarir Inggeris. Video klien (Bidan Virda, Skinlyfe, ILJIN, UGC) dan video suara ID tidak dimasukkan. Lihat [[index-video-nov-2026]].

16 Nov 22:04: dipadankan dengan 41 reel IG (data Zernio analytics, akaun IG 6aed915ef79bc72b77e0f13a). Array REELS [tarikh, kod reel, id cover, tontonan] dalam template; HTML terkini `~/Downloads/cover-reels-ig-20261116-2204-pek-41-reel.html`, folder + ZIP `~/Downloads/pek-cover-reel-ig-20261116-2204-41-reel` (JPG bernama tarikh-kod + SENARAI-PAUTAN-REEL.txt). Eksport tanpa pelayar: Chrome headless `--dump-dom file#eksport` → `<pre id="eks">`. Meta TIDAK benarkan tukar cover reel lewat API (Zernio posts_update_post_metadata: Instagram tidak disokong) → user tukar manual di app; post baharu lewat Zernio guna `instagramThumbnail`. Analisis: topik banding negara/gaji cikgu & emosi cikgu menang (ID vs MY 894K), promo/tutorial game skip 60–86%.

16 Nov 22:11: cover SOROTAN 6 (edu apps, edu game, reel MY, reel US, threads game, gemi app; portfolio dibuang atas permintaan user) gaya sama: cakera biru R478 di tengah 1080×1920, ikon garis Lucide putih, bendera bulat MY/US, maskot gemi wave.svg untuk gemi app. HTML `~/Downloads/cover-sorotan-ig-20261116-2211-biru-6.html` + folder PNG. Sumber `cover-reels-ig-20261116-2156-studio-biru/sorotan/template.html` (__GEMI__ = data URI wave.svg dari gemi-app-20260923-1936-maskot-svg-baru/img/maskot).

16 Nov 22:34 REVISI gaya EDITORIAL (ikut 3 rujukan user: foto asli + tipografi + ruang kosong, warna hitam/biru/putih sahaja, font Montserrat+Inter sama): 9 susun atur L = foto | biru (duotone) | label (kotak tag) | kertas (latar krem, foto B/W bulat/segi) | tipo (hitam) | tipoBiru | split (2 foto VS) | angka | poster (frame video ditampal). 36 foto Unsplash (ID dari WebSearch site:unsplash.com, muat turun `unsplash.com/photos/<id>/download?force=true&w=1200` → ikut redirect TANPA header User-Agent, kalau ada UA = 401; napi search disekat Anubis, jangan pintas) + 8 foto lama video damai. HTML `~/Downloads/cover-reels-ig-20261116-2234-editorial-foto-73.html`, pek `pek-cover-reel-ig-20261116-2234-editorial-41-reel(.zip)`. Sumber di `cover-reels-ig-20261116-2156-studio-biru/editorial/` (lukis2.js, bina2.py, fk/, KREDIT.txt).

17 Nov: cover video 14–17 Nov (20 video, 62 cover, 3–4 pilihan setiap video; varian -1 = poster frame video = dipasang 1 saat di awal MP4). Sumber `cover-reels-ig-20261116-2156-studio-biru/video-14-17-nov/` (data.py senarai G [gid, tajuk, mp4, frame, varian], bina.py <dir> <out.html>, mp4.sh concat cover 1s + video asal, frame/). Output Downloads: `cover-video-14-17-nov-<ts>-20-video.html`, folder `-jpg`, folder `video-bercover-14-17-nov-<ts>`. Video baharu → tambah tuple di data.py. Foto baharu fk: mata, mata2, otak-model.

22 Nov: cover 5 video (tak pandai animasi, nak jadi cikgu, kalau cikgu aplikasi, RM1 juta, cikgu banyak cuti), 3 varian setiap satu. Sumber `cover-reels-ig-20261116-2156-studio-biru/video-22-nov/` (data.py + bina.py yang kini merujuk ../editorial, bukan scratchpad lama). Hasil `~/Downloads/cover-5-video-20261122-2123.html` + folder `-jpg` (15 JPG). Tanpa pasang ke MP4.
