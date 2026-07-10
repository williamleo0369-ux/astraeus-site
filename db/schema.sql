create table if not exists orders (
  id text primary key,
  stripe_session_id text unique,
  status text not null default 'checkout_created',
  payment_status text not null default 'unpaid',
  fulfillment_status text not null default 'pending',
  customer_email text,
  customer_name text,
  customer_phone text,
  currency text not null default 'USD',
  subtotal_cents integer not null default 0,
  total_cents integer not null default 0,
  items jsonb not null default '[]'::jsonb,
  shipping jsonb not null default '{}'::jsonb,
  tracking_number text,
  carrier_slug text,
  aftership_tracking_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists order_events (
  id bigserial primary key,
  order_id text not null references orders(id) on delete cascade,
  type text not null,
  message text not null,
  payload jsonb not null default '{}'::jsonb,
  external_id text,
  created_at timestamptz not null default now()
);

create index if not exists orders_created_at_idx on orders (created_at desc);
create index if not exists orders_tracking_number_idx on orders (tracking_number);
create index if not exists order_events_order_id_idx on order_events (order_id, created_at desc);
create unique index if not exists order_events_external_id_idx on order_events (external_id);
