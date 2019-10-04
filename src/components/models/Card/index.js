import React from "react";

const Card = ({ header, children }) => (
  <div class="card">
    <div class="card-header">{ header }</div>
    <div class="card-body">
      { children }
    </div>
  </div>
);

export default Card;
