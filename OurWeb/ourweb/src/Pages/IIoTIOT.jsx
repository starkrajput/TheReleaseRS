// IoTSolutions.jsx
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

function IoTSolutions() {
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
            heading: 'Industrial IoT Solutions',
            description: 'Transform your manufacturing and industrial processes with our IIoT solutions. Monitor equipment performance, optimize production, and implement predictive maintenance to reduce downtime and increase efficiency.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Smart Home & Building Automation',
            description: 'Create intelligent living and working spaces with our IoT solutions for home and building automation. Control lighting, HVAC, security systems, and more through integrated platforms that enhance comfort, safety, and energy efficiency.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Healthcare IoT Applications',
            description: 'Revolutionize patient care with our healthcare IoT solutions. From remote patient monitoring to smart medical devices and hospital management systems, we help healthcare providers deliver better care while reducing costs.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    // Business benefits data
    const businessBenefits = [
        {
            title: 'Real-time Monitoring & Insights',
            description: 'Gain immediate visibility into your operations with IoT sensors and devices that collect and transmit data in real-time, enabling faster and more informed decision-making.'
        },
        {
            title: 'Improved Operational Efficiency',
            description: 'Optimize processes, reduce waste, and streamline operations with IoT solutions that provide actionable insights and automate routine tasks.'
        },
        {
            title: 'Predictive Maintenance',
            description: 'Identify potential equipment failures before they occur, reducing downtime, extending asset lifespan, and optimizing maintenance schedules and costs.'
        },
        {
            title: 'Enhanced Safety & Security',
            description: 'Implement IoT-based monitoring and alert systems to improve workplace safety, secure physical assets, and protect sensitive data.'
        },
        {
            title: 'Energy Management',
            description: 'Reduce energy consumption and costs with smart IoT systems that monitor usage patterns and automatically adjust settings for optimal efficiency.'
        },
        {
            title: 'New Revenue Streams',
            description: 'Create innovative products and services enabled by IoT technology, opening up new business opportunities and revenue streams.'
        }
    ];

    // Case study data
    const caseStudy = {
        title: 'SmartFactory - IoT-based Manufacturing Optimization',
        description: 'We developed a comprehensive IoT solution for a leading manufacturing company to monitor equipment performance, optimize production processes, and implement predictive maintenance. The system integrates with existing machinery and provides real-time insights through an intuitive dashboard.',
        image: A1,
        features: [
            {
                title: 'Equipment Monitoring',
                description: 'IoT sensors collect real-time data on equipment performance, temperature, vibration, and other critical parameters, enabling proactive maintenance.'
            },
            {
                title: 'Production Optimization',
                description: 'The system analyzes production data to identify bottlenecks and inefficiencies, leading to a 23% increase in overall equipment effectiveness.'
            },
            {
                title: 'Predictive Maintenance',
                description: 'Machine learning algorithms predict potential equipment failures, reducing unplanned downtime by 42% and maintenance costs by 35%.'
            }
        ]
    };

    // Growth stats data
    const growthStats = [
        {
            value: 47,
            symbol: '%',
            percentage: 47,
            title: 'Efficiency Improvement',
            description: 'Average increase in operational efficiency for our clients'
        },
        {
            value: 38,
            symbol: '%',
            percentage: 38,
            title: 'Cost Reduction',
            description: 'Average decrease in operational costs after implementation'
        },
        {
            value: 92,
            symbol: '%',
            percentage: 92,
            title: 'Customer Satisfaction',
            description: 'Client satisfaction rate with our IoT solutions'
        },
        {
            value: 4.2,
            symbol: 'x',
            percentage: 84,
            title: 'ROI Multiplier',
            description: 'Average return on investment within the first year'
        }
    ];

    // Expertise items data
    const expertiseItems = [
        {
            title: 'End-to-End IoT Expertise',
            description: 'Our team excels in every aspect of IoT development, from hardware selection and sensor integration to cloud connectivity, data analytics, and user interface design.'
        },
        {
            title: 'Industry-Specific Knowledge',
            description: 'We have deep experience implementing IoT solutions across multiple industries, including manufacturing, healthcare, agriculture, retail, and smart cities.'
        },
        {
            title: 'Scalable Architecture',
            description: 'Our IoT solutions are built on scalable architectures that can grow with your business, from proof-of-concept to full-scale deployment.'
        },
        {
            title: 'Security-First Approach',
            description: 'We prioritize security at every layer of the IoT stack, implementing robust measures to protect devices, data, and user privacy.'
        },
        {
            title: 'Seamless Integration',
            description: 'Our IoT solutions integrate smoothly with your existing systems and infrastructure, ensuring minimal disruption and maximum value.'
        }
    ];

    return (
        <div className="iot-solutions-container">
            <Navbar />
            <SolutionsBanner
                title="IoT Development Solutions"
                subtitle="Connect, monitor, and optimize your business with our cutting-edge Internet of Things development services."
                buttonText="Explore Our IoT Services"
                inquiryTitle="How Much Does IoT Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                type="iot"
            />

            <ScrollTrigger>
                <ServicesCatalog
                    title="Our IoT Development Services"
                    subtitle="From concept to deployment, we deliver comprehensive IoT solutions tailored to your business needs."
                    sections={catalogSections}
                    type="iot"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <BusinessBenefits
                    title="How IoT Benefits Your Business"
                    subtitle="Discover the transformative impact IoT can have on your operations, customer experience, and bottom line."
                    benefits={businessBenefits}
                    type="iot"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CaseStudy
                    title="Our Success Stories"
                    subtitle="See how our IoT solutions have helped businesses achieve their goals and overcome challenges."
                    caseStudy={caseStudy}
                    type="iot"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <GrowthStats
                    title="The Impact of Our IoT Solutions"
                    subtitle="Measurable results that demonstrate the value of our Internet of Things development services."
                    stats={growthStats}
                    type="iot"
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <ExpertiseSection
                    title="Why Choose RSV for IoT Development"
                    subtitle="Partner with a team that has the expertise, experience, and passion to deliver exceptional IoT solutions."
                    expertiseItems={expertiseItems}
                    inputPlaceholders={inputPlaceholders}
                    type="iot"
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default IoTSolutions;