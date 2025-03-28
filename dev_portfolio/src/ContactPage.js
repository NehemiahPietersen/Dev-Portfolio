import React, { useState } from 'react';
import './styles/Contact.css';

export function ContactPage () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        valid = false;
        }

        if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
        } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        valid = false;
        }

        if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
        valid = false;
        } else if (formData.message.length < 10) {
        newErrors.message = 'Message should be at least 10 characters';
        valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
            name: '',
            email: '',
            message: ''
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
            setSubmitSuccess(false);
            }, 5000);
        }, 1500);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-heading">Send me an email</h1>
                
                {submitSuccess && (
                <div className="contact-success-message">
                    Thank you for your message! I'll get back to you soon.
                </div>
                )}
        
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
            <label htmlFor="name" className="contact-label">Name*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
            />
            {errors.name && <span className="contact-error">{errors.name}</span>}
            </div>
            
            <div className="contact-form-group">
            <label htmlFor="email" className="contact-label">Email*</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
            />
            {errors.email && <span className="contact-error">{errors.email}</span>}
            </div>
            
            <div className="contact-form-group">
            <label htmlFor="message" className="contact-label">Message*</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="contact-textarea"
            />
            {errors.message && <span className="contact-error">{errors.message}</span>}
            </div>
            
            <button
            type="submit"
            disabled={isSubmitting}
            className={isSubmitting ? "contact-button contact-button-disabled" : "contact-button"}
            >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
        </div>
        </div>
    );
};
