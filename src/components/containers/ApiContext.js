import React, { useState, useEffect, createContext } from "react";
import data from "../../mocks/hb_finance-response";
export const Data = createContext();

const ApiContext = ({ children }) => {
  const [response, setResponse] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setResponse(data);
      console.log(response);
      setLoading(false);
    }, 3000);
    clearTimeout();
  }, []);

  return (
    <Data.Provider
      value={{
        response,
        isLoading: loading
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default ApiContext;
