// GrowthStats.jsx
import React, { useState, useEffect, useRef } from 'react';
import './GrowthStats.css';
import ScrollTrigger from '../Common/ScrollTrigger';

const GrowthStats = ({ title, subtitle, stats, type = 'ai' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        
        const currentRef = statsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    return (
        <div className={`growth-stats ${type}-growth-stats`}>
            <div className="growth-stats-header">
                <h2 className="growth-stats-title">{title}</h2>
                <p className="growth-stats-subtitle">{subtitle}</p>
            </div>
            
            <div className="growth-stats-grid" ref={statsRef}>
                {stats.map((stat, index) => (
                    <ScrollTrigger key={index} threshold={0.1}>
                        <div className="growth-stat-card">
                            <div className="stat-chart">
                                <svg viewBox="0 0 100 100" className="stat-circle">
                                    <circle cx="50" cy="50" r="45" className="stat-circle-bg" />
                                    <circle 
                                        cx="50" 
                                        cy="50" 
                                        r="45" 
                                        className="stat-circle-progress" 
                                        style={{ 
                                            strokeDasharray: `${isVisible ? stat.percentage * 2.83 : 0} 283`,
                                            transition: 'stroke-dasharray 2s ease-out'
                                        }}
                                    />
                                </svg>
                                <div className="stat-percentage">
                                    <span className="stat-number">
                                        {isVisible ? stat.value : 0}
                                    </span>
                                    <span className="stat-symbol">{stat.symbol}</span>
                                </div>
                            </div>
                            <h3 className="stat-title">{stat.title}</h3>
                            <p className="stat-description">{stat.description}</p>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>
        </div>
    );
};

export default GrowthStats;