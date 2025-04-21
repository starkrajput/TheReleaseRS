// AiSolutions.jsx
import React from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import AiSolutionsBanner from '../Component/AiSolutions/AiSolutionsBanner';
import AiServicesCatalog from '../Component/AiSolutions/AiServicesCatalog';
import AiBusinessBenefits from '../Component/AiSolutions/AiBusinessBenefits';
import AiCaseStudy from '../Component/AiSolutions/AiCaseStudy';
import AiGrowthStats from '../Component/AiSolutions/AiGrowthStats';
import AiExpertiseSection from '../Component/AiSolutions/AiExpertiseSection';

// Import images
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg';
import S5 from '../assets/Vedio/P2.jpg';
import S6 from '../assets/Vedio/P3.jpg';
import S7 from '../assets/Vedio/P4.jpg';
import black from '../assets/black.jpg'; // black
function AiSolutions() {
    // Form placeholders for inquiry forms
    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'Tell us more about your requirement?',
    };

    // Catalog sections data
    const catalogSections = [
        {
            heading: 'Enterprise AI and Machine Learning',
            description: 'Step into the next era of the digital ecosystem with our enterprise-grade AI and ML solutions. We help businesses leverage the power of artificial intelligence to automate processes, gain insights from data, and make better decisions.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S2
        },
        {
            heading: 'Natural Language Processing',
            description: 'Our NLP solutions enable computers to understand, interpret, and generate human language. From sentiment analysis to chatbots and language translation, we build systems that can process and analyze text with human-like understanding.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S1
        },
        {
            heading: 'Computer Vision Solutions',
            description: 'Transform how your systems interpret visual information with our computer vision solutions. We develop applications that can identify objects, recognize faces, analyze scenes, and extract meaningful information from images and videos.',
            primaryButtonText: 'READ MORE',
            secondaryButtonText: 'GET A QUOTE',
            image: S3
        }
    ];

    return (
        <div className="home-container">
            <Navbar />
            <AiSolutionsBanner
                title="AI Solutions"
                subtitle="Explore Our AI Services"
                buttonText="Explore Our AI Services"
                inquiryTitle="How Much Does AI Software Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 4 + 5 ="
                backgroundImage={black}
            />

            <ScrollTrigger>
                <AiServicesCatalog
                    title="Explore Our Artificial Intelligence Development Services"
                    subtitle="Convert your AI vision into a reality with our cost-effective and reliable AI solution development services for every industry."
                    sections={catalogSections}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <AiBusinessBenefits />
            </ScrollTrigger>

            <ScrollTrigger>
                <AiCaseStudy />
            </ScrollTrigger>

            <ScrollTrigger>
                <AiGrowthStats />
            </ScrollTrigger>

            <ScrollTrigger>
                <AiExpertiseSection />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default AiSolutions;