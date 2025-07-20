import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import unnamedImg from '../../assets/unnamed.jpg';
import Feedback from '../../assets/Feedback.jpg';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const dots: string[] = ['0', '1'];

    const handleGetDirection = (): void => {
        window.open(
            "https://www.google.com/maps/dir/?api=1&destination=Kshitij+homoeopathic+clinic,+Pune,+India",
            "_blank"
        );
    };

    const moveToSlide = (index: number): void => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dots.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >

                <div className="carousel-slide">
                    <div className="slide-image">
                        <img src={unnamedImg} alt="Kshitij Clinic" />
                    </div>
                    <div className="slide-content">
                        <h2>Welcome to Kshitij Homeopathy Clinic</h2>
                        <p>
                            <strong>Kshitij Homeopathy Clinic</strong> is one of the best homeopathic clinics in Akurdi.
                            <strong> Dr. Satish Nichit</strong> has been treating patients for over 14 years and has
                            successfully cared for thousands of individuals.
                        </p>
                        <ul className="benefits-list">
                            <li>Best Homeopathic Clinic in Akurdi.</li>
                            <li>Serving patients since 14 years.</li>
                            <li>Treated thousands of patients successfully.</li>
                            <li>Top clinic in Akurdi and PCMC area.</li>
                        </ul>
                        <div className="social-links-icons">
                            <a
                                href="https://www.practo.com/pune/clinic/kshitij-homoeopathic-clinic-akurdi"
                                className="icon-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-user-md"></i>
                            </a>
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=Kshitij+homoeopathic+clinic,+Pune,+India"
                                className="icon-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-map-marker-alt"></i>
                            </a>
                            <Link
                                to="/aboutme"
                                className="icon-btnn animated-know-more-btn"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="carousel-slide">
                    <div className="slide-image">
                        <img src={Feedback} alt="Stories of Healing" />
                    </div>
                    <div className="slide-content">
                        <h2>Stories of Healing</h2>
                        <div className="testimonials-scroll">
                            <div className="scroll-inner">
                                <blockquote>
                                    “Medicines are very helpful and effective. And doctor is also very supportive and understanding.”
                                    <br />
                                    <span>– Risheeta Bagade</span>
                                </blockquote>
                                <blockquote>
                                    “Exceptional Availability and Effective Treatment for Various Diseases 🙌🏻 …”
                                    <br />
                                    <span>– Nilesh Andhale</span>
                                </blockquote>
                                <blockquote>
                                    “Dr. Satish Nichit has helped me overcome flaws and emotional setbacks.
                                    Homeopathy clears long-term disorders well. Thank you Doctor.”
                                    <br />
                                    <span>– Tanuja Chaudhari-Deshpande</span>
                                </blockquote>
                                <blockquote>
                                    “We consulted Dr. Satish for COPD-related issues post-pneumonia. With effective treatment and monthly support, my mother’s lung health improved significantly.”
                                    <br />
                                    <span>– Shekhar T</span>
                                </blockquote>
                                <blockquote>
                                    “I was skeptical at first, but now I’m a believer. I feel more energetic and calm than ever.”
                                    <br />
                                    <span>– Abhishek Unde</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="carousel-dots">
                {dots.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => moveToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
