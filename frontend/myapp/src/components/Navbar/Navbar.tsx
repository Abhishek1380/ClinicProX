import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('/');
    const [scrolled, setScrolled] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = (): void => {
        setIsMenuActive(!isMenuActive);
    };

    const handleLinkClick = (link: string): void => {
        setActiveLink(link);
        setIsMenuActive(false);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLoggedIn = !!localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
        handleLinkClick('/login');
    };

    return (
        <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://i.ibb.co/kDFGgD7/San.png" alt="Clinic Logo" />
                </div>

                <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/')}
                        >
                            <i className="ri-home-4-line"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/treatment"
                            className={`nav-link ${activeLink === '/treatment' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/treatment')}
                        >
                            <i className="ri-heart-pulse-line"></i> Treatments
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className={`nav-link ${activeLink === '/blog' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/blog')}
                        >
                            <i className="ri-article-line"></i> Health Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/aboutme"
                            className={`nav-link ${activeLink === '/aboutme' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/aboutme')}
                        >
                            <i className="ri-information-line"></i> About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={`nav-link ${activeLink === '/gallery' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/gallery')}
                        >
                            <i className="ri-gallery-line"></i> Gallery
                        </Link>
                    </li>


                    {!isLoggedIn ? (
                        <>
                            <li>
                                <Link
                                    to="/login"
                                    className={`nav-link ${activeLink === '/login' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/login')}
                                >
                                    <i className="ri-login-circle-line"></i> Login
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="/signup"
                                    className={`nav-link ${activeLink === '/signup' ? 'active' : ''}`}
                                    onClick={() => handleLinkClick('/signup')}
                                >
                                    <i className="ri-user-add-line"></i> Signup
                                </Link>
                            </li> */}
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to={userRole === 'admin' ? '/admin-dashboard' : '/profile'}
                                    className={`nav-link ${activeLink === '/admin-dashboard' || activeLink === '/profile'
                                        ? 'active'
                                        : ''
                                        }`}
                                    onClick={() =>
                                        handleLinkClick(userRole === 'admin' ? '/admin-dashboard' : '/profile')
                                    }
                                >
                                    <i className="ri-user-line"></i>{' '}
                                    {userRole === 'admin' ? 'Admin' : 'Profile'}
                                </Link>
                            </li>
                            <li>
                                <span
                                    className="nav-link"
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleLogout}
                                >
                                    <i className="ri-logout-box-line"></i> Logout
                                </span>
                            </li>
                        </>
                    )}
                </ul>

                <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
