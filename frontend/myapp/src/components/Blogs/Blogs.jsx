import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://backend-clinic-website.onrender.com/blogs")
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setError("Failed to load blogs. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="Blogs_container">
            <h5 className="text center">
                <span>
                    <i className="ri-hospital-line"></i>
                    <i className="ri-arrow-right-s-line"></i>
                </span>{" "}
                blogs about Homeopathy
            </h5>

            {loading && (
                <div className="spinner-container">
                    <div className="spinner"></div>
                    <p>Loading blogs...</p>
                </div>
            )}

            {error && <p className="error">{error}</p>}

            <div className="Blogs_div">
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div key={blog._id} className="Blogs_card">
                            <div className="Blogscard-img-holder">
                                <img src={blog.img} alt={blog.title} />
                            </div>
                            <h3 className="Blogs_blog-title">{blog.title}</h3>
                            <span className="Blogs_blog-time">{blog.date}</span>
                            <p className="Blogs_description">{blog.desc}</p>
                            <div className="Blogs_options">
                                <Link to={`/blog/${blog.rank}`}>
                                    <button className="Blogs_btn">Read More</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    !loading && <p>No blogs available.</p>
                )}
            </div>
        </div>
    );
};

export default Blogs;
