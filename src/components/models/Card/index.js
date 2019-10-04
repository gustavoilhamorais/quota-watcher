import React from "react";

const Card = ({ header, children, className, id }) => (
  <div className={ className } key={id}>
      <div class="card">
    <div class="card-header">{ header }</div>
    <div class="card-body">
      { children }
    </div>
  </div>
  </div>
);

export default Card;
