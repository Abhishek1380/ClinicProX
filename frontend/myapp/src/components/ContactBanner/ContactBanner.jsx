import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <div className="contact-banner">
            <div className="contact-content">
                <a href="tel:9766830294" className="contact-link">📞 Call Us</a>
                <span className="contact-divider">|</span>
                <a href="mailto:undeabhishek91@gmail.com" className="contact-link">✉️ Email Us</a>
            </div>
        </div>
    );
};

export default ContactBanner;