import formidable from "formidable";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
require('dotenv').config({ path: '.env' });

// Set up the upload directory path
const uploadDir = path.join(process.cwd(), "uploads");

// Check if the upload directory exists; if not, create it
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for file uploads
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = uploadDir; // Set the upload directory
    form.keepExtensions = true; // Keep file extensions

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "File upload failed." });
      }

      const { name, email, mobile, address, comments } = fields;
      const resumeFile = files.resume[0];

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
            // port: process.env.SMTP_PORT,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: 'info@cnitsolution.com',
        subject: 'Career Enquiry',
        text: `New career form submission from ${name} (${email})\n\nMobile: ${mobile}\nAddress: ${address}\nComments: ${comments}`,
        attachments: [
          {
            filename: resumeFile.originalFilename,
            path: resumeFile.filepath,
            contentType: resumeFile.mimetype, // Set the mime type of the file
          },
        ],
      };

      // Send the email
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Form submitted successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending email." });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
