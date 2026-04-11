const nodemailer = require('nodemailer');
const config = require('../src/config/config.js');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.SMTP_PORT,
    secure: config.SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASS,
    },
  });
};

const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Tertiary Knit" <${config.SMTP_FROM}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};

const verifyEmailConnection = async () => {
  const transporter = createTransporter();
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('SMTP Connection Error:', error);
    return false;
  }
};

module.exports = { sendEmail, verifyEmailConnection };
