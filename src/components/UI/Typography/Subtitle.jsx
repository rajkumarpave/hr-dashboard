import React from "react";

function Subtitle({ children, className = "", ...props }) {
  return (
    <h2 className={`m-0 ${className}`} {...props}>
      {children}
    </h2>
  );
}

export default Subtitle;
