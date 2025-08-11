import axios from 'axios';

// Base API configuration
const API_BASE_URL = 'http://localhost:5000'; // Updated to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Car API endpoints
export const carAPI = {
  // Get all cars
  getAllCars: () => api.get('/items/'),
  
  // Get car by ID
  getCarById: (id) => api.get(`/items/${id}`),
  
  // Create new car (admin)
  createCar: (carData) => api.post('/items/', carData),
  
  // Update car (admin)
  updateCar: (id, carData) => api.put(`/items/${id}`, carData),
  
  // Delete car (admin)
  deleteCar: (id) => api.delete(`/items/${id}`),
};

export default api;
