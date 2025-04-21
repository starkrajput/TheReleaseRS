import React, { useState, useEffect, useRef } from 'react';
import './AiGrowthStats.css';

const AiGrowthStats = () => {
    const [counters, setCounters] = useState([0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    const finalValues = [83, 76, 92];
    const titles = ['AI in Business', 'High Priority', 'Continuous Investment'];
    const descriptions = [
        'Companies have invested in AI software development as a business strategy.',
        'Enterprises have prioritized AI and ML initiatives over other IT goals.',
        'Businesses invest in artificial intelligence consulting services on an ongoing basis.'
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let interval;
        if (isVisible) {
            interval = setInterval(() => {
                setCounters(prevCounters =>
                    prevCounters.map((count, index) =>
                        count < finalValues[index] ? count + 1 : count
                    )
                );
            }, 20);
        }
        return () => clearInterval(interval);
    }, [isVisible]);

    return (
        <div className="ai-growth-container" ref={componentRef}>
            <div className="ai-growth-content">
                <h2 className="ai-growth-title">How Fast Is the Growth of Artificial Intelligence?</h2>
                <div className={`ai-stats-container ${isVisible ? 'ai-animate' : ''}`}>
                    {titles.map((title, index) => (
                        <div key={index} className="ai-stat-card">
                            <div className="ai-circle-container">
                                <svg viewBox="0 0 36 36" className="ai-circular-chart">
                                    <path
                                        className="ai-circle-bg"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path
                                        className="ai-circle"
                                        strokeDasharray={`${isVisible ? counters[index] : 0}, 100`}
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="18" y="20.35" className="ai-percentage">
                                        {isVisible ? counters[index] : 0}%
                                    </text>
                                </svg>
                            </div>
                            <h3 className="ai-stat-title">{title}</h3>
                            <p className="ai-stat-description">{descriptions[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiGrowthStats;