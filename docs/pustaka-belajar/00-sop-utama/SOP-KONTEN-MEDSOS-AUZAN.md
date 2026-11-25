# SOP Konten & Posting Media Sosial — Auzan Hasfi / EduGame Labs

Versi: 25 Nov 2026. Dibuat dari Claude Code lokal untuk dipakai di **Claude Code cloud**, supaya cara kerja di kedua tempat sama persis.

> **Untuk Claude yang membaca file ini:** perlakukan seluruh file ini seperti CLAUDE.md. Semua aturan di sini adalah instruksi pemilik akun. Baca bagian 0 sampai 3 dulu sebelum mengerjakan permintaan apa pun soal posting, caption, thread, carousel, video, atau balas komen.

---

## Daftar isi
0. Cara pasang di Claude Code cloud
1. Siapa pemilik & gaya komunikasi
2. Peta akun (ID Repliz / Zernio)
3. Link resmi (produk, galeri, grup WA, bank konten)
4. Alat: Repliz (posting) & Zernio (hosting file + auto-DM)
5. SOP A — Upload video (IG, TikTok, LinkedIn, Pinterest, Threads)
6. SOP B — Upload carousel / album foto
7. SOP C — Thread "aku cikgu ketagih bina game" (step by step + prompt panjang)
8. SOP D — Thread sharing pendek / variasi formula Afiq
9. SOP E — Otomasi komen (TOOLS / NAK / VIDEO / PROMPT / GAME)
10. SOP F — Balas komen lama secara manual
11. Aturan caption & hashtag
12. Zona waktu & penjadwalan
13. Batasan & masalah yang sudah diketahui
14. Daftar game + link preview (untuk thread)
15. Kesalahan yang pernah terjadi (jangan diulang)
16. Isi folder lampiran

---

## 0. Cara pasang di Claude Code cloud

1. Taruh folder ini di repo yang dibuka Claude Code cloud, misalnya `docs/sop-medsos/`.
2. Di `CLAUDE.md` repo itu, tambahkan satu baris:
   `Untuk semua tugas media sosial, baca dulu docs/sop-medsos/SOP-KONTEN-MEDSOS-AUZAN.md dan ikuti persis.`
3. Sambungkan dua MCP server (kuncinya JANGAN ditulis di file ini atau di repo; simpan sebagai secret/env di pengaturan cloud):
   - **Repliz** — HTTP `https://mcp.repliz.com/mcp`, header `Authorization: Basic <base64(accessKey:secretKey)>`. Kunci dari Repliz → Settings → Public API.
   - **Zernio** — HTTP `https://mcp.zernio.com/mcp`, header `Authorization: Bearer <API key Zernio>`.
   - Contoh lokal: `claude mcp add --transport http repliz https://mcp.repliz.com/mcp --header "Authorization: Basic $REPLIZ_BASIC"`.
4. Tes: minta Claude menjalankan `repliz_list_accounts` dan `zernio accounts_list`. Hasilnya harus sama dengan tabel di bagian 2.
5. Di cloud tidak ada file lokal `~/Downloads`. Video/gambar harus diunggah dulu ke repo atau di-hosting (lihat SOP A langkah 2). ffmpeg mungkin perlu dipasang (`apt-get install -y ffmpeg`) untuk kompres video Threads.

---

## 1. Siapa pemilik & gaya komunikasi

- Pemilik: **Auzan Hasfi**, pembuat **EduGame Labs** (game & app edukasi, Prompt Generator, prompt video) untuk cikgu Malaysia dan guru Indonesia. Tinggal di Jember (WIB).
- User menulis perintah dalam Bahasa Indonesia santai, sering lewat suara (salah ketik nama wajar: "Ozen Hasfi", "replis", "Zevio", "Edu Game", "Afik Asrof" = Afiq Asyraf).
- Jawab user dalam **Bahasa Indonesia**. Konten untuk audiens Malaysia dalam **Bahasa Melayu (BM)**, untuk Indonesia dalam **Bahasa Indonesia**.
- User ingin **langsung jadi**: caption langsung di-upload, tanpa file TXT pratinjau (kecuali dia minta lihat dulu).
- Kalau user bilang "kasih lihat dulu / kalau saya setuju baru di-post": tampilkan draf (artifact/halaman) dan TUNGGU persetujuan.
- Setelah posting, selalu **cek status** di Repliz sampai `success`, lalu lapor singkat: akun, isi, status.

---

## 2. Peta akun

### Repliz (dipakai untuk SEMUA posting)
| Platform | Username | Repliz accountId | Bahasa / catatan |
|---|---|---|---|
| Instagram | @auzan_hasfi | `6afd7815fc43f81b78a1b73d` | BM. Auto-DM Zernio aktif (TOOLS/NAK/VIDEO/PROMPT/GAME) |
| TikTok | @eduapp.id0 (nama eduapp.id) | `6afd78e1fc43f81b78a1bff5` | BM (konten cikgu Malaysia) — TikTok default |
| TikTok | @diarymalaysia | `6b00e2d7fc43f81b78b010e8` | BM, konten umum Malaysia (contoh: "RM1 juta semua rakyat") |
| LinkedIn | Auzan Hasfi | `6afd792efc43f81b78a1c13b` | BM formal/profesional |
| Pinterest | whitespace92 | `6afd7948fc43f81b78a1c4e5` | Board "Panduan belajar" id `610026780716203515` |
| Threads | **@auzan_hasfi** (CENTANG BIRU) | `6afae687fc43f81b7897afd4` | BM. Otomasi Zernio TOOLS/NAK aktif (balasan publik) |
| Threads | **@auzanhasfi** (tanpa garis bawah, tidak centang) | `6afc6588fc43f81b789dbef5` | BM. Akun asal post rujukan 16,6 rb tayangan |
| Threads | @edugamelabs.id | `6afc6737fc43f81b789dc479` | **Bahasa Indonesia**, topik "Guru" |
| Threads | @bidanvirdaa | `6afc6815fc43f81b789dc731` | Akun keluarga (Bidan Virda). JANGAN dipakai untuk konten EduGame. Komennya jangan dibalas otomatis |

Nama "Auzan Hasfi" ada DUA di Threads. Kalau user bilang "dua Auzan Hasfi" = @auzan_hasfi + @auzanhasfi. Copywriting keduanya harus **mirip tapi tidak sama** (lihat SOP C).

### Zernio (hosting file + otomasi komen/DM; BUKAN untuk posting)
| Platform | Username | Zernio accountId |
|---|---|---|
| Instagram | auzan_hasfi | `6aed915ef79bc72b77e0f13a` |
| Threads | auzan_hasfi | `6b035af818f2bdaca6cbc9f5` |
| Profile | Default Profile | `68f39b1c8fcd90cb1120bec8` |

---

## 3. Link resmi

| Untuk | BM / Malaysia | Indonesia |
|---|---|---|
| Galeri Prompt GRATIS (game & app) | https://demoprompt.edugamelabs.com | https://demoprompt.edugamelabs.com/id |
| **Pro** — Prompt Generator + semua template | https://lptoolsid.edugamelabs.com/ms/ | https://lptoolsid.edugamelabs.com/id/ |
| Prompt Video (TOOLS / VIDEO) | https://lpvideo.edugamelabs.com | (sama, ada /id) |
| Masterclass / Fundamental AI | https://lpindo.edugamelabs.com (/ms/) | https://lpindo.edugamelabs.com/id/ |
| Mentoring 1-on-1 | https://mentoring1on1.edugamelabs.com | (sama) |
| **Grup WhatsApp komunitas GRATIS** | https://chat.whatsapp.com/KzZo7lCMKNuIZ79rBMScxX | https://chat.whatsapp.com/I9TMY7nm3CU1afwM34jcDm |
| Preview game | https://preview.edugamelabs.com/kertas-tinta/games/<slug>/ | sama |
| **Bank Konten** (2.000+ thread BM/ID, ide, hook) | https://bank-konten-auzan.netlify.app | sama (filter bahasa) |
| Gudang Konten (catatan lama) | https://gudang-konten-auzan.netlify.app | |
| Riset carousel Claude IG | https://riset-carousel-claude-ig.netlify.app | |
| Riset konten guru IG | https://riset-konten-guru-ig.netlify.app | |

Catatan link:
- **Jangan pakai lptoolsmy.edugamelabs.com** untuk BM: redirect-nya jatuh ke /id/. Pakai `lptoolsid.edugamelabs.com/ms/`.
- Di Bank Konten, cari thread variasi Afiq dengan tag `variasi-afiq` atau `formula-larangan|bang|khas|sebenarnya|minit|shortcut|senarai|kenapa|dulu|mitos|eksperimen|relatable|soft-cerita|soft-dm`. Thread yang sudah terbit berstatus "terbit".

---

## 4. Alat

### Repliz (posting)
- Paket user: **Premium Rp29.000/bulan** (75 akun). Bisa: jadwal posting semua platform, inbox, otomasi. **Tidak bisa** (perlu Gold): hapus konten yang sudah terbit (`repliz_delete_content` → 402), baca post Threads lewat URL (`repliz_get_threads_content_by_url` → 402), `GET /public/content`.
- **Storage Repliz = 0** (`init_file` → 402). Jadi file video/gambar TIDAK di-upload ke Repliz, tapi di-hosting di Zernio (lihat SOP A).
- Otomasi Repliz sendiri gratis per pesan; hanya balasan AI yang pakai Token Balance (Rp5.000/100rb token). Teks tetap = gratis.
- `scheduleAt` **wajib waktu masa depan dalam UTC**.
- `repliz_list_schedules` mengabaikan `fromDate`; untuk cek hasil, pakai `repliz_get_schedule` per id, atau `list_schedules` dengan `status: pending|process|error`.

### Zernio
- Dipakai untuk: (1) **hosting file** lewat `media_get_media_presigned_url` (PUT file → dapat `publicUrl` di `media.zernio.com`), (2) **otomasi komen → DM** di IG dan balasan publik di Threads, (3) membaca & membalas komen.
- Billing usage-based: 2 akun gratis, 10.000 DM/bulan gratis.
- Tool tersembunyi dicari lewat `search_tools`, dijalankan lewat `call_tool`.
- REST cadangan: `https://zernio.com/api/v1/...` dengan header `Authorization: Bearer <key>` (contoh: `GET /inbox/comments?accountId=..&platform=threads`, `GET /inbox/comments/{postId}?accountId=..&view=full`, `POST /inbox/comments/{postId}` body `{accountId, commentId, message}`).

---

## 5. SOP A — Upload video

Perintah khas user: *"Upload ini ke IG, TikTok, LinkedIn, Pinterest, Threads dua akun. Kompres untuk Threads. Hashtag ini: …"*

1. **Cek video**: `ffprobe` (durasi, resolusi, ukuran). Baca naskah/isi video dari folder project (cari `naskah*.json`, `LINES` di `js/timeline.js`, `naskah*.txt`, atau memori project) supaya caption **relevan dengan isi video**.
2. **Hosting di Zernio**:
   - `media_get_media_presigned_url` (filename deskriptif, `content_type: video/mp4`, size).
   - `curl -X PUT -H "Content-Type: video/mp4" --upload-file <file> '<uploadUrl>'` → harus 200.
   - Cek `curl -sI <publicUrl>` → 200 dan `content-length` sama.
   - uploadUrl berlaku 1 jam.
3. **Versi Threads WAJIB dikompres** (Threads gagal "unexpected error" untuk file besar):
   ```
   ffmpeg -y -i IN.mp4 -vf "scale=720:1280,format=yuv420p" -c:v libx264 -profile:v high -level 4.0 -preset medium -crf 27 -maxrate 2500k -bufsize 5000k -r 30 -c:a aac -b:a 128k -ar 44100 -ac 2 -movflags +faststart OUT-threads-720p-kompres.mp4
   ```
   Hasil ±7–8 MB untuk 90 detik. Platform lain pakai file ASLI.
4. **Jadwalkan** di Repliz (`repliz_create_schedule`, `type: video`, `scheduleAt` = sekarang + 2–3 menit, UTC):
   - IG: `additionalInfo.isShareToFeed: true`. Caption panjang + CTA "Komen TOOLS, saya hantar link terus ke DM" (auto-DM aktif). Bisa tambah "Nak mentoring terus dengan saya? Link di bio." bila video menyebut mentoring.
   - TikTok: caption sedang, **tanpa** CTA komen (tidak ada auto-DM di TikTok).
   - LinkedIn: BM formal, sudut profesional, tanpa CTA komen.
   - Pinterest: `title` (≤100), `description` ≤800, `additionalInfo.channel` = `{id:"610026780716203515", name:"Panduan belajar", type:"board"}`, `additionalInfo.link` = https://lpvideo.edugamelabs.com, `medias[0].alt` diisi.
   - Threads (dua akun BM): pakai file **kompres**, caption singkat, **beda kalimat** antar akun supaya tidak terlihat duplikat.
5. Tunggu ±3–4 menit, cek `repliz_get_schedule` tiap id → semua `success`. Kalau `process` di TikTok tapi `publish.status: PUBLISH_COMPLETE`, anggap sukses (status Repliz lambat).
6. Lapor ke user dalam tabel: platform, akun, ringkasan caption, status.

---

## 6. SOP B — Upload carousel / album

1. Ambil JPG yang sudah ada (contoh: `jpg/karusel-1/01..10.jpg`, 1080×1350). Kalau belum ada, render dari HTML-nya.
2. Hosting tiap JPG lewat Zernio presigned URL (`content_type: image/jpeg`), PUT, cek 200.
3. `repliz_create_schedule` `type: album`, `medias` = semua gambar berurutan. **10 gambar diterima** walau dokumentasi bilang 2–5.
   - IG: caption panjang, isi slaid dirangkum, CTA Komen TOOLS.
   - TikTok: wajib `title` (judul pendek) + caption sedang.
   - Threads: caption 1 kalimat, beda antar akun.
4. Cek status. TikTok foto bisa lama di `process` walau TikTok sudah `PUBLISH_COMPLETE`.

---

## 7. SOP C — Thread "aku cikgu ketagih bina game" (format utama, paling sering diminta)

**Rujukan gaya:** https://www.threads.com/@auzanhasfi/post/De5NB83k9Ig (16,6 rb tayangan). Pola: pengakuan "Aku ni cikgu yang ketagih…", satu game spesifik ala game terkenal + soalan Matematik, sebut AI, lalu langkah demi langkah, link prompt/preview, ajakan tambah pendapatan.

### Target per batch (default bila user bilang "3 akun")
| Akun | Bahasa | Gaya |
|---|---|---|
| @auzanhasfi | BM | Struktur penuh persis (di bawah) |
| @auzan_hasfi (centang biru) | BM | **Hampir sama tapi beda sudut**: hook lain, STEP 2 digabung 1 post + post tips memilih AI, contoh kelas berbeda, penutup "Komen NAK" |
| @edugamelabs.id | Indonesia | Struktur penuh, link /id |

**Setiap akun pakai GAME BERBEDA**, dan jangan ulang game dari batch sebelumnya (lihat bagian 14).

### Struktur thread (±11–12 post)
1. **Hook SINGKAT** (1–2 baris): "Aku dah ketagih bina game sendiri. Kali ni aku buat ala [Game] untuk kelas [Subjek]." + "Aku cerita penuh kat bawah."
2. **Sharing panjang** (cerita pribadi): kenapa buat game ini, masalah di kelas, reaksi murid ("cikgu, satu lagi").
3. **Preview game**: "Ni game dia. Cuba main dulu sekejap" + link preview.
4. **LANGKAH 1 — Salin prompt**: "Tekan lama, salin semua, tukar bahagian dalam [kurungan]" + contoh penggantian. **Prompt panjang diletakkan di `textAttachment`** (bukan di teks post).
5. **LANGKAH 2 — Claude**: 1. Buka claude.ai, log masuk guna Gmail → 2. New chat → 3. Tampal prompt, Enter → 4. Tunggu 1–2 minit, game keluar kat panel kanan (Artifact) → 5. Main terus → 6. Publish → Copy link.
6. **Gemini**: gemini.google.com → Tools → Canvas → tampal → Enter → Preview (atas kanan) → Share → Copy link.
7. **ChatGPT**: chatgpt.com → + → Canvas → tampal → Enter → Preview → Share, atau salin kod → simpan `game.html` → buka di browser.
8. **LANGKAH 3 — Baiki**: "Kali pertama selalunya ada je yang tak kena." + 3 contoh ayat ("Lastik susah nak tarik kat telefon, mudahkan", "Tukar soalan ke sifir 2 hingga 5"). Tak perlu sentuh kod.
9. **LANGKAH 4 — Bawa masuk kelas**: link ke grup WhatsApp kelas / Google Classroom; atau projektor + Mod 2 Pemain / kumpulan. "Kelas jadi riuh, tapi riuh yang belajar."
10. **Galeri prompt PERCUMA/GRATIS** + link.
11. **Kenapa beli Pro**: galeri percuma cuma sebahagian; Pro buka semua template game & apps; Prompt Generator (pilih jenis game, isi subjek & tahun, prompt panjang terus siap); panduan sampai boleh jual game sebagai produk digital; sekali beli, guna untuk semua subjek. + link Pro.
12. **Grup WhatsApp komuniti PERCUMA** (link MY untuk BM, link ID untuk Indonesia) + "Kalau tersekat kat mana-mana langkah, komen je kat bawah. Aku balas satu-satu."

### Struktur prompt panjang (di textAttachment)
Judul, lalu baris "(salin semua, tukar bahagian dalam [kurungan])", lalu bagian-bagian ini, masing-masing dipisah **baris kosong** (jangan numpuk):
`PERANAN` · `MATLAMAT` (SATU fail HTML, terus buka di browser telefon & laptop) · `DATA KELAS` ([Tahap], [Subjek], [Topik], [Bilangan soalan], Bahasa) · `CARA MAIN` (1–6 bernomor, termasuk aturan jawapan betul/salah + penerangan) · `MOD KELAS` (tahap kesukaran, Mod 2 pemain) · `PAPARAN` (kartun ceria, butang ≥56 px, efek kecil, Web Audio + butang senyap) · `SOALAN` (tulis N soalan, simpan dalam satu array di atas kod, rawak) · `TEKNIKAL` (tanpa gambar luar, responsif, localStorage) · `HASIL` (kod penuh satu fail + cara tukar soalan).
Versi Indonesia: PERAN / TUJUAN / DATA KELAS / ALUR PERMAINAN / MODE KELAS / TAMPILAN / SOAL / TEKNIS / HASIL.

### Nada
- Santai, sangat friendly, manusiawi, **tidak kelihatan AI**. Bercerita sebagai cikgu biasa ("Aku pun selalu macam tu", "Aku juga gitu kok").
- **Emoji sedikit (0–2 per thread)**. Tidak ada daftar bertanda emoji.
- BM: aku/korang, kat, je, tak, nak, berbaloi. ID: aku/kalian, nggak, aja, kok, worth it.
- Batas 500 karakter per post Threads (cek!). Prompt panjang hanya di lampiran (maks 10.000).

### Teknis posting thread
`repliz_create_schedule` `type: text`, `topic` ("AI Threads" untuk akun BM, "Guru" untuk @edugamelabs.id), `replies[]` semua `type: text, delay: 0`, post LANGKAH 1 punya `textAttachment: {text: <prompt>, link: ""}`. Maks 5 link per post. Untuk mengubah jadwal pakai `repliz_update_schedule` (kirim ulang SEMUA isi termasuk `textAttachment`, kalau tidak lampiran hilang).

### Proses persetujuan
Kalau user minta "kasih tahu dulu copywritingnya", buat halaman draf (artifact) berisi semua post per akun + tombol salin, kirim link, tunggu "setuju". Kalau user menyebut jam, jadwalkan tepat jam itu (WIB→UTC).

---

## 8. SOP D — Thread sharing pendek / variasi formula Afiq

Sumber: analisa 200 postingan Threads **@muhd.afiq.asyraf** (lampiran `afiq-asyraf/`), panduan tulis BM & terjemahan ID (lampiran `panduan-thread/`), dan **2.000 thread siap** di Bank Konten.

- Formula hook terbukti: **Larangan** ("BERHENTI minta AI '…'."), **BANG, MACAM MANA NAK …?** (huruf besar), **KHAS UNTUK [golongan]**, **Sebenarnya…**, **dalam X minit**, senarai bernombor.
- Bentuk: 3–5 post, ≤450 aksara, ayat pendek, baris kosong, bagian 2+ diawali nomor + label, framework pakai `+`, prompt contoh dalam English dengan placeholder `[topic]`.
- Posting pagi/siang (11–13 MYT ramai dibaca).
- Cara pakai bank konten: buka https://bank-konten-auzan.netlify.app, filter tag `variasi-afiq` + bahasa, pilih yang belum "terbit", ganti post terakhir dengan promosi (BM → lptoolsid.edugamelabs.com/ms/, ID → /id/), posting via Repliz `type: text` + `replies`.
- Copy **berbeda per akun** (BM @auzan_hasfi topik "AI Threads", BM @auzanhasfi topik "Cikgu", ID @edugamelabs.id topik "Guru").
- Varian "remake sharing guru": cerita guru (kelas ngantuk → kuis jadi game) + 5 kunci prompt lengkap + prompt panjang di lampiran + cara revisi + galeri + Pro.

---

## 9. SOP E — Otomasi komen (Zernio)

### Instagram @auzan_hasfi (DM + balasan publik "cek DM")
| Nama | id | Kata kunci (exact kecuali disebut) | Link di DM | Ulang |
|---|---|---|---|---|
| PROMPT / GAME → demo prompt | `6aed9409d6e1f2819b76d548` | prompt, promp, promt, prompts, game, games (word) | demoprompt.edugamelabs.com | sekali/orang |
| NAK → LP tools | `6aef1eaba2736dba710d701d` | nak | lptoolsmy (IG lama) | sekali/orang |
| VIDEO → LP Video | `6af4f2d23d5c0eec0f235b2a` | video, videos, vidio, nak video, link video, video cikgu… | lpvideo.edugamelabs.com | setiap komen |
| TOOLS → LP Video | `6af945366e794b2df826ef7c` | tools, tool, tols, nak tools, link tools, tools kak… | lpvideo.edugamelabs.com | setiap komen |

DM: 1 teks + maks 5 variasi, link ditulis di TEKS (tanpa tombol). Balasan publik "Dah hantar link ke DM ya, cek DM" + 5 variasi, `after_dm`. Komen dari akun sendiri tidak memicu otomasi (tes pakai akun lain).

### Threads @auzan_hasfi (TIDAK ADA DM → balasan publik berisi link)
| Nama | id | Kata kunci | Link | Ulang |
|---|---|---|---|---|
| TOOLS → balas link LP Video | `6b035b4cb963006ae9c79c42` | sama seperti IG | https://lpvideo.edugamelabs.com | setiap komen |
| NAK → balas link Prompt Generator | `6b035b4ff0a0b440614b74e1` | nak, nakk, nakkk, nk | https://lptoolsid.edugamelabs.com/ms/ | sekali/orang |
`public_reply_policy: always`. Akun @auzanhasfi dan @edugamelabs.id belum tersambung ke Zernio; kalau user ingin otomasi di sana, minta user connect dulu di Zernio.

Karena itu: CTA "Komen NAK" hanya dipakai di @auzan_hasfi (IG & Threads). "Komen TOOLS" dipakai di caption IG.

---

## 10. SOP F — Balas komen lama secara manual

1. Ambil semua post: `GET /v1/inbox/comments?accountId=<zernio id>&platform=threads&limit=100` (paging `cursor`).
2. Ambil komen per post: `GET /v1/inbox/comments/{postId}?accountId=..&view=full` (termasuk replies).
3. Saring komen minat: tools / nak / nk / nak beli / nak tuan / nak cuba / macam mana nak beli / nak prompt. Lewati komen akun sendiri dan **@bidanvirdaa**. Lewati yang tidak relevan.
4. Cek apakah sudah dibalas dengan LINK. Balasan lama "cek link kat bio" dianggap belum dapat link → balas lagi dengan link.
5. Balas: `POST /v1/inbox/comments/{postId}` `{accountId, commentId, message}` + header `Idempotency-Key`, jeda 4 detik antar balasan.
   - Minat beli → "Terima kasih tuan/puan. Versi Pro (Prompt Generator + Galeri Prompt penuh) boleh terus beli kat sini: https://lptoolsid.edugamelabs.com/ms/"
   - NAK biasa → variasi balasan otomasi NAK.
   - TOOLS → variasi balasan otomasi TOOLS.
6. IG: private reply hanya 1x per komen dan maks 7 hari; cek log otomasi dulu supaya tidak dobel.

---

## 11. Aturan caption & hashtag

- Hashtag: **pakai persis yang user tulis** di perintah (contoh `#fyp #malaysia #cikgu #reel #reels`). Jangan tambah sendiri.
- Caption **berdasarkan isi video/slaid** (baca naskah), bukan generik.
- Bahasa ikut akun (bagian 2). User bisa minta "caption pakai bahasa Melayu" untuk semua.
- Threads: singkat (1–3 kalimat untuk video/carousel); thread panjang hanya untuk SOP C/D.
- IG boleh panjang + CTA Komen TOOLS. TikTok/LinkedIn/Pinterest tanpa CTA komen.
- Tanpa file TXT, langsung upload. Lapor ringkasan caption di chat.
- Emoji secukupnya untuk IG/TikTok; thread SOP C hampir tanpa emoji.

---

## 12. Zona waktu & penjadwalan

- User selalu bicara **WIB (UTC+7)**. Repliz `scheduleAt` = **UTC**. Rumus: WIB − 7 jam.
- **Selalu cek jam dulu**: `TZ=Asia/Jakarta date +%H:%M` dan `date -u`. "Jam 7.43" diucapkan malam hari = 19:43 WIB = 12:43 UTC. Jangan menebak pagi/malam.
- Kalau user bilang "12 menit lagi", hitung dari jam sekarang.
- Kalau user memundurkan jam ("jangan 7.43, 7.48, biar kamu analisa dulu"), pakai waktu tambahan untuk memeriksa isi (≤500 karakter/post, link benar, bahasa benar, game berbeda).
- Cek hasil ±2–4 menit setelah jam tayang. Thread 12 bagian butuh ±2–3 menit sampai semua balasan terbit.

---

## 13. Batasan & masalah yang sudah diketahui

- Repliz tidak bisa **hapus** post terbit di paket Premium. Untuk menarik post: minta user hapus manual di aplikasi (⋯ → Hapus). Chrome user login Threads sebagai **@auzan_hasfi**, jadi post di @auzanhasfi/@edugamelabs.id tidak bisa dihapus lewat browser.
- Video ke Threads tanpa kompres → "unexpected error". Selalu kompres (SOP A langkah 3).
- Repliz `list_schedules` mengabaikan `fromDate`; output besar → gunakan filter status atau get per id.
- Zernio `media.zernio.com/temp/...` bersifat sementara; jangan dipakai sebagai link permanen.
- Apify (riset/scraping) akun free $5/bulan, reset tanggal 22.
- Jangan tulis kunci API/secret ke file, memori, atau chat.

---

## 14. Daftar game + link preview (untuk thread SOP C)

Base: `https://preview.edugamelabs.com/kertas-tinta/games/<slug>/`

| Game | Ala | slug | Sudah dipakai di thread |
|---|---|---|---|
| Clawd vs Zombi | Plants vs Zombies (Soal Matahari) | `clawd-vs-zombi` | 23 Nov @auzanhasfi, @auzan_hasfi |
| Lari Clawd | Temple Run (gerbang 3 jalur) | `lari-clawd` | 23 Nov @edugamelabs.id |
| Mahkota Clawd | Clash Royale (Soal Eliksir) | `mahkota-clawd` | 23 Nov malam @auzanhasfi |
| Liga Stik Pro | PES / bola sepak (Soal Momen) | `liga-stik-pro` | 23 Nov malam @auzan_hasfi |
| Bola Hamster Clawd | Hamsterball (3 pintu jawapan) | `bola-hamster-clawd` | 23 Nov malam @edugamelabs.id |
| Lastik Clawd | Angry Birds (soalan sebelum lontaran) | `lastik-clawd` | 24 Nov @auzanhasfi |
| Dunia Clawd | Roblox obby 3D | `dunia-clawd` | 24 Nov @auzan_hasfi; 26 Nov ketiga akun (format "Berhenti minta AI" + 4 prompt bertahap) |
| Potong Tali Clawd | Cut the Rope (Soal Bintang) | `potong-tali-clawd` | 24 Nov @edugamelabs.id |
| Arena Clawd Pro | Mobile Legends / MOBA | `arena-clawd-pro` (juga preview.edugamelabs.com/arena-clawd/) | belum (dipakai di post rujukan lama) |
| Siaga Merdeka | Red Alert RTS | `siaga-merdeka` | belum |
| Bilik Misteri Clawd | Escape room labirin | `bilik-misteri-clawd` | belum |
| Catur Ajaib Clawd | Magic Chess auto-battler | `catur-ajaib-clawd` | belum |

Sebelum dipakai, cek link hidup: `curl -s -o /dev/null -w "%{http_code}" <url>` → 200. Setelah dipakai, perbarui kolom terakhir.

---

## 15. Kesalahan yang pernah terjadi (jangan diulang)

1. Langkah thread terlalu ringkas ("Buka Claude / Gemini / ChatGPT, salin prompt…") → user menolak. Wajib detail per AI (SOP C).
2. Salah zona waktu → jadwal 3 jam terlambat. Selalu cek `TZ=Asia/Jakarta date`.
3. Memposting tanpa persetujuan padahal user minta lihat dulu → post harus ditarik manual.
4. Copy dua akun Auzan Hasfi terlalu mirip → harus beda sudut.
5. Memakai lptoolsmy untuk BM → redirect ke versi ID.
6. Video Threads tanpa kompres → gagal.
7. Membalas komen akun keluarga (@bidanvirdaa) → jangan.

---

## 16. Isi folder lampiran

| File | Isi |
|---|---|
| `lampiran/afiq-asyraf/analisa-lengkap.md` | Analisa formula 200 postingan @muhd.afiq.asyraf |
| `lampiran/afiq-asyraf/semua-copywriting.txt` | Semua teks copywriting (polos) |
| `lampiran/afiq-asyraf/semua-copywriting.md` | Semua teks per thread |
| `lampiran/afiq-asyraf/semua-postingan.csv` | Angka like/reply/repost per postingan |
| `lampiran/panduan-thread/PANDUAN-BM.md` | Panduan tulis thread BM gaya formula viral, suara @auzan_hasfi |
| `lampiran/panduan-thread/PANDUAN-ID.md` | Panduan terjemahan BM → Indonesia |
| `lampiran/contoh-posting-terbit.md` | Semua posting yang sudah terbit via Repliz (thread, caption, prompt lampiran) sebagai contoh gaya |
| `lampiran/bank-konten/` | Data bank konten (seed JS) + cara membacanya |
| `lampiran/memori/` | Catatan memori Claude lokal yang relevan (akun, otomasi, aturan) |
