import { markCheckoutFailed, markStripeCheckoutCompleted } from '../../lib/db.js';
import { notifyOrderPaid } from '../../lib/email.js';
import { verifyStripeSignature } from '../../lib/stripe-signature.js';

const PAID_CHECKOUT_EVENTS = new Set([
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded'
]);

const FAILED_CHECKOUT_EVENTS = new Set([
  'checkout.session.async_payment_failed',
  'checkout.session.expired'
]);

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
      const session = event.data?.object;

      if (PAID_CHECKOUT_EVENTS.has(event.type)) {
        const order = await markStripeCheckoutCompleted(session, event.id);
        if (order) {
          await notifyOrderPaid(order);
        }
      } else if (FAILED_CHECKOUT_EVENTS.has(event.type)) {
        const orderId = session?.metadata?.order_id;
        if (orderId) {
          await markCheckoutFailed(orderId, event.type, `stripe:${event.id}`);
        }
      }

      return Response.json({ received: true });
    } catch (error) {
      return Response.json({ error: error.message || 'Webhook failed' }, { status: 500 });
    }
  }
};
