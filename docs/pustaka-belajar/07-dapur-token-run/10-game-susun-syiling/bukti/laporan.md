# Laporan main-uji — 10-game-susun-syiling

Masa: 2026-11-21T07:17:50.427Z  ·  Senario: uji/senario.json

## menang-bm · telefon (390×844)

- ✅ `buka` index.html?uji=1 
- ✅ `tangkap` 01-menu → bukti/menang-bm-telefon-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 02-tahap1 → bukti/menang-bm-telefon-02-tahap1.png
- ✅ `klik` [data-cadang-syiling] 
- ✅ `tangkap` 03-syiling-dipilih → bukti/menang-bm-telefon-03-syiling-dipilih.png
- ✅ `klik` [data-cadang-tong] 
- ✅ `tunggu` 150 
- ✅ `tangkap` 04-tuang → bukti/menang-bm-telefon-04-tuang.png
- ✅ `tunggu` 500 
- ✅ `klik` [data-cadang-syiling] 
- ✅ `klik` [data-cadang-tong] 
- ✅ `tunggu` 400 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 900 
- ✅ `jangka` window.__game.keadaan === 'hasil' 
- ✅ `jangka` window.__game.bintang >= 1 
- ✅ `nilai` [window.__game.skor, window.__game.bintang, window.__game.nyawa] = [9515,3,5]
- ✅ `tangkap` 05-hasil-menang → bukti/menang-bm-telefon-05-hasil-menang.png

## menang-bm · desktop (1366×768)

- ✅ `buka` index.html?uji=1 
- ✅ `tangkap` 01-menu → bukti/menang-bm-desktop-01-menu.png
- ✅ `klik` [data-uji=bm] 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 02-tahap1 → bukti/menang-bm-desktop-02-tahap1.png
- ✅ `klik` [data-cadang-syiling] 
- ✅ `tangkap` 03-syiling-dipilih → bukti/menang-bm-desktop-03-syiling-dipilih.png
- ✅ `klik` [data-cadang-tong] 
- ✅ `tunggu` 150 
- ✅ `tangkap` 04-tuang → bukti/menang-bm-desktop-04-tuang.png
- ✅ `tunggu` 500 
- ✅ `klik` [data-cadang-syiling] 
- ✅ `klik` [data-cadang-tong] 
- ✅ `tunggu` 400 
- ✅ `jawabSemua` betul 
- ✅ `tunggu` 900 
- ✅ `jangka` window.__game.keadaan === 'hasil' 
- ✅ `jangka` window.__game.bintang >= 1 
- ✅ `nilai` [window.__game.skor, window.__game.bintang, window.__game.nyawa] = [9515,3,5]
- ✅ `tangkap` 05-hasil-menang → bukti/menang-bm-desktop-05-hasil-menang.png

## kalah-id · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 01-level1-id → bukti/kalah-id-telefon-01-level1-id.png
- ✅ `jawabSemua` salah 
- ✅ `tunggu` 300 
- ✅ `tangkap` 02-terlebih → bukti/kalah-id-telefon-02-terlebih.png
- ✅ `tunggu` 1200 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 0 
- ✅ `tangkap` 03-hasil-kalah → bukti/kalah-id-telefon-03-hasil-kalah.png
- ✅ `klik` [data-uji=main-semula] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' && window.__game.nyawa === 5 && window.__game.skor === 0 
- ✅ `tangkap` 04-ulang → bukti/kalah-id-telefon-04-ulang.png

## kalah-id · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 400 
- ✅ `tangkap` 01-level1-id → bukti/kalah-id-desktop-01-level1-id.png
- ✅ `jawabSemua` salah 
- ✅ `tunggu` 300 
- ✅ `tangkap` 02-terlebih → bukti/kalah-id-desktop-02-terlebih.png
- ✅ `tunggu` 1200 
- ✅ `jangka` window.__game.keadaan === 'hasil' && window.__game.nyawa === 0 
- ✅ `tangkap` 03-hasil-kalah → bukti/kalah-id-desktop-03-hasil-kalah.png
- ✅ `klik` [data-uji=main-semula] 
- ✅ `tunggu` 300 
- ✅ `jangka` window.__game.keadaan === 'main' && window.__game.nyawa === 5 && window.__game.skor === 0 
- ✅ `tangkap` 04-ulang → bukti/kalah-id-desktop-04-ulang.png

## tukar-bahasa · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.querySelector('[data-uji=mula]').textContent.includes('Mulai') 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 300 
- ✅ `jangka` document.querySelector('.tong-sasaran').textContent.startsWith('Rp ') 
- ✅ `tangkap` 01-rupiah → bukti/tukar-bahasa-telefon-01-rupiah.png
- ✅ `klik` [data-uji=bahasa-tukar] 
- ✅ `tunggu` 200 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.querySelector('.tong-sasaran').textContent.startsWith('RM ') 
- ✅ `tangkap` 02-ringgit → bukti/tukar-bahasa-telefon-02-ringgit.png
- ✅ `buka` index.html 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=id] 
- ✅ `buka` index.html 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `tangkap` 03-kekal-id → bukti/tukar-bahasa-telefon-03-kekal-id.png

## tukar-bahasa · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=id] 
- ✅ `jangka` document.querySelector('[data-uji=mula]').textContent.includes('Mulai') 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 300 
- ✅ `jangka` document.querySelector('.tong-sasaran').textContent.startsWith('Rp ') 
- ✅ `tangkap` 01-rupiah → bukti/tukar-bahasa-desktop-01-rupiah.png
- ✅ `klik` [data-uji=bahasa-tukar] 
- ✅ `tunggu` 200 
- ✅ `jangka` document.documentElement.lang === 'ms' && document.querySelector('.tong-sasaran').textContent.startsWith('RM ') 
- ✅ `tangkap` 02-ringgit → bukti/tukar-bahasa-desktop-02-ringgit.png
- ✅ `buka` index.html 
- ✅ `jangka` document.documentElement.lang === 'ms' 
- ✅ `klik` [data-uji=id] 
- ✅ `buka` index.html 
- ✅ `jangka` document.documentElement.lang === 'id' 
- ✅ `tangkap` 03-kekal-id → bukti/tukar-bahasa-desktop-03-kekal-id.png

## masa-dan-tukar · telefon (390×844)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 300 
- ✅ `klik` [data-uji=tong-0] 
- ✅ `tangkap` 01-tiada-pilihan → bukti/masa-dan-tukar-telefon-01-tiada-pilihan.png
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === 0 
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === null 
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === 0 
- ✅ `klik` [data-uji=tukar] 
- ✅ `tunggu` 200 
- ✅ `jangka` window.__game.sel === null 
- ✅ `tangkap` 02-tukar → bukti/masa-dan-tukar-telefon-02-tukar.png
- ✅ `jangka` window.__game.paksaMasa(0.3) || true 
- ✅ `tunggu` 700 
- ✅ `tangkap` 03-masa-habis → bukti/masa-dan-tukar-telefon-03-masa-habis.png
- ✅ `jangka` window.__game.nyawa === 4 
- ✅ `tunggu` 1800 
- ✅ `jangka` window.__game.masa > 30 && window.__game.nyawa === 4 
- ✅ `tangkap` 04-ulang-tahap → bukti/masa-dan-tukar-telefon-04-ulang-tahap.png

## masa-dan-tukar · desktop (1366×768)

- ✅ `buka` index.html 
- ✅ `klik` [data-uji=mula] 
- ✅ `tunggu` 300 
- ✅ `klik` [data-uji=tong-0] 
- ✅ `tangkap` 01-tiada-pilihan → bukti/masa-dan-tukar-desktop-01-tiada-pilihan.png
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === 0 
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === null 
- ✅ `klik` [data-uji=syiling-0] 
- ✅ `jangka` window.__game.sel === 0 
- ✅ `klik` [data-uji=tukar] 
- ✅ `tunggu` 200 
- ✅ `jangka` window.__game.sel === null 
- ✅ `tangkap` 02-tukar → bukti/masa-dan-tukar-desktop-02-tukar.png
- ✅ `jangka` window.__game.paksaMasa(0.3) || true 
- ✅ `tunggu` 700 
- ✅ `tangkap` 03-masa-habis → bukti/masa-dan-tukar-desktop-03-masa-habis.png
- ✅ `jangka` window.__game.nyawa === 4 
- ✅ `tunggu` 1800 
- ✅ `jangka` window.__game.masa > 30 && window.__game.nyawa === 4 
- ✅ `tangkap` 04-ulang-tahap → bukti/masa-dan-tukar-desktop-04-ulang-tahap.png

**Semua senario lulus, tiada ralat.** Baca gambar dalam bukti/ sebelum kata siap.