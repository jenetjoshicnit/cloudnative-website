import nodemailer from 'nodemailer';
require('dotenv').config({ path: '.env' });

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { full_name, email, subject, message, phone } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            // port: process.env.SMTP_PORT,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: false, // true for 465 port (SSL), false for other ports (TLS)
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'info@cnitsolution.com',
            subject: subject,
            text: `Name: ${full_name}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`,
            html: `<p><strong>Name:</strong> ${full_name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
