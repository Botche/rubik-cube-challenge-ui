import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const timestamp = new Date().getTime();
  config.params = {
    ...config.params,
    _t: timestamp,
  };
  config.timeout = 5000;
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    try {
      if (!response || !response.data) {
        console.error('Empty response received');
        return {
          ...response,
          data: Array.isArray(response.config?.data) ? [] : {},
        };
      }
      return response;
    } catch (error) {
        console.error('Response processing error:', error);
      throw new Error('Invalid response data');
    }
  },
  (error) => {
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      url: error.config?.url,
    });

    if (!error.response) {
      return Promise.reject(new Error('Network error'));
    }

    if (error.response.status === 404) {
      return Promise.reject(new Error('Resource not found'));
    }

    return Promise.reject(error);
  }
);

export default apiClient;