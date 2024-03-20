import React from "react";
import { ApexCharts } from "../../Charts/ApexCharts";
import { Heading } from "../../UI/Typography";

function ApplicationInfo() {
  const seriesData = [
    {
      name: "Received",
      type: "column",
      data: [
        2000, 3000, 4000, 2800, 3200, 1500, 3000, 2300, 4800, 1900, 2100, 3200,
      ],
      color: "#277ACC", // Set fill color for Bar series
    },
    {
      name: "Processed",
      type: "line",
      data: [1500, 700, 2200, 1000, 1600, 750, 1900, 1100, 3200, 1300, 3000],
      color: "rgba(0, 43, 85, 0.74)", // Set fill color for Line series
    },
  ];
  return (
    <div className="p-4 shadow mb-4 assessment-info-container">
      <div className="d-flex justify-content-between align-items-center border-bottom border-2 pb-1 mb-3">
        <div className="d-flex gap-4 justify-content-center align-items-center">
          <Heading
            style={{
              fontSize: "19px",
            }}
          >
            Application’s Info
          </Heading>
          <div className="d-flex align-items-center gap-2">
            <span className="d-flex align-items-center gap-1">
              <i className="text-primary bi bi-square-fill"></i>
              <p style={{ fontSize: "12px" }}>Received</p>
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="text-secondary-dark bi bi-square-fill"></i>
              <p style={{ fontSize: "12px" }}>Processed</p>
            </span>
          </div>
        </div>
        <button className="btn d-flex align-items-center justify-content-center p-0">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <ApexCharts seriesData={seriesData} />
    </div>
  );
}

export default ApplicationInfo;
