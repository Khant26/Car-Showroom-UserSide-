import React from 'react';
import './CarCard.css';

const CarCard = ({ car, isAdmin = false, onEdit, onDelete }) => {
  const handleEdit = () => {
    if (onEdit) onEdit(car);
  };

  const handleDelete = () => {
    if (onDelete && window.confirm('Are you sure you want to delete this car?')) {
      onDelete(car._id);
    }
  };

  return (
    <div className="car-card">
      <div className="car-image">
        <img 
          src={car.image || '/placeholder-car.jpg'} 
          alt={car.name}
          onError={(e) => {
            e.target.src = '/placeholder-car.jpg';
          }}
        />
      </div>
      <div className="car-details">
        <h3 className="car-name">{car.name}</h3>
        <p className="car-brand">{car.brand}</p>
        <p className="car-year">{car.year}</p>
        <p className="car-price">${car.price?.toLocaleString()}</p>
        <p className="car-description">{car.description}</p>
        
        {isAdmin && (
          <div className="admin-actions">
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarCard;
