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
