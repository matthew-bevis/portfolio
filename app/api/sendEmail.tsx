import axios from 'axios';
import dotenv from 'dotenv'


dotenv.config();
// Replace these with your actual Mailchimp API key, server prefix, and list ID.


export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, email, company, message } = req.body;

        // Prepare the payload for Mailchimp
        const subscriberData = {
            email_address: email,
            status: 'subscribed', // Adjust according to your Mailchimp list settings
            merge_fields: {
                FNAME: name,
                COMPANY: company,
                MESSAGE: message,
            },
        };

        try {
            const url = `https://${process.env.REGION}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/`;
            const response = await axios.post(url, subscriberData, {
                headers: {
                    'Authorization': `apikey ${process.env.API_KEY}`,
                    'Content-Type': 'application/json',
                }
            });

            // Handle response from Mailchimp
            if (response.status === 200) {
                res.status(200).json({ message: 'Email sent successfully', data: response.data });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error: any) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

