import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
export const Data = createContext();

const CryptoContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("");

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.hgbrasil.com/finance?format=json-cors&array_limit=1&fields=only_results,bitcoin&key=b61331af`);
      if (response.status === 200) setApiResponse(response.data.bitcoin);
      setLoading(false);
    } catch (error) { console.log(error); }
  };

  const handleSelection = () => {
    if (selected === "BLOCKCHAIN") {
      setData(apiResponse["blockchain_info"]);
    } else if (selected === "COINBASE") {
      setData(apiResponse["coinbase"]);
    } else if (selected === "BITSTAMP") {
      setData(apiResponse["bitstamp"]);
    } else if (selected === "FOXBIT") {
      setData(apiResponse["foxbit"]);
    } else if (selected === "MERCABITCOIN") {
      setData(apiResponse["mercadobitcoin"]);
    } else if (selected === "OMNITRADE") {
      setData(apiResponse["omnitrade"]);
    } else if (selected === "XDEX") {
      setData(apiResponse["xdex"]);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    handleSelection();
  }, [selected]);

  return (
    <Data.Provider
      value={{
        data,
        selected,
        isLoading: loading,
        select: option => setSelected(option.toUpperCase())
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default CryptoContext;