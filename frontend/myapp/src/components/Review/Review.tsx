import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Review.css";

interface ReviewType {
    _id: string;
    profile_photo_url: string;
    author_name: string;
    author_url: string;
    text: string;
}

const Review: React.FC = () => {
    const [reviews, setReviews] = useState<ReviewType[]>([]);

    useEffect(() => {
        axios
            .get("https://backend-clinic-website.onrender.com/reviews")
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
            });
    }, []);

    return (
        <section className="gr-section">
            <div className="gr-header">
                <h2 className="gr-title">Real People. Real Transformations.</h2>
                <p className="gr-subtitle">
                    Here’s what our community says. Trusted by hundreds for genuine results.
                </p>
                <a
                    href="https://www.google.com/maps/place/Kshitij+homoeopathic+clinic/@18.649562,73.7756456,17z/data=!4m8!3m7!1s0x3bc2b9d09eb3ce65:0x8240933884300eab!8m2!3d18.6495569!4d73.7782205!9m1!1b1!16s%2Fg%2F11h0g_36ml?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="gr-cta">View All on Google</button>
                </a>

            </div>

            <div className="gr-carousel">
                {reviews.map((review) => (
                    <div className="gr-card" key={review._id}>
                        <div className="gr-profile">
                            <img
                                src={review.profile_photo_url}
                                alt={review.author_name}
                                className="gr-avatar"
                            />
                            <div className="gr-meta">
                                <h4 className="gr-author">
                                    <a
                                        href={review.author_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gr-author-link"
                                    >
                                        {review.author_name}
                                    </a>
                                </h4>
                                <span className="gr-stars">★★★★★</span>
                            </div>
                        </div>
                        <div className="gr-text-scroll">
                            <p className="gr-text">“{review.text}”</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;
