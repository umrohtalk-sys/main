---
name: project-video-penat-tetap-datang
description: "Video potret BM 71.44s 'Penat, tapi tetap datang' (remake reel siapngajar guru hampir menyerah), enjin video kerja emosi Remotion, Cikgu Salmah, CTA Komen VIDEO"
metadata:
  node_type: memory
  type: project
  originSessionId: b2dd082b-02e8-470b-bf63-d88a5a04d9fa
  modified: 2026-11-13T21:28:10.332Z
---

14 Nov 2026. Folder `video-penat-tetap-datang-20261114-0421-reaksi-bm/` (salinan enjin [[project-kerja-emosi-cikgu]]; node_modules = symlink ke folder kerja emosi, jangan padam folder itu). Rujukan ~/Downloads/igexport-DfOH-TiB5yh.mp4 (71.4 s, ID), transkrip Scribe di rujukan/scribe.json.
**Why:** user sebut "gaya video cikgu penat rebahan / kerja emosi" = enjin Remotion tokoh flat + rig kamera zoom ini, BUKAN enjin infografik cikgu-tertidur. Intonasi Daud stability .36 style .62 (tts.py lama) disukai.
**How to apply:** naskah.json (id/gap/say) → `python3 _alat/tts.py` (199 kredit) → `python3 _alat/suara.py 1.0 0.8 71.44` (tempo 1.0 = tanpa atempo; arg ke-3 kunci durasi) → story.ts shot → `zsh _alat/lembar.sh <nama> <frame,...>` cek → `remotion render ... --gl=angle` → `_alat/mix.py`. CTA = EndCard di Reaksi.tsx (Komen VIDEO + kotak komen menaip). Kad baru di story.ts: xMark, check, flag, trophy, star, door, seterika, motor, dash jalan, mirror; Chip ada `fs` dan `\n`; chip a=0 tampil penuh di frame 0 (cover).

Related: [[feedback-judul-cover-pembuka]] [[feedback-elevenlabs-v4-turbo-daud]]
