import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export async function POST(request: Request) {
    // Load credentials from environment variables
    const user = process.env.EMAIL_USER;
    const pw = process.env.EMAIL_PASS;
    const service = process.env.EMAIL_SERVICE;
    const myEmail = process.env.MY_EMAIL;

    // Verify all environment variables are available
    if (!user || !pw || !service || !myEmail) {
        console.error('Missing environment variables:', { user, pw, service, myEmail });
        return NextResponse.json({ message: "Missing required environment variables." }, { status: 500 });
    }

    try {
        // Parse JSON data from the request body
        const formData = await request.json();
        const { name, email, company, message } = formData;

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: "Outlook365",
            host: service,
            port: 587,
            auth: {
                user: user,
                pass: pw,
            },
            tls: {
                ciphers:'SSLv3',
                rejectUnauthorized: false
            }
        });
        
        // Construct the email content
        const mailOptions = {
            from: user,
            to: myEmail, // Replace this with your desired recipient address
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Success: email was sent." });

    } catch (error: any) {
        console.error('Error while sending the email:', error);
        return NextResponse.json({ message: "Could not send the message.", error: error.message }, { status: 500 });
    }
}