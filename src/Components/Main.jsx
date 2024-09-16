import React from 'react'

function Main() {
  return (
    <div className='flex items-center justify-center gap-[240px] mx-auto w-full content-center mt-10'>
        <div className='w-3/12 p-2 border-4 border-black relative rounded-2xl'>
            <img src="coffee.jfif" alt="" className='w-full rounded-lg translate-x-4 translate-y-4' />
        </div>
        <div className='w-[30%] p-4'>
            <h2 className='font-bold text-6xl p-4 mb-4'>Fuel Your Day with Our Perfect Brew</h2>
            <p className='text-3xl px-4'>Start your day with the energy and warmth of a perfectly crafted cup of coffee.Our expertly roasted beans are hand-selected from the finest sources,ensuring that every sip is smooth,rich,and full of flavor.</p>
            <p className='text-3xl px-4'>Whether you're gearing up for a busy day or need a midday pick-me-up, our coffee is brewed to fuel your passion and keep you going.Come in for a cup and experience the perfect blend that runs ordinary moments into extraordinary ones.</p>
            <div className='px-4'>
                <button className='bg-black py-3 px-12  rounded-lg text-2xl text-white mt-5'>Order Now</button>
                </div>
        </div>
    </div>
  )
}

export default Main