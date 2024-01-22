import { useContext, useEffect } from "react";
import { CoinContext } from "../../context/coinContex";
import MainPageView from "./MainPageView";

const MainPageControler = () => {
  const { coins, getCoins } = useContext(CoinContext);
  useEffect(() => {
    getCoins();
  }, []);

  return <MainPageView coins={coins} />;
};

export default MainPageControler;
