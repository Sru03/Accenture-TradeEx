import React from 'react';
import logo2 from '../assets/main_logo.png';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>

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
      <SearchBar/>

      {/* Additional content goes here */}
    </div>
  );
};

export default HomePage;
