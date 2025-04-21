import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MLCardLeft_Ops_Sol.css';
import A1 from '../assets/Vedio/A1.jpg';
const clientStories = [
    {
        title: "Apollo - AIOps Solution",
        description: "Clients across various domains have benefited from our state-of-the-art machine learning solutions and services.",
        image: {A1},
        overlayImage: "/api/placeholder/300/200",
        techLogos: ["/api/placeholder/50/50", "/api/placeholder/50/50", "/api/placeholder/50/50", "/api/placeholder/50/50", "/api/placeholder/50/50"],
        features: [
            {
                icon: "🤖",
                title: "Intelligent Automation",
                description: "With Apollo, you can automatically detect and resolve various network issues using ML-based algorithms."
            },
            {
                icon: "📊",
                title: "Advanced Analytics",
                description: "The AIOps system learns from various data gathered and sorted to improve the customer experience."
            },
            {
                icon: "💬",
                title: "Chatbot",
                description: "A custom chatbot functionality that eases your customer support and network monitoring process."
            }
        ]
    },
    {
        title: "Air Fusion",
        description: "Clients across various domains have benefited from our state-of-the-art machine learning solutions and services.",
        image: {A1},
        overlayImage: "/api/placeholder/300/200",
        techLogos: ["/api/placeholder/50/50", "/api/placeholder/50/50", "/api/placeholder/50/50", "/api/placeholder/50/50"],
        features: [
            {
                icon: "☁️",
                title: "Cloud Storage",
                description: "The system uses secure cloud platforms to store and process multiple images to locate the defects."
            },
            {
                icon: "🖼️",
                title: "Image Analysis",
                description: "Computer Vision technology analyzes various images received to identify the internal faults."
            },
            {
                icon: "⚡",
                title: "Instant Fault Detection",
                description: "Whether leakages or blade deformities, the exact cause is determined by ML algorithms instantly."
            }
        ]
    }
];

const MLCardLeft_Ops_Sol = () => {
    const [currentStory, setCurrentStory] = useState(0);

    const nextStory = () => {
        setCurrentStory((prev) => (prev + 1) % clientStories.length);
    };

    const prevStory = () => {
        setCurrentStory((prev) => (prev - 1 + clientStories.length) % clientStories.length);
    };

    const story = clientStories[currentStory];

    return (
        <section className="ml-card-section">
            <h1>{story.title}</h1>
            <p className="description">{story.description}</p>
            <div className="content-wrapper">
                <button className="nav-button left" onClick={prevStory}>
                    <ChevronLeft />
                </button>
                <div className="main-content">
                    <div className="card-container">
                        <img src={story.image} alt={story.title} className="main-image" />
                        <div className="overlay-image">
                            <img src={story.overlayImage} alt="Overlay" />
                        </div>
                        <div className="tech-logos">
                            {story.techLogos.map((logo, index) => (
                                <img key={index} src={logo} alt={`Tech Logo ${index + 1}`} />
                            ))}
                        </div>
                        <button className="explore-button">EXPLORE MORE</button>
                    </div>
                    <div className="features-container">
                        {story.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                   {/* <button className="explore-button">EXPLORE MORE</button>*/}
                </div>
                <button className="nav-button right" onClick={nextStory}>
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default MLCardLeft_Ops_Sol;