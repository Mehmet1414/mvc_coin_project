import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CoinContext } from "../../context/coinContex";
import UserContex from "../../context/userContex";
import MainPageView from "./MainPageView";

const MainPageControler = () => {
  const navigate = useNavigate();
  const { coins, getCoins } = useContext(CoinContext);
  const { user } = useContext(UserContex);
  useEffect(() => {
    getCoins();
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <MainPageView coins={coins} />;
};

export default MainPageControler;
