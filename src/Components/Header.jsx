import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [showMenu , setShowMenu] = useState(true)
  const btnToggle = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <div className='flex items-center justify-around w-[90%] mx-auto pt-6 bg-white'>
        <div><img src="public/coffee-shop-logo2.png" alt="" className='w-20 cursor-pointer'/></div>
        <div className='p-4 desktop:w-[55%] double:w-[30%] '>
            <ul className='lg:flex md:flex md:items-center lg:justify-between lg:text-2xl text-xl  hidden'>
                <li className='hover:bg-slate-300 px-8 py-3 rounded-lg cursor-pointer'>Home</li>
                <li className='hover:bg-slate-300 px-8 py-3 rounded-lg cursor-pointer'>About</li>
                <li className='hover:bg-slate-300 px-8 py-3 rounded-lg cursor-pointer'>Contact</li>
                <button className='border bg-[#823407] text-white py-3 px-6 rounded-lg hover:bg-slate-300 hover:text-black'>Login</button>
            </ul>
            
        </div>
        <div className='md:hidden text-right '>
              <button className='text-xl' onClick={btnToggle}> <GiHamburgerMenu /></button>
           
            </div>
    </div>
  )
}

export default Header