// ManagedServices.jsx
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

function ManagedServices() {
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
            heading: 'Managed IT Infrastructure',
            description: 'Let us handle your entire IT infrastructure, from servers and networks to cloud resources and security. Our proactive monitoring and management ensure optimal performance, reliability, and security for your critical systems.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Application Management Services',
            description: 'Maximize the value of your business applications with our comprehensive management services. We handle monitoring, maintenance, updates, and optimization to ensure your applications perform at their best.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Cloud Managed Services',
            description: 'Optimize your cloud environment with our expert management services. We handle provisioning, monitoring, security, cost optimization, and performance tuning for all major cloud platforms, including AWS, Azure, and Google Cloud.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Reduced Operational Costs',
            description: 'Lower your IT expenses with our managed services, eliminating the need for large in-house teams and expensive infrastructure investments.'
        },
        {
            title: 'Enhanced Reliability & Uptime',
            description: 'Benefit from proactive monitoring and maintenance that prevents issues before they impact your business, ensuring maximum system availability.'
        },
        {
            title: 'Improved Security Posture',
            description: 'Protect your business with comprehensive security services, including threat detection, vulnerability management, and compliance monitoring.'
        },
        {
            title: 'Scalable Resources',
            description: 'Easily scale your IT resources up or down based on business needs, without the complexity and cost of managing the changes yourself.'
        },
        {
            title: 'Focus on Core Business',
            description: 'Free your internal teams to focus on strategic initiatives and innovation while we handle the day-to-day management of your IT systems.'
        },
        {
            title: 'Access to Expertise',
            description: 'Leverage our team of certified IT professionals with specialized skills across various technologies, available 24/7 to support your business.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'Global Retail Chain - IT Infrastructure Transformation',
        description: 'We implemented a comprehensive managed services solution for a retail chain with 200+ locations, transforming their fragmented IT infrastructure into a centralized, efficient, and secure environment.',
        image: A1,
        features: [
            {
                title: 'Centralized Management',
                description: 'Consolidated management of all IT systems across 200+ locations, reducing administrative overhead by 75% and improving visibility.'
            },
            {
                title: 'Proactive Monitoring',
                description: '24/7 monitoring and automated alerting reduced system downtime by 92%, preventing an estimated $2.3M in lost revenue annually.'
            },
            {
                title: 'Security Enhancement',
                description: 'Implemented comprehensive security measures that reduced security incidents by 87% and ensured compliance with industry regulations.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 72,
            symbol: '%',
            percentage: 72,
            title: 'Cost Reduction',
            description: 'Average decrease in IT operational costs for our clients'
        },
        {
            value: 99.9,
            symbol: '%',
            percentage: 99,
            title: 'System Uptime',
            description: 'Average uptime achieved for client systems'
        },
        {
            value: 85,
            symbol: '%',
            percentage: 85,
            title: 'Issue Resolution',
            description: 'Problems resolved before impacting business operations'
        },
        {
            value: 4.5,
            symbol: 'x',
            percentage: 90,
            title: 'ROI Multiplier',
            description: 'Average return on investment within the first year'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: '24/7 Support & Monitoring',
            description: 'Our team provides round-the-clock monitoring and support, ensuring your systems are always operational and issues are resolved promptly.'
        },
        {
            title: 'Certified Professionals',
            description: 'Our staff holds certifications across all major platforms and technologies, bringing expert knowledge to every aspect of your IT environment.'
        },
        {
            title: 'Proactive Approach',
            description: 'We don\'t just fix problems—we prevent them. Our proactive monitoring and maintenance keep your systems running smoothly.'
        },
        {
            title: 'Customized Service Levels',
            description: 'We offer flexible service level agreements tailored to your specific business needs and budget constraints.'
        },
        {
            title: 'Transparent Reporting',
            description: 'Receive comprehensive reports on system performance, incident resolution, and service improvements, providing complete visibility into our services.'
        }
    ];

    return (
        <div className="managed-services-container">
            <Navbar />
            <SolutionsBanner
                title="Managed IT Services"
                subtitle="Optimize your technology infrastructure with our comprehensive managed services for reliable, secure, and efficient operations."
                buttonText="Explore Our Managed Services"
                inquiryTitle="How Much Do Managed Services Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="managed"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our Managed Services Offerings"
                    subtitle="Comprehensive IT management solutions tailored to your business needs and objectives."
                    sections={catalogSections}
                    type="managed"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How Managed Services Benefit Your Business"
                    subtitle="Discover the transformative impact our managed services can have on your operations, security, and bottom line."
                    benefits={businessBenefits}
                    type="managed"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our managed services have helped businesses achieve their goals and overcome challenges."
                    caseStudy={caseStudy}
                    type="managed"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our Managed Services"
                    subtitle="Measurable results that demonstrate the value of our comprehensive IT management."
                    stats={growthStats}
                    type="managed"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for Managed Services"
                    subtitle="Partner with a team that has the expertise, experience, and passion to deliver exceptional IT management."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="managed"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default ManagedServices;