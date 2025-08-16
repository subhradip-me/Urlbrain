import apiClient from '../../services/api/client';
import { API_ENDPOINTS } from '../../../../shared/constants';

class UrlService {
  // Create shortened URL
  async createShortUrl(originalUrl, customAlias = null) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.URLS.CREATE, {
        originalUrl,
        customAlias
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to create short URL');
    }
  }

  // Get all URLs for user
  async getUserUrls(page = 1, limit = 10) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.URLS.LIST, {
        params: { page, limit }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch URLs');
    }
  }

  // Delete URL
  async deleteUrl(urlId) {
    try {
      const response = await apiClient.delete(`${API_ENDPOINTS.URLS.DELETE}/${urlId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to delete URL');
    }
  }

  // Get URL statistics
  async getUrlStats(urlId) {
    try {
      const response = await apiClient.get(`${API_ENDPOINTS.URLS.STATS}/${urlId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch URL stats');
    }
  }

  // Preview URL content
  async previewUrl(url) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.URLS.PREVIEW, { url });
      return response.data;
    } catch (error) {
      throw new Error(error.message || 'Failed to preview URL');
    }
  }

  // Validate URL format
  validateUrl(url) {
    const urlPattern = /^https?:\/\/.+/;
    return urlPattern.test(url);
  }

  // Generate QR code for URL
  generateQRCode(shortUrl) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`;
  }
}

export const urlService = new UrlService();
