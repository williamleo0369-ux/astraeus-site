import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import test from 'node:test';
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
