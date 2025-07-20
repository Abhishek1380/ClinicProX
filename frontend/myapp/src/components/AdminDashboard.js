import React from 'react';

const AdminDashboard = () => {
    const name = localStorage.getItem('userName') || 'Admin';
    const email = localStorage.getItem('userEmail');

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Admin Dashboard</h1>
            <p>Welcome, <strong>{name}</strong>!</p>
            {email && <p>Email: {email}</p>}

            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ddd',
                borderRadius: '8px'
            }}>
                <h3>🛠️ Admin Controls</h3>
                <ul style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
                    <li>View all users (coming soon)</li>
                    <li>Manage appointments (coming soon)</li>
                    <li>Update clinic details (coming soon)</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;
