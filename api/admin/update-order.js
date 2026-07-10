import { updateOrder } from '../../lib/db.js';
import { readJson, requireAdmin, sendJson } from '../_utils.js';

const allowedStatus = new Set(['checkout_created', 'paid', 'processing', 'fulfilled', 'cancelled', 'refunded']);
const allowedPaymentStatus = new Set(['unpaid', 'paid', 'refunded', 'failed']);
const allowedFulfillmentStatus = new Set(['pending', 'preparing', 'dispatched', 'in_transit', 'delivered', 'exception']);

function cleanOptionalText(value, maxLength = 120) {
  if (value == null) return undefined;
  const clean = String(value).trim();
  return clean ? clean.slice(0, maxLength) : null;
}

function buildPatch(body) {
  const patch = { orderId: cleanOptionalText(body.orderId, 80) };

  if (!patch.orderId) {
    throw new Error('Missing orderId');
  }
  if (body.status && !allowedStatus.has(body.status)) {
    throw new Error('Invalid order status');
  }
  if (body.paymentStatus && !allowedPaymentStatus.has(body.paymentStatus)) {
    throw new Error('Invalid payment status');
  }
  if (body.fulfillmentStatus && !allowedFulfillmentStatus.has(body.fulfillmentStatus)) {
    throw new Error('Invalid fulfillment status');
  }

  if (body.status) patch.status = body.status;
  if (body.paymentStatus) patch.paymentStatus = body.paymentStatus;
  if (body.fulfillmentStatus) patch.fulfillmentStatus = body.fulfillmentStatus;
  if ('trackingNumber' in body) patch.trackingNumber = cleanOptionalText(body.trackingNumber, 120);
  if ('carrierSlug' in body) patch.carrierSlug = cleanOptionalText(body.carrierSlug, 60)?.toLowerCase() || null;

  return patch;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  try {
    const body = await readJson(req);
    const patch = buildPatch(body);

    const order = await updateOrder(patch.orderId, patch);
    if (!order) {
      return sendJson(res, 404, { error: 'Order not found' });
    }

    return sendJson(res, 200, { order });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to update order' });
  }
}
