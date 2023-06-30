import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const jobsCollectionRef = collection(db, 'Jobs');
    const q = query(
      jobsCollectionRef,
      where('title', '>=', searchTerm),
      where('title', '<=', searchTerm + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log('No matching jobs found.');
    } else {
      const matchingJobs = querySnapshot.docs.map((doc) => doc.data());
      console.log('Matching jobs:', matchingJobs);
    }
  };

  return (
    <div className="search-bar">
      <span className="search-icon">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="search"
        name="search"
        placeholder="What job do you need done today?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
