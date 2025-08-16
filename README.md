# 🔗 LinkVault AI

> **A powerful URL shortening and bookmark management platform with AI-powered insights**

LinkVault AI is a comprehensive web application that combines URL shortening, bookmark management, and AI-powered content analysis. Built with modern technologies, it offers intelligent features like automatic tag suggestions, content summarization, and detailed analytics.

## ✨ Features

### 🚀 **Core Functionality**
- **URL Shortening**: Create short, shareable links with custom slugs
- **Bookmark Management**: Save and organize URLs with folders and tags
- **User Authentication**: Secure login/register system with JWT tokens
- **Real-time Analytics**: Track clicks, user agents, locations, and more

### 🤖 **AI-Powered Features**
- **Smart Tag Suggestions**: AI automatically suggests relevant tags for URLs
- **Content Summarization**: Generate concise summaries of web page content
- **Category Classification**: Automatic categorization of URLs
- **Intelligent Content Analysis**: Powered by Google's Gemini AI

### 📊 **Analytics & Insights**
- **Click Tracking**: Monitor URL performance with detailed metrics
- **Heat Maps**: Visual representation of click patterns
- **Geographic Analytics**: Track clicks by location
- **Device & Browser Stats**: Analyze user demographics
- **Export Options**: Download analytics data in CSV format

### 🎨 **Modern UI/UX**
- **Glassmorphism Design**: Beautiful, modern interface with glass effects
- **Responsive Layout**: Works perfectly on desktop and mobile
- **Drag & Drop**: Interactive components with drag-and-drop functionality
- **Real-time Preview**: Instant URL metadata preview with images
- **Dark/Light Themes**: Customizable appearance
- **Modular Components**: Feature-based component architecture for better maintainability

## 🛠️ Technology Stack

### **Frontend**
- **React 19** - Modern React with latest features and modular architecture
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Beautiful icon library
- **Recharts** - Interactive charts and graphs

### **Backend**
- **Node.js** - JavaScript runtime with modular feature-based architecture
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### **AI Integration**
- **Google Gemini AI** - Advanced language model for content analysis
- **Cheerio** - Server-side HTML parsing for metadata extraction
- **Node Fetch** - HTTP requests for URL content retrieval

### **Development Tools & Architecture**
- **Feature-Based Modularization** - Organized by functionality rather than file type
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting and formatting
- **dotenv** - Environment variable management
- **Standardized Import Patterns** - Clean, maintainable import structure

## 📁 Project Structure

> **✨ Fully Modularized Architecture** - Organized by features for better maintainability and scalability

```
linkvault-ai/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── features/       # 🎯 Feature-based modular architecture
│   │   │   ├── auth/       # Authentication components & logic
│   │   │   ├── url-management/  # URL shortening & management
│   │   │   ├── analytics/  # Analytics dashboard & charts
│   │   │   ├── bookmarks/  # Bookmark management
│   │   │   ├── settings/   # User settings & preferences
│   │   │   └── ai-features/    # AI-powered features
│   │   ├── components/     # Shared components
│   │   │   ├── layout/     # Layout components (Dashboard, etc.)
│   │   │   ├── navigation/ # Header & navigation
│   │   │   ├── common/     # Reusable UI components
│   │   │   └── dash components/    # Dashboard-specific components
│   │   ├── pages/          # Main page components
│   │   ├── api/            # API client configuration
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Node.js backend API
│   ├── src/
│   │   ├── features/       # 🎯 Feature-based backend modules
│   │   │   ├── auth/       # Authentication routes & controllers
│   │   │   ├── url/        # URL management routes & controllers
│   │   │   ├── analytics/  # Analytics routes & controllers
│   │   │   └── ai/         # AI service routes & controllers
│   │   ├── models/         # MongoDB schemas (shared)
│   │   ├── middleware/     # Authentication & other middleware
│   │   ├── services/       # Business logic services
│   │   ├── dao/            # Data access objects
│   │   └── utils/          # Helper functions
│   ├── index.js           # Server entry point
│   └── package.json
├── extension/              # Browser extension (optional)
│   ├── popup/
│   ├── background/
│   ├── content/
│   └── utils/
└── COMPLETE_DOCUMENTATION.md  # 📚 Comprehensive architecture guide
```

### 🏗️ **Architecture Benefits**
- **Feature-Based Organization**: Each feature is self-contained with its own components, services, and logic
- **Scalable Structure**: Easy to add new features without cluttering existing code
- **Maintainable Codebase**: Clear separation of concerns and modular imports
- **Team Collaboration**: Multiple developers can work on different features simultaneously
- **Clean Imports**: Standardized import patterns across the entire application

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Google Gemini API Key**

### 1. Clone the Repository
```bash
git clone https://github.com/subhradip-me/linkvault-ai.git
cd linkvault-ai
```

### 2. Setup Backend
```bash
cd server
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration
```

**Environment Variables (.env):**
```env
MONGO_URI=mongodb://localhost:27017/linkvault
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key
APP_URL=http://localhost:3000
PORT=5000
```

### 3. Setup Frontend
```bash
cd ../client
npm install
```

### 4. Start Development Servers

**Backend (Terminal 1):**
```bash
cd server
npm start
# Server runs on http://localhost:5000
```

**Frontend (Terminal 2):**
```bash
cd client
npm run dev
# Client runs on http://localhost:5174
```

## 🎯 Quick Architecture Overview

### ✨ **Modular Features System**
```javascript
// Import entire features
import { UrlShortener } from './features/url-management';
import { Analytics } from './features/analytics';

// Each feature exports its main components
export { UrlShortener, ShortedUrls, SummaryPopup } from './components';
```

### 🏗️ **Backend Feature Routes**
```javascript
// Feature-based route organization
app.use('/api/auth', authRoutes);        // features/auth/routes/
app.use('/api/shortUrls', urlRoutes);    // features/url/routes/
app.use('/api/analytics', analyticsRoutes); // features/analytics/routes/
app.use('/api/ai', aiRoutes);            // features/ai/routes/
```

## 📖 API Documentation

### Authentication Endpoints
```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
GET  /api/auth/me          # Get current user
```

### URL Management
```
POST /api/shortUrls         # Create short URL
GET  /api/shortUrls         # Get user's URLs
GET  /api/urlPreview        # Get URL metadata
DELETE /api/shortUrls/:id   # Delete short URL
```

### AI Features
```
POST /api/ai/suggest        # Get AI tag suggestions
POST /api/ai/summarize      # Generate content summary
```

### Analytics
```
GET /api/analytics/:id      # Get URL analytics
GET /api/stats             # Get dashboard stats
GET /api/analytics/export   # Export analytics data
```

## 🎨 Key Components

### URL Shortener (`features/url-management/UrlShortener.jsx`)
- Main interface for creating short URLs with modular architecture
- Real-time URL preview with metadata extraction
- AI-powered tag suggestions and content summarization
- Custom slug support with validation
- Copy to clipboard functionality
- Integration with AI features module

### Summary Popup (`features/url-management/SummaryPopup.jsx`)
- Draggable and resizable popup window
- Glassmorphism design with backdrop blur effects
- Edit and copy functionality with real-time updates
- Auto-sizing based on content length
- Smooth animations and transitions

### Analytics Dashboard (`features/analytics/Analytics.jsx`)
- Interactive charts and graphs with Recharts
- Click tracking and user behavior analysis
- Geographic data visualization
- Export functionality for data analysis
- Modular analytics components

### Authentication System (`features/auth/Authentication.jsx`)
- Secure login/register interface
- JWT token management
- Protected route handling
- User session persistence

### Settings Panel (`features/settings/Settings.jsx`)
- User profile management
- Preferences and configuration options
- Account settings and security
- Theme customization

## 🏗️ Modular Architecture

### Import Patterns
```javascript
// Feature-level imports (recommended)
import { UrlShortener } from '../features/url-management';
import { Analytics } from '../features/analytics';
import { Authentication } from '../features/auth';

// Individual component imports
import { Settings } from '../features/settings';
import { Dashboard } from '../components/layout';
```

### Feature Structure
Each feature follows a consistent structure:
```
features/
└── feature-name/
    ├── index.js              # Export definitions
    ├── components/           # Feature-specific components
    ├── services/            # API services (if needed)
    └── hooks/               # Custom hooks (if needed)
```

## 🔧 Configuration

### Database Setup
The application uses MongoDB for data storage. Models include:
- **User**: User accounts and authentication
- **ShortUrl**: Shortened URLs with metadata
- **Click**: Click tracking and analytics
- **SaveUrl**: Bookmarked URLs with tags

### AI Configuration
Configure Google Gemini AI in your `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'dist' folder
```

### Backend Deployment (Railway/Heroku)
```bash
cd server
# Set environment variables in your hosting platform
# Deploy with your preferred service
```

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
APP_URL=https://your-domain.com
```

## 🧪 Testing

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm run test
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the **feature-based modular architecture**
- Use **standardized import patterns** as documented
- Keep components **feature-specific** - avoid cross-feature dependencies
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting
- **Add new features as self-contained modules** in the `features/` directory

## 📚 Documentation

- **[COMPLETE_DOCUMENTATION.md](./COMPLETE_DOCUMENTATION.md)** - Comprehensive architecture guide
- **[Feature Documentation](#)** - Individual feature guides
- **[API Documentation](#api-documentation)** - Complete API reference
- **[Development Guide](#development-guidelines)** - Best practices and patterns

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Subhradip** - [@subhradip-me](https://github.com/subhradip-me)

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent content analysis
- **MongoDB** for reliable data storage
- **React & Vite** for modern frontend development with excellent build performance
- **Tailwind CSS** for beautiful, utility-first styling
- **Open Source Community** for amazing libraries and tools
- **Feature-Based Architecture** inspired by modern software design patterns

## 📊 Project Stats

- **✅ Fully Modularized**: Feature-based architecture implemented
- **🚀 Build Performance**: Optimized Vite build configuration
- **📦 Clean Codebase**: Removed legacy files and improved structure  
- **🔧 Import System**: Standardized import patterns across all features
- **📚 Documented**: Comprehensive documentation and usage guides

## 📬 Support

For support, email: [your-email@example.com] or create an issue on GitHub.

---

⭐ **Star this repository if you find it helpful!**
