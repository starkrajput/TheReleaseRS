import React, { useRef, useEffect } from 'react';
import './SimpleCard.css';

const SimpleCard = ({ title, articles }) => {
    const sectionRef = useRef(null);
    const articlesRef = useRef([]);
    const titleRef = useRef(null);
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-container");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        articlesRef.current = articlesRef.current.slice(0, articles.length);

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sc-visible');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        articlesRef.current.forEach(article => {
            if (article) observer.observe(article);
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }

            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }

            articlesRef.current.forEach(article => {
                if (article) observer.unobserve(article);
            });
        };
    }, [articles.length]);

    return (
        <section className="sc-section" ref={sectionRef}>
            <div className="sc-container">
                <div className="sc-title-container" ref={titleRef}>
                    <h2 className="sc-title">{title}</h2>
                    <div className="sc-title-underline"></div>
                </div>

                <div className="sc-articles-grid">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="sc-article"
                            ref={el => articlesRef.current[index] = el}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="sc-article-image-container">
                                <img src={article.image} alt={article.alt} className="sc-article-image" />
                                <div className="sc-image-overlay">
                                    <div className="sc-overlay-icon">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-article-content">
                                <h3 className="sc-article-heading">{article.heading}</h3>
                                <p className="sc-article-description">{article.description}</p>
                                <a onClick={() => scrollToContact()}  className="sc-article-link">
                                    <span>Read More</span>
                                    <svg className="sc-link-arrow" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SimpleCard;