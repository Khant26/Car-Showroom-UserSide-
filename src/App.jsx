import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import UserInterface from './pages/UserInterface';
import AdminInterface from './pages/AdminInterface';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<UserInterface />} />
          <Route path="/admin" element={<AdminInterface />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
