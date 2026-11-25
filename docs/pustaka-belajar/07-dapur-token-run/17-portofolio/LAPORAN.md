# LAPORAN Portofolio Katalog Game & App (21 Nov 2026)

Output: index.html, css/style.css, js/data.js, js/app.js, img/ (43 thumbnail 640x400 jpg). Statik, siap Netlify Drop, tidak dideploy. Sumber dibaca saja.

## Jumlah item: 43 (22 game, 21 app; 9 dengan tombol "Main demo")
- Tangkapan layar 16-qa-situs dipakai untuk 7 item dengan URL sama (Liga Stik Pro, Pratinjau Koleksi Game, English Kita, GEMI Prompt Library, gemi, Prompt Generator, Galeri Prompt). Sisanya 36 thumbnail dibuat sendiri (puppeteer-core + Chrome, 1280x800 diskala 640x400, tunggu 2,2 s setelah load).
- Tidak ada yang gagal atau melewati batas 10 s.
- Demo hanya untuk URL yang lolos HTTP 200 di QA: preview.edugamelabs.com (2), generator, demoprompt, gemiapp, gemi-prompt-library, english-kita, kido, cpns-kemenag. Item lain tanpa URL live hanya punya tombol WhatsApp.
- Item dari zip (KIDO, FA Jagung) diekstrak ke folder sementara di scratchpad, bukan di folder sumber.
- Dari 100 kandidat game/app: yang dipilih 43, batas 60 tidak tercapai karena sisanya dilewati.

## Dilewati dan sebab
- Klien/data pribadi: wedding-planner-lucu (nama pasangan), kumpulan-app-game ("Juara Matematik Aina", judul memuat nama pribadi, perlu dicek dulu), gemi-akses (halaman akses pembeli), dapur-token-edugamelabs dan bank-konten-catatan (internal).
- Bukan game/app (landing page, mentoring, jasa, tutorial): jasa-edugamelabs, edugamelabs-bm, edugame-labs(-id/-bento-id), portofolio bento, app-pemula-nocode-id/ms, prompt-app-edukasi, prompt-generator-kerja, sumber-artifact-game (2), borang tempahan, kumpulan prompt, free prompt cikgu, silibus, index prompt, gemi-sebelum-selepas, englisha(-presentasi) dan guru-claude-app-3bahasa (video preview), game_logic_analysis.
- UI kit / mockup: Cipta RBT (semua varian), Organ Deria UI Kit, CPNS/Akidah/Sains Kita UI Kit, Misi Kota Bahasa UI Kit, Cell Quest Game UI.
- Duplikat versi: prompt-generator-game, arena-clawd-semua, game-clawd-koleksi (tanpa index.html), keputusan-game-assure-nyamuk, jelajah-english-vercel, guru-claude-app 3/4, Organ Deria standalone (3), edugame-build/dunia-clawd zip, bola-hamster zip, game-liga-stik-pro (Downloads), kido-netlify duplikat, dll.
- Proyek lain tanpa index.html atau tanpa sumber dapat dirender: basic-life-for-kids, source-code-portofolio-edugamelabs, gemi-maskot-3d (zip).
- Kategori bukan game/app, atau kandidat_jual=false, tidak diambil.

## Catatan
- Deskripsi satu kalimat ditulis dari meta description/<title>/README tiap item, dua versi (BM dan ID). Nama item dirapikan.
- Pembeli bisa filter jenis, topik, dan cari teks; BM/ID dan tema terang/gelap tersimpan di localStorage. Cek lebar 375px: tanpa overflow horizontal, 0 galat konsol.
- Thumbnail game hanya layar awal (menu), bukan gameplay. Beberapa PWA berbentuk bingkai HP.
- Nomor WA wa.me/6285704973827 dengan teks prapengisian berisi nama item.
- Thumbnail dari QA belum ditinjau satu per satu untuk data pribadi; cek cepat visual sebelum publikasi.
