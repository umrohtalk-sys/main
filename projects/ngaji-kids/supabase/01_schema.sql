-- NGAJI KIDS: jalankan di Supabase > SQL Editor
create extension if not exists pgcrypto;

create type user_role as enum ('teacher','parent','admin');
create type report_status as enum ('open','reviewed','closed');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null default 'parent',
  full_name text not null,
  created_at timestamptz default now()
);

create table subjects (
  id serial primary key,
  name text unique not null
);

create table teacher_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references profiles(id) on delete cascade,
  gender char(1) check (gender in ('L','P')),
  city text not null,
  district text,
  bio text,
  education text,
  experience text,
  sanad text,
  schedule text,
  age_range text,
  mode text[] not null default '{}',
  fee_note text default 'Dibicarakan langsung',
  photo_url text,
  whatsapp text,
  email text,
  social_url text,
  document_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  verified boolean not null default false,
  created_at timestamptz default now()
);
create index on teacher_profiles (city, status);

create table teacher_subjects (
  teacher_id uuid references teacher_profiles(id) on delete cascade,
  subject_id int references subjects(id) on delete cascade,
  primary key (teacher_id, subject_id)
);

create table reports (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references teacher_profiles(id) on delete cascade,
  reporter_id uuid references profiles(id),
  reason text not null,
  status report_status not null default 'open',
  created_at timestamptz default now()
);

create table favorites (
  parent_id uuid references profiles(id) on delete cascade,
  teacher_id uuid references teacher_profiles(id) on delete cascade,
  primary key (parent_id, teacher_id)
);

-- View publik: tanpa kontak dan dokumen, hanya profil yang disetujui
create view public_teachers as
select t.id, p.full_name, t.gender, t.city, t.district, t.bio, t.education,
       t.experience, t.sanad, t.schedule, t.age_range, t.mode, t.fee_note,
       t.photo_url, t.verified,
       coalesce(array_agg(s.name) filter (where s.name is not null), '{}') as subjects
from teacher_profiles t
join profiles p on p.id = t.user_id
left join teacher_subjects ts on ts.teacher_id = t.id
left join subjects s on s.id = ts.subject_id
where t.status = 'approved'
group by t.id, p.full_name;

-- Kontak hanya untuk pengguna yang login
create or replace function get_contact(tid uuid)
returns table (whatsapp text, email text, social_url text)
language sql security definer set search_path = public as $$
  select whatsapp, email, social_url from teacher_profiles
  where id = tid and status = 'approved' and auth.uid() is not null;
$$;

create or replace function is_admin() returns boolean
language sql security definer set search_path = public as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

alter table profiles enable row level security;
alter table teacher_profiles enable row level security;
alter table teacher_subjects enable row level security;
alter table reports enable row level security;
alter table favorites enable row level security;
alter table subjects enable row level security;

create policy "subjects dibaca semua" on subjects for select using (true);
create policy "profil sendiri" on profiles for select using (id = auth.uid() or is_admin());
create policy "ubah profil sendiri" on profiles for update using (id = auth.uid())
  with check (role = (select role from profiles where id = auth.uid()));
create policy "guru kelola profilnya" on teacher_profiles for all
  using (user_id = auth.uid() or is_admin()) with check (user_id = auth.uid() or is_admin());
create policy "guru kelola mapelnya" on teacher_subjects for all
  using (exists (select 1 from teacher_profiles t where t.id = teacher_id and (t.user_id = auth.uid() or is_admin())));
create policy "login boleh melapor" on reports for insert with check (auth.uid() is not null);
create policy "admin baca laporan" on reports for select using (is_admin());
create policy "admin ubah laporan" on reports for update using (is_admin());
create policy "favorit sendiri" on favorites for all using (parent_id = auth.uid());

create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name','Pengguna'),
          coalesce((new.raw_user_meta_data->>'role')::user_role,'parent'));
  return new;
end $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function handle_new_user();

insert into subjects (name) values ('Iqra'),('Tahsin'),('Tahfidz'),('Tajwid'),('Bahasa Arab');

-- Storage: buat bucket "photos" (publik) dan "documents" (privat) di dashboard.
-- Jadi admin: update profiles set role='admin' where id='<uuid-anda>';
