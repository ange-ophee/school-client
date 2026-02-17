import axios from 'axios';

// Change this to your deployed backend URL or localhost for testing
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://demo-server-production-395f.up.railway.app/',
});

// Automatically attach token to every request
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common['Authorization'];
  }
};

// Auth
export const registerUser = async (data) => API.post('/auth/register', data);
export const loginUser = async (data) => API.post('/auth/login', data);

// Student
export const submitRequest = async () => API.post('/student/request');
export const getRequestStatus = async () => API.get('/student/request');

// Admin
export const getAllRequests = async () => API.get('/admin/requests');
export const approveRequest = async (id) => API.patch(`/admin/request/${id}/approve`);
export const rejectRequest = async (id) => API.patch(`/admin/request/${id}/reject`);

export default API;