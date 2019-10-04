import React, { useState, useEffect, createContext } from "react";
import data from "../../mocks/hb_finance-response";
export const Data = createContext();

const ApiContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [bitcoin, setBitcoin] = useState({});
  const [currencies, setCurrencies] = useState({});
  const [stocks, setStocks] = useState({});
  const [taxes, setTaxes] = useState({});

  const fetchApi = () => {
    setBitcoin(data.results.bitcoin);
    setCurrencies(data.results.currencies);
    setStocks(data.results.stocks);
    setTaxes(data.results.taxes);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Data.Provider
      value={{
        bitcoin,
        currencies,
        stocks,
        taxes,
        isLoading: loading
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default ApiContext;
