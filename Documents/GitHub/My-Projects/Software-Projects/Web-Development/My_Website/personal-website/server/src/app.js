const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

module.exports = app;