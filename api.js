import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Live monitoring data
export const getLiveData = () => api.get('/api/live');

// Prediction endpoint
export const predictFailure = (data) => api.post('/predict', data);

// Historical data
export const getHistory = () => api.get('/api/history');

// Alerts
export const getAlerts = () => api.get('/api/alerts');

// System info
export const getSystemInfo = () => api.get('/api/system-info');

export default api;