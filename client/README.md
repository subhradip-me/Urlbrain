# UrlBrain - URL Management Application

A comprehensive URL management application built with React + Vite that helps users organize, shorten, and analyze their URLs with advanced features like AI-powered suggestions, analytics, and bookmarking.

## 🚀 Features

- **URL Management**: Save, organize, and categorize URLs with titles, purposes, and tags
- **URL Shortening**: Create shortened versions of long URLs
- **Analytics Dashboard**: Track clicks, view heatmaps, and analyze URL performance
- **AI Integration**: Get AI-powered suggestions for URL organization
- **Search & Filter**: Advanced search functionality across saved URLs
- **Import/Export**: Bulk import and export URL collections
- **User Authentication**: Secure login and user management
- **Responsive Design**: Modern, clean interface with Tailwind CSS

## 🏗️ Architecture

This project follows a **feature-based architecture** for better maintainability and scalability:

```
src/
├── features/              # Feature-based modules
│   ├── auth/             # Authentication components
│   ├── url-management/   # URL CRUD operations
│   ├── analytics/        # Analytics and reporting
│   ├── settings/         # User settings
│   └── bookmarks/        # Bookmark management
├── components/           # Shared components
│   ├── layout/          # Layout components
│   └── navigation/      # Navigation components
├── api/                 # API configuration
├── pages/               # Route pages
└── utils/               # Utility functions
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Build Tool**: Vite with HMR

## 📦 Installation

1. **Clone the repository**
```bash
git clone [repository-url]
cd urlbrain/client
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start development server**
```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Components

### Dashboard
- **Main Interface**: Comprehensive dashboard with navigation sidebar
- **URL Table**: Sortable table with title, URL, purpose, and tags
- **Search**: Real-time search across all URL fields
- **Actions**: Edit, delete, preview, and copy URLs

### URL Management
- **Add URLs**: Modal form with validation
- **Bulk Operations**: Import/export functionality
- **Categories**: Tag-based organization system
- **Preview**: Website preview with metadata

### Analytics
- **Performance Tracking**: Click analytics and statistics
- **Visual Reports**: Charts and graphs for data visualization
- **Heatmaps**: Click heatmap visualization

## 🎨 Design System

- **Color Scheme**: Zinc-based palette with fuchsia accents
- **Typography**: Modern, clean fonts with proper hierarchy
- **Layout**: Responsive design with smooth transitions
- **Components**: Reusable, accessible UI components

## 🔐 Authentication

- JWT-based authentication
- Protected routes
- User profile management
- Secure API communication

## 📱 Browser Extension

Includes a browser extension for quick URL saving:
- Right-click context menu
- Popup interface
- Automatic metadata extraction

## 🚀 Production Deployment

1. **Build the application**
=======
# 🎨 LinkVault AI - Frontend Client

> **Modern React frontend for the LinkVault AI URL shortening platform**

A beautiful, responsive React application built with modern technologies, featuring AI-powered insights, glassmorphism design, and intuitive user experience.

## ✨ Features

### 🎯 **Core Components**
- **URL Shortener Interface**: Clean, intuitive URL shortening with real-time preview
- **AI-Powered Suggestions**: Smart tag suggestions and content summarization
- **Analytics Dashboard**: Interactive charts and data visualization
- **Bookmark Management**: Organize and manage saved URLs
- **User Authentication**: Secure login/register system

### 🎨 **UI/UX Features**
- **Glassmorphism Design**: Modern glass effect with backdrop blur
- **Drag & Drop**: Interactive draggable and resizable components
- **Responsive Layout**: Mobile-first design that works on all devices
- **Real-time Preview**: Instant URL metadata with images and descriptions
- **Copy to Clipboard**: One-click copying functionality
- **Smooth Animations**: Fluid transitions and hover effects

### 🚀 **Advanced Features**
- **Summary Popup**: Draggable, resizable AI summary window
- **Click Analytics**: Visual representation of URL performance
- **Export Functionality**: Download data in various formats
- **Heat Maps**: Interactive click visualization
- **Custom Slugs**: Personalized short URL creation

## 🛠️ Technology Stack

### **Core Framework**
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing and navigation

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite integration for Tailwind
- **React Icons** - Comprehensive icon library
- **Glassmorphism Effects** - Custom backdrop blur and transparency

### **Data & API**
- **Axios** - HTTP client for API communication
- **Recharts** - Interactive charts and data visualization
- **PapaParse** - CSV parsing and export functionality

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React support for Vite
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
client/
├── public/                 # Static assets
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/         # Reusable React components
│   │   ├── UrlShortner.jsx        # Main URL shortening interface
│   │   ├── SummaryPopup.jsx       # Draggable AI summary popup
│   │   ├── Analytics.jsx          # Analytics dashboard
│   │   ├── ClickHeatmap.jsx       # Heat map visualization
│   │   ├── Graph.jsx              # Chart components
│   │   ├── Header.jsx             # Navigation header
│   │   ├── ShortedUrls.jsx        # URL list display
│   │   └── dash components/       # Dashboard widgets
│   │       ├── ExportModel.jsx
│   │       ├── ImportModel.jsx
│   │       └── popUpInput.jsx
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx           # Landing page
│   │   ├── Dashboard.jsx          # Main dashboard
│   │   ├── Authentication.jsx     # Login/Register
│   │   └── Pricing.jsx           # Pricing page
│   ├── features/           # Feature-specific modules
│   │   ├── analytics/             # Analytics functionality
│   │   ├── auth/                  # Authentication features
│   │   ├── bookmarks/             # Bookmark management
│   │   │   ├── BookmarkForm.jsx
│   │   │   ├── BookmarkList.jsx
│   │   │   └── bookmarkSlice.js
│   │   ├── folders/               # Folder organization
│   │   ├── search/                # Search functionality
│   │   ├── settings/              # User settings
│   │   └── tags/                  # Tag management
│   ├── api/                # API configuration
│   │   └── auth.js                # Axios configuration & auth
│   ├── ai/                 # AI integration
│   │   └── ai.js                  # AI service functions
│   ├── assets/             # Static assets and images
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic services
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/subhradip-me/linkvault-ai.git
cd linkvault-ai/client

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Build
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for code linting
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the client directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=LinkVault AI
VITE_APP_VERSION=1.0.0
```

### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true
  }
})
```

## 🎨 Key Components

### UrlShortner (`components/UrlShortner.jsx`)
Main interface for URL shortening with features:
- Real-time URL preview with metadata
- AI-powered tag suggestions
- Content summarization
- Custom slug support
- Copy to clipboard functionality

### SummaryPopup (`components/SummaryPopup.jsx`)
Draggable and resizable popup for AI summaries:
- Glassmorphism design with backdrop blur
- Drag and resize functionality
- Edit and copy capabilities
- Auto-sizing based on content length

### Analytics (`components/Analytics.jsx`)
Comprehensive analytics dashboard:
- Interactive charts with Recharts
- Click tracking visualization
- Geographic data representation
- Export functionality

## 🎯 State Management

### Local State (useState)
- Component-level state for UI interactions
- Form data and input handling
- Loading states and error handling

### API State (Axios)
- Centralized API configuration in `api/auth.js`
- JWT token management
- Request/response interceptors
- Error handling and retry logic

## 🌐 API Integration

### Base Configuration (`api/auth.js`)
```javascript
import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Token interceptor
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### AI Services (`ai/ai.js`)
```javascript
export const aiSuggest = async (url) => {
  const { data } = await API.post("/ai/suggest", { url });
  return data;
};

export const aiSummarize = async (url) => {
  const { data } = await API.post("/ai/summarize", { url });
  return data;
};
```

## 🎨 Styling

### Tailwind CSS Classes
The project uses utility-first CSS with custom glassmorphism effects:

```css
/* Glassmorphism examples */
.glass-effect {
  @apply bg-white/90 backdrop-blur-md border border-white/30;
}

.glass-button {
  @apply bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all;
}
```

### Custom Components
- Consistent color scheme with zinc/gray palette
- Smooth transitions and hover effects
- Responsive breakpoints for mobile compatibility
- Custom shadows and border radius

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `<768px` - Stacked layout, touch-friendly buttons
- **Tablet**: `768px-1024px` - Adjusted spacing and grid
- **Desktop**: `>1024px` - Full feature layout

### Mobile Optimizations
- Touch-friendly button sizes
- Optimized popup positioning
- Swipe gestures support
- Reduced animation complexity

## 🚀 Build & Deployment

### Production Build
>>>>>>> 5c9b99c11acdb181bb1f938da662b02bbe620673
```bash
npm run build
```

2. **Deploy to your hosting platform**
- The `dist` folder contains the production build
- Configure your server to serve the React app
- Set up environment variables for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Open an issue on GitHub
- Check the documentation
- Contact the development team
=======
### Deployment Options

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify
```bash
# Build and deploy dist folder
npm run build
# Upload dist/ folder to Netlify
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

## 🧪 Testing

### Component Testing
```bash
# Add testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm run test
```

### E2E Testing
```bash
# Add Cypress for end-to-end testing
npm install -D cypress

# Run Cypress
npx cypress open
```

## 🔍 Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm run build -- --analyze
```

### Optimization Techniques
- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: WebP format and lazy loading
- **Caching**: Service worker for static assets
- **Minification**: CSS and JS compression

## 🤝 Contributing

### Development Workflow
1. Create feature branch: `git checkout -b feature/new-component`
2. Make changes with proper commit messages
3. Test locally: `npm run dev`
4. Lint code: `npm run lint`
5. Build for production: `npm run build`
6. Submit pull request

### Code Style
- Use functional components with hooks
- Follow React best practices
- Maintain consistent naming conventions
- Add PropTypes for type checking
- Document complex components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🔗 Related

- [Server Documentation](../server/README.md)
- [Main Project Documentation](../README.md)

---

⭐ **Built with React 19 and modern web technologies**
>>>>>>> 5c9b99c11acdb181bb1f938da662b02bbe620673
