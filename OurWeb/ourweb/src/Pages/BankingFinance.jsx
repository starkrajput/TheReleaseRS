// BankingFinance.jsx
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
// Placeholder images
//import BannerImg1 from '../assets/Vedio/A1.jpg';
import BFOne from '../assets/Bhanulic/BankingFinance/14.png';
import ServiceImg1 from '../assets/Bhanulic/BankingFinance/1.png';
import ServiceImg2 from '../assets/Bhanulic/BankingFinance/18.png';
import ServiceImg3 from '../assets/Bhanulic/BankingFinance/2.png';
import CaseStudyImg1 from '../assets/Bhanulic/BankingFinance/3.png';
import CaseStudyImg2 from '../assets/Bhanulic/BankingFinance/4.png';
import CaseStudyImg3 from '../assets/Bhanulic/BankingFinance/6.png';
import OverviewImg1 from '../assets/Bhanulic/BankingFinance/6.png';
import OverviewImg2 from '../assets/Bhanulic/BankingFinance/7.png';
import OverviewImg3 from '../assets/Bhanulic/BankingFinance/8.png';
import OverviewImg4 from '../assets/Bhanulic/BankingFinance/10.png';
import OverviewImg5 from '../assets/Bhanulic/BankingFinance/11.png';
import OverviewImg6 from '../assets/Bhanulic/BankingFinance/12.png';
import OverviewImg7 from '../assets/Bhanulic/BankingFinance/13.png';
//import OverviewImg4 from '../assets/Bhanulic/BankingFinance/14.png';
import OverviewImg8 from '../assets/Bhanulic/BankingFinance/15.png';
import OverviewImg9 from '../assets/Bhanulic/BankingFinance/16.png';
import OverviewImg10 from '../assets/Bhanulic/BankingFinance/19.png';
import OverviewImg11  from '../assets/Vedio/A1.jpg';
import OverviewImg12 from '../assets/Vedio/A1.jpg';
import OverviewImg13 from '../assets/Vedio/A1.jpg';
import OverviewImg14 from '../assets/Vedio/A1.jpg';
import OverviewImg15 from '../assets/Vedio/A1.jpg';

function BankingFinance() {
    const bannerItems = [
        {
            image: BFOne,
            title: "Innovative Banking & Finance Solutions",
            description: "Empower your financial services with AI, blockchain, and secure digital transactions.",
            buttonText: "Explore Solutions"
        }
    ];

    const servicesCards = [
        { heading: "AI-Driven Risk Management", content: "Leverage AI to detect fraud, assess risks, and ensure compliance.", image: ServiceImg1, buttonText: "Learn More" },
        { heading: "Digital Payments & Wallets", content: "Enhance payment security with digital wallets, blockchain, and real-time transactions.", image: ServiceImg2, buttonText: "Learn More" },
        { heading: "Personalized Financial Insights", content: "AI-driven analytics to provide custom financial recommendations.", image: ServiceImg3, buttonText: "Learn More" }
    ];

    const caseStudiesCards = [
        { image: CaseStudyImg1, title: "Fraud Detection AI Implementation", excerpt: "How AI reduced fraudulent transactions by 40% in a leading bank.", date: "May 2024", link: "#" },
        { image: CaseStudyImg2, title: "Blockchain-Based Secure Payments", excerpt: "Enhanced payment security for a fintech company using blockchain.", date: "April 2024", link: "#" },
        { image: CaseStudyImg3, title: "Robo-Advisors for Wealth Management", excerpt: "Automated financial advisory improving portfolio performance.", date: "March 2024", link: "#" }
    ];

    const overviewCards = [
        { title: "AI-Powered Fraud Prevention", text: "Machine learning for anomaly detection", image: OverviewImg1, description: "Detect and prevent financial fraud using AI-driven analysis of transaction patterns and anomalies." },
        { title: "Blockchain Security Solutions", text: "Decentralized and tamper-proof transactions", image: OverviewImg2, description: "Enhance security and transparency in banking with blockchain-based transactions." },
        { title: "Automated Loan Processing", text: "Faster and more efficient credit approval", image: OverviewImg3, description: "Speed up loan approvals with AI-driven credit risk assessment and automated processing." },
        { title: "Personalized Wealth Management", text: "Smart investment recommendations", image: OverviewImg4, description: "Leverage AI to offer tailored financial advice and investment strategies." },
        { title: "RegTech & Compliance Automation", text: "Ensure regulatory adherence", image: OverviewImg5, description: "Automate compliance checks and reporting to meet financial regulations effortlessly." },
        { title: "Real-Time Market Insights", text: "AI-powered financial data analysis", image: OverviewImg6, description: "Get real-time insights into market trends, asset performance, and trading opportunities." }
    ];

    const recentArticles = [
        { heading: "AI in Banking: The Future", description: "How AI is revolutionizing the banking industry with automation and security.", image: OverviewImg8, alt: "AI in Banking", link: "#" },
        { heading: "Blockchain for Secure Transactions", description: "Blockchain adoption in financial transactions is ensuring security and transparency.", image: OverviewImg9, alt: "Blockchain Security", link: "#" },
        { heading: "Digital Wallets & Cashless Economy", description: "The rise of digital wallets and how they are transforming financial transactions.", image: OverviewImg10, alt: "Digital Wallets", link: "#" }
    ];

    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?',
    };

    return (
        <div className="banking-finance-container">
            <Navbar />
            <AiSolutionBanner
                title="Banking & Finance"
                subtitle="Explore Our Services"
                buttonText="Explore Our Services"
                inquiryTitle="How Much Does Banking & Finance Software Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 6 + 3 ="
                backgroundImage={BFOne}
            />
            <ScrollTrigger>
                <VerticalSection title="Our Banking & Finance Services" cards={servicesCards} />
            </ScrollTrigger>
            <ScrollTrigger>
                <Section0 title="Case Studies & Success Stories" cards={caseStudiesCards} />
            </ScrollTrigger>
            <ScrollTrigger>
                <CardContentOv title="Solutions Overview" cards={overviewCards} />
            </ScrollTrigger>
            <ScrollTrigger>
                <SimpleCard title="Recent Projects" articles={recentArticles} />
            </ScrollTrigger>
            <Footer />
        </div>
    );
}

export default BankingFinance;
