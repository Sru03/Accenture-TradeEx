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
              <p ><i class="fa-solid fa-location-dot" style = {{padding: '10px'}}></i>{tradieItem.location}</p>
              <i class="fa-solid fa-phone" style = {{paddingRight: '40px'}}></i>
              <i class="fa-solid fa-envelope"></i>
              <p style = {{ color: '#FCA311'}}>${tradieItem.hourly_rate } p/h</p>
            </div>

          </div>
      )})}
      
    </div>
  );
}

export default TradieList;
