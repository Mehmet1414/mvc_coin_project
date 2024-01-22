import { useNavigate } from "react-router-dom";

const Header = ({ setUser }) => {
  const navigate = useNavigate();
  const handleCoinsClick = () => {
    navigate("/coins");
  };
  const handleExcClick = () => {
    navigate("/exchanges");
  };
  const handleLockoutClick = () => {
    localStorage.removeItem("tocken");
    setUser(null);
    navigate("/");
  };
  return (
    <div className=" border-b-2 border-b-amber-400/30 flex justify-between px-20 py-7 mb-6 ">
      <span className=" flex gap-5">
        <span
          className=" cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
          onClick={handleCoinsClick}
        >
          Coins
        </span>
        <span
          className=" cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
          onClick={handleExcClick}
        >
          Exchanges
        </span>
      </span>
      <span className=" font-bold text-4xl">
        Coin<span className=" text-amber-500">Cap</span>
      </span>
      <span
        className=" cursor-pointer hover:text-amber-500 hover:border-b transition-all focus:text-amber-500/50"
        onClick={handleLockoutClick}
      >
        Logout
      </span>
    </div>
  );
};

export default Header;
