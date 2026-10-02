#!/bin/sh
# Perancah projek video tipografi.
#   new_project.sh <folder> <suara.(wav|m4a|mp3)> <words.json> [OFF=0.6] [fix.json]
set -e
SK=$(cd "$(dirname "$0")/.." && pwd)
DIR=${1:?folder projek}; VOICE=${2:?fail suara}; WORDS=${3:?words.json}; OFF=${4:-0.6}; FIX=$5
mkdir -p "$DIR/out"
cp -r "$SK/engine" "$DIR/engine"
cp "$SK/template/scenes.js" "$SK/template/STORYBOARD.md" "$DIR/"
VB=$(basename "$VOICE"); cp "$VOICE" "$DIR/$VB"; cp "$WORDS" "$DIR/words-whisper.json"
node "$SK/scripts/words.mjs" "$DIR/words-whisper.json" "$DIR/words.js" --off="$OFF" ${FIX:+--fix="$FIX"} | tee "$DIR/words-indeks.txt"
END=$(node -e "global.window={};require('fs');eval(require('fs').readFileSync('$DIR/words.js','utf8'));console.log((window.WORDS.at(-1).b+3).toFixed(1))")
sed -e "s/__DUR__/$END/" -e "s/__VOICE__/$VB/g" -e "s/__OFF__/$OFF/" "$SK/template/index.html" > "$DIR/index.html"
echo "\nProjek sedia: $DIR (DUR $END s). Seterusnya: tulis STORYBOARD.md, kemudian scenes.js."
echo "Semak: node $SK/scripts/render.mjs $DIR grid 48"
