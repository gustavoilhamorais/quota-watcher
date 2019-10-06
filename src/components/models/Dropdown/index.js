import React from "react";

const Dropdown = ({ title, children }) => (
  <div className="dropdown mt-3 ml-1 mb-2">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {title}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {children}
    </div>
  </div>
);

export default Dropdown;
