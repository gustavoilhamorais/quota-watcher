import React from "react";
import Card from "../models/Card";

const StocksDataCard = ({ data, className }) => {
  if (data) {
    return (
      <Card className={className} header={<h4>{data.symbol}</h4>}>
        <span className="badge badge-primary mr-1" data-toggle="tooltip" data-placement="top" title={data.price}>Preço</span>
        <span className="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title={data.change_percent}>Variação</span>
        <span className="badge badge-warning" data-toggle="tooltip" data-placement="top" title={data.market_cap}>Captalização</span>
        <h6>Região: {data.region || "-"}</h6>
        <h6>Abertura: {data.market_time.open || "-"}</h6>
        <h6>Fechamento: {data.market_time.close || "-"}</h6>
        <h6>Última atualização: {data.updated_at || "-"}</h6>
      </Card>
    );
  } else return <></>;
};

export default StocksDataCard;
