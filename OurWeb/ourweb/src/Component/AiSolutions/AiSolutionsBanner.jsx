import React, { useEffect, useState } from 'react';
import './AiSolutionsBanner.css';
import emailjs from 'emailjs-com';

const AiSolutionsBanner = ({ title, subtitle, buttonText, inquiryTitle, inputPlaceholders, captchaQuestion, backgroundImage }) => {
    const [formStatus, setFormStatus] = useState({
        message: '',
        isError: false,
        isSubmitting: false
    });

    useEffect(() => {
        emailjs.init("aufjVn4Fu2VdkI5wm"); // Replace with your actual public key
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormStatus({ message: '', isError: false, isSubmitting: true });

        const form = event.target;

        try {
            const result = await emailjs.sendForm(
                'service_4pauy7q', // Replace with your EmailJS service ID
                'template_7g9xdac', // Replace with your EmailJS template ID
                form,
                'aufjVn4Fu2VdkI5wm' // Replace with your public key again
            );

            if (result.status === 200) {
                setFormStatus({
                    message: 'Thank you ! Will reconnect Soon',
                    isError: false,
                    isSubmitting: false
                });
                form.reset();
            } else {
                setFormStatus({
                    message: 'Failed to send message. Please try again.',
                    isError: true,
                    isSubmitting: false
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setFormStatus({
                message: `Error sending message: ${error.text || 'Unknown error'}`,
                isError: true,
                isSubmitting: false
            });
        }
    };

    return (
        <div className="ai-solutions-banner" style={{ backgroundImage: `url(${backgroundImage})` }}> 
            <div className="ai-banner-content">
                <div className="ai-banner-text">
                    <h1 className="ai-banner-title">{title}</h1>
                    <p className="ai-banner-subtitle">{subtitle}</p>
                    <button className="ai-explore-button">{buttonText}</button>
                </div>

                <div className="ai-banner-form">
                    <h2 className="ai-form-title">{inquiryTitle}</h2>
                    <form className="ai-inquiry-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder={inputPlaceholders.name} className="ai-form-input" required />
                        <input type="email" name="email" placeholder={inputPlaceholders.email} className="ai-form-input" required />
                        <input type="tel" name="phone" placeholder={inputPlaceholders.phone} className="ai-form-input" />
                        <textarea name="message" placeholder={inputPlaceholders.message} className="ai-form-textarea" required></textarea>
                        <div className="ai-captcha">
                            <span className="ai-captcha-question">{captchaQuestion}</span>
                            <input type="text" name="captcha" className="ai-captcha-input" required />
                        </div>
                        {formStatus.message && (
                            <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                                {formStatus.message}
                            </div>
                        )}
                        <button type="submit" className="ai-submit-btn" disabled={formStatus.isSubmitting}>
                            {formStatus.isSubmitting ? 'Sending...' : 'SUBMIT INQUIRY'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AiSolutionsBanner;
