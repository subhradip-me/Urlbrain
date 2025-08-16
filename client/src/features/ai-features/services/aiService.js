import { API } from '../../../api/auth';

class AiService {
  // AI Suggest - Get tags and category suggestions for a URL
  async suggest(url) {
    try {
      const response = await API.post('/ai/suggest', { url });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to get AI suggestions');
    }
  }

  // AI Summarize - Generate summary for a URL
  async summarize(url) {
    try {
      const response = await API.post('/ai/summarize', { url });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to generate AI summary');
    }
  }

  // AI Optimize - Optimize URL description/title
  async optimize(content) {
    try {
      const response = await API.post('/ai/optimize', { content });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to optimize content');
    }
  }

  // Handle errors with user-friendly messages
  handleError(error, defaultMessage) {
    let errorMessage = defaultMessage;
    
    if (error.status === 401) {
      errorMessage = 'Authentication required. Please log in first.';
    } else if (error.status === 400) {
      errorMessage = 'Invalid URL provided for AI analysis.';
    } else if (error.status >= 500) {
      errorMessage = 'Server error. Please try again later.';
    } else if (error.data?.error) {
      errorMessage = error.data.error;
    } else if (error.message) {
      errorMessage = error.message;
    }
    
    throw new Error(errorMessage);
  }
}

export const aiService = new AiService();
