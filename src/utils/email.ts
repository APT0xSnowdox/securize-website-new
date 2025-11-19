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
    const adminEmailContent = formatPentestEmail(formData);
    const confirmationEmailContent = formatConfirmationEmail(formData);

    // Send email using the API route
    const response = await fetch("/api/pentest/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "nathaneal@novaize.com",
        subject: `New Pentest Request from ${formData.company}`,
        html: adminEmailContent,
        confirmationEmail: {
          to: formData.companyEmail,
          subject: "Pentest Request Received - SECURIZE",
          html: confirmationEmailContent,
        },
        formData: formData,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to send email");
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
          background: linear-gradient(135deg, #00f5ff 0%, #009dff 100%);
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
          <div class="value">${escapeHtml(formData.firstName)} ${escapeHtml(
    formData.lastName
  )}</div>
        </div>
        <div class="field">
          <div class="label">Company</div>
          <div class="value">${escapeHtml(formData.company)}</div>
        </div>
        <div class="field">
          <div class="label">Company Email</div>
          <div class="value"><a href="mailto:${escapeHtml(
            formData.companyEmail
          )}">${escapeHtml(formData.companyEmail)}</a></div>
        </div>
        <div class="field">
          <div class="label">Billing Address</div>
          <div class="value">${escapeHtml(formData.billingAddress).replace(
            /\n/g,
            "<br>"
          )}</div>
        </div>
        <div class="field">
          <div class="label">Billing Email</div>
          <div class="value"><a href="mailto:${escapeHtml(
            formData.companyBillingEmail
          )}">${escapeHtml(formData.companyBillingEmail)}</a></div>
        </div>
        <div class="field">
          <div class="label">Target URL</div>
          <div class="value"><a href="${escapeHtml(
            formData.targetUrl
          )}" target="_blank">${escapeHtml(formData.targetUrl)}</a></div>
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

function formatConfirmationEmail(formData: PentestFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .header {
          background: #272727;
          padding: 40px 30px;
          text-align: center;
        }
        .logo {
          max-width: 180px;
          height: auto;
          margin-bottom: 20px;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          color: #1f2937;
          margin-bottom: 20px;
        }
        .message {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .info-box {
          background-color: #f0f9ff;
          border-left: 4px solid #009dff;
          padding: 20px;
          margin: 30px 0;
          border-radius: 4px;
        }
        .info-box h3 {
          margin: 0 0 15px 0;
          color: #1f2937;
          font-size: 16px;
        }
        .info-item {
          margin: 10px 0;
          color: #4b5563;
        }
        .info-label {
          font-weight: 600;
          color: #1f2937;
        }
        .cta-section {
          text-align: center;
          margin: 30px 0;
        }
        .footer {
          background-color: #1f2937;
          color: #9ca3af;
          padding: 30px;
          text-align: center;
        }
        .footer-logo {
          max-width: 150px;
          height: auto;
          margin-bottom: 20px;
          opacity: 0.8;
        }
        .company-info {
          font-size: 14px;
          line-height: 1.8;
          margin: 15px 0;
        }
        .company-name {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          color: #00f5ff;
          text-decoration: none;
          margin: 0 10px;
        }
        .divider {
          border-top: 1px solid #374151;
          margin: 20px 0;
        }
        .copyright {
          font-size: 12px;
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <img src="https://novaize.com/com.png" alt="NOVAIZE Logo" class="logo" />
          <h1>Pentest Request Confirmation</h1>
        </div>
        
        <div class="content">
          <div class="greeting">
            Dear ${escapeHtml(formData.firstName)} ${escapeHtml(
    formData.lastName
  )},
          </div>
          
          <div class="message">
            Thank you for reaching out to <b> Novaize </b> for your penetration testing needs. We have successfully received your request and our security experts will review your requirements carefully.
          </div>
          
          <div class="info-box">
            <h3>📋 Your Submission Details</h3>
            <div class="info-item">
              <span class="info-label">Company:</span> ${escapeHtml(
                formData.company
              )}
            </div>
            <div class="info-item">
              <span class="info-label">Application:</span> ${escapeHtml(
                formData.applicationName
              )}
            </div>
            <div class="info-item">
              <span class="info-label">Target URL:</span> ${escapeHtml(
                formData.targetUrl
              )}
            </div>
            <div class="info-item">
              <span class="info-label">Submitted:</span> ${new Date().toLocaleString(
                "en-US",
                { dateStyle: "long", timeStyle: "short" }
              )}
            </div>
          </div>
          
          <div class="message">
            <strong>What happens next?</strong>
          </div>
          <div class="message">
            • Our team will review your request within 24-48 hours<br>
            • You will receive a detailed proposal and timeline<br>
            • We'll schedule a consultation call to discuss your specific requirements<br>
            • A dedicated security analyst will be assigned to your project
          </div>
          
          <div class="message">
            If you have any immediate questions or need to provide additional information, please don't hesitate to reply to this email or contact us directly.
          </div>
          
          <div class="message">
            Best regards,<br>
            <strong>The Novaize Security Team</strong>
          </div>
        </div>
        
        <div class="footer">
          <img src="https://novaize.com/com.png" alt="Novaize" class="footer-logo" />
          
          <div class="company-name">Novaize (Pvt) Ltd</div>
          
          <div class="company-info">
            Professional Penetration Testing & Cybersecurity Services<br>
            Email: info@novaize.com<br>
            Web: novaize.com
          </div>
          
          <div class="social-links">
            <a href="https://linkedin.com/company/novaize-intel">LinkedIn</a> |
            <a href="#">Twitter</a> |
            
          </div>
          
          <div class="divider"></div>
          
          <div class="copyright">
            © ${new Date().getFullYear()} Novaize (PVT) Ltd. All rights reserved.<br>
            This email was sent to ${escapeHtml(
              formData.companyEmail
            )} regarding your pentest request.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
