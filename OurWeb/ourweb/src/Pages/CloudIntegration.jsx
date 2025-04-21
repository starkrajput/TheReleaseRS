// CloudIntegrationServices.jsx
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

import black from '../assets/black.jpg'; // black
// Import images
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg';
import S5 from '../assets/Vedio/P2.jpg';
import S6 from '../assets/Vedio/P3.jpg';
import S7 from '../assets/Vedio/P4.jpg';
import A1 from '../assets/Vedio/A1.jpg';

function CloudIntegrationServices() {
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
            heading: 'Multi-Cloud Integration',
            description: 'Seamlessly connect and orchestrate your applications across multiple cloud platforms. Our multi-cloud integration services create a unified ecosystem that leverages the best capabilities of each cloud provider while maintaining consistent governance and security.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'API Development & Management',
            description: 'Build robust, secure, and scalable APIs that connect your applications, data, and services. Our comprehensive API development and management solutions enable seamless integration, improved developer experience, and enhanced business agility.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Cloud Data Integration',
            description: 'Unify your data across cloud and on-premises environments with our advanced data integration services. We design and implement solutions that enable real-time data synchronization, ETL/ELT processes, and comprehensive data governance.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Accelerated Digital Transformation',
            description: 'Speed up your digital initiatives by seamlessly connecting cloud services, legacy systems, and third-party applications into a cohesive ecosystem.'
        },
        {
            title: 'Enhanced Business Agility',
            description: 'Respond rapidly to market changes and new opportunities with flexible, integrated systems that enable quick adaptation and innovation.'
        },
        {
            title: 'Improved Data Accessibility',
            description: 'Break down data silos and enable secure, real-time access to critical information across your organization, empowering better decision-making.'
        },
        {
            title: 'Optimized IT Investments',
            description: 'Maximize the value of both legacy systems and new cloud investments by creating seamless connections that leverage the strengths of each platform.'
        },
        {
            title: 'Reduced Operational Complexity',
            description: 'Simplify your IT landscape with standardized integration patterns, centralized management, and automated workflows that reduce manual effort.'
        },
        {
            title: 'Scalable Architecture',
            description: 'Build integration solutions that grow with your business, handling increasing data volumes and transaction loads without performance degradation.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'Financial Services Leader - Hybrid Cloud Integration',
        description: 'We helped a leading financial services company integrate their legacy on-premises systems with multiple cloud platforms, creating a unified ecosystem that dramatically improved operational efficiency while maintaining strict security and compliance requirements.',
        image: A1,
        features: [
            {
                title: 'Secure API Gateway',
                description: 'Implemented a robust API gateway that securely exposed core banking services to cloud applications, reducing integration time for new services by 78% while ensuring regulatory compliance.'
            },
            {
                title: 'Real-time Data Synchronization',
                description: 'Created a real-time data integration platform that synchronized customer information across 12 systems, eliminating data inconsistencies and improving customer experience scores by 42%.'
            },
            {
                title: 'Microservices Architecture',
                description: 'Designed a microservices-based integration layer that decoupled legacy systems from modern cloud applications, enabling independent scaling and reducing system dependencies by 65%.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 75,
            symbol: '%',
            percentage: 75,
            title: 'Integration Speed',
            description: 'Faster integration of new applications and services'
        },
        {
            value: 60,
            symbol: '%',
            percentage: 60,
            title: 'Cost Reduction',
            description: 'Average decrease in integration-related costs'
        },
        {
            value: 85,
            symbol: '%',
            percentage: 85,
            title: 'System Reliability',
            description: 'Improvement in system reliability and uptime'
        },
        {
            value: 4.8,
            symbol: 'x',
            percentage: 80,
            title: 'ROI Multiplier',
            description: 'Average return on investment within two years'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'Cloud Platform Expertise',
            description: 'Our team holds certifications and extensive experience across all major cloud platforms, including AWS, Azure, Google Cloud, and Oracle Cloud.'
        },
        {
            title: 'Integration Patterns & Frameworks',
            description: 'We leverage industry-standard integration patterns and frameworks to create robust, maintainable, and scalable integration solutions.'
        },
        {
            title: 'Security-First Approach',
            description: 'Our integration solutions incorporate advanced security measures, including encryption, identity management, and comprehensive access controls.'
        },
        {
            title: 'Legacy System Integration',
            description: 'We specialize in connecting legacy systems to modern cloud platforms, preserving your existing investments while enabling digital transformation.'
        },
        {
            title: 'Continuous Delivery Pipeline',
            description: 'Our integration solutions include automated testing and deployment pipelines that ensure reliable, consistent updates with minimal disruption.'
        }
    ];

    return (
        <div className="cloud-integration-container">
            <Navbar />
            <SolutionsBanner
                title="Cloud Integration Services"
                subtitle="Connect your applications, data, and systems seamlessly across cloud and on-premises environments."
                buttonText="Explore Our Integration Services"
                inquiryTitle="How Much Do Cloud Integration Services Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="cloud"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our Cloud Integration Offerings"
                    subtitle="Comprehensive integration solutions that connect your digital ecosystem and enable seamless data flow."
                    sections={catalogSections}
                    type="cloud"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How Cloud Integration Benefits Your Business"
                    subtitle="Discover the transformative impact of seamless integration on your operations, innovation, and growth."
                    benefits={businessBenefits}
                    type="cloud"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our integration solutions have helped organizations overcome complex challenges and achieve their business goals."
                    caseStudy={caseStudy}
                    type="cloud"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our Integration Solutions"
                    subtitle="Measurable results that demonstrate the value of seamless cloud integration."
                    stats={growthStats}
                    type="cloud"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for Cloud Integration"
                    subtitle="Partner with a team that has the expertise, experience, and vision to create seamless connections across your digital ecosystem."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="cloud"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default CloudIntegrationServices;