---
name: project-bidan-virda-landing
description: Landing page Bidan Virda (pijat bayi & mom care Jember) — booking form jadi kartu JPEG + WA, belum deploy
metadata:
  type: project
---

Dibuat 2026-09-23: `bidan-virda-landing-20260923-0507-booking-kartu/` (di app matematika). Artifact https://claude.ai/artifact/RY5grNhYtiXmvKkg1bazua (dari `_sumber/artifact.html`, dijana `python3 _sumber/jana-artifact.py`). Preview launch.json "bidan-virda-lp" port 8830. Belum deploy Netlify.

Fakta asli dari flyer user: Virda Raudhatul, A.Md.Keb, Jember, WA 0851-2992-8634 (wa.me/6285129928634), TikTok @bidanvirda, reservasi H-1, harga Promo September 2026 (pijat bayi 50k/toddler 55k/kid 60k; tindik 25k, kuku 15k, gigi&lidah 15k, cukur 30k; oksitosin 75k, laktasi 50k, single 100k, series 270k; Mommy Care 3 hari 275k (350k), 7 hari 600k (850k)). Semua di `js/data.js`. Bahasa Indonesia (bukan BM).

Aset: maskot bayi dari sprite `~/Downloads/bidan-virda-video/{stickers,mascot}.png` (film 60s sebelumnya) dipotong jadi 20 PNG telus (`_sumber/potong-maskot.py`, floodfill PIL). Video lama pakai nomor/harga palsu — jangan disalin.

**Why:** user mahu LP detail jasa + cara booking + form yang hasilkan kartu JPEG + kontak WA, gaya ikut [[project-gemi-landing-app]] tapi warna/maskot ikut flyer hijau-krem.
**How to apply:** jangan tambah testimoni/rating palsu; jam Pagi/Siang/Sore hanya preferensi (belum dikonfirmasi pemilik). Download JPEG tidak jalan di Artifact (sandbox) — modal menampilkan gambar untuk disimpan manual; di Netlify jalan.
