import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const navbar = document.getElementById('navbarS');

            // Handle navbar visibility on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar?.classList.add('hidden');
            } else {
                navbar?.classList.remove('hidden');
            }

            // Add scrolled class when not at the top
            if (currentScrollY > 10) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest('.navbar-menuS') && !e.target.closest('#menu-iconS')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <nav className="navbarS" id="navbarS">
            <div className="navbar-containerS">
                <div className="navbar-logoS">
                    <a href="./">
                        RSV Technologies
                    </a>
                </div>

                <div className="navbar-menu-iconS" id="menu-iconS" onClick={toggleMenu}>
                    <span className={`menu-bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`menu-bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`menu-bar ${isOpen ? 'open' : ''}`}></span>
                </div>

                <ul className={`navbar-menuS ${isOpen ? 'open' : ''}`} id="navbar-menuS">
                    <li className="dropdownS">
                        <a >Services</a>
                        <div className="dropdown-containerS">
                            <ul className="dropdown-menuS">
                                <li><a href="./ai-solution">Artificial Intelligence Solutions</a></li>
                                <li><a href="./ml-solution">Machine Learning Solutions</a></li>
                            
                                <li><a href="./iiot-iot-solution">IIoT and IoT Solutions</a></li>
                                <li><a href="./cloud-integration">Cloud Integration Solutions</a></li>
                            </ul>
                            <ul className="dropdown-menuS">
                                <li><a href="./saas-development">Saas Development</a></li>
                                <li><a href="./enterprise-solution">Enterprise Solution</a></li>
                                <li><a href="./managed-services">Managed Services</a></li>
                                <li><a href="./ondemand-service">Ondemand Services</a></li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="dropdownS">
                        <a >Portfolios</a>
                        <div className="dropdown-containerS">
                            <ul className="dropdown-menuS">
                                <li><a href="./webapp">Web Apps</a></li>
                                <li><a href="./mobileapp">Mobile Apps</a></li>
                                <li><a href="./softwareapp">Software Solution</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdownS">
                        <a>Industries</a>
                        <div className="dropdown-containerS">
                            <ul className="dropdown-menuS">
                                <li><a href="./TransportationLogistics">Transportation & Logistics</a></li>
                                <li><a href="./BankingFinance">Banking & Finance</a></li>
                                <li><a href="./RetailECommerce">Retail & eCommerce</a></li>
                                <li><a href="./Healthcare">Healthcare</a></li>
                               
                                <li><a href="./TravelHospitality">Travel & Hospitality</a></li>
                                <li><a href="./Legal">Legal</a></li>
                                <li><a href="./Realestate">Real Estate</a></li>
                                <li><a href="./EducationeLearning">Education & eLearning</a></li>
                                <li><a href="./MediaEntertainment">Media & Entertainment</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropdownS">
                        <a>About Us</a>
                        <div className="dropdown-containerS">
                            <ul className="dropdown-menuS">
                                <li><a href="./About">About RSV</a></li>
                                
                            </ul>
                        </div>
                    </li>
                    <li className="dropdownS">
                        {/*  <a >Become RSVs member</a>*/}  <a >RSVs Member</a>
                        <div className="dropdown-containerS">
                            <ul className="dropdown-menuS">
                                {/* <li><a href="./openposition">Open Position</a></li>*/}
                                <li><a href="./Leadership">Leadership</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;