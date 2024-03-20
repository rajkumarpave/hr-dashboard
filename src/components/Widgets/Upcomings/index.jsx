import React from "react";
import Button from "../../UI/Button";
import Heading from "../../UI/Typography/Heading";

const interviewList = [
  {
    date: new Date("02/07/2024"),
    position: "Designer",
    createdBy: "Stella",
    duration: "10 A.M to 11 A.M",
  },
  {
    date: new Date("02/07/2024"),
    position: "PMO",
    createdBy: "Stephan",
    duration: "10 A.M to 11 A.M",
  },
  {
    date: new Date("02/07/2024"),
    position: "Net. Admin",
    createdBy: "Stella",
    duration: "10 A.M to 11 A.M",
  },
];

function Upcomings() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Heading
          style={{
            fontSize: "19px",
            fontWeight: "500",
            lineHeight: "33px",
            textAlign: "left",
          }}
        >
          Upcomings
        </Heading>
        <Button variant={"link"}>View All</Button>
      </div>
      <div className="d-flex flex-column gap-2">
        {interviewList.map((interview, idx) => {
          return (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-start py-1 my-1"
            >
              <span
                className="d-flex flex-column justify-content-center align-items-center p-3 date-card"
                data-index={idx}
              >
                <span>07</span>
                <span>Feb</span>
              </span>
              <div className="d-flex flex-column gap-1 w-100 px-3 card-info">
                <p className="title-text">
                  Interview with {interview.position}
                </p>
                <p className="subtitle-text">
                  Created by{" "}
                  <span className="text-primary fw-bold">
                    {interview.createdBy}
                  </span>
                </p>
                <p className="trinary-text">{interview.duration}</p>
              </div>
              <div>
                <Button
                  variant="primary"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Upcomings;
