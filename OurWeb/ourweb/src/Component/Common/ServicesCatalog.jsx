// ServicesCatalog.jsx
import React from 'react';
import './ServicesCatalog.css';
import ScrollTrigger from '../Common/ScrollTrigger';

const ServicesCatalog = ({ title, subtitle, sections, type = 'ai' }) => {
    return (
        <div className={`services-catalog ${type}-services-catalog`}>
            <div className="services-catalog-header">
                <h2 className="services-catalog-title">{title}</h2>
                <p className="services-catalog-subtitle">{subtitle}</p>
            </div>

            <div className="services-catalog-sections">
                {sections.map((section, index) => (
                    <ScrollTrigger key={index} threshold={0.1}>
                        <div className={`services-catalog-section ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <div className="services-section-content">
                                <h3 className="services-section-heading">{section.heading}</h3>
                                <p className="services-section-description">{section.description}</p>
                                <div className="services-section-buttons">
                                    <button className="services-primary-button">{section.primaryButtonText}</button>
                                    <button className="services-secondary-button">{section.secondaryButtonText}</button>
                                </div>
                            </div>
                            <div className="services-section-image">
                                <img src={section.image} alt={section.heading} />
                            </div>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>
        </div>
    );
};

export default ServicesCatalog;