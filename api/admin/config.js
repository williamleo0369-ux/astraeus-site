import { requireAdmin, sendJson } from '../_utils.js';

const checks = [
  {
    key: 'NEXT_PUBLIC_SITE_URL',
    label: 'Site URL',
    purpose: 'Used for Stripe success, cancel, and product image URLs.'
  },
  {
    key: 'DATABASE_URL',
    label: 'Neon Postgres',
    purpose: 'Stores orders, payment status, fulfillment status, and tracking data.'
  },
  {
    key: 'STRIPE_SECRET_KEY',
    label: 'Stripe Checkout',
    purpose: 'Creates secure checkout sessions for sellable pieces.'
  },
  {
    key: 'STRIPE_WEBHOOK_SECRET',
    label: 'Stripe Webhook',
    purpose: 'Verifies Stripe payment completion events.'
  },
  {
    key: 'ADMIN_API_TOKEN',
    label: 'Admin Token',
    purpose: 'Protects private order and operations endpoints.'
  },
  {
    key: 'AFTERSHIP_API_KEY',
    label: 'AfterShip Tracking',
    purpose: 'Fetches live carrier checkpoint updates after dispatch.'
  }
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  const results = checks.map((check) => ({
    ...check,
    configured: Boolean(process.env[check.key])
  }));
  const missing = results.filter((check) => !check.configured).map((check) => check.key);

  return sendJson(res, 200, {
    ready: missing.length === 0,
    missing,
    checks: results,
    aftershipApiVersion: process.env.AFTERSHIP_API_VERSION || '2026-01'
  });
}
