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
  },
  {
    key: 'RESEND_API_KEY',
    label: 'Email Notifications',
    purpose: 'Sends inquiry and paid order alerts to your admin email.'
  },
  {
    key: 'NOTIFICATION_EMAIL',
    label: 'Notification Inbox',
    purpose: 'Receives private inquiry and paid order alert emails.'
  }
];

function cleanEnv(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function getCheckResult(check) {
  const value = cleanEnv(process.env[check.key]);
  let configured = Boolean(value);
  let issue = '';

  if (check.key === 'STRIPE_SECRET_KEY' && configured) {
    const isTestKey = value.startsWith('sk_test_') || value.startsWith('rk_test_');
    const isLiveKey = value.startsWith('sk_live_') || value.startsWith('rk_live_');
    if (process.env.VERCEL_ENV === 'production' && isTestKey) {
      configured = false;
      issue = 'Production is using a Stripe test key. Replace it with rk_live_ or sk_live_ to remove Sandbox checkout.';
    } else if (!isTestKey && !isLiveKey) {
      configured = false;
      issue = 'Stripe API key must start with rk_live_, rk_test_, sk_live_, or sk_test_.';
    }
  }

  return {
    ...check,
    configured,
    issue
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  const results = checks.map(getCheckResult);
  const missing = results.filter((check) => !check.configured).map((check) => check.key);

  return sendJson(res, 200, {
    ready: missing.length === 0,
    missing,
    checks: results,
    aftershipApiVersion: process.env.AFTERSHIP_API_VERSION || '2026-01'
  });
}
