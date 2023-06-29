import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase.config";
import { FiFilter } from "react-icons/fi";
import FilterPopup from "../components/FilterPopup";

const MarketPlace = () => {
  const [jobs, setJobs] = useState([]);

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "Jobs"));
    const job_list = querySnapshot.docs.map((doc) => doc.data());
    setJobs(job_list);
    console.log(job_list);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterClick = () => {
    console.log("Clicked on Filter");
  };

  return (
    <div>
    
      <div className="market-place-search-bar">
        <SearchBar />

        <FiFilter
          onClick={handleFilterClick}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            fontWeight: "lighter",
            fontSize: "50px",
            padding : "3px",
            margin : " 50px"
          }}
        />

        <FilterPopup trigger={false}>
          <h3> My Popup</h3>
          <p> Select Filters </p>
          <p> Experience</p>
          <p> Reviews </p>
        </FilterPopup>
      </div>

      <JobList jobs={jobs} />
    </div>
  );
};

export default MarketPlace;
