import React, { useState } from 'react';
import './ParentChild2.css';

const ParentChild2 = () => {
    const [activeSection, setActiveSection] = useState('SaaS Consulting');

    const services = [
        {
            title: 'SaaS Consulting',
            description: 'As a leading software development company, we not only assist you in your cloud-related requirements but also offer SaaS consulting services to help you discover the right approach, features, and technologies that align with your business goals and customer digital needs.',
            features: ['Technology Consulting', 'Proof of Concept Services', 'Market and Competitor Analysis', 'SaaS Architecture Design'],
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'SaaS Application Development',
            description: 'Turn your vision into a future-proof, secure, and scalable product via our SaaS application development services. Whether you need a visually appealing SaaS mobile app or an enterprise-grade SaaS solution, we can deliver everything based on your specific business requirements.',
            features: ['MVP Development', 'SaaS App Development', 'Testing and Deployment', 'SaaS UI/UX Services'],
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'SaaS Migration',
            description: 'We can help you migrate your existing application and related data to a secure cloud platform matching your business requirements. Migrate to the latest technology and enhance your software solutions performance through our SaaS migration services.',
      features: ['Technology Migration', 'Data Migration', 'Next-Gen Tech Integration', 'Cloud Migration Services'],
            image: 'https://via.placeholder.com/400x300'
        },
        {
            title: 'Modernization & Support Services',
            description: 'Modernize your existing IT infrastructure, deliver an exceptional customer experience, and increase the performance of your SaaS solutions with our modernization and support services. We can help you update your SaaS products with next-gen tech, modern features, and interactive designs.',
            features: ['Legacy Modernization Services', 'Software Re-engineering', 'Support and Maintenance', 'Testing and Product Validation'],
            image: 'https://via.placeholder.com/400x300'
        }
    ];

    return (
        <div className="parent-child2-container">
            <h1>The Services We Offer For Your SaaS Requirements</h1>
            <p className="subtitle">We can turn your ideas into a successful SaaS product via our business-focused SaaS development services.</p>

            <div className="service-tabs">
                {services.map(service => (
                    <button
                        key={service.title}
                        className={activeSection === service.title ? 'active' : ''}
                        onClick={() => setActiveSection(service.title)}
                    >
                        {service.title}
                    </button>
                ))}
            </div>

            {services.map(service => (
                <div
                    key={service.title}
                    className={`service-content ${activeSection === service.title ? 'active' : ''}`}
                >
                    <div className="service-info">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ul>
                            {service.features.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <button className="get-started">GET STARTED</button>
                    </div>
                    <div className="service-image">
                        <img src={service.image} alt={service.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ParentChild2;