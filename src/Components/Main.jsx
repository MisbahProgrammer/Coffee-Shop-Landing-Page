import React from 'react'

function Main() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-[240px] mx-auto w-full md:content-center content-center mt-10'>
        <div className='w-[80%] lg:w-[25vw] p-2 border-4 border-black relative rounded-2xl'>
            <img src="coffee.jfif" alt="" className='w-full rounded-lg md:translate-x-4 md:translate-y-4 md:hover:-translate-x-1 md:hover:-translate-y-1 duration-500' />
        </div>
        <div className='w-[80%] lg:w-[30%] p-4'>
            <h2 className='font-bold text-3xl lg:text-6xl md:p-4 md:mb-4'>Fuel Your Day with Our Perfect Brew</h2>
            <p className='lg:text-3xl text-xl mt-4 lg:px-4'>Start your day with the energy and warmth of a perfectly crafted cup of coffee.Our expertly roasted beans are hand-selected from the finest sources,ensuring that every sip is smooth,rich,and full of flavor.</p>
            <p className='lg:text-3xl text-xl lg:px-4'>Whether you're gearing up for a busy day or need a midday pick-me-up, our coffee is brewed to fuel your passion and keep you going.Come in for a cup and experience the perfect blend that runs ordinary moments into extraordinary ones.</p>
            <div className='px-4'>
                <button className='bg-black py-1 px-6 text-xl  md:py-3 md:px-12  rounded-lg md:text-2xl text-white mt-2 md:mt-5'>Order Now</button>
                </div>
        </div>
    </div>
  )
}

export default Main