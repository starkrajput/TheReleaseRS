// SolutionsBanner.jsx
import React from 'react';
import '../Common/SolutionsBanner.css';

const SolutionsBanner = ({ title, subtitle, buttonText, inquiryTitle, inputPlaceholders, captchaQuestion, type = 'ai' }) => {
    return (
        <div className={`solutions-banner ${type}-solutions-banner`}>
            <div className="solutions-banner-content">
                {/* Left Side: Text Content */}
                <div className="solutions-banner-text">
                    <h1 className="solutions-banner-title">{title}</h1>
                    <p className="solutions-banner-subtitle">{subtitle}</p>
                    <button className="solutions-explore-button">{buttonText}</button>
                </div>

                {/* Right Side: Contact Form */}
                <div className="solutions-banner-form">
                    <h2 className="solutions-form-title">{inquiryTitle}</h2>
                    <form className="solutions-inquiry-form">
                        <input type="text" placeholder={inputPlaceholders.name} className="solutions-form-input" />
                        <input type="email" placeholder={inputPlaceholders.email} className="solutions-form-input" />
                        <input type="tel" placeholder={inputPlaceholders.phone} className="solutions-form-input" />
                        <textarea placeholder={inputPlaceholders.message} className="solutions-form-textarea"></textarea>
                        <div className="solutions-captcha">
                            <span className="solutions-captcha-question">{captchaQuestion}</span>
                            <input type="text" className="solutions-captcha-input" />
                        </div>
                        <button type="submit" className="solutions-submit-btn">SUBMIT INQUIRY</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SolutionsBanner;