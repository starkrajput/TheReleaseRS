// BusinessBenefits.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import './BusinessBenefits.css';
import ScrollTrigger from '../Common/ScrollTrigger';

const BusinessBenefits = ({ title, subtitle, benefits, type = 'ai' }) => {
    return (
        <div className={`business-benefits ${type}-business-benefits`}>
            <div className="business-benefits-header">
                <h2 className="business-benefits-title">{title}</h2>
                <p className="business-benefits-subtitle">{subtitle}</p>
            </div>

            <div className="business-benefits-grid">
                {benefits.map((benefit, index) => (
                    <ScrollTrigger key={index} threshold={0.1}>
                        <div className="business-benefit-card">
                            <div className="benefit-icon">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>

            <div className="business-benefits-cta">
                <button className="business-benefits-button">EXPLORE ALL BENEFITS</button>
            </div>
        </div>
    );
};

export default BusinessBenefits;