import React from "react";

function JobList({ jobs }) {
  return (
    <div className = "job-container">
       
      {jobs.map((jobItem, jobIndex) => {
        return <div key={jobIndex} 
         style = {{width: '10%'}}>
            <div className = 'job-item'>
            <img src={jobItem.image} width = "70%"/>
            <p style = {{ height : '10px'}}> Job title:  {jobItem.title}</p>
            <p style = {{border : " 1px solid black", borderRadius: " 20px"}}>{jobItem.location}</p>
            <p style = {{border : " 1px solid black", borderRadius: " 10px"}}> ${jobItem.price}</p>
            </div>

            </div>
      })}
      
    </div>
  );
}

export default JobList;
