---
name: project-panduan-google-ai-cikgu-pemula
description: App dwibahasa BM/ID "Panduan Google AI untuk Cikgu Pemula" — kandungan dijana dari fail materi TXT, bukan disunting tangan
metadata:
  type: project
---

Folder `panduan-google-ai-cikgu-pemula-20260911-1036/`, dibina 2026-09-11.
Pengganti versi [[project-panduan-google-ai-cikgu]] dengan materi sebenar pengguna:
`materi-gemini-20260911/materi-gemini-ekosistem-google-id-ms-20260911.txt`
(11 modul, 169 pelajaran, 75 soalan, 28 bahagian panduan; format [MODUL]/[P]/[LIST]...).

**Paip kandungan:** `materi-gemini-20260911/_build/jana-data-app.py <txt> <folder-app>`
menjana `js/data-materi.js`. Jangan sunting data-materi.js dengan tangan. Skrip itu
juga: mengagih ikon per poin (tiada ulangan dalam satu pelajaran, ikut kata kunci),
menukar RUN HURUF BESAR jadi **tebal**, dan menulis semula appguide.01/.02/.07
kerana materi asal menyebut log masuk sedangkan app tanpa akaun.
`_build/lint.py` dalam folder yang sama ialah pemeriksa materi milik pengguna.

**Keputusan reka bentuk:** pengguna minta "satu warna, elegan" — hanya biru #1A73E8
dalam empat ton; ikon Google-edu diwarnakan semula (4 warna -> 4 ton biru), maskot
dilukis biru, pipi merona dimatikan. Suis bahasa BM/ID diminta pengguna.

**Perangkap:** service worker cache semua fail — naikkan VERSI dalam sw.js selepas
sebarang perubahan, dan semasa menguji kosongkan SW/cache dahulu.

Berkait: [[feedback-netlify-ready-output]], [[feedback-versioned-filenames]]
