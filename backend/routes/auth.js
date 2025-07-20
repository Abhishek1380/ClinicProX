const dotenv = require('dotenv');
dotenv.config(); // ✅ Load .env before anything else

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create and save new user
        const newUser = new User({ name, email, password, role });
        await newUser.save();

        // Generate JWT
        const token = jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET, {
            expiresIn: '1d',
        });

        res.status(201).json({ token, message: 'Signup successful' });
    } catch (err) {
        console.error('Signup error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
});


// LOGIN ROUTE
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user exists
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ error: 'Invalid email or password' });

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(400).json({ error: 'Invalid email or password' });

        // Generate token
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token, message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;
