---
name: reference-instagram-downloader
description: "User cukup kirim link Instagram; download file asli saja pakai yt-dlp di ~/.local/bin (tanpa login, tanpa salinan H.264), hasil di ~/Downloads"
metadata:
  node_type: memory
  type: reference
  originSessionId: eca04d92-edd3-416b-b900-2ee53bf4c267
  modified: 2026-11-04T11:24:09.473Z
---

Alat: `~/.local/bin/yt-dlp` (binary resmi github.com/yt-dlp/yt-dlp, checksum dicek 2026-11-04). Reel publik berhasil tanpa login.
Hasil: `~/Downloads/`, nama `reel-<kode>-<waktu>.mp4`.

Perintah: `~/.local/bin/yt-dlp --no-playlist --write-info-json --merge-output-format mp4 -o "<folder>/reel-<kode>-<waktu>.%(ext)s" "<link>"`

**Why file asli saja:** 4 Nov 2026 user bilang file asli 14 MB sudah cukup; salinan H.264 72 MB tidak perlu. Jangan buat salinan kecuali diminta.
**How to apply:** kalau user kirim link Instagram, langsung download. Caption ada di info.json.
Instaloader gagal dipasang 2026-11-04 (PyPI tak terjangkau, error di Python 3.9); `brew install` juga gagal karena update Portable Ruby.
Lihat [[feedback-reveal-output-finder]] dan [[feedback-tanpa-transkrip-whisper]].
