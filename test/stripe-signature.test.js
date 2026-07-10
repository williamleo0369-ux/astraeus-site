import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import test from 'node:test';
import stripeWebhook from '../api/webhooks/stripe.js';
import { verifyStripeSignature } from '../lib/stripe-signature.js';

const secret = 'whsec_test_secret';
const timestamp = 1_750_000_000;
const now = timestamp * 1000;
const body = Buffer.from(JSON.stringify({ id: 'evt_123', type: 'checkout.session.completed' }));

function sign(payload = body, time = timestamp) {
  return crypto.createHmac('sha256', secret).update(`${time}.${payload.toString('utf8')}`).digest('hex');
}

test('accepts a current valid Stripe signature', () => {
  assert.equal(verifyStripeSignature(body, `t=${timestamp},v1=${sign()}`, secret, { now }), true);
});

test('accepts any matching v1 signature during secret rotation', () => {
  assert.equal(verifyStripeSignature(body, `t=${timestamp},v1=${'0'.repeat(64)},v1=${sign()}`, secret, { now }), true);
});

test('rejects signatures outside the replay tolerance', () => {
  assert.equal(verifyStripeSignature(body, `t=${timestamp},v1=${sign()}`, secret, { now: now + 301_000 }), false);
});

test('rejects modified payloads and malformed signatures', () => {
  assert.equal(verifyStripeSignature(Buffer.from('{}'), `t=${timestamp},v1=${sign()}`, secret, { now }), false);
  assert.equal(verifyStripeSignature(body, `t=${timestamp},v1=not-hex`, secret, { now }), false);
});

test('webhook reads the exact Web Request body before verification', async () => {
  const webhookBody = Buffer.from(JSON.stringify({ id: 'evt_ping', type: 'ping' }));
  const webhookTimestamp = Math.floor(Date.now() / 1000);
  const webhookSignature = crypto
    .createHmac('sha256', secret)
    .update(`${webhookTimestamp}.${webhookBody.toString('utf8')}`)
    .digest('hex');
  const previousSecret = process.env.STRIPE_WEBHOOK_SECRET;
  process.env.STRIPE_WEBHOOK_SECRET = secret;

  try {
    const response = await stripeWebhook.fetch(new Request('https://example.com/api/webhooks/stripe', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'stripe-signature': `t=${webhookTimestamp},v1=${webhookSignature}`
      },
      body: webhookBody
    }));

    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { received: true });
  } finally {
    if (previousSecret == null) delete process.env.STRIPE_WEBHOOK_SECRET;
    else process.env.STRIPE_WEBHOOK_SECRET = previousSecret;
  }
});
