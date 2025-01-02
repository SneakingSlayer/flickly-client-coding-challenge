import axios from 'axios';

// Create axios instance for API
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 120000, // 120 seconds
});

export default axiosInstance;
