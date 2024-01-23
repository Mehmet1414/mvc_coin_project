import { useContext, useEffect } from "react";
import ExchengePageView from "./ExchengePageView";
import { ExchangeContext } from "../../context/exchangeContext";
import UserContex from "../../context/userContex";
import { useNavigate } from "react-router-dom";

const ExchangePageControler = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContex);
  const { exchangeData, getExchange } = useContext(ExchangeContext);
  useEffect(() => {
    getExchange();
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return <ExchengePageView exchangeData={exchangeData} />;
};

export default ExchangePageControler;
