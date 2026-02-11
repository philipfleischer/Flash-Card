import axios from 'axios';
import { BASE_URL } from './apiPaths';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const apiError = error?.response?.data?.error;

    // 401 = token er utløpt/ugyldig => rydd opp og send til login
    if (status === 401) {
      // Unngå endeløs loop hvis du allerede er på /login:
      const onLoginPage = window.location.pathname.startsWith('/login');

      // Fjern token så neste request ikke sender garbage
      localStorage.removeItem('token');

      // (valgfritt) hvis du lagrer user/profil lokalt:
      // localStorage.removeItem('user');

      // Valgfritt: logg litt for debugging
      console.warn('Unauthorized (401):', apiError || 'Token invalid/expired');

      if (!onLoginPage) {
        window.location.href = '/login';
      }
    }

    if (status === 500) {
      console.error('Server error. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timeout. Please try again.');
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
