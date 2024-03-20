import React from "react";
import Button from "../../UI/Button";
import Heading from "../../UI/Typography/Heading";

// Images
import Candidate1 from "../../../_assets/users/candidate-1.png";
import Candidate2 from "../../../_assets/users/candidate-2.png";
import Candidate3 from "../../../_assets/users/candidate-3.png";
import Candidate4 from "../../../_assets/users/candidate-4.png";
import Candidate5 from "../../../_assets/users/candidate-5.png";

const hiringList = [
  {
    profile_picture: Candidate1,
    candidate_name: "John Doe",
    position: "Senior Python Develpper",
    hiredBy: "Stella",
  },
  {
    profile_picture: Candidate2,
    candidate_name: "John Doe",
    position: "Senior Python Develpper",
    hiredBy: "Stella",
  },
  {
    profile_picture: Candidate3,
    candidate_name: "John Doe",
    position: "Senior Python Develpper",
    hiredBy: "Stella",
  },
  {
    profile_picture: Candidate4,
    candidate_name: "John Doe",
    position: "Senior Python Develpper",
    hiredBy: "Stella",
  },
  {
    profile_picture: Candidate5,
    candidate_name: "John Doe",
    position: "Senior Python Develpper",
    hiredBy: "Stella",
  },
];
function Hirings() {
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
          Hiring Candidates
        </Heading>
        <Button variant={"link"}>View All</Button>
      </div>
      <div className="d-flex flex-column gap-2">
        {hiringList.map((candidate, idx) => {
          return (
            <div
              key={idx}
              className="d-flex justify-content-between align-items-start py-1 my-1"
            >
              <span className="d-flex flex-column justify-content-center align-items-center p-3 date-card">
                <img
                  src={candidate.profile_picture}
                  alt={candidate.candidate_name}
                />
              </span>
              <div className="d-flex flex-column gap-1 w-100 px-3 card-info">
                <p className="title-text">{candidate.candidate_name}</p>
                <p className="subtitle-text">{candidate.position}</p>
                <p className="trinary-text">Hired by: {candidate.hiredBy}</p>
              </div>
              <div>
                <Button
                  variant="outline-primary"
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

export default Hirings;
