import React from 'react';
import Card from '../models/Card';

const CryptoDataCard = ({ data, className }) => {
  return (
    <Card className={className} header={<h4>{data.format[0]}</h4>}>
      <span className="badge badge-primary mr-1" data-toggle="tooltip" data-placement="top" title={data.buy}>Preço</span>
      <span className="badge badge-secondary mr-1" data-toggle="tooltip" data-placement="top" title={data.variation}>Variação</span>
      <span className="badge badge-warning" data-toggle="tooltip" data-placement="top" title={data.sell}>Venda</span>
      <h6>Compra: $ {data.buy}</h6>
      <h6>Venda: $ {data.sell}</h6>
      <h6>Última: $ {data.last}</h6>
      <h6>Variação: $ {data.variation}</h6>
    </Card>
  );
}

export default CryptoDataCard;