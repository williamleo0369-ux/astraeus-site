import { neon } from '@neondatabase/serverless';

let sqlClient = null;
let schemaReady = false;

export function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured');
  }
  if (!sqlClient) {
    sqlClient = neon(process.env.DATABASE_URL);
  }
  return sqlClient;
}

export async function ensureSchema() {
  if (schemaReady) return;
  const sql = getSql();
  await sql`
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
    )
  `;
  await sql`
    create table if not exists order_events (
      id bigserial primary key,
      order_id text not null references orders(id) on delete cascade,
      type text not null,
      message text not null,
      payload jsonb not null default '{}'::jsonb,
      created_at timestamptz not null default now()
    )
  `;
  await sql`create index if not exists orders_created_at_idx on orders (created_at desc)`;
  await sql`create index if not exists orders_tracking_number_idx on orders (tracking_number)`;
  await sql`create index if not exists order_events_order_id_idx on order_events (order_id, created_at desc)`;
  schemaReady = true;
}

export function createOrderId() {
  const date = new Date();
  const stamp = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `AST-${stamp}-${random}`;
}

export async function createOrder({ lineItems, totals, customer = {}, shipping = {} }) {
  await ensureSchema();
  const sql = getSql();
  const id = createOrderId();
  const rows = await sql`
    insert into orders (
      id, status, payment_status, fulfillment_status, customer_email, customer_name, customer_phone,
      currency, subtotal_cents, total_cents, items, shipping
    ) values (
      ${id}, 'checkout_created', 'unpaid', 'pending', ${customer.email || null}, ${customer.name || null}, ${customer.phone || null},
      ${totals.currency}, ${totals.subtotalCents}, ${totals.totalCents}, ${JSON.stringify(lineItems)}::jsonb, ${JSON.stringify(shipping)}::jsonb
    )
    returning *
  `;
  await addOrderEvent(id, 'order.created', 'Checkout session requested', { itemCount: lineItems.length });
  return rows[0];
}

export async function setStripeSession(orderId, sessionId) {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    update orders
    set stripe_session_id = ${sessionId}, updated_at = now()
    where id = ${orderId}
    returning *
  `;
  return rows[0];
}

export async function markStripeCheckoutCompleted(session) {
  await ensureSchema();
  const sql = getSql();
  const orderId = session.metadata?.order_id;
  if (!orderId) return null;

  const rows = await sql`
    update orders
    set
      status = 'paid',
      payment_status = ${session.payment_status || 'paid'},
      customer_email = coalesce(${session.customer_details?.email || session.customer_email || null}, customer_email),
      customer_name = coalesce(${session.customer_details?.name || null}, customer_name),
      shipping = coalesce(${JSON.stringify(session.shipping_details || {})}::jsonb, shipping),
      updated_at = now()
    where id = ${orderId}
    returning *
  `;

  if (rows[0]) {
    await addOrderEvent(orderId, 'payment.succeeded', 'Stripe Checkout completed', {
      stripeSessionId: session.id,
      paymentStatus: session.payment_status
    });
  }

  return rows[0] || null;
}

export async function addOrderEvent(orderId, type, message, payload = {}) {
  await ensureSchema();
  const sql = getSql();
  await sql`
    insert into order_events (order_id, type, message, payload)
    values (${orderId}, ${type}, ${message}, ${JSON.stringify(payload)}::jsonb)
  `;
}

export async function getOrder(reference) {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    select * from orders
    where id = ${reference} or tracking_number = ${reference} or stripe_session_id = ${reference}
    limit 1
  `;
  if (!rows[0]) return null;

  const events = await sql`
    select type, message, payload, created_at
    from order_events
    where order_id = ${rows[0].id}
    order by created_at desc
    limit 20
  `;
  return { ...rows[0], events };
}

export async function listOrders(limit = 100) {
  await ensureSchema();
  const sql = getSql();
  return sql`
    select * from orders
    order by created_at desc
    limit ${Math.min(Math.max(Number(limit) || 100, 1), 200)}
  `;
}

export async function updateOrder(orderId, patch = {}) {
  await ensureSchema();
  const sql = getSql();
  const rows = await sql`
    update orders
    set
      status = coalesce(${patch.status || null}, status),
      payment_status = coalesce(${patch.paymentStatus || null}, payment_status),
      fulfillment_status = coalesce(${patch.fulfillmentStatus || null}, fulfillment_status),
      tracking_number = coalesce(${patch.trackingNumber || null}, tracking_number),
      carrier_slug = coalesce(${patch.carrierSlug || null}, carrier_slug),
      updated_at = now()
    where id = ${orderId}
    returning *
  `;
  if (rows[0]) {
    await addOrderEvent(orderId, 'order.updated', 'Order updated from admin', patch);
  }
  return rows[0] || null;
}
