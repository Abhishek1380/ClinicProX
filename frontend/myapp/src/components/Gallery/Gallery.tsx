import React, { useState } from 'react';
import { FaClinicMedical, FaUserInjured, FaArrowRight, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


import './Gallery.css';

interface ImageItem {
    id: number;
    url: string;
    alt: string;
}

type Tab = 'clinic' | 'patient';

const Gallery: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('clinic');
    const [expandedImage, setExpandedImage] = useState<ImageItem | null>(null);
    const navigate = useNavigate();


    const images: Record<Tab, ImageItem[]> = {
        clinic: [
            { id: 1, url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800', alt: 'Modern clinic lobby' },
            { id: 2, url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800', alt: 'Examination room' },
            { id: 3, url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800', alt: 'Medical equipment' },
            { id: 4, url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800', alt: 'Waiting area' },
            { id: 5, url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800', alt: 'Surgical theater' },
            { id: 6, url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', alt: 'Laboratory' },
        ],
        patient: [
            { id: 7, url: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800', alt: 'Doctor consultation' },
            { id: 8, url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800', alt: 'Pediatric care' },
            { id: 9, url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800', alt: 'Senior patient care' },
            { id: 10, url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800', alt: 'Physical therapy' },
            { id: 11, url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800', alt: 'Dental examination' },
            { id: 12, url: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800', alt: 'Eye examination' },
        ]
    };

    return (
        <div className="modern-gallery">
            <div className="gallery-header">
                <h2>Our Medical Facility</h2>
                <p>Explore our modern clinic and see how we care for our patients.</p>
            </div>

            <div className="gallery-tabs">
                <button
                    className={`tab-button ${activeTab === 'clinic' ? 'active' : ''}`}
                    onClick={() => setActiveTab('clinic')}
                >
                    <FaClinicMedical /> Clinic
                </button>
                <button
                    className={`tab-button ${activeTab === 'patient' ? 'active' : ''}`}
                    onClick={() => setActiveTab('patient')}
                >
                    <FaUserInjured /> Patient Care
                </button>
            </div>

            <div className="image-grid">
                {images[activeTab].map((image) => (
                    <div
                        key={image.id}
                        className="image-card"
                        onClick={() => setExpandedImage(image)}
                    >
                        <img src={image.url} alt={image.alt} />
                        <div className="image-hover">
                            <FaPlus className="zoom-icon" />
                            <span>View</span>
                        </div>
                    </div>
                ))}
            </div>

            {expandedImage && (
                <div className="image-modal" onClick={() => setExpandedImage(null)}>
                    <div className="modal-content">
                        <img src={expandedImage.url} alt={expandedImage.alt} />
                        <div className="image-details">
                            <h3>{expandedImage.alt}</h3>
                            <button className="close-button">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="gallery-cta">
                <button className="cta-button" onClick={() => navigate('/bookappointment')}>
                    Schedule a Visit <FaArrowRight />
                </button>
            </div>

        </div>
    );
};

export default Gallery;