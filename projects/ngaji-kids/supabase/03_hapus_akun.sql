-- Jalankan setelah 02. Agar akun yang pernah melapor tetap bisa dihapus:
-- laporan tetap tersimpan, hanya nama pelapornya dikosongkan.
alter table reports drop constraint if exists reports_reporter_id_fkey;
alter table reports add constraint reports_reporter_id_fkey
  foreign key (reporter_id) references profiles(id) on delete set null;
