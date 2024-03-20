import React from "react";
import { Subtitle } from "../../UI/Typography";

function JobCard({ jobDetail, id }) {
  return (
    <div className="job-card d-flex flex-column justify-content-between p-3 shadow">
      <div className="d-flex justify-content-between align-items-center border-bottom border-2 pb-1">
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <img src={jobDetail.icon} alt={jobDetail.role} width="18px" />
          <Subtitle className="m-0 role-text">{jobDetail.role}</Subtitle>
        </div>
        <button className="btn d-flex align-items-center justify-content-center p-0">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <p className="position-text">{jobDetail.position}</p>
        <p
          className="count d-flex justify-content-center align-items-center"
          data-index={id}
        >
          <span>{jobDetail.total_applicants}</span>
        </p>
        <p className="trinary-text">Total Applicants</p>
      </div>
      <div className="d-flex justify-content-between align-items-center bottom-text border-top border-2 pt-1">
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <p className="d-flex justify-content-center align-items-start gap-1">
            <i className="fw-bold text-primary bi bi-arrow-up"></i>
            <span className="fw-bold text-primary">
              {jobDetail.percentage_inc}
            </span>
            <span>vs Last month</span>
          </p>
        </div>
        <p>{jobDetail.last_updated}</p>
      </div>
    </div>
  );
}

export default JobCard;
