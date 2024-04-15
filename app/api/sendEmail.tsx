import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const emailHandler = async (req: VercelRequest, res: VercelResponse) => {
    if (req.method === 'POST') {
        // Your logic here
        res.status(200).json({ message: 'Email sent successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

    const { name, email, company, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE, // e.g., 'Gmail', 'Outlook'
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'matthew-bevis@comcast.net',
        subject: 'New message from your website!',
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company}</p><p><strong>Message:</strong> ${message}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Failed to send email' });
    }
};

export default emailHandler;