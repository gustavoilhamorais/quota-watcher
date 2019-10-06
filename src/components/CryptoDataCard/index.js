import React from 'react';
import Card from '../models/Card';
import moneyMask from '../../helpers/moneyMask';

const CryptoDataCard = ({ data, className }) => {
  const buy = moneyMask(data.buy);
  const sell = moneyMask(data.sell);
  const last = moneyMask(data.last);
  const variation = moneyMask(data.variation);
  return (
    <Card className={className} header={<h4>{data.format[0]}</h4>}>
      <span className="badge badge-primary mr-1" data-toggle="tooltip" data-placement="top" title={data.buy}>Preço</span>
      <span className="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title={data.variation}>Variação</span>
      <span className="badge badge-warning" data-toggle="tooltip" data-placement="top" title={data.sell}>Venda</span>
      <h6>Compra: {data.buy ? `$ ${(buy)}` : "Informação indisponível"}</h6>
      <h6>Venda: {data.sell ? `$ ${sell}` : "Informação indisponível"}</h6>
      <h6>Última: {data.last ? `$ ${last}` : "Informação indisponível"}</h6>
      <h6>Variação: {data.variation ? `${variation} %` : "Informação indisponível"}</h6>
    </Card>
  );
}

export default CryptoDataCard;