import React from "react";
import Card from "../models/Card";
import moneyMask from '../../helpers/moneyMask';

const StocksDataCard = ({ data, className }) => {
  const price = moneyMask(data.price);
  const market_cap = moneyMask(data.market_cap);
  if (data) {
    return (
      <Card className={className} header={<h4>{data.symbol}</h4>}>
        <span className="badge badge-primary mr-1" data-toggle="tooltip" data-placement="top" title={data.price}>Preço</span>
        <span className="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title={data.change_percent}>Variação</span>
        <span className="badge badge-warning" data-toggle="tooltip" data-placement="top" title={data.market_cap}>Captalização</span>
        <h6>Compra: {data.price ? `R$ ${(price)}` : "Informação indisponível"}</h6>
        <h6>Captalização: {data.market_cap ? `R$ ${(market_cap)}` : "Informação indisponível"}</h6>
        <h6>Região: {data.region ? data.region : "Informação indisponível"}</h6>
        <h6>Abertura: {data.market_time.open ? data.market_time.open : "Informação indisponível"}</h6>
        <h6>Fechamento: {data.market_time.close ? data.market_time.close : "Informação indisponível"}</h6>
        <h6>Última atualização: {data.updated_at ? data.updated_at : "Informação indisponível"}</h6>
      </Card>
    );
  } else return <></>;
};

export default StocksDataCard;
