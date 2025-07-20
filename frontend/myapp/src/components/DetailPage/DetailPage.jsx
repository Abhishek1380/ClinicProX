import React, { useState } from 'react';
import './DetailPage.css';

const DetailPage = () => {
    const [activeTab, setActiveTab] = useState('arthritis');

    // Sample data for chronic diseases
    const diseases = {
        arthritis: {
            title: "Arthritis Treatment",
            description: "Homeopathy offers effective, gentle treatment for arthritis without side effects. Our remedies reduce inflammation, relieve pain, and improve joint mobility.",
            symptoms: [
                "Joint pain and stiffness",
                "Swelling in joints",
                "Reduced range of motion",
                "Morning stiffness lasting hours"
            ],
            treatmentApproach: "We use remedies like Rhus Tox, Bryonia, and Arnica tailored to your specific symptoms and constitution.",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            testimonials: [
                "After 6 months of homeopathic treatment, my knee pain reduced by 80%.",
                "I can now climb stairs without pain thanks to these remedies."
            ]
        },
        diabetes: {
            title: "Diabetes Management",
            description: "Homeopathy complements conventional diabetes treatment by helping regulate blood sugar and prevent complications.",
            symptoms: [
                "Increased thirst and hunger",
                "Frequent urination",
                "Fatigue",
                "Blurred vision"
            ],
            treatmentApproach: "Remedies like Syzygium Jambolanum and Uranium Nitricum help manage sugar levels while addressing root causes.",
            image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            testimonials: [
                "My HbA1c levels improved significantly with homeopathy.",
                "The constant fatigue is gone since starting treatment."
            ]
        },
        hypertension: {
            title: "Hypertension Control",
            description: "Gentle homeopathic remedies help regulate blood pressure without causing dependency or side effects.",
            symptoms: [
                "Headaches",
                "Shortness of breath",
                "Dizziness",
                "Chest pain"
            ],
            treatmentApproach: "We use remedies like Crataegus, Rauwolfia, and Natrum Mur based on your complete symptom picture.",
            image: "https://images.unsplash.com/photo-1588615419957-5ead75a6b21e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            testimonials: [
                "My BP is now stable without increasing allopathic medication.",
                "The anxiety that came with high BP has significantly reduced."
            ]
        },
        asthma: {
            title: "Asthma Relief",
            description: "Homeopathic treatment reduces frequency and intensity of asthma attacks while addressing underlying causes.",
            symptoms: [
                "Wheezing and shortness of breath",
                "Chest tightness",
                "Coughing fits",
                "Difficulty sleeping due to breathing problems"
            ],
            treatmentApproach: "Remedies like Arsenic Album, Ipecac, and Natrum Sulph are selected based on your unique symptoms.",
            image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            testimonials: [
                "I've reduced my inhaler use by 70% since starting homeopathy.",
                "My child's nighttime asthma attacks have almost stopped."
            ]
        }
    };

    return (
        <div className="chronic-diseases-page">
            {/* Hero Section */}
            <section className="disease-hero">
                <div className="container">
                    <h1>Homeopathic Treatment for Chronic Diseases</h1>
                    <p className="subtitle">Gentle, effective, and personalized solutions for lasting relief</p>
                </div>
            </section>

            {/* Disease Navigation Tabs */}
            <div className="disease-tabs">
                <div className="container">
                    <button
                        className={`tab-btn ${activeTab === 'arthritis' ? 'active' : ''}`}
                        onClick={() => setActiveTab('arthritis')}
                    >
                        Arthritis
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'diabetes' ? 'active' : ''}`}
                        onClick={() => setActiveTab('diabetes')}
                    >
                        Diabetes
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'hypertension' ? 'active' : ''}`}
                        onClick={() => setActiveTab('hypertension')}
                    >
                        Hypertension
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'asthma' ? 'active' : ''}`}
                        onClick={() => setActiveTab('asthma')}
                    >
                        Asthma
                    </button>
                </div>
            </div>

            {/* Disease Content Section */}
            <section className="disease-content">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="text-content">
                            <h2>{diseases[activeTab].title}</h2>
                            <p className="description">{diseases[activeTab].description}</p>

                            <div className="symptoms-box">
                                <h3>Common Symptoms</h3>
                                <ul>
                                    {diseases[activeTab].symptoms.map((symptom, index) => (
                                        <li key={index}>{symptom}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="approach-box">
                                <h3>Our Treatment Approach</h3>
                                <p>{diseases[activeTab].treatmentApproach}</p>
                            </div>

                            <div className="testimonials">
                                <h3>Patient Experiences</h3>
                                <div className="testimonial-grid">
                                    {diseases[activeTab].testimonials.map((testimonial, index) => (
                                        <div key={index} className="testimonial-card">
                                            <div className="quote-icon">"</div>
                                            <p>{testimonial}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="image-content">
                            <img
                                src={diseases[activeTab].image}
                                alt={diseases[activeTab].title}
                                className="disease-image"
                            />
                            <div className="consultation-card">
                                <h4>Personalized Consultation</h4>
                                <p>Each treatment is customized to your unique symptoms and health history</p>
                                <button className="consult-btn">Book an Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section">
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

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Begin Your Healing Journey?</h2>
                    <p>Our experienced homeopaths will create a personalized treatment plan for your chronic condition.</p>
                    <div className="cta-buttons">
                        <button className="primary-cta">Book a Consultation</button>
                        <button className="secondary-cta">Learn More About Homeopathy</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;