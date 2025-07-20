import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaArrowLeft, FaClock, FaFlask, FaHeart, FaStar } from 'react-icons/fa';
import './HomeopathyTreatmentDetail.css';


const treatmentsData = [
    {
        "id": 1,
        "name": "Immunity Booster",
        "category": "Immunity",
        "shortDescription": "Enhance your body's natural defense system with our herbal blend",
        "longDescription": "Our Immunity Booster is a carefully formulated homeopathic remedy that strengthens your body's natural defense mechanisms. Combining traditional wisdom with modern research, this treatment helps reduce frequency of illnesses, increases energy levels, and promotes faster recovery.",
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1tdW5pdHklMjBmb29kc3xlbnwwfHwwfHx8MA%3D%3D",
        "duration": "4-6 weeks",
        "symptoms": ["Frequent colds", "Low energy", "Slow recovery", "Seasonal allergies", "General weakness"],
        "ingredients": [
            { "name": "Echinacea", "purpose": "Stimulates immune response" },
            { "name": "Astragalus", "purpose": "Enhances white blood cell activity" },
            { "name": "Ginseng", "purpose": "Boosts energy and vitality" },
            { "name": "Turmeric", "purpose": "Reduces inflammation" }
        ],
        "testimonials": [
            { "name": "Sarah K.", "rating": 5, "comment": "Haven't been sick since starting this treatment!" },
            { "name": "Michael T.", "rating": 4, "comment": "Noticeable difference in my energy levels." }
        ],
        "science": "Clinical studies show the active compounds in these herbs increase production of immune cells by up to 40% when taken regularly for 4 weeks.",
        "usage": "Take 5 drops under tongue 3 times daily, preferably before meals. Avoid strong flavors for 15 minutes after administration."
    },
    {
        "id": 2,
        "name": "Cold & Flu Relief",
        "category": "Cold",
        "shortDescription": "Natural remedy to reduce symptoms and speed recovery",
        "longDescription": "Our Cold & Flu Relief formula provides gentle yet effective symptom relief while helping your body fight infections naturally. Unlike conventional medicines that suppress symptoms, this remedy works with your body's healing processes.",
        "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjBhbmQlMjBmbHV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "duration": "1-2 weeks",
        "symptoms": ["Runny nose", "Sore throat", "Cough", "Fever", "Body aches"],
        "ingredients": [
            { "name": "Oscillococcinum", "purpose": "Reduces duration of flu symptoms" },
            { "name": "Allium Cepa", "purpose": "Relieves runny nose and sneezing" },
            { "name": "Gelsemium", "purpose": "Addresses weakness and fatigue" },
            { "name": "Eucalyptus", "purpose": "Clears nasal congestion" }
        ],
        "testimonials": [
            { "name": "David P.", "rating": 5, "comment": "Cut my cold duration in half!" },
            { "name": "Emma L.", "rating": 4, "comment": "No more drowsiness like with cold medicines" }
        ],
        "science": "Research indicates these homeopathic ingredients can reduce symptom severity by 60% and shorten illness duration by 1-3 days when taken at onset.",
        "usage": "Take 10 drops every 2 hours during acute phase, then reduce to 3 times daily as symptoms improve."
    },
    {
        "id": 3,
        "name": "Stress Calm",
        "category": "Stress",
        "shortDescription": "Herbal solution to reduce anxiety and improve sleep quality",
        "longDescription": "Stress Calm is a holistic formulation designed to gently soothe the nervous system, reduce anxiety, and promote restful sleep without dependency or grogginess. It helps restore emotional balance during challenging times.",
        "image": "https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVzcyUyMHJlbGllZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "duration": "3-5 weeks",
        "symptoms": ["Anxiety", "Insomnia", "Irritability", "Restlessness", "Overthinking"],
        "ingredients": [
            { "name": "Passionflower", "purpose": "Calms nervous tension" },
            { "name": "Valerian Root", "purpose": "Promotes deep sleep" },
            { "name": "Chamomile", "purpose": "Reduces irritability" },
            { "name": "Lavender", "purpose": "Eases anxiety" }
        ],
        "testimonials": [
            { "name": "Jennifer M.", "rating": 5, "comment": "Finally sleeping through the night!" },
            { "name": "Robert H.", "rating": 5, "comment": "Helped me through a very stressful period" }
        ],
        "science": "Studies show these botanicals increase GABA activity in the brain by up to 45%, promoting relaxation without sedation.",
        "usage": "Take 15 drops in water before bedtime, or as needed during stressful moments. Can be used up to 4 times daily."
    },
    {
        "id": 4,
        "name": "Digestive Harmony",
        "category": "Digestion",
        "shortDescription": "Gentle formula to restore gut balance and reduce bloating",
        "longDescription": "Our Digestive Harmony blend is a comprehensive homeopathic solution designed to support optimal digestive function. This carefully balanced formula helps regulate digestion, soothe gastrointestinal discomfort, and promote a healthy gut microbiome. It combines traditional digestive herbs with modern homeopathic preparations for complete digestive support.",
        "image": "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2VzdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "duration": "2-4 weeks",
        "symptoms": ["Bloating", "Acidity", "Irregular bowel", "Heartburn", "Stomach cramps", "Food sensitivities"],
        "ingredients": [
            { "name": "Gentian Root", "purpose": "Stimulates digestive enzymes" },
            { "name": "Peppermint", "purpose": "Relieves bloating and gas" },
            { "name": "Chamomile", "purpose": "Soothes intestinal inflammation" },
            { "name": "Ginger", "purpose": "Improves digestion and reduces nausea" },
            { "name": "Fennel", "purpose": "Relieves abdominal discomfort" }
        ],
        "testimonials": [
            { "name": "Lisa M.", "rating": 5, "comment": "Life-changing for my IBS symptoms!" },
            { "name": "Raj P.", "rating": 4, "comment": "No more bloating after meals" },
            { "name": "Sophia K.", "rating": 5, "comment": "Finally found relief from chronic heartburn" }
        ],
        "science": "Clinical trials demonstrate this combination of herbs increases digestive enzyme production by 35% and reduces bloating symptoms by 68% within 2 weeks of consistent use. The formula works by modulating gut motility and supporting beneficial gut bacteria.",
        "usage": "Take 10 drops in warm water 15 minutes before meals, 3 times daily. For acute symptoms, may take every 30 minutes for up to 4 doses."
    },
    {
        "id": 5,
        "name": "Joint Comfort",
        "category": "Pain",
        "shortDescription": "Natural pain relief for arthritis and joint stiffness",
        "longDescription": "Joint Comfort is our specialized homeopathic formulation for supporting joint health and mobility. This powerful yet gentle remedy helps reduce inflammation, lubricate joints, and repair connective tissue. Ideal for arthritis sufferers, athletes, or anyone experiencing joint discomfort, it provides comprehensive support without the side effects of conventional pain medications.",
        "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9pbnQlMjBwYWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "duration": "6-8 weeks",
        "symptoms": ["Joint pain", "Swelling", "Morning stiffness", "Reduced mobility", "Cartilage degeneration", "Arthritis"],
        "ingredients": [
            { "name": "Boswellia", "purpose": "Reduces joint inflammation" },
            { "name": "Turmeric", "purpose": "Powerful anti-inflammatory" },
            { "name": "Devil's Claw", "purpose": "Natural pain relief" },
            { "name": "MSM", "purpose": "Supports connective tissue" },
            { "name": "Harpagophytum", "purpose": "Improves joint mobility" }
        ],
        "testimonials": [
            { "name": "William T.", "rating": 5, "comment": "I can play tennis again after 5 years!" },
            { "name": "Maria G.", "rating": 4, "comment": "90% reduction in knee pain" },
            { "name": "Henry L.", "rating": 5, "comment": "No more morning stiffness after 4 weeks" }
        ],
        "science": "Research shows this combination increases synovial fluid production by 42% and reduces inflammatory markers (CRP) by 58% in osteoarthritis patients. The formula works synergistically to inhibit inflammatory pathways while promoting cartilage repair.",
        "usage": "Take 8 drops under tongue 3 times daily. For acute flare-ups, may increase to 5 times daily for up to 3 days. Best taken between meals."
    },
    {
        "id": 6,
        "name": "Skin Clear",
        "category": "Skin",
        "shortDescription": "Detoxifying treatment for eczema and acne",
        "longDescription": "Skin Clear is our comprehensive dermatological solution that works from within to promote healthy, radiant skin. This deep-cleansing formula helps detoxify the body, balance oil production, and support skin healing. Effective for acne, eczema, psoriasis and other chronic skin conditions, it addresses the root causes rather than just masking symptoms.",
        "image": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNrY2FyZSUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "duration": "4-6 weeks",
        "symptoms": ["Rashes", "Dryness", "Breakouts", "Redness", "Itching", "Adult acne", "Eczema flare-ups"],
        "ingredients": [
            { "name": "Burdock Root", "purpose": "Blood purifier and detoxifier" },
            { "name": "Red Clover", "purpose": "Supports skin healing" },
            { "name": "Yellow Dock", "purpose": "Liver support for clear skin" },
            { "name": "Nettle", "purpose": "Reduces inflammatory responses" },
            { "name": "Oregon Grape", "purpose": "Antimicrobial for acne" }
        ],
        "testimonials": [
            { "name": "Emma S.", "rating": 5, "comment": "My adult acne cleared completely in 5 weeks" },
            { "name": "Daniel K.", "rating": 4, "comment": "Eczema patches reduced by 80%" },
            { "name": "Olivia M.", "rating": 5, "comment": "Finally found something that works for my rosacea" }
        ],
        "science": "Clinical studies demonstrate this formulation reduces acne lesions by 72% and eczema symptoms by 65% within 6 weeks. The herbs work synergistically to support liver detoxification, reduce inflammatory cytokines, and promote skin healing at the cellular level.",
        "usage": "Take 10 drops in water twice daily (morning and evening). For acute breakouts, may increase to 3 times daily for up to 1 week. Drink plenty of water to support detoxification."
    }
];

const HomeopathyTreatmentDetail = () => {
    const { id } = useParams();
    const treatment = treatmentsData.find(t => t.id.toString() === id);

    if (!treatment) {
        return <div className="treatment-not-found">Treatment not found</div>;
    }


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
    };

    return (
        <motion.div
            className="treatment-detail-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="treatment-hero">
                <motion.div
                    className="hero-background"
                    style={{ backgroundImage: `url(${treatment.image})` }}
                    variants={fadeIn}
                >
                    <div className="hero-overlay"></div>
                </motion.div>

                <motion.div className="hero-content" variants={itemVariants}>


                    {/* <motion.div
                        className="treatment-badge"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                        <FaLeaf />
                    </motion.div> */}

                    <h1>{treatment.name}</h1>
                    <p className="category-tag">{treatment.category} Treatment</p>
                    <p className="hero-description">{treatment.shortDescription}</p>
                </motion.div>
            </div>

            <motion.div className="treatment-content" variants={containerVariants} style={{ paddingTop: "4rem" }}>
                <motion.div className="treatment-section" variants={itemVariants}>
                    <Link to="/" className="back-button">
                        <FaArrowLeft /> All Treatments
                    </Link>
                    <h2>About This Remedy</h2>
                    <p>{treatment.longDescription}</p>
                </motion.div>

                <div className="treatment-details-grid">
                    <motion.div className="detail-card" variants={itemVariants}>
                        <div className="detail-icon">
                            <FaClock />
                        </div>
                        <h3>Treatment Duration</h3>
                        <p>{treatment.duration}</p>
                    </motion.div>

                    <motion.div className="detail-card" variants={itemVariants}>
                        <div className="detail-icon">
                            <FaFlask />
                        </div>
                        <h3>Key Ingredients</h3>
                        <ul>
                            {treatment.ingredients.slice(0, 3).map((ing, idx) => (
                                <li key={idx}>
                                    <strong>{ing.name}:</strong> {ing.purpose}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div className="detail-card" variants={itemVariants}>
                        <div className="detail-icon">
                            <FaHeart />
                        </div>
                        <h3>Targeted Symptoms</h3>
                        <div className="symptoms-container">
                            {treatment.symptoms.map((symptom, idx) => (
                                <span key={idx} className="symptom-tag">{symptom}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div className="treatment-section" variants={itemVariants}>
                    <h2>Scientific Basis</h2>
                    <p>{treatment.science}</p>
                </motion.div>

                <motion.div className="treatment-section" variants={itemVariants}>
                    <h2>Recommended Usage</h2>
                    <p>{treatment.usage}</p>
                </motion.div>

                {/* {treatment.testimonials.length > 0 && (
                    <motion.div className="testimonials-section" variants={itemVariants}>
                        <h2>Patient Experiences</h2>
                        <div className="testimonials-grid">
                            {treatment.testimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={idx}
                                    className="testimonial-card"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="testimonial-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < testimonial.rating ? "star-filled" : "star-empty"}
                                            />
                                        ))}
                                    </div>
                                    <p className="testimonial-text">"{testimonial.comment}"</p>
                                    <p className="testimonial-author">— {testimonial.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )} */}

                {/* <motion.div
                    className="cta-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2>Ready to Begin Your Healing Journey?</h2>
                    <Link to="/consultation" className="cta-button">
                        Consult Our Specialist
                    </Link>
                </motion.div> */}
            </motion.div>
        </motion.div>
    );
};

export default HomeopathyTreatmentDetail;