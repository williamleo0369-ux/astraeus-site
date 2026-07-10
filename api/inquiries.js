import { createInquiry } from '../lib/db.js';
import { readJson, sendJson } from './_utils.js';

async function readInquiryPayload(req) {
  const contentType = req.headers['content-type'] || '';
  if (contentType.includes('application/json')) return readJson(req);

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw));
  }

  return {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  try {
    const payload = await readInquiryPayload(req);
    if (payload.website) {
      return sendJson(res, 200, { ok: true });
    }

    const inquiry = await createInquiry(payload, {
      userAgent: req.headers['user-agent'] || null,
      referer: req.headers.referer || null,
      ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() || null
    });

    return sendJson(res, 200, { ok: true, id: inquiry.id });
  } catch (error) {
    return sendJson(res, 400, { error: error.message || 'Inquiry submission failed' });
  }
}
