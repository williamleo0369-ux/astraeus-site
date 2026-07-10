import { listInquiries } from '../../lib/db.js';
import { requireAdmin, sendJson } from '../_utils.js';

function csvCell(value) {
  const text = value == null ? '' : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function sendCsv(res, rows) {
  const header = [
    'created_at',
    'name',
    'email',
    'phone',
    'inquiry',
    'selected_piece',
    'cart_summary',
    'language',
    'source_path',
    'status'
  ];
  const body = rows.map((row) => header.map((key) => csvCell(row[key])).join(','));
  res.statusCode = 200;
  res.setHeader('content-type', 'text/csv; charset=utf-8');
  res.setHeader('content-disposition', 'attachment; filename="astraeus-inquiries.csv"');
  res.end([header.join(','), ...body].join('\n'));
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }
  if (!requireAdmin(req, res)) return;

  try {
    const limit = req.query?.limit || 200;
    const inquiries = await listInquiries(limit);
    if (req.query?.format === 'csv') {
      sendCsv(res, inquiries);
      return;
    }

    return sendJson(res, 200, { inquiries });
  } catch (error) {
    return sendJson(res, 500, { error: error.message || 'Unable to load inquiries' });
  }
}
