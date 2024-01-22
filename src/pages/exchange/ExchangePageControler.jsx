import { useContext } from "react";
import ExchengePageView from "./ExchengePageView";
import { ExchangeContext } from "../../context/exchangeContext";
const ExchangePageControler = () => {
  const { exchangeData, getExchange } = useContext(ExchangeContext);
  useContext(() => {
    getExchange();
  }, []);
  return <ExchengePageView exchangeData={exchangeData} />;
};

export default ExchangePageControler;
