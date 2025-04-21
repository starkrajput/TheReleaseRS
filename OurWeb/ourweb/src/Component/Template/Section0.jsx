import React, { useRef, useEffect } from 'react';
import './Section0.css';

const Section0 = ({ title, cards }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-container");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('cs-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }

            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, [cards.length]);

    return (
        <section className="cs-section" ref={sectionRef}>
            <div className="cs-container">
                <div className="cs-title-container" ref={titleRef}>
                    <h2 className="cs-title">{title}</h2>
                    <div className="cs-title-underline"></div>
                </div>

                <div className="cs-cards-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="cs-card"
                            ref={el => cardsRef.current[index] = el}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="cs-card-image-container">
                                <img src={card.image} alt={card.title} className="cs-card-image" />
                                <div className="cs-date-badge">{card.date}</div>
                            </div>
                            <div className="cs-card-content">
                                <h3 className="cs-card-title">{card.title}</h3>
                                <p className="cs-card-excerpt">{card.excerpt}</p>
                                <a onClick={() => scrollToContact()} className="cs-card-link">
                                    <span>Learn More</span>
                                    <svg className="cs-link-arrow" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section0;