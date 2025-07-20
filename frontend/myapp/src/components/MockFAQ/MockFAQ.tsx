import React, { useState, useEffect } from "react";
import "./MockFAQ.css";
import axios from "axios";
import MFaq from "../../assets/FAQ.png";

interface FAQ {
    question: string;
    answer: string;
}

const MockFAQ: React.FC = () => {
    const [faqList, setFaqList] = useState<FAQ[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get<FAQ[]>("https://backend-clinic-website.onrender.com/FAQ1")
            .then((response) => {
                setFaqList(response.data);
                setError(null);
            })
            .catch((error) => {
                console.error("Error fetching FAQs:", error);
                setError("Failed to load FAQs. Please try again later.");
            });
    }, []);

    const handleToggle = (index: number): void => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-wrapper">
            <div className="faq-image">
                <img src={MFaq} alt="FAQ Illustration" />
            </div>

            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                {error ? (
                    <p className="error">{error}</p>
                ) : (
                    <div className="faq-list">
                        {faqList.map((faq, index) => (
                            <div
                                className={`faq-item ${activeIndex === index ? "open" : ""}`}
                                key={index}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="faq-question">
                                    {faq.question}
                                    <span className="faq-icon">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MockFAQ;
