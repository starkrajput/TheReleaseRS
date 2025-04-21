// Added.jsx
import React, { useEffect, useRef } from 'react';
import './Added.css';
import csr from '../assets/Vedio/csr.png';
import trophy from '../assets/Vedio/trophy.png';
import event from '../assets/Vedio/event.png';
import balancescale from '../assets/Vedio/balance-scale.png';
import reward from '../assets/Vedio/reward.png';

const scrollToContact = () => {
    const contactSection = document.getElementById("contact-container");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const Added = () => {
    const servicesRef = useRef(null);
    const valuesRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
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
        }, options);

        if (servicesRef.current) observer.observe(servicesRef.current);
        if (valuesRef.current) observer.observe(valuesRef.current);

        const containerItems = containerRef.current?.querySelectorAll('.content-item');
        if (containerItems) {
            containerItems.forEach(item => observer.observe(item));
        }

        return () => {
            if (servicesRef.current) observer.unobserve(servicesRef.current);
            if (valuesRef.current) observer.unobserve(valuesRef.current);
            if (containerItems) {
                containerItems.forEach(item => observer.unobserve(item));
            }
        };
    }, []);

    return (
        <div className="added-wrapper">
            {/* Services Section */}
            <section className="services-section" ref={servicesRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-content">
                                <h1 className="section-title">Our <span>Services</span></h1>
                                <p className="subtitle">Software Product Engineering Methodologies</p>
                                <p className="description">
                                    RSV Technologies empowers businesses by developing innovative software solutions that address over 85% of common industry challenges. Our expert teams create applications tailored to meet specific needs, driving efficiency and growth.
                                </p>
                                <p className="additional-info">
                                    Despite being a young and dynamic company, RSV Technologies has already made significant strides in the industry. Our commitment to delivering exceptional solutions has led to successful partnerships with renowned clients across various sectors. From Fortune 500 companies to innovative startups, we've proven our ability to drive results.
                                </p>
                                <button onClick={() => scrollToContact()} className="discover-btn">DISCOVER NOW</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-cards">
                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/8738/8738896.png" alt="Ideation Icon" />
                                    </div>
                                    <div className="service-details">
                                        <h5>Ideation</h5>
                                        <p>Our engineering teams, where everyone is a leader, help you create groundbreaking solutions.</p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1589/1589661.png" alt="Market Research Icon" />
                                    </div>
                                    <div className="service-details">
                                        <h5>Market Research</h5>
                                        <p>We go beyond the industry standards to find and seize opportunities. We grow when our clients grow.</p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/868/868682.png" alt="Technology & Tools Icon" />
                                    </div>
                                    <div className="service-details">
                                        <h5>Technology & Tools</h5>
                                        <p>We help clients invest in the right tools that help them cut out the noise and get the job done.</p>
                                    </div>
                                </div>

                                <div className="service-card">
                                    <div className="service-icon">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2762/2762427.png" alt="Success Icon" />
                                    </div>
                                    <div className="service-details">
                                        <h5>Success</h5>
                                        <p>We take pride in our client success. We supply our clients with up-to-date and actionable results so they can focus on what really matters: growing their business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values & Culture Section */}
            <section className="values-section" ref={valuesRef}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Values & <span>Culture</span></h2>
                        <p className="section-description">
                            Our team is our greatest asset. We consistently invest in and around our team members to make sure they are set up for success and share RSV Technologies dedication to excellence.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="values-list">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <img src={csr} alt="CSR" />
                                    </div>
                                    <div className="value-title">
                                        <h5>CSR</h5>
                                    </div>
                                </div>

                                <div className="value-item">
                                    <div className="value-icon">
                                        <img src={trophy} alt="Awards" />
                                    </div>
                                    <div className="value-title">
                                        <h5>Awards</h5>
                                    </div>
                                </div>

                                <div className="value-item">
                                    <div className="value-icon">
                                        <img src={event} alt="Events" />
                                    </div>
                                    <div className="value-title">
                                        <h5>Events</h5>
                                    </div>
                                </div>

                                <div className="value-item">
                                    <div className="value-icon">
                                        <img src={balancescale} alt="Work-Life Balance" />
                                    </div>
                                    <div className="value-title">
                                        <h5>Work-Life Balance</h5>
                                    </div>
                                </div>

                                <div className="value-item">
                                    <div className="value-icon">
                                        <img src={reward} alt="Recognition" />
                                    </div>
                                    <div className="value-title">
                                        <h5>Recognition</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8" >
                            <div className="containerValue">
                                <div>
                                    <div className="contentValue">
                                        <h2>7+ Awards</h2>
                                        <span>In Software Apps Domains</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="contentValue">
                                        <h2>Sucess with Clients</h2>
                                        <span>Top brands trust us.</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="contentValue">
                                        <h2>Expertise in Inspiring</h2>
                                        <span>Spreading Innovation with Learning</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="contentValue">
                                        <h2>Revitalising the Methods</h2>
                                        <span>Creating the Legacy of being unbeatable</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Added;