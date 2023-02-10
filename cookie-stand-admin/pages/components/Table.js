// import tableHeaders from '/data'
import { hourlySales } from 'data';

export default function Table({ places }) {
  const tableHeaders = ["Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"];
  const hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let grandTotal = 0;
  return places.length > 0 ? (
    <table className="">
      <thead>
        <tr>
          {tableHeaders.map((item, x) =>
            <th className="" key={x}>
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
              <tr key={x} className="">
                <td className="">{thing.name}</td>
                {hourlySales.map((hourly, x) => {
                  hourlyTotals[x] += hourly;
                  placeTotal += hourly;
                  grandTotal += hourly;
                  return (<td key={x} className="">{hourly}</td>)
                })}
                <td className="">{placeTotal}</td>
              </tr>
            )
          })}
          <tr className="">
            <td className="">Totals</td>
            {
              hourlyTotals.map((item, x) => 
                <td key={x} className="">{item}</td>
              )
            }
            <td className="">{grandTotal}</td>
          </tr>
        </tbody>
      </table>
    ) : (
    <h1 className="">No Places Available</h1>
  );
  }
