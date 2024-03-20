import React from "react";

function SearchBox() {
  return (
    <div className="input-group position-relative">
      <span
        className="position-absolute d-flex flex-column justify-content-center align-items-center"
        style={{
          top: 0,
          right: "5%",
          height: "100%",
          zIndex: 5,
        }}
      >
        <i className="bi bi-search m-0 p-0"></i>
      </span>
      <input
        type="text"
        className="form-control pe-3"
        aria-label="SearchBox"
        aria-describedby="SearchBox"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBox;
