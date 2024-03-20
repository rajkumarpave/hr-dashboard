import React from "react";
import Button from "../../UI/Button";
import Heading from "../../UI/Typography/Heading";

// Images

import User1 from "../../../_assets/users/user-1.png";
import User2 from "../../../_assets/users/user-2.png";
import User3 from "../../../_assets/users/user-3.png";

const activityList = [
  {
    profilePicture: User1,
    interviewee: "John Doe",
    position: "Python Developer",
    interviewer: "Stella",
    finishedAt: "10 A.M to 11 A.M",
  },
  {
    profilePicture: User2,
    interviewee: "John Doe",
    position: "Python Developer",
    interviewer: "Stella",
    finishedAt: "10 A.M to 11 A.M",
  },
  {
    profilePicture: User3,

    interviewee: "John Doe",
    position: "Python Developer",
    interviewer: "Stella",
    finishedAt: "10 A.M to 11 A.M",
  },
];

function Activity() {
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
          Activity
        </Heading>
        <Button variant={"link"}>View All</Button>
      </div>
      <div className="d-flex flex-column gap-2">
        {activityList.map((activity, idx) => {
          return (
            <div
              key={idx}
              className="d-flex justify-content-start align-items-start py-1 my-1"
            >
              <span className="d-flex flex-column justify-content-center align-items-center p-3 date-card">
                <img src={activity.profilePicture} alt={activity.interviewee} />
              </span>
              <div className="d-flex flex-column gap-1 w-100 px-3 card-info">
                <p className="title-text">
                  <span className="me-1">{activity.interviewee}</span>
                  <span className="text-primary fw-bold">
                    [{activity.position}]
                  </span>
                </p>
                <p className="subtitle-text">
                  Interview with {activity.interviewer}
                </p>
                <p className="trinary-text">{activity.finishedAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Activity;
