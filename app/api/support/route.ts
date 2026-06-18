import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const supportEmail = 'info@jinxly.app';
const supportRecipients = [supportEmail, 'info@eraslanmedya.com'];
const subjectLabels: Record<string, string> = {
  support: 'Technical Support / Bug Report',
  monetization: 'Billing & Subscription Issues',
  feedback: 'Suggestions & Feedback',
  other: 'Other Inquiries',
};

function sanitize(value: unknown, maxLength: number) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Support mail service is not configured.' },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);

  const name = sanitize(body?.name, 120);
  const email = sanitize(body?.email, 160).toLowerCase();
  const subjectKey = sanitize(body?.subject, 40);
  const message = sanitize(body?.message, 4000);
  const subjectLabel = subjectLabels[subjectKey] ?? subjectLabels.other;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubjectLabel = escapeHtml(subjectLabel);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');
  const submittedAt = new Date().toISOString();
  const replyMailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: Jinxly Support - ${subjectLabel}`)}`;
  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: `Jinxly Support <${supportEmail}>`,
    to: supportRecipients,
    replyTo: email,
    subject: `[Jinxly Support] ${subjectLabel} - ${name}`,
    text: [
      'New Jinxly support request',
      '==========================',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${subjectLabel}`,
      `Received: ${submittedAt}`,
      `Delivered to: ${supportRecipients.join(', ')}`,
      '',
      'Message',
      '-------',
      message,
      '',
      `Reply directly to this email or contact ${email}.`,
    ].join('\n'),
    html: `
      <div style="margin:0;padding:0;background:#f8f4e6;font-family:Arial,Helvetica,sans-serif;color:#111111;">
        <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
          <div style="background:#000000;color:#ffffff;border:4px solid #000000;padding:18px 20px;">
            <div style="font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#ffe66d;margin-bottom:8px;">
              Jinxly Support
            </div>
            <h1 style="margin:0;font-size:26px;line-height:1.15;font-weight:900;text-transform:uppercase;">
              New support request
            </h1>
          </div>

          <div style="background:#ffffff;border-left:4px solid #000000;border-right:4px solid #000000;padding:20px;">
            <p style="margin:0 0 16px;font-size:15px;line-height:1.6;font-weight:700;">
              A visitor submitted a new message from the Jinxly support page. Use the reply button below or reply directly to this email.
            </p>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0 0 18px;">
              <tr>
                <td style="width:120px;border:2px solid #000000;background:#ffe66d;padding:10px;font-size:12px;font-weight:900;text-transform:uppercase;">Name</td>
                <td style="border:2px solid #000000;padding:10px;font-size:14px;font-weight:700;">${safeName}</td>
              </tr>
              <tr>
                <td style="width:120px;border:2px solid #000000;background:#4ecdc4;padding:10px;font-size:12px;font-weight:900;text-transform:uppercase;">Email</td>
                <td style="border:2px solid #000000;padding:10px;font-size:14px;font-weight:700;">
                  <a href="mailto:${safeEmail}" style="color:#000000;text-decoration:underline;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="width:120px;border:2px solid #000000;background:#ff9f1c;padding:10px;font-size:12px;font-weight:900;text-transform:uppercase;">Topic</td>
                <td style="border:2px solid #000000;padding:10px;font-size:14px;font-weight:700;">${safeSubjectLabel}</td>
              </tr>
              <tr>
                <td style="width:120px;border:2px solid #000000;background:#eeeeee;padding:10px;font-size:12px;font-weight:900;text-transform:uppercase;">Received</td>
                <td style="border:2px solid #000000;padding:10px;font-size:14px;font-weight:700;">${submittedAt}</td>
              </tr>
              <tr>
                <td style="width:120px;border:2px solid #000000;background:#eeeeee;padding:10px;font-size:12px;font-weight:900;text-transform:uppercase;">Delivered</td>
                <td style="border:2px solid #000000;padding:10px;font-size:14px;font-weight:700;">${supportRecipients.map(escapeHtml).join('<br />')}</td>
              </tr>
            </table>

            <div style="border:4px solid #000000;background:#f8f4e6;margin:0 0 18px;">
              <div style="background:#ff6b6b;border-bottom:4px solid #000000;padding:10px 12px;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:0.06em;">
                Message
              </div>
              <div style="padding:16px;font-size:15px;line-height:1.7;font-weight:700;white-space:normal;">
                ${safeMessage}
              </div>
            </div>

            <a href="${replyMailto}" style="display:inline-block;background:#000000;color:#ffffff;border:4px solid #000000;padding:12px 18px;font-size:13px;font-weight:900;text-transform:uppercase;text-decoration:none;">
              Reply to ${safeName}
            </a>
          </div>

          <div style="background:#ffffff;border:4px solid #000000;border-top:0;padding:14px 20px;color:#555555;font-size:12px;line-height:1.5;">
            This email was generated by the Jinxly landing support form. The sender email is set as reply-to.
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: 'Could not send your message right now. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
