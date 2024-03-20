import React from "react";
import { Heading } from "../../UI/Typography";
import Button from "../../UI/Button";

import CandidatePic1 from "../../../_assets/users/candidate-6.png";
import CandidatePic2 from "../../../_assets/users/candidate-7.png";
import ClockIcon from "../../../_assets/common/clock-icon.svg";
import CalendarIcon from "../../../_assets/common/calendar-icon.svg";

function InterviewMeetingInfo() {
  // Dummy meeting data
  const meetings = [
    {
      id: 1,
      candidate: {
        name: "John Smith",
        designation: "Senior Python Developer",
        picture: CandidatePic1,
      },
      date: "19th Feb 2024",
      time: "10:30 A.M",
      levels: [
        { level: "1st Level", status: "7/10", interviewer: "Stella" },
        { level: "2nd Level", status: "6/10", interviewer: "Smith" },
        { level: "3rd Level", status: "Waiting", interviewer: "Stephan" },
      ],
      meetVia: "G-Meet",
      attendees: "Johnson",
    },
    {
      id: 1,
      candidate: {
        name: "Maria",
        designation: "Senior Python Developer",
        picture: CandidatePic2,
      },
      date: "19th Feb 2024",
      time: "10:30 A.M",
      levels: [
        { level: "1st Level", status: "7/10", interviewer: "Stella" },
        { level: "2nd Level", status: "6/10", interviewer: "Smith" },
        { level: "3rd Level", status: "Waiting", interviewer: "Stephan" },
      ],
      meetVia: "G-Meet",
      attendees: "Johnson",
    },
  ];

  return (
    <div className="p-4 shadow mb-4">
      <div className="d-flex justify-content-between align-items-center border-bottom border-2 pb-1 mb-3">
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <Heading
            style={{
              fontSize: "22px",
            }}
          >
            Today Interviews Meetings Info
          </Heading>
        </div>
        <button className="btn d-flex align-items-center justify-content-center p-0">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
      <div className="meeting-info-card-container d-flex gap-2 overflow-x-auto mt-3">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="flex-shrink-0 m-2 p-2">
            <MeetingInfoCard meeting={meeting} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MeetingInfoCard = ({ meeting }) => {
  return (
    <div className="meeting-info-card">
      <div className="row w-100">
        <div className="col-md-4 col-xs-12 p-0 border border-end-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 p-4 border">
            <img
              src={meeting.candidate.picture}
              alt="candidate-picture"
              className="mb-2"
            />
            <p className="candidate-name text-center">
              {meeting.candidate.name}
            </p>
            <p className="candidate-designation text-center">
              {meeting.candidate.designation}
            </p>
          </div>
          <div className="d-flex border w-100 justify-content-center">
            <div className="col d-flex flex-column justify-content-center align-items-center gap-1 p-2 border">
              <img src={CalendarIcon} alt="calendar-icon" />
              <p className="date-time text-primary text-center">
                {meeting.date}
              </p>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center gap-1 p-2 border">
              <img src={ClockIcon} alt="Clock-icon" />
              <p className="date-time text-primary text-center">
                {meeting.time}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12 d-flex flex-column justify-content-between border">
          <table>
            <tbody>
              {meeting.levels.map((level, index) => (
                <tr key={index}>
                  <td>
                    {level.level}: {level.status}
                  </td>
                  <td>Interviewer: {level.interviewer}</td>
                </tr>
              ))}
              <tr>
                <td>Meet via: {meeting.meetVia}</td>
                <td>Attendees: {meeting.attendees}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center align-items-center gap-3 p-4">
            <Button variant="outline-primary">Reschedule Meeting</Button>
            <Button variant="primary">Join Meeting</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewMeetingInfo;
