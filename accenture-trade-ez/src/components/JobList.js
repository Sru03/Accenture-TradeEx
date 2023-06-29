import React from "react";

function JobList({ jobs }) {
  return (
    <div className = "job-container">
       
      {jobs.map((jobItem, jobIndex) => {
        return <div key={jobIndex} 
         style = {{width: '10%'}}>
            <div className = 'job-item'>
            <img src={jobItem.image} alt="Job pic" width = "100%" style = {{ borderRadius: "50px"}}/>
            <p style = {{ height : '10px', fontWeight: 'bold', fontSize: '30px', width: '100%'}}>   {jobItem.title}</p>
            <p style = {{ width : "100%",  marginTop : "80px"}}> ${jobItem.price}</p>
            <p style = {{border : " 1px solid black", borderRadius: " 20px"}}>{jobItem.location}</p>
            <p style = {{border : " 1px solid black", borderRadius: " 10px", width : "100%"}}> {jobItem.phone_number}</p>
            <p style = {{border : " 1px solid black", borderRadius: " 10px", width : "100%"}}> {jobItem.tradie}</p>
            </div>

            </div>
      })}
      
    </div>
  );
}

export default JobList;
