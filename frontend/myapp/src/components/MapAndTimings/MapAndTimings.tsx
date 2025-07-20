import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaDirections } from 'react-icons/fa';
import './MapAndTimings.css';

interface Timing {
    day: string;
    hours: string
}

const MapAndTimings: React.FC = () => {
    const handleGetDirections = (): void => {
        window.open(
            "https://www.google.com/maps/dir/?api=1&destination=Kshitij+homoeopathic+clinic,+Pune,+India",
            "_blank"
        );
    };

    const handleCallClinic = (): void => {
        window.location.href = "tel:+919766830294";
    };

    const timings: Timing[] = [
        { day: 'Monday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Tuesday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Wednesday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Thursday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Friday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 1:00 PM | 5:30 PM - 9:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ];

    return (
        <section className="location-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Location & Hours</h2>
                    <p className="section-subtitle">Visit us or get in touch</p>
                </div>

                <div className="location-content">
                    <div className="map-container">
                        <div className="map-card">
                            <div className="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3216494041926!2d73.77564557490179!3d18.649556882469142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9d09eb3ce65%3A0x8240933884300eab!2sKshitij%20homoeopathic%20clinic!5e0!3m2!1sen!2sin!4v1734765354967!5m2!1sen!2sin"
                                    className="map-iframe"
                                    allowFullScreen
                                    title="Clinic Location"
                                ></iframe>
                            </div>

                            <div className="location-info">
                                <div className="address">
                                    <FaMapMarkerAlt className="info-icon" />
                                    <p>Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035</p>
                                </div>

                                <div className="action-buttons">
                                    <button className="btn direction-btn" onClick={handleGetDirections}>
                                        <FaDirections /> Get Directions
                                    </button>
                                    <button className="btn call-btn" onClick={handleCallClinic}>
                                        <FaPhoneAlt /> Call Clinic
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hours-container">
                        <div className="hours-card">
                            <div className="hours-header">
                                <FaClock className="hours-icon" />
                                <h3>OPD Hours</h3>
                            </div>

                            <div className="hours-schedule">
                                {timings.map((time, index) => (
                                    <div className={`time-row ${time.day === 'Sunday' ? 'closed' : ''}`} key={index}>
                                        <span className="day">{time.day}</span>
                                        <span className="hours">{time.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapAndTimings;