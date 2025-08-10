import axios from 'axios';

// Base API configuration
const API_BASE_URL = 'http://localhost:3001/api'; // Adjust this to your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Car API endpoints
export const carAPI = {
  // Get all cars
  getAllCars: () => api.get('/cars'),
  
  // Get car by ID
  getCarById: (id) => api.get(`/cars/${id}`),
  
  // Create new car (admin)
  createCar: (carData) => api.post('/cars', carData),
  
  // Update car (admin)
  updateCar: (id, carData) => api.put(`/cars/${id}`, carData),
  
  // Delete car (admin)
  deleteCar: (id) => api.delete(`/cars/${id}`),
};

export default api;
