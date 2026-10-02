---
name: video-tipografi-melayu
description: Buat video motion-typography (MP4 landscape 1920×1080) berbahasa Melayu/Indonesia yang disinkronkan kata demi kata dengan suara (voiceover), tanpa latar sibuk dan tanpa musik, dengan tipografi Archivo/Instrument Serif/Space Mono, UI interaktif (kursor, klik, toast, ketik prompt), maskot Si Bulat dan transisi wipe/slats/iris. Semua frame ditulis sebagai kode Canvas 2D dan dirender di Chromium headless + ffmpeg. Gunakan bila pengguna minta video tipografi kinetik, video explainer/promo/teaser dengan suara, "remake video referensi", video gemi, atau video gaya gemi-referensi; boleh digabung dengan skill remotion dan hyperframes.
---

# Video tipografi Melayu

Skill ini membuat video **tipografi kinetik yang mengikuti suara**: setiap kata besar muncul tepat pada saat ia diucapkan. Satu latar kertas, tiada muzik — fokus pada suara dan huruf. Disuling dari 10 repo video Opus 5.5 (lihat `references/pelajaran-repo.md`) dan video rujukan gemi (Drive: `video gemi/gemi-referensi`).

Contoh siap: `projects/gemi-referensi-remake/` (93.5 s, 16 babak) — baca `scenes.js` di sana sebelum menulis babak baharu.

## Aliran kerja

### 0. Bahan
- **Suara** (wav/m4a/mp3) + **timing kata**. Jika pengguna tiada timing: transkrip dengan Whisper (faster-whisper, `word_timestamps=True`) atau transformers.js, simpan sebagai JSON `{chunks:[{text, timestamp:[a,b]}]}` atau `[{word,start,end}]`. Jika tiada suara langsung, tanya dahulu: video ini dibina di atas suara.
- **Teks rujukan / skrip** untuk membetulkan ejaan paparan (fix.json), cth. `{"desain": "design", "tes": "test"}`.
- Bahasa paparan: ikut bahasa suara (Melayu Malaysia secara lalai: "anda", "bina", "mahu", "sahaja").

### 1. Projek baharu
```bash
bash ~/.claude/skills/video-tipografi-melayu/scripts/new_project.sh <folder-projek> <suara.wav> <words.json> [OFF=0.6]
# atau dari repo ini: bash .claude/skills/video-tipografi-melayu/scripts/new_project.sh projects/<nama> ...
```
Ini menyalin `engine/` + `template/` dan menjana `words.js` (cetakan `indeks:perkataan@masa` — simpan, anda perlukan indeks untuk `seg(i0, i1)`).
`DUR` = masa tamat suara + OFF + ~3 s untuk kad penutup.

### 2. Papan cerita dahulu (tulis dalam STORYBOARD.md projek)
Kumpulkan ayat → babak (satu idea satu babak, 3–8 s). Untuk setiap babak tulis:
```
NN  t0–t1  [peralihan masuk]  LABEL
    kata utama (slam) · mekanisme visual (apa yang BERUBAH) · interaksi UI · Si Bulat (mood)
    reads: apa yang penonton mesti faham, ikut urutan, dan bila
```
Peraturan (dari ClaudeAnimationBase + lemo DIRECTOR):
- **Setiap babak ada mekanisme**, bukan sekadar perkataan: kursor klik, kotak ditanda, kad bertukar menjadi tangga, fokus kabur→tajam, blok dibina. Tajuk menamakan; mekanisme membuktikan.
- **Satu "read" pada satu masa.** Sebab → reaksi berurutan, bukan serentak.
- **Kata kunci = SLAM** (besar, warna isyarat). Ayat biasa = Archivo 56–104. Petikan / suara hati = Instrument Serif italic. Label = Space Mono kecil.
- **Gema**: rima penutup dengan pembuka (cth. "TAHU" babak 2 ↔ babak 15).

### 3. Bina babak (`scenes.js`)
Setiap babak `function sN(t, lt, dur)` melukis SELURUH bingkai (latar sudah dilukis engine). Daftar di `SCENES = [[t0, sN, 'LABEL'], ...]` dan peralihan di `TR = {t0: 'wipe'|'slats'|'iris'|'rise'|'push'|'cut'}`.
- Letak sempadan babak ~0.3–0.4 s **sebelum** kata pertama ayat; keluarkan teks (`out`) ~0.2–0.4 s sebelum sempadan.
- Masa sentiasa dari suara: `w(i)` (mula kata ke-i), `T('kata', n)`, `seg(i0, i1)`. Jangan tulis masa dengan tangan kecuali untuk animasi sokongan.
- `push` hanya bila babak masuk sudah ada isi pada saat peralihan; jika tidak guna `wipe/slats/rise/iris`.
- API penuh & contoh: `references/api.md`. Gaya, palet, susun atur: `references/gaya.md`.

### 4. Semak dengan mata sendiri (wajib, berulang)
```bash
node scripts/render.mjs <projek> grid 48              # lembaran kenalan seluruh filem → out/grid.jpg
node scripts/render.mjs <projek> sheet 10.5,20.8,36.9 detail --cols=3 --w=640
node scripts/render.mjs <projek> still 36.9           # PNG resolusi penuh
```
Buka setiap imej dengan Read. Cari: teks bertindih (terutama slot yang berguling), teks terpotong di tepi (had kanan x 1780, ingat zum kamera +2.2 %), kad menutup teks, babak kosong pada peralihan, kontras rendah. Betulkan, render semula lembaran. Semak juga peralihan dari MP4: `ffmpeg -ss <t-0.4> -t 0.8 -i out/x.mp4 -vf "fps=10,scale=240:-1,tile=8x1" -frames:v 1 tr.jpg`.

### 5. Render MP4
```bash
node scripts/render.mjs <projek> mp4 --workers=4 --out=<nama>.mp4      # 1920×1080, 30 fps, H.264 crf 18, AAC
node scripts/render.mjs <projek> alpha                                 # pilihan: WebM VP9 dengan alpha (tanpa latar, tanpa HUD)
```
~80 s untuk 94 s video pada 4 pekerja. Audio = suara sahaja (highpass, kompresor ringan, loudnorm −16 LUFS, kelewatan OFF). Sahkan: `ffprobe` (1920×1080, durasi = DUR) dan `ebur128` (≈ −16 LUFS). Anda tidak boleh mendengar: katakan begitu dan laporkan angka.

## Peraturan yang paling penting
1. **Deterministik.** Tiada `Math.random()`/`Date.now()`/keadaan antara bingkai; guna `hash(i)`. Pekerja render paralel dan tidak berurutan.
2. **Sinkron suara.** Kata besar mendarat dalam ±60 ms dari sebutan (`rise` bermula `lead` 0.06 s lebih awal supaya separuh naik ketika suku kata pertama).
3. **Masuk dengan klip/lantun, bukan pudar.** `rise` (klip dari garis dasar), `slam` (huruf jatuh), `pop` (overshoot). Keluar: naik keluar klip atau pisau (`knife`).
4. **Satu latar.** Kertas `K.paper`. Warna isyarat untuk perkataan kunci sahaja; tirai peralihan boleh berwarna.
5. **Masa baca.** Selepas teks selesai masuk, tahan ≥ (huruf ÷ 15 + 1.5) s, kecuali ia sedang disebut serentak oleh suara.
6. **Zon selamat.** Kandungan antara y 110–960 dan x 140–1780. HUD memiliki sudut atas dan jalur bawah (sari kata karaoke pada y 1040, bar kemajuan y 1000).
7. **Hidup.** Kamera menolak perlahan setiap babak (engine), Si Bulat berkelip, anak panah bergoyang — tiada bingkai beku.

## Gabung dengan skill remotion & hyperframes
Engine ini sengaja "fungsi masa → bingkai", jadi ia mudah dipindah. Lihat `references/gabung-remotion-hyperframes.md`:
- **Remotion**: bungkus `render(t)` dalam komponen `<Canvas>` yang dipanggil dengan `useCurrentFrame()/fps`; `<Audio>` untuk suara; render dengan `npx remotion render`.
- **HyperFrames**: letak kanvas + skrip dalam komposisi HTML, dedahkan `seek(t)`; timeline GSAP boleh memacu `__draw(t)`.
Pilih Remotion bila pengguna mahu sunting dalam React / Studio; HyperFrames bila mahu HTML tulen + agen; engine terus (skill ini) bila mahu render cepat tanpa kebergantungan.

## Fail
| Laluan | Isi |
|---|---|
| `engine/kinetik.js` | Engine: palet, fon, pelonggaran, primitif teks, UI, ikon, HUD, peralihan, pemacu babak, pratonton |
| `engine/bulat.js` | Maskot Si Bulat (dari app gemi) + `bulatPop`, `bulatHop`, `bulatShadow` |
| `engine/fonts/` | Archivo, Instrument Serif, Space Mono (OFL) |
| `template/` | `index.html` + `scenes.js` permulaan + `STORYBOARD.md` |
| `scripts/render.mjs` | Lembaran kenalan, still, MP4, WebM alpha (Playwright + ffmpeg) |
| `scripts/words.mjs` | words.json (Whisper) → words.js (+ OFF, + fix.json) |
| `scripts/new_project.sh` | Perancah projek |
| `references/` | `api.md`, `gaya.md`, `pelajaran-repo.md`, `gabung-remotion-hyperframes.md` |
