import React from "react";

const Card = ({ header, children, className, id }) => (
  <div className={ className } id={id}>
    <div className="card">
      <div className="card-header">{ header }</div>
      <div className="card-body">{ children }</div>
    </div>
  </div>
);

export default Card;
