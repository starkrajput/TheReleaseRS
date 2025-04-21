/* eslint-disable no-unused-vars */
import React from 'react';
import '../Pages/style.css';
import Simp_Banner from '../Component/Template/Simp_Banner';
import Navbar from '../Component/navbar';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import SimpleCard from '../Component/Template/SimpleCard';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import MobileBanner from '../assets/Vedio/WebApp.jpg'; // Use appropriate image
import CustomizedPC from '../assets/Vedio/CustomizedPC.jpg';
import Healthcare from '../assets/Vedio/624111.jpg';
import ERP from '../assets/Vedio/erp.png';
import Fintech from '../assets/Vedio/fintech.jpg';
import LuxuryShop from '../assets/Vedio/luxuryeshop.jpg';
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg';
import S5 from '../assets/Vedio/P2.jpg';
import S6 from '../assets/Vedio/P3.jpg';
import S7 from '../assets/Vedio/P4.jpg';
import Ov1 from '../assets/Vedio/Archi.jpg';
import Ov2 from '../assets/Vedio/360expert.jpg';
import Ov3 from '../assets/Vedio/testing.jpg';
import './MobileApp.css';

function MobileApp() {
    // Case studies data
    const section0Data = {
        title: "Mobile App Success Stories",
        cards: [
            {
                title: "Healthcare Patient Engagement App",
                date: "May 20, 2023",
                excerpt: "Developed a comprehensive patient engagement app for a healthcare network that improved appointment attendance by 42% and patient satisfaction scores by 35%. The app includes appointment scheduling, medication reminders, and secure messaging.",
                image: Healthcare,
                link: "/case-studies/healthcare-app"
            },
            {
                title: "FinTech Mobile Banking Solution",
                date: "January 15, 2022",
                excerpt: "Created a secure, feature-rich mobile banking application for a regional bank that increased mobile transactions by 68% and user engagement by 47%. The app includes biometric authentication, real-time notifications, and personalized financial insights.",
                image: Fintech,
                link: "/case-studies/fintech-mobile-banking"
            },
            {
                title: "Retail E-commerce Mobile App",
                date: "August 10, 2021",
                excerpt: "Designed and developed a mobile shopping experience for a retail chain that increased mobile sales by 56% and customer retention by 38%. The app features AR product visualization, personalized recommendations, and seamless checkout.",
                image: LuxuryShop,
                link: "/case-studies/retail-mobile-app"
            },
            {
                title: "Manufacturing Field Service App",
                date: "March 5, 2020",
                excerpt: "Built a field service application for a manufacturing company that reduced service response times by 58% and improved first-time fix rates by 42%. The app includes offline capabilities, real-time inventory access, and digital work orders.",
                image: ERP,
                link: "/case-studies/field-service-app"
            }
        ]
    };

    // Vertical section data
    const VerticalcardData = [
        {
            heading: 'Native iOS Development',
            content: 'Create powerful, high-performance iOS applications using Swift and Objective-C. Our iOS development team delivers seamless user experiences optimized for Apples ecosystem.',
            image: S1,
            buttonText: 'Learn More'
        },
        {
            heading: 'Native Android Development',
            content: 'Build robust Android applications with Kotlin and Java. Our Android developers create responsive, feature-rich apps that work flawlessly across the diverse Android device landscape.',
            image: CustomizedPC,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'Cross-Platform Development',
            content: 'Maximize your reach with cross-platform solutions using React Native, Flutter, or Xamarin. Develop once and deploy across multiple platforms without sacrificing quality or performance.',
            image: S2,
            buttonText: 'See Demo'
        },
        {
            heading: 'Progressive Web Apps (PWAs)',
            content: 'Combine the best of web and mobile apps with PWAs that offer offline capabilities, push notifications, and app-like experiences without requiring installation.',
            image: S3,
            buttonText: 'Request a Demo'
        },
        {
            heading: 'Mobile UI/UX Design',
            content: 'Create intuitive, engaging mobile interfaces that delight users. Our design team focuses on creating seamless user journeys that drive engagement and conversion.',
            image: S4,
            buttonText: 'Learn More'
        },
        {
            heading: 'Mobile App Testing',
            content: 'Ensure flawless performance across devices with our comprehensive mobile testing services. We conduct functional, performance, security, and usability testing to deliver bug-free applications.',
            image: S5,
            buttonText: 'Explore Solutions'
        }
    ];

    // Overview cards data
    const OvcardData = [
        {
            title: 'User-Centered Design',
            text: 'We prioritize user experience in every mobile app we create, focusing on intuitive navigation, engaging interfaces, and seamless interactions that keep users coming back.',
            image: Ov1,
            description: 'Our design process begins with understanding user needs and behaviors, ensuring that every element of your mobile app is optimized for engagement and satisfaction.'
        },
        {
            title: 'Agile Development',
            text: 'Our agile development approach ensures rapid iterations, continuous feedback, and flexible adaptation to changing requirements throughout the mobile app development lifecycle.',
            image: Ov2,
            description: 'We deliver value incrementally through sprint-based development, allowing you to see progress regularly and make adjustments as needed.'
        },
        {
            title: 'Comprehensive Testing',
            text: 'We conduct rigorous testing across devices, operating systems, and network conditions to ensure your mobile app performs flawlessly in all scenarios.',
            image: Ov3,
            description: 'Our QA team uses automated and manual testing methodologies to identify and resolve issues before they impact your users.'
        }
    ];

    // Recent works data
    const articlesData = {
        title: "Featured Mobile Solutions",
        articles: [
            {
                image: SP1,
                alt: "HealthTrack Patient App",
                heading: "HealthTrack Patient App",
                description: "A comprehensive healthcare management application that empowers patients to take control of their health journey. Features include appointment scheduling, medication tracking, secure provider messaging, and health record access.",
                link: "#",
            },
            {
                image: SP2,
                alt: "SecurePay Mobile Wallet",
                heading: "SecurePay Mobile Wallet",
                description: "A secure and user-friendly mobile payment solution that simplifies transactions and financial management. The app includes contactless payments, expense tracking, bill splitting, and loyalty program integration.",
                link: "#",
            },
            {
                image: SP3,
                alt: "ShopSmart Retail Companion",
                heading: "ShopSmart Retail Companion",
                description: "An innovative retail application that enhances the shopping experience both online and in-store. Features include AR product visualization, barcode scanning, personalized recommendations, and seamless checkout options.",
                link: "#",
            }
        ]
    };

    // Banner data
    const BannercarouselItems = [
        {
            image: MobileBanner,
            title: 'Mobile App Solutions',
            description: 'Create exceptional mobile experiences with our custom app development services. From concept to deployment, we build native and cross-platform applications that engage users and drive business growth.',
            buttonText: 'Explore Mobile Services'
        }
    ];

    return (
        <div className="mobile-app-container">
            <Navbar />
            <Simp_Banner items={BannercarouselItems} />
            <VerticalSection title="Mobile App Development Services" cards={VerticalcardData} />
            <Section0 title={section0Data.title} cards={section0Data.cards} />
            <CardContentOv title="Our Mobile Development Approach" cards={OvcardData} />
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />
            <Footer />
        </div>
    );
}

export default MobileApp;