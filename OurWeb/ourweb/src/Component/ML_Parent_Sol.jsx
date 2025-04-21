import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './ML_Parent_Sol.css';
import A1 from '../assets/Vedio/A1.jpg';

const services = [
    { title: 'Consulting', color: '#4A90E2' },
    { title: 'Model Development', color: '#50E3C2' },
    { title: 'Training', color: '#F5A623' },
    { title: 'MLOps Consulting', color: '#7ED321' },
    { title: 'Industry ML Solutions', color: '#BD10E0' },
    { title: 'Integration', color: '#9013FE' },
    { title: 'Advanced Innovations', color: '#4A4A4A' }
];

const offerings = [
    {
        title: 'Consulting and Strategy Development',
        description: 'Leverage our expertise to create a robust machine learning strategy tailored to your business goals. At Matellio, we provide comprehensive ML consulting services to help you harness the full potential of ML technologies, from ideation to implementation.',
        features: [
            'ML strategy consulting and roadmap development',
            'Feasibility studies and business case analysis',
            'Use case identification and prioritization',
            'ROI estimation and risk assessment'
        ],
        image: A1
    },
    {
        title: 'Custom ML Model Development',
        description: 'Transform your data into actionable insights with our custom ML model development services. Our team designs and builds bespoke machine learning models that address your unique business challenges and drive innovation.',
        features: [
            'Predictive analytics for future trend forecasting',
            'Classification models for data categorization',
            'Regression models for continuous outcome prediction',
            'Clustering models for data grouping based on similarities'
        ],
        image: A1
    },
    {
        title: 'Consulting and Strategy Development',
        description: 'Leverage our expertise to create a robust machine learning strategy tailored to your business goals. At Matellio, we provide comprehensive ML consulting services to help you harness the full potential of ML technologies, from ideation to implementation.',
        features: [
            'ML strategy consulting and roadmap development',
            'Feasibility studies and business case analysis',
            'Use case identification and prioritization',
            'ROI estimation and risk assessment'
        ],
        image: A1
    },
    {
        title: 'Custom ML Model Development',
        description: 'Transform your data into actionable insights with our custom ML model development services. Our team designs and builds bespoke machine learning models that address your unique business challenges and drive innovation.',
        features: [
            'Predictive analytics for future trend forecasting',
            'Classification models for data categorization',
            'Regression models for continuous outcome prediction',
            'Clustering models for data grouping based on similarities'
        ],
        image: A1
    },
    {
        title: 'Consulting and Strategy Development',
        description: 'Leverage our expertise to create a robust machine learning strategy tailored to your business goals. At Matellio, we provide comprehensive ML consulting services to help you harness the full potential of ML technologies, from ideation to implementation.',
        features: [
            'ML strategy consulting and roadmap development',
            'Feasibility studies and business case analysis',
            'Use case identification and prioritization',
            'ROI estimation and risk assessment'
        ],
        image: A1
    },
    {
        title: 'Custom ML Model Development',
        description: 'Transform your data into actionable insights with our custom ML model development services. Our team designs and builds bespoke machine learning models that address your unique business challenges and drive innovation.',
        features: [
            'Predictive analytics for future trend forecasting',
            'Classification models for data categorization',
            'Regression models for continuous outcome prediction',
            'Clustering models for data grouping based on similarities'
        ],
        image: A1
    }
];

const ParentAISol = () => {
    const [selectedOffering, setSelectedOffering] = useState(0);

    return (
        <div className="parent-ai-sol">
            <h1>What Do We Offer?</h1>
            <p className="subtitle">Explore our end-to-end machine learning development services for every stage of your project</p>

            <div className="services">
                {services.map((service, index) => (
                    <div key={index} className="service" style={{ backgroundColor: service.color }}>
                        {service.title}
                    </div>
                ))}
            </div>

            <div className="offerings">
                {offerings.map((offering, index) => (
                    <div
                        key={index}
                        className={`offering ${selectedOffering === index ? 'selected' : ''}`}
                        onClick={() => setSelectedOffering(index)}
                        style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }} // Alternate layout
                    >
                        <div className="offering-content" style={{ flex: 1 }}>
                            <h2>{offering.title}</h2>
                            <p>{offering.description}</p>
                            <ul>
                                {offering.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>
                                        <ChevronRight size={16} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="get-started">GET STARTED</button>
                        </div>
                        <div className="offering-image" style={{ flex: 1 }}>
                            <img src={offering.image} alt={offering.title} style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParentAISol;
