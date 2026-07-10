import { updateOrder } from '../../lib/db.js';
import { readJson, requireAdmin, sendJson } from '../_utils.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  try {
    const body = await readJson(req);
    if (!body.orderId) {
      return sendJson(res, 400, { error: 'Missing orderId' });
    }

    const order = await updateOrder(body.orderId, body);
    if (!order) {
      return sendJson(res, 404, { error: 'Order not found' });
    }

    return sendJson(res, 200, { order });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to update order' });
  }
}
