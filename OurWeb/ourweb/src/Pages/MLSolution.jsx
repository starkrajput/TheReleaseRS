// MLSolutions.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import SolutionsBanner from '../Component/Common/SolutionsBanner';
import ServicesCatalog from '../Component/Common/ServicesCatalog';
import BusinessBenefits from '../Component/Common/BusinessBenefits';
import CaseStudy from '../Component/Common/CaseStudy';
import GrowthStats from '../Component/Common/GrowthStats';
import ExpertiseSection from '../Component/Common/ExpertiseSection';

// Import images
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg';
import S5 from '../assets/Vedio/P2.jpg';
import S6 from '../assets/Vedio/P3.jpg';
import S7 from '../assets/Vedio/P4.jpg';
import A1 from '../assets/Vedio/A1.jpg';

function MLSolutions() {
    // Form placeholders for inquiry forms
    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?',
    };

    // Catalog sections data
    const catalogSections = [
        {
            heading: 'Predictive Analytics & Forecasting',
            description: 'Leverage our predictive analytics solutions to forecast future trends, customer behavior, and business outcomes. Our ML models analyze historical data to provide actionable insights that drive strategic decision-making.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Natural Language Processing',
            description: 'Our NLP solutions enable computers to understand, interpret, and generate human language. From sentiment analysis to chatbots and language translation, we build systems that can process and analyze text with human-like understanding.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Computer Vision Solutions',
            description: 'Transform how your systems interpret visual information with our computer vision solutions. We develop applications that can identify objects, recognize faces, analyze scenes, and extract meaningful information from images and videos.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Enhanced Decision Making',
            description: 'ML algorithms analyze vast amounts of data to provide insights that help businesses make more informed decisions, reducing guesswork and improving outcomes.'
        },
        {
            title: 'Increased Operational Efficiency',
            description: 'Automate routine tasks and optimize processes with ML solutions that learn and improve over time, freeing up valuable human resources for more strategic work.'
        },
        {
            title: 'Personalized Customer Experiences',
            description: 'Deliver tailored experiences to customers based on their preferences, behaviors, and needs, increasing satisfaction and loyalty.'
        },
        {
            title: 'Predictive Maintenance',
            description: 'Anticipate equipment failures before they occur, reducing downtime and maintenance costs while extending the lifespan of your assets.'
        },
        {
            title: 'Fraud Detection & Security',
            description: 'Implement advanced ML algorithms to detect unusual patterns and potential security threats, protecting your business and customers from fraud.'
        },
        {
            title: 'Competitive Advantage',
            description: 'Stay ahead of the competition by leveraging cutting-edge ML technologies that drive innovation and create new business opportunities.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'Air Fusion - AI-based Wind Turbine Management',
        description: 'We developed an advanced ML solution for a leading renewable energy company to optimize wind turbine performance and maintenance. The system uses computer vision and predictive analytics to detect potential issues and maximize energy output.',
        image: A1,
        features: [
            {
                title: 'Predictive Maintenance',
                description: 'The system predicts potential failures 3-4 weeks in advance, reducing downtime by 37% and maintenance costs by 28%.'
            },
            {
                title: 'Performance Optimization',
                description: 'ML algorithms continuously analyze weather data and turbine performance to optimize energy production, increasing output by 15%.'
            },
            {
                title: 'Anomaly Detection',
                description: 'Computer vision technology identifies visual anomalies in turbine components with 98.5% accuracy, enabling early intervention.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 35,
            symbol: '%',
            percentage: 35,
            title: 'Efficiency Improvement',
            description: 'Average increase in operational efficiency for our clients'
        },
        {
            value: 42,
            symbol: '%',
            percentage: 42,
            title: 'Cost Reduction',
            description: 'Average decrease in operational costs after implementation'
        },
        {
            value: 87,
            symbol: '%',
            percentage: 87,
            title: 'Customer Satisfaction',
            description: 'Client satisfaction rate with our ML solutions'
        },
        {
            value: 3.5,
            symbol: 'x',
            percentage: 70,
            title: 'ROI Multiplier',
            description: 'Average return on investment within the first year'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'Expert ML Development Team',
            description: 'Our team of ML specialists has extensive experience in developing and deploying sophisticated machine learning solutions across various industries.'
        },
        {
            title: 'End-to-End Development Services',
            description: 'We handle every aspect of ML development, from data collection and preprocessing to model training, deployment, and ongoing maintenance.'
        },
        {
            title: 'Custom Solutions for Every Need',
            description: 'We tailor our ML solutions to address your specific business challenges, ensuring you get maximum value from your investment.'
        },
        {
            title: 'Cutting-Edge Technologies',
            description: 'We stay at the forefront of ML innovation, utilizing the latest frameworks, tools, and methodologies to deliver state-of-the-art solutions.'
        },
        {
            title: 'Scalable and Future-Proof',
            description: 'Our ML solutions are designed to scale with your business and adapt to changing requirements, ensuring long-term value.'
        }
    ];

    return (
        <div className="ml-solutions-container">
            <Navbar />
            <SolutionsBanner
                title="Custom Machine Learning Solutions"
                subtitle="Unlock unparalleled data-driven intelligence with RSV, a leading machine learning development company."
                buttonText="Explore Our ML Services"
                inquiryTitle="How Much Does ML Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="ml"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Explore Our Machine Learning Development Services"
                    subtitle="Convert your ML vision into reality with our cost-effective and reliable machine learning solutions for every industry."
                    sections={catalogSections}
                    type="ml"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How Machine Learning Benefits Your Business"
                    subtitle="Discover the transformative impact ML can have on your operations, customer experience, and bottom line."
                    benefits={businessBenefits}
                    type="ml"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our ML solutions have helped businesses achieve their goals and overcome challenges."
                    caseStudy={caseStudy}
                    type="ml"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our ML Solutions"
                    subtitle="Measurable results that demonstrate the value of our machine learning development services."
                    stats={growthStats}
                    type="ml"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for Machine Learning Development"
                    subtitle="Partner with a team that has the expertise, experience, and passion to deliver exceptional ML solutions."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="ml"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default MLSolutions;