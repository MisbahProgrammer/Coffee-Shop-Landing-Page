import React from 'react'
import '../App.css'
function Main() {
  return (
    <div className="flex flex-col mt-10 md:flex-row items-center justify-center gap-4 desktop:gap-[250px] laptop:gap-[180px] lg:mr-10 mx-auto w-[90%] md:content-center content-center">
      <div className="double:w-[30%] laptop:w-[40%] p-2 border-4 border-black relative rounded-2xl">
        <img src="coffee.jfif" alt="" className="w-full rounded-lg md:translate-x-4 md:translate-y-4 md:hover:-translate-x-1 md:hover:-translate-y-1 duration-500" />
      </div>
      <div className="double:w-[30%] laptop:w-[60%] p-4">
        <h2 className="font-bold text-3xl double:text-6xl md:p-4 md:mb-4">Fuel Your Day with Our Perfect Brew</h2>
        <p className="lg:text-3xl text-xl mt-4 double:px-4 xsm:text-sm sm:text-base">Start your day with the energy and warmth of a perfectly crafted cup of coffee.Our expertly roasted beans are hand-selected from the finest sources,ensuring that every sip is smooth,rich,and full of flavor.</p>
        <p className="lg:text-3xl text-xl double:px-4 xsm:text-sm sm:text-base">Whether you're gearing up for a busy day or need a midday pick-me-up, our coffee is brewed to fuel your passion and keep you going.Come in for a cup and experience the perfect blend that runs ordinary moments into extraordinary ones.</p>
        <div className="px-4">
          <button className="bg-[#823407] py-1 px-6 text-xl md:py-3 md:px-12 rounded-lg md:text-2xl text-white mt-2 md:mt-5">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Main