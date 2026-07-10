import { getOrder } from '../lib/db.js';
import { readJson, sendJson } from './_utils.js';

async function getAfterShipCheckpoint(order) {
  if (!process.env.AFTERSHIP_API_KEY || !order.carrier_slug || !order.tracking_number) return null;

  const apiVersion = process.env.AFTERSHIP_API_VERSION || '2026-01';
  const url = `https://api.aftership.com/tracking/${apiVersion}/last_checkpoint/${encodeURIComponent(order.carrier_slug)}/${encodeURIComponent(order.tracking_number)}`;
  const response = await fetch(url, {
    headers: {
      'as-api-key': process.env.AFTERSHIP_API_KEY,
      'content-type': 'application/json'
    }
  });
  if (!response.ok) return null;
  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  try {
    const reference = req.method === 'GET'
      ? new URL(req.url, `https://${req.headers.host}`).searchParams.get('reference')
      : (await readJson(req)).reference;

    if (!reference) {
      return sendJson(res, 400, { error: 'Missing order reference or tracking number' });
    }

    const order = await getOrder(reference);
    if (!order) {
      return sendJson(res, 404, { error: 'Order not found' });
    }

    const aftership = await getAfterShipCheckpoint(order);
    return sendJson(res, 200, {
      orderId: order.id,
      status: order.status,
      paymentStatus: order.payment_status,
      fulfillmentStatus: order.fulfillment_status,
      trackingNumber: order.tracking_number,
      carrierSlug: order.carrier_slug,
      events: order.events || [],
      aftership
    });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Tracking lookup failed' });
  }
}
