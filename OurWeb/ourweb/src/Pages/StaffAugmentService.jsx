/* eslint-disable no-unused-vars *//*
import React from 'react';// Adjust the path if Navbar.jsx is in a different directory
import '../Pages/style.css';
import Simp_Banner from '../Component/Template/Simp_Banner';
import Navbar from '../Component/navbar';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import Section2 from '../Component/Template/Section2';
import SimpleCard from '../Component/Template/SimpleCard';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import MobileBanner from '../assets/Vedio/MobileBanner.jpg';
import CustomizedPC from '../assets/Vedio/CustomizedPC.jpg';
import Healthcare from '../assets/Vedio/624111.jpg';
import ERP from '../assets/Vedio/erp.png';
import Fintech from '../assets/Vedio/fintech.jpg';
import LuxuryShop from '../assets/Vedio/luxuryeshop.jpg';
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg'
import S5 from '../assets/Vedio/P2.jpg'
import S6 from '../assets/Vedio/P3.jpg'
import S7 from '../assets/Vedio/P4.jpg'
import Ov1 from '../assets/Vedio/Archi.jpg';
import Ov2 from '../assets/Vedio/360expert.jpg';
import Ov3 from '../assets/Vedio/testing.jpg';
import AIBanner from '../Component/AiSolutions/AiSolutionsBanner';
import YearofExperience from '../Component/AiSolutions/AiExpertiseSection';
import Catelog from '../Component/AI_Catelog';
import Catelog2 from '../Component/AiSolutions/AI_Catelog2';
import Catelog3 from '../Component/AI_Catelog3';
import AIGrowth from '../Component/AI_growth';
import ParentSol from '../Component/ML_Parent_Sol';
import MLCardLeft_Ops_Sol from '../Component/MLCardLeft_Ops_Sol';
import TeckStack from '../Component/TeckStack';
import ParentChild2 from '../Component/ParentChild2';
function WebApp() {
    const section2Data = {
        title: "Our Recent Works",
        boxes: [
            { className: 'one', title: 'CREATIVITY', posterClass: 'p1' },
            { className: 'two', title: 'DISCOVER', posterClass: 'p2' },
            { className: 'three', title: 'IMAGINE', posterClass: 'p3' },
            { className: 'five', title: 'SPIRIT', posterClass: 'p4' },
            { className: 'six', title: 'DESIGN', posterClass: 'p5' },
            { className: 'seven', title: 'CONQUER', posterClass: 'p6' },
            { className: 'eight', title: 'SUCCESS', posterClass: 'p7' },
            { className: 'nine', title: 'UNFORGETTABLE', posterClass: 'p8' },
            { className: 'ten', title: 'AMAZING', posterClass: 'p9' },
            { className: 'eleven', title: 'LOVE', posterClass: 'p10' },
            { className: 'tlv', title: 'LEARN', posterClass: 'p11' },
            { className: 'thirteen', title: 'YEP', posterClass: 'p12' },
            { className: 'ftn', title: 'SMILE', posterClass: 'p13' },
            { className: 'fith', title: 'CODE', posterClass: 'p14' },
            { className: 'sith', title: 'CARDS', posterClass: 'p15' },
            { className: 'sevth', title: 'FLEXBOX', posterClass: 'p16' },
        ]
    };
    const section0Data = {
        title: "Transforming Businesses with Mobile Apps",
        cards: [
            {
                title: "Enterprise Mobility Solution",
                date: "March 15, 2023",
                excerpt: "Empowering businesses with custom-built mobile apps for enhanced productivity and collaboration. Our solutions streamline operations and optimize workforce performance.",
                image: ERP,
                link: "/case-studies/enterprise-mobility"
            },
            {
                title: "Retail Mobile App",
                date: "May 5, 2022",
                excerpt: "Delivering exceptional mobile shopping experiences. Our retail apps drive sales, customer engagement, and loyalty through personalized features and seamless checkout.",
                image: CustomizedPC,
                link: "/case-studies/retail-mobile-app"
            },
            {
                title: "Healthcare Mobile App",
                date: "July 28, 2021",
                excerpt: "Revolutionizing healthcare with patient-centric mobile apps. Our solutions improve access to care, patient engagement, and operational efficiency.",
                image: Healthcare,
                link: "/case-studies/healthcare-mobile-app"
            },
            {
                title: "Financial Mobile App",
                date: "November 12, 2020",
                excerpt: "Building secure and user-friendly financial mobile apps. Our solutions enable seamless transactions, personalized financial management, and enhanced customer experience.",
                image: Fintech,
                link: "/case-studies/financial-mobile-app"
            },
            // Add more card objects as needed
        ]
    };

    const articlesData = {
        title: "Featured Mobile Apps",
        articles: [
            {
                image: SP1,
                alt: "Mobile Banking App",
                heading: "Mobile Banking",
                description: "Experience the future of banking with our mobile app. Manage your finances, transfer funds, and pay bills on the go.",
                link: "#"
            },
            {
                image: SP2,
                alt: "Food Delivery App",
                heading: "Food Delivery",
                description: "Satisfy your cravings with our food delivery app. Browse menus, order food, and track your delivery in real-time.",
                link: "#"
            },
            {
                image: SP3,
                alt: "Fitness App",
                heading: "Fitness App",
                description: "Achieve your fitness goals with our personalized workout plans and tracking features.",
                link: "#"
            },
        ]
    };
    const VerticalcardData = [
        {
            heading: 'AI-Powered School Management',
            content: 'Streamline your school\'s operations with our AI-driven management dashboard. Automate tasks, personalize learning experiences, and gain valuable insights into student performance.',
            image: S1,
            buttonText: 'Learn More'
        },
        {
            heading: 'Customizable Industry Solutions',
            content: 'Tailor-made software to meet the unique needs of your industry. From healthcare to manufacturing, we provide solutions that drive efficiency and growth.',
            image: CustomizedPC,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'Integrated Invoicing and Accounting',
            content: 'Simplify your financial management with our seamlessly integrated invoicing and accounting software. Save time and reduce errors.',
            image: S2,
            buttonText: 'See Demo'
        },
        {
            heading: 'Customer Relationship Management (CRM)',
            content: 'Build stronger customer relationships and boost sales with our comprehensive CRM solution. Track interactions, manage leads, and analyze customer data.',
            image: S3,
            buttonText: 'Request a Demo'
        },
        {
            heading: 'Data Analytics and Visualization',
            content: 'Uncover actionable insights from your data with our advanced analytics and visualization tools. Make data-driven decisions to optimize your business.',
            image: S4,
            buttonText: 'Learn More'
        },
        {
            heading: 'Cybersecurity Solutions',
            content: 'Protect your business from cyber threats with our robust security solutions. Safeguard your data and systems with our comprehensive suite of tools.',
            image: S5,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'E-commerce Platform',
            content: 'Create a seamless online shopping experience with our feature-rich e-commerce platform. Increase sales and customer satisfaction.',
            image: S6,
            buttonText: 'Start Selling'
        },
        {
            heading: 'Human Resources Management (HRM)',
            content: 'Streamline HR processes and optimize your workforce with our comprehensive HRM solution. Manage talent, track performance, and boost employee engagement.',
            image: S7,
            buttonText: 'Learn More'
        },
        {
            heading: 'IoT Solutions',
            content: 'Leverage the power of IoT with our custom solutions. Connect devices, collect data, and gain valuable insights.',
            image: S2,
            buttonText: 'Explore IoT'
        },
        {
            heading: 'Blockchain Development',
            content: 'Build secure and transparent applications with our blockchain expertise. Create trust and efficiency in your business.',
            image: SP2,
            buttonText: 'Learn More'
        }
    ];

    const OvcardData = [
        {
            title: 'User-Centric Design',
            text: 'We prioritize user experience in every app we build. Our designs are intuitive and engaging.',
            image: '../assets/Vedio/P1.jpg',
            description: 'User-centric design is at the core of our development process. We create apps that are easy to use and delightful to interact with.'
        },
        {
            title: 'Performance Optimization',
            text: 'Deliver fast and responsive apps. Our team is dedicated to optimizing app performance for a seamless user experience.',
            image: '../assets/Vedio/P1.jpg',
            description: 'We focus on building apps that load quickly and respond instantly to user interactions.'
        },
        {
            title: 'Security First',
            text: 'Protect your users data with robust security measures.Our apps are built with security in mind.',
            image: '../assets/Vedio/P1.jpg',
            description: 'We prioritize data privacy and implement industry best practices to safeguard user information.'
        },
        // Add more cards as needed
    ];

    const BannercarouselItems = [
        {
            image: MobileBanner,
            title: 'Mobile App Solutions',
            description: 'Transform your business with our cutting-edge mobile app development services.',
            buttonText: 'Get Started'
        },
    ];

    return (
        <div className="content-container">
            <Navbar />
            <AIBanner />
            <ParentSol />
            <ParentChild2 />
            < MLCardLeft_Ops_Sol />
            <TeckStack/>
           
            <Catelog2 />
            <Catelog3 />
            <AIGrowth />
            <YearofExperience />
            {*//*  <Simp_Banner items={BannercarouselItems} />
            <VerticalSection title="Our Recent Works" cards={VerticalcardData} />
            <Section0 title={section0Data.title} cards={section0Data.cards} />
            <CardContentOv title="Our Recent Works" cards={OvcardData} />
            *//*}{*//*<Section2 title={section2Data.title} boxes={section2Data.boxes} />*//*}{*//*
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />*//*}
            <Footer />
        </div>
    );
}

export default WebApp;
*/