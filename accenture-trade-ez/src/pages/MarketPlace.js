import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase.config";
import { FaChevronDown } from "react-icons/fa";
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

  return (
    <>
      <div className="search-tradie">
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          placeholder="What type of job are you looking for?"
        />
        <button>Search</button>
        <div className="post-job">
          <button>Post a Job</button>
        </div>
      </div>
      {/* <div className="filter-container">
        <FilterPopup trigger={true}>
          <h3> Select Filters </h3>
          <p>
            {" "}
            Location <FaChevronDown />
          </p>
          <p>
            {" "}
            Price <FaChevronDown />
          </p>
          <p>
            {" "}
            Tradie Category <FaChevronDown />{" "}
          </p>
        </FilterPopup>
      </div> */}

      <div style={{ marginTop: "10px" }}>
        <JobList jobs={jobs} />
      </div>
    </>
  );
};

export default MarketPlace;
