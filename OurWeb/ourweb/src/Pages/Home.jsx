// Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../Component/navbar';
import './style.css';
import Banner from '../Component/Banner';
import Section2 from '../Component/Section2';
import Added from '../Component/Added';
import Testimonial from '../Component/Testimonial';
import Section4 from '../Component/Section4';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import SimpleCard from '../Component/Template/SimpleCard';
import AutoSlider from '../Component/AutoSlider';
import Section0 from '../Component/Template/Section0';
import Healthcare from '../assets/Vedio/624111.jpg';
import ERP from '../assets/Vedio/erp.png';
import Fintech from '../assets/Vedio/fintech.jpg';
import LuxuryShop from '../assets/Vedio/luxuryeshop.jpg';

function Home() {
    useEffect(() => {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add scroll animation for sections
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(section => {
            observer.observe(section);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', function (e) {
                    e.preventDefault();
                });
            });

            document.querySelectorAll('.animate-on-scroll').forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    const articlesData = {
        title: "Our Recent Works",
        articles: [
            {
                image: SP1,
                alt: "PredictiveAI Insights",
                heading: "PredictiveAI Insights",
                description: "PredictiveAI Insights is a cutting-edge software platform that leverages advanced machine learning algorithms to provide actionable insights from complex data sets. By uncovering hidden patterns and trends, businesses can make data-driven decisions with unparalleled accuracy and speed.",
                link: "#",
            },
            {
                image: SP2,
                alt: "CyberShield Enterprise",
                heading: "CyberShield Enterprise",
                description: "CyberShield Enterprise is a comprehensive cybersecurity platform designed to protect businesses from evolving cyber threats. With robust features such as advanced threat detection, incident response, and vulnerability management, our software provides a fortified defense against cyberattacks.",
                link: "#",
            },
            {
                image: SP3,
                alt: "SupplyChainOptimus",
                heading: "SupplyChainOptimus",
                description: "SupplyChainOptimus is a cloud-based supply chain management solution that optimizes operations, reduces costs, and improves efficiency. Our software utilizes advanced analytics and AI to forecast demand, optimize inventory levels, and streamline logistics.",
                link: "#",
            },
        ],
    };

    const Autocards = [
        {
            image: SP1,
            header: 'AI-Powered Personalized Nutrition',
            description: 'Revolutionize the wellness industry with AI-driven nutrition plans tailored to individual needs and preferences.'
        },
        {
            image: SP2,
            header: 'Smart Home Automation',
            description: 'Create intelligent living spaces with our smart home automation solutions. Control devices, optimize energy consumption, and enhance security.'
        },
        {
            image: SP3,
            header: 'Virtual and Augmented Reality Gaming',
            description: 'Immerse players in exciting virtual and augmented reality gaming experiences. Develop captivating games with cutting-edge technology.'
        },
        // Additional cards (abbreviated for brevity)
        // You can include the full list from your original code
    ];

    const section0Data = {
        title: "Transforming Industries: Solutions That Deliver",
        cards: [
            {
                title: "Product Development and Growth",
                date: "March 15, 2023",
                excerpt: "Ignite Innovation, Drive Growth. Our expert team specializes in crafting tailored product solutions that optimize your business performance. From ideation to market launch, we deliver exceptional products that exceed expectations.",
                image: ERP,
                link: "/case-studies/erp-solution"
            },
            {
                title: "Enterprise Applications Development",
                date: "May 5, 2022",
                excerpt: "Transform Your Business with Cutting-Edge Solutions. Our enterprise application development services address complex business challenges. From payroll to observability, we build scalable and robust solutions that drive efficiency and productivity.",
                image: LuxuryShop,
                link: "/case-studies/luxury-fashion-platform"
            },
            {
                title: "Systems Integration and Optimization",
                date: "July 28, 2021",
                excerpt: "Unleash the Power of Your Data. Our integration and optimization services seamlessly connect disparate systems, unlocking valuable insights. We optimize your technology stack for peak performance and ROI.",
                image: Healthcare,
                link: "/case-studies/healthcare-data-analytics"
            },
        ]
    };
 
    return (
        <div className="home-container">
                    <Navbar />
                    <Banner />

       
                <section className="section added-section animate-on-scroll">
                    <Added />
                </section>

                <section className="section section2-section animate-on-scroll">
                    <Section2 />
                </section>

                <section className="section section0-section animate-on-scroll">
                    <Section0 title={section0Data.title} cards={section0Data.cards} />
                </section>

                <section className="section simplecard-section animate-on-scroll">
                    <SimpleCard title={articlesData.title} articles={articlesData.articles} />
                </section>

                <section className="section testimonial-section animate-on-scroll">
                    <Testimonial />
                </section>

                <section className="section autoslider-section animate-on-scroll">
                    <AutoSlider cards={Autocards} />
                </section>

                <section className="section section4-section animate-on-scroll">
                    <Section4 />
                </section>

                <section className="section contact-section animate-on-scroll">
                    <Contact />
                </section>
         
            <Footer />
        </div>
    );
}

export default Home;