import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>CarShowroom</h2>
        </div>
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            User View
          </Link>
          <Link 
            to="/admin" 
            className={location.pathname === '/admin' ? 'nav-link active' : 'nav-link'}
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
