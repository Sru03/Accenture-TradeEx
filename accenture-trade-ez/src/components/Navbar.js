import React from "react";
import logo1 from "../assets/TradeEz-logonav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <li className="navbar-item navbar-link">
              <Link to="/marketplace" className="navbar-link">
                Marketplace
              </Link>
            </li>
            <li className="navbar-item navbar-link">
              <Link to="/find-tradie" className="navbar-link">
                Find me a Tradie
              </Link>
            </li>
            <li className="navbar-item navbar-link">
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
