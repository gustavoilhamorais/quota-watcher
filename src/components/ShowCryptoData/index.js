import React from "react";
import ChartModel from "../models/Chart";
import CryptoDataCard from "../CryptoDataCard";

const ShowCryptoData = ({ data, selected }) => {
  return (
    <>
      <ChartModel
        id={selected}
        title={data.name || "Selecione uma criptomoeda"}
        series={[
          { data: [{y: data.buy ? data.buy : 0, color: "#007bff"}, { y: data.variation ? data.variation : 0, color: data.variation > 0 ? "green" : "red" }, {y: data.sell ? data.sell : 0, color: "#ffc107"}] }
        ]}
      />
      <CryptoDataCard className="col col-lg-10 mt-5 mb-5" data={data} />
    </>
  );
};

export default ShowCryptoData;
