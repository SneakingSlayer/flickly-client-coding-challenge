import axios from 'axios';

// Create axios instance for API
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

export default axiosInstance;
