// SaaSSolutions.jsx
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

function SaaSSolutions() {
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
            heading: 'Custom SaaS Application Development',
            description: 'Transform your business idea into a scalable, secure, and feature-rich SaaS application. Our development team builds cloud-based solutions that meet your specific requirements while ensuring optimal performance and user experience.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'SaaS Migration & Modernization',
            description: 'Upgrade your legacy software to a modern SaaS architecture. We help businesses migrate their existing applications to the cloud, improving scalability, reducing costs, and enhancing functionality.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'SaaS Integration Solutions',
            description: 'Seamlessly connect your SaaS applications with other systems and services. Our integration solutions ensure smooth data flow between platforms, eliminating silos and creating a unified ecosystem for your business.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Reduced Time-to-Market',
            description: 'Launch your SaaS product faster with our agile development approach, enabling you to capture market opportunities and gain competitive advantage.'
        },
        {
            title: 'Scalability & Flexibility',
            description: 'Our SaaS solutions are built to scale with your business, accommodating growing user bases and evolving requirements without performance degradation.'
        },
        {
            title: 'Lower Total Cost of Ownership',
            description: 'Eliminate the need for expensive hardware, reduce maintenance costs, and optimize resource utilization with cloud-based SaaS applications.'
        },
        {
            title: 'Continuous Improvement',
            description: 'Benefit from regular updates and enhancements to your SaaS application, ensuring it stays current with the latest technologies and market trends.'
        },
        {
            title: 'Global Accessibility',
            description: 'Enable users to access your application from anywhere, on any device, improving collaboration and productivity across your organization.'
        },
        {
            title: 'Enhanced Security',
            description: 'Protect your data and users with robust security measures implemented at every layer of your SaaS application, from infrastructure to application code.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'CloudHRM - Comprehensive HR Management SaaS',
        description: 'We developed a feature-rich HR management SaaS platform for a growing enterprise client. The solution streamlines HR processes, improves employee engagement, and provides valuable insights through advanced analytics.',
        image: A1,
        features: [
            {
                title: 'Employee Management',
                description: 'Comprehensive employee profiles, onboarding workflows, and performance management tools that reduced administrative work by 65%.'
            },
            {
                title: 'Time & Attendance',
                description: 'Automated time tracking, leave management, and scheduling features that improved accuracy by 92% and saved 15 hours per week for HR staff.'
            },
            {
                title: 'Analytics Dashboard',
                description: 'Customizable reports and real-time analytics that provide actionable insights into workforce trends, helping management make data-driven decisions.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 68,
            symbol: '%',
            percentage: 68,
            title: 'Operational Efficiency',
            description: 'Average increase in operational efficiency for our SaaS clients'
        },
        {
            value: 45,
            symbol: '%',
            percentage: 45,
            title: 'Cost Reduction',
            description: 'Average decrease in IT costs after SaaS implementation'
        },
        {
            value: 89,
            symbol: '%',
            percentage: 89,
            title: 'Customer Satisfaction',
            description: 'Client satisfaction rate with our SaaS solutions'
        },
        {
            value: 3.8,
            symbol: 'x',
            percentage: 76,
            title: 'ROI Multiplier',
            description: 'Average return on investment within the first year'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'SaaS Architecture Expertise',
            description: 'Our architects design scalable, secure, and high-performance SaaS applications that leverage the latest cloud technologies and best practices.'
        },
        {
            title: 'Multi-Tenancy Specialists',
            description: 'We excel in building multi-tenant architectures that efficiently serve multiple customers while maintaining data isolation and security.'
        },
        {
            title: 'User Experience Focus',
            description: 'Our designers create intuitive, engaging interfaces that enhance user adoption and satisfaction, a critical factor for SaaS success.'
        },
        {
            title: 'Subscription Management',
            description: 'We implement robust billing and subscription management systems that support various pricing models and payment gateways.'
        },
        {
            title: 'Continuous Delivery',
            description: 'Our DevOps practices ensure smooth, frequent updates to your SaaS application without disrupting service or compromising quality.'
        }
    ];

    return (
        <div className="saas-solutions-container">
            <Navbar />
            <SolutionsBanner
                title="SaaS Development Solutions"
                subtitle="Build scalable, secure, and user-friendly cloud-based applications with our comprehensive SaaS development services."
                buttonText="Explore Our SaaS Services"
                inquiryTitle="How Much Does SaaS Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="saas"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our SaaS Development Services"
                    subtitle="From concept to deployment, we deliver end-to-end SaaS solutions tailored to your business needs."
                    sections={catalogSections}
                    type="saas"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How SaaS Benefits Your Business"
                    subtitle="Discover the transformative impact SaaS can have on your operations, customer experience, and bottom line."
                    benefits={businessBenefits}
                    type="saas"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our SaaS solutions have helped businesses achieve their goals and overcome challenges."
                    caseStudy={caseStudy}
                    type="saas"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our SaaS Solutions"
                    subtitle="Measurable results that demonstrate the value of our Software-as-a-Service development."
                    stats={growthStats}
                    type="saas"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for SaaS Development"
                    subtitle="Partner with a team that has the expertise, experience, and passion to deliver exceptional SaaS solutions."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="saas"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default SaaSSolutions;