-- Tables used by api/server.js. RLS is on with no policies: only the service role (server) can read or write.
create table public.tribes (
  id text primary key check (id ~ '^[a-z0-9]{2,8}$'),
  ticker text unique not null check (ticker ~ '^[A-Z0-9]{2,8}$'),
  name text not null check (char_length(name) between 3 and 24),
  mascot text not null check (mascot in ('banana','frog','pizza','duck','cat','alien','blob')),
  palette text not null check (palette in ('banana','pizza','frog','duck','cat','alien','mint','night')),
  description text not null check (char_length(description) between 10 and 200),
  supply bigint not null check (supply in (100000000, 1000000000, 10000000000)),
  pair text not null default 'ETH' check (pair in ('ETH','NVDA','TSLA','AAPL','META','COIN','MSTR','SPY','QQQ','GLD')),
  image_url text,
  links jsonb not null default '{}'::jsonb,
  creator text check (creator is null or creator ~ '^0x[0-9a-fA-F]{40}$'),
  edit_key_hash text not null,
  created_at timestamptz not null default now()
);
create table public.rt_tokens (
  address text primary key check (address ~ '^0x[0-9a-f]{40}$'),
  ticker text not null check (ticker ~ '^[A-Z0-9]{2,10}$'),
  name text not null check (char_length(name) between 2 and 32),
  created_at timestamptz not null default now()
);
alter table public.tribes enable row level security;
alter table public.rt_tokens enable row level security;
-- Storage: public bucket "mascots", 800 KB limit, image/png, image/jpeg, image/webp.
