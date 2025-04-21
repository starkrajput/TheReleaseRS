// TransportationLogistics.jsx
import React from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import Simp_Banner from '../Component/Template/Simp_Banner';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import SimpleCard from '../Component/Template/SimpleCard';
import AiSolutionBanner from '../Component/AiSolutions/AiSolutionsBanner';
// Import placeholder images (update these with your actual image paths)
import BFOne from '../assets/Bhanulic/Transporation/14.png';
import ServiceImg1 from '../assets/Bhanulic/Transporation/1.png';
import ServiceImg2 from '../assets/Bhanulic/Transporation/18.png';
import ServiceImg3 from '../assets/Bhanulic/Transporation/2.png';
import CaseStudyImg1 from '../assets/Bhanulic/Transporation/3.png';
import CaseStudyImg2 from '../assets/Bhanulic/Transporation/4.png';
import CaseStudyImg3 from '../assets/Bhanulic/Transporation/6.png';
import OverviewImg1 from '../assets/Bhanulic/Transporation/6.png';
import OverviewImg2 from '../assets/Bhanulic/Transporation/7.png';
import OverviewImg3 from '../assets/Bhanulic/Transporation/8.png';
import OverviewImg4 from '../assets/Bhanulic/Transporation/10.png';
import OverviewImg5 from '../assets/Bhanulic/Transporation/11.png';
import OverviewImg6 from '../assets/Bhanulic/Transporation/12.png';
import OverviewImg7 from '../assets/Bhanulic/Transporation/13.png';
//import OverviewImg4 from '../assets/Bhanulic/BankingFinance/14.png';
import OverviewImg8 from '../assets/Bhanulic/Transporation/15.png';
import OverviewImg9 from '../assets/Bhanulic/Transporation/16.png';
import OverviewImg10 from '../assets/Bhanulic/Transporation/19.png';

function TransportationLogistics() {
    // Banner content
   /* const bannerItems = [
        {
            image: BannerImg1,
            title: "Digital Transformation for Transport & Logistics",
            description: "Optimize operations, reduce costs, and enhance customer experience with our cutting-edge logistics solutions",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "Smart Solutions for Modern Logistics",
            description: "AI-powered supply chain management, IoT fleet tracking, and advanced analytics for your logistics needs",
            buttonText: "Get Started"
        }
    ];*/

    // Services content
    const servicesCards = [
        {
            heading: "Supply Chain Optimization",
            content: "End-to-end visibility and optimization of your supply chain with real-time analytics and predictive insights. Reduce costs and improve efficiency across your logistics operations.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Fleet Management Systems",
            content: "IoT-enabled fleet tracking, maintenance scheduling, and driver performance monitoring. Maximize vehicle utilization and reduce operational costs.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Warehouse Management Solutions",
            content: "Automated inventory tracking, order processing, and warehouse operations. Optimize space utilization and streamline picking, packing, and shipping processes.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    // Case studies
    const caseStudiesCards = [
        {
            image: CaseStudyImg1,
            title: "Global Logistics Provider Transformation",
            excerpt: "How we helped a leading logistics company reduce operational costs by 30% and improve delivery time by 25%",
            date: "May 2024",
            link: "#"
        },
        {
            image: CaseStudyImg2,
            title: "AI-Powered Route Optimization",
            excerpt: "Implementation of machine learning algorithms reduced fuel consumption by 15% for a fleet of 200+ vehicles",
            date: "April 2024",
            link: "#"
        },
        {
            image: CaseStudyImg3,
            title: "Blockchain for Supply Chain Transparency",
            excerpt: "Developing a blockchain solution that improved traceability and reduced documentation errors by 95%",
            date: "March 2024",
            link: "#"
        }
    ];

    // Overview cards
    const overviewCards = [
        {
            title: "Advanced Route Planning",
            text: "AI-powered optimization algorithms",
            image: OverviewImg1,
            description: "Our advanced route planning system uses machine learning to analyze traffic patterns, weather conditions, and historical data to suggest optimal routes."
        },
        {
            title: "Real-time Tracking",
            text: "GPS and IoT integration for live monitoring",
            image: OverviewImg2,
            description: "Track every vehicle and shipment in real-time with our IoT-enabled monitoring system that provides instant notifications and updates."
        },
        {
            title: "Predictive Maintenance",
            text: "Prevent vehicle breakdowns with AI",
            image: OverviewImg3,
            description: "Detect potential mechanical issues before they cause breakdowns, reducing maintenance costs and preventing delays."
        },
        {
            title: "Customer Management Portal",
            text: "Self-service tracking and management",
            image: OverviewImg4,
            description: "Provide your customers with a branded portal to track shipments, place orders, and manage their logistics needs."
        }
    ];

    // Recent work articles
    const recentArticles = [
        {
            heading: "Smart Port Management System",
            description: "A comprehensive digital solution for managing port operations, vessel scheduling, and cargo handling.",
            image: OverviewImg5,
            alt: "Port Management System",
            link: "#"
        },
        {
            heading: "Last-Mile Delivery Optimization",
            description: "AI-driven system that reduced delivery times by 35% and improved customer satisfaction for an e-commerce logistics provider.",
            image: OverviewImg6,
            alt: "Last-Mile Delivery System",
            link: "#"
        },
        {
            heading: "Cold Chain Monitoring Solution",
            description: "IoT-based temperature monitoring system ensuring product quality throughout the transportation of sensitive goods.",
            image: OverviewImg7,
            alt: "Cold Chain Monitoring",
            link: "#"
        }
    ];
    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?',
    };
    return (
        <div className="transportation-logistics-container">
            <Navbar />
           {/* <AiSolutionBanner items={bannerItems} />*/}
            <AiSolutionBanner
                title="Transportation & Logistics"
                subtitle="Explore Our Services"
                buttonText="Explore Our Services"
                inquiryTitle="How Much Does Transportation & Logistics Software Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                backgroundImage={BFOne}
            />
            <ScrollTrigger>
                <VerticalSection
                    title="Our Logistics & Transportation Services"
                    cards={servicesCards}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <Section0
                    title="Case Studies & Success Stories"
                    cards={caseStudiesCards}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CardContentOv
                    title="Solutions Overview"
                    cards={overviewCards}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <SimpleCard
                    title="Recent Projects"
                    articles={recentArticles}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default TransportationLogistics;