-- NGAJI KIDS versi statis (Netlify): jalankan SETELAH 01, 02, dan 03.
-- Isi file ini:
--   1. Hapus akun lewat fungsi database (tidak perlu server / service role key).
--   2. Izin menghapus file sendiri di Storage (dipakai saat hapus akun / ganti foto).
--   3. Batas ukuran dan jenis file di bucket.
--   4. Jenis ajaran tambahan.

-- 1. Hapus akun sendiri. Identitas diambil dari token login (auth.uid()), bukan dari isi permintaan,
--    sehingga seseorang hanya bisa menghapus akunnya sendiri. Admin tidak bisa menghapus dirinya di sini.
create or replace function delete_my_account() returns void
language plpgsql security definer set search_path = public, auth as $$
begin
  if auth.uid() is null then raise exception 'Belum masuk'; end if;
  if is_admin() then raise exception 'Akun admin tidak bisa dihapus dari sini'; end if;
  -- profiles, teacher_profiles, teacher_subjects, favorites ikut terhapus (on delete cascade)
  delete from auth.users where id = auth.uid();
end $$;
revoke all on function delete_my_account() from public, anon;
grant execute on function delete_my_account() to authenticated;

-- 2. Pemilik boleh menghapus file di foldernya sendiri ({uid}/...)
create policy "hapus foto sendiri" on storage.objects for delete to authenticated
  using (bucket_id = 'photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "hapus dokumen sendiri" on storage.objects for delete to authenticated
  using (bucket_id = 'documents' and (storage.foldername(name))[1] = auth.uid()::text);

-- 3. Batas file: foto maks 2 MB (gambar), dokumen maks 5 MB (gambar atau PDF)
update storage.buckets set file_size_limit = 2097152,
  allowed_mime_types = array['image/jpeg','image/png','image/webp']
  where id = 'photos';
update storage.buckets set file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg','image/png','image/webp','application/pdf']
  where id = 'documents';

-- 4. Jenis ajaran tambahan
insert into subjects (name) values ('Doa Harian'), ('Adab & Akhlak')
on conflict (name) do nothing;

-- 5. Orang tua bisa membaca guru favoritnya lewat view publik (view sudah terbuka untuk semua).
--    Tabel favorites sudah dilindungi RLS "favorit sendiri" di 01_schema.sql.
