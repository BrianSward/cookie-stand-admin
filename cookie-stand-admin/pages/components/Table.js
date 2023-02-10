import { tableHeaders } from 'data'
import { hourlySales } from 'data';

export default function Table({ places }) {

  const hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let totalTotal = 0;
  return places.length > 0 ? (
    <table className="">
      <thead>
        <tr>
          {tableHeaders.map((item, x) =>
            <th className="border-rose-500" key={x}>
              {item}
            </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          places.map((thing, x) => {
            let placeTotal = 0
            return (
              <tr key={x} className="odd:bg-rose-100 even:bg-rose-400">
                <td className="border-rose-500">{thing.name}</td>
                {hourlySales.map((hourly, x) => {
                  hourlyTotals[x] += hourly;
                  placeTotal += hourly;
                  totalTotal += hourly;
                  return (<td key={x} className="border-rose-500">{hourly}</td>)
                })}
                <td className="border-rose-500">{placeTotal}</td>
              </tr>
            )
          })}
          <tr className="odd:bg-rose-100 even:bg-rose-400">
            <td className="border-rose-500">Totals</td>
            {
              hourlyTotals.map((item, x) => 
                <td key={x} className="border-rose-500">{item}</td>
              )
            }
            <td className="border-rose-500">{totalTotal}</td>
          </tr>
        </tbody>
      </table>
    ) : (
    <h1 className="">No Places Available</h1>
  );
  }
