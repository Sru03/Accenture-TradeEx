import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {collection, getDocs} from 'firebase/firestore';
import {db } from '../Firebase.config'



const MarketPlace = () => {
  const [jobs, setJobs] = useState([])

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, 'Jobs'));
    const job_list = querySnapshot.docs.map((doc) => doc.data());
    setJobs(job_list);
    console.log (job_list);
  }
  useEffect(()=> {
    fetchData();

  },[]);



  return (
    <div>
      <p>Market Place</p>
      <SearchBar />
      <JobList jobs={jobs} />
    </div>
  );
};



export default MarketPlace;
