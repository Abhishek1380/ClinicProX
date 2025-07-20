import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { title } = useParams();
    const [disease, setDisease] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(
                    `https://backend-clinic-website.onrender.com/service/${encodeURIComponent(title)}`
                );
                setDisease(response.data);
            } catch (error) {
                console.error("Error fetching service:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, [title]);

    if (loading) return (
        <div className="loading-container">
            <div className="skeleton-box shimmer"></div>
            <p>Loading detailed treatment information...</p>
        </div>
    );

    if (!disease) return <div>No data found for: {title}</div>;

    return (
        <div className="chronic-diseases-page">
            <section className="disease-hero fade-in-up">
                <div className="container">
                    <h1>Homeopathic Treatment for Chronic Diseases</h1>
                    <p className="subtitle">Gentle, effective, and personalized solutions for lasting relief</p>
                </div>
            </section>

            <div className="section-divider"></div>

            <section className="disease-content fade-in-up">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="text-content">
                            <h2>{disease.title}</h2>
                            <p className="description">{disease.description}</p>

                            <div className="symptoms-box">
                                <h3>Common Symptoms</h3>
                                <ul>
                                    {disease.symptoms?.map((symptom, index) => (
                                        <li key={index}>{symptom}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="approach-box">
                                <h3>Our Treatment Approach</h3>
                                <p>{disease.treatmentApproach}</p>
                            </div>

                            <div className="testimonials">
                                <h3>Patient Experiences</h3>
                                <div className="testimonial-grid">
                                    {disease.testimonials?.map((testimonial, index) => (
                                        <div key={index} className="testimonial-card fade-in-up">
                                            <div className="quote-icon">"</div>
                                            <p>{testimonial}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="image-content">
                            <img
                                src={disease.image || "/default-image.jpg"}
                                alt={disease.title}
                                className="disease-image"
                            />
                            <div className="consultation-card">
                                <h4>Personalized Consultation</h4>
                                <p>Each treatment is customized to your unique symptoms and health history</p>
                                <Link to="/bookappointment">
                                    <button className="consult-btn">Book an Appointment</button>
                                </Link >
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            <section className="benefits-section fade-in-up">
                <div className="container">
                    <h2>Why Choose Homeopathy for Chronic Conditions?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="icon-circle">🌿</div>
                            <h3>Natural Healing</h3>
                            <p>Uses natural substances to stimulate the body's healing response</p>
                        </div>
                        <div className="benefit-card">
                            <div className="icon-circle">💊</div>
                            <h3>No Side Effects</h3>
                            <p>Gentle remedies that don't cause dependency or adverse effects</p>
                        </div>
                        <div className="benefit-card">
                            <div className="icon-circle">👤</div>
                            <h3>Personalized</h3>
                            <p>Treatment tailored to your unique symptoms and constitution</p>
                        </div>
                        <div className="benefit-card">
                            <div className="icon-circle">🎯</div>
                            <h3>Root Cause</h3>
                            <p>Addresses underlying causes rather than just suppressing symptoms</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            <section className="cta-section fade-in-up">
                <div className="container">
                    <h2>Ready to Begin Your Healing Journey?</h2>
                    <p>Our experienced homeopaths will create a personalized treatment plan for your chronic condition.</p>
                    <div className="cta-buttons">
                        <Link to="/bookappointment">
                            <button className="primary-cta">Book a Consultation</button>
                        </Link>
                        <Link to="/treatment">
                            <button className="secondary-cta">Learn More About Homeopathy</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
