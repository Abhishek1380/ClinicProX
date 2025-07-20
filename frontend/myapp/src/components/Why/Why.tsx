import React from 'react';
import './Why.css';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

const Why: React.FC = () => {


    const benefits: Benefit[] = [
        {
            icon: 'ri-user-heart-line',
            title: 'Holistic Healing',
            description: 'We treat the whole person, not just symptoms, for lasting wellness'
        },
        {
            icon: 'ri-flask-line',
            title: 'Pure Remedies',
            description: 'Natural medicines prepared to highest standards of homeopathic pharmacy'
        },
        {
            icon: 'ri-time-line',
            title: 'Time-Tested Wisdom',
            description: '200+ years of homeopathic tradition combined with modern research'
        },
        {
            icon: 'ri-team-line',
            title: 'Individualized Care',
            description: 'Each treatment plan is customized to your unique health needs'
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="why-container">
                <div className="why-content">
                    <div className="section-tag">WHY CHOOSE US</div>
                    <h2 className="section-title">The Homeopathic Difference</h2>
                    <p className="section-description">
                        At our clinic, we blend centuries-old homeopathic wisdom with modern clinical
                        expertise to provide truly transformative healing experiences.
                    </p>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-card" key={benefit.title}>
                                <div className="card-icon-container">
                                    <i className={benefit.icon}></i>
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                                <div className="card-hover-effect"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="why-image-container">
                    <div className="image-wrapper">
                        <img
                            src="https://i.ibb.co/thbYYBk/doccccc.jpg"
                            alt="Professional homeopathic consultation"
                            className="doctor-portrait"
                        />
                        <div className="image-overlay"></div>
                        <div className="experience-badge">
                            <span>14+</span>
                            <p>Years of Healing Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;