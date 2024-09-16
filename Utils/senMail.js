// Utils/senMail.js

import nodemailer from 'nodemailer';

// Define the sendEmail function
export const sendEmail = async (options) => {
  // Create a transporter using your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.PASSMAIL,  // Your email address
      pass: process.env.PASSKEY    // Your Google app password (not regular email password)
    }
  });

  // Define the email options
  const mailOptions = {
    from: process.env.PASSMAIL,  // Your email address
    to: options.to,              // Recipient email address
    subject: options.subject,    // Email subject
    text: options.text           // Email content
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};
