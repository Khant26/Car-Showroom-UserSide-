import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import { carAPI } from '../services/api';
import './UserInterface.css';

const UserInterface = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

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
      setError('Failed to fetch cars. Please try again later.');
      console.error('Error fetching cars:', err);
      // For development, set some mock data
      setCars([
        {
          _id: '1',
          name: 'Tesla Model S',
          brand: 'Tesla',
          year: 2023,
          price: 89990,
          description: 'Electric luxury sedan with autopilot features',
          image: 'https://via.placeholder.com/400x200?text=Tesla+Model+S'
        },
        {
          _id: '2',
          name: 'BMW 330i',
          brand: 'BMW',
          year: 2023,
          price: 41250,
          description: 'Premium compact executive car',
          image: 'https://via.placeholder.com/400x200?text=BMW+330i'
        },
        {
          _id: '3',
          name: 'Audi A4',
          brand: 'Audi',
          year: 2023,
          price: 39100,
          description: 'Sophisticated sedan with advanced technology',
          image: 'https://via.placeholder.com/400x200?text=Audi+A4'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = !brandFilter || car.brand === brandFilter;
    return matchesSearch && matchesBrand;
  });

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  if (loading) {
    return (
      <div className="user-interface">
        <div className="loading">Loading cars...</div>
      </div>
    );
  }

  return (
    <div className="user-interface">
      <header className="user-header">
        <h1>Car Showroom</h1>
        <p>Discover your perfect car</p>
      </header>

      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="brand-filter">
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="">All Brands</option>
            {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="cars-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard key={car._id} car={car} />
          ))
        ) : (
          <div className="no-cars">
            No cars found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInterface;
