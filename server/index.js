import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './src/routes/auth.routes.js';
import urlRoutes from './src/routes/saveUrl.routes.js';
import userRoutes from './src/routes/user.routes.js';
import shortUrlRoutes from './src/routes/shortUrl.routes.js';
import previewUrlRoutes from './src/routes/previewUrl.routes.js';
import analyticsRoutes from './src/routes/analytics.routes.js';
import clickHeatmapRoutes from './src/routes/clickHeatmap.routes.js';
import statsRoutes from './src/routes/stats.routes.js';

import aiRoutes from './src/routes/ai.routes.js';

import { redirectFromShortUrl } from './src/controllers/shortUrl.controller.js';

dotenv.config();
const app = express();

// Enable CORS for development
app.use(cors({
  origin: 'http://localhost:5173', // Change to your frontend URL
  credentials: true // Allow credentials if needed
}));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use('/api/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/api', userRoutes);
app.use('/api/shortUrls', shortUrlRoutes);
app.use('/api/urlPreview', previewUrlRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/analytics', clickHeatmapRoutes); // Add this line
app.use('/api/stats', statsRoutes);

app.use('/api/ai', aiRoutes);


// Place catch-all short URL redirect AFTER all /api routes
app.get("/:id", redirectFromShortUrl);

// Optional: 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.error(err));

