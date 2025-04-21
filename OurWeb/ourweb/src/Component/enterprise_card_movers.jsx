import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const industries = [
    {
        title: 'Healthcare and Fitness',
        description: 'Get legally-compliant custom healthcare solutions, fitness apps, and patient care systems.',
        image: '/api/placeholder/400/300',
    },
    {
        title: 'Education and eLearning',
        description: 'Facilitate remote learning and easy management with our feature-rich e-learning solutions.',
        image: '/api/placeholder/400/300',
    },
    {
        title: 'Travel and Hospitality',
        description: 'Gain more customers and market your agency worldwide with travel and hospitality solutions.',
        image: '/api/placeholder/400/300',
    },
    // Add more industry objects as needed
];

const IndustryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">
                Get Industry-specific Software Development Services and Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12">
                As a leading software development services company, we deliver industry-specific solutions and services tailored to your needs.
            </p>
            <div className="relative">
                <div className="flex overflow-hidden">
                    {[...Array(3)].map((_, index) => {
                        const industryIndex = (currentIndex + index) % industries.length;
                        const industry = industries[industryIndex];
                        return (
                            <div key={industryIndex} className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img src={industry.image} alt={industry.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                                        <p className="text-gray-600 mb-4">{industry.description}</p>
                                        <button className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
            </div>
            <div className="flex justify-center mt-6">
                {industries.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default IndustryCarousel;