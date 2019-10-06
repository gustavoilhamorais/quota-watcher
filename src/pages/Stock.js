import React from "react";
import Main from "../components/Stock";
import StockContext from "../components/containers/StockContext";

const Stock = () => (
  <StockContext>
    <Main />
  </StockContext>
);

export default Stock;
