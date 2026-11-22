# Prompt Gambar (opsional) — ganti ilustrasi dengan foto/3D realistis

Slide sudah jadi dengan ilustrasi 3D bergaya emoji (Fluent Emoji, MIT). Kalau ingin tampilan lebih mirip referensi (foto model & render 3D), buat gambarnya dengan AI gambar (Gemini, ChatGPT, Ideogram, dll.) memakai prompt di bawah, lalu:

1. Hapus latarnya (remove.bg / Canva / Photoroom) → simpan **PNG transparan**.
2. Simpan sebagai `gambar/<id>.png` (contoh `gambar/t2-01.png`).
3. Jalankan `node render.js` → gambar baru otomatis menggantikan ilustrasi.

> Jangan memakai wajah orang sungguhan tanpa izin. Untuk foto mentor, pakai foto asli Auzan dengan resolusi tinggi (foto di zip hanya 320×320 px).

**Gaya dasar (tempel di akhir setiap prompt):** `studio product photo, isolated subject, soft studio lighting, high detail, subtle orange (#F05323) rim light, plain light background for easy cutout, 4:5`

| Slide | Prompt subjek (bahasa Inggris, hasil AI gambar lebih baik) |
|---|---|
| `t1-01` | a curious young Indonesian man in a plain white t-shirt, hand on chin, thinking, waist-up |
| `t1-02` | a friendly glossy rounded robot head with antenna |
| `t1-03` | a glossy white-and-orange toy rocket launching diagonally with soft smoke |
| `t1-05` | a hand holding a crystal ball, black-and-white photo style |
| `t1-06` | a hand holding a large magnifying glass, black-and-white hand, glossy lens |
| `t1-07` | a glossy orange padlock with a key |
| `t1-08` | a small burlap money bag with coins spilling out |
| `t2-01` | a tired Indonesian small-business owner (40s) in a shirt and apron, arms crossed, black-and-white photo style |
| `t2-02` | a glossy 3D tablet showing a rising line chart |
| `t2-03` | a smartphone with floating WhatsApp-style chat bubbles |
| `t2-04` | a retro camera next to a coffee cup and product box, flat lay angle |
| `t2-05` | a long curled paper receipt with prices |
| `t2-06` | a cardboard product box with a smartphone photographing it |
| `t2-08` | a person whose head is a burst of paper notes and sticky notes, black-and-white |
| `t2-09` | a glossy hourglass with orange sand |
| `t3-01` | a hand holding a melting alarm clock, surreal, black-and-white hand |
| `t3-02` | a frying pan with a fried egg and fresh vegetables, top view |
| `t3-03` | an Indonesian elementary student with a backpack and a book, black-and-white photo style |
| `t3-04` | Indonesian rupiah banknotes flying with small wings |
| `t3-05` | a clean white envelope with a formal letter sliding out |
| `t3-06` | two overlapping speech bubbles with different alphabets |
| `t3-08` | a stack of books with a tablet on top, black-and-white |
| `t3-09` | a relaxed young woman lying on an orange armchair, eyes closed, calm |
| `t4-01` | a laptop keyboard with a few orange keys, close-up |
| `t4-03` | a friendly Indonesian copywriter at a desk with a laptop |
| `t4-04` | an archery target with a dart in the center |
| `t4-05` | a clipboard with a menu list and price tags |
| `t4-06` | a sheet of paper with a pencil writing a neat list |
| `t4-07` | a glossy circular refresh arrow icon |
| `t4-08` | a giant metal paperclip holding photos and a PDF printout |
| `t4-09` | a desk drawer full of labelled index cards |
| `t5-01` | an open laptop floating, screen showing a colorful app |
| `t5-02` | a smartphone showing a colorful quiz game app |
| `t5-03` | a small Indonesian coffee shop storefront in miniature |
| `t5-04` | a film clapperboard with a smartphone in vertical video mode |
| `t5-05` | a stack of square social-media carousel cards fanning out |
| `t5-06` | a glowing globe with a link chain icon |
| `t5-07` | a hand holding a melting pocket watch, surreal, black-and-white hand |

Slide tanpa ilustrasi yang bisa diganti: kartu daftar (layout *list*), maskot Si Bulat (slide 10 tiap tema), dan foto mentor (`t5-08`, file `assets/mentor-cutout.png`).
