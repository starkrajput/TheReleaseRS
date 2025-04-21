import React from 'react';
import './TeckStack.css';

const technologies = [
    {
        category: "Programming Languages",
        items: [
            { name: "Scala", icon: "/api/placeholder/50/50" },
            { name: "Python", icon: "/api/placeholder/50/50" },
            { name: "Java", icon: "/api/placeholder/50/50" },
            { name: "C++", icon: "/api/placeholder/50/50" },
            { name: "R", icon: "/api/placeholder/50/50" }
        ]
    },
    {
        category: "ML Platforms and Services",
        items: [
            { name: "Azure Machine Learning", icon: "/api/placeholder/50/50" },
            { name: "Azure Cognitive Services", icon: "/api/placeholder/50/50" },
            { name: "Bot Framework", icon: "/api/placeholder/50/50" },
            { name: "Amazon SageMaker", icon: "/api/placeholder/50/50" },
            { name: "Google Cloud AI Platform", icon: "/api/placeholder/50/50" }
        ]
    },
    {
        category: "ML Frameworks & Libraries",
        items: [
            { name: "Mxnet", icon: "/api/placeholder/50/50" },
            { name: "Mahout", icon: "/api/placeholder/50/50" },
            { name: "TensorFlow", icon: "/api/placeholder/50/50" },
            { name: "Scikit-learn", icon: "/api/placeholder/50/50" },
            { name: "Keras", icon: "/api/placeholder/50/50" }
        ]
    },
    {
        category: "Big Data",
        items: [
            { name: "Apache Hadoop", icon: "/api/placeholder/50/50" },
            { name: "Apache Spark", icon: "/api/placeholder/50/50" },
            { name: "Cassandra", icon: "/api/placeholder/50/50" },
            { name: "Apache Kafka", icon: "/api/placeholder/50/50" },
            { name: "Hive", icon: "/api/placeholder/50/50" }
        ]
    },
    {
        category: "Data Visualization",
        items: [
            { name: "Tableau", icon: "/api/placeholder/50/50" },
            { name: "Power BI", icon: "/api/placeholder/50/50" },
            { name: "Grafana", icon: "/api/placeholder/50/50" },
            { name: "Chart.js", icon: "/api/placeholder/50/50" },
            { name: "QlikView", icon: "/api/placeholder/50/50" }
        ]
    }
];

const Section1 = () => {
    return (
        <div className="ml-technologies-section">
            <h1>Technologies We Use for Machine Learning Solutions Development</h1>
            <div className="technologies-grid">
                {technologies.map((category, index) => (
                    <div key={index} className="category-row">
                        <div className="category-title">{category.category}</div>
                        <div className="technology-items">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="technology-item">
                                    <img src={item.icon} alt={item.name} />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section1;