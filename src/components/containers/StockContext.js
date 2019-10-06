import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
export const Data = createContext();

const StockContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("");
  const [update, setUpdate] = useState(false);

  const fetchApi = async () => {
    try {
      if (!counter) setLoading(true);
      const response = await axios.get(`https://api.hgbrasil.com/finance/stock_price?format=json-cors&key=bd1ec7bd&symbol=${selected}`);
      if (response.status === 200) setData(response.data.results[selected]);
      setLoading(false);
      setUpdate(true);
    } catch (error) { console.log(error); }
  };

  var timeout;

  const startCounter = () => {
    timeout = setTimeout(() => {
      fetchApi();
      setUpdate(false);
    }, 30000);
  }

  useEffect(() => {
    if (update) startCounter();
    else clearTimeout(timeout);
  }, [update]);

  useEffect(() => {
    if (selected) {
      fetchApi();
      setCounter(1);
    }
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

export default StockContext;
