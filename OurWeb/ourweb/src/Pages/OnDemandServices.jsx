// OnDemandServices.jsx
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

function OnDemandServices() {
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
            heading: 'On-Demand Development Teams',
            description: 'Access skilled development resources exactly when you need them. Our on-demand teams integrate seamlessly with your existing processes, providing the expertise you need without the overhead of permanent hires.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Project-Based Development',
            description: 'Complete specific development projects with our dedicated teams. From concept to deployment, we handle the entire development lifecycle, delivering high-quality solutions on time and within budget.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Staff Augmentation',
            description: 'Enhance your in-house team with our skilled professionals. Our staff augmentation services provide you with the exact technical expertise you need to accelerate your projects and meet critical deadlines.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Cost Efficiency',
            description: 'Pay only for the resources you need, when you need them, eliminating the overhead costs associated with full-time employees.'
        },
        {
            title: 'Flexibility & Scalability',
            description: 'Quickly scale your team up or down based on project requirements, ensuring optimal resource allocation at all times.'
        },
        {
            title: 'Access to Specialized Skills',
            description: 'Tap into our pool of experts with specialized skills that may be difficult or expensive to find and hire permanently.'
        },
        {
            title: 'Faster Time-to-Market',
            description: 'Accelerate your development cycles by bringing in additional resources to meet tight deadlines and launch products faster.'
        },
        {
            title: 'Reduced Management Burden',
            description: 'We handle all aspects of resource management, allowing your team to focus on core business objectives rather than administrative tasks.'
        },
        {
            title: 'Risk Mitigation',
            description: 'Reduce the risks associated with hiring permanent staff for temporary needs or projects with uncertain durations.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'FinTech Startup - Rapid MVP Development',
        description: 'We provided an on-demand development team to help a fintech startup build and launch their minimum viable product within a tight timeline. Our team integrated with their existing resources to deliver a high-quality solution that secured their next round of funding.',
        image: A1,
        features: [
            {
                title: 'Rapid Team Assembly',
                description: 'Assembled a specialized team of 8 developers, designers, and QA engineers within 1 week, matching the exact skill requirements for the project.'
            },
            {
                title: 'Agile Development',
                description: 'Implemented an agile development process that delivered functional iterations every two weeks, allowing for continuous feedback and refinement.'
            },
            {
                title: 'Successful Launch',
                description: 'Completed the MVP development in just 3 months, enabling the client to launch on schedule and secure $4.5M in Series A funding.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 65,
            symbol: '%',
            percentage: 65,
            title: 'Cost Savings',
            description: 'Average cost savings compared to traditional hiring'
        },
        {
            value: 40,
            symbol: '%',
            percentage: 40,
            title: 'Faster Delivery',
            description: 'Average reduction in project delivery time'
        },
        {
            value: 94,
            symbol: '%',
            percentage: 94,
            title: 'Client Satisfaction',
            description: 'Client satisfaction rate with our on-demand services'
        },
        {
            value: 3.2,
            symbol: 'x',
            percentage: 64,
            title: 'ROI Multiplier',
            description: 'Average return on investment for our clients'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'Diverse Talent Pool',
            description: 'Access to a wide range of technical specialists, from front-end and back-end developers to DevOps engineers, QA specialists, and project managers.'
        },
        {
            title: 'Rigorous Selection Process',
            description: 'Our team members undergo a thorough vetting process to ensure they have the technical skills, communication abilities, and work ethic to deliver exceptional results.'
        },
        {
            title: 'Seamless Integration',
            description: 'Our professionals are experienced in adapting to different work environments, tools, and methodologies, ensuring smooth integration with your existing teams.'
        },
        {
            title: 'Flexible Engagement Models',
            description: 'Choose from various engagement models—hourly, part-time, full-time, or project-based—to match your specific needs and budget constraints.'
        },
        {
            title: 'Transparent Communication',
            description: 'Regular progress updates, detailed reporting, and open communication channels ensure you always know the status of your projects and resources.'
        }
    ];

    return (
        <div className="ondemand-services-container">
            <Navbar />
            <SolutionsBanner
                title="On-Demand Development Services"
                subtitle="Access skilled development resources when you need them, without the overhead of permanent hires."
                buttonText="Explore Our On-Demand Services"
                inquiryTitle="How Much Do On-Demand Services Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="ondemand"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our On-Demand Service Offerings"
                    subtitle="Flexible development resources tailored to your specific project needs and timelines."
                    sections={catalogSections}
                    type="ondemand"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How On-Demand Services Benefit Your Business"
                    subtitle="Discover the advantages of flexible development resources for your projects and business goals."
                    benefits={businessBenefits}
                    type="ondemand"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our on-demand services have helped businesses achieve their goals and overcome challenges."
                    caseStudy={caseStudy}
                    type="ondemand"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our On-Demand Services"
                    subtitle="Measurable results that demonstrate the value of our flexible development resources."
                    stats={growthStats}
                    type="ondemand"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for On-Demand Services"
                    subtitle="Partner with a team that has the expertise, experience, and passion to deliver exceptional development resources."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="ondemand"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default OnDemandServices;