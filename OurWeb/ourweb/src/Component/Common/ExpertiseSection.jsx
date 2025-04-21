// ExpertiseSection.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import './ExpertiseSection.css';
import ScrollTrigger from '../Common/ScrollTrigger';

const ExpertiseSection = ({ title, subtitle, expertiseItems, inputPlaceholders, type = 'ai' }) => {
    return (
        <div className={`expertise-section ${type}-expertise-section`}>
            <div className="expertise-header">
                <h2 className="expertise-title">{title}</h2>
                <p className="expertise-subtitle">{subtitle}</p>
            </div>

            <div className="expertise-content">
                <div className="expertise-reasons">
                    {expertiseItems.map((item, index) => (
                        <ScrollTrigger key={index} threshold={0.1}>
                            <div className="expertise-reason-card">
                                <div className="reason-icon">
                                    <CheckCircle size={24} />
                                </div>
                                <div className="reason-content">
                                    <h3 className="reason-title">{item.title}</h3>
                                    <p className="reason-description">{item.description}</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    ))}
                </div>

                <div className="expertise-inquiry">
                    <h3 className="inquiry-title">Get in Touch</h3>
                    <form className="expertise-form">
                        <input type="text" placeholder={inputPlaceholders.name} className="expertise-form-input" />
                        <input type="email" placeholder={inputPlaceholders.email} className="expertise-form-input" />
                        <input type="tel" placeholder={inputPlaceholders.phone} className="expertise-form-input" />
                        <textarea placeholder={inputPlaceholders.message} className="expertise-form-textarea"></textarea>
                        <button type="submit" className="expertise-submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;