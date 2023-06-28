import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">
        <i className="fas fa-search"></i>
      </span>
      <input type="search" placeholder="What job do you need done today?" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;