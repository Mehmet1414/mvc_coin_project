import millify from "millify";
import Header from "../../components/Header";
import InfoSection from "../../components/InfoSection";

const MainPageView = ({ coins }) => {
  console.log(coins);

  return (
    <>
      <Header />
      <InfoSection />
      {/* veriler yükleniyor 
      daten werden geladen*/}
      {!coins && <p>Loading...</p>}

      {/* veri yüklendikten sonra
       nachdem Daten geladen */}
      <div className="w-full flex justify-center mt-[-80px]">
        <table className=" w-3/4 table bg-zinc-100 text-slate-900 mt-22">
          <thead className=" table-header-group text-right">
            <tr className=" table-row text-sm border-b-2 bg-red-50">
              <th className=" table-cell py-3 font-light pl-3 ">Rank</th>
              <th className=" table-cell py-3 font-light pl-8 text-left ">
                Name
              </th>
              <th className=" table-cell py-3 font-light pl-3">Price</th>
              <th className=" table-cell py-3 font-light pl-3 invisible md:visible">
                MarketCap
              </th>
              <th className=" table-cell py-3 font-light pl-3 invisible md:visible">
                Volume(24Hr)
              </th>
              <th className=" table-cell py-3 font-light p-3 pr-4">
                Change(24Hr)
              </th>
            </tr>
          </thead>
          <tbody className=" table-row-group text-right ">
            {coins?.map((coin) => (
              <tr
                className=" table-row border-b-2 bg-red-50"
                key={coin.rank + 1}
              >
                <td className=" table-cell  py-4 items-start   ">
                  {coin.rank}
                </td>
                <td className="  flex flex-col text-left pl-8">
                  <span>{coin.name}</span>
                  <span className=" text-amber-500 text-xs font-bold">
                    {coin.symbol}
                  </span>
                </td>
                <td className=" table-cell py-4  ">{millify(coin.priceUsd)}</td>
                <td className=" table-cell py-4 invisible md:visible  ">
                  {millify(coin.marketCapUsd)}
                </td>
                <td className=" table-cell py-4 invisible md:visible ">
                  {millify(coin.volumeUsd24Hr)}
                </td>
                <td className=" table-cell py-4 pr-4 ">
                  {coin.changePercent24Hr < 0 ? (
                    <span className=" text-red-500">
                      {millify(coin.changePercent24Hr)}%
                    </span>
                  ) : (
                    <span className=" text-green-600">
                      {millify(coin.changePercent24Hr)}%
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

export default MainPageView;
