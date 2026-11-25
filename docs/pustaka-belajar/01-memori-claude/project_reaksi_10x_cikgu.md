---
name: project-reaksi-10x-cikgu
description: "Remake reel \"reaction 10x\" 96s BM gaya claude-animated-shorts (kartu 2D di dunia 3D, three.js + Remotion), hook Zack D. cikgu-murid eksperimen pembaris, Daud Turbo"
metadata:
  node_type: memory
  type: project
  originSessionId: eca04d92-edd3-416b-b900-2ee53bf4c267
  modified: 2026-11-04T11:59:11.896Z
---

2026-11-04. Folder `video-reaksi-10x-cikgu-20261104-1830-animated-shorts-bm/`, rujukan reel @yastor200 (DeonnawBkxt). Enjin repo mromidev/claude-animated-shorts (ink, lensblur, grade, shade, cardshade, toon, paint disalin dari `_repo/templates/bridge`), dunia baru `sets.ts` (kelas, kantin, halaman, bilik, stadium, panggung, pantai), `story.ts` 43 syot dikunci cap waktu kata, `world.ts`, `Reaksi.tsx`.

Suara: `_alat/tts.py` (335 kredit) lalu `_alat/suara.py 1.17 1`. Mix: `_alat/mix.py`, sfx lama. Stills: `_alat/lembar.sh <nama> <frame,...>`. Render: `npx remotion render src/index.ts Reaksi render/master.mp4 --codec=h264 --crf=16 --muted --gl=angle --concurrency=3 --browser-executable=<Chrome>`, sekitar 7 menit, lalu 2-pass 2278k.

**How to apply:** untuk short gaya repo ini, salin folder ini dan ganti sets + story. Kenney GLB tidak ada di repo dan tidak diperlukan. three 0.170 lolos pemeriksaan shade.ts. Revisi tanpa ubah naskah pakai ulang `suara/`. Master sudah dihapus. Lihat [[reference-opus-video-repos]] [[feedback-elevenlabs-v4-turbo-daud]] [[reference-instagram-downloader]].
