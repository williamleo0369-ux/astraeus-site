import crypto from 'node:crypto';
import { markStripeCheckoutCompleted } from '../../lib/db.js';
import { readRawBody, sendJson } from '../_utils.js';

function verifyStripeSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;
  const fields = Object.fromEntries(signatureHeader.split(',').map((part) => part.split('=')));
  const timestamp = fields.t;
  const signature = fields.v1;
  if (!timestamp || !signature) return false;

  const payload = `${timestamp}.${rawBody.toString('utf8')}`;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  const a = Buffer.from(expected, 'hex');
  const b = Buffer.from(signature, 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  try {
    const rawBody = await readRawBody(req);
    const signature = req.headers['stripe-signature'];
    if (!verifyStripeSignature(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET)) {
      return sendJson(res, 400, { error: 'Invalid Stripe signature' });
    }

    const event = JSON.parse(rawBody.toString('utf8'));
    if (event.type === 'checkout.session.completed') {
      await markStripeCheckoutCompleted(event.data.object);
    }

    return sendJson(res, 200, { received: true });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Webhook failed' });
  }
}
