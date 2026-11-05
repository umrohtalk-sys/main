/* Isi dua nilai ini dari Supabase > Project Settings > API.
   Anon key AMAN ditaruh di sini (memang untuk browser); keamanan data dijaga Row Level Security.
   JANGAN PERNAH menaruh service_role key di file ini.
   Jika dibiarkan kosong, situs berjalan dalam MODE DEMO memakai data contoh. */
window.NGAJI_CONFIG = {
  supabaseUrl: "",      // contoh: "https://abcdxyz.supabase.co"
  supabaseAnonKey: "",  // contoh: "eyJhbGciOiJIUzI1NiIs..."
};
