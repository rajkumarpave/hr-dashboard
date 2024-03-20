import React from "react";
import { Heading } from "../../UI/Typography";
import Button from "../../UI/Button";
import SearchBox from "../../UI/SearchBox";

function SectionHeader({ title = "", onSearch = () => {} }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4 section-header">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <Heading className="title">{title}</Heading>
        <Button variant={"link"}>View All</Button>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <SearchBox />
        <Button
          variant={"secondary"}
          className="d-flex justify-content-around align-items-center gap-2"
        >
          <i className="bi bi-filter text-primary fs-4"></i>
          <span>Filters</span>
        </Button>
      </div>
    </div>
  );
}

export default SectionHeader;
