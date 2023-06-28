import React from 'react';


const FindTradie = () => {
  return (
    <>
    <div className="search-tradie">
      <input type="search" placeholder="What type of tradie are you looking for?" />
      <button>Search</button>
    </div>

    <button className='post-job'>POST A JOB</button>
    </>
  );
};

export default FindTradie;
