import React from 'react';
import './AiServicesCatalog.css';

const AiServicesCatalog = ({ title, subtitle, sections }) => {
    return (
        <div className="ai-services-catalog">
            <div className="ai-catalog-header">
                <h2 className="ai-catalog-title">{title}</h2>
                <p className="ai-catalog-subtitle">{subtitle}</p>
            </div>

            {sections.map((section, index) => (
                <div key={index} className={`ai-catalog-section ${index % 2 === 0 ? 'ai-even' : 'ai-odd'}`}>
                    <div className="ai-catalog-content">
                        <h3 className="ai-section-title">{section.heading}</h3>
                        <p className="ai-section-description">{section.description}</p>
                        <div className="ai-catalog-buttons">
                            <button className="ai-primary-btn">{section.primaryButtonText}</button>
                            <button className="ai-secondary-btn">{section.secondaryButtonText}</button>
                        </div>
                    </div>
                    <div className="ai-catalog-image">
                        <img src={section.image} alt={section.heading} className="ai-service-img" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AiServicesCatalog;