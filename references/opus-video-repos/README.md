# Referensi: 10 repo video Opus 5.5

Ringkasan garis besar 10 repo GitHub tentang video yang dibuat dengan kode. Repo tidak diunduh penuh; yang disimpan hanya README asli di [`readmes/`](readmes/) dan pelajaran pentingnya. Pelajaran itu sudah dimasukkan ke skill [`video-tipografi-melayu`](../../.claude/skills/video-tipografi-melayu/).

Diambil 2026-10-02. Lisensi saya cek langsung dari file `LICENSE` atau `package.json` di tiap repo, bukan dari klaim di README.

## Tabel perbandingan

| # | Repo | ★ | Isinya | Teknologi | Lisensi (sudah dicek) | Nilai untuk video tipografi |
|---|---|---|---|---|---|---|
| 1 | [JohnHeibel/PDoomVideo](https://github.com/JohnHeibel/PDoomVideo) | 1.5k | Video musik P(doom), setiap frame dibuat dengan kode | p5.js + p5.brush, Chrome headless, ffmpeg | ⚠️ **Tidak ada file LICENSE** (package.json: ISC) | Sedang: cara kerja *chapter*, subagen paralel, storyboard |
| 2 | [yihui-dev/awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) | 1k | 475 prompt video viral | Daftar + `prompts/*.md` | MIT (prompt tetap milik kreatornya) | Tinggi: contoh prompt "kinetic typography" yang terbukti |
| 3 | [dgreenheck/tidewater](https://github.com/dgreenheck/tidewater) | 988 | Game memancing WebGPU | WebGPU/WGSL, engine sendiri | MIT (aset audio dan model: CC0) | Rendah: game, bukan video |
| 4 | [riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo) | 937 | 3 game 3D, masing-masing dari satu prompt | Three.js, esbuild | ⚠️ **Tidak ada lisensi** | Rendah: hanya bukti kemampuan *one-shot* |
| 5 | [lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | 650 | 43 gaya film, masing-masing dengan film pendek | Canvas/WebGL, TTS, sampler musik | MIT | **Sangat tinggi**: `DIRECTOR.md`, `TECHNIQUE.md`, gaya *swiss-motion* |
| 6 | [JohnHeibel/ClaudeAnimationBase](https://github.com/JohnHeibel/ClaudeAnimationBase) | 606 | Kit awal animasi kartun lukis tangan | p5.brush, `render.mjs` | MIT | Tinggi: aturan *timing*/"reads", prinsip animasi, lembar kontak |
| 7 | [athemeroy/awesome-opus-5-5-videos](https://github.com/athemeroy/awesome-opus-5-5-videos) | 360 | Panduan video Opus 5.5 lengkap dengan sumber | Data CSV, analisis | CC BY 4.0 (teks); video dan prompt milik kreatornya | Sedang: *production brief*, peta gaya dan warna |
| 8 | [diggerhq/shipvideo](https://github.com/diggerhq/shipvideo) | 223 | Tempel URL, Opus menulis video peluncuran HTML | HTML + jam virtual, Playwright, ffmpeg | ⚠️ **Tidak ada lisensi** | Tinggi: pola `__seek(t)` dan `check_scene` (cek teks yang tampil) |
| 9 | [makevoid/motion-graphics-music-video-skill](https://github.com/makevoid/motion-graphics-music-video-skill) | 71 | Lagu masuk, video motion graphics keluar | Ruby + p5 + Fal.ai + Swift VFX | MIT | Sedang: alur gelombang subagen 2→3–4→4–8. ⚠️ Butuh kredit Fal.ai berbayar (±$30 per lagu) dan macOS untuk VFX |
| 10 | [tuzhechen2005/opus-video-skills](https://github.com/tuzhechen2005/opus-video-skills) | 36 | Satu skill Claude Code untuk tiap gaya video | Canvas + three.js, skor sintetis | MIT | **Sangat tinggi**: skill `kinetic-reel` (tipografi kinetik, HUD, transisi) |

## Hasil pengecekan klaim

Saya cocokkan klaim di daftar Anda dengan isi repo yang sebenarnya:

- **PDoomVideo: tidak ada lisensi.** README tidak menyebut lisensi, dan tidak ada file LICENSE. Teknik dan idenya boleh dipelajari, tetapi kodenya jangan disalin. Untuk kode, gunakan ClaudeAnimationBase (MIT) dari pembuat yang sama.
- **claude-opus-5-5-demo dan shipvideo: juga tanpa lisensi.** Keduanya hanya dipakai sebagai referensi konsep.
- **awesome-opus5-5-videos (yihui): angka 475 benar.** Isinya 475 file di `prompts/`. Lisensi MIT hanya berlaku untuk daftar itu sendiri. Prompt dan videonya tetap milik kreator masing-masing.
- **awesome-opus-5-5-videos (athemeroy): "1.000+" benar, tetapi perlu konteks.** Korpusnya berisi 1.511 posting kandidat dan 1.119 file berlabel video Opus. Yang benar-benar ditinjau mendalam hanya **168 kasus**. Lisensinya CC BY 4.0, bukan MIT.
- **lemo-opuscar: klaim 43 gaya benar.** Ada 43 folder gaya plus `_template`. Kodenya MIT. Musik dan suara dihasilkan dengan TTS dan sampel gratis.
- **opus-video-skills: "satu skill per gaya" benar, tetapi baru ada 2 skill**, yaitu `painted-animation` dan `kinetic-reel`.
- **motion-graphics-music-video-skill: tidak sepenuhnya lokal.** Gambar dan animasi karakternya dibuat lewat Fal.ai, yang berbayar. Efek VFX-nya butuh Swift di macOS.
- **tidewater**: kodenya MIT. Aset pihak ketiganya (audio Freesound, model Poly Haven) CC0, dan karakternya dari Microsoft Rocketbox.

## Penjelasan singkat tiap repo

1. **PDoomVideo.** Video musik 156 detik, seluruhnya ditulis Opus. Setiap *chapter* ada di file sendiri, dan setiap shot adalah fungsi murni `fn(t)` tanpa `Math.random()`. Karena itu frame bisa dirender paralel dan acak urutannya. `ANIMATION_GUIDE.md` adalah brief untuk subagen.
2. **awesome-opus5-5-videos (yihui).** Gudang prompt. Prompt terbaik untuk tipografi meminta *kinetic typography word by word*, *spring easing*, elemen yang masuk tepat di ketukan, dan "check the frames yourself and fix anything that overlaps".
3. **tidewater.** Bukti bahwa Opus mampu membangun engine WebGPU penuh. Tidak relevan untuk video tipografi.
4. **claude-opus-5-5-demo.** Tiga game 3D dari satu kalimat prompt per game, tanpa kode yang diubah manusia. Ini bukti kemampuan, bukan alat.
5. **lemo-opuscar.** "Studio kecil" untuk agen. `DIRECTOR.md` menjelaskan cara menyutradarai cerita, suara, ritme, dan kamera. `TECHNIQUE.md` menjelaskan cara membangun: `window.render(t)`, satu timeline sebagai sumber kebenaran, dan `readcheck` agar setiap teks tampil cukup lama untuk dibaca. Gaya **swiss-motion** paling cocok dengan referensi gemi: grid 12 kolom, satu keluarga huruf, satu warna sinyal, teks masuk lewat *clip-reveal* (bukan fade), dan transisi lewat *wipe* atau potongan pisau.
6. **ClaudeAnimationBase.** Aturan paling berguna di sini adalah soal *timing*. Tulis daftar "reads" (apa yang harus dipahami penonton), satu read dalam satu waktu, gerakan cepat tetapi maknanya ditahan, arahkan mata penonton, dan selalu ada transisi. Alurnya: storyboard, lembar kontak, lalu MP4.
7. **awesome-opus-5-5-videos (athemeroy).** Analisis gaya, warna, dan jalur produksi. `docs/production-brief.md` adalah template brief yang bisa disalin.
8. **shipvideo.** Video berupa satu dokumen HTML. Jam virtual menggerakkan rAF, timer, dan CSS lewat `__seek(t)`. `check_scene` memeriksa error JS dan teks yang tampil di beberapa titik waktu. Aturannya: tanpa `<video>`, `<audio>`, `Math.random`, atau gambar eksternal.
9. **motion-graphics-music-video-skill.** Plugin besar untuk video musik berkarakter. Polanya adalah gelombang subagen yang ditinjau bertahap. Alat-alatnya berbayar.
10. **opus-video-skills.** Skill `kinetic-reel` adalah kerabat terdekat skill kita. Isinya font condensed, Archivo Black untuk *slam*, Instrument Serif untuk satu baris "suara", mono untuk label HUD, `dropWord`, `chip`, `odometer`, transisi *shape-continuity*, dan HUD di empat sudut.

## Yang diambil ke skill `video-tipografi-melayu`

| Dari | Diambil |
|---|---|
| PDoomVideo, lemo-opuscar, shipvideo | Frame adalah fungsi murni `t`, deterministik, render paralel, Chromium headless ke ffmpeg |
| ClaudeAnimationBase | Daftar *reads*, aturan *timing*, prinsip animasi (antisipasi, overshoot, squash), lembar kontak untuk cek mandiri |
| lemo-opuscar (swiss-motion, DIRECTOR) | Grid 12 kolom, *clip-reveal*, potongan pisau, waktu baca minimum, sari kata sebagai bagian dari layout |
| opus-video-skills (kinetic-reel) | Hierarki tipografi (slam, voice line, label mono), HUD, chip, slot berputar, transisi kontinu |
| awesome lists (prompt) | Teks muncul kata demi kata tepat saat diucapkan, elemen masuk di ketukan, cek overlap sebelum kirim |
| gemi-referensi (Drive Anda) | Palet, font Archivo + Instrument Serif + Space Mono, maskot Si Bulat, timing kata dari Whisper |
