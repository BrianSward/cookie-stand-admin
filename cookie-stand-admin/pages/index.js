import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';



export default function Home() {

  const [places, setPlaces] = useState([])

  function newPlaceHandler(e) {
    e.preventDefault()
    const place = {
      name: e.target.placeName.value,
      minCust: e.target.minCust.value,
      maxCust: e.target.maxCust.value,
      avgCook: e.target.avgCook.value,
      id: places.length,
    };
    setPlaces([...places, place])
  }
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-rose-100">
        <h1 className="">Cookie Stand Admin</h1>
      </header>

      <main className="">
        <form className="p-5 bg-rose-300" onSubmit={newPlaceHandler}>
          <h2 className="text-center">Create Cookie Stand</h2>
            <div className="">
              <label htmlFor="placeName" className="p-5">Store Location</label>
              <input name="placeName" className="p-1 bg-rose-100" id="placeName"/>
            </div>
            <div className="flex">
              <label htmlFor="minCust" className="p-5">Min. Cust. per Hour: </label>
              <input name="minCust" className="p-1 bg-rose-100" id="minCust"/>
            </div>
            <div>
              <label htmlFor="maxCust" className="">Max. Cust. per Hour: </label>
              <input name="maxCust" className="bg-rose-100" id="maxCust"/>
            </div>
            <div>
              <label htmlFor="avgCook" className="">Avg. Cookies per Sale: </label>
              <input name="avgCook" className="bg-rose-100" id="avgCook"/>
            </div>
            <div>
              <button className="bg-rose-100">Create</button>
            </div>
        </form>
        <table className="">
          <thead>
              <tr>
                  <th className="border border-rose-400">Number</th>
                  <th className="border border-rose-400">Store Location</th>
                  <th className="border border-rose-400">MinCustomer per Hour</th>
                  <th className="border border-rose-400">MaxCustomer per Hour</th>
                 <th className="border border-rose-400">Average Cookies per Sale</th>
              </tr>
          </thead>
          <tbody>
              {
                places.map((thing, idx) => {
                  return (
                    <tr key={idx}>
                      <td className="border border-rose-400">{thing.id+1}</td>
                      <td className="border border-rose-400">{thing.name}</td>
                      <td className="border border-rose-400">{thing.minCust}</td>
                      <td className="border border-rose-400">{thing.maxCust}</td>
                      <td className="border border-rose-400">{thing.avgCook}</td>
                  </tr>
                  )
                })
              }
          </tbody>
      </table>
      </main>
      <footer>
        <>&copy; 2023</>
        <Link href="/careers" className="">
          <p>Careers</p>
        </Link>
      </footer>
    </>
  )
}
