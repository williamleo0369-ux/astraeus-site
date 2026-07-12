import { markStripeCheckoutCompleted } from '../../lib/db.js';
import { notifyOrderPaid } from '../../lib/email.js';
import { verifyStripeSignature } from '../../lib/stripe-signature.js';

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return Response.json({ error: 'Method not allowed' }, { status: 405 });
    }

    try {
      const rawBody = Buffer.from(await request.arrayBuffer());
      const signature = request.headers.get('stripe-signature');
      if (!verifyStripeSignature(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET)) {
        return Response.json({ error: 'Invalid Stripe signature' }, { status: 400 });
      }

      const event = JSON.parse(rawBody.toString('utf8'));
      if (event.type === 'checkout.session.completed') {
        const order = await markStripeCheckoutCompleted(event.data.object, event.id);
        if (order) {
          await notifyOrderPaid(order);
        }
      }

      return Response.json({ received: true });
    } catch (error) {
      return Response.json({ error: error.message || 'Webhook failed' }, { status: 500 });
    }
  }
};
