---
name: project-gemi-kisah-piksel
description: Kartun piksel 60s BM "Kisah Gemi" guna enjin Python claude-vs-codex (potret 270x480 x4), folder -20260921-potret-bm
metadata:
  type: project
---

Film ke-4 keluarga gemi: `video-gemi-kisah-piksel-20260921-potret-bm/` — kartun piksel asal usul gemi
(gemi cikgu nak bina app → RALAT, keliru → ramai cikgu sama → idea "belajar ASAS dulu" → blok
ASAS AI/PROMPTING/CONTEXT/WORKFLOW/TIPS & TRIK → app gemi → semua belajar → senja "Learn AI. Build with AI.").

Enjin = fork `~/Downloads/claude-vs-codex-main` (Python+NumPy, Mode 7). Ubahan: `px.W,H = 270,480`,
`_a_helpers` tidak lagi memanggil `chars.load()` (sprite Clawd/Codex tiada). Watak di `chars_gemi.py`,
sprite dari SVG maskot app → varian kelip/lirik → `tools/pixelize_gemi.py`. Audio disintesis penuh
(`audio/make_gemi_audio.py`); sampel dram asal tiada, jadi dram diganti synth.

**Why:** sistem Python 3.9 tanpa numpy — pakej dipasang dalam `.venv` projek, bukan sistem.

**How to apply:** jalankan semua dengan `../.venv/bin/python` dari `cartoon/`. Render 1800 bingkai ≈ 45 s.
Lihat `PANDUAN.txt`. Berkait [[project-gemi-film-pelancaran-bm]], [[project-gemi-maskot-svg-hidup]].

Revisi 2026-09-22: user mahu skrin app sebagai MOCKUP HD daripada app penuh (bukan tangkapan layar dipikselkan). cartoon/hd.py = lapisan HD 1080x1920 di atas dunia piksel; skrin ditangkap via _aset/cap-hd.mjs dari gemi-app-20260920-0926-modul-app-builder (32 modul). Output terkini out/gemi-kisah-piksel-60s-20260922-mockup-hd-bm.mp4.
**How to apply:** untuk video gemi seterusnya, aset app (skrin, ikon) sentiasa HD daripada app sebenar dalam bingkai mockup; maskot boleh kekal gaya video.
