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
import SoftwareBanner from '../assets/Vedio/SoftwareApp.jpg';
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
import './SoftwareApp.css';

function SoftwareApp() {
    // Case studies data
    const section0Data = {
        title: "Software Success Stories",
        cards: [
            {
                title: "Enterprise Resource Planning (ERP) Solution",
                date: "April 18, 2023",
                excerpt: "Developed a comprehensive ERP system for a manufacturing company that integrated finance, inventory, production, and HR modules, resulting in a 35% increase in operational efficiency.",
                image: ERP,
                link: "/case-studies/erp-solution"
            },
            {
                title: "Healthcare Management System",
                date: "February 22, 2022",
                excerpt: "Created a custom healthcare management solution for a hospital network that streamlined patient records, appointment scheduling, and billing processes, reducing administrative workload by 42%.",
                image: Healthcare,
                link: "/case-studies/healthcare-system"
            },
            {
                title: "Financial Services Platform",
                date: "September 15, 2021",
                excerpt: "Built a secure financial services platform that enabled real-time transaction processing, automated compliance checks, and comprehensive reporting, improving client satisfaction by 47%.",
                image: Fintech,
                link: "/case-studies/financial-platform"
            },
            {
                title: "Retail Inventory Management System",
                date: "June 30, 2020",
                excerpt: "Implemented an advanced inventory management system for a retail chain that optimized stock levels, automated reordering, and provided sales analytics, reducing stockouts by 68%.",
                image: LuxuryShop,
                link: "/case-studies/inventory-system"
            }
        ]
    };

    // Vertical section data
    const VerticalcardData = [
        {
            heading: 'Enterprise Software Development',
            content: 'Build powerful enterprise applications that integrate seamlessly with your existing systems. Our enterprise solutions streamline operations, enhance collaboration, and provide valuable business insights.',
            image: S1,
            buttonText: 'Learn More'
        },
        {
            heading: 'Custom CRM Solutions',
            content: 'Develop tailored customer relationship management systems that align perfectly with your sales processes and customer engagement strategies. Enhance customer satisfaction and boost sales performance.',
            image: CustomizedPC,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'ERP Implementation',
            content: 'Integrate your business processes with comprehensive ERP solutions. Our custom ERP systems connect finance, HR, supply chain, and operations into a unified platform for maximum efficiency.',
            image: S2,
            buttonText: 'See Demo'
        },
        {
            heading: 'Business Intelligence Software',
            content: 'Transform your data into actionable insights with our BI solutions. Create interactive dashboards, automated reports, and data visualization tools that support informed decision-making.',
            image: S3,
            buttonText: 'Request a Demo'
        },
        {
            heading: 'SaaS Application Development',
            content: 'Build scalable, cloud-based SaaS applications that deliver value to your customers while creating recurring revenue streams. Our SaaS solutions include robust security, multi-tenancy, and subscription management.',
            image: S4,
            buttonText: 'Learn More'
        },
        {
            heading: 'Legacy System Modernization',
            content: 'Breathe new life into your legacy applications with our modernization services. We refactor, re-architect, or rebuild outdated systems to improve performance, security, and user experience.',
            image: S5,
            buttonText: 'Explore Solutions'
        }
    ];

    // Overview cards data
    const OvcardData = [
        {
            title: 'Scalable Architecture',
            text: 'We design software architectures that can grow with your business. Our solutions are built to handle increasing loads, users, and data without compromising performance.',
            image: Ov1,
            description: 'Our software architects create flexible, modular designs that accommodate changing business requirements and technological advancements, ensuring your investment is future-proof.'
        },
        {
            title: 'Agile Development',
            text: 'We follow agile methodologies to deliver value incrementally, adapt to changing requirements, and maintain close collaboration throughout the development process.',
            image: Ov2,
            description: 'Our iterative approach ensures regular delivery of working software, allowing you to see progress, provide feedback, and make adjustments as your project evolves.'
        },
        {
            title: 'Comprehensive Testing',
            text: 'Quality is built into every step of our development process. We implement rigorous testing protocols to ensure your software is reliable, secure, and performs optimally.',
            image: Ov3,
            description: 'Our QA team uses automated and manual testing methodologies to identify and resolve issues before they impact your users, ensuring a seamless experience from day one.'
        }
    ];

    // Recent works data
    const articlesData = {
        title: "Featured Software Solutions",
        articles: [
            {
                image: SP1,
                alt: "EnterpriseConnect ERP",
                heading: "EnterpriseConnect ERP",
                description: "A comprehensive enterprise resource planning solution that integrates all aspects of your business operations. EnterpriseConnect streamlines processes, enhances collaboration, and provides real-time insights for informed decision-making.",
                link: "#",
            },
            {
                image: SP2,
                alt: "CustomerInsight CRM",
                heading: "CustomerInsight CRM",
                description: "A powerful customer relationship management platform designed to optimize sales processes, enhance customer engagement, and drive revenue growth. CustomerInsight provides a 360-degree view of your customers and their interactions.",
                link: "#",
            },
            {
                image: SP3,
                alt: "DataVision Analytics",
                heading: "DataVision Analytics",
                description: "An advanced business intelligence solution that transforms raw data into meaningful insights. DataVision features interactive dashboards, automated reporting, and predictive analytics to support strategic decision-making.",
                link: "#",
            }
        ]
    };

    // Banner data
    const BannercarouselItems = [
        {
            image: SoftwareBanner,
            title: 'Software Solutions',
            description: 'Empower your business with custom software applications designed to streamline operations, enhance productivity, and drive innovation across your organization.',
            buttonText: 'Explore Solutions'
        }
    ];

    return (
        <div className="software-app-container">
            <Navbar />
            <Simp_Banner items={BannercarouselItems} />
            <VerticalSection title="Software Development Services" cards={VerticalcardData} />
            <Section0 title={section0Data.title} cards={section0Data.cards} />
            <CardContentOv title="Our Software Development Approach" cards={OvcardData} />
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />
            <Footer />
        </div>
    );
}

export default SoftwareApp;