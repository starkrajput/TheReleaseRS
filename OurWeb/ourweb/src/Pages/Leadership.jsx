import React from 'react';
import Navbar from '../Component/navbar';
import Footer from '../Component/Footer';
import Simp_Banner from '../Component/Template/Simp_Banner';
import ScrollTrigger from '../Component/Common/ScrollTrigger';
import VerticalSection from '../Component/Template/VerticalSection';
import black from '../assets/black.jpg'; // black
// Import leader images
import BhanuImg from '../assets/Vedio/A1.jpg';
import ShiveshImg from '../assets/Vedio/A1.jpg';
import AdityaImg from '../assets/Vedio/A1.jpg';
import AvantikaImg from '../assets/Vedio/A1.jpg';/*import BhanuImg from '../assets/leaders/bhanu.jpg';
import ShiveshImg from '../assets/leaders/shivesh.jpg';
import AdityaImg from '../assets/leaders/aditya.jpg';
import AvantikaImg from '../assets/leaders/avantika.jpg';*/
import my from   '../assets/my.jpg';
import shiv from   '../assets/shiv.jpg';
function Leadership() {
    const leaders = [
       /* {
            heading: "Bhanu Aditya",
            buttonText: "Chief Executive Officer (CEO) & Client Relations Head",
            content: "A visionary leader and expert in client relations, Bhanu Aditya has been instrumental in shaping RSV Technologies into a trusted name in software development. With a keen understanding of market needs and a client-first approach, he ensures seamless project execution and long-term success for partners.",
            image: BhanuImg,
        },*/
        {
            heading: "Shivesh Pandey",
            buttonText: "Chief AI & Technology Strategist ~ +91 8009359693",
            content: "As an AI technology expert, Shivesh Pandey drives innovation at RSV Technologies. With years of experience in AI, deep learning, and software architecture, he pioneers intelligent solutions that power businesses globally. His expertise in AI automation is redefining the industry.",
            image: shiv,
        },
        {
            heading: "Aditya Rajput",
            buttonText: "Chief Technical Architect & Expert Developer ~ +91 6388410450",
            content: "A master of software engineering and system architecture, Aditya Rajput leads the technical vision at RSV Technologies. His expertise in full-stack development, cloud computing, and scalable architectures ensures that RSV remains ahead in technological advancements.",
            image: my,
        },
       /* {
            heading: "Avantika Singh",
            buttonText: "Chief Ethical Officer (CEthO) & Compliance Head",
            content: "Dedicated to ethical technology and corporate responsibility, Avantika Singh ensures that RSV Technologies upholds the highest standards of data security, compliance, and social responsibility. She leads initiatives in ethical AI, governance, and corporate sustainability.",
            image: AvantikaImg,
        }*/
    ];
    const BannercarouselItems = [
        {
            image: {black},
            title: 'Meet Our Leaders',
            description: 'Visionary minds driving innovation at RSV Technologies',
            buttonText: 'Sharpening the Future'
        }
    ];
    return (
        <div className="leadership-container">
            <Navbar />

            <Simp_Banner
                items={BannercarouselItems}
            />

            <ScrollTrigger>
                <VerticalSection
                    title="Leadership Team"
                    cards={leaders}
                />
            </ScrollTrigger>

            <Footer />
        </div>
    );
}

export default Leadership;
