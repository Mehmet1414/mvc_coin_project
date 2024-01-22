import millify from "millify";
import Header from "../../components/Header";
import InfoSection from "../../components/InfoSection";

const ExchengePageView = ({ exchangeData }) => {
  console.log(exchangeData);

  return (
    <>
      <Header />
      <InfoSection />
      {/* veriler yükleniyor 
      daten werden geladen*/}
      {!exchangeData && <p>Loading...</p>}

      {/* veri yüklendikten sonra
       nachdem Daten geladen */}
      <div className="w-full flex justify-center mt-[-80px]">
        <table className=" w-3/4 table bg-zinc-100 text-slate-900 mt-22">
          <thead className=" table-header-group text-right">
            <tr className=" table-row text-sm border-b-2 bg-red-50">
              <th className=" table-cell py-3 font-light pl-3 ">Rank</th>
              <th className=" table-cell py-3 font-light pl-8 text-left ">
                Coin
              </th>
              <th className=" table-cell py-3 font-light pl-3">Price</th>
              <th className=" table-cell py-3 font-light pl-3">MarketCap</th>
              <th className=" table-cell py-3 font-light pl-3">Volume(24Hr)</th>
              <th className=" table-cell py-3 font-light p-3">Change(24Hr)</th>
            </tr>
          </thead>
          <tbody className=" table-row-group text-right ">
            {exchangeData?.map((item) => (
              <tr
                className=" table-row border-b-2 bg-red-50"
                key={item.rank + 1}
              >
                <td className=" table-cell  py-4 items-start   ">
                  {item.rank}
                </td>
                <td className="  flex flex-col text-left pl-8">
                  <span>{item.name}</span>
                  <span className=" text-amber-500 text-xs font-bold">
                    {item.symbol}
                  </span>
                </td>
                <td className=" table-cell py-4  ">{millify(item.priceUsd)}</td>
                <td className=" table-cell py-4  ">
                  {millify(item.marketCapUsd)}
                </td>
                <td className=" table-cell py-4 ">
                  {millify(item.volumeUsd24Hr)}
                </td>
                <td className=" table-cell py-4 pr-3 ">
                  {item.changePercent24Hr < 0 ? (
                    <span className=" text-red-500">
                      {millify(item.changePercent24Hr)}%
                    </span>
                  ) : (
                    <span className=" text-green-600">
                      {millify(item.changePercent24Hr)}%
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExchengePageView;
