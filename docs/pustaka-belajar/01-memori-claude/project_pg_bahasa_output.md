---
name: project-pg-bahasa-output
description: "Prompt Generator Pro punya pilihan bahasa output 5 bahasa (ID, MS, EN, Chinese, Hindi); LIVE 9 Nov 2026 commit a42ab16"
metadata:
  node_type: memory
  type: project
  originSessionId: 365c7f89-229c-456e-80c3-3ee7edd52cad
  modified: 2026-11-09T13:32:13.793Z
---

9 Nov 2026, LIVE di generator.edugamelabs.com, commit a42ab16, folder `~/Downloads/prompt-generator-20261109-2029-bahasa-output-5` (branch main sudah termasuk bagian /prompt-video). Lihat [[project-prompt-generator-game]].

- `OUT_LANGS`, `OUT_INFO`, `blokOutput()` di js/i18n.js. Dipakai di laci (js/app.js), mode dipandu (js/dipandu.js), Prompt Custom (js/ai.js, ditempel ke `keinginan`, backend tidak diubah). Bahasa tampilan situs dan bahasa prompt tetap 3 (`LANGS`).
- Prompt tetap ditulis dalam ID/MS/EN; blok "BAHASA OUTPUT" ditambahkan di akhir bila beda dari bahasa prompt. Prompt lama tanpa pilihan output tidak berubah. Landing Page ikut 5 pilihan karena memakai `bhsChips` yang sama; Prompt Video tidak.
- "India" diartikan Hindi; Tamil belum ditanyakan jawabannya. Hasil game berbahasa Chinese/Hindi belum dites ke AI sungguhan.

**How to apply:** tambah bahasa = entri di BHS, OUT_LANGS, OUT_INFO.
