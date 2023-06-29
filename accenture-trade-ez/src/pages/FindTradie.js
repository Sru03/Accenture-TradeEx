import React, { useEffect, useState } from "react";
import TradieList from "../components/TradieList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase.config";

const FindTradie = () => {
  const [tradie, setTradie] = useState([]);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "Tradie"));
    const tradie_list = querySnapshot.docs.map((doc) => doc.data());
    setTradie(tradie_list);
    console.log(tradie_list);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search-tradie">
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          placeholder=" What type of tradie are you looking for?"
        />
        <button>Search</button>
        <div className="post-job">
          <button>Post a Job</button>
        </div>
      </div>
      <div>
        <TradieList tradie={tradie} />
      </div>
    </>
  );
};

export default FindTradie;
