import axios from "axios";

// Create API instance with base URL
export const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000, // 10 second timeout
});

// Request interceptor to add auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API functions
export const auth = {
  login: async (credentials) => {
    try {
      const response = await API.post('/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  register: async (userData) => {
    try {
      const response = await API.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};

// URL Management API functions
export const urlAPI = {
  shortenUrl: async (payload) => {
    try {
      const response = await API.post('/shortUrls', payload);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getUrls: async () => {
    try {
      const response = await API.get('/shortUrls');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  deleteUrl: async (id) => {
    try {
      const response = await API.delete(`/shortUrls/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getPreview: async (url) => {
    try {
      const response = await API.get('/urlPreview', {
        params: { url }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

// AI API functions
export const aiAPI = {
  suggest: async (url) => {
    try {
      const response = await API.post('/ai/suggest', { url });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  summarize: async (url) => {
    try {
      const response = await API.post('/ai/summarize', { url });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  optimize: async (content) => {
    try {
      const response = await API.post('/ai/optimize', { content });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

// Analytics API functions
export const analyticsAPI = {
  getStats: async () => {
    try {
      const response = await API.get('/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getClickHeatmap: async (shortId) => {
    try {
      const response = await API.get(`/analytics/heatmap/${shortId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getAnalytics: async (shortId) => {
    try {
      const response = await API.get(`/analytics/${shortId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

// Export default API instance for direct use
export default API;
