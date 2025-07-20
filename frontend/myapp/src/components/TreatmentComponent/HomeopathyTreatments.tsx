import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaClinicMedical } from 'react-icons/fa';
import './HomeopathyTreatments.css';

interface Treatment {
    id: number;
    name: string;
    category: keyof typeof herbIcons;
    shortDescription: string;
    image: string;
    duration: string;
    symptoms: string[];
}

// Herb icons mapped to conditions
const herbIcons: Record<string, string> = {
    "Immunity": "🌿",
    "Cold": "🍂",
    "Stress": "🌼",
    "Digestion": "🍃",
    "Pain": "🌱",
    "Skin": "🌻"
};

const HomeopathyTreatments: React.FC = () => {

    const [treatments] = useState<Treatment[]>([
        {
            "id": 1,
            "name": "Immunity Booster",
            "category": "Immunity",
            "shortDescription": "Enhance your body's natural defense system with our herbal blend",
            "image": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1tdW5pdHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D",
            "duration": "4-6 weeks",
            "symptoms": ["Frequent colds", "Low energy", "Slow recovery"]
        },
        {
            "id": 2,
            "name": "Cold & Flu Relief",
            "category": "Cold",
            "shortDescription": "Natural remedy to reduce symptoms and speed recovery",
            "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBhbmQlMjBmbHV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "duration": "1-2 weeks",
            "symptoms": ["Runny nose", "Sore throat", "Cough"]
        },
        {
            "id": 3,
            "name": "Stress Calm",
            "category": "Stress",
            "shortDescription": "Herbal solution to reduce anxiety and improve sleep quality",
            "image": "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVzcyUyMHJlbGllZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "duration": "3-5 weeks",
            "symptoms": ["Anxiety", "Insomnia", "Irritability"]
        },
        {
            "id": 4,
            "name": "Digestive Harmony",
            "category": "Digestion",
            "shortDescription": "Gentle formula to restore gut balance and reduce bloating",
            "image": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2VzdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "duration": "2-4 weeks",
            "symptoms": ["Bloating", "Acidity", "Irregular bowel"]
        },
        {
            "id": 5,
            "name": "Joint Comfort",
            "category": "Pain",
            "shortDescription": "Natural pain relief for arthritis and joint stiffness",
            "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9pbnQlMjBwYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "duration": "6-8 weeks",
            "symptoms": ["Joint pain", "Swelling", "Morning stiffness"]
        },
        {
            "id": 6,
            "name": "Skin Clear",
            "category": "Skin",
            "shortDescription": "Detoxifying treatment for eczema and acne",
            "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNrY2FyZSUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            "duration": "4-6 weeks",
            "symptoms": ["Rashes", "Dryness", "Breakouts"]
        }
    ]);



    return (
        <motion.div
            className="homeopathy-treatments"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="section-header">
                <FaClinicMedical className="clinic-icon" />
                <motion.h2
                    className="section-title"
                    whileHover={{ scale: 1.02 }}
                >
                    Holistic Healing Solutions
                </motion.h2>
                <p className="section-subtitle">Natural remedies for lasting wellness</p>
            </div>

            <div className="treatment-grid">
                {treatments.map((treatment, index) => (
                    <motion.div
                        key={treatment.id}
                        className="treatment-card"
                        whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(76, 175, 80, 0.2)" }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                    >

                        <Link to={`/treatments/${treatment.id}`} className="treatment-link">
                            <div className="herb-decoration">
                                <FaLeaf className="herb-icon" />
                                <div className="herb-particle"></div>
                            </div>
                            <div className="treatment-image-container">
                                <img
                                    src={treatment.image}
                                    alt={treatment.name}
                                    className="treatment-image"
                                    onError={(e) => (e.target as HTMLImageElement).src = '/default-herb.jpg'}
                                />

                                <div className="gradient-overlay"></div>
                            </div>
                            <div className="treatment-content">
                                <div className="treatment-badge">
                                    {herbIcons[treatment.category] || "🌿"}
                                </div>
                                <h3>{treatment.name}</h3>
                                <p>{treatment.shortDescription}</p>
                                <motion.div
                                    className="explore-button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Discover Remedy
                                </motion.div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default HomeopathyTreatments;