// AutoSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './AutoSlider.css';
const scrollToContact = () => {
    const contactSection = document.getElementById("contact-container");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

const AutoSlider = ({ cards }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const startAutoSlide = () => {
            intervalRef.current = setInterval(() => {
                if (!isPaused) {
                    setActiveIndex(prevIndex => (prevIndex + 1) % cards.length);
                }
            }, 3000);
        };

        startAutoSlide();

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [cards.length, isPaused]);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const difference = touchStartX.current - touchEndX.current;
        if (difference > 50) {
            // Swipe left
            setActiveIndex(prevIndex => (prevIndex + 1) % cards.length);
        } else if (difference < -50) {
            // Swipe right
            setActiveIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
        }
    };

    // Calculate visible cards and their indices
    const getVisibleCards = () => {
        const visibleCards = [];
        const totalCards = cards.length;

        // For desktop view (5 cards)
        for (let i = -2; i <= 2; i++) {
            const index = (activeIndex + i + totalCards) % totalCards;
            visibleCards.push({
                index,
                position: i
            });
        }

        return visibleCards;
    };

    const visibleCards = getVisibleCards();

    return (
        <div className="auto-slider-container">
            <h2 className="auto-slider-title">Innovative Solutions</h2>
            <p className="auto-slider-subtitle">Explore our cutting-edge technologies and solutions</p>

            <div
                className="auto-slider"
                ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="slider-cards-container">
                    {visibleCards.map(({ index, position }) => (
                        <div
                            key={index}
                            className={`slider-card ${position === 0 ? 'active' : ''} position-${position}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <div className="card-image">
                                <img src={cards[index].image} alt={cards[index].header} />
                            </div>
                            <div className="card-content">
                                <h3>{cards[index].header}</h3>
                                <p>{cards[index].description}</p>
                                <button onClick={() => scrollToContact()} className="card-button">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="slider-controls">
                    <button
                        className="control-prev"
                        onClick={() => setActiveIndex(prevIndex => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1))}
                    >
                        &#10094;
                    </button>
                    <div className="slider-indicators">
                        {cards.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            ></span>
                        ))}
                    </div>
                    <button
                        className="control-next"
                        onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % cards.length)}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AutoSlider;