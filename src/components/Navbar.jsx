import React, { useState } from 'react'
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import { House } from 'lucide-react';
import { ArrowBigLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Cart from './Cart';
const Navbar = ({count}) => {
  const navigate=useNavigate();
  function clickHandler(){
    navigate('/Cart');
  }

  return (
    <>
      <div className='absolute bg-teal-950 md:w-300 lg:w-400 w-200 h-20 lg:h-15 flex flex-row items-center justify-around text-white top-0 left-0'>
        <div className='flex flex-row items-center gap-0.5 lg:mr-50'>
          <ArrowBigLeft onClick={()=>navigate(-1)}/>
        <House className='text-green-700 w-7.5 h-7.5'/>
        <div className='text-2xl tracking-wider font-bold text-green-700 underline'>Ecomzy</div>
        </div>
        <div className='flex flex-row gap-1.5 items-center  lg:mr-50'>
      <div className='text-lg font-semibold'>Home</div>
        <ShoppingCart onClick={clickHandler}/>
        <div className='bg-green-400 text-xs text-black mb-5 rounded-4xl px-1'>{count}</div>
        </div>
      </div>
    </> 
  )
}

export default Navbar
