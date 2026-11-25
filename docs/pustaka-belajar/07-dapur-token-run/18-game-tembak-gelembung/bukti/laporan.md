# Laporan main-uji — 18-game-tembak-gelembung

Masa: 2026-11-21T07:34:28.071Z  ·  Senario: uji/senario.json

## asas-bm · telefon (390×844)

- ✅ `buka` index.html?seed=11 
- ✅ `tangkap` 01-menu → bukti/asas-bm-telefon-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-telefon-02-peta.png
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 500 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-telefon-03-main-awal.png
- ✅ `nilai` window.__game.soalan = {"teks":"3 + 3","jawapan":6}
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 800 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.menang === true 
- ✅ `tangkap` 04-menang → bukti/asas-bm-telefon-04-menang.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' && window.__game.skor === 0 

## asas-bm · desktop (1366×768)

- ✅ `buka` index.html?seed=11 
- ✅ `tangkap` 01-menu → bukti/asas-bm-desktop-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 200 
- ✅ `tangkap` 02-peta → bukti/asas-bm-desktop-02-peta.png
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 500 
- ✅ `jangka` window.__game.keadaan === 'main' 
- ✅ `tangkap` 03-main-awal → bukti/asas-bm-desktop-03-main-awal.png
- ✅ `nilai` window.__game.soalan = {"teks":"3 + 3","jawapan":6}
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 800 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.menang === true 
- ✅ `tangkap` 04-menang → bukti/asas-bm-desktop-04-menang.png
- ✅ `klik` [data-uji=ulang] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' && window.__game.skor === 0 

## tukar-id · telefon (390×844)

- ✅ `buka` index.html?seed=21 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-telefon-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-telefon-02-main-id.png
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' 

## tukar-id · desktop (1366×768)

- ✅ `buka` index.html?seed=21 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `tangkap` 01-menu-id → bukti/tukar-id-desktop-01-menu-id.png
- ✅ `klik` [data-uji=mula] 
- ✅ `klik` [data-uji=tahap-0] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 02-main-id → bukti/tukar-id-desktop-02-main-id.png
- ✅ `klik` [data-uji=tukar-bahasa] 
- ✅ `jangka` document.documentElement.lang === 'ms' 

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.