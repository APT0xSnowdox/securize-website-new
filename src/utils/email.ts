/**
 * Email utility for sending pentest form submissions
 * Sends formatted emails to nathaneal@novaize.com
 */

interface PentestFormData {
  firstName: string;
  lastName: string;
  company: string;
  companyEmail: string;
  billingAddress: string;
  companyBillingEmail: string;
  targetUrl: string;
  applicationName: string;
}

export async function sendPentestFormEmail(formData: PentestFormData) {
  try {
    const emailContent = formatPentestEmail(formData);
    
    // Send email using the API route
    const response = await fetch('/api/pentest/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'nathaneal@novaize.com',
        subject: `New Pentest Request from ${formData.company}`,
        html: emailContent,
        formData: formData,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to send email');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw error;
  }
}

function formatPentestEmail(formData: PentestFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
          color: white;
          padding: 30px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .content {
          background: #f9fafb;
          padding: 30px;
          border: 1px solid #e5e7eb;
          border-top: none;
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        .field:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .value {
          color: #4b5563;
          font-size: 16px;
          word-break: break-word;
        }
        .footer {
          background: #1f2937;
          color: #9ca3af;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          border-radius: 0 0 8px 8px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0; font-size: 24px;">New Pentest Request</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">A new penetration testing request has been submitted</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Contact Information</div>
          <div class="value">${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)}</div>
        </div>
        <div class="field">
          <div class="label">Company</div>
          <div class="value">${escapeHtml(formData.company)}</div>
        </div>
        <div class="field">
          <div class="label">Company Email</div>
          <div class="value"><a href="mailto:${escapeHtml(formData.companyEmail)}">${escapeHtml(formData.companyEmail)}</a></div>
        </div>
        <div class="field">
          <div class="label">Billing Address</div>
          <div class="value">${escapeHtml(formData.billingAddress).replace(/\n/g, '<br>')}</div>
        </div>
        <div class="field">
          <div class="label">Billing Email</div>
          <div class="value"><a href="mailto:${escapeHtml(formData.companyBillingEmail)}">${escapeHtml(formData.companyBillingEmail)}</a></div>
        </div>
        <div class="field">
          <div class="label">Target URL</div>
          <div class="value"><a href="${escapeHtml(formData.targetUrl)}" target="_blank">${escapeHtml(formData.targetUrl)}</a></div>
        </div>
        <div class="field">
          <div class="label">Application Name</div>
          <div class="value">${escapeHtml(formData.applicationName)}</div>
        </div>
      </div>
      <div class="footer">
        <p style="margin: 0;">This email was automatically generated from the SECURIZE pentest request form.</p>
        <p style="margin: 5px 0 0 0;">Submitted on ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

