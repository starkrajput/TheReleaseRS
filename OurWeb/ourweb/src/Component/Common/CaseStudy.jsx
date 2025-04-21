// CaseStudy.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import './CaseStudy.css';
import ScrollTrigger from '../Common/ScrollTrigger';

const CaseStudy = ({ title, subtitle, caseStudy, type = 'ai' }) => {
    return (
        <div className={`case-study ${type}-case-study`}>
            <div className="case-study-header">
                <h2 className="case-study-title">{title}</h2>
                <p className="case-study-subtitle">{subtitle}</p>
            </div>

            <ScrollTrigger threshold={0.1}>
                <div className="case-study-content">
                    <div className="case-study-image">
                        <img src={caseStudy.image} alt={caseStudy.title} />
                    </div>

                    <div className="case-study-details">
                        <h3 className="case-study-name">{caseStudy.title}</h3>
                        <p className="case-study-description">{caseStudy.description}</p>

                        <div className="case-study-features">
                            {caseStudy.features.map((feature, index) => (
                                <div key={index} className="case-study-feature">
                                    <div className="feature-icon">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-title">{feature.title}</h4>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="case-study-button">VIEW FULL CASE STUDY</button>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default CaseStudy;