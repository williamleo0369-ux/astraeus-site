import crypto from 'node:crypto';

const DEFAULT_TOLERANCE_SECONDS = 300;

function parseSignatureHeader(header) {
  const values = new Map();

  String(header || '').split(',').forEach((part) => {
    const separator = part.indexOf('=');
    if (separator === -1) return;

    const key = part.slice(0, separator).trim();
    const value = part.slice(separator + 1).trim();
    if (!key || !value) return;

    const existing = values.get(key) || [];
    existing.push(value);
    values.set(key, existing);
  });

  return values;
}

function signaturesMatch(expected, candidates) {
  const expectedBuffer = Buffer.from(expected, 'hex');

  return candidates.some((candidate) => {
    if (!/^[a-f0-9]{64}$/i.test(candidate)) return false;
    const candidateBuffer = Buffer.from(candidate, 'hex');
    return candidateBuffer.length === expectedBuffer.length
      && crypto.timingSafeEqual(expectedBuffer, candidateBuffer);
  });
}

export function verifyStripeSignature(
  rawBody,
  signatureHeader,
  secret,
  { now = Date.now(), toleranceSeconds = DEFAULT_TOLERANCE_SECONDS } = {}
) {
  if (!Buffer.isBuffer(rawBody) || !signatureHeader || !secret) return false;

  const fields = parseSignatureHeader(signatureHeader);
  const timestamp = Number(fields.get('t')?.[0]);
  const signatures = fields.get('v1') || [];
  if (!Number.isInteger(timestamp) || !signatures.length) return false;

  const currentSeconds = Math.floor(now / 1000);
  if (Math.abs(currentSeconds - timestamp) > toleranceSeconds) return false;

  const payload = `${timestamp}.${rawBody.toString('utf8')}`;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return signaturesMatch(expected, signatures);
}
