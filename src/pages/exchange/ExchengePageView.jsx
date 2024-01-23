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
          <thead className=" table-header-group text-right ">
            <tr className=" table-row text-sm border-b-2 bg-red-50">
              <th className=" table-cell py-3 font-light pl-3 ">Rank</th>
              <th className=" table-cell py-3 font-light pl-8 text-left ">
                Name
              </th>
              <th className=" table-cell py-3 font-light pl-3">
                Trading Pairs
              </th>
              <th className=" table-cell py-3 font-light pl-3 invisible md:visible">
                Top Pair
              </th>
              <th className=" table-cell py-3 font-light pl-3 invisible md:visible">
                Volume(24Hr)
              </th>
              <th className=" table-cell py-3 font-light p-3">Total(%)</th>
              <th className=" table-cell py-3 font-light p-3">Status</th>
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
                    {item.exchangeId}
                  </span>
                </td>
                <td className=" table-cell py-4  ">{item.tradingPairs}</td>
                <td className=" table-cell py-4 invisible md:visible  ">
                  {!item.volumeUsd ? "-" : millify(item.volumeUsd)}
                </td>
                <td className=" table-cell py-4 invisible md:visible ">
                  {!item.volumeUsd ? "-" : millify(item.volumeUsd)}
                </td>
                <td className=" table-cell py-4 ">
                  %{" "}
                  {!item.percentTotalVolume
                    ? "-"
                    : millify(item.percentTotalVolume)}
                </td>
                <td className=" table-cell py-4 pr-6 text-right ">
                  {item.socket === true ? (
                    <span className=" flex justify-end items-center">
                      <div className=" bg-green-500 h-5 w-5 rounded-full"></div>
                    </span>
                  ) : (
                    <span className=" flex justify-end items-center">
                      <div className=" bg-red-600 h-5 w-5 rounded-full"></div>
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
