import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [subscribed, setSubscribed] = useState<boolean>(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (email) {
            console.log('Subscribed with:', email);
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#4e54c8"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#4e54c8"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#4e54c8"></path>
                </svg>
            </div>

            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-section contact">
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <p><i className="fas fa-phone-alt pulse"></i> <a href="tel:+919766830294">+91 9766830294</a></p>
                            <p><i className="fas fa-envelope"></i> <a href="mailto:info@kshitijhomeo.com">info@kshitijhomeo.com</a></p>
                            <p><i className="fas fa-map-marker-alt"></i> Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035</p>
                        </div>
                        {/* <div className="social-links">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/919766830294" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div> */}
                    </div>

                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/aboutme"><i className="fas fa-chevron-right"></i> About Me</Link></li>
                            <li><Link to="/blog"><i className="fas fa-chevron-right"></i> Health Blog</Link></li>
                            <li><Link to="/treatment"><i className="fas fa-chevron-right"></i> Treatments</Link></li>
                            <li><Link to="/gallery"><i className="fas fa-chevron-right"></i> Gallery </Link></li>
                            <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section treatments">
                        <h3>Our Treatments</h3>
                        <ul>
                            <li><Link to="/treatment/1"><i className="fas fa-stethoscope"></i> GERD Homeopathy Treatment</Link></li>
                            <li><Link to="/treatment/2"><i className="fas fa-stethoscope"></i> Homeopathy for PCOS</Link></li>
                            <li><Link to="/treatment/3"><i className="fas fa-stethoscope"></i> Homeopathy for Thyroid</Link></li>
                            <li><Link to="/treatment/4"><i className="fas fa-stethoscope"></i> Homeopathy for Diabetes</Link></li>
                            <li><Link to="/treatment/5"><i className="fas fa-stethoscope"></i> Homeopathy for Asthma</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section newsletter">
                        <h3>Health Newsletter</h3>
                        <p>Subscribe to receive health tips and special offers</p>
                        {subscribed ? (
                            <div className="subscription-success">
                                <i className="fas fa-check-circle"></i> Thank you for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="newsletter-form">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="subscribe-btn">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                        )}
                        <div className="opening-hours">
                            <h4><i className="far fa-clock"></i> Opening Hours</h4>
                            <p>Mon-Sat: 9:00- 1:00 AM & 5:00-9:00 PM</p>
                            <p>Sunday: Emergency Only</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src="https://i.ibb.co/kDFGgD7/San.png" alt="Kshitij Homeopathic Clinic" />

                        <p>Healing Naturally, Restoring Balance</p>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Kshitij Homeopathic Clinic. All Rights Reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms">Terms of Service</Link>
                        <span>•</span>
                        <Link to="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </div>

            <div className="back-to-top">
                <a href="#top" aria-label="Back to top">
                    <i className="fas fa-arrow-up"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;