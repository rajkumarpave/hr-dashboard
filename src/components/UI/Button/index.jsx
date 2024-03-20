import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  variant,
  size,
  onClick = () => {},
  children,
  className = "",
  style = {},
}) => {
  let variantClass = "";
  let variantStyle = {
    borderRadius: "3px",
  };

  if (variant === "primary") {
    variantClass = "btn btn-primary";
  }

  if (variant === "secondary") {
    variantClass = "btn btn-secondary text-black text-uppercase";
  }

  if (variant === "outline-primary") {
    variantClass = "btn btn-outline-primary";
  }

  if (variant === "link") {
    variantClass = "btn btn-link";
  }

  if (size === "md") {
    variantClass = `${variantClass} btn-${size}`;
  }

  return (
    <button
      className={`${variantClass} ${className}`}
      style={{ ...variantStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  onClick: () => {},
  style: {},
};

export default Button;
