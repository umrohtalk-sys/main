# Pelajaran daripada 10 repo video Opus 5.5

Senarai penuh, semakan lesen dan README asli: `references/opus-video-repos/` di repo `umrohtalk-sys/main`.

## Yang terbaik untuk video tipografi (diambil ke skill ini)

### lemo-opuscar — `DIRECTOR.md`, `TECHNIQUE.md`, gaya *swiss-motion* (MIT)
- Halaman mendedahkan `window.render(t)`, `DUR`, `READY`; satu timeline ialah sumber kebenaran untuk gambar, suara, sari kata.
- Masuk dengan **clip-reveal**, padam dengan **pisau**, tiada dissolve. Grid 12 kolum, satu warna isyarat, kontras skala melampau.
- Sari kata ialah sebahagian susun atur, bukan bar di bawah.
- Masa baca: (huruf ÷ 15 + 1.5) s selepas teks siap masuk.
- Grain/hingar dalam halaman memperlahankan render — tambah dalam ffmpeg jika perlu.

### opus-video-skills — skill `kinetic-reel` (MIT)
- Hierarki: condensed/wide untuk slam, Instrument Serif italic untuk SATU baris suara, mono untuk label.
- `dropWord` (huruf jatuh expo-out berperingkat), `chip`, odometer, HUD empat sudut, bar kemajuan bersegmen.
- **Setiap shot ada mekanisme**; tajuk menamakannya. Peralihan kesinambungan bentuk (zum melalui elemen yang dipandang).
- Kawal matematik: jejari dari `backOut()` boleh negatif — canvas akan baling ralat (engine kita: `circle` abaikan r ≤ 0).

### ClaudeAnimationBase — `ANIMATION_GUIDE.md` (MIT)
- **Reads**: senaraikan apa yang penonton mesti faham, satu demi satu; aksi pantas, makna ditahan; pimpin mata sebelum read penting.
- Prinsip animasi: antisipasi, squash & stretch, slow in/out, arka, overlap, elak *twinning* (fasa berbeza), exaggeration.
- Storyboard dahulu → lembaran kenalan → baiki → MP4. Peralihan pada setiap sambungan, termasuk masuk & keluar.

### PDoomVideo (tiada lesen — konsep sahaja)
- Babak dalam fail sendiri, setiap shot `fn(t, lt, dur)` melukis seluruh bingkai; render paralel tidak berurutan; `hash(i)` bukan `Math.random()`.
- Subagen paralel diberi brief `ANIMATION_GUIDE.md` yang sama supaya gaya seragam.

### shipvideo (tiada lesen — konsep sahaja)
- Filem = satu HTML; jam maya memacu rAF/timer/CSS melalui `__seek(t)`; `check_scene` laporkan ralat JS & teks kelihatan pada beberapa cap masa sebelum render.
- Larangan: `<video>`, `<audio>` dalam babak, CSS transitions, `Math.random`, imej luar.

### awesome-opus5-5-videos (yihui, MIT) & awesome-opus-5-5-videos (athemeroy, CC BY 4.0)
- Prompt yang berjaya: "kinetic typography word by word, spring easing, elements that build in on the beat, keep each scene on screen long enough to read, check the frames yourself and fix anything that overlaps, clips or feels rushed".
- Brief pengeluaran athemeroy: gerbang penerimaan (papan cerita → 2–4 s paling sukar → filem penuh).

### motion-graphics-music-video-skill (MIT, perlu Fal.ai berbayar)
- Gelombang subagen 2 → 3–4 → 4–8 dengan semakan antara gelombang — guna untuk video panjang (> 2 min): satu subagen per 3–4 babak, semua membaca `references/gaya.md` + `api.md`.

## Kurang relevan
- **tidewater** (MIT): enjin WebGPU permainan — bukti keupayaan, bukan alat video.
- **claude-opus-5-5-demo** (tiada lesen): tiga permainan 3D satu-prompt.
