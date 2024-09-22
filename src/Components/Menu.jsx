import React from 'react'
import Coffee from './coffees/Coffee'

function Menu() {
  return (
    <>
    <h2>Menu/Hot Coffees</h2>
    <div className='mx-auto'>
        <Coffee/>
        <Coffee/>
    </div>
    </>
  )
}

export default Menu