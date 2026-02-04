const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import Routes
const contactRoutes = require('./routes/contact');
const analyticsRoutes = require('./routes/analytics');
const projectRoutes = require('./routes/project');

//Load Environment variables
dotenv.config();

//Initialize Express
const app = express();

//middleware
app.use(cors({
    origin : process.env.CLIENT_URL || 'http://localhost:3000',
    credentials : true
}));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//Routes
app.get('/api/health', (req,res) => {
    res.json({
        success:true,
        message : 'Server is running',
        timestamp : new Date().toISOString()
    });
});

app.use('/api/contact', contactRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/projects', projectRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API available at http://localhost:${PORT}/api`);
  });
};

startServer();

module.exports = app;