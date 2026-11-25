---
name: project-gemi-film-pelancaran-bm
description: Film pelancaran gemi 60s Bahasa Melayu (kenapa gemi dibina), gaya NeuralSeek, folder -20260920-1015-potret-bm
metadata:
  type: project
---

Film ke-3 keluarga gemi: `video-gemi-launch-20260920-1015-potret-bm/gemi-launch-potret-bm.html`
(60 s, potret, **Bahasa Melayu**, 128 BPM, Dm→F). Naratifnya skrip pelancaran yang
ditulis pengguna: guna AI untuk menulis → sebahagian kecil → Salin/Tampal/Siap →
bagaimana kalau MEMBINA → kita tak tahu nak mula → faham asas AI → kenalkan gemi →
dalam app → Asas AI/Prompting/Context/AI Workflow/Tips & Trik → dilancarkan →
"Learn AI. Build with AI."

Gaya rujukan berbeza daripada film sebelumnya: promo motion-graphics NeuralSeek —
latar malam biru + busur cahaya (`arcs`), adegan pastel cerah berselang (`bgMesh`),
tindanan kata pudar/terang (`ghostStack`), baris kata bergulir (`ghostRow`),
kad ciri terbang dalam grid condong, butang CTA + penunjuk tetikus (`cursor`/`ctaBtn`).

Enjin, aset `img/app` + `img/mw`, dan `_render/` disalin bulat-bulat daripada
[[project-gemi-film-preview-app]]; hanya adegan + muzik ditulis semula.

**Why:** dua film gemi terdahulu berkongsi enjin yang sama, jadi film baharu =
salin folder, ganti blok adegan + `schedule()`, kekalkan helper.

**How to apply:** untuk film gemi seterusnya, salin folder ini, tukar BEAT SHEET,
blok `/* === ADEGAN === */`, dan bahagian MUZIK. Jangan namakan pemalar `STEP`
dalam adegan — ia berlanggar dengan `STEP` grid 16th dalam blok muzik.
