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
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="textbox-container">
        <p className="textbox-heading">UserName</p>
        <TextBox label="name" value={name} onChange={handleNameChange} />
        </div>
        
        <FileUpload label="pdf" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TradieRegisterationPage;
