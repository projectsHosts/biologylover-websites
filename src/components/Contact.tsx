import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn, FaXing } from 'react-icons/fa';
import '../styles/contact.css'; // Assuming you rename the CSS file for the footer
import 'flag-icon-css/css/flag-icons.min.css';
import { Link } from 'react-router-dom';

// NOTE: Updated the logo text to reflect @biologylover02
const logoText = "🔬 Biologylover"; 

const Footer: React.FC = () => {
    return (
        <footer className="hostbooks-footer">
            <div className="footer-columns-container">
                
                {/* Column 1: Description and Contact (Biologylover02 Info) */}
                <div className="footer-col footer-col-info">
                    <div className="logo-section">
                        <div className="footer-logo">{logoText}</div>
                        <p className="logo-tagline">Learning the Language of Life</p>
                    </div>

                    <p className="company-description">
                        @biologylover provides comprehensive resources for students passionate about science. 
                        We offer engaging video lessons, detailed notes, and practice tests for NEET, JEE, and school syllabus.
                    </p>

                    <div className="location-flag">
                       <span className="flag-icon flag-icon-in"></span> INDIA
                    </div>



                    <div className="contact-item">
                        <span className="icon-map">📍</span>
                        <p>Virtual Office, Educating Minds Globally.</p>
                    </div>

                    <div className="contact-item">
                        <span className="icon-mail">✉️</span>
                        {/* Updated Email */}
                        <a href="mailto:biologylover02@gmail.com">biologylover02@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        <span className="icon-phone">📞</span>
                        {/* Updated Phone */}
                        <a href="tel:+911234567890">+91 982....</a>
                    </div>
                    
                    {/* Social Icons */}
                    <div className="footer-social-icons">
                        <a href="https://www.youtube.com/@biology_lover_02" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.instagram.com/biology_lover_02/#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaXing /></a>
                    </div>
                </div>

                {/* Column 2: Courses/Solutions (UPDATED) */}
                <div className="footer-col footer-col-links">
                    <h3>Our Courses</h3>
                    <ul>
                        <li><a href="#neet">NEET Preparation</a></li>
                        <li><a href="#jee">JEE Main (Physics & Chemistry)</a></li>
                        <li><a href="#class10">Class 10th Science</a></li>
                        <li><a href="#class12">Class 12th Biology</a></li>
                        <li><a href="#zoology">Advanced Zoology</a></li>
                        <li><a href="#botany">Advanced Botany</a></li>
                        <li><a href="#microbiology">Microbiology Basics</a></li>
                        <li><a href="#human-physio">Human Physiology</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources/About (UPDATED) */}
                <div className="footer-col footer-col-links">
                    <h3>Study Resources</h3>
                    <ul>
                        <li><a href="#about">About Our Mentors</a></li>
                        <li><Link to="/blogs"  rel="noopener noreferrer">Study Notes & Blog</Link></li>
                        <li><a href="#tests">Online Practice Tests</a></li>
                        <li><Link to="/faq"  rel="noopener noreferrer">FAQs & Support</Link></li>

                        <li><a href="#downloads">Free Downloads</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 4: Policies/Sitemap (UPDATED) */}
                <div className="footer-col footer-col-links">
                    <h3>Legal & Connect</h3>
                    <ul>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><Link to="/privacy-policy"  rel="noopener noreferrer">Privacy Policy</Link></li>
                        <li><a href="#disclaimer">Disclaimer</a></li>
                        <li><a href="#careers">Join Our Team</a></li>
                        <li><a href="#sitemap">Website Map</a></li>
                    </ul>
                </div>

            </div>
            
            {/* The watermark and Go To Top button are visual elements handled by CSS/external scripts */}
        </footer>
    );
};

export default Footer;