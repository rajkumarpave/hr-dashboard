import React from "react";

import SectionHeader from "../SectionHeader";

function CandidateStatus() {
  return (
    <div className="p-4 shadow mb-4">
      <SectionHeader title="Candidate Status" />
      <div className="candidate-status-table d-flex gap-2">
        <TableComponent />
      </div>
    </div>
  );
}

export default CandidateStatus;

const TableComponent = () => {
  const rows = [
    {
      id: "#001",
      name: "John Doe",
      position: "Designer",
      levels: [6, 7, 3, null],
      outOf: 10,
      status: "Active",
    },
    {
      id: "#002",
      name: "John Smith",
      position: "Angular Developer",
      levels: [6, 5, 5, null],
      outOf: 10,
      status: "Hired",
    },
    {
      id: "#003",
      name: "Stella",
      position: "Android Developer",
      levels: [6, 5, 0, 0],
      outOf: 10,
      status: "Rejected",
    },
    {
      id: "#004",
      name: "Randy",
      position: "iOS Developer",
      levels: [5, 2, 8, null],
      outOf: 10,
      status: "Active",
    },
    {
      id: "#005",
      name: "John Dow",
      position: "Junior Designer",
      levels: [6, 7, 3, null],
      outOf: 10,
      status: "Active",
    },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Job ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>1st Level</th>
          <th>2nd Level</th>
          <th>3rd Level</th>
          <th>4th Level</th>
          <th>Total Marks</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          const getMarkRowValue = (value) => {
            return value === null ? (
              <i className="bi bi-three-dots"></i>
            ) : value === 0 ? (
              <span
                style={{
                  borderRadius: "50%",
                  padding: "6px 5px 3px 5px",
                }}
                className="text-danger bg-danger-subtle rounded-circlex p-1x px-2x"
              >
                <i className="bi bi-x fs-6"></i>
              </span>
            ) : (
              `${value}/${row.outOf}`
            );
          };

          const getStatusRowValue = (value) => {
            let variantClass = "";
            if (value.toLowerCase() === "rejected") {
              variantClass = "text-danger bg-danger-subtle";
            }
            if (value.toLowerCase() === "hired") {
              variantClass = "text-success bg-success-subtle";
            }
            if (value.toLowerCase() === "active") {
              variantClass = "text-warning bg-warning-subtle";
            }

            return (
              <span className={`p-0 px-1  text-center ${variantClass}`}>
                {value}
              </span>
            );
          };

          return (
            <tr key={index}>
              <td className="text-center">{row.id}</td>
              <td className="text-left">{row.name}</td>
              <td className="text-left">{row.position}</td>
              <td className="text-center">{getMarkRowValue(row.levels[0])}</td>
              <td className="text-center">{getMarkRowValue(row.levels[1])}</td>
              <td className="text-center">{getMarkRowValue(row.levels[2])}</td>
              <td className="text-center">{getMarkRowValue(row.levels[3])}</td>

              <td className="text-center">
                {row.levels.includes(null)
                  ? "-"
                  : `${row.levels.reduce(
                      (accumulator, currentValue) => accumulator + currentValue,
                      0
                    )}/${row.outOf * 4}`}
              </td>
              <td className="d-flex justify-content-center align-items-center">
                {getStatusRowValue(row.status)}
              </td>
              <td className="text-center">
                <button className="btn p-0 m-0">
                  <i className="bi bi-eye"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
