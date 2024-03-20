import React from "react";

import AssessmentIcon from "../../../_assets/common/assessment-icon.png";
import OfficeGirl from "../../../_assets/common/office-girl-1.png";
import OfficeGirl2X from "../../../_assets/common/office-girl-1-2x.png";
import Button from "../../UI/Button";

function Assessments() {
  return (
    <div className="new-assessment-card">
      <div className="row p-3">
        <div className="col">
          <div className="d-flex flex-column justify-content-between align-items-start p-3">
            <div className="d-flex justify-content-between align-items-start bg-white p-3">
              <img src={AssessmentIcon} width={"45px"} alt="assessment-icon" />
            </div>
            <div className="d-flex flex-column gap-2 mt-4">
              <p className="m-0 assessment-count fw-bold text-white">0033</p>
              <p className="m-0 assessment-text text-white">New Assessment's</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex flex-column justify-content-end position-relative h-100 p-3">
            <div
              className="position-absolute"
              style={{
                bottom: "23%",
                right: 0,
              }}
            >
              <div className="d-flex justifty-content-center align-items-center">
                <img src={OfficeGirl} width={"30%"} alt="office girl" />
                <img src={OfficeGirl2X} width={"70%"} alt="office girl 2x" />
              </div>
            </div>
            <Button
              style={{
                fontSize: "14px",
                fontWeight: 500,
                alignSelf: "end",
              }}
              variant={"secondary"}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assessments;
