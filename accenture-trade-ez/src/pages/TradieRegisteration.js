import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import TextBox from '../components/UserFormTextBox';

const TradieRegisterationPage = () => {

  const trade_types = [
    { key: 'Carpenter', id: 1 },
    { key: 'Plumber', id: 2 },
    { key: 'Roofer', id: 3 },
    { key: 'Builder', id: 4 },
  ];

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [selectedTradeTypes, setSelectedTradeTypes] = useState([]);
  // const [phoneNumber, setPhoneNumber] = useState('');
  
  const [firstnameError, setFirstNameError] = useState('');
  const [lastnameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [selectedTradeTypesError, setSelectedTradeTypesError] = useState('');
  // const [phoneNumberError, setPhoneNumberError] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
    setFirstNameError(value ? '' : 'Please enter your first name');
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
    setLastNameError(value ? '' : 'Please enter your last name');
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(value ? (value.includes('@') ? '' : 'Please enter a valid email address') : 'Please enter your email');
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError(value ? (value.length >= 8 ? '' : 'Password must be at least 8 characters') : 'Please enter a password');
  };

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
    setUserNameError(value ? '' : 'Please enter your Username');
  };

  // const handlePhoneNumberChange = (e) => {
  //   const { initvalue } = e.target.value;
  //   setPhoneNumber(initvalue);
  //   setPhoneNumberError(
  //     initvalue.match(/^\d+$/) ? '' : 'Please enter a valid numerical phone number'
  //   );
  // };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleTradeTypeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setSelectedTradeTypes(selectedOptions);
    setSelectedTradeTypesError(
      selectedOptions.length > 0 ? '' : 'Please select at least one trade type'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedTradeTypes.length === 0) {
      setSelectedTradeTypesError('Please select at least one trade type');
      return;
    }

    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('pdf', pdfFile);

    // fetch('/register', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.text())
    //   .then((message) => {
    //     console.log(message);
    //     // Show success message to the user
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     // Show error message to the user
    //   });
  };

  return (
    // <div className='container'>
    //   <div className='page-heading-container'>
    //     <div>
    //       <p className="register-page-heading">Register as a Tradie</p>
    //     </div>

    //     <div>
    //       <p className='linkback'>Is this account for personal use?</p>
    //       <a href='/register-user' className='linkback'>Register as a User</a>
    //     </div>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     <div className="textbox-container">
    //         <label className="textbox-heading" for="email">Email * </label>
    //         <br />
    //         <TextBox id="email" type="text" name="email" required />
    //     </div>
        
    //     <FileUpload label="pdf" onChange={handleFileChange} />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>
    <div className="container">
      <div>
        <p className="page-heading">Register as a Tradie</p>
      </div>
      
    <form action="action_page.php" onSubmit={handleSubmit}>
      <div className="row">
        <p className="section-heading">Account Details</p>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="email">Email *</label>
        </div>
        <div className={`col-75 ${emailError && 'error'}`}>
          <input type="text" id="email" name="email" onChange={handleEmailChange} value={email}></input>
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="password">Password *</label>
        </div>
        <div className={`col-75 ${passwordError && 'error'}`}>
          <input type="text" id="password" name="password" onChange={handlePasswordChange} value={password}></input>
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="uname">Username *</label>
        </div>
        <div className={`col-75 ${usernameError && 'error'}`}>
          <input type="text" id="uname" name="uname" onChange={handleUsernameChange} value={username}></input>
          {usernameError && <span className="error-message">{usernameError}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="trade_type">Trade Type *</label>
        </div>
        <div className={`col-75 ${selectedTradeTypesError && 'error'}`}>
          <select multiple id="trade_type" name="trade_type" value={selectedTradeTypes} onChange={handleTradeTypeChange} required>
            {trade_types.map((tradeType) => (
              <option key={tradeType.id} value={tradeType.id}>
                {tradeType.key}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="section-heading">Primary Contact Person</p>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="fname">First Name *</label>
        </div>
        <div className={`col-75 ${firstnameError && 'error'}`}>
          <input type="text" id="fname" name="firstname" placeholder="E.g. John" onChange={handleFirstNameChange} value={firstname}></input>
          {firstnameError && <span className="error-message">{firstnameError}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="lname">Last Name *</label>
        </div>
        <div className={`col-75 ${lastnameError && 'error'}`}>
          <input type="text" id="lname" name="lastname" placeholder="E.g. Smith" onChange={handleLastNameChange} value={lastname}></input>
          {lastnameError && <span className="error-message">{lastnameError}</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="phone">Phone Number</label>
        </div>
        <div className="col-75">
          <input type="text" id="phone" name="phone"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="location">Location</label>
        </div>
        <div className="col-75">
          <input type="text" id="location" name="location"></input>
        </div>
      </div>

      <div>
        <p className="section-heading">Business Details</p>
      </div>

      <div className="row">
        <div className="col-25">
          <label for="bname">Business Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="bname" name="bname"></input>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label for="bnumber">New Zealand Business Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="bnumber" name="bnumber"></input>
        </div>
      </div>

      <div className="row">
        <div className="col-25">
          <label for="certs">Certification</label>
        </div>
        <div className="col-75">
          <FileUpload onChange={handleFileChange} />
        </div>
      </div>

      <div className="row">
        <input type="submit" value="Send for Approval"></input>
      </div>
    </form>
  </div> 
  );
}

export default TradieRegisterationPage;
