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

function MediaEntertainment() {
    const bannerItems = [
        {
            image: BannerImg1,
            title: "AI in Media & Entertainment",
            description: "Revolutionizing content creation, distribution, and audience engagement with AI-driven solutions.",
            buttonText: "Explore Solutions"
        },
        {
            image: BannerImg2,
            title: "Personalized Content Experiences",
            description: "Deliver customized content recommendations and immersive media experiences powered by AI.",
            buttonText: "Get Started"
        }
    ];

    const servicesCards = [
        {
            heading: "AI-Driven Content Recommendation",
            content: "Enhance user engagement with AI-powered content curation and recommendations.",
            image: ServiceImg1,
            buttonText: "Learn More"
        },
        {
            heading: "Automated Video Editing",
            content: "Streamline video production with AI-powered editing tools and automation.",
            image: ServiceImg2,
            buttonText: "Learn More"
        },
        {
            heading: "AI-Powered Media Analytics",
            content: "Gain insights into audience behavior and content performance with AI-driven analytics.",
            image: ServiceImg3,
            buttonText: "Learn More"
        }
    ];

    const caseStudiesCards = [
        {
            image: CaseStudyImg1,
            title: "AI in Music Streaming",
            excerpt: "How AI-powered algorithms are reshaping music discovery and personalization.",
            date: "March 2024",
            link: "#"
        },
        {
            image: CaseStudyImg2,
            title: "AI-Generated Video Content",
            excerpt: "Exploring the rise of AI-generated video content and automated storytelling.",
            date: "April 2024",
            link: "#"
        },
        {
            image: CaseStudyImg3,
            title: "AI-Powered News Reporting",
            excerpt: "How AI is assisting journalists in real-time news analysis and reporting.",
            date: "May 2024",
            link: "#"
        }
    ];

    const overviewCards = [
        {
            title: "AI-Generated Content",
            text: "Automated content creation",
            image: OverviewImg1,
            description: "Create articles, scripts, and news reports using AI-driven content generation."
        },
        {
            title: "Smart Content Moderation",
            text: "AI-based moderation",
            image: OverviewImg2,
            description: "Ensure compliance and filter inappropriate content with AI-powered moderation."
        },
        {
            title: "Personalized Streaming",
            text: "AI-driven recommendations",
            image: OverviewImg3,
            description: "Deliver personalized video and music streaming experiences using AI."
        },
        {
            title: "Automated Video Subtitling",
            text: "Real-time AI captions",
            image: OverviewImg4,
            description: "Enhance accessibility with AI-generated subtitles and real-time captions."
        },
        {
            title: "AI in Animation & VFX",
            text: "Enhanced visual effects",
            image: OverviewImg5,
            description: "Leverage AI to create stunning visual effects and automate animation workflows."
        },
        {
            title: "Audience Sentiment Analysis",
            text: "Real-time audience insights",
            image: OverviewImg6,
            description: "Analyze audience reactions and feedback using AI-driven sentiment analysis."
        }
    ];

    const recentArticles = [
        {
            heading: "How AI is Revolutionizing Film & TV",
            description: "Explore the role of AI in scriptwriting, editing, and production.",
            image: RecentImg1,
            alt: "AI in Film & TV",
            link: "#"
        },
        {
            heading: "The Future of AI in Music Creation",
            description: "How AI is composing music and transforming the music industry.",
            image: RecentImg2,
            alt: "AI in Music",
            link: "#"
        },
        {
            heading: "AI-Powered Newsrooms",
            description: "How AI is shaping the future of journalism and media reporting.",
            image: RecentImg3,
            alt: "AI in Journalism",
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
        <div className="media-entertainment-container">
            <Navbar />
            <AiSolutionBanner
                title="Media & Entertainment AI Solutions"
                subtitle="Transforming Media, Content Creation & Engagement with AI"
                buttonText="Explore Our Solutions"
                inquiryTitle="How Much Does AI-Powered Media Cost?"
                inputPlaceholders={inputPlaceholders}
                captchaQuestion="What is 9 + 6 ="
            />

            <ScrollTrigger>
                <VerticalSection
                    title="AI-Powered Media & Entertainment Services"
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
                    title="Recent Innovations in AI for Media & Entertainment"
                    articles={recentArticles}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default MediaEntertainment;
