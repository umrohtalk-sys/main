---
name: project-video-brunei-kaya
description: "Video BM 91.5s 'Kenapa Brunei sekaya ini?' (negara kaya jarang disebut; Seria 1929, LNG 1972 ke Jepun, top 10 PPP, senarai 8 percuma, Istana 1,788 bilik, petrokimia PMB), gaya campuran satelit Malaysia-underrated/Singapura + kad senarai Cikgu Cuti, Daud"
metadata:
  type: project
---

22 Nov 2026. Revisi dari [[project-video-brunei-percuma]]: user tolak perbandingan MY vs BN dan toga yang menutup muka; mahu hook "negara kaya yang jarang dibahas, kenapa sekaya ini, rakyat tak bayar apa-apa".
Versi AKHIR: folder `video-brunei-kaya-20261122-2015-satelit-mix-bm/` → ~/Downloads/video-brunei-kaya-20261122-2037-satelit-mix-bm.mp4 (22 MB). Enjin [[project-video-malaysia-underrated]] (js/_lib.js) + js/_scenes.js; film.js = cat _head+_lib+_scenes. Baharu: drawFlagBN berkibar diisi ke bentuk BRN, plate satelit `brunei` z10, kad senarai 8 baris bertanda semak (gaya Cikgu Cuti) atas foto masjid kabur, laluan kapal LNG Lumut→Tokyo, takarir EN per ayat di bawah takarir per kata. Foto Commons di aset/foto/KREDIT.txt (istana.jpg SALAH = jalan malam; pakai istana2).
Versi kartun interim (tanpa satelit): `video-brunei-kaya-20261122-2007-bm/` → Downloads ...-2014-bm.mp4; kit.js kini ada `person(..., {toga:true})` toga betul di atas kepala.
Suara Daud v4 turbo speed 1.0, 205 kata = 90.2s (272 kredit); SFX baharu set-0..7 + minyak + kapal ±79 kredit. Fakta di sumber.md.
**How to apply:** video "kenapa negara X kaya/unik" BM: salin folder satelit, ambil plate baru (ambil_satelit.py PL), tukar naskah → tts (folder kartun punya tts.py/suara.py) → _scenes.js → render.py 60fps → _alat/mix_daud.py.
Related: [[project-video-singapura-kaya]] [[project-video-cikgu-banyak-cuti]] [[feedback-elevenlabs-v4-turbo-daud]]
