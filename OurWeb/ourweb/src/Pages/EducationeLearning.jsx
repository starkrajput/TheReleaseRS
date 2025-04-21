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
import black from '../assets/black.jpg'; // black
function EducationELearning() {
    const bannerItems = [
        {
            image: black,
            title: "Revolutionizing Online Learning",
            description: "Enhance digital education with AI-powered platforms, interactive content, and smart assessments.",
            buttonText: "Explore Solutions"
        },
        {
            image: black,
            title: "Smart Education Systems",
            description: "Personalized learning, virtual classrooms, and adaptive AI-driven education solutions.",
            buttonText: "Get Started"
        }
    ];

    const servicesCards = [
        {
            heading: "AI-Powered Learning Analytics",
            content: "Use AI to analyze student performance and deliver personalized learning experiences.",
            image: black,
            buttonText: "Learn More"
        },
        {
            heading: "Interactive Virtual Classrooms",
            content: "Engage students with real-time collaboration tools and immersive virtual learning environments.",
            image: black,
            buttonText: "Learn More"
        },
        {
            heading: "Automated Assessment Systems",
            content: "AI-based grading and feedback to streamline student evaluations and track progress.",
            image: black,
            buttonText: "Learn More"
        }
    ];

    const caseStudiesCards = [
        {
            image: black,
            title: "AI-Powered Student Performance Tracking",
            excerpt: "How AI increased learning outcomes by 40% in online education.",
            date: "March 2024",
            link: "#"
        },
        {
            image: black,
            title: "VR in Education: A New Reality",
            excerpt: "How virtual reality is making e-learning more interactive and engaging.",
            date: "April 2024",
            link: "#"
        },
        {
            image: black,
            title: "Adaptive Learning Platforms",
            excerpt: "AI-driven personalized learning experiences improving student engagement.",
            date: "May 2024",
            link: "#"
        }
    ];

    const overviewCards = [
        {
            title: "AI Tutors & Chatbots",
            text: "24/7 AI tutoring",
            image: black,
            description: "AI-driven chatbots provide instant answers and tutoring support for students."
        },
        {
            title: "Gamified Learning",
            text: "Interactive learning experiences",
            image: black,
            description: "Use gamification to make learning engaging and effective for students of all ages."
        },
        {
            title: "Smart Content Generation",
            text: "AI-curated study material",
            image: black,
            description: "Generate personalized study material using AI-powered content curation."
        },
        {
            title: "Augmented Reality Learning",
            text: "Immersive educational experiences",
            image: black,
            description: "Use AR to create hands-on interactive learning environments."
        },
        {
            title: "AI-Powered Student Engagement",
            text: "Data-driven engagement strategies",
            image: black,
            description: "Track student engagement levels and optimize learning experiences using AI analytics."
        },
        {
            title: "Cloud-Based Learning Management Systems",
            text: "Seamless digital education",
            image: black,
            description: "Enhance digital learning experiences with scalable and flexible cloud-based LMS platforms."
        }
    ];

    const recentArticles = [
        {
            heading: "AI in Education: Transforming Learning",
            description: "Discover how AI is shaping the future of digital learning.",
            image: black,
            alt: "AI in Education",
            link: "#"
        },
        {
            heading: "Future of Virtual Classrooms",
            description: "How interactive and collaborative tools are enhancing education.",
            image: black,
            alt: "Virtual Classrooms",
            link: "#"
        },
        {
            heading: "The Role of AR/VR in Learning",
            description: "How augmented and virtual reality are creating immersive learning experiences.",
            image: black,
            alt: "AR VR in Education",
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
        <div className="education-elearning-container">
            <Navbar />
            <AiSolutionBanner
                title="Education & eLearning Solutions"
                subtitle="Revolutionizing Learning with AI, Virtual Classrooms & Smart EdTech"
                buttonText="Explore Our Solutions"
                inquiryTitle="How Much Does EdTech Development Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 8 + 3 ="
            />

            <ScrollTrigger>
                <VerticalSection
                    title="Our eLearning & Education Services"
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
                    title="Recent Insights & Innovations in eLearning"
                    articles={recentArticles}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default EducationELearning;
