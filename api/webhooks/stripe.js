import { markStripeCheckoutCompleted } from '../../lib/db.js';
import { verifyStripeSignature } from '../../lib/stripe-signature.js';
import { readRawBody, sendJson } from '../_utils.js';

export const config = {
  api: {
    bodyParser: false
  }
};

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
      await markStripeCheckoutCompleted(event.data.object, event.id);
    }

    return sendJson(res, 200, { received: true });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Webhook failed' });
  }
}
