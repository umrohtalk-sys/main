---
name: reference-repliz-mcp
description: Repliz (repliz.com) MCP tersambung ke Claude Code scope user lewat header Basic; akun Threads @auzan_hasfi (17 Nov 2026)
metadata:
  node_type: memory
  type: reference
  originSessionId: 50af31a6-7dc1-490f-a7fe-e46939fba4f0
  modified: 2026-11-17T14:20:52.545Z
---

17 Nov 2026: server MCP `repliz` (https://mcp.repliz.com/mcp, HTTP) ditambah ke ~/.claude.json scope user dengan header `Authorization: Basic base64(accessKey:secretKey)` — kunci dari Repliz Settings → Public API (jangan tulis kunci di memori). Status ✔ Connected. Tool bernama `mcp__repliz__repliz_*`.

Akun tersambung di Repliz: Threads @auzan_hasfi (account id 6afae687fc43f81b7897afd4). User masih free trial; docs Repliz: MCP butuh Standard+, scheduler/posting butuh Premium/Gold. Threads: hanya balas & sembunyikan komen, tanpa DM.

REST cadangan: `curl -u key:secret https://api.repliz.com/public/account` (bukan /accounts). Kalau Secret Key di-refresh: `claude mcp remove repliz -s user` lalu add ulang dengan header baru.

Beda dengan Zernio (IG automation): [[project-zernio-ig-automation]].

17 Nov 2026 (TERKINI): akun kedua Threads @auzanhasfi (tanpa garis bawah, id 6afc6588fc43f81b789dbef5) juga tersambung. Posting thread berantai lewat REST `POST /public/schedule` (type text, replies[] dengan delay 0, scheduleAt sekarang) BERHASIL walau docs bilang Premium+; `GET /public/content` ditolak 402. Thread BM Prompt Generator diunggah ke dua akun dengan copywriting berbeza (@auzan_hasfi topik "AI Threads", @auzanhasfi topik "Cikgu", versi soalan) — fail TXT di ~/Downloads/thread-bm-sharing-app-20261117-*. User mahu pratonton TXT dulu sebelum unggah, dan copy beza tiap akun supaya tak nampak duplikat.
- Akun ketiga Threads @edugamelabs.id (id 6afc6737fc43f81b789dc479) — copy bahasa Indonesia, link demoprompt.edugamelabs.com/id + lptoolsid.edugamelabs.com/id, topik "Guru". Thread ID diunggah 17 Nov 21:40.

18 Nov 2026: akaun baru di Repliz — IG @auzan_hasfi (6afd7815fc43f81b78a1b73d), TikTok @eduapp.id0 (6afd78e1fc43f81b78a1bff5), LinkedIn Auzan Hasfi (6afd792efc43f81b78a1c13b), Pinterest whitespace92 (6afd7948fc43f81b78a1c4e5, board "Panduan belajar" 610026780716203515), Threads @bidanvirdaa. Repliz Storage TIADA kuota (init_file 402) → hos video lewat Zernio `media_get_media_presigned_url` (PUT ke uploadUrl, guna publicUrl media.zernio.com). Video damai murid bergaduh berjaya ke IG, TikTok, LinkedIn, Pinterest; Threads video GAGAL "unexpected error" walau sudah encode ulang (yuv420p, AAC 128k, faststart) — user suruh batal, jadual Threads dipadam. Caption ~/Downloads/caption-video-damai-murid-bergaduh-20261118-1715-6-medsos-bm.txt. MCP repliz kini aktif di sesi baharu (tool mcp__repliz__*).
- 19 Nov 2026: video Claude tak pandai animasi → IG, TikTok, LinkedIn, Pinterest (board "ai", link lpvideo) semua success via Repliz. User mahu POSTING lewat Repliz, bukan Zernio; Zernio hanya untuk titip file (presigned URL) selagi storage Repliz 0. Caption ~/Downloads/caption-video-claude-tak-pandai-animasi-20261119-1833-4-medsos-bm.txt.
- 21 Nov 2026: video Threads BERJAYA bila dikompres dulu (720x1280, yuv420p, crf 27, maxrate 2500k, AAC 128k, faststart → ~7 MB untuk 90 s). Video "kalau cikgu aplikasi" ke IG, Threads @auzan_hasfi + @auzanhasfi (copy beza), LinkedIn, Pinterest (Panduan belajar, link lpvideo), TikTok — semua success. Kompres hanya untuk Threads; platform lain fail asli.
- 21 Nov 2026: akaun TikTok baharu @diarymalaysia (6b00e2d7fc43f81b78b010e8) di Repliz. Video RM1 juta semua rakyat → TikTok diarymalaysia, IG, 2 Threads (kompres 720p) — semua success. Caption Threads user mahu SINGKAT (1–2 ayat).
- 22 Nov 2026: KARUSEL berjaya — type "album" dengan 10 JPG (walau docs kata 2–5) ke IG, TikTok eduapp.id0 (perlu title), Threads @auzan_hasfi + @auzanhasfi. JPG dihos lewat Zernio presigned (image/jpeg). TikTok foto: status Repliz lama "process" walau TikTok sudah PUBLISH_COMPLETE.
- 23 Nov 2026: repliz_delete_content & get_threads_content_by_url → 402 (perlu Gold). Chrome user log masuk Threads sebagai @auzan_hasfi (centang biru), BUKAN @auzanhasfi/@edugamelabs.id → post di dua akun itu mesti dipadam user sendiri. Jadual Repliz pakai UTC: WIB = UTC+7, semak `TZ=Asia/Jakarta date` sebelum set scheduleAt.
- Feedback 23 Nov: thread "step by step" mesti detail per AI (Claude Artifact / Gemini Canvas / ChatGPT Canvas: buka, tampal, preview, publish/share), dan tunjuk draf dalam Claude artifact untuk DILULUSKAN dulu sebelum posting. Draf: https://claude.ai/artifact/1VLFW6XGbxY2FKS9E9juUP
- 23 Nov 04:40 WIB: 3 thread step-by-step terbit (tiada pending/error): @auzanhasfi BM PvZ ikut draf, @edugamelabs.id ID Temple Run ikut draf, @auzan_hasfi (centang biru) BM PvZ sudut lain ("jangan suruh AI buatkan game je", STEP ringkas 3 AI dalam satu post, tips Gemini vs Claude, Mod 2 Pemain projektor, tutup "Komen NAK" kerana automation NAK Zernio ada di akaun ini). User mahu copy @auzan_hasfi SENTIASA berbeza sedikit dari @auzanhasfi.
- 24 Nov 2026: video "gelaran seumur hidup" ke IG, LinkedIn, Pinterest, TikTok eduapp.id0 + 2 Threads — semua success. Threads video GAGAL "unexpected error" bila medan `topic` diisi; tanpa `topic` (kompres 720p sama) terus success. JANGAN isi topic untuk Threads video. Semak status lewat REST `GET /public/schedule/<id>` (list_schedules terlalu besar).
