const DEFAULT_NOTIFICATION_EMAIL = 'williamleo0369@gmail.com';
const DEFAULT_FROM_EMAIL = 'ASTRAEUS & CO. <onboarding@resend.dev>';

function cleanText(value, fallback = '') {
  return String(value ?? fallback).replace(/\s+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function formatMoney(cents = 0, currency = 'USD') {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: String(currency || 'USD').toUpperCase()
    }).format((Number(cents) || 0) / 100);
  } catch {
    return `${((Number(cents) || 0) / 100).toFixed(2)} ${String(currency || 'USD').toUpperCase()}`;
  }
}

function getNotificationEmail() {
  return cleanText(process.env.NOTIFICATION_EMAIL || process.env.ADMIN_NOTIFICATION_EMAIL || DEFAULT_NOTIFICATION_EMAIL);
}

function getFromEmail() {
  return cleanText(process.env.RESEND_FROM_EMAIL || process.env.NOTIFICATION_FROM_EMAIL || DEFAULT_FROM_EMAIL);
}

function getSiteUrl() {
  return cleanText(process.env.NEXT_PUBLIC_SITE_URL || 'https://theastraeus.com').replace(/\/$/, '');
}

async function sendEmail({ subject, html, text, replyTo }) {
  const apiKey = cleanText(process.env.RESEND_API_KEY);
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not configured; notification email skipped.');
    return { skipped: true };
  }

  const payload = {
    from: getFromEmail(),
    to: [getNotificationEmail()],
    subject,
    html,
    text
  };
  if (replyTo) payload.reply_to = replyTo;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || 'Resend email failed');
  }
  return data;
}

export async function notifyInquiryReceived(inquiry) {
  try {
    const name = cleanText(inquiry.name, 'Private inquiry');
    const subject = `ASTRAEUS new inquiry #${inquiry.id} · ${name}`;
    const rows = [
      ['Name', inquiry.name || '-'],
      ['Email', inquiry.email || '-'],
      ['Phone', inquiry.phone || '-'],
      ['Selected piece', inquiry.selected_piece || '-'],
      ['Cart', inquiry.cart_summary || '-'],
      ['Message', inquiry.inquiry || '-'],
      ['Created', inquiry.created_at || new Date().toISOString()]
    ];
    const htmlRows = rows.map(([label, value]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#777;width:150px;">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>
    `).join('');

    await sendEmail({
      subject,
      replyTo: inquiry.email || undefined,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;">
          <h2 style="font-family:Georgia,serif;font-weight:400;">New ASTRAEUS inquiry</h2>
          <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
          <p><a href="${getSiteUrl()}/admin.html">Open admin dashboard</a></p>
        </div>
      `,
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n')
    });
  } catch (error) {
    console.error('Unable to send inquiry notification', error);
  }
}

export async function notifyOrderPaid(order) {
  try {
    const subject = `ASTRAEUS paid order ${order.id} · ${formatMoney(order.total_cents, order.currency)}`;
    const items = Array.isArray(order.items) ? order.items : [];
    const itemList = items.map((item) => `${item.ref || item.id || '-'} · ${item.name || '-'} · Qty ${item.quantity || 1}`).join('\n') || '-';
    const rows = [
      ['Order ID', order.id],
      ['Total', formatMoney(order.total_cents, order.currency)],
      ['Payment status', order.payment_status || '-'],
      ['Customer email', order.customer_email || '-'],
      ['Customer name', order.customer_name || '-'],
      ['Customer phone', order.customer_phone || '-'],
      ['Items', itemList],
      ['Created', order.created_at || new Date().toISOString()]
    ];
    const htmlRows = rows.map(([label, value]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#777;width:150px;">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escapeHtml(value)}</td>
      </tr>
    `).join('');

    await sendEmail({
      subject,
      replyTo: order.customer_email || undefined,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;">
          <h2 style="font-family:Georgia,serif;font-weight:400;">Paid ASTRAEUS order</h2>
          <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
          <p><a href="${getSiteUrl()}/admin.html">Open admin dashboard</a></p>
        </div>
      `,
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n')
    });
  } catch (error) {
    console.error('Unable to send order notification', error);
  }
}
