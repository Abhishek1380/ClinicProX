// app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;



const { connectDB, getData } = require('./controllers/dbController');

const mongoose = require('mongoose');
const { verifyToken, getUser, isAdmin } = require('./middlewares/authMiddleware');

const authRoutes = require('./routes/auth');
const treatmentSchema = new mongoose.Schema({}, { collection: 'treatments' });
const blogSchema = new mongoose.Schema({}, { collection: 'blog' });
const sampleSchema = new mongoose.Schema({}, { collection: 'sample' });

const reviewSchema = new mongoose.Schema({}, { collection: 'reviews' });
const faqSchema = new mongoose.Schema({}, { collection: 'FAQ1' });

const serviceSchema = new mongoose.Schema({}, { collection: 'service_detail' });

const Treatment = mongoose.model('Treatment', treatmentSchema);
const Blog = mongoose.model('Blog', blogSchema);
const Sample = mongoose.model('Sample', sampleSchema);


const Review = mongoose.model('Review', reviewSchema);
const FAQ = mongoose.model('FAQ', faqSchema);
const Service = mongoose.model('Service', serviceSchema);

dotenv.config();

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`JWT_SECRET: ${JWT_SECRET}`);

});


app.use('/auth', authRoutes);

app.get('/treatments', async (req, res) => {
    const data = await getData(Treatment);
    res.send(data);
});


app.get('/profile', verifyToken, getUser, (req, res) => {
    res.json({ message: 'Welcome to your profile', user: req.user });
});

app.get('/admin-panel', verifyToken, isAdmin, (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});




app.get('/treatments/:id', async (req, res) => {
    const data = await getData(Treatment, { t_id: Number(req.params.id) });
    res.send(data);
});

app.get('/blogs', async (req, res) => {
    const data = await getData(Blog);
    res.send(data);
});



app.get('/blog/:slug', async (req, res) => {
    try {
        const data = await getData(Blog, { slug: req.params.slug });
        if (data.length > 0) res.json(data[0]);
        else res.status(404).json({ message: "Blog not found" });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/blog', async (req, res) => {
    const data = await getData(Sample);
    res.send(data);
});


app.get('/blogs/:id', async (req, res) => {
    const data = await getData(Sample, { treatment_box: Number(req.params.id) });
    res.send(data);
});

app.get('/reviews', async (req, res) => {
    const data = await getData(Review);
    res.send(data);
});


app.get('/FAQ1', async (req, res) => {
    const data = await getData(FAQ);
    res.send(data);
});

app.get('/service/:slug', async (req, res) => {
    try {
        const data = await getData(Service, { slug: req.params.slug.toLowerCase() });
        if (data.length > 0) res.json(data[0]);
        else res.status(404).json({ message: "Service not found" });
    } catch (err) {
        console.error("Error fetching service:", err);
        res.status(500).json({ message: "Server error" });
    }
});



app.listen(port, async () => {
    await connectDB();
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
