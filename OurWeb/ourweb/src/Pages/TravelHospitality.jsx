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

// Import placeholder images
import BannerImg1 from '../assets/Vedio/A1.jpg';
import BannerImg2 from '../assets/Vedio/A1.jpg';
import ServiceImg1 from '../assets/Vedio/A1.jpg';
import ServiceImg2 from '../assets/Vedio/A1.jpg';
import ServiceImg3 from '../assets/Vedio/A1.jpg';
import CaseStudyImg1 from '../assets/Vedio/A1.jpg';
import CaseStudyImg2 from '../assets/Vedio/A1.jpg';
import CaseStudyImg3 from '../assets/Vedio/A1.jpg';
import OverviewImg1 from '../assets/Vedio/A1.jpg';
import OverviewImg2 from '../assets/Vedio/A1.jpg';
import OverviewImg3 from '../assets/Vedio/A1.jpg';
import OverviewImg4 from '../assets/Vedio/A1.jpg';
import OverviewImg5 from '../assets/Vedio/A1.jpg';
import OverviewImg6 from '../assets/Vedio/A1.jpg';
import RecentImg1 from '../assets/Vedio/A1.jpg';
import RecentImg2 from '../assets/Vedio/A1.jpg';
import RecentImg3 from '../assets/Vedio/A1.jpg';

function TravelHospitality() {
    const bannerItems = [
        {
            image: BannerImg1,
            title: "Digital Transformation for Travel & Hospitality",
            description: "Enhancing customer experiences, streamlining operations, and optimizing travel & hospitality services through AI and automation.",
            buttonText: "Explore Solutions"
        }
    ];

    const servicesCards = [
        {
            heading: "AI-Powered Booking Systems",
            content: "Smart booking solutions that personalize recommendations, optimize pricing, and enhance user engagement.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Contactless Check-In & Payments",
            content: "Seamless guest experience with self-check-in kiosks, mobile payments, and automated room assignments.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Smart Hotel & Travel Analytics",
            content: "Leverage AI-driven insights for better decision-making, from guest preferences to operational efficiencies.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    const overviewCards = [
        { title: "AI-Based Chatbots", text: "24/7 customer support and travel assistance", image: OverviewImg1 },
        { title: "Dynamic Pricing Strategies", text: "Optimize rates based on real-time demand", image: OverviewImg2 },
        { title: "Virtual Tour Experiences", text: "Immersive 360° hotel and travel previews", image: OverviewImg3 },
        { title: "Automated Housekeeping", text: "Smart scheduling for optimal efficiency", image: OverviewImg4 },
        { title: "Personalized Marketing", text: "Tailored promotions based on user behavior", image: OverviewImg5 },
        { title: "Seamless Multi-Channel Experience", text: "Unified booking experience across devices", image: OverviewImg6 }
    ];

    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?'
    };

    return (
        <div className="travel-hospitality-container">
            <Navbar />
            <AiSolutionBanner
                title="Travel & Hospitality"
                subtitle="Explore Our Services"
                buttonText="Explore Our Services"
                inquiryTitle="How Much Does Travel & Hospitality Software Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
            />
            <ScrollTrigger>
                <VerticalSection title="Our Travel & Hospitality Services" cards={servicesCards} />
            </ScrollTrigger>
            <ScrollTrigger>
                <CardContentOv title="Solutions Overview" cards={overviewCards} />
            </ScrollTrigger>
            <Footer />
        </div>
    );
}

export default TravelHospitality;