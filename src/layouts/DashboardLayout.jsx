import { useState } from "react";
import Button from "../components/UI/Button";
import Upcomings from "../components/Widgets/Upcomings";
import Activity from "../components/Widgets/Activity";
import Hirings from "../components/Widgets/Hirings";
import PostedJobs from "../components/Sections/PostedJobs";
import { Heading, Subtitle } from "../components/UI/Typography";
import Assessments from "../components/Widgets/Assessments";
import TopNav from "../components/NavBars/TopNav";
import CandidateStatus from "../components/Sections/CandidateStatus";
import SideNav from "../components/NavBars/SideNav";
import InterviewMeetingInfo from "../components/Sections/InterviewMeetingInfo";
import ApplicationInfo from "../components/Sections/ApplicationInfo";

function DashboardLayout() {
  return (
    <>
      <TopNav />
      <div className="row w-100 mt-4">
        <div className="col-1">
          <SideNav />
        </div>
        <div className="col-11 p-0">
          <div className="container-fluid">
            <div className="row header-section mb-2">
              <div className="col d-flex justify-content-between align-items-start p-3 pt-0">
                <div className="d-flex flex-column gap-1">
                  <Heading className="header-title">HR Employee</Heading>
                  <Subtitle className="header-subtitle">
                    Enjoy your selecting potential candidates Tracking and
                    Management System.
                  </Subtitle>
                </div>
                <Button
                  className="py-2 px-3"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Task Details
                </Button>
              </div>
            </div>

            <div className="row">
              {/* First column */}
              <div className="col-lg-7 col-md-12 p-0">
                {/* Content for the first column */}
                <div className="p-3">
                  <ApplicationInfo />
                </div>
              </div>
              {/* Second column */}
              <div className="col-5 p-0">
                {/* Content for the second column */}
                <div className="p-3">
                  <Assessments />
                </div>
              </div>
            </div>

            <div className="row">
              {/* First column */}
              <div className="col-lg-9 col-md-12 p-0">
                {/* Content for the first column */}
                <div className="p-3">
                  <InterviewMeetingInfo />
                  <PostedJobs />
                  <CandidateStatus />
                </div>
              </div>
              {/* Second column */}
              <div className="col p-0">
                {/* Content for the second column */}
                <div className="p-3 d-flex flex-column gap-4">
                  <Upcomings />
                  <Activity />
                  <Hirings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
