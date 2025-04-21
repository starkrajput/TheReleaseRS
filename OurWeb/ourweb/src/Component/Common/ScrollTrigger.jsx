// ScrollTrigger.jsx
import React, { useState, useEffect, useRef } from 'react';

const ScrollTrigger = ({ children, threshold = 0.1, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`scroll-trigger-section ${className} ${isVisible ? 'visible' : 'hidden'}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default ScrollTrigger;