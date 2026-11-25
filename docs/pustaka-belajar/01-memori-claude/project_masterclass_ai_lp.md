---
name: project-masterclass-ai-lp
description: lpindo & lpmalay di-rebrand jadi "Masterclass AI untuk Edukator/Pendidik & Pemula" (semua AI, tanpa branding Claude) — LIVE 9 Okt 2026
metadata:
  type: project
---
2026-10-09: user minta kedua LP tidak lagi fokus Claude. Brand kini **Masterclass AI untuk Edukator & Pemula** (ID) / **Masterclass AI untuk Pendidik & Pemula** (BM); tutor untuk semua AI: Gemini, Gemini Canvas, Google Antigravity, ChatGPT, Claude. "Claude" hanya boleh muncul di daftar AI itu + baris merek dagang. Gaya tidak diubah.

Folder: `masterclass-ai-lp-id-20261009-1533-semua-ai` (+`-netlify`) → lpindo (deploy 6ac8a8273bd51f45e5992d6e); `masterclass-ai-lp-ms-20261009-1533-semua-ai` (+`-netlify`) → lpmalay (deploy 6ac8a8396b3b62b236144ffb). Disalin dari [[project-claude-pemula-launch-id]] (-1100, yang sebenarnya live) dan [[project-claude-pemula-launch-ms]].

Jana: `node _sumber/gen.mjs`. Judul/sub modul dari app yang memuat Claude (03 Panduan Claude Umum, 04 Ekosistem Claude, modul video Claude Opus) ditimpa HANYA di LP lewat `GANTI_MODUL` di gen.mjs; prefiks "Bonus:" dibuang. Cover og = tangkapan hero 1200×630 (puppeteer-core dari video-gemi-launch-.../_render). Preview launch.json `masterclass-ai-lp-id` 8861 / `-ms` 8862.

**Why:** pasar lebih luas, tidak terikat satu AI.
**How to apply:** screenshot app (assets/skrin) masih menampilkan teks Claude dari app asli — kalau user minta bersih total, app-nya perlu di-rebrand dulu lalu tangkap ulang.
