import axios from "axios";
import { createContext, useState } from "react";

export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);

  /* Coin'leri getir ve State'e aktarir
  Coins holen und in den State übertragen */
  const getCoins = () => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((res) => setCoins(res.data.data));
  };
  return (
    <CoinContext.Provider value={{ coins, getCoins }}>
      {children}
    </CoinContext.Provider>
  );
};
