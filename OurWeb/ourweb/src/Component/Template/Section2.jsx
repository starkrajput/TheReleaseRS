import React, { useEffect, useRef, useState } from 'react';
import './Section2.css';
import p1 from '../../assets/Vedio/ml.jpg';
import A3 from '../../assets/A3.jpg';
import p3 from '../../assets/pic13.jpg';
import p4 from '../../assets/pic12.jpg';
import p5 from '../../assets/pic23.jpg';
import p6 from '../../assets/Vedio/recommcationengine.jpg';

const Section2 = () => {
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);
    const globeRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [globeRotation, setGlobeRotation] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('tech-visible');
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

    // Globe rotation animation
    useEffect(() => {
        if (isVisible) {
            const rotateGlobe = () => {
                setGlobeRotation(prev => (prev + 0.2) % 360);
            };

            const animationId = requestAnimationFrame(function animate() {
                rotateGlobe();
                requestAnimationFrame(animate);
            });

            return () => cancelAnimationFrame(animationId);
        }
    }, [isVisible]);

    const addToRefs = (el) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    // Tech nodes data for the globe
    const techNodes = [
        { id: 1, label: 'AI', color: '#4e9eff', size: 1.2 },
        { id: 2, label: 'ML', color: '#6a3aff', size: 1 },
        { id: 3, label: 'NLP', color: '#ff4e4e', size: 0.9 },
        { id: 4, label: 'RPA', color: '#4eff7e', size: 0.8 },
        { id: 5, label: 'CV', color: '#ffde4e', size: 1.1 },
        { id: 6, label: 'Data', color: '#ff4ea5', size: 0.9 },
        { id: 7, label: 'Cloud', color: '#4effde', size: 1 },
        { id: 8, label: 'IoT', color: '#ff9e4e', size: 0.85 }
    ];

    // AI solutions data
    const solutions = [
        {
            title: "Machine Learning Services",
            description: "We provide advanced ML services to help your business grow.",
            image: p1
        },
        {
            title: "Natural Language Processing (NLP)",
            description: "Unlock the power of language with our NLP solutions.",
            image: A3
        },
        {
            title: "Robotic Process Automation",
            description: "Automate your workflows with our cutting-edge RPA technology.",
            image: p3
        },
        {
            title: "Computational Vision",
            description: "Transform images and videos with our vision systems.",
            image: p4
        },
        {
            title: "Conversational AI",
            description: "Engage customers with AI-driven conversational solutions.",
            image: p5
        },
        {
            title: "Recommendation Engine",
            description: "Personalize customer experiences with recommendation systems.",
            image: p6
        }
    ];

    return (
        <section className="tech-showcase" id="section-2" ref={sectionRef}>
            <div className="tech-container">
                <div className="tech-header">
                    <h2 className="tech-title">Next Gen AI Solutions We Offer</h2>
                    <p className="tech-subtitle">Our decades of expertise and experience channeled towards building the perfect AI solution.</p>
                </div>

                <div className="tech-layout">
                    <div className={`tech-developer ${isVisible ? 'tech-visible' : ''}`}>
                        <div className="tech-globe-container" ref={globeRef} style={{ transform: `rotateY(${globeRotation}deg)` }}>
                            <div className="tech-globe">
                                <div className="tech-globe-grid"></div>
                                <div className="tech-globe-shadow"></div>
                                {techNodes.map((node, index) => (
                                    <div
                                        key={node.id}
                                        className="tech-node"
                                        style={{
                                            '--node-color': node.color,
                                            '--node-size': node.size,
                                            '--node-angle': (index * 45) % 360,
                                            '--node-elevation': Math.random() * 150 - 75
                                        }}
                                    >
                                        <span className="tech-node-label">{node.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tech-robot">
                            <div className="tech-robot-head">
                                <div className="tech-robot-eyes">
                                    <div className="tech-robot-eye"></div>
                                    <div className="tech-robot-eye"></div>
                                </div>
                                <div className="tech-robot-antenna"></div>
                            </div>
                            <div className="tech-robot-body">
                                <div className="tech-robot-badge">
                                    <span>STARK</span>
                                </div>
                            </div>
                            <div className="tech-robot-arms">
                                <div className="tech-robot-arm tech-robot-arm-left"></div>
                                <div className="tech-robot-arm tech-robot-arm-right"></div>
                            </div>
                        </div>
                        <div className="tech-speech-bubble">
                            <h3>Hello, Generous People!</h3>
                            <p>I'm a Stark Developer ready to build your next amazing application.</p>
                            <div className="tech-skills">
                                <span>AI</span>
                                <span>ML</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Python</span>
                            </div>
                            <button className="tech-contact-btn">
                                <span>Contact Me</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="tech-solutions-grid">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className={`tech-solution-card tech-solution-${index + 1}`}
                                ref={addToRefs}
                            >
                                <div className="tech-box">
                                    <div className="tech-box-info">
                                        <h3 className="tech-box-title">{solution.title}</h3>
                                        <p className="tech-box-desc">{solution.description}</p>
                                        <a href="#" className="tech-box-btn">Learn More</a>
                                    </div>
                                    <div className="tech-box-media">
                                        <img src={solution.image} alt={solution.title} className="tech-box-img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;