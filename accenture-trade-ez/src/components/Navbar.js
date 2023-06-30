import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../assets/trade_ez_logonav.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {/* Logo and Navbar */}
      <div className="header-container">
        {/* Logo */}
        <Link to="/">
          <div className="logo-container">
            <img src={logo1} alt="TradeEz Logo" className="logo" />
          </div>
        </Link>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className={`navbar-item ${location.pathname === '/marketplace' ? 'active' : ''}`}>
              <Link to="/marketplace" className="navbar-link">Marketplace</Link>
            </li>
            <li className={`navbar-item ${location.pathname === '/find-tradie' ? 'active' : ''}`}>
              <Link to="/find-tradie" className="navbar-link">Find me a Tradie</Link>
            </li>
            <li className={`navbar-item ${location.pathname === '/register' ? 'active' : ''}`}>
              <Link to="/register" className="navbar-link">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
