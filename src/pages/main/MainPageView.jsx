import millify from "millify";

const MainPageView = ({ coins }) => {
  console.log(coins);

  return (
    <>
      {/* veriler yükleniyor 
      daten werden geladen*/}
      {!coins && <p>Loading...</p>}

      {/* veri yüklendikten sonra
       nachdem Daten geladen */}
      <div className=" flex justify-center rounded-lg">
        <table className=" table bg-zinc-100 text-slate-900 mt-44">
          <thead className=" table-header-group text-right">
            <tr className=" table-row text-sm border-b-2 bg-red-50">
              <th className=" table-cell py-3 font-light pl-3 ">Rank</th>
              <th className=" table-cell py-3 font-light pl-8 text-left ">
                Coin
              </th>
              <th className=" table-cell py-3 font-light pl-3">Price(USD)</th>
              <th className=" table-cell py-3 font-light pl-3">
                MarketCap(USD)
              </th>
              <th className=" table-cell py-3 font-light pl-3">Volume(24Hr)</th>
              <th className=" table-cell py-3 font-light p-3">Change(24Hr)</th>
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
                <td className=" table-cell py-4  ">
                  {millify(coin.marketCapUsd)}
                </td>
                <td className=" table-cell py-4 ">
                  {millify(coin.volumeUsd24Hr)}
                </td>
                <td className=" table-cell py-4 pr-3 ">
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
