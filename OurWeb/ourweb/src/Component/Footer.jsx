/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'; // Import the CSS file
import india from '../assets/india.png';
import usa from '../assets/usa.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import ld from '../assets/ld.png';
import x from '../assets/x.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className="footer-left">
                    {/* Commented out form and company logo */}
                    {/* <h2>Get in touch with us</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your First Name*" />
              <input type="text" placeholder="Your Last Name*" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Your Phone*" />
              <input type="email" placeholder="Your E-mail*" />
            </div>
            <textarea placeholder="Your Message*"></textarea>
            <button type="submit">Send</button>
          </form> */}
                    {/* <img src="path/to/companyLogo.png" alt="Company Logo" className="company-logo" /> */}
                    <p>RSV Software</p>
                    <p>Development Partner</p>
                </div>
                <div className="footer-right">
                    {/* <img src="path/to/buildingAnimation.png" alt="Building Animation" /> */}
                </div>
            </div>

            <div className="footer-columns">
                <div className="column">
                    <h3>Locations</h3>
                    <ul>
                        <li><img src={usa} alt="USA Flag" /> USA</li>
                        <li>California</li>
                        <li>Mexico</li>
                        <li>Seattle</li>
                        <li><img src={india} alt="India Flag" /> India</li>
                        <li>Noida</li>
                        <li>Bangalore</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Services</h3>
                    <ul>
                        <li>Embedded Engineering</li>
                        <li>Staff Augmentation</li>
                        <li>DevOps Consulting</li>
                        <li>Mobile App Development</li>
                        <li>MVP Development</li>
                        <li>SaaS Development</li>
                        <li>IOT & IIOT</li>
                        <li>Software Testing</li>
                        <li>Hire Developers</li>
                        <li>Predictive Analytics</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Industries</h3>
                    <ul>
                        <li>Transportation & Logistics</li>
                        <li>Banking & Finance</li>
                        <li>Retail & eCommerce</li>
                        <li>Healthcare</li>
                        <li>Telecommunications</li>
                        <li>Travel & Hospitality</li>
                        <li>Legal</li>
                        <li>Real-Estate</li>
                        <li>Education & eLearning</li>
                        <li>Media & Entertainment</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Resources</h3>
                    <ul>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Case Studies</li>
                        <li>Portfolios</li>
                        <li>Infographics</li>
                        <li>Careers</li>
                        <li>Refer & Earn</li>
                        <li>Submit RFP</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="https://www.facebook.com/share/Rrs9yKxBpzCxu1bX/?mibextid=qi2Omg">
                        <img src={fb} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/rsvtechnologies/">
                        <img src={ig} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/rsvtechnologies/">
                        <img src={ld} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://x.com/rsvtechnologies?t=QE4cczSH2z1GIaGUGU1gEw&s=09">
                        <img src={x} alt="Twitter" className="social-icon" />
                    </a>
                </div>
                <div className="footer-text">
                    <p>2024 @ RSV Technologies. All rights reserved.</p>
                    <p>
                        <a href="/privacy">Privacy Statement</a> |
                        <a href="/terms"> Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
