import React from "react";
import { motion } from "framer-motion";
import "./QuickDoctorInfo.css";
import { useNavigate } from "react-router-dom";

const QuickDoctorInfo = () => {

    const navigate = useNavigate();
    return (
        <section className="quick_doctor">

            <div className="doctor_text">
                <h1>Welcome to <span>Natural Healing</span></h1>
                <p>
                    Experience holistic health with our carefully curated homeopathy remedies. Nature has the power to heal—let us guide you!
                </p>
                <motion.button
                    className="discover_btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/aboutme")}
                >
                    Discover More
                </motion.button>
            </div>

            <div className="doctor_image_container">
                <motion.div
                    className="circular_border"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                <motion.img
                    src="https://i.ibb.co/vCkPVpNV/Medicine.jpg"
                    alt="Doctor"
                    className="doctor_image"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
};

export default QuickDoctorInfo;
