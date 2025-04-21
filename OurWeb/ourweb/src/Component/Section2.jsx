// Section2.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Section2.css';
import p1 from '../assets/Vedio/ml.jpg';
import A3 from '../assets/A3.jpg';
import p3 from '../assets/pic13.jpg';
import p4 from '../assets/pic12.jpg';
import p5 from '../assets/pic23.jpg';
import p6 from '../assets/Vedio/recommcationengine.jpg';
const scrollToContact = () => {
    const contactSection = document.getElementById("contact-container");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const Section2 = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ai-visible');
                    if (entry.target === sectionRef.current) {
                        setIsVisible(true);
                    }
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        itemsRef.current.forEach(item => {
            if (item) observer.observe(item);
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            itemsRef.current.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <section className="ai-solutions-section" id="section-2" ref={sectionRef}>
            <div className="ai-solutions-container">
                <div className="ai-solutions-header">
                    <h2 className="ai-solutions-title">Next Gen AI Solutions We Offer</h2>
                    <p className="ai-solutions-subtitle">Our decades of expertise and experience channeled towards building the perfect AI solution.</p>
                </div>

                <div className="ai-solutions-content">
                    <div className="ai-staircase">
                        <div className="ai-step ai-step-1" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Machine Learning Services</h3>
                                    <p className="ai-step-description">We provide advanced ML services to help your business grow.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={p1} alt="Machine Learning Services" className="ai-step-image" />
                                </div>
                            </div>
                        </div>

                        <div className="ai-step ai-step-2" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Natural Language Processing (NLP)</h3>
                                    <p className="ai-step-description">Unlock the power of language with our NLP solutions.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={A3} alt="Natural Language Processing" className="ai-step-image" />
                                </div>
                            </div>
                        </div>

                        <div className="ai-step ai-step-3" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Robotic Process Automation</h3>
                                    <p className="ai-step-description">Automate your workflows with our cutting-edge RPA technology.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={p3} alt="Robotic Process Automation" className="ai-step-image" />
                                </div>
                            </div>
                        </div>

                        <div className="ai-step ai-step-4" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Computational Vision</h3>
                                    <p className="ai-step-description">Transform images and videos with our vision systems.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={p4} alt="Computational Vision" className="ai-step-image" />
                                </div>
                            </div>
                        </div>

                        <div className="ai-step ai-step-5" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Conversational AI</h3>
                                    <p className="ai-step-description">Engage customers with AI-driven conversational solutions.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={p5} alt="Conversational AI" className="ai-step-image" />
                                </div>
                            </div>
                        </div>

                        <div className="ai-step ai-step-6" ref={addToRefs}>
                            <div className="ai-step-card">
                                <div className="ai-step-content">
                                    <h3 className="ai-step-heading">Recommendation Engine</h3>
                                    <p className="ai-step-description">Personalize customer experiences with recommendation systems.</p>
                                    <a onClick={() => scrollToContact()} className="ai-step-link">Learn More</a>
                                </div>
                                <div className="ai-step-image-wrapper">
                                    <img src={p6} alt="Recommendation Engine" className="ai-step-image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`ai-dev-profile ${isVisible ? 'ai-visible' : ''}`}>
                        <div className="ai-dev-avatar">
                            <div className="ai-dev-avatar-circle">
                                <i className="fa-solid fa-code"></i>
                            </div>
                        </div>
                        <div className="ai-dev-info">
                            <h3>Hello, Generous People!</h3>
                            <p>I'm a Stark Developer ready to build your next amazing application.</p>
                            <div className="ai-dev-skills">
                                <span>AI</span>
                                <span>ML</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Python</span>
                            </div>
                            <button onClick={() => scrollToContact()} className="ai-dev-contact-btn">
                                <span>Contact Me</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;