---
name: reference-studio-game-web-skill
description: Skill studio-game-web (user scope) — game web HTML/JS statik BM/ID, brief 1 halaman, tahap cepat/standard/ketat, main-uji automatik + bukti tangkapan skrin
metadata:
  type: reference
---
2026-10-09: dibina dari idea Donchitos/Claude-Code-Game-Studios (MIT) — hanya 3 idea diambil (brief satu halaman, tahap ketelitian dengan lalai "cepat", game mesti dimainkan & ditangkap skrin sebelum siap). Lokasi `~/.claude/skills/studio-game-web/`: `templat/` (kuiz dwibahasa ms/id, data.js/i18n.js/game.js, `window.__game` + `data-uji` untuk ujian, netlify.toml, README.txt, favicon), `scripts/game-baru.sh`, `scripts/main-uji.mjs` (http lokal, telefon 390×844 + desktop 1366×768, senario JSON, laporan bukti/laporan.md, gagal jika ralat konsol / 404 / skrol mendatar). puppeteer-core sudah dipasang dalam scripts/.
**How to apply:** untuk setiap permintaan game web baharu, invoke skill ini; maskot dalam templat hanyalah pemegang tempat — ganti dengan maskot projek (lihat memori projek berkaitan, cth [[project-english-kita]]).
