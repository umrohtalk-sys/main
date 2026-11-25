---
name: feedback-tes-hemat-deepseek
description: Pembagian model: prompt generator → agen Haiku; pasang/upload app & perbaikan besar → Opus; perbaikan kecil → Sonnet; OpenRouter hanya bila user suruh
metadata:
  type: feedback
---

Aturan kerja dari user (20 Okt 2026), terutama untuk [[project-prompt-generator-game]]:
- **Menulis/merevisi PROMPT** (isi prompt generator) → subagent **Haiku** (Agent tool, model "haiku"), kuota Claude Code.
- **Memasang/upload app ke situs (integrasi) & perbaikan besar** → **Opus** (saya sendiri / agent model "opus").
- **Perbaikan kecil/minor** → subagent **Sonnet** (model "sonnet").
- **OpenRouter (DeepSeek dll.)** JANGAN dipakai untuk pekerjaan saya kecuali user sendiri yang bilang. Backend live situs tetap DeepSeek (fitur produk). Bila disuruh tes lewat OpenRouter: 1× DeepSeek saja.

**Why:** 19 Okt user menegur: tes 10+ kali model mahal (±$0,65), lalu "stop" saat saya menulis ulang 94 prompt lewat DeepSeek (US$2,19 dari kunci $5). 20 Okt user menetapkan pembagian Haiku/Opus/Sonnet ini.
**How to apply:** Sebelum memanggil API OpenRouter, pastikan user memintanya. Pekerjaan prompt → spawn agent Haiku; tambal kecil → agent Sonnet; integrasi/besar → kerjakan sendiri (Opus).
