import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD22i4oft2ddhuuJ_ylNcRbGQShRvpSASg",
  authDomain: "accenture-trade-ez.firebaseapp.com",
  projectId: "accenture-trade-ez",
  storageBucket: "accenture-trade-ez.appspot.com",
  messagingSenderId: "128982444394",
  appId: "1:128982444394:web:d1f2ca90b1046c1d391d13",
  measurementId: "G-ZY86HKGM52"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const jobsCollectionRef = collection(db, 'Jobs');
    const searchTermLowerCase = searchTerm.toLowerCase();
    const q = query(jobsCollectionRef, where('titleLowerCase', 'array-contains', searchTermLowerCase));
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
