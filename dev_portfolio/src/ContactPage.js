import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);

        const serviceId = 'service_dev_page';
        const templateId = 'template_ekzgypn';
        const userId = 'KMkv83-493_Sf5RJT';

        emailjs.send(serviceId, templateId, {
            name: formData.name,
            email: formData.email,
            message: formData.message
        }, userId)
        .then(() => {
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('Failed to send:', error);
            setErrors({ ...errors, form: 'Failed to send. Please try again later.' });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <h1 className="contact-heading">Send me an email</h1>
                
                {submitSuccess && (
                    <div className="contact-success-message">
                        Message sent successfully! I'll reply soon.
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
                    
                    {errors.form && <div className="contact-form-error">{errors.form}</div>}
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="contact-button"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
}