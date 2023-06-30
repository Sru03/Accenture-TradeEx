import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerRegistrationPage = () => {
  const navigation = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
    setFirstNameError(value ? "" : "Please enter your first name");
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
    setLastNameError(value ? "" : "Please enter your last name");
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(
      value
        ? value.includes("@")
          ? ""
          : "Please enter a valid email address"
        : "Please enter your email"
    );
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError(
      value
        ? value.length >= 8
          ? ""
          : "Password must be at least 8 characters"
        : "Please enter a password"
    );
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    setUserNameError(value ? "" : "Please enter your Username");
  };

  const cities = [
    "Auckland",
    "Wellington",
    "Christchurch",
    "Hamilton",
    "Tauranga",
    "Dunedin",
    "Palmerston North",
    "Napier",
    "Nelson",
    "Rotorua",
    "New Plymouth",
    "Whangārei",
    "Invercargill",
    "Whanganui",
    "Gisborne",
    "Taranaki",
    "Hawke's Bay",
    "Bay of Plenty",
    "Manawatū-Whanganui",
    "Northland",
    "Waikato",
    "Canterbury",
    "Otago",
    "Marlborough",
    "West Coast",
    "Southland",
  ];

  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleFormValidity = (isValid) => {
    setDisabled(!isValid);
  };

  const handleSubmit = (e) => {
    console.log("button triggered");
    e.preventDefault();

    // Check for errors
    if (
      emailError ||
      passwordError ||
      usernameError ||
      firstnameError ||
      lastnameError ||
      phoneNumberError
    ) {
      // At least one error exists
      alert("Please fill in all required fields correctly");
      return;
    }

    // Check checkbox status
    if (!isCheckboxChecked) {
      alert("Please agree to the terms and conditions");
      return;
    }

    navigation("/");
    return;
  };

  return (
    <div className="container">
      <div>
        <p className="page-heading">Register as a Customer</p>
      </div>

      <div>
        <p className="linkback">Not a Customer? </p>
        <a href="/register-tradie" className="link_to_user">
          Register as a Tradie
        </a>
      </div>

      <form action="action_page.php" onSubmit={handleSubmit}>
        <div className="row">
          <p className="section-heading">Account Details</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className={`col-75 ${emailError && "error"}`}>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
              required
            ></input>
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="password">Password</label>
          </div>
          <div className={`col-75 ${passwordError && "error"}`}>
            <input
              type="text"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              value={password}
              required
            ></input>
            {passwordError && (
              <span className="error-message">{passwordError}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="uname">Username</label>
          </div>
          <div className={`col-75 ${usernameError && "error"}`}>
            <input
              type="text"
              id="uname"
              name="uname"
              onChange={handleUsernameChange}
              value={username}
              required
            ></input>
            {usernameError && (
              <span className="error-message">{usernameError}</span>
            )}
          </div>
        </div>

        <div>
          <p className="section-heading">Personal Details</p>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="fname">First Name</label>
          </div>
          <div className={`col-75 ${firstnameError && "error"}`}>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="E.g. John"
              onChange={handleFirstNameChange}
              value={firstname}
              required
            ></input>
            {firstnameError && (
              <span className="error-message">{firstnameError}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lname">Last Name</label>
          </div>
          <div className={`col-75 ${lastnameError && "error"}`}>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="E.g. Smith"
              onChange={handleLastNameChange}
              value={lastname}
              required
            ></input>
            {lastnameError && (
              <span className="error-message">{lastnameError}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="phone">Phone Number</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="phone"
              name="phone"
              pattern="[0-9]+"
              title="Please enter a valid phone number"
              required
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="location">Location</label>
          </div>
          <div className="col-75">
            <select
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              required
            >
              <option value="">-- Select --</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="linkback">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              checked={isCheckboxChecked}
              onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            ></input>
            I agree to the{" "}
            <a href="#" className="link_to_user">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="link_to_user">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="row">
          <input type="submit" value="Register" onChange={handleSubmit}></input>
        </div>
      </form>
    </div>
  );
};

export default CustomerRegistrationPage;
