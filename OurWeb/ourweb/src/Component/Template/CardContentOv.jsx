/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CardContentOv.css';

const CardContentOv = ({ title, cards }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const titleRef = useRef(null);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ov-visible');
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
        <section className="ov-section" ref={sectionRef}>
            <div className="ov-container">
                <div className="ov-title-container" ref={titleRef}>
                    <h2 className="ov-title">{title}</h2>
                    <div className="ov-title-underline"></div>
                </div>

                <div className="ov-cards-container">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="ov-card"
                            ref={el => cardsRef.current[index] = el}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="ov-card-inner">
                                <div className="ov-icon-container">
                                    <img src={card.image} alt={card.title} className="ov-icon" />
                                </div>
                                <h3 className="ov-card-title">{card.title}</h3>
                                <p className="ov-card-text">{card.text}</p>
                                <div className="ov-card-hover-content">
                                    <p>{card.description || card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

CardContentOv.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string
        })
    ).isRequired
};

export default CardContentOv;