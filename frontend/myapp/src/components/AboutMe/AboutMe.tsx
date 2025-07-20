import React from 'react';
import { FaUserMd, FaGraduationCap, FaBriefcase, FaQuoteLeft } from 'react-icons/fa';
import './AboutMe.css';

type DoctorInfoType = {
    name: string;
    biography: string;
    education: string[];
    experience: string;
    specializations: string[];
}


const AboutMe: React.FC = () => {
    const doctorInfo: DoctorInfoType = {
        name: "Dr. Satish Nichit, MD Homeopathy",
        biography: `
        <p><strong>Kshitij Homoeopathic Clinic</strong> was established in 2011. Since then, we treat people with a <mark>holistic approach</mark>. Our chief objective is to provide <mark>quick and best treatment</mark> for our patients. Our treatment is based on a holistic approach.</p>

        <p>Our <strong>mind and body are connected</strong>. So, when a patient suffers from disease, there is disturbance in his body as well as mind level. So, we do a <mark>detailed and careful study</mark> of both <strong>mind, emotion, stress, and physical complaints</strong>, and then give <strong>constitutional medicine</strong> based on subsequent follow-ups on initial appointment.</p>

        <p>We have <strong>treated more than 20,000 patients successfully</strong> with homoeopathy. We also conduct <strong>patient awareness programs</strong>, which have been responded to very well by our patients. We have also conducted many <mark>free health check-up camps</mark> for needy people.</p>

        <p>We offer treatment of many diseases starting from <mark>simple coryza to cancer</mark>.  
        <br/><strong>Our motto is:</strong> <mark>Heal Patients with Homoeopathy</mark>.</p>

        <p>Our patients have given their <strong>reviews/testimonials</strong> on many digital platforms, including Google.  
        <br/>This shows the amount of <mark>trust and success</mark> we have achieved in our practice.</p>
    `,
        education: [
            "<strong style='color: #2a7ae2;'>B.H.M.S.</strong> from Ahilyanagar Kakasaheb Mhaske Homoeopathic College, which has been one of the best and most dedicated homoeopathic educational institutes in Maharashtra since the early inception of homoeopathy in the state.",
            "<strong style='color: #2a7ae2;'>M.D. (Homeopath)</strong> from A.L. Dhawale Memorial Homoeopathic Institute, Palghar, Mumbai in Homoeopathic Materia Medica. The college has marked its excellence in homoeopathic training and postgraduate education in the country. It has been awarded CENTRE OF EXCELLENCE by the Ministry of AYUSH."
        ],
        experience: "14+ years of clinical practice",
        specializations: [
            "Chronic Disease Management",
            "Pediatric Homeopathy",
            "Autoimmune Disorders",
            "Mental Health Conditions"
        ]
    };


    const images: string[] = [
        "https://i.ibb.co/thbYYBk/doccccc.jpg",
        // "https://i.ibb.co/RHbN5Ch/images.jpg"
    ];

    const [activeImageIndex, setActiveImageIndex] = React.useState<number>(0);

    const nextImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="am-container">
            <div className="am-header">
                <h1 className="am-title">
                    <span className="am-icon"><FaUserMd /></span>
                    About Dr. Satish Nichit
                </h1>
                <p className="am-subtitle">Meet our experienced homeopathic specialist</p>
            </div>

            <div className="am-content">
                <div className="am-image-container">
                    <div className="am-image-wrapper">
                        <img
                            src={images[activeImageIndex]}
                            alt="Dr. Satish Nichit"
                            className="am-doctor-image"
                        />
                        <div className="am-image-nav">
                            <button className="am-nav-button" onClick={prevImage}>
                                &lt;
                            </button>
                            <div className="am-dots">
                                {images.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`am-dot ${index === activeImageIndex ? 'active' : ''}`}
                                        onClick={() => setActiveImageIndex(index)}
                                    />
                                ))}
                            </div>
                            <button className="am-nav-button" onClick={nextImage}>
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>

                <div className="am-details">
                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaUserMd className="am-detail-icon" />
                            Biography
                        </h3>
                        <div className="am-detail-text" dangerouslySetInnerHTML={{ __html: doctorInfo.biography }} />

                    </div>

                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaGraduationCap className="am-detail-icon" />
                            Education & Qualifications
                        </h3>
                        <ul className="am-detail-list">
                            {doctorInfo.education.map((item, index) => (
                                <li
                                    key={index}
                                    className="am-detail-item"
                                    dangerouslySetInnerHTML={{ __html: item }}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="am-detail-card">
                        <h3 className="am-detail-title">
                            <FaBriefcase className="am-detail-icon" />
                            Experience & Specializations
                        </h3>
                        <p className="am-detail-text">{doctorInfo.experience}</p>
                        <div className="am-specializations">
                            {doctorInfo.specializations.map((spec, index) => (
                                <span key={index} className="am-specialization">{spec}</span>
                            ))}
                        </div>
                    </div>

                    <div className="am-quote-card">
                        <FaQuoteLeft className="am-quote-icon" />
                        <p className="am-quote-text">
                            "Homeopathy cures a larger percentage of cases than any other method of treatment
                            and is beyond doubt safer and more economical."
                        </p>
                        <p className="am-quote-author">- Mahatma Gandhi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
