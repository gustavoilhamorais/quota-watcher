import React from 'react';
import StocksDataCard from "../StocksDataCard";
import ChartModel from "../models/Chart";

const ShowStocksData = ({ data, selected }) => (
  <>
    <ChartModel
      id={selected}
      title={data.name || "Selecione uma cotação"}
      coin={data.currency}
      series={[
        {
          data: [{y: data.price, color: '#007bff'}, { y: data.change_percent, color: data.change_percent > 0 ? "green" : "red" }, {y: data.market_cap, color: '#ffc107'}]
        }
      ]}
    />
    <StocksDataCard className="col col-lg-6 mt-5 mb-5" data={data} />
  </>
);

export default ShowStocksData;