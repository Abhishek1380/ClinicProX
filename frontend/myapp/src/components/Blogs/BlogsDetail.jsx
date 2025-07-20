import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogsDetail.css";

const BlogsDetail = () => {
    const { rank } = useParams();  // Get rank from URL
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogsDetail, setBlogsDetail] = useState(null);

    useEffect(() => {
        const treatmentRank = rank ? parseInt(rank) : Math.floor(Math.random() * 3) + 1;
        // If rank is in URL, use it; otherwise, generate a random number between 1 and 3

        axios
            .get(`https://backend-clinic-website.onrender.com/treatments/${treatmentRank}`)
            .then((response) => {
                setBlogsDetail(Array.isArray(response.data) ? response.data : [response.data]);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching treatment details!", error);
                setError("Failed to load treatment details. Please try again later.");
                setLoading(false);
            });
    }, [rank]);  // Runs when `rank` changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="Article_container">
            {blogsDetail && blogsDetail.length > 0 ? (
                blogsDetail.map((item) => (
                    <div className="Article_div" key={item.t_id}>
                        <h2 className="Article_title text-center">{item.title}</h2>
                        <p className="Article_date">22nd Oct 2024</p>
                        <div className="Article_img">
                            <img src={item.img} alt={item.title} style={{ borderRadius: "30px" }} />
                        </div>
                        <p className="Article_description">{item.desc1}</p>
                        <p className="Article_description">{item.desc2}</p>
                        <p className="Article_description">{item.desc3}</p>
                        <p className="Article_quote" style={{ fontWeight: "bold" }}>{item.greet1}</p>
                    </div>
                ))
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default BlogsDetail;
