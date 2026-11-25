---
name: project-cikgu-reaktans-disuruh
description: "Video 124s BM \"disuruh malah malas\" (reaktans) untuk cikgu, stickman 3D gaya Zack D. + chip/belon ala rujukan, suara Daud"
metadata:
  node_type: memory
  type: project
  originSessionId: f2e60c20-2bfb-440f-a341-378af1d92854
  modified: 2026-10-31T23:00:49.530Z
---

Folder `video-cikgu-reaktans-disuruh-20261101-0545-zack-bm` (1 Nov 2026), salinan enjin dari `video-cikgu-terakhir-budak-genius-20261101-0435-zack-bm` (three.js stickman kad + overlay kanvas).
Rujukan: ~/Downloads/igexport-De0pvJEPstc.mp4 (124.6s, ID, "kenapa disuruh malah males", maskot otak + label chip). Copywriting dibedah lalu dipindah ke dunia cikgu BM: Amir pegang penyapu → disuruh → malas; Brehm, conteng tandas 1976, Deci & Ryan, kajian melukis 1984, Guéguen & Pascual 2000; CTA "Cikgu paling malas bila disuruh apa? … tapi terpulang pada cikgu".

- "Jack the Film" yang disebut user = gaya hook Zack D. Films (folder lama juga berakhiran -zack-bm).
- User TIDAK mahu transkrip Whisper (lambat di CPU): copywriting rujukan diambil dari takarir screenshot; waktu kata suara dari ElevenLabs `/with-timestamps` (_alat/tts.py + _alat/suara.py, tanpa Whisper).
- Suara Daud voice id VbhRlZCHaUh9hxeUyRBD, eleven_v4_turbo, tempo ~1.275 supaya pas 124 s; hening dalam baris dipadatkan (MAXQ .15).
- Server pratonton: config "reaktans-film" di .claude/launch.json akar (port 8876 dipegang server python lama → jalan di 8878; render pakai env PORT).
- Render: `PORT=8878 python3 _alat/render.py render/<nama>.mp4`; still: `python3 _alat/stills.py stills/vN .7 [id…]`.

Related: [[project-video-tipografi-suara-skill]] [[reference-opus-video-repos]]
