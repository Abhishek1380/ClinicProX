import React, { useState, useEffect } from "react";
import './FAQ.css';
import axios from 'axios';
import { FiHelpCircle } from 'react-icons/fi';

const FAQ = () => {
    const [faqList, setFaqList] = useState([]);

    useEffect(() => {
        axios.get('https://backend-clinic-website.onrender.com/FAQ1')
            .then(response => {
                setFaqList(response.data);
            })
            .catch(error => {
                console.error('Error fetching FAQs:', error);
            });
    }, []);

    return (
        <section className="grid-faq-section">
            <div className="container">
                <div className="section-header">
                    <FiHelpCircle className="section-icon" />
                    <h2>How Can We Help?</h2>
                    <p>Quick answers to your common questions</p>
                </div>

                <div className="faq-grid">
                    {faqList.length > 0 ? (
                        faqList.map((faq, index) => (
                            <div className="faq-card" key={index}>
                                <div className="card-icon">Q</div>
                                <div className="card-content">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-faqs">
                            <p>No FAQs available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FAQ;