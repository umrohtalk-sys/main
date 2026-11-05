# NGAJI KIDS (versi statis untuk Netlify + Supabase)

Situs untuk mempertemukan orang tua dengan ustadz/ustadzah. Tidak perlu `npm install` atau langkah build:
folder **`netlify/`** langsung bisa diunggah ke Netlify.

```
projects/ngaji-kids/
├── netlify/                  ← FOLDER YANG DIUNGGAH KE NETLIFY
│   ├── index.html
│   ├── config.js             ← isi URL + anon key Supabase di sini
│   ├── content/hukum.md      ← teks Kebijakan Privasi & Syarat Penggunaan
│   ├── assets/               ← app.js, style.css, ilustrasi, adapter data
│   └── _headers              ← header keamanan Netlify
├── supabase/                 ← jalankan berurutan di Supabase SQL Editor
│   ├── 01_schema.sql
│   ├── 02_storage_dan_keamanan.sql
│   ├── 03_hapus_akun.sql
│   └── 04_netlify_statis.sql
├── netlify.toml              ← untuk deploy lewat GitHub (publish = "netlify")
└── tools/build-artifact.mjs  ← membuat prototipe 1 file (mode demo)
```

## 1. Siapkan Supabase
1. Buat proyek di supabase.com.
2. SQL Editor: jalankan `01_schema.sql`, `02_storage_dan_keamanan.sql`, `03_hapus_akun.sql`, lalu `04_netlify_statis.sql` (berurutan).
   File 02 membuat bucket Storage `photos` (publik) dan `documents` (privat), file 04 menambah fitur hapus akun tanpa server dan batas ukuran file.
3. Authentication → URL Configuration: isi **Site URL** dengan domain Netlify Anda (mis. `https://ngajikids.netlify.app`) dan tambahkan `https://ngajikids.netlify.app/**` ke **Redirect URLs**.
4. Authentication → Providers → Email: saat uji coba boleh matikan "Confirm email". Untuk produksi, nyalakan lagi.
5. Project Settings → API: salin **Project URL** dan **anon public key**.

## 2. Isi `netlify/config.js`
```js
window.NGAJI_CONFIG = {
  supabaseUrl: "https://xxxx.supabase.co",
  supabaseAnonKey: "eyJ...",
};
```
Anon key memang untuk browser dan aman dipasang. **Jangan pernah** menaruh `service_role` key di folder ini.
Kalau `config.js` dibiarkan kosong, situs berjalan dalam **mode demo** (data contoh, tersimpan di browser).

## 3. Deploy ke Netlify
- **Cara cepat:** buka app.netlify.com → *Add new site* → *Deploy manually*, lalu seret folder `netlify/`.
- **Lewat GitHub:** *Import from Git*, pilih repo, set *Base directory* `projects/ngaji-kids`. `netlify.toml` sudah mengatur publish ke `netlify/`.

## 4. Jadikan diri Anda admin
Daftar satu akun di situs, lalu di SQL Editor:
```sql
update profiles set role = 'admin' where id = (select id from auth.users where email = 'email-anda@contoh.com');
```
Menu **Panel admin** akan muncul untuk menyetujui pengajar, memberi badge Terverifikasi, membuka dokumen ijazah (tautan 5 menit), dan menangani laporan.

## Halaman
| Alamat | Isi |
|---|---|
| `#beranda` | Hero + pencarian, jenis belajar, guru pilihan, cara kerja, FAQ |
| `#cari` | Filter nama, kota, jenis belajar, ustadz/ustadzah, tatap muka/online |
| `#guru-<id>` | Profil pengajar, hubungi WhatsApp (harus masuk), simpan favorit, laporkan |
| `#masuk` `#daftar` `#daftar-pengajar` `#lupa` `#atur-sandi` | Akun dan kata sandi |
| `#akun` `#favorit` | Data akun, ganti sandi, guru favorit, hapus akun |
| `#profil` | Dasbor pengajar: foto, jenis ajaran, kontak, unggah ijazah, kelengkapan profil |
| `#admin` | Statistik, verifikasi pengajar, laporan |
| `#privasi` `#syarat` | Dibaca dari `content/hukum.md` (Bagian A dan B). Teks dalam `[kurung siku]` disorot kuning sampai Anda isi |

## Keamanan
- Pembatasan ditegakkan oleh **Row Level Security** di database, bukan oleh halaman. Pengajar tidak bisa menyetujui dirinya sendiri (trigger `protect_status`).
- Nomor WhatsApp dan email pengajar tidak ada di view publik; hanya bisa diambil lewat `get_contact` oleh pengguna yang sudah masuk.
- Dokumen ijazah ada di bucket privat; hanya pemilik dan admin yang bisa membukanya.
- Sebelum publik: lengkapi semua `[kurung siku]` di `content/hukum.md` dan minta advokat meninjaunya.

## Prototipe 1 file
`node tools/build-artifact.mjs` membuat `prototipe-artifact.html` (mode demo, semua aset digabung) untuk pratinjau.
