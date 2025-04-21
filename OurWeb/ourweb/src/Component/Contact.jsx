/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formStatus, setFormStatus] = useState({
        message: '',
        isError: false,
        isSubmitting: false
    });

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init("aufjVn4Fu2VdkI5wm"); // Replace with your actual public key
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormStatus({ message: '', isError: false, isSubmitting: true });

        const form = event.target;

        try {
            // Send the email using EmailJS
            const result = await emailjs.sendForm(
                'service_4pauy7q', // Replace with your EmailJS service ID
                'template_7g9xdac', // Replace with your EmailJS template ID
                form,
                'aufjVn4Fu2VdkI5wm' // Replace with your public key again
            );

            if (result.status === 200) {
                setFormStatus({
                    message: 'Message sent successfully!',
                    isError: false,
                    isSubmitting: false
                });
                form.reset(); // Clear the form after submission
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
        <div>
            <div id="contact-container" className="containerD">
                {/* Left Side: Contact Us Form */}
                <div className="form-container">
                    <h2 className="heading">Contact Us</h2>
                    <p className="paragraph">
                        RSV Technologies is dedicated to providing high-caliber offshore software product engineering services overseen by a local management team with a proven record of success.
                    </p>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                        </div>
                        <div className="input-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                            <input type="tel" id="phone" name="phone" placeholder="Phone" />
                        </div>
                        <textarea id="message" name="message" placeholder="Message" required></textarea>

                        {formStatus.message && (
                            <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <button type="submit" disabled={formStatus.isSubmitting}>
                            {formStatus.isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>

                {/* Right Side: Additional Contact Information */}
                <div
                    className="info-container"
                    style={{
                        background: "linear-gradient(90deg, rgba(45, 45, 85, 1) 0%, rgba(2, 0, 25, 1) 100%)",color:"white"
                    }}
                >    <h2 className="heading">Don't Want To Fill a Form?</h2>
                    <p className="paragraph">Email Us</p>
                    <h3 className="heading">Sales Inquiry</h3>
                    <a href="mailto:sales@rsvtechnologies.com" className="link">sales@rsvtechnologies.com</a>
                    <h3 className="heading">Career</h3>
                    <a href="mailto:hiring@rsvtechnologies.com" className="link">hiring@rsvtechnologies.com</a>
                    <p>
                        <a href="/careers" className="button">See Current Openings</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Contact;