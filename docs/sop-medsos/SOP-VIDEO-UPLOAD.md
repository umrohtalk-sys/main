# SOP Upload Video ke 6 Akun — Auzan Hasfi / EduGame Labs

Versi: 25 Nov 2026. Pasangan file `SOP-KONTEN-MEDSOS-AUZAN.md` (SOP umum + thread). File ini **khusus video**: dari satu MP4 sampai terbit di Instagram, Threads (2 akun), LinkedIn, Pinterest, dan TikTok, semuanya lewat **Repliz**, file dititip di **Zernio**.

> **Untuk Claude yang membaca file ini:** perlakukan file ini seperti CLAUDE.md. Kalau user mengirim video lalu bilang "upload", "posting", "pakai Repliz", "ke IG / Threads / TikTok / LinkedIn / Pinterest", jalankan bagian 3 dari awal sampai akhir tanpa bertanya lagi, kecuali ada yang benar-benar tidak jelas (lihat bagian 2). Peta akun, link resmi, dan aturan umum ada di `SOP-KONTEN-MEDSOS-AUZAN.md` bagian 2, 3, 11, 12.

---

## Daftar isi
1. Perintah asli user (contoh nyata)
2. Arti perintah + nilai default
3. Langkah kerja (checklist)
4. Template caption per platform
5. Parameter Repliz per platform (siap salin)
6. Cek status & menangani gagal
7. Laporan ke user
8. Khusus Claude Code cloud (file video, ffmpeg, kunci)
9. Riwayat video yang sudah terbit
10. Kesalahan yang pernah terjadi

---

## 1. Perintah asli user (contoh nyata, 24 Nov 2026)

User melampirkan file video, lalu menulis (lewat suara, apa adanya):

> ni upload ya, pakai replixsaya ke IG, habis itu ke thread @auzan_hasfi dan auzan_hasfi. Kalau di thread itu dikompres dulu ya biar bisa masuk gitu. Terus apa? Di LinkedIn, Pinterest sama TikTok gitu. Itu kan diupload ke Zernio dulu, habis itu pakai replis untuk uploadnya seperti yang sebelumnya itu ya. Captionnya sama ini apa sama dengan video relate gitu ya. Habis itu hashtagnya ini saya tulis. #fyp #malaysia #cikgu #reel #reels

Hasil: 6 posting, semua `success`. Caption lengkapnya ada di `lampiran/contoh-caption-video/caption-video-cikgu-gelaran-seumur-hidup-20261124-0544-6-akaun-bm.txt`.

## 2. Arti perintah + nilai default

| User bilang | Artinya |
|---|---|
| "replis", "replix", "Repliz saya" | Repliz MCP (`mcp__repliz__*`), dipakai untuk SEMUA posting |
| "Zernio", "Zevio", "diupload ke Zernio dulu" | Titip file di Zernio (`media_get_media_presigned_url`) supaya dapat URL publik. Zernio TIDAK dipakai untuk posting |
| "thread @auzan_hasfi dan auzan_hasfi", "dua Auzan Hasfi" | Threads **@auzan_hasfi** (centang biru, `6afae687fc43f81b7897afd4`) + **@auzanhasfi** (`6afc6588fc43f81b789dbef5`) |
| "dikompres dulu biar bisa masuk" | Versi Threads dikompres 720p (bagian 3 langkah 3). Platform lain file asli |
| "caption sama dengan video / relate" | Caption ditulis dari ISI video (naskah), beda per platform |
| "hashtagnya ini saya tulis …" | Pakai persis hashtag itu di SEMUA platform, jangan tambah/ubah |
| "seperti yang sebelumnya" | Ikuti SOP ini persis |

Default kalau user tidak menyebut:
- **Platform**: IG @auzan_hasfi, Threads 2 akun BM, LinkedIn, Pinterest (board "Panduan belajar"), TikTok @eduapp.id0. @edugamelabs.id hanya kalau videonya Bahasa Indonesia. @bidanvirdaa TIDAK PERNAH untuk konten EduGame.
- **TikTok**: @eduapp.id0 untuk video cikgu/pendidikan. @diarymalaysia untuk topik umum Malaysia (ekonomi, negara, RM, Petronas, dll). Kalau ragu, pakai @eduapp.id0 dan sebut di laporan.
- **Bahasa caption**: ikut bahasa video (video BM → caption BM).
- **Waktu**: terbit sekarang (scheduleAt = sekarang + 2–3 menit). Kalau user sebut jam, itu WIB → kurangi 7 jam untuk UTC.
- **CTA**: IG "Nak buat video macam ni? Komen TOOLS." (auto-DM Zernio kirim link lpvideo). Tambah "Nak mentoring terus dengan saya? Link di bio." kalau video menutup dengan ajakan mentoring.

Hanya bertanya kalau: file tidak ditemukan, video bahasa Indonesia tapi tujuan tidak jelas, atau user minta "lihat dulu sebelum posting" (buat draf, tunggu setuju).

## 3. Langkah kerja (checklist)

**Langkah 0 — Jam & akun.** `date -u` dan `TZ=Asia/Jakarta date`. Kalau sesi baru: `repliz_list_accounts` untuk memastikan ID akun masih sama dengan tabel di SOP umum bagian 2.

**Langkah 1 — Periksa video.**
```bash
ffprobe -v error -show_entries format=duration,size:stream=width,height -of csv=p=0 VIDEO.mp4
```
Catat durasi, resolusi (potret 1080x1920 biasanya), ukuran.

**Langkah 2 — Pahami isi video untuk caption.** Urutan sumber:
1. Folder project video (lokal): `suara/timing.json` (kunci `lines[].heard` = kalimat narasi), `naskah*.json`, `naskah*.txt`, `LINES` di `js/timeline.js`, `sumber.md` (data & sumber angka).
2. Memori project video (`project_video_<judul>.md`).
3. Kalau tidak ada naskah (biasanya di cloud): ambil frame dan baca takarirnya, JANGAN pakai Whisper:
   ```bash
   ffmpeg -v error -i VIDEO.mp4 -vf "fps=1/5,scale=360:-1,tile=4x4" -frames:v 1 contact.jpg
   ```
   lalu baca gambar `contact.jpg` (Read tool). Ulangi dengan `-ss` lain kalau perlu.
Ambil: hook pembuka, 2–4 poin inti, kalimat penutup yang kuat, CTA di akhir video.

**Langkah 3 — Kompres versi Threads.**
```bash
bash alat/kompres-threads.sh VIDEO.mp4 VIDEO-threads-720p-kompres.mp4
```
(isi: `scale=720:1280,format=yuv420p`, libx264 high 4.0, crf 27, maxrate 2500k, AAC 128k, faststart). Hasil ±7 MB untuk 75–90 s. Video landskap: ganti ke `scale=1280:720`.

**Langkah 4 — Titip dua file di Zernio.** Untuk file ASLI dan file KOMPRES masing-masing:
1. `mcp__zernio__media_get_media_presigned_url` → `filename` deskriptif (mis. `cikgu-gelaran-seumur-hidup-bm.mp4`), `content_type: "video/mp4"`, `size` (byte).
2. `bash alat/upload-presigned.sh FILE '<uploadUrl>' '<publicUrl>'` → PUT harus `200`, `content-length` publicUrl = ukuran file.
3. `uploadUrl` berlaku 1 jam. `publicUrl` (`https://media.zernio.com/temp/...`) dipakai di Repliz.

Kenapa Zernio: storage Repliz = 0 (`repliz_init_file` → 402).

**Langkah 5 — Tulis 6 caption** (bagian 4). Langsung dipakai, TANPA file TXT pratinjau (kecuali user minta lihat dulu). Hashtag user di baris terakhir setiap caption.

**Langkah 6 — Jadwalkan 6 posting di Repliz** (bagian 5), `scheduleAt` = sekarang + 2–3 menit (UTC, format `2026-11-23T22:44:00.000Z`). Boleh dikirim paralel.
- File ASLI: IG, LinkedIn, Pinterest, TikTok.
- File KOMPRES: 2 Threads.
- **Threads: JANGAN isi `topic`** (lihat bagian 10).

**Langkah 7 — Tunggu & cek status** (bagian 6) sampai semua `success`.

**Langkah 8 — Lapor** (bagian 7). Catat posting di memori/riwayat (bagian 9).

## 4. Template caption per platform

Semua caption **berdasarkan isi video**, nada santai manusiawi, emoji 1–2 saja. Copy dua akun Threads WAJIB beda sudut.

### Instagram @auzan_hasfi (paling panjang, 120–200 kata)
```
[Hook 1 kalimat dari pembuka video] [1 emoji]

[Paragraf 1: situasi/masalah dari video, 1–2 kalimat]

[Baris pendek kontras, mis. "Cikgu lain."]
[2–3 baris poin inti, satu baris satu poin]

[Momen emosional / adegan kunci dalam tanda petik]

[Kalimat penutup video]

[Ajakan interaksi: "Tag cikgu yang korang …" 💛]

Nak buat video macam ni? Komen TOOLS.
[opsional] Nak mentoring terus dengan saya? Link di bio.

[hashtag user]
```

### Threads @auzan_hasfi (centang biru) — 1–2 kalimat, sudut A
Ambil satu kontras/pernyataan tajam dari video. Contoh: "Bos, pengurus, pengarah — gelaran tu tinggal atas meja bila keluar pejabat. Tapi "cikgu"? …" + hashtag.

### Threads @auzanhasfi — 1–2 kalimat, sudut B (adegan + pertanyaan)
Ambil satu adegan dari video lalu tanya ke pembaca. Contoh: "20 tahun kemudian di pasar raya: "Cikgu! Ingat saya lagi tak?" … Siapa cikgu yang korang tak pernah lupa?" + hashtag.

### LinkedIn Auzan Hasfi — profesional, 100–150 kata
Pembuka 1 kalimat (boleh English pendek), lalu DATA/sumber dari video (angka, kajian), makna untuk profesi, penutup terima kasih/refleksi. Tanpa CTA komen. Hashtag user.

### Pinterest whitespace92 — deskriptif & SEO
- `title` ≤100 karakter: "[Topik]: [janji/pertanyaan]".
- `description` ≤800: 2–3 kalimat isi video + "Video animasi [gaya] BM tentang …" + "Nak buat video macam ni? Lawati link." + hashtag.
- `alt`: gambaran visual adegan utama.

### TikTok @eduapp.id0 — sedang, 50–80 kata
Hook huruf besar di kata kunci, 2–3 baris inti, ajakan tag. Tanpa "Komen TOOLS" (tidak ada auto-DM TikTok). Hashtag user.

Contoh lengkap semua platform: `lampiran/contoh-caption-video/` (4 video) dan `lampiran/contoh-posting-terbit.md`.

## 5. Parameter Repliz per platform (siap salin)

Tool: `mcp__repliz__repliz_create_schedule`. `type: "video"`, `medias: [{type:"video", url:"<publicUrl>"}]`.

| Platform | accountId | File | Tambahan |
|---|---|---|---|
| Instagram @auzan_hasfi | `6afd7815fc43f81b78a1b73d` | asli | `additionalInfo: {isShareToFeed: true}` |
| Threads @auzan_hasfi | `6afae687fc43f81b7897afd4` | kompres | **tanpa `topic`** |
| Threads @auzanhasfi | `6afc6588fc43f81b789dbef5` | kompres | **tanpa `topic`** |
| LinkedIn Auzan Hasfi | `6afd792efc43f81b78a1c13b` | asli | — |
| Pinterest whitespace92 | `6afd7948fc43f81b78a1c4e5` | asli | `title`, `medias[0].alt`, `additionalInfo: {channel: {id:"610026780716203515", name:"Panduan belajar", type:"board"}, link:"https://lpvideo.edugamelabs.com"}` |
| TikTok @eduapp.id0 | `6afd78e1fc43f81b78a1bff5` | asli | `additionalInfo: {isAiGenerated: true}` (video animasi AI) |
| TikTok @diarymalaysia | `6b00e2d7fc43f81b78b010e8` | asli | topik umum Malaysia |
| Threads @edugamelabs.id | `6afc6737fc43f81b789dc479` | kompres | hanya video Bahasa Indonesia, caption ID |

Contoh panggilan (Instagram):
```json
{
  "accountId": "6afd7815fc43f81b78a1b73d",
  "type": "video",
  "scheduleAt": "2026-11-23T22:44:00.000Z",
  "description": "<caption IG>",
  "medias": [{"type": "video", "url": "https://media.zernio.com/temp/....mp4"}],
  "additionalInfo": {"isShareToFeed": true}
}
```
Simpan setiap `scheduleId` yang dikembalikan.

## 6. Cek status & menangani gagal

- Tunggu sampai lewat `scheduleAt` + ±1–3 menit. Jangan polling dengan `sleep` panjang di foreground; pakai loop pendek atau proses latar.
- Cek: `repliz_get_schedule` per id, atau REST:
  ```bash
  REPLIZ_BASIC=... bash alat/cek-status-repliz.sh <id1> <id2> ...
  ```
  (`GET https://api.repliz.com/public/schedule/<id>`, header `Authorization: Basic …`). JANGAN `repliz_list_schedules` tanpa filter: output 65 rb karakter dan `fromDate` diabaikan.
- Status: `pending` (menunggu) → `process` → `success` / `error`.
- **TikTok** kadang lama di `process` padahal `publish.status: PUBLISH_COMPLETE` → anggap sukses.
- **Threads `error` "An unexpected error has occurred"**:
  1. Pastikan file yang dipakai versi KOMPRES.
  2. Pastikan TIDAK ada `topic`. `repliz_retry_schedule` TIDAK menolong (retry tetap gagal karena isi jadwal sama).
  3. Buat jadwal BARU tanpa `topic` dengan caption & file sama → berhasil (terbukti 24 Nov).
  4. Jadwal gagal yang lama dibiarkan saja (tidak terbit apa pun).
- IG/LinkedIn/Pinterest gagal: cek publicUrl masih 200, lalu `repliz_retry_schedule` sekali; kalau tetap gagal, laporkan pesan error-nya ke user.

## 7. Laporan ke user (Bahasa Indonesia)

Satu kalimat hasil ("Videonya sudah terbit di 6 akun, semua success."), lalu tabel:

| Platform | Akun | File | Caption |
|---|---|---|---|
| Instagram | @auzan_hasfi | asli 1080p | ringkasan sudut caption |
| … | | | |

Sebut di bawahnya hanya yang penting: yang sempat gagal dan cara memperbaikinya, pilihan default yang diambil (mis. TikTok mana). Tanpa file TXT.

## 8. Khusus Claude Code cloud

- **File video**: cloud tidak punya `~/Downloads`. Pilihan (urut paling mudah):
  1. User commit MP4 ke repo (folder `video-masuk/`, <100 MB per file; pakai Git LFS kalau lebih).
  2. User beri URL publik langsung ke MP4 (mis. link unduh langsung). Unduh dengan `curl -L -o video.mp4 '<url>'` ke folder kosong baru, cek `ffprobe` dulu.
  3. Kalau MP4 asli sudah di URL publik yang bisa diakses Repliz, file asli tidak perlu dititip ulang di Zernio; versi kompres tetap harus dibuat & dititip.
- **ffmpeg**: `sudo apt-get install -y ffmpeg` atau `pip install imageio-ffmpeg` lalu pakai `python -c "import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())"` sebagai path ffmpeg.
- **MCP**: Repliz + Zernio wajib tersambung (cara pasang di SOP umum bagian 0). Kunci hanya di secret/env (`REPLIZ_BASIC`, `ZERNIO_API_KEY`), tidak pernah di repo, file, atau chat.
- **Folder project video** (naskah) tidak ada di cloud → pakai contact sheet (langkah 2.3) atau minta user tempel naskah singkat.
- Hasil kerja (caption, catatan terbit) cukup dilaporkan di chat; kalau perlu disimpan, tambah baris di bagian 9 file ini dan commit.

## 9. Riwayat video yang sudah terbit (via Repliz)

| Tanggal (WIB) | Video | Akun | Catatan |
|---|---|---|---|
| 18 Nov | Damai murid bergaduh | IG, TikTok eduapp, LinkedIn, Pinterest | Threads gagal (belum kompres), dibatalkan |
| 19 Nov | Claude tak pandai animasi | IG, TikTok, LinkedIn, Pinterest (board "ai") | semua success |
| 19 Nov | Nak jadi cikgu sehari | IG, TikTok, LinkedIn, Pinterest | |
| 21 Nov | Kalau cikgu aplikasi | IG, 2 Threads (kompres), LinkedIn, Pinterest, TikTok | pertama kali Threads video berhasil (kompres) |
| 21 Nov | RM1 juta semua rakyat | TikTok @diarymalaysia, IG, 2 Threads | Threads caption singkat 1–2 ayat |
| 22 Nov | Cikgu banyak cuti | IG, Pinterest, dll | |
| 24 Nov 05:44 | Cikgu gelaran seumur hidup | IG, 2 Threads, LinkedIn, Pinterest, TikTok eduapp | Threads gagal dengan `topic`, berhasil tanpa `topic` |
| 25 Nov 04:41 | Teknik mengajar #1 papan jawapan mini | IG, LinkedIn, TikTok eduapp success; Pinterest error | Dari cloud, file di raw.githubusercontent (tanpa Zernio). Pinterest menolak: "This site doesn't allow you to save Pins" |

Tambahkan baris baru setiap selesai posting video.

## 10. Kesalahan yang pernah terjadi (jangan diulang)

1. **Threads video dengan `topic`** → "unexpected error", retry pun gagal. Threads video: tanpa `topic`. (Thread TEKS di SOP C/D tetap boleh pakai `topic`.)
2. **Threads video tanpa kompres** → gagal. Selalu pakai file 720p kompres.
3. **`repliz_list_schedules` tanpa filter** → output terlalu besar, `fromDate` diabaikan. Cek per id.
4. **Membuat file TXT caption** padahal user mau langsung upload. TXT hanya kalau diminta.
5. **Menambah hashtag sendiri**. Pakai persis hashtag dari user.
6. **Caption generik**. Selalu baca naskah/takarir video dulu.
7. **Copy dua akun Threads sama** → harus beda sudut.
8. **Salah zona waktu**. User = WIB, Repliz = UTC.
9. **Video Pinterest dari raw.githubusercontent.com** → error "This site doesn't allow you to save Pins". IG/LinkedIn/TikTok boleh pakai link GitHub raw, tapi Pinterest wajib file di Zernio (25 Nov).
