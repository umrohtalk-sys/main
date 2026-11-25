---
name: project-video-caption-hijau
description: Auto-caption glowing hijau muda + adegan penjelas untuk video selfie bidan (IMG_8804), transkrip OpenRouter scribe-v2, folder video-caption-hijau-20261027-2358-img8804
metadata:
  type: project
---
28 Okt 2026. User kirim IMG_8804.MOV (bidan pulang home care dari Situbondo, 33,5 s — user kira 39 s) + zip frame rujukan "Bảo Phạm Creator" (caption kunci ungu bercahaya + animasi penjelas). Minta versi hijau muda elegan (seperti glowing green Bidan Virda), transkrip pakai OpenRouter.
- Transkrip: POST https://openrouter.ai/api/v1/audio/transcriptions, model elevenlabs/scribe-v2, form 'timestamp_granularities[]=word', response_format=verbose_json → cap masa per kata, $0,002 untuk 33 s.
- Remotion di folder itu (PANDUAN.txt). Output ~/Downloads/video-caption-hijau-20261028-0001-img8804-33s-potret.mp4.
- Pola ini boleh diguna semula untuk video talking-head lain: ganti asli.mp4, jana kata.ts, ubah FR + SISIP.
