import React from "react";

function Heading({ children, className = "", ...props }) {
  return (
    <h1 className={`m-0 ${className}`} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
