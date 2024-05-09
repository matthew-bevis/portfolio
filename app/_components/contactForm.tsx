'use client'

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

// Define types for form data and errors
interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const theme = useTheme(); // This pulls theme settings from MUI

    // State for form data and errors
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    // Handle input field changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit function for form submission
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent default form submission

        // Convert form data to a plain object for validation and submission
        const formDataObject: Record<string, string> = {};
        new FormData(event.currentTarget).forEach((value, key) => {
            formDataObject[key] = value.toString();
        });

        // Basic validation checks for required fields
        const newErrors: FormErrors = {};
        if (!formDataObject.name) newErrors.name = "Name is required.";
        if (!formDataObject.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formDataObject.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!formDataObject.message) newErrors.message = "Message is required.";

        // Update errors state and return early if errors exist
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            alert("Please fix the errors before submitting.");
            return;
        }

        // Proceed with sending data to the server-side API endpoint
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            });

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }

            // Process the response data
            const data = await response.json();
            console.log(data.message); // Log the success message to console
            alert('Message successfully sent!'); // Show a success alert

        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    }

    // CSS styles using MUI theme
    const styles = {
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            maxWidth: '500px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#424242',
            opacity: '.85',
        },
        inputField: {
            marginBottom: '10px',
            padding: '0px',
            display: 'grid',
        },
        label: {
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
        },
        errorText: {
            color: 'red',
            fontSize: '14px',
        }
    };

    // Form rendering
    return (
        <form onSubmit={handleSubmit} style={styles.formContainer as any}>
            <div style={styles.inputField}>
                <label style={styles.label}>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
                {errors.name && <p style={styles.errorText}>{errors.name}</p>}
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
                {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} style={styles.input}></textarea>
                {errors.message && <p style={styles.errorText}>{errors.message}</p>}
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}

export default ContactForm;

