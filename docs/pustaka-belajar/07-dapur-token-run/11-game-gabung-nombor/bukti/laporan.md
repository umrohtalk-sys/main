# Laporan main-uji — 11-game-gabung-nombor

Masa: 2026-11-21T07:21:32.478Z  ·  Senario: uji/senario.json

## asas-bm · telefon (390×844)

- ✅ `buka` index.html?seed=11 
- ✅ `tangkap` 01-menu → bukti/asas-bm-telefon-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-telefon-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=tahap-1]').disabled === true 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 500 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-telefon-03-main-awal.png
- ✅ `kekunci` ArrowLeft 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowDown 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowRight 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowUp 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.langkah >= 2 
- ✅ `nilai` window.__game.langkah = 4
- ✅ `tangkap` 04-selepas-gerak → bukti/asas-bm-telefon-04-selepas-gerak.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.langkah === 0 

## asas-bm · desktop (1366×768)

- ✅ `buka` index.html?seed=11 
- ✅ `tangkap` 01-menu → bukti/asas-bm-desktop-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-desktop-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=tahap-1]').disabled === true 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 500 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-desktop-03-main-awal.png
- ✅ `kekunci` ArrowLeft 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowDown 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowRight 
- ✅ `tunggu` 300 
- ✅ `kekunci` ArrowUp 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.langkah >= 2 
- ✅ `nilai` window.__game.langkah = 4
- ✅ `tangkap` 04-selepas-gerak → bukti/asas-bm-desktop-04-selepas-gerak.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.langkah === 0 

## tukar-id · telefon (390×844)

- ✅ `buka` index.html?seed=21 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('h1').textContent === 'Gemi Gabung Angka' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-telefon-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` document.querySelector('#soalOp').textContent.includes('Level') 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.querySelector('#soalOp').textContent.includes('Tahap') 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-telefon-02-main-id.png

## tukar-id · desktop (1366×768)

- ✅ `buka` index.html?seed=21 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('h1').textContent === 'Gemi Gabung Angka' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-desktop-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` document.querySelector('#soalOp').textContent.includes('Level') 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.querySelector('#soalOp').textContent.includes('Tahap') 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-desktop-02-main-id.png

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.