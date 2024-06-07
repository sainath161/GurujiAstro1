const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const taskQueue = require('./queues/taskQueue');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', authRoutes);

// Start Worker
require('./workers/taskWorker');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
