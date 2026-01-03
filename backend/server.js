const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import Routes
const contactRoutes = require('./routes/contact');
const analyticsRoutes = require('./routes/analytics');
const projectRoutes = require('./routes/project');

