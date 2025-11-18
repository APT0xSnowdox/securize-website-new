import nodemailer from 'nodemailer';

const DEFAULT_TO = 'nathaneal@novaize.com';

async function createTransporter() {
  if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    return {
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      }),
      previewAccount: null,
    };
  }

  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  return {
    transporter,
    previewAccount: testAccount,
  };
}

export async function sendEmail({ to = DEFAULT_TO, subject, html, replyTo, metadata }) {
  if (!subject || !html) {
    throw new Error('Subject and HTML content are required');
  }

  const { transporter, previewAccount } = await createTransporter();

  if (metadata) {
    console.log('=== EMAIL METADATA ===');
    console.log(JSON.stringify(metadata, null, 2));
    console.log('======================');
  }

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER || '"SECURIZE Pentest" <no-reply@securize.test>',
    to,
    subject,
    html,
    replyTo,
  });

  const previewUrl = previewAccount ? nodemailer.getTestMessageUrl(info) : undefined;

  if (previewUrl) {
    console.log('📬 Ethereal email preview available at:', previewUrl);
  }

  return {
    messageId: info.messageId,
    previewUrl,
    testAccount: previewAccount
      ? { user: previewAccount.user, pass: previewAccount.pass }
      : undefined,
  };
}

