// Healthcare.jsx
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

// Import placeholder images (update these with actual images)
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
function Healthcare() {
    // Banner content
    const bannerItems = [
        {
            image: BannerImg1,
            title: "Revolutionizing Healthcare with Digital Innovation",
            description: "Empowering hospitals, clinics, and healthcare providers with AI-driven solutions.",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "AI and IoT in Modern Healthcare",
            description: "Leverage AI, telemedicine, and smart devices for better patient care and efficiency.",
            buttonText: "Get Started"
        }
    ];

    // Services content
    const servicesCards = [
        {
            heading: "Telemedicine Solutions",
            content: "Enable remote consultations with AI-driven diagnostic tools and secure video conferencing.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Healthcare Data Analytics",
            content: "Leverage predictive analytics to enhance patient care and optimize hospital resources.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Electronic Health Records (EHR)",
            content: "Streamline patient data management with secure, cloud-based EHR systems.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    // Overview cards
    const overviewCards = [
        {
            title: "AI-Powered Diagnostics",
            text: "Faster and more accurate diagnoses",
            image: OverviewImg1,
            description: "Our AI-based diagnostic tools analyze medical images and patient data, reducing human error and improving outcomes."
        },
        {
            title: "Remote Patient Monitoring",
            text: "IoT-driven real-time health tracking",
            image: OverviewImg2,
            description: "Track patient vitals in real-time with IoT sensors, ensuring early intervention and improved care."
        },
        {
            title: "Blockchain for Medical Records",
            text: "Secure and interoperable patient data",
            image: OverviewImg3,
            description: "Enhance security and accessibility with blockchain-based medical record storage and sharing."
        },
        {
            title: "Automated Healthcare Operations",
            text: "AI-driven workflow optimization",
            image: OverviewImg4,
            description: "Streamline hospital workflows, appointment scheduling, and resource allocation using AI-powered automation."
        },
        {
            title: "Personalized Treatment Plans",
            text: "Machine learning for tailored healthcare",
            image: OverviewImg5,
            description: "Utilize AI to create personalized treatment plans based on patient history and genetic data."
        },
        {
            title: "Smart Wearables Integration",
            text: "Track health metrics with IoT",
            image: OverviewImg6,
            description: "Integrate smartwatches and fitness trackers to provide continuous health monitoring and early disease detection."
        }
    ];

    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?',
    };

    return (
        <div className="healthcare-container">
            <Navbar />
            <AiSolutionBanner
                title="Healthcare Solutions"
                subtitle="Empowering Digital Healthcare Innovations"
                buttonText="Explore Our Services"
                inquiryTitle="How Much Does Healthcare Software Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
            />
            <ScrollTrigger>
                <VerticalSection
                    title="Our Healthcare Solutions"
                    cards={servicesCards}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <CardContentOv
                    title="Technological Advancements in Healthcare"
                    cards={overviewCards}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default Healthcare;
