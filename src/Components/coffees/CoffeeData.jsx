import React from 'react'

function CoffeeData({img,title,calories}) {
  return (
    <>
    <div>
         <img src={img} alt="" className='rounded-lg' /></div>
            <h2 className='text-xl text-black font-bold px-4 mt-4'>{title}</h2>
            <p className='text-[#823407] px-4 mb-4'>{calories}</p>
    
    </>
  )
}

export default CoffeeData