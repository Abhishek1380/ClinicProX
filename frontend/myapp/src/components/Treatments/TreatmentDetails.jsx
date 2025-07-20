import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './TreatmentDetails.css';

const TreatmentDetails = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        const fetchTreatment = async () => {
            try {
                const response = await axios.get(`https://backend-clinic-website.onrender.com/treatments/${id}`);
                setTreatment(response.data[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTreatment();
    }, [id]);

    if (loading) return (
        <div className="loading-state">
            <div className="loading-spinner"></div>
        </div>
    );

    if (error) return (
        <div className="error-state">
            <h3>Unable to load treatment</h3>
            <p>{error}</p>
        </div>
    );

    if (!treatment) return (
        <div className="not-found-state">
            <h3>Treatment not available</h3>
            <p>The requested treatment could not be found.</p>
        </div>
    );

    return (
        <motion.main
            className="treatment-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <article className="treatment-article">
                <header className="treatment-header">
                    <h1 className="treatment-title">{treatment.title}</h1>
                    <div className="treatment-meta">
                        <span className="treatment-date">
                            Last updated: {new Date().toLocaleDateString()}
                        </span>
                    </div>
                </header>

                <div className="treatment-media">
                    <img
                        src={treatment.img}
                        alt={treatment.title}
                        className="treatment-image"
                        onError={(e) => e.target.src = '/default-treatment.jpg'}
                    />
                </div>

                <div className="treatment-content">
                    {treatment.desc1 && <p className="treatment-text">{treatment.desc1}</p>}
                    {treatment.desc2 && <p className="treatment-text">{treatment.desc2}</p>}
                    {treatment.desc3 && <p className="treatment-text">{treatment.desc3}</p>}

                    {treatment.greet1 && (
                        <blockquote className="treatment-quote">
                            <p>{treatment.greet1}</p>
                        </blockquote>
                    )}
                </div>

                <footer className="treatment-footer">
                    <button className="cta-button">
                        Schedule Consultation
                    </button>
                </footer>
            </article>
        </motion.main>
    );
};

export default TreatmentDetails;
