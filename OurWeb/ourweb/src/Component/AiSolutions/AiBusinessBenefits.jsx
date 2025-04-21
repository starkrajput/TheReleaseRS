import React from 'react';
import './AiBusinessBenefits.css';
import { Brain, Bot, Cog, Database, BarChart, Clock, Shield, Zap } from 'lucide-react';

const AiBusinessBenefits = () => {
    const benefits = [
        {
            icon: <Brain className="ai-benefit-icon" />,
            title: "Cognitive AI",
            description: "Smart systems to mimic human behaviour and reasoning to solve complex business problems."
        },
        {
            icon: <Bot className="ai-benefit-icon" />,
            title: "Virtual Assistance",
            description: "Build systems that understand human commands and automate mundane tasks."
        },
        {
            icon: <Cog className="ai-benefit-icon" />,
            title: "Next-Gen Solutions",
            description: "Make your enterprise stand apart from competitors with customized next-gen AI solutions."
        },
        {
            icon: <Database className="ai-benefit-icon" />,
            title: "Data Insights",
            description: "Get insights from any source and bring real-time changes to your business operations."
        },
        {
            icon: <BarChart className="ai-benefit-icon" />,
            title: "Predictive Analytics",
            description: "Forecast trends and behaviors to make data-driven decisions and optimize performance."
        },
        {
            icon: <Clock className="ai-benefit-icon" />,
            title: "Process Automation",
            description: "Streamline operations and reduce manual intervention with intelligent automation."
        },
        {
            icon: <Shield className="ai-benefit-icon" />,
            title: "Enhanced Security",
            description: "Implement AI-powered security systems to detect and prevent potential threats."
        },
        {
            icon: <Zap className="ai-benefit-icon" />,
            title: "Improved Efficiency",
            description: "Boost productivity and reduce operational costs with AI-optimized workflows."
        }
    ];

    return (
        <div className="ai-benefits-container">
            <div className="ai-benefits-content">
                <div className="ai-benefits-header">
                    <h2 className="ai-benefits-title">Why Your Business Needs Artificial Intelligence?</h2>
                    <p className="ai-benefits-description">
                        By offering business-specific insights and process automation tools to companies,
                        AI has become the most revolutionary and much-needed technology for global industries.
                        AI solutions have transformed industries worldwide by enhancing customer experience and
                        automating tedious and mundane tasks. From education to healthcare and supply chain,
                        industries worldwide have invested in AI development services. Are you ready to implement
                        enterprise AI solutions in your business?
                    </p>
                    <button className="ai-benefits-cta">REQUEST A QUOTE</button>
                </div>

                <div className="ai-benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="ai-benefit-card">
                            {benefit.icon}
                            <h3 className="ai-benefit-title">{benefit.title}</h3>
                            <p className="ai-benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AiBusinessBenefits;