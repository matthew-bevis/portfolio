import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
import mailchimpTransactional from '@mailchimp/mailchimp_transactional';

dotenv.config();

const mailchimpClient = mailchimpTransactional({ apiKey: process.env.API_KEY });

export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, company, message } = req.body;

    const messageContent = {
        from_email: process.env.EMAIL_USER,
        subject: "New message from your website!",
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
        to: [{ email: 'matthew-bevis@comcast.net', type: 'to' }]
    };

    try {
        const response = await mailchimpClient.messages.send({ message: messageContent });
        res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email', details: error });
    }
}
