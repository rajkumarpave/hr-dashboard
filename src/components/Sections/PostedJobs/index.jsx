import React from "react";
import JobCard from "./JobCard";

import Python from "../../../_assets/technology/python.png";
import Java from "../../../_assets/technology/java.png";
import Angular from "../../../_assets/technology/angular.png";
import UIUX from "../../../_assets/technology/uiux.png";
import SectionHeader from "../SectionHeader";

function PostedJobs() {
  const jobList = [
    {
      icon: Python,
      role: "Python Developer",
      position: "Senior Developer",
      total_applicants: 258,
      percentage_inc: 28,
      last_updated: "6 min ago",
    },
    {
      icon: Angular,
      role: "Angular Developer",
      position: "Senior Developer",
      total_applicants: 258,
      percentage_inc: 28,
      last_updated: "6 min ago",
    },
    {
      icon: Java,
      role: "Java Developer",
      position: "Senior Developer",
      total_applicants: 258,
      percentage_inc: 28,
      last_updated: "6 min ago",
    },
    {
      icon: UIUX,
      role: "UX|UI Designers",
      position: "Senior Developer",
      total_applicants: 258,
      percentage_inc: 28,
      last_updated: "6 min ago",
    },
  ];

  return (
    <div className="p-4 shadow mb-4">
      <SectionHeader title="Posted Jobs" />
      <div className="row">
        {jobList.map((job, idx) => {
          return (
            <div className="col-md-3 col-xs-6 p-1">
              <JobCard key={idx} id={idx} jobDetail={job} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostedJobs;
