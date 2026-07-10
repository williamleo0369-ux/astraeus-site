# ASTRAEUS Backend Setup

This repo now includes Vercel Functions for Stripe checkout, Neon Postgres orders, AfterShip tracking lookup, and a private order admin page.

## Required Vercel Environment Variables

Copy `.env.example` into Vercel project settings:

- `NEXT_PUBLIC_SITE_URL`: production origin, for example `https://theastraeus.com`
- `DATABASE_URL`: Neon Postgres connection string
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook signing secret
- `ADMIN_API_TOKEN`: long random token used by `admin.html`
- `AFTERSHIP_API_KEY`: AfterShip API key
- `AFTERSHIP_API_VERSION`: default `2026-01`

## Vercel Marketplace

Recommended provisioning:

```bash
vercel integration add neon
vercel integration add stripe
vercel env pull .env.local --yes
```

## Stripe Webhook

Create a Stripe webhook endpoint:

```text
https://theastraeus.com/api/webhooks/stripe
```

Enable event:

```text
checkout.session.completed
```

Set the webhook signing secret as `STRIPE_WEBHOOK_SECRET`.

## Database

The API lazily creates the required tables at runtime. The schema is also available in:

```text
db/schema.sql
```

## Admin

Open:

```text
/admin.html
```

Enter `ADMIN_API_TOKEN` to load orders and update fulfillment status, carrier slug, and tracking number.

Common carrier slugs for AfterShip include `dhl`, `fedex`, `ups`, and `usps`.
