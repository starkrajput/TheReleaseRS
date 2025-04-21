import React, { useEffect, useRef, useState } from 'react';
import './Section4.css';
import R1 from '../assets/A1.jpg';

const Section4 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeBox, setActiveBox] = useState(0);
    const sectionRef = useRef(null);
    const cubeRef = useRef(null);

    // Features data
    const features = [
        {
            title: "Expert Team",
            description: "Our team consists of industry experts with years of experience in delivering high-quality solutions.",
            icon: "fa-solid fa-users"
        },
        {
            title: "Innovative Approach",
            description: "We stay ahead of the curve by embracing the latest technologies and methodologies.",
            icon: "fa-solid fa-lightbulb"
        },
        {
            title: "Quality Assurance",
            description: "Rigorous testing and quality control processes ensure flawless product delivery.",
            icon: "fa-solid fa-check-circle"
        },
        {
            title: "24/7 Support",
            description: "Our dedicated support team is always available to address your concerns and queries.",
            icon: "fa-solid fa-headset"
        },
        {
            title: "Tailored Solutions",
            description: "We craft custom solutions that perfectly align with your business requirements and goals.",
            icon: "fa-solid fa-cogs"
        },
        {
            title: "Timely Delivery",
            description: "We value your time and ensure that projects are completed within the agreed timeframe.",
            icon: "fa-solid fa-clock"
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-container");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Auto-rotate cube
    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setActiveBox((prev) => (prev + 1) % features.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [isVisible, features.length]);

    // Update cube rotation when activeBox changes - Fixed rotation calculation
    useEffect(() => {
        if (cubeRef.current && isVisible) {
            // Calculate rotation angle for the active face to be at the front
            const rotationAngle = -activeBox * (360 / features.length);
            cubeRef.current.style.transform = `rotateY(${rotationAngle}deg)`;
        }
    }, [activeBox, isVisible, features.length]);

    return (
        <section
            ref={sectionRef}
            className={`section-4 ${isVisible ? 'visible' : ''}`}
            id="why-choose-us"
        >
            <div className="container">
                <div className="section-4-header">
                    <h2>Why Choose Us</h2>
                    <div className="heading-underline"></div>
                    <p className="section-4-subheading">
                        We deliver exceptional solutions that drive business growth and innovation
                    </p>
                </div>

                <div className="cube-showcase">
                    <div className="cube-wrapper">
                        <div className="cube" ref={cubeRef}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`cube-face ${activeBox === index ? 'active' : ''}`}
                                    style={{
                                        transform: `rotateY(${index * (360 / features.length)}deg) translateZ(350px)`,
                                    }}
                                >
                                    <div className="cube-content">
                                        <div className="feature-icon-container">
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cube-controls">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`cube-control ${activeBox === index ? 'active' : ''}`}
                                onClick={() => setActiveBox(index)}
                                aria-label={`View feature ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card ${activeBox === index ? 'highlight' : ''}`}
                            onClick={() => setActiveBox(index)}
                        >
                            <div className="feature-icon-enhanced">
                                <i className={feature.icon}></i>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-container">
                    <h3>Ready to transform your business?</h3>
                    <p>Partner with us to leverage cutting-edge technology solutions that drive growth and innovation.</p>
                    <a onClick={() => scrollToContact()} className="cta-button">Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default Section4;