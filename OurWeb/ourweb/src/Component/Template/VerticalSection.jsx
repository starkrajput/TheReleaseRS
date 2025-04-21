/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './VerticalSection.css';

const VerticalSection = ({ title, cards }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('vs-in-view');
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

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            cardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
        };
    }, [cards.length]);

    return (
        <div className="vs-section-wrapper" ref={sectionRef}>
            <div className="vs-section-header">
                <h2 className="vs-section-title">{title}</h2>
                <div className="vs-title-underline"></div>
            </div>

            <div className="vs-card-container">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`vs-card ${index % 2 === 1 ? 'vs-card-reverse' : ''}`}
                        ref={el => cardsRef.current[index] = el}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="vs-image-container">
                            <img src={card.image} alt={card.heading} className="vs-card-image" />
                            <div className="vs-image-overlay">
                                <div className="vs-overlay-content">
                                    <span>View Details</span>
                                </div>
                            </div>
                        </div>

                        <div className="vs-content">
                            <h3 className="vs-card-title">{card.heading}</h3>
                            <p className="vs-card-description">{card.content}</p>
                            <button className="vs-card-button">
                                {card.buttonText}
                                <svg className="vs-button-icon" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

VerticalSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default VerticalSection;