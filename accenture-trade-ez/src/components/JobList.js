import React from "react";

function JobList({ jobs }) {
  return (
    <div className = "job-container">
       
      {jobs.map((jobItem, jobIndex) => {
        return <div key={jobIndex} 
         style = {{width: '10%'}}>
            <div className = 'job-item'>
            <img src={jobItem.url} width = "100%"/>
            <p> {jobItem.title}</p>
            <p> {jobItem.location}</p>
            <p> ${jobItem.price}</p>
            </div>

            </div>
      })}
      
    </div>
  );
}

export default JobList;
