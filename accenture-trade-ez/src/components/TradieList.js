import React from "react";

function TradieList({ tradie }) {
  return (
    <div className = "tradie-container">
       
      {tradie.map((tradieItem, tradieIndex) => {
        return (
          <div key={tradieIndex} style = {{width: '10%'}}>
            <div className = 'tradie-item'>
              <img src={tradieItem.profile_pic} alt="profile-pic" width = "100%" style = {{ borderRadius: "50px"}}/>
              <p style = {{ height : '10px', fontWeight: 'bold', fontSize: '30px'}}> {tradieItem.name}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 20px", padding: '10px'}}>{tradieItem.job_title}</p>
              <p >{tradieItem.location}</p>
              <p style = {{border : " 1px solid black", borderRadius: "10px", fontSize: "18px",}}> {tradieItem.email}</p>
              <p style = {{border : " 1px solid black", borderRadius: " 10px"}}> {tradieItem.phone_number}</p>
              <p>${tradieItem.hourly_rate } p/h</p>
            </div>

          </div>
      )})}
      
    </div>
  );
}

export default TradieList;
