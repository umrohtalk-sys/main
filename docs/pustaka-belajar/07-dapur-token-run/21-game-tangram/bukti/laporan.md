# Laporan main-uji — 21-game-tangram

Masa: 2026-11-21T14:06:08.527Z  ·  Senario: uji/senario.json

## asas-bm · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `tangkap` 01-menu → bukti/asas-bm-telefon-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-telefon-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=sil-1]').disabled === !window.__game.progres.b.ketupat 
- ✅ `klik` [data-uji=sil-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-telefon-03-main-awal.png
- ✅ `klik` [data-uji=petunjuk] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.petunjuk === 1 
- ✅ `tangkap` 04-petunjuk → bukti/asas-bm-telefon-04-petunjuk.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.petunjuk === 0 && window.__game.terkunci === window.__game.awal 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.keadaan === 'reveal' || window.__game.keadaan === 'hasil' 
- ✅ `tunggu` 4200 
- ✅ `jangka` window.__game.keadaan === 'hasil' 
- ✅ `tangkap` 05-hasil → bukti/asas-bm-telefon-05-hasil.png

## asas-bm · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `tangkap` 01-menu → bukti/asas-bm-desktop-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-desktop-02-peta.png
- ✅ `jangka` document.querySelector('[data-uji=sil-1]').disabled === !window.__game.progres.b.ketupat 
- ✅ `klik` [data-uji=sil-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-desktop-03-main-awal.png
- ✅ `klik` [data-uji=petunjuk] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.petunjuk === 1 
- ✅ `tangkap` 04-petunjuk → bukti/asas-bm-desktop-04-petunjuk.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.petunjuk === 0 && window.__game.terkunci === window.__game.awal 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 400 
- ✅ `jangka` window.__game.keadaan === 'reveal' || window.__game.keadaan === 'hasil' 
- ✅ `tunggu` 4200 
- ✅ `jangka` window.__game.keadaan === 'hasil' 
- ✅ `tangkap` 05-hasil → bukti/asas-bm-desktop-05-hasil.png

## tukar-id · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('#btnMula').textContent.includes('Main') 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-telefon-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=sil-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` document.querySelector('[data-uji=putar]').textContent.includes('Putar') 
- ✅ `jangka` document.querySelector('#alat [data-uji=petunjuk]').textContent === 'Petunjuk' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-telefon-02-main-id.png

## tukar-id · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `jangka` document.querySelector('#btnMula').textContent.includes('Main') 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-desktop-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=sil-0] 
- ✅ `tunggu` 400 
- ✅ `jangka` document.querySelector('[data-uji=putar]').textContent.includes('Putar') 
- ✅ `jangka` document.querySelector('#alat [data-uji=petunjuk]').textContent === 'Petunjuk' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-desktop-02-main-id.png

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.