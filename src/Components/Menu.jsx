import React from 'react'
import Coffee from './coffees/Coffee'

function Menu() {
  return (
    <div className='mt-20'>
      <div className='w-[62%] flex justify-start mx-auto'> <h2 className='text-center text-5xl font-semibold mb-14'>Menu/Hot Coffees</h2></div>
    <div className='mx-auto'>
        <Coffee/>
    </div>
    </div>
  )
}

export default Menu