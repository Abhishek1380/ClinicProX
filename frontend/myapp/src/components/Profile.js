// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState({ id: '', role: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('userId');
        const role = localStorage.getItem('userRole');

        if (!token || !id) {
            navigate('/login'); // Redirect to login if not authenticated
        } else {
            setUser({ id, role });
        }
    }, [navigate]);

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>👤 User Profile</h2>
            <p><strong>User ID:</strong> {user.id}</p>
            <p><strong>Role:</strong> {user.role}</p>

            <button
                onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                }}
                style={{
                    marginTop: '1.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default Profile;
