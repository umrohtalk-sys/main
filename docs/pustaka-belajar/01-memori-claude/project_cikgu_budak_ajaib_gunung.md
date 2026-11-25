---
name: project-cikgu-budak-ajaib-gunung
description: "Video BM 75s pola Zack D. Films: cikgu mimpi budak ajaib di gunung → lari → dukung → profesor → profesor bermimpi (loop). Engine stickman 3D dopamin, suara Daud ElevenLabs v4 Turbo"
metadata:
  node_type: memory
  type: project
  originSessionId: 43aa716e-142e-4f7c-b0e9-9de7306591e8
  modified: 2026-10-31T06:00:48.653Z
---

2026-10-31: folder `app matematika/video-cikgu-budak-ajaib-gunung-20261031-1242-zack-bm/`, mesin disalin dari [[project-dopamin-game-edukasi-bm]] (gaya rujukan "konten dopamin Malaysia" yang laku di IG). Set baru di set.js: kelas (0), puncak gunung x=60, bilik tidur x=-30, jalan lari sawah–sungai–hutan x=100, dewan universiti x=-60; satu matahari berbayang dipindah via R.setArea. 27 shot, overlay hanya takarir + awan mimpi + kilau rumus + tangan di peta (tanpa CTA, gaya Zack D.). Shot 'ada' = sudut 'buka'; shot 'mimpi' awan memenuhi layar → loop.
Suara: ElevenLabs langsung (bukan OpenRouter), voice Daud M - Deep & Confident Narrator `VbhRlZCHaUh9hxeUyRBD`, model eleven_v4_turbo, kunci di `.kunci/elevenlabs.key` (chmod 600) dalam folder project. Musik Mixkit "Echoes". Server render port 8874 (python http.server).
**How to apply:** naskah ubah di js/timeline.js → hapus suara/baris → `python3 _alat/tts.py` → suara.py → snap.py → mix.py → render. Master dihapus ([[feedback-hapus-master-video]]).
