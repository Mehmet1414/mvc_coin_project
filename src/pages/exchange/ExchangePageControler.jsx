import { useContext, useEffect } from "react";
import ExchengePageView from "./ExchengePageView";
import { ExchangeContext } from "../../context/exchangeContext";
const ExchangePageControler = () => {
  const { exchangeData, getExchange } = useContext(ExchangeContext);
  useEffect(() => {
    getExchange();
  }, []);
  return <ExchengePageView exchangeData={exchangeData} />;
};

export default ExchangePageControler;
