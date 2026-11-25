---
name: project-cikgu-pemula-uikit-redesign
description: "Redesign Cikgu Pemula ikut zip \"Panduan Google AI UI Kit\" — maskot PNG 3D, satu pose unik per penjelasan"
metadata: 
  node_type: memory
  type: project
  originSessionId: 419c43ab-fb86-485a-94a5-7b1476538eb6
  modified: 2026-09-11T13:48:36.822Z
---

Dibina 2026-09-11 dalam `panduan-google-ai-cikgu-pemula-20260911-1725-redesign-uikit/` (salinan
[[project-panduan-google-ai-cikgu-pemula]], data-materi.js tak diubah). Sumber reka bentuk:
`~/Downloads/Panduan Google AI UI Kit.zip` (20 skrin .dc.html + assets m1/m2 maskot, e* elemen).

**Why:** pengguna mahu UI "100% mirip" kit, maskot interaktif berbeza di setiap penjelasan, cover
yang tajuk "Panduan Google AI"-nya tak tertutup hiasan, dan saiz font Kecil/Sedang/Besar.
**How to apply:** js/mascot.js (SVG lama) sudah dibuang; maskot kini `img/maskot/*.png` lewat
`MK`/`POSE_JELAS` di js/ui.js (37 pose, langkah 7 => tiada ulangan dalam satu pelajaran). Label baru
di js/i18n2.js. Ikon = Material Symbols Rounded. Hiasan (img/el) jangan diletak atas teks.
Service worker cache-first — semasa uji di localhost, versi lama boleh muncul; naikkan VERSI sw.js.
