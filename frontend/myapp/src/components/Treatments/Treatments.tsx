import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import './Treatments.css';

interface Treatment {
    t_id: number,
    img1: string,
    title: string,
    greet: string
}

const Treatments: React.FC = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get<Treatment[]>('https://backend-clinic-website.onrender.com/treatments')
            .then(response => {
                setTreatments(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching treatments:', error);
                setLoading(false);
            });
    }, []);

    const floatingAnimations: string[] = [
        'floating1', 'floating2', 'floating3', 'floating4',
        'floating5', 'floating6', 'floating7', 'floating8'
    ];

    return (
        <div className="treatment_div">
            <h5 className="Page_title text-center">
                <span><i className="ri-hospital-line"></i><i className="ri-arrow-right-s-line"></i></span>
                Learn about our treatments
            </h5>

            <div className="treatment_container">
                {loading ? (
                    <div className="spinner-container">
                        <ClipLoader
                            color="#3498db"
                            size={50}
                            speedMultiplier={0.8}
                            style={{ borderWidth: "6px" }}
                        />
                    </div>
                ) : (
                    treatments.map((item, index) => (
                        <Link to={`/treatment/${item.t_id}`} key={item.t_id} className="treatment_link">
                            <div className={`treatment_main_box ${floatingAnimations[index % floatingAnimations.length]}`}>
                                <div className="treatment_box">
                                    <div className="treatment_img_div">
                                        <img
                                            src={item.img1}
                                            alt={item.title}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/fallback-image.jpg'
                                            }}
                                        />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.greet}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Treatments;