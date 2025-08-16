# 🚀 LinkVault AI - Backend Server

> **Powerful Node.js backend API for the LinkVault AI URL shortening platform**

A robust Express.js server providing REST API endpoints, AI integration, analytics tracking, and comprehensive URL management with MongoDB storage.

## ✨ Features

### 🎯 **Core API Services**
- **URL Shortening**: Generate short URLs with custom slugs
- **User Authentication**: JWT-based secure authentication system
- **URL Analytics**: Comprehensive click tracking and user behavior analysis
- **Bookmark Management**: Save, organize, and manage URLs
- **URL Preview**: Extract metadata from web pages

### 🤖 **AI Integration**
- **Google Gemini AI**: Advanced content analysis and summarization
- **Smart Tag Suggestions**: Automatic categorization and tagging
- **Content Summarization**: Intelligent content extraction
- **Category Classification**: Automated URL categorization

### 📊 **Analytics & Tracking**
- **Click Analytics**: Detailed click tracking with timestamps
- **Geographic Data**: Location-based analytics using GeoIP
- **Device Detection**: User agent analysis and device tracking
- **Heat Map Data**: Click pattern visualization
- **Export Functionality**: CSV data export capabilities

### 🔒 **Security & Performance**
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for user passwords
- **CORS Configuration**: Cross-origin resource sharing setup
- **Rate Limiting**: API rate limiting and abuse prevention
- **Data Validation**: Input validation and sanitization

## 🛠️ Technology Stack

### **Core Framework**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling

### **Authentication & Security**
- **JWT (jsonwebtoken)** - JSON Web Token implementation
- **bcrypt** - Password hashing library
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

### **AI & Data Processing**
- **Google Generative AI** - Gemini AI model integration
- **Cheerio** - Server-side HTML parsing and manipulation
- **Node Fetch** - HTTP request library for external APIs
- **GeoIP Lite** - Geographic IP location detection

### **Development Tools**
- **Nodemon** - Auto-restart development server
- **Nanoid** - Unique ID generation for short URLs
- **UserAgent** - User agent string parsing
- **JSDOM** - DOM manipulation in Node.js environment

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/        # Route handlers and business logic
│   │   ├── ai.controller.js           # AI features (suggest, summarize)
│   │   ├── analytics.controller.js    # Analytics data processing
│   │   ├── auth.controller.js         # Authentication logic
│   │   ├── clickHeatmap.controller.js # Heat map data generation
│   │   ├── previewUrl.controller.js   # URL metadata extraction
│   │   ├── saveUrl.controller.js      # Bookmark management
│   │   ├── shortUrl.controller.js     # URL shortening logic
│   │   └── stats.controller.js        # Statistics aggregation
│   ├── models/             # MongoDB schemas
│   │   ├── click.model.js             # Click tracking schema
│   │   ├── saveUrl.model.js           # Saved URLs schema
│   │   ├── shortUrl.model.js          # Short URLs schema
│   │   └── user.model.js              # User account schema
│   ├── routes/             # API route definitions
│   │   ├── ai.routes.js               # AI endpoint routes
│   │   ├── analytics.routes.js        # Analytics routes
│   │   ├── auth.routes.js             # Authentication routes
│   │   ├── clickHeatmap.routes.js     # Heat map routes
│   │   ├── previewUrl.routes.js       # URL preview routes
│   │   ├── saveUrl.routes.js          # Bookmark routes
│   │   ├── shortUrl.routes.js         # URL shortening routes
│   │   ├── stats.routes.js            # Statistics routes
│   │   └── user.routes.js             # User management routes
│   ├── middleware/         # Custom middleware functions
│   │   ├── auth.middleware.js         # Authentication middleware
│   │   └── verifyToken.js             # JWT token verification
│   ├── services/           # Business logic services
│   │   └── shortUrl.service.js        # URL shortening service
│   ├── dao/                # Data access objects
│   │   └── shortUrl.js                # Database operations
│   └── utils/              # Utility functions
│       └── helper.js                  # Helper functions
├── index.js                # Server entry point and configuration
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables (not in repo)
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local installation or cloud service)
- **Google Gemini API Key**

### Installation

```bash
# Clone the repository
git clone https://github.com/subhradip-me/linkvault-ai.git
cd linkvault-ai/server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration
```

### Environment Configuration

Create a `.env` file with the following variables:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/linkvault-ai

# JWT Secret (use a strong, random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Google AI Configuration
GEMINI_API_KEY=your_google_gemini_api_key

# Application Configuration
APP_URL=http://localhost:3000
PORT=5000
NODE_ENV=development

# Optional: Database Authentication (if using MongoDB Atlas)
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
```

### Start the Server

```bash
# Development mode (with auto-restart)
npm start

# Or using nodemon directly
npm run dev

# Production mode
NODE_ENV=production node index.js
```

The server will be available at `http://localhost:5000`

## 📜 Available Scripts

```bash
# Development
npm start           # Start with nodemon (auto-restart)
npm run dev         # Same as npm start

# Testing
npm test            # Run test suite (to be implemented)

# Production
node index.js       # Start production server
```

## 🌐 API Endpoints

### Authentication Endpoints
```
POST   /api/auth/register     # User registration
POST   /api/auth/login        # User login
GET    /api/auth/me          # Get current user profile
PUT    /api/auth/profile     # Update user profile
```

### URL Management
```
POST   /api/shortUrls        # Create short URL
GET    /api/shortUrls        # Get user's short URLs
GET    /api/shortUrls/:id    # Get specific short URL
PUT    /api/shortUrls/:id    # Update short URL
DELETE /api/shortUrls/:id    # Delete short URL
GET    /:shortCode           # Redirect to original URL
```

### URL Preview & Metadata
```
GET    /api/urlPreview       # Get URL metadata and preview
```

### AI Features
```
POST   /api/ai/suggest       # Get AI tag suggestions
POST   /api/ai/summarize     # Generate content summary
```

### Analytics & Statistics
```
GET    /api/analytics/:id    # Get URL analytics
GET    /api/stats           # Get dashboard statistics
GET    /api/analytics/export # Export analytics data
```

### Click Tracking & Heat Maps
```
POST   /api/analytics/click  # Record click event
GET    /api/analytics/heatmap/:id  # Get click heat map data
```

### Bookmark Management
```
POST   /api/bookmarks       # Save URL as bookmark
GET    /api/bookmarks       # Get user's bookmarks
PUT    /api/bookmarks/:id   # Update bookmark
DELETE /api/bookmarks/:id   # Delete bookmark
```

## 🗄️ Database Models

### User Model (`models/user.model.js`)
```javascript
{
  username: String,
  email: String (unique),
  password: String (hashed),
  firstName: String,
  lastName: String,
  avatar: String,
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### ShortUrl Model (`models/shortUrl.model.js`)
```javascript
{
  original_url: String,
  short_url: String (unique),
  custom_slug: String,
  clicks: Number,
  isActive: Boolean,
  expiresAt: Date,
  metadata: {
    title: String,
    description: String,
    image: String
  },
  tags: [String],
  category: String,
  userId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### Click Model (`models/click.model.js`)
```javascript
{
  urlId: ObjectId,
  ip: String,
  userAgent: String,
  referer: String,
  country: String,
  city: String,
  device: String,
  browser: String,
  timestamp: Date
}
```

### SaveUrl Model (`models/saveUrl.model.js`)
```javascript
{
  url: String,
  title: String,
  description: String,
  tags: [String],
  folder: String,
  notes: String,
  userId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## 🤖 AI Integration

### Google Gemini AI Configuration
The server integrates with Google's Gemini AI for intelligent content analysis:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
```

### AI Features Implementation

#### Tag Suggestions (`controllers/ai.controller.js`)
```javascript
export const suggestTagsAndCategory = async (req, res) => {
  const { url } = req.body;
  const prompt = `Analyze this URL and suggest relevant tags and category: ${url}`;
  
  const result = await model.generateContent(prompt);
  const suggestions = parseAIResponse(result.response.text());
  
  res.json(suggestions);
};
```

#### Content Summarization
```javascript
export const summarizeUrl = async (req, res) => {
  const { url } = req.body;
  const prompt = `Summarize the main content of this URL: ${url}`;
  
  const result = await model.generateContent(prompt);
  const summary = result.response.text();
  
  res.json({ summary });
};
```

## 🔒 Security & Middleware

### JWT Authentication (`middleware/verifyToken.js`)
```javascript
export default (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

### CORS Configuration
```javascript
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
```

## 📊 Analytics Implementation

### Click Tracking
```javascript
export const trackClick = async (req, res) => {
  const { urlId } = req.params;
  const ip = req.ip;
  const userAgent = req.get('User-Agent');
  
  // Get geographic data
  const geo = geoip.lookup(ip);
  
  // Save click data
  await Click.create({
    urlId,
    ip,
    userAgent,
    country: geo?.country,
    city: geo?.city,
    timestamp: new Date()
  });
  
  // Increment click count
  await ShortUrl.findByIdAndUpdate(urlId, { $inc: { clicks: 1 } });
};
```

### Heat Map Generation
```javascript
export const getHeatMapData = async (req, res) => {
  const { urlId } = req.params;
  
  const clicks = await Click.find({ urlId })
    .select('timestamp country city')
    .sort({ timestamp: -1 });
  
  const heatMapData = processClicksForHeatMap(clicks);
  res.json(heatMapData);
};
```

## 🚀 Deployment

### Environment Setup for Production
```env
NODE_ENV=production
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/linkvault-ai
JWT_SECRET=production_jwt_secret_very_secure
GEMINI_API_KEY=production_gemini_api_key
APP_URL=https://your-domain.com
PORT=5000
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
```

### Railway/Heroku Deployment
```bash
# Set environment variables in your hosting platform
# Deploy with Git integration or CLI

# For Railway
railway up

# For Heroku
heroku create your-app-name
git push heroku main
```

## 🧪 Testing

### Unit Tests (Jest)
```bash
# Install testing dependencies
npm install -D jest supertest

# Run tests
npm test
```

### API Testing (Postman/Insomnia)
Import the API collection for comprehensive endpoint testing:
- Authentication flows
- URL shortening operations
- AI feature testing
- Analytics data retrieval

## 🔍 Performance Optimization

### Database Indexing
```javascript
// Add indexes for better query performance
shortUrlSchema.index({ short_url: 1 });
shortUrlSchema.index({ userId: 1 });
clickSchema.index({ urlId: 1, timestamp: -1 });
```

### Caching Strategy
```javascript
// Implement Redis caching for frequently accessed data
const redis = require('redis');
const client = redis.createClient();

// Cache short URL lookups
app.get('/:shortCode', async (req, res) => {
  const cached = await client.get(req.params.shortCode);
  if (cached) {
    return res.redirect(cached);
  }
  
  // Database lookup and cache
  const url = await ShortUrl.findOne({ short_url: req.params.shortCode });
  await client.setex(req.params.shortCode, 3600, url.original_url);
  res.redirect(url.original_url);
});
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-endpoint`
3. Make changes following coding standards
4. Add tests for new functionality
5. Ensure all tests pass: `npm test`
6. Submit pull request

### Coding Standards
- Use ES6+ features and modules
- Follow RESTful API conventions
- Implement proper error handling
- Add comprehensive logging
- Document new endpoints

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](../LICENSE) file for details.

## 🔗 Related

- [Client Documentation](../client/README.md)
- [Main Project Documentation](../README.md)

---

⭐ **Built with Node.js, Express, and modern backend technologies**
