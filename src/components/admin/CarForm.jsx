import React, { useState, useEffect } from 'react';
import './CarForm.css';

const CarForm = ({ car, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    year: new Date().getFullYear(),
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (car) {
      setFormData({
        name: car.name || '',
        brand: car.brand || '',
        year: car.year || new Date().getFullYear(),
        price: car.price || '',
        description: car.description || '',
        image: car.image || ''
      });
    }
  }, [car]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.brand.trim() || !formData.price) {
      alert('Please fill in all required fields');
      return;
    }

    // Convert price to number
    const submitData = {
      ...formData,
      price: parseFloat(formData.price),
      year: parseInt(formData.year)
    };

    onSubmit(submitData);
  };

  return (
    <div className="car-form-overlay">
      <div className="car-form-container">
        <div className="car-form-header">
          <h2>{car ? 'Edit Car' : 'Add New Car'}</h2>
          <button className="close-btn" onClick={onCancel}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="car-form">
          <div className="form-group">
            <label htmlFor="name">Car Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Tesla Model S"
            />
          </div>

          <div className="form-group">
            <label htmlFor="brand">Brand *</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              placeholder="e.g., Tesla"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                min="1990"
                max={new Date().getFullYear() + 1}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="e.g., 45000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/car-image.jpg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the car's features and characteristics..."
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {car ? 'Update Car' : 'Add Car'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
