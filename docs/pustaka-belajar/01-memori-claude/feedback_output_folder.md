---
name: feedback-output-folder
description: Game/app web harus berbentuk folder dengan file terpisah (css/, js/ per bagian), bukan satu index.html panjang
metadata:
  type: feedback
---

User (24 Okt 2026, Arena Clawd Pro): "outputnya folder, jangan satu index HTML, susah bacanya". Buat index.html + css/ + js/ dipecah per bagian, plus BACA-SAYA.md berisi daftar file.

**Why:** satu file 180 KB sulit dibaca dan diedit user.
**How to apply:** untuk game/app web baru atau revisi besar, tetap statis tanpa build (lihat [[feedback-netlify-ready-output]]), tapi pecah ke file terpisah; skrip biasa berurutan atau modul, asal jalan dari server lokal.
