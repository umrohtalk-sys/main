#!/bin/sh
# Membuat folder hasil untuk satu peserta + file zip siap kirim.
# Pakai:  sh buat-folder-peserta.sh "Nama Peserta" [praktik|builder|allin] [YYYY-MM-DD]
# Hasil:  keluaran/MENTORING CLAUDE - NAMA PESERTA/  dan  keluaran/MENTORING CLAUDE - NAMA PESERTA.zip
set -eu
DIR=$(cd "$(dirname "$0")" && pwd)
NAMA=${1:?Tulis nama peserta, mis: sh buat-folder-peserta.sh "Rina Wulandari" builder 2026-11-28}
PAKET=${2:-praktik}
TGL=${3:-$(date +%F)}
NAMA_UP=$(printf '%s' "$NAMA" | tr '[:lower:]' '[:upper:]')
TUJUAN="$DIR/keluaran/MENTORING CLAUDE - $NAMA_UP"

case "$PAKET" in
  praktik) LABEL="Paket Praktik (Rp200.000)"; KEY=PRAKTIK; HARI=7 ;;
  builder) LABEL="Paket Builder (Rp250.000)"; KEY=BUILDER; HARI=14 ;;
  allin)   LABEL="Paket All in (Rp300.000)";  KEY=ALLIN;   HARI=30 ;;
  *) echo "Paket harus: praktik | builder | allin" >&2; exit 1 ;;
esac

if [ -e "$TUJUAN" ]; then echo "Folder sudah ada: $TUJUAN" >&2; exit 1; fi
mkdir -p "$DIR/keluaran"
cp -R "$DIR/template/MENTORING CLAUDE - NAMA PESERTA" "$TUJUAN"

AKSES=$(sed -n "s/^$KEY: //p" "$DIR/AKSES-ALAT.md" | head -n 1)
[ -n "$AKSES" ] || AKSES="(isi di AKSES-ALAT.md)"
DUKUNGAN=$(date -d "$TGL +$HARI days" +%F 2>/dev/null || date -j -v+"$HARI"d -f %F "$TGL" +%F 2>/dev/null || echo "$HARI hari setelah sesi")

python3 - "$TUJUAN/00 - BACA DULU.txt" "$NAMA" "$LABEL" "$TGL" "$AKSES" "$DUKUNGAN" <<'PY'
import sys
p,nama,paket,tgl,akses,duk=sys.argv[1:]
t=open(p,encoding='utf-8').read()
akses='  '+akses.replace('\\n','\n')
for k,v in {'{{NAMA}}':nama,'{{PAKET}}':paket,'{{TANGGAL}}':tgl,'{{AKSES}}':akses,'{{DUKUNGAN}}':duk}.items():
    t=t.replace(k,v)
open(p,'w',encoding='utf-8').write(t)
PY

( cd "$DIR/keluaran" && zip -qr "MENTORING CLAUDE - $NAMA_UP.zip" "MENTORING CLAUDE - $NAMA_UP" ) && \
  echo "Selesai: $TUJUAN (+ .zip)" || echo "Selesai: $TUJUAN (zip tidak tersedia, kompres manual)"
echo "Jangan lupa isi 04 - Hasil Project Peserta (karya, prompt, sertifikat) sebelum dikirim."
