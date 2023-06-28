import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import TextBox from '../components/UserFormTextBox';

const TradieRegisterationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('pdf', pdfFile);

    fetch('/register', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((message) => {
        console.log(message);
        // Show success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // Show error message to the user
      });
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
    <div class="container">
      <div>
        <p className="page-heading">Register as a Tradie</p>
      </div>
      
    <form action="action_page.php">
      <div class="row">
        <p className="section-heading">Account Details</p>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input type="text" id="email" name="email"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="password">Password</label>
        </div>
        <div class="col-75">
          <input type="text" id="password" name="password"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="uname">Username</label>
        </div>
        <div class="col-75">
          <input type="text" id="uname" name="uname"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="trade_type">Trade Type</label>
        </div>
        <div class="col-75">
          <select multiple id="trade_type" name="trade_type">
            <option value="carpenter">Carpenter</option>
            <option value="plumber">Plumber</option>
            <option value="roofer">Roofer</option>
            <option value="builder">Builder</option>
          </select>
        </div>
      </div>

      <div>
        <p className="section-heading">Primary Contact Person</p>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="fname">First Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="firstname" placeholder="E.g. John"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="lname">Last Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="lastname" placeholder="E.g. Smith"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="phone">Phone Number</label>
        </div>
        <div class="col-75">
          <input type="text" id="phone" name="phone"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="location">Location</label>
        </div>
        <div class="col-75">
          <input type="text" id="location" name="location"></input>
        </div>
      </div>

      <div>
        <p className="section-heading">Business Details</p>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="bname">Business Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="bname" name="bname"></input>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="bnumber">New Zealand Business Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="bnumber" name="bnumber"></input>
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="certs">Certification</label>
        </div>
        <div class="col-75">
          <FileUpload onChange={handleFileChange} />
        </div>
      </div>

      <div class="row">
        <input type="submit" value="Submit"></input>
      </div>
    </form>
  </div> 
  );
}

export default TradieRegisterationPage;
