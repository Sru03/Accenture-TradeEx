import React from "react";

function JobList({ jobs }) {
  return (
    <div className="job-container">
      {jobs.map((jobItem, jobIndex) => {
        return (
          <div key={jobIndex}>
            <div className="job-item">
              <img
                src={jobItem.image}
                alt="Job pic"
                width="100%"
                style={{ borderRadius: "20px" }}
              />
              <p
                style={{
                  height: "10px",
                  fontWeight: "bold",
                  fontSize: "28px",
                  width: "100%",
                }}
              >
                {" "}
                {jobItem.title}
              </p>
              <p
                style={{
                  color: "#FCA311",
                  fontWeight: "bold",
                  fontSize: "25px",
                  marginTop: "70px",
                }}
              >
                {" "}
                ${jobItem.price}
              </p>
              <p>
                <i
                  class="fa-solid fa-location-dot"
                  style={{ padding: "10px" }}
                ></i>
                {jobItem.location}
              </p>
              <p>
                <i
                  class="fa-solid fa-phone"
                  style={{ paddingRight: "10px" }}
                ></i>{" "}
                {jobItem.phone_number}
              </p>
              <p
                style={{
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              >
                {" "}
                {jobItem.tradie}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JobList;
