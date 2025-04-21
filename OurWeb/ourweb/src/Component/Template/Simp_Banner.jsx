/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Simp_Banner.css';
import RotatingSphere from './RotatingSphere';
const Simp_Banner = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const bannerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
                setIsAnimating(false);
            }, 500); // Half of the transition time
        }, 6000); // Adjust timing as needed

        return () => clearInterval(interval);
    }, [items.length]);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('banner-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.2
        });

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => {
            if (bannerRef.current) {
                observer.unobserve(bannerRef.current);
            }
        };
    }, []);

    return (
        <div className="simpai-banner-wrapper" ref={bannerRef}>
            <div className="simpai-banner">
                <div className="simpai-carousel">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`simpai-carousel-item ${activeIndex === index ? 'simpai-active' : ''} ${isAnimating ? 'simpai-transitioning' : ''}`}
                        >
                            <img src={item.image} className="simpai-carousel-image" alt={`Carousel ${index}`} />
                            <div className="simpai-overlay"></div>
                            <div className="simpai-carousel-content">
                                <h1 className="simpai-title">{item.title}</h1>
                                <p className="simpai-description">{item.description}</p>
                                <button className="simpai-cta-button">
                                    <span>{item.buttonText}</span>
                                    <svg className="simpai-button-arrow" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <RotatingSphere /> {/* Add the sphere component here */}
                <div className="simpai-carousel-indicators">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`simpai-indicator ${activeIndex === index ? 'simpai-active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Simp_Banner.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Simp_Banner;