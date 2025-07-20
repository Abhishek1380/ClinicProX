import React, { useState } from 'react';
import './Cards.css';

interface Treatment {
    img: string;
    title: string;
    desc: string;
}

const treatments: Treatment[] = [
    {
        img: "https://i.ibb.co/nNtB8YRJ/pexels-arina-krasnikova-6663456.jpg",
        title: "Skin Glow Therapy",
        desc: "Natural homeopathic remedies to restore skin glow, reduce dullness, and promote an even, radiant tone."
    },
    {
        img: "https://i.ibb.co/Lzbyjjs1/towfiqu-barbhuiya-FGq-Eu-M0wu-Kk-unsplash.jpg",
        title: "Hair Fall Control",
        desc: "Personalized homeopathic medicines to reduce hair fall, strengthen roots, and support healthy hair regrowth."
    },
    {
        img: "https://i.ibb.co/4R0sMNpC/daniil-lebedev-3-S75o-Mu-o-UQ-unsplash.jpg",
        title: "Acne and Pimples",
        desc: "Treats acne from within by correcting hormonal imbalance and digestive causes using safe homeopathic solutions."
    },
    {
        img: "https://i.ibb.co/nq6PY0LF/andy-vult-g-ITzc-Wz-M-Y4-unsplash.jpg",
        title: "Allergy Relief",
        desc: "Helps reduce skin rashes, itching, and seasonal allergies by strengthening the immune system naturally."
    },
    {
        img: "https://i.ibb.co/0jm3z4Xs/fuu-j-Fu7-RNjl-p-W0-unsplash.jpg",
        title: "Weight Management",
        desc: "Homeopathy along with lifestyle guidance to support healthy weight loss by balancing metabolism and appetite."
    },
    {
        img: "https://i.ibb.co/zcjgHYS/olga-thelavart-k4-Manx-EQAn-E-unsplash.jpg",
        title: "Hair Dandruff Solution",
        desc: "Addresses dandruff, scalp dryness, and itchiness with gentle homeopathic medicines for healthy scalp care."
    },
    {
        img: "https://i.ibb.co/PZ4GfwLV/volodymyr-hryshchenko-qk-JRmy1a-FHY-unsplash.jpg",
        title: "Detox and Immunity Boost",
        desc: "Homeopathy-supported natural detox plans that cleanse the body and enhance immunity without harsh side effects."
    },
    {
        img: "https://i.ibb.co/m5rRg3bj/towfiqu-barbhuiya-Fs-VEqei-Ot-Po-unsplash.jpg",
        title: "Chronic Skin Issues",
        desc: "Long-term management of eczema, psoriasis, and dermatitis using deep-acting homeopathic remedies."
    },
    {
        img: "https://i.ibb.co/QvfDKnxL/pexels-david-garrison-1128051-2128817.jpg",
        title: "Microneedle",
        desc: "Microneedling boosts collagen, improving scars, wrinkles, and skin elasticity effectively."
    }
];

const Cards: React.FC = () => {
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

    const toggleFlip = (index: number): void => {
        setFlippedIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="trt-cards-section">
            <div className="trt-cards-header">
                <div className="trt-cards-header-icon">
                    <i className="ri-hospital-line"></i>
                    <i className="ri-arrow-right-s-line"></i>
                </div>
                <h2 className="trt-cards-title">Learn About Our Treatments</h2>
                <p className="trt-cards-subtitle">Click on any treatment to learn more</p>
            </div>

            <div className="trt-cards-grid">
                {treatments.map((treatment, index) => (
                    <div
                        key={index}
                        className={`trt-card ${flippedIndices.includes(index) ? 'trt-card-flipped' : ''}`}
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="trt-card-inner">
                            <div className="trt-card-front">
                                <div className="trt-card-image-overlay"></div>
                                <img
                                    src={treatment.img}
                                    alt={treatment.title}
                                    className="trt-card-image"
                                    loading="lazy"
                                />
                                <div className="trt-card-content">
                                    <h3 className="trt-card-title">{treatment.title}</h3>
                                    <div className="trt-card-hint">
                                        <i className="ri-information-line"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="trt-card-back">
                                <div className="trt-card-back-content">
                                    <h3 className="trt-card-back-title">{treatment.title}</h3>
                                    <p className="trt-card-back-desc">{treatment.desc}</p>
                                    {/* <button className="trt-card-learn-more-btn">
                                        Learn More <i className="ri-arrow-right-line"></i>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;