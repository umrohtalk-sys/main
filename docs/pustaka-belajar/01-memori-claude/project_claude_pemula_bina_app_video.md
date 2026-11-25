---
name: project-claude-pemula-bina-app-video
description: Video preview 45s BM app Panduan Claude AI untuk Pemula — 6 langkah bina app sampai siar, gaya studio gelap, tanpa maskot
metadata:
  type: project
---

Pada 24 September 2026 dibuat video preview 45 s potret BM daripada app di `~/Downloads/deploy-6a9bdc05c7e4b26a8ffadc9d` (versi BM app AI Masterclass, [[project-aimasterclass-edugamelabs]]).

- Folder: `app matematika/video-claude-pemula-bina-app-20260924-2028-potret-bm`, disalin daripada [[project-claude-pemula-preview-video]] (kit, fx, serve/cap skrip).
- Fokus permintaan user: asas bina app step-by-step sampai deploy, bahasa sangat mudah untuk pemula, tunjuk app interaktif, penjelasan terperinci. Musik sama.
- Alur: hook terminal "BOLEH." → intro app (11 modul/173 pelajaran/74 kuiz) → DROP "6 langkah" → Faham, Rancang, Prompt, Bina, Uji, Siar (stepper kekal di atas) → interaktif (kuiz/XP/lencana/sijil) → penutup.
- Kandungan diambil daripada pelajaran sebenar: Modul 11 Fundamental Vibe Coding (workflow 9 langkah, one feature at a time, 7 komponen), Modul 05 (master prompt, checklist test), Modul 07 "SIAR ke app.netlify.com/drop", Modul 09 PWA.
- Output: `~/Downloads/claude-pemula-bina-app-preview-<ts>-video-45s-bm.mp4`. Belum di-post.

**Why:** user mahu setiap preview berikutnya "gaya berbeza"; dah guna: kertas krayon (Englisha), editorial grid (Malaysia), studio gelap (ini).
**How to apply:** untuk preview seterusnya pilih gaya keempat yang lain, guna semula `_aset/cap.mjs` + `serve.mjs` (tukar ROOT).

## Revisi cerah (24 Sep 2026, folder -20260924-2040-potret-bm-cerah)
User tak suka banyak motion penjelasan: mahu warna CERAH, mockup HP jelas, fokus pengalaman app, hook terus tunjuk app, harga **RM15** (bukan percuma). Dibina semula: satu HP 700px kekal di tengah + aliran skrin sebenar (FLOW/TAPS dalam `src/scenes/Cerah.tsx`), latar pastel, kapsyen 1 baris, kad harga RM15. "Percuma" di skrin pembuka ditukar RM15 hanya dalam tangkapan. Output `~/Downloads/claude-pemula-bina-app-preview-<ts>-video-45s-bm-cerah-rm15.mp4`.
**How to apply:** untuk preview app seterusnya, gaya "HP besar + pengalaman app" ini yang disukai — minimakan grafik penjelasan.

## Revisi "hidup" 2 format (24 Sep 2026, folder -20260924-2049-bm-hidup-2format)
Versi cerah dirasa terlalu kaku ("jangan cuma preview app"). Ditambah maskot Si Bulat dari app (SVG dijana dari js/mascot.js, 5 watak × 6 mimik) yang lompat kenyal ikut ketukan, belon penerangan BM, kanta pembesar, HP berayun. Output DUA: potret 1080x1920 + kotak 1080x1080 (satu kod, `LAY` per format). Fail: `~/Downloads/claude-pemula-bina-app-preview-<ts>-hidup-45s-bm-{potret,kotak}.mp4`.
**How to apply:** gaya disukai = HP + app sebenar + maskot hidup + belon ringkas; user suka dapat potret & kotak sekali gus.

**Revisi 2026-09-25 gaya gemi:** folder video-claude-pemula-bina-app-20260925-0401-gaya-gemi-potret-bm, src/scenes/GayaGemi.tsx — meniru struktur video gemi app preview (latar kabur, tajuk dua baris ditaip, HP putih + titik ketuk hitam, kolaj gelap, kad Dapatkan, logo akhir) dengan warna Claude (#D97757) + maskot Si Bulat berkelip/melompat + bunyi ketuk (public/sfx). Fon Plus Jakarta Sans. Output ~/Downloads/claude-pemula-bina-app-preview-20260925-0410-gaya-gemi-45s-bm-potret.mp4.
