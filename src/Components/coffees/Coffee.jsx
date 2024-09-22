import React from "react";
import Data from "./Data.json";
import CoffeeData from "./CoffeeData";

function Coffee() {
  return (
    <div className="w-[400px] bg-slate-300">
      {Data.map((Currelm) => {
        return (
          <CoffeeData key={Currelm.title} data={Currelm}/>
        );
      })}

      <button className="py-3 px-6 bg-[#823407] text-white font-bold rounded-md">
        Add to Order
      </button>
    </div>
  );
}

export default Coffee;
