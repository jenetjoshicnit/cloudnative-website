import nodemailer from 'nodemailer';
import { Formidable } from 'formidable';
import fs from 'fs';
require('dotenv').config({ path: '.env' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new Formidable({ multiples: true, keepExtensions: true }); 

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Formidable error:', err);
        return res.status(500).json({ error: 'Error processing form' });
      }

      const { name, email, mobile, address, comments } = fields;
      const resume = files.resume;

      if (!name || !email || !mobile || !address || !comments) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: false, // true for port 465 (SSL), false for other ports (TLS)
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: 'info@cnitsolution.com',
        subject: 'New Job Application',
        text: `
          Name: ${name}
          Email: ${email}
          Mobile: ${mobile}
          Address: ${address}
          Comments: ${comments}
        `,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Comments:</strong> ${comments}</p>
        `,
        attachments: resume
          ? [
              {
                filename: resume.originalFilename,
                path: resume.filepath,
                contentType: resume.mimetype,
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: `Failed to send email: ${error.message}` });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

