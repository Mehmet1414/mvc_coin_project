import axios from "axios";
import { createContext, useState } from "react";

export const ExchangeContext = createContext();

export const ExchangeProvider = ({ children }) => {
  const [exchangeData, setExchangeData] = useState([]);
  const getExchange = () => {
    axios
      .get("https://api.coincap.io/v2/exchanges")
      .then((res) => setExchangeData(res.data.data));
  };
  return (
    <ExchangeContext.Provider value={{ getExchange, exchangeData }}>
      {children}
    </ExchangeContext.Provider>
  );
};
