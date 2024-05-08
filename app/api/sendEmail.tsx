import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Create the POST function for handling form submissions
export async function POST(request: any) {
    // Load credentials from environment variables
    const user = process.env.EMAIL_USER;
    const pw = process.env.EMAIL_PASS;
    const service = process.env.EMAIL_SERVICE;
    const myEmail = process.env.MY_EMAIL;

    // Check that all environment variables are present
    if (!user || !pw || !myEmail) {
        return NextResponse.json({ message: "Missing required environment variables." }, { status: 500 });
    }

    // Parse the incoming form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create the Nodemailer transporter object
    const transporter = nodemailer.createTransport({
        service,
        auth: {
            user,
            pass: pw,
        },
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

    // Try sending the email
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Success: email was sent." });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ message: "Could not send the message." }, { status: 500 });
    }
}