import { useGetAllSalesQuery } from "../redux/features/sales/salesApi";
import { ISalesInfo } from "../redux/features/sales/salesSlice";

const SalesHistory = () => {
  const { data } = useGetAllSalesQuery(undefined);
  const salesData = data?.data;
  let i = 0;
  return (
    <div className=" max-w-7xl mx-auto items-center border-b border-gray-300 ">
      <h1 className="text-3xl font-semibold"> Sales History</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>QuantityOfTheProduct</th>
              <th>NameOfTheBuyer</th>
              <th>DateOfTheSale</th>
            </tr>
          </thead>

          {salesData?.map((sale: ISalesInfo) => (
            <tbody>
              <tr>
                <th>{++i}</th>
                <td>{sale?.NameOfTheBuyer}</td>
                <td>{sale?.QuantityOfTheProduct}</td>
                <td>{sale?.DateOfTheSale}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SalesHistory;
