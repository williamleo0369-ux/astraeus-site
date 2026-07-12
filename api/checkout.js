import { getOrderTotals, getSellableLineItems } from '../lib/catalog.js';
import { createOrder, markCheckoutFailed, setStripeSession } from '../lib/db.js';
import { getSiteUrl, readJson, sendJson } from './_utils.js';

function isTestStripeKey(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '').startsWith('sk_test_');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  let order = null;

  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return sendJson(res, 500, { error: 'STRIPE_SECRET_KEY is not configured' });
    }
    if (process.env.VERCEL_ENV === 'production' && isTestStripeKey(process.env.STRIPE_SECRET_KEY)) {
      return sendJson(res, 503, { error: 'Live Stripe payments are not configured yet. Please request a private checkout.' });
    }

    const body = await readJson(req);
    const lineItems = getSellableLineItems(body.items || []);
    if (!lineItems.length) {
      return sendJson(res, 400, { error: 'No sellable cart items' });
    }

    const totals = getOrderTotals(lineItems);
    order = await createOrder({
      lineItems,
      totals,
      customer: body.customer || {},
      shipping: body.shipping || {}
    });

    const siteUrl = getSiteUrl(req);
    const params = new URLSearchParams();
    params.set('mode', 'payment');
    params.set('success_url', `${siteUrl}/order.html?id=${encodeURIComponent(order.id)}&session_id={CHECKOUT_SESSION_ID}`);
    params.set('cancel_url', `${siteUrl}/product.html?id=${encodeURIComponent(lineItems[0].id)}`);
    params.set('metadata[order_id]', order.id);
    params.set('metadata[source]', 'astraeus-site');
    params.set('shipping_address_collection[allowed_countries][0]', 'US');
    params.set('shipping_address_collection[allowed_countries][1]', 'GB');
    params.set('shipping_address_collection[allowed_countries][2]', 'CN');
    params.set('shipping_address_collection[allowed_countries][3]', 'HK');
    params.set('shipping_address_collection[allowed_countries][4]', 'SG');
    params.set('phone_number_collection[enabled]', 'true');
    params.set('allow_promotion_codes', 'true');

    lineItems.forEach((item, index) => {
      params.set(`line_items[${index}][quantity]`, String(item.quantity));
      params.set(`line_items[${index}][price_data][currency]`, item.currency.toLowerCase());
      params.set(`line_items[${index}][price_data][unit_amount]`, String(item.unitAmount));
      params.set(`line_items[${index}][price_data][product_data][name]`, `${item.ref} · ${item.name}`);
      params.set(`line_items[${index}][price_data][product_data][description]`, `${item.nameCn} · ${item.leadTime} · ${item.fulfillment}`);
      params.set(`line_items[${index}][price_data][product_data][metadata][product_id]`, item.id);
      params.set(`line_items[${index}][price_data][product_data][images][0]`, encodeURI(`${siteUrl}/${item.image}`));
    });

    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    const session = await stripeResponse.json();
    if (!stripeResponse.ok) {
      await markCheckoutFailed(order.id, session.error?.message || 'Stripe Checkout failed');
      return sendJson(res, stripeResponse.status, { error: session.error?.message || 'Stripe Checkout failed', orderId: order.id });
    }

    await setStripeSession(order.id, session.id);
    return sendJson(res, 200, { orderId: order.id, url: session.url });
  } catch (error) {
    if (order) {
      try {
        await markCheckoutFailed(order.id, error.message);
      } catch (recordError) {
        console.error('Unable to record checkout failure', recordError);
      }
    }
    return sendJson(res, 500, { error: error.message || 'Checkout failed' });
  }
}
