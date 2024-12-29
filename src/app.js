const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('../src/routes/postroutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Export app
module.exports = app;
