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

// Import images (Replace with actual images)
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

function Legal() {
    // Banner Content
    const bannerItems = [
        {
            image: BannerImg1,
            title: "Legal Tech Solutions",
            description: "Revolutionizing legal services with AI-driven automation, document management, and compliance tracking.",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "Digital Transformation for Law Firms",
            description: "Enhance efficiency, streamline case management, and improve client experiences with our legal tech solutions.",
            buttonText: "Get Started"
        }
    ];

    // Services
    const servicesCards = [
        {
            heading: "AI-Powered Legal Research",
            content: "Utilize AI to analyze case laws, precedents, and legal documents in seconds, enhancing legal research accuracy and efficiency.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Document Automation",
            content: "Generate legal documents, contracts, and agreements instantly using smart templates and automation tools.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "Client Management Portals",
            content: "Provide secure client portals for easy case updates, file sharing, and communication, improving client satisfaction.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    // Case Studies
    const caseStudiesCards = [
        {
            image: CaseStudyImg1,
            title: "AI-Driven Legal Research Platform",
            excerpt: "How an AI-powered research tool helped lawyers reduce case research time by 60%.",
            date: "March 2024",
            link: "#"
        },
        {
            image: CaseStudyImg2,
            title: "Blockchain-Based Legal Contracts",
            excerpt: "Implemented smart contracts for a law firm, improving security and eliminating document fraud.",
            date: "April 2024",
            link: "#"
        },
        {
            image: CaseStudyImg3,
            title: "Automated Compliance Tracking",
            excerpt: "Developed a compliance tracking tool that reduced regulatory risks by 40% for a multinational firm.",
            date: "May 2024",
            link: "#"
        }
    ];

    // Overview Cards
    const overviewCards = [
        {
            title: "E-Discovery Solutions",
            text: "Efficient data analysis for case preparation",
            image: OverviewImg1,
            description: "Streamline case preparation with AI-driven e-discovery tools that extract relevant data from large volumes of legal documents."
        },
        {
            title: "Contract Lifecycle Management",
            text: "Automated contract drafting and tracking",
            image: OverviewImg2,
            description: "Manage contracts efficiently with end-to-end tracking, auto-renewal reminders, and AI-based clause suggestions."
        },
        {
            title: "Cybersecurity & Legal Data Protection",
            text: "Ensuring confidentiality and compliance",
            image: OverviewImg3,
            description: "Protect sensitive legal data with encrypted storage, secure client communications, and compliance with data protection regulations."
        },
        {
            title: "Virtual Legal Consultations",
            text: "Seamless digital client interactions",
            image: OverviewImg4,
            description: "Enable video conferencing, chatbots, and AI-driven legal assistance to improve client engagement and accessibility."
        },
        {
            title: "Legal Billing Automation",
            text: "Automate invoicing and time tracking",
            image: OverviewImg5,
            description: "Track billable hours, generate invoices, and integrate with accounting systems for effortless legal billing."
        },
        {
            title: "Regulatory Compliance Monitoring",
            text: "Stay updated with legal changes",
            image: OverviewImg6,
            description: "Use AI to monitor evolving regulations and ensure that your firm remains compliant with legal requirements."
        }
    ];

    // Recent Work Articles
    const recentArticles = [
        {
            heading: "AI in Legal Tech: A Game Changer",
            description: "Explore how AI is transforming the legal industry, reducing costs, and improving efficiency.",
            image: RecentImg1,
            alt: "AI in Legal Tech",
            link: "#"
        },
        {
            heading: "Blockchain & Smart Contracts in Law",
            description: "How blockchain is making legal agreements more secure, transparent, and tamper-proof.",
            image: RecentImg2,
            alt: "Blockchain in Law",
            link: "#"
        },
        {
            heading: "Digital Case Management Systems",
            description: "The impact of cloud-based case management software on law firm productivity and client satisfaction.",
            image: RecentImg3,
            alt: "Case Management Systems",
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
        <div className="legal-container">
            <Navbar />
            <AiSolutionBanner
                title="Legal Tech Solutions"
                subtitle="Transform Your Legal Services with AI & Automation"
                buttonText="Explore Our Solutions"
                inquiryTitle="How Much Does Legal Tech Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 6 + 3 ="
            />

            <ScrollTrigger>
                <VerticalSection
                    title="Our Legal Technology Services"
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
                    title="Recent Insights & Legal Tech Innovations"
                    articles={recentArticles}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default Legal;
