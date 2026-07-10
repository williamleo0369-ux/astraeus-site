import { listOrders } from '../../lib/db.js';
import { requireAdmin, sendJson } from '../_utils.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const orders = await listOrders(url.searchParams.get('limit') || 100);
    return sendJson(res, 200, { orders });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to list orders' });
  }
}
