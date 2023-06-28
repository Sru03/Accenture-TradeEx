import React from 'react';

const UserFormTextBox = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input type="text" id={label} value={value} onChange={onChange} />
    </div>
  );
};

export default UserFormTextBox;
