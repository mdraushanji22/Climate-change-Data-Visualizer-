import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h1>Climate Change Data Visualizer</h1>
            <p className="header-subtitle">Visualizing Global Environmental Changes</p>
          </div>
          <nav className="nav">
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/temperature" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Temperature
            </NavLink>
            <NavLink 
              to="/emissions" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Emissions
            </NavLink>
            <NavLink 
              to="/sea-level" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Sea Level
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;