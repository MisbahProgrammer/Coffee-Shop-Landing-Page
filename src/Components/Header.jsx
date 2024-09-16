import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-around w-full py-6 '>
        <div><p className='text-3xl font-bold font-sans'>Coffee Shop</p></div>
        <div className='p-4 w-3/12'>
            <ul className='flex items-center justify-between w- text-2xl '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <button className='border bg-black text-white py-3 px-6 rounded-lg'>Login</button>
            </ul>
        </div>
    </div>
  )
}

export default Header