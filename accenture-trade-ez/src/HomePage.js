import React from 'react';
import logo1 from './trade_ez_logonav.png';
import logo2 from './main_logo.png';

const HomePage = () => {
  return (
    <div>
      {/* Logo and Navbar */}
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo1} alt="TradeEz Logo" className="logo" />
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#" className="navbar-link">Marketplace</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Find me a Tradie</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link">Register</a></li>
          </ul>
        </nav>
      </div>

      {/* Business Logo */}
      <div className="business-logo-container">
        <img src={logo2} alt="Business Logo" className="business-logo" />
      </div>

      {/* Slogan */}
      <div className="slogan">
        <h2>
          Your 
          <span className="yellow-text"> One-Stop </span> 
          Platform for 
          <span className="yellow-text"> Skilled Tradies</span>
          !
        </h2>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input type="search" placeholder="                    What job do you need done today?" />
        <button>Search</button>
      </div>

      {/* Additional content goes here */}
    </div>
  );
};

export default HomePage;
