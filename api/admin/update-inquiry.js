import { deleteInquiry, updateInquiryStatus } from '../../lib/db.js';
import { readJson, requireAdmin, sendJson } from '../_utils.js';

const allowedActions = new Set(['archive', 'delete']);

function parseInquiryId(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error('Missing inquiryId');
  }
  return id;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  try {
    const body = await readJson(req);
    const inquiryId = parseInquiryId(body.inquiryId);
    const action = String(body.action || '').trim().toLowerCase();

    if (!allowedActions.has(action)) {
      return sendJson(res, 400, { error: 'Invalid inquiry action' });
    }

    const inquiry = action === 'delete'
      ? await deleteInquiry(inquiryId)
      : await updateInquiryStatus(inquiryId, 'archived');

    if (!inquiry) {
      return sendJson(res, 404, { error: 'Inquiry not found' });
    }

    return sendJson(res, 200, { inquiry, action });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to update inquiry' });
  }
}
