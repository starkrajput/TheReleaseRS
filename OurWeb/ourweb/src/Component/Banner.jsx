import React, { useEffect, useState, useRef } from 'react';
import './Banner.css';
import V1 from '../assets/V22.mp4';
import V2 from '../assets/V1.mp4';
import V3 from '../assets/V3.mp4';
import V4 from '../assets/V4.mp4';

const videos = [
    {
        src: V1,
        title: 'AI - ML Solutions',
        description: 'Enable peak performance and automation for your systems and operations with our AI solutions.'
    },
    {
        src: V2,
        title: 'Digital Transformation',
        description: 'Leverage our decades of experience transforming businesses of all shapes and sizes.'
    },
    {
        src: V3,
        title: 'Software Consulting',
        description: 'Consult with the experts to get an optimal product for your business requirements.'
    },
    {
        src: V4,
        title: 'Enterprise Mobility',
        description: 'We build solutions that can be accessed from the device of your choice anywhere and anytime.'
    }
];

const words = [
    'Artificial Intelligence',
    'Digital Transformation',
    'Software Consulting',
    'Enterprise Mobility'
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const bannerRef = useRef(null);

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 150) {
            // Swipe left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        } else if (touchEnd - touchStart > 150) {
            // Swipe right
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
        }
    };
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-container");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Auto-rotate carousel
    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // Intersection Observer for animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

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
        <div ref={bannerRef} className={`stark-banner-wrapper ${isVisible ? 'stark-visible' : ''}`}>
            <div className="stark-banner"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="stark-carousel">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className={`stark-carousel-item ${index === currentIndex ? 'stark-active' : ''}`}
                        >
                            <video
                                src={video.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="stark-carousel-video"
                            />
                            <div className={`stark-carousel-content ${index === currentIndex ? 'stark-fade-in' : ''}`}>
                                <div className="stark-content-container">
                                    <h1 className="stark-animate-text">{video.title}</h1>
                                    <p className="stark-animate-text-delay">{video.description}</p>
                                 

                                    <button onClick={() => scrollToContact()} className="stark-learn-more-btn" >Learn More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="stark-words-container">
                    {words.map((word, index) => (
                        <div key={index} className={`stark-word ${index === currentIndex ? 'stark-active' : ''}`}>
                            <span>{word}</span>
                            <div className={`stark-loading-bar ${index === currentIndex ? 'stark-active' : ''}`}></div>
                        </div>
                    ))}
                </div>

                <div className="stark-carousel-indicators">
                    {videos.map((_, index) => (
                        <div
                            key={index}
                            className={`stark-indicator ${index === currentIndex ? 'stark-active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;