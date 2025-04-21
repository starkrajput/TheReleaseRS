import React from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import Simp_Banner from '../Component/Template/Simp_Banner';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import SimpleCard from '../Component/Template/SimpleCard';

// Import images
import black from '../assets/black.jpg'; // black
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

function AboutRSV() {
    const bannerItems = [
        {
            image: black,
            title: "Innovating Since 2016",
            description: "RSV Technologies – A pioneer in digital transformation, delivering excellence in software development and AI-powered solutions worldwide.",
            buttonText: "Discover Our Journey"
        },
        {
            image: black,
            title: "Empowering Businesses with Cutting-Edge Technology",
            description: "Building intelligent solutions that drive efficiency, growth, and innovation across industries.",
            buttonText: "Explore Our Expertise"
        }
    ];

    const aboutContent = [
        {
            heading: "Our Mission",
            content: "To revolutionize industries with intelligent and scalable software solutions, empowering businesses to thrive in the digital era.",
            image: black,
        },
        {
            heading: "Our Vision",
            content: "To be a global leader in AI-driven software solutions, setting new standards for innovation, efficiency, and reliability.",
            image: black,
        },
        {
            heading: "Our Core Values",
            content: "Integrity, Innovation, Excellence, and Customer-Centricity drive everything we do.",
            image: black,
        }
    ];

    const journeyCards = [
        {
            image: black,
            title: "Founded in 2016",
            excerpt: "RSV Technologies started with a vision to redefine software development, delivering custom solutions that solve real-world problems.",
            date: "2016",
        },
        {
            image: black,
            title: "Expanding Horizons",
            excerpt: "With a growing team of innovators and developers, RSV Technologies ventured into AI, cloud computing, and enterprise solutions.",
            date: "2018",
        },
        {
            image: black,
            title: "Global Impact",
            excerpt: "Today, RSV Technologies serves clients worldwide, driving digital transformation through cutting-edge technology and AI-powered solutions.",
            date: "Present",
        }
    ];
  

    const inputPlaceholders = {
        name: 'Name',
        email: 'you@company-email.com',
        phone: 'Phone No',
        message: 'How can we assist you?',
    };
    const BannercarouselItems = [
        {
            image: black,
            title: 'About RSV Technologies',
            description: 'A Journey of Innovation & Excellence',
            buttonText: 'The Revolution'
        }
    ];
    return (
        <div className="about-rsv-container">
            <Navbar />
            <Simp_Banner
                items={BannercarouselItems}
            />

            <ScrollTrigger>
                <VerticalSection
                    title="Who We Are"
                    cards={aboutContent}
                />
            </ScrollTrigger>

            <ScrollTrigger>
                <Section0
                    title="Our Journey Through the Years"
                    cards={journeyCards}
                />
            </ScrollTrigger>

            <CardContentOv
                title="Why Choose RSV Technologies?"
                cards={[
                    {
                        title: "Industry Expertise",
                        text: "8+ years of software excellence",
                        image: black,
                        description: "With expertise across industries, we deliver tailored digital solutions that meet business needs."
                    },
                    {
                        title: "Innovative Solutions",
                        text: "AI & Emerging Technologies",
                        image: black,
                        description: "From AI-driven automation to cloud solutions, we help businesses stay ahead in a competitive landscape."
                    },
                    {
                        title: "Client-Centric Approach",
                        text: "Your Success, Our Priority",
                        image: black,
                        description: "We work closely with our clients, ensuring every solution aligns with their vision and objectives."
                    }
                ]}
            />

            <SimpleCard
                title="Ready to Transform Your Business?"
                articles={[
                    {
                        heading: "Partner with RSV Technologies",
                        description: "Join hands with an industry leader in software development and AI solutions.",
                        image: black,
                        alt: "RSV Partnership",
                        link: "#"
                    },
                    {
                        heading: "Explore Our Services",
                        description: "From enterprise software to AI automation, we deliver cutting-edge solutions.",
                        image: black,
                        alt: "RSV Services",
                        link: "#"
                    }
                ]}
            />

            <Footer />
        </div>
    );
}

export default AboutRSV;
