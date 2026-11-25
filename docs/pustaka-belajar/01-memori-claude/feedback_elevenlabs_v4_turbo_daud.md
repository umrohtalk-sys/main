---
name: feedback-elevenlabs-v4-turbo-daud
description: "Narasi BM: pakai ElevenLabs model eleven_v4_turbo (bukan multilingual v2/v4 biasa) + suara Daud M; selalu laporkan kredit terpakai & biaya Rupiah"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 43aa716e-142e-4f7c-b0e9-9de7306591e8
  modified: 2026-10-31T06:00:53.442Z
---

Untuk narasi video Malaysia pakai ElevenLabs `eleven_v4_turbo` (0,5 kredit/karakter) dengan suara Daud M - Deep & Confident Narrator (`VbhRlZCHaUh9hxeUyRBD`).
**Why:** user bilang Turbo lebih ekspresif dan lebih murah; menolak multilingual v2 yang "mahal" (31 Okt 2026).
**How to apply:** kunci API user disimpan per project di `.kunci/elevenlabs.key` (chmod 600, jangan ikut zip/deploy). Cek pemakaian lewat GET /v1/usage/character-stats (breakdown_type=model) dan /v1/user/subscription; laporkan kredit + perkiraan Rp di akhir. Lihat [[project-cikgu-budak-ajaib-gunung]].
