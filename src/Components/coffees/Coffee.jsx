import React from "react";
import Data from "./Data.json";
import CoffeeData from "./CoffeeData";

function Coffee() {
  return ( 
    <div className="w-[67%] flex flex-wrap items-center justify-around mx-auto mb-20 gap-x-0 gap-y-16">
      {Data.map((props) => {
        return (
          <div className="w-[350px] border shadow-lg rounded-lg">
            <CoffeeData key={props.id} {...props} />
            <button className="py-3 px-6 bg-[#823407] text-white font-bold rounded-md mx-4 mt-5 mb-3">
              Add to Order
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Coffee;
