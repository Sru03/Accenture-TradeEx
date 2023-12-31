import React from "react";
import logo2 from "../assets/main_logo.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();

  const handleTradieRegistration = () => {
    navigation("/register-tradie");
  };
  const handleUserRegistration = () => {
    navigation("/register-customer");
  };

  return (
    <div>
      {/* Business Logo */}
      <div className="business-logo-container">
        <img src={logo2} alt="Business Logo" className="business-logo" />
      </div>

      {/* Slogan */}
      <div className="slogan">
        <h2>
          Need a<span className="yellow-text"> Tradie</span>? Sign up for Trade
          <span className="yellow-text">Ez.</span>
        </h2>
      </div>

      {/* Button boxes */}
      <div className="sign-up-button-container">
        <button
          className="register-user-button"
          onClick={handleUserRegistration}
        >
          <i>
            <p>Need a job done?</p>
          </i>
          <p className="second-line">
            Register as a <b>user</b>
          </p>
        </button>
        <button
          className="register-tradie-button"
          onClick={handleTradieRegistration}
        >
          <i>
            <p>Looking for a job?</p>
          </i>
          <p className="second-line">
            Register as a <b>tradie</b>
          </p>
        </button>
      </div>

      <div className="existing-acc">
        <p>
          <b>
            <i>Already have an account?</i>{" "}
            <a href="#" className="yellow-text">
              Log in
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
