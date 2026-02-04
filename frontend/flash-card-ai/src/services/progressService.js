import { API_PATHS } from '../utils/apiPaths';
import axiosInstance from '../utils/axiosInstance.js';

const getDashboardData = async () => {
  try {
    console.log('Calling:', API_PATHS.PROGRESS.GET_DASHBOARD);
    const response = await axiosInstance.get(API_PATHS.PROGRESS.GET_DASHBOARD);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch dashboard data' };
  }
};

const progressService = {
  getDashboardData,
};

export default progressService;
