import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', // Backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;