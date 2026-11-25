# Laporan main-uji — 12-game-kedai-pantas

Masa: 2026-11-21T07:25:26.168Z  ·  Senario: uji/senario.json

## menu-bm · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `tangkap` 01-menu → bukti/menu-bm-telefon-01-menu.png

## menu-bm · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `tangkap` 01-menu → bukti/menu-bm-desktop-01-menu.png

## kalah-id · telefon (390×844)

- ✅ `buka` index.html?benih=11 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `klik` [data-uji=tahap-3] 
- ✅ `tunggu` 1400 
- ✅ `tangkap` 01-main-id → bukti/kalah-id-telefon-01-main-id.png
- ✅ `jawabSemua` salah 
- ✅ `tunggu` 700 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 0 
- ✅ `tangkap` 02-hasil-kalah → bukti/kalah-id-telefon-02-hasil-kalah.png

## kalah-id · desktop (1366×768)

- ✅ `buka` index.html?benih=11 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `klik` [data-uji=tahap-3] 
- ✅ `tunggu` 1400 
- ✅ `tangkap` 01-main-id → bukti/kalah-id-desktop-01-main-id.png
- ✅ `jawabSemua` salah 
- ✅ `tunggu` 700 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 0 
- ✅ `tangkap` 02-hasil-kalah → bukti/kalah-id-desktop-02-hasil-kalah.png

## menang-api · telefon (390×844)

- ✅ `buka` index.html?benih=5 
- ✅ `klik` [data-uji=bm] 
- ✅ `klik` [data-uji=tahap-1] 
- ✅ `tunggu` 1000 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 700 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 3 
- ✅ `nilai` window.__game.skor = 1894
- ✅ `tangkap` 01-hasil → bukti/menang-api-telefon-01-hasil.png

## menang-api · desktop (1366×768)

- ✅ `buka` index.html?benih=5 
- ✅ `klik` [data-uji=bm] 
- ✅ `klik` [data-uji=tahap-1] 
- ✅ `tunggu` 1000 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 700 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 3 
- ✅ `nilai` window.__game.skor = 1894
- ✅ `tangkap` 01-hasil → bukti/menang-api-desktop-01-hasil.png

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.