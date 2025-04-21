import React from 'react';
import './AiExpertiseSection.css';
import { Star, Headphones, Lightbulb } from 'lucide-react';

const AiExpertiseSection = () => {
    return (
        <div className="ai-expertise-container">
            <div className="ai-expertise-content">
                <div className="ai-inquiry-section">
                    <h2 className="ai-inquiry-title">How Much Does AI Software Development Cost?</h2>
                    <form className="ai-inquiry-form">
                        <input type="text" placeholder="Name" className="ai-form-input" />
                        <input type="email" placeholder="you@company-email.com" className="ai-form-input" />
                        <input type="tel" placeholder="Phone No" className="ai-form-input" />
                        <textarea placeholder="Tell us more about your requirement?" className="ai-form-textarea"></textarea>
                        <div className="ai-captcha">
                            <span className="ai-captcha-question">What is 4 + 5 =</span>
                            <input type="text" className="ai-captcha-input" />
                        </div>
                        <button type="submit" className="ai-submit-btn">SUBMIT INQUIRY</button>
                    </form>
                </div>

                <div className="ai-expertise-section">
                    <h2 className="ai-expertise-title">Why Choose Us for AI Development?</h2>

                    <div className="ai-expertise-features">
                        <div className="ai-expertise-card">
                            <div className="ai-expertise-icon">
                                <Star size={24} />
                            </div>
                            <div className="ai-expertise-info">
                                <h3 className="ai-expertise-subtitle">20+ Years' Experience</h3>
                                <p className="ai-expertise-desc">
                                    We have years-long experience in delivering quality AI solutions to startups and Fortune 500 companies.
                                </p>
                            </div>
                        </div>

                        <div className="ai-expertise-card">
                            <div className="ai-expertise-icon">
                                <Headphones size={24} />
                            </div>
                            <div className="ai-expertise-info">
                                <h3 className="ai-expertise-subtitle">Reliable Support</h3>
                                <p className="ai-expertise-desc">
                                    You get 24*7 technical support and software consulting services for your custom AI solution.
                                </p>
                            </div>
                        </div>

                        <div className="ai-expertise-card">
                            <div className="ai-expertise-icon">
                                <Lightbulb size={24} />
                            </div>
                            <div className="ai-expertise-info">
                                <h3 className="ai-expertise-subtitle">Strong R&D Expertise</h3>
                                <p className="ai-expertise-desc">
                                    With our strong R&D department, development teams are always on the lookout for advancements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiExpertiseSection;