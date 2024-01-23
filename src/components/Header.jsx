import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContex from "../context/userContex";

const Header = () => {
  const { user, logoutUser } = useContext(UserContex);

  const navigate = useNavigate();
  const handleCoinsClick = () => {
    navigate("/coins");
  };
  const handleExcClick = () => {
    navigate("/exchanges");
  };

  return (
    <div className=" border-b-2 border-b-amber-400/30 flex justify-between px-20 py-7 mb-6 ">
      <span className=" flex gap-5">
        <Link
          className=" cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
          onClick={handleCoinsClick}
        >
          Coins
        </Link>
        <Link
          className=" cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
          onClick={handleExcClick}
        >
          Exchanges
        </Link>
      </span>
      <span className=" font-bold text-4xl">
        Coin<span className=" text-amber-500">Cap</span>
      </span>
      <Link
        className={`${
          !user
            ? "invisible"
            : "cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
        }`}
        onClick={logoutUser}
      >
        Logout
      </Link>
    </div>
  );
};

export default Header;
