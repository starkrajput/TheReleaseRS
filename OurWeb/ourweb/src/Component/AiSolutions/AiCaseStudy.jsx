import React from 'react';
import './AiCaseStudy.css';
import { Cloud, Image, AlertTriangle } from 'lucide-react';

const AiCaseStudy = () => {
    return (
        <div className="ai-case-study">
            <div className="ai-case-content">
                <div className="ai-case-header">
                    <h2 className="ai-case-title">Air Fusion</h2>
                    <p className="ai-case-subtitle">
                        AI-based SaaS turbine management system that uses Vision AI to collect and analyze data to detect faults in wind turbines.
                    </p>
                </div>

                <div className="ai-case-layout">
                    <div className="ai-case-visual">
                        <div className="ai-dashboard-container">
                            <div className="ai-dashboard-header">
                                <div className="ai-dashboard-controls">
                                    <span className="ai-control ai-control-red"></span>
                                    <span className="ai-control ai-control-yellow"></span>
                                    <span className="ai-control ai-control-green"></span>
                                </div>
                                <div className="ai-dashboard-title">Air Fusion Dashboard</div>
                            </div>
                            <div className="ai-dashboard-content">
                                <div className="ai-dashboard-chart"></div>
                                <div className="ai-dashboard-stats">
                                    <div className="ai-stat-item">
                                        <div className="ai-stat-value">98%</div>
                                        <div className="ai-stat-label">Accuracy</div>
                                    </div>
                                    <div className="ai-stat-item">
                                        <div className="ai-stat-value">3.2s</div>
                                        <div className="ai-stat-label">Response Time</div>
                                    </div>
                                    <div className="ai-stat-item">
                                        <div className="ai-stat-value">24/7</div>
                                        <div className="ai-stat-label">Monitoring</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ai-case-features">
                        <div className="ai-feature-item">
                            <div className="ai-feature-icon">
                                <Cloud size={24} />
                            </div>
                            <div className="ai-feature-info">
                                <h3 className="ai-feature-title">Cloud Storage</h3>
                                <p className="ai-feature-desc">
                                    The system uses secure cloud platforms to store and process multiple images to locate defects.
                                </p>
                            </div>
                        </div>

                        <div className="ai-feature-item">
                            <div className="ai-feature-icon">
                                <Image size={24} />
                            </div>
                            <div className="ai-feature-info">
                                <h3 className="ai-feature-title">Image Analysis</h3>
                                <p className="ai-feature-desc">
                                    Computer Vision technology analyzes various images received to identify internal faults.
                                </p>
                            </div>
                        </div>

                        <div className="ai-feature-item">
                            <div className="ai-feature-icon">
                                <AlertTriangle size={24} />
                            </div>
                            <div className="ai-feature-info">
                                <h3 className="ai-feature-title">Instant Fault Detection</h3>
                                <p className="ai-feature-desc">
                                    Whether leakages or blade deformities, the exact cause is determined by ML algorithms instantly.
                                </p>
                            </div>
                        </div>

                        <button className="ai-case-cta">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiCaseStudy;