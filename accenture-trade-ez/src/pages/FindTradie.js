import React from 'react';


const FindTradie = () => {
  return (
    <>
      <div className="search-tradie">
        <input type="search" placeholder="    What type of tradie are you looking for?" />
        <button>Search</button>
        <div className='post-job'>
        <button>POST A JOB</button>
        </div>
      </div>
    
    </>
  );
};

export default FindTradie;
