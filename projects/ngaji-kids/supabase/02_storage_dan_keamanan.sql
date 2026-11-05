-- Jalankan SETELAH schema.sql

-- 1. Bucket penyimpanan
insert into storage.buckets (id, name, public)
values ('photos','photos',true), ('documents','documents',false)
on conflict (id) do nothing;

create policy "foto dibaca semua" on storage.objects for select
  using (bucket_id = 'photos');
create policy "unggah foto sendiri" on storage.objects for insert to authenticated
  with check (bucket_id = 'photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "ganti foto sendiri" on storage.objects for update to authenticated
  using (bucket_id = 'photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "unggah dokumen sendiri" on storage.objects for insert to authenticated
  with check (bucket_id = 'documents' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "ganti dokumen sendiri" on storage.objects for update to authenticated
  using (bucket_id = 'documents' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "dokumen dibaca pemilik atau admin" on storage.objects for select to authenticated
  using (bucket_id = 'documents' and ((storage.foldername(name))[1] = auth.uid()::text or is_admin()));

-- 2. PENTING: cegah pengajar menyetujui/memverifikasi dirinya sendiri
create or replace function protect_status() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is not null and not is_admin() then   -- SQL Editor/Table Editor (auth.uid() null) tetap boleh
    if tg_op = 'INSERT' then
      new.status := 'pending'; new.verified := false;
    else
      new.status := old.status; new.verified := old.verified;
    end if;
  end if;
  return new;
end $$;
create trigger protect_status before insert or update on teacher_profiles
  for each row execute function protect_status();
