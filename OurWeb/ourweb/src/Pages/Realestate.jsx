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

// Import images
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

function RealEstate() {
    const bannerItems = [
        {
            image: BannerImg1,
            title: "Smart Real Estate Solutions",
            description: "Revolutionizing the property industry with AI-powered analytics, digital property management, and virtual tours.",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "Digital Transformation in Real Estate",
            description: "Enhance efficiency, streamline property listings, and improve customer experiences with innovative technology.",
            buttonText: "Get Started"
        }
    ];

    const servicesCards = [
        {
            heading: "AI-Powered Property Insights",
            content: "Leverage AI-driven market analysis to make data-backed real estate investment decisions.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Virtual & Augmented Reality Tours",
            content: "Enable immersive 3D property tours to enhance the home-buying experience remotely.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Automated Tenant Management",
            content: "Streamline tenant applications, lease agreements, and rent tracking with AI-powered automation.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    const caseStudiesCards = [
        {
            image: CaseStudyImg1,
            title: "AI-Driven Property Valuation",
            excerpt: "How AI reduced valuation time by 70% for real estate firms.",
            date: "March 2024",
            link: "#"
        },
        {
            image: CaseStudyImg2,
            title: "Virtual Reality Property Tours",
            excerpt: "How VR increased property engagement and conversion rates.",
            date: "April 2024",
            link: "#"
        },
        {
            image: CaseStudyImg3,
            title: "Blockchain in Real Estate Transactions",
            excerpt: "How smart contracts eliminated fraud and streamlined purchases.",
            date: "May 2024",
            link: "#"
        }
    ];

    const overviewCards = [
        {
            title: "AI Market Predictions",
            text: "Predict property trends with AI",
            image: OverviewImg1,
            description: "Use predictive analytics to forecast real estate market trends and optimize investments."
        },
        {
            title: "Automated Property Listings",
            text: "Seamlessly manage listings",
            image: OverviewImg2,
            description: "List properties with AI-driven descriptions, pricing suggestions, and dynamic updates."
        },
        {
            title: "Digital Mortgage Solutions",
            text: "Simplify mortgage applications",
            image: OverviewImg3,
            description: "Use AI to automate mortgage approvals, reducing processing time and errors."
        },
        {
            title: "Real Estate CRM Systems",
            text: "Enhance client management",
            image: OverviewImg4,
            description: "Use smart CRM tools to manage client interactions, follow-ups, and property preferences."
        },
        {
            title: "Smart Home Integration",
            text: "Optimize property automation",
            image: OverviewImg5,
            description: "Incorporate smart home solutions with IoT devices for energy-efficient, connected living."
        },
        {
            title: "Blockchain for Transactions",
            text: "Secure real estate deals",
            image: OverviewImg6,
            description: "Enable tamper-proof, secure real estate transactions with blockchain-based smart contracts."
        }
    ];

    const recentArticles = [
        {
            heading: "AI in Real Estate: A Game Changer",
            description: "Explore how AI is revolutionizing property transactions and investments.",
            image: RecentImg1,
            alt: "AI in Real Estate",
            link: "#"
        },
        {
            heading: "The Rise of Smart Homes",
            description: "How IoT is reshaping home automation and smart living.",
            image: RecentImg2,
            alt: "Smart Homes",
            link: "#"
        },
        {
            heading: "Blockchain’s Role in Real Estate",
            description: "Ensuring secure, transparent, and efficient transactions.",
            image: RecentImg3,
            alt: "Blockchain in Real Estate",
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
        <div className="real-estate-container">
            <Navbar />
            <AiSolutionBanner
                title="Real Estate Tech Solutions"
                subtitle="Transforming Real Estate with AI, Virtual Tours & Smart Automation"
                buttonText="Explore Our Solutions"
                inquiryTitle="How Much Does Real Estate Tech Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 7 + 2 ="
            />

            <ScrollTrigger>
                <VerticalSection
                    title="Our Real Estate Technology Services"
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
                    title="Recent Insights & Real Estate Innovations"
                    articles={recentArticles}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default RealEstate;
