import React from 'react';

const FileInput = ({ label, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input type="file" id={label} onChange={onChange} />
    </div>
  );
};

export default FileInput;