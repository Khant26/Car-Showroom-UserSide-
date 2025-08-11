import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarForm from '../components/admin/CarForm';
import { carAPI } from '../services/api';
import './AdminInterface.css';

const AdminInterface = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await carAPI.getAllCars();
      setCars(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch cars. Please make sure the backend server is running on http://localhost:5000');
      console.error('Error fetching cars:', err);
      // Set empty array when API fails
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCar = () => {
    setEditingCar(null);
    setShowForm(true);
  };

  const handleEditCar = (car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleDeleteCar = async (carId) => {
    try {
      await carAPI.deleteCar(carId);
      setCars(cars.filter(car => car._id !== carId));
      alert('Car deleted successfully!');
    } catch (err) {
      console.error('Error deleting car:', err);
      if (err.response) {
        alert(`Failed to delete car: ${err.response.data.message || err.response.statusText}`);
      } else if (err.request) {
        alert('Failed to delete car: Unable to connect to server. Please make sure the backend is running on http://localhost:5000');
      } else {
        alert('Failed to delete car: An unexpected error occurred');
      }
    }
  };

  const handleFormSubmit = async (carData) => {
    try {
      if (editingCar) {
        // Update existing car
        const response = await carAPI.updateCar(editingCar._id, carData);
        setCars(cars.map(car => 
          car._id === editingCar._id ? response.data : car
        ));
        alert('Car updated successfully!');
      } else {
        // Add new car
        const response = await carAPI.createCar(carData);
        setCars([...cars, response.data]);
        alert('Car added successfully!');
      }
      setShowForm(false);
      setEditingCar(null);
    } catch (err) {
      console.error('Error saving car:', err);
      if (err.response) {
        alert(`Failed to save car: ${err.response.data.message || err.response.statusText}`);
      } else if (err.request) {
        alert('Failed to save car: Unable to connect to server. Please make sure the backend is running on http://localhost:5000');
      } else {
        alert('Failed to save car: An unexpected error occurred');
      }
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCar(null);
  };

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="admin-interface">
        <div className="loading">Loading cars...</div>
      </div>
    );
  }

  return (
    <div className="admin-interface">
      <header className="admin-header">
        <h1>Car Management Admin</h1>
        <button className="add-car-btn" onClick={handleAddCar}>
          Add New Car
        </button>
      </header>

      <div className="admin-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="stats">
          <span>Total Cars: {cars.length}</span>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
          <br />
          <small>Make sure your backend server is running on http://localhost:5000</small>
        </div>
      )}

      {showForm && (
        <CarForm
          car={editingCar}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}

      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard
              key={car._id}
              car={car}
              isAdmin={true}
              onEdit={handleEditCar}
              onDelete={handleDeleteCar}
            />
          ))
        ) : (
          <div className="no-cars">
            No cars found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInterface;
