---
name: project-aimc-section-lembar-kerja
description: "Section Lembar Kerja & Peta Minda di AIMC BM+ID dan pembersihan BM di app ID — live 27 Sep 2026, build di _build-worksheet-peta-minda"
metadata:
  type: project
---

27 September 2026: kedua site AI Masterclass ([[project-aimasterclass-edugamelabs]]) dapat section `sec:'lk'` (5 modul/15 langkah/20 kuis + koleksi Mula, Kotak alat 20 prompt, Lampiran) dari TXT 05 + 05b (BM). Versi ID = terjemahan saya (05-...-ID.txt, 05b-...-ID.txt): i-THINK→Thinking Maps, DSKP→CP/ATP, PDPA→UU PDP.
- LIVE: BM `app-pemula-nocode-ms-20260927-1913-section-lembaran-kerja`, ID `app-pemula-nocode-id-20260927-1913-bahasa-id-lembar-kerja`. Clerk dicek jalan.
- Build `_build-worksheet-peta-minda/`: `jana-lk.py <ms|id> <app>` (meminjam jana-ag), `kuis_lk.py`, `pasang-lk.py <ms|id> <app>` (tidak idempoten).
- App ID juga dibersihkan dari sisa BM: `terapkan-id.py <app>` + `id-fix/` (fix_*.py = edit per ref seperti M2L0b7.text / C:kritis.3b1.text; pairs_*.py = frasa P atau sel utuh X). Modul inti 03,04,05,07,08 dulunya terjemahan kata-per-kata dari BM. Audit: `dump.js`, `audit-bm2.py`, `tier2.py`.
- Section Malaysia sengaja tetap memuat contoh BM (kamus, copywriting, istilah PBD/DSKP); hanya penjelasan ID yang dibetulkan.

**Why:** user minta app ID murni Bahasa Indonesia dan tidak mau versi BM dicek mendalam.
**How to apply:** section berikutnya: basis folder -1913 masing-masing; kalau data-modules ID dijana ulang, jalankan lagi terapkan-id.py. Clerk jangan disentuh.
