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

    function validateForm(formData: { [key: string]: any }): FormErrors {
        let errors: FormErrors = {};
    
        // Check each field and populate the errors object as needed
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.email) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formData.company) errors.company = "Company is required.";
        if (!formData.message) errors.message = "Message is required.";
    
        return errors;
    }

    async function handleSubmit(event: any) {
        event.preventDefault();

        // Create a FormData object with the form values
        const formData = new FormData(event.target);
    
        // Convert FormData into a plain object for easier validation
        const formObject: { [key: string]: any } = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
    
        // Validate the form data
        const errors = validateForm(formObject);
        setErrors(errors);
    
        // If any errors are found, don't proceed to the API request
        if (Object.keys(errors).length > 0) {
            alert("Please correct the errors in the form before submitting.");
            return;
        }
    
        try {
            // Send a POST request with JSON-encoded form data
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            });
    
            // Check if the response is not OK and throw an error
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
    
            // Extract the message returned from the API
            const responseData = await response.json();
            console.log(responseData.message);
    
            // Show a success alert if the message was sent
            alert('Message successfully sent!');
        } catch (err) {
            console.error(err);
            alert('Error, please try resubmitting the form.');
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
