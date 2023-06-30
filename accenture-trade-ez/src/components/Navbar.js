import React from "react";
import logo1 from "../assets/TradeEz-logonav.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Logo and Navbar */}
      <div className="header-container">
        {/* Logo */}
        <NavLink to="/">
          <div className="logo-container">
            <img src={logo1} alt="TradeEz Logo" className="logo" />
          </div>
        </NavLink>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                to="/marketplace"
                className="navbar-link"
                activeClassName="active"
              >
                Marketplace
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/find-tradie"
                className="navbar-link"
                activeClassName="active"
              >
                Find me a Tradie
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/register"
                className="navbar-link"
                activeClassName="active"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
