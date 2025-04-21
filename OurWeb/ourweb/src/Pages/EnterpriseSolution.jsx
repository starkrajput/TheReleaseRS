// EnterpriseSolutions.jsx
import React from 'react';
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

function EnterpriseSolutions() {
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
            heading: 'Enterprise Resource Planning (ERP)',
            description: 'Transform your business operations with our custom ERP solutions. We design and implement comprehensive systems that integrate all aspects of your business—from finance and HR to supply chain and customer relations—into a unified platform for enhanced efficiency and data-driven decision making.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Customer Relationship Management (CRM)',
            description: 'Elevate your customer engagement with our tailored CRM solutions. Our systems help you manage customer interactions, streamline sales processes, and deliver personalized experiences that drive loyalty and growth, all while providing actionable insights into customer behavior.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Business Intelligence & Analytics',
            description: 'Unlock the power of your data with our enterprise analytics solutions. We build sophisticated dashboards and reporting systems that transform raw data into strategic insights, enabling informed decision-making and identifying new opportunities for growth and optimization.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Operational Excellence',
            description: 'Streamline complex business processes, eliminate redundancies, and automate routine tasks to achieve unprecedented operational efficiency across your organization.'
        },
        {
            title: 'Data-Driven Decision Making',
            description: 'Access real-time insights and comprehensive analytics that enable informed strategic decisions, helping you stay ahead of market trends and competition.'
        },
        {
            title: 'Enhanced Collaboration',
            description: 'Break down departmental silos with integrated systems that facilitate seamless information sharing and cross-functional collaboration throughout your enterprise.'
        },
        {
            title: 'Scalable Architecture',
            description: 'Our enterprise solutions are built on flexible, scalable architectures that grow with your business, accommodating increasing data volumes and user bases without performance degradation.'
        },
        {
            title: 'Regulatory Compliance',
            description: 'Stay compliant with industry regulations and standards through built-in compliance features, audit trails, and security controls tailored to your specific requirements.'
        },
        {
            title: 'Competitive Advantage',
            description: 'Gain a significant edge in your industry with cutting-edge enterprise technology that enables faster innovation, better customer experiences, and more efficient operations.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'Global Manufacturing Corporation - Digital Transformation',
        description: 'We partnered with a multinational manufacturing company to implement a comprehensive enterprise solution that digitized their operations across 15 countries, resulting in dramatic improvements in efficiency, data visibility, and decision-making capabilities.',
        image: A1,
        features: [
            {
                title: 'Integrated ERP Implementation',
                description: 'Deployed a custom ERP solution that unified operations across 28 facilities, reducing process redundancies by 65% and improving cross-departmental data flow by 87%.'
            },
            {
                title: 'Supply Chain Optimization',
                description: 'Implemented advanced analytics and predictive modeling that reduced inventory costs by 32% while improving fulfillment rates by 24%, resulting in $8.5M annual savings.'
            },
            {
                title: 'Business Intelligence Platform',
                description: 'Created a centralized BI platform that provided executives with real-time performance metrics and predictive insights, accelerating strategic decision-making by 40%.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 78,
            symbol: '%',
            percentage: 78,
            title: 'Process Efficiency',
            description: 'Average improvement in operational efficiency'
        },
        {
            value: 42,
            symbol: '%',
            percentage: 42,
            title: 'Cost Reduction',
            description: 'Average decrease in operational costs'
        },
        {
            value: 65,
            symbol: '%',
            percentage: 65,
            title: 'Decision Speed',
            description: 'Faster strategic decision-making'
        },
        {
            value: 5.2,
            symbol: 'x',
            percentage: 85,
            title: 'ROI Multiplier',
            description: 'Average return on investment within three years'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'Industry-Specific Solutions',
            description: 'Our enterprise solutions are tailored to the unique requirements of your industry, incorporating best practices and addressing specific challenges you face.'
        },
        {
            title: 'Integration Specialists',
            description: 'Our experts excel at integrating new systems with your existing infrastructure, ensuring seamless data flow and preserving your technology investments.'
        },
        {
            title: 'Change Management',
            description: 'We provide comprehensive change management support to ensure smooth adoption of new systems, minimizing disruption and maximizing user acceptance.'
        },
        {
            title: 'Continuous Innovation',
            description: 'Our solutions are designed with future growth in mind, incorporating flexible architectures that can adapt to emerging technologies and changing business needs.'
        },
        {
            title: 'Enterprise Security',
            description: 'We implement robust security measures at every level of your enterprise solution, protecting sensitive data and ensuring compliance with relevant regulations.'
        }
    ];

    return (
        <div className="enterprise-solutions-container">
            <Navbar />
            <SolutionsBanner
                title="Enterprise Solutions"
                subtitle="Transform your business with comprehensive, scalable enterprise systems designed for operational excellence and strategic growth."
                buttonText="Explore Our Enterprise Solutions"
                inquiryTitle="How Much Do Enterprise Solutions Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="enterprise"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our Enterprise Solution Offerings"
                    subtitle="Comprehensive business systems tailored to your organization's unique challenges and objectives."
                    sections={catalogSections}
                    type="enterprise"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How Enterprise Solutions Transform Your Business"
                    subtitle="Discover the strategic advantages our enterprise systems bring to your organization's operations and growth."
                    benefits={businessBenefits}
                    type="enterprise"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our enterprise solutions have helped organizations achieve remarkable business transformations."
                    caseStudy={caseStudy}
                    type="enterprise"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our Enterprise Solutions"
                    subtitle="Measurable results that demonstrate the transformative value of our enterprise systems."
                    stats={growthStats}
                    type="enterprise"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for Enterprise Solutions"
                    subtitle="Partner with a team that has the expertise, experience, and vision to deliver enterprise systems that drive lasting business value."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="enterprise"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default EnterpriseSolutions;