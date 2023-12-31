// import React from 'react';
// import '../App.css';

// const FileInput = ({ label, onChange }) => {
//   return (
//     <div>
//       <label htmlFor={label}>{label}</label>
//       <input type="file" id={label} onChange={onChange} className='findCurrentLocation'/>
//     </div>
//   );
// };

// export default FileInput;

import React, { useRef, useState } from 'react';
import '../App.css';

function FileInput() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    // Check if no file is selected
    if (!file) {
      alert('Please select a file');
      setFileName(null);
      return;
    }

    // Check if the file is a PDF
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      setFileName(null);
      return;
    }
    
    setFileName(file.name);
    
    // if (file) {
    //   setFileName(file.name);
    //   // Handle the selected file here
    //   console.log('Selected file:', file);
    // }
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        required
      />
      <a href="#" onClick={handleFileUpload} className='findCurrentLocation'>
        + Add
      </a>
      {fileName && <p className='filetext'>Selected file: {fileName}</p>}
    </div>
  );
}

export default FileInput;