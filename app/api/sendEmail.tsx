// pages/api/sendEmail.js

import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, company, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'matthew-bevis@comcast.net',
        subject: 'New message from your website!',
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' });
    }
}
