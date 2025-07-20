import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import './BlogDetail.css';

const BlogDetail = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blog, setBlog] = useState(null);
    const [readTime, setReadTime] = useState('3 min read');
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://backend-clinic-website.onrender.com/blog/${slug}`);
                const data = response.data;
                const extractedBlog = {
                    title: data.blog_detail_title,
                    img: data.img_blog_detail,
                    date: data.date,
                    desc1: data.blog_p1,
                    desc2: data.blog_p2,
                    desc3: data.blog_p3,
                    quote: data.blog_detail_thoughts,
                    category: 'Health & Wellness' // Add if available from API
                };
                setBlog(extractedBlog);
                calculateReadTime([data.blog_p1, data.blog_p2, data.blog_p3].join(' '));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching blog:", error);
                setError("Failed to load article. Please try again.");
                setLoading(false);
            }
        };

        const calculateReadTime = (text) => {
            const wpm = 200; // words per minute
            const words = text.trim().split(/\s+/).length;
            const time = Math.ceil(words / wpm);
            setReadTime(`${time} min read`);
        };

        fetchBlog();
    }, [slug]);

    if (loading) return <div className="bd-loading-screen"><div className="bd-spinner"></div></div>;
    if (error) return <div className="bd-error-message">{error}</div>;
    if (!blog) return <div className="bd-not-found">Article not available</div>;

    return (
        <main className="bd-container">
            <div className="bd-back-container">
                <button className="bd-back-button" onClick={() => navigate(-1)}>
                    <FiArrowLeft /> All Articles
                </button>
            </div>

            <article className="bd-article">
                <header className="bd-header">
                    {blog.category && <span className="bd-category">{blog.category}</span>}
                    <h1 className="bd-title">{blog.title}</h1>
                    <div className="bd-meta">
                        <span className="bd-meta-item">
                            <FiCalendar className="bd-meta-icon" />
                            {blog.date}
                        </span>
                        <span className="bd-meta-item">
                            <FiClock className="bd-meta-icon" />
                            {readTime}
                        </span>
                    </div>
                </header>

                <figure className="bd-featured-image">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="bd-image"
                        loading="lazy"
                    />
                    <figcaption className="bd-image-caption">Illustration for {blog.title}</figcaption>
                </figure>

                <div className="bd-content">
                    {blog.desc1 && <p className="bd-paragraph">{blog.desc1}</p>}
                    {blog.desc2 && <p className="bd-paragraph">{blog.desc2}</p>}

                    {blog.quote && (
                        <blockquote className="bd-quote">
                            <FaQuoteLeft className="bd-quote-icon" />
                            <p className="bd-quote-text">{blog.quote}</p>
                        </blockquote>
                    )}

                    {blog.desc3 && <p className="bd-paragraph">{blog.desc3}</p>}
                </div>

                <footer className="bd-footer">
                    <div className="bd-tags">
                        <span className="bd-tag">Homeopathy</span>
                        <span className="bd-tag">Wellness</span>
                        <span className="bd-tag">Treatment</span>
                    </div>
                </footer>
            </article>
        </main>
    );
};

export default BlogDetail;