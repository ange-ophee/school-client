import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// ✅ Interceptor: automatically attach token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Auth
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);

// Student
export const submitRequest = () => API.post('/student/request');
export const getRequestStatus = () => API.get('/student/request');

// Admin
export const getAllRequests = () => API.get('/admin/requests');
export const approveRequest = (id) => API.patch(`/admin/request/${id}/approve`);
export const rejectRequest = (id) => API.patch(`/admin/request/${id}/reject`);

export default API;
