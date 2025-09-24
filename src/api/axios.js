import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-backend-5nof.onrender.com/', // Your Django API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a request interceptor to attach the auth token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
