# Gaya: tipografi kinetik "gemi"

## Prinsip
- **Huruf ialah wira.** Tiada imej latar, tiada tekstur, tiada gradien. Satu kertas hangat.
- **Satu idea, satu babak.** Satu kata SLAM per babak paling banyak.
- **Warna = makna.** Oren untuk kata kunci/aksi, mango untuk "jawapan"/positif, hijau untuk "betul/siap", ungu & biru untuk kategori. Tinta untuk teks biasa, kelabu untuk ekor ayat yang kurang penting.

## Palet (`K`)
| Token | Hex | Guna |
|---|---|---|
| paper | `#F7F2E8` | satu-satunya latar |
| ink / ink3 | `#191512` / `#4A423A` | teks utama / garis luar |
| grey / mid | `#9A9184` / `#6B635A` | baris kedua, label, sari kata akan datang |
| rule | `#DDD3C1` | garis grid, pemisah |
| or | `#F05323` | warna isyarat utama |
| mango | `#F8A81B` | slam positif (TAHU, educator) |
| green | `#12946A` | siap / semak |
| purple / pink / blue | `#8B7BE8` / `#F7A8C4` / `#2F5BFF` | kategori, swatch |

## Hierarki tipografi
| Peranan | Fon | Saiz | Nota |
|---|---|---|---|
| SLAM (satu kata) | Archivo 900 | 220–420 (guna `fit`) | ruang huruf −2.5 %; gema garis luar pilihan |
| Ayat utama | Archivo 800–900 | 56–110 | rata kiri, ragged right, x = 140 |
| Baris kedua | Archivo 800 kelabu | sama | "yang sering orang…" |
| Suara / petikan | Instrument Serif *italic* 400 | 64–220 | "terlepas pandang…", “Ha…”, kutipan pengguna |
| Teknikal | Space Mono 700 | 14–44 | label HUD, chip jargon, prompt, ARAH 01 |

Huruf besar penuh hanya untuk SLAM. Tanda baca kekal (koma, titik, elipsis) — ia sebahagian suara.

## Susun atur 1920×1080
- Grid 12 kolum, margin kiri **140**, tepi kanan **1780**. Garis dasar tajuk pertama y ≈ 230–260, langkah baris ≈ 1.1 × saiz.
- **Hamparan kiri/kanan**: ayat di kiri (x 140–1000), artifak di kanan (telefon x 1250–1720, kad, dinding).
- HUD: label babak (64, 58), kod masa (1856, 58), bar kemajuan y 1000, sari kata y 1040. Kandungan ≤ y 960.

## Gerak
- Masuk: `rise` (klip, expo-out 0.55 s), `slam` (stagger 35–45 ms/huruf), `pop` (back 2.4) untuk emosi.
- Keluar: naik keluar klip (eIO 0.38 s) atau `knife`. Tiada fade kecuali tirai/overlay UI.
- Snap = `eIO`; benda hidup (Si Bulat, kursor) = arka & overshoot.
- Kursor: bergerak dengan `eIO` antara titik, berhenti 0.1 s sebelum klik, klik = mengecil 18 % + riak.

## Peralihan (pilih ikut cerita, jangan ulang yang sama berturut-turut)
| Jenis | Bila |
|---|---|
| `wipe` | perubahan topik biasa |
| `slats` | senarai / langkah baharu |
| `iris` | fokus ke satu benda (kad, telefon) |
| `rise` | naik ke kesimpulan |
| `push` | babak seterusnya menyambung ruang (hanya jika ia sudah berisi) |
| `cut` | kesinambungan bentuk (dinding → kad dibesarkan) |

## Audio
Suara sahaja. Tiada muzik, tiada whoosh. Jika pengguna kemudian mahu muzik: duck ≥ 10 dB di bawah suara, −14 LUFS keseluruhan.
