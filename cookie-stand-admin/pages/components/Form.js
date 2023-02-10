export default function Form({ newPlaceHandler }) {
  return (

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
  )
}