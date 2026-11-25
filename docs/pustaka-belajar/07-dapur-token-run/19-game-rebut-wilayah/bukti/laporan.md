# Laporan main-uji — 19-game-rebut-wilayah

Masa: 2026-11-21T08:12:36.113Z  ·  Senario: uji/senario.json

## asas-bm · telefon (390×844)

- ✅ `buka` index.html?uji=1&seed=3 
- ✅ `tangkap` 01-menu → bukti/asas-bm-telefon-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-telefon-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=tahap-1]').disabled === true 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-telefon-03-main-awal.png
- ✅ `kekunci` ArrowUp 
- ✅ `nilai` window.__game.langkah(5), window.__game.snap().trail.length = 3
- ✅ `kekunci` ArrowRight 
- ✅ `nilai` window.__game.langkah(4), window.__game.snap().trail.length = 7
- ✅ `jangka` window.__game.snap().trail.length >= 4 
- ✅ `tangkap` 04-melukis-ekor → bukti/asas-bm-telefon-04-melukis-ekor.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `jangka` window.__game.peratus === 4 && window.__game.snap().trail.length === 0 

## asas-bm · desktop (1366×768)

- ✅ `buka` index.html?uji=1&seed=3 
- ✅ `tangkap` 01-menu → bukti/asas-bm-desktop-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-desktop-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=tahap-1]').disabled === true 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-desktop-03-main-awal.png
- ✅ `kekunci` ArrowUp 
- ✅ `nilai` window.__game.langkah(5), window.__game.snap().trail.length = 3
- ✅ `kekunci` ArrowRight 
- ✅ `nilai` window.__game.langkah(4), window.__game.snap().trail.length = 7
- ✅ `jangka` window.__game.snap().trail.length >= 4 
- ✅ `tangkap` 04-melukis-ekor → bukti/asas-bm-desktop-04-melukis-ekor.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `jangka` window.__game.peratus === 4 && window.__game.snap().trail.length === 0 

## tukar-id · telefon (390×844)

- ✅ `buka` index.html?uji=1&seed=3 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('h1').textContent === 'Bulat Rebut Wilayah' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-telefon-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 300 
- ✅ `jangka` document.getElementById('sasLabel').textContent === 'Rebut' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.getElementById('sasLabel').textContent === 'Tawan' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-telefon-02-main-id.png

## tukar-id · desktop (1366×768)

- ✅ `buka` index.html?uji=1&seed=3 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('h1').textContent === 'Bulat Rebut Wilayah' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-desktop-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 300 
- ✅ `jangka` document.getElementById('sasLabel').textContent === 'Rebut' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.getElementById('sasLabel').textContent === 'Tawan' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-desktop-02-main-id.png

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.