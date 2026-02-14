import axios from 'axios';

// replace with your actual deployed backend URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://demo-server-production-a2b9.up.railway.app/', 
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
export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);

// Student
export const submitRequest = () => API.post('/student/request');
export const getRequestStatus = () => API.get('/student/request');

// Admin
export const getAllRequests = () => API.get('/admin/requests');
export const approveRequest = (id) => API.patch(`/admin/request/${id}/approve`);
export const rejectRequest = (id) => API.patch(`/admin/request/${id}/reject`);

export default API;