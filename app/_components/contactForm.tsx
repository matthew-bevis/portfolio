'use client'

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';

// Define types for the form data and errors
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
    const theme = useTheme(); // This now pulls theme settings from MUI

    // State for form data
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    // State for error handling
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        let tempErrors: FormErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
        }
        if (!formData.company) tempErrors.company = "Company is required.";
        if (!formData.message) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const formData = new FormData(e.target);
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    body: formData,
                });
                if (!response.ok) {
                    const data = await response.json();
                    console.log(data)
                    throw new Error('Failed to send email');
                    
                }
                const data = await response.json();
                console.log(data)
                alert('Form is valid and submitted, check your email for data.');
            } catch (error: any) {
                console.error('Error:', error);
                alert(`Error: ${error.message}`);
            }
        }
    };

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
                {errors.company && <p style={styles.errorText}>{errors.company}</p>}
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
