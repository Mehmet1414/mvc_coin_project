const InfoSection = () => {
  return (
    <>
      <div className=" w-full flex justify-around flex-wrap min-h-fit bg-amber-400/80 pb-4">
        <div className=" w-3/4 flex justify-evenly gap-x-10 gap-y-6 flex-wrap mt-3  min-h-fit ">
          <div className=" flex items-center flex-col text-l">
            <span>MARKET CAP</span>
            <span className=" font-semibold text-xl">$1.5T</span>
          </div>
          <div className=" flex items-center flex-col text-l">
            <span>EXCHANGE VOL</span>
            <span className=" font-semibold text-xl">$60.40B</span>
          </div>
          <div className=" flex items-center flex-col text-l">
            <span>ASSETS</span>
            <span className=" font-semibold text-xl">2,296</span>
          </div>
          <div className=" flex items-center flex-col text-l">
            <span>EXCHANGES</span>
            <span className=" font-semibold text-xl">73</span>
          </div>
          <div className=" flex items-center flex-col text-l">
            <span>MARKETS</span>
            <span className=" font-semibold text-xl">8,892</span>
          </div>
          <div className=" flex items-center flex-col text-l">
            <span>BTC DOM INDEX</span>
            <span className=" font-semibold text-xl">50.3%</span>
          </div>
        </div>
      </div>
      <div className=" w-full bg-amber-400/80 h-20"></div>
    </>
  );
};

export default InfoSection;
