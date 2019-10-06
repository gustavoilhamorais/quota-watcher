import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
export const Data = createContext();

const StockContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("");

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.hgbrasil.com/finance/stock_price?format=json-cors&key=6927cc32&symbol=${selected}`);
      if (response.status === 200) setData(response.data.results[selected]);
      setLoading(false);
    } catch (error) { console.log(error); }
  };

  useEffect(() => {
    if (selected) fetchApi();
  }, [selected]);

  const loader = () => {
    for (let index = 0; index < 1000; index++) return(index);
  }

  return (
    <Data.Provider
      value={{
        data,
        selected,
        isLoading: loading,
        loader: () => loader(),
        select: option => setSelected(option.toUpperCase())
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default StockContext;
