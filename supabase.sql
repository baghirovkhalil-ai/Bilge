-- Bilgə: istifadəçi nəticələri cədvəli (Supabase → SQL Editor → bunu yapışdır → Run)
create table if not exists public.progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
create policy "oz neticesini oxuyur" on public.progress for select using (auth.uid() = user_id);
create policy "oz neticesini yazir" on public.progress for insert with check (auth.uid() = user_id);
create policy "oz neticesini yenileyir" on public.progress for update using (auth.uid() = user_id);
