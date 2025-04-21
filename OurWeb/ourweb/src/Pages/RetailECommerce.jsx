// RetailEcommerce.jsx
import React from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import Simp_Banner from '../Component/Template/Simp_Banner';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import SimpleCard from '../Component/Template/SimpleCard';

// Import placeholder images (update these with your actual image paths)
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

function RetailEcommerce() {
    // Banner content
    const bannerItems = [
        {
            image: BannerImg1,
            title: "Digital Solutions for Modern Retail",
            description: "Transform your retail business with omnichannel experiences and data-driven insights",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "eCommerce Innovation",
            description: "Build scalable and high-performance online stores with advanced features",
            buttonText: "Get Started"
        }
    ];

    // Services content
    const servicesCards = [
        {
            heading: "Omnichannel Retail Solutions",
            content: "Create seamless shopping experiences across online and offline channels. Synchronize inventory, pricing, and customer data for consistent experiences.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Personalized Shopping Experience",
            content: "AI-powered recommendation engines and personalization solutions that increase conversion rates and average order value.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Inventory & Order Management",
            content: "Real-time inventory tracking, automated replenishment, and efficient order fulfillment systems that reduce stockouts and overstock situations.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    // Case studies
    const caseStudiesCards = [
        {
            image: CaseStudyImg1,
            title: "Fashion Retailer's Digital Makeover",
            excerpt: "How we helped a fashion retailer increase online sales by 75% through an omnichannel strategy and personalized shopping experiences",
            date: "June 2024",
            link: "#"
        },
        {
            image: CaseStudyImg2,
            title: "AI-Driven Product Recommendations",
            excerpt: "Implementation of a machine learning recommendation engine increased average order value by 35% for a leading online marketplace",
            date: "May 2024",
            link: "#"
        },
        {
            image: CaseStudyImg3,
            title: "Smart Inventory Management System",
            excerpt: "Developing a predictive inventory system that reduced stockouts by 80% and carrying costs by 25% for a multi-store retailer",
            date: "April 2024",
            link: "#"
        }
    ];

    // Overview cards
    const overviewCards = [
        {
            title: "Mobile Commerce",
            text: "Responsive and native app solutions",
            image: OverviewImg1,
            description: "Deliver exceptional mobile shopping experiences with our responsive web designs and native mobile applications."
        },
        {
            title: "Customer Analytics",
            text: "Data-driven customer insights",
            image: OverviewImg2,
            description: "Understand your customers better with advanced analytics that track behavior, preferences, and purchase patterns."
        },
        {
            title: "Payment Processing",
            text: "Secure multi-payment solutions",
            image: OverviewImg3,
            description: "Offer multiple payment options including credit cards, digital wallets, and buy-now-pay-later with robust security measures."
        },
        {
            title: "Loyalty Programs",
            text: "Customer retention solutions",
            image: OverviewImg4,
            description: "Increase customer lifetime value with personalized loyalty programs, rewards, and gamification elements."
        }
    ];

    // Recent work articles
    const recentArticles = [
        {
            heading: "Premium Jewelry eCommerce Platform",
            description: "Development of a high-end eCommerce platform with 3D product visualization, virtual try-on, and personalized shopping experiences.",
            image: RecentImg1,
            alt: "Jewelry eCommerce Platform",
            link: "#"
        },
        {
            heading: "Smart Retail Analytics Dashboard",
            description: "Real-time analytics solution that provides insights into store performance, customer behavior, and inventory management.",
            image: RecentImg2,
            alt: "Retail Analytics Dashboard",
            link: "#"
        },
        {
            heading: "Subscription Box Management System",
            description: "End-to-end platform for managing subscription-based retail services including customer management, billing, and fulfillment.",
            image: RecentImg3,
            alt: "Subscription Box Platform",
            link: "#"
        }
    ];

    return (
        <div className="retail-ecommerce-container">
            <Navbar />
            <Simp_Banner items={bannerItems} />

            <ScrollTrigger>
                <VerticalSection
                    title="Our Retail & eCommerce Services"
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

export default RetailEcommerce;