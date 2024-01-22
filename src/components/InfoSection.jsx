const InfoSection = () => {
  return (
    <div className=" w-full flex justify-around flex-wrap h-44 bg-amber-400/80">
      <div className=" w-3/4 flex justify-evenly flex-wrap mt-3 ">
        <div className=" flex items-center flex-col text-xl">
          <span>MARKET CAP</span>
          <span className=" font-semibold text-xl">$1.5T</span>
        </div>
        <div className=" flex items-center flex-col text-xl">
          <span>EXCHANGE VOL</span>
          <span className=" font-semibold text-xl">$60.40B</span>
        </div>
        <div className=" flex items-center flex-col text-xl">
          <span>ASSETS</span>
          <span className=" font-semibold text-xl">2,296</span>
        </div>
        <div className=" flex items-center flex-col text-xl">
          <span>EXCHANGES</span>
          <span className=" font-semibold text-xl">73</span>
        </div>
        <div className=" flex items-center flex-col text-xl">
          <span>MARKETS</span>
          <span className=" font-semibold text-xl">8,892</span>
        </div>
        <div className=" flex items-center flex-col text-xl">
          <span>BTC DOM INDEX</span>
          <span className=" font-semibold text-xl">50.3%</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
