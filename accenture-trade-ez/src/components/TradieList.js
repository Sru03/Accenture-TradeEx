import React from "react";

function TradieList({ tradie }) {
  return (
    <div className = "tradie-container">
       
      {tradie.map((tradieItem, tradieIndex) => {
        return (
          <div key={tradieIndex} style = {{width: '10%'}}>
            <div className = 'tradie-item'>
              <img src={tradieItem.profile_pic} alt="profile-pic" width = "100%" style = {{ borderRadius: "50px"}}/>
              <p style = {{ height : '10px'}}> {tradieItem.name}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 20px"}}>{tradieItem.job_title}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 20px"}}>{tradieItem.location}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 10px"}}> {tradieItem.email}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 10px"}}> {tradieItem.phone_number}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 10px"}}> ${tradieItem.hourly_rate}</p>
            </div>

          </div>
      )})}
      
    </div>
  );
}

export default TradieList;
