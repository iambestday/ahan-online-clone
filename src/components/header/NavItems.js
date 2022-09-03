import React from 'react'
//import { AiOutlineHeart } from 'react-icons/fa';
import { Link } from "react-router-dom"


function NavItems() {
  return (
    

    <ul className='hidden text-sm text-gray-500 sm:flex sm:flex-row sm:justify-between sm:ml-8'>
      <li className='px-1 border-l	divide-slate-400'><Link to="/" >صفحه نخست</Link></li>
      <li className='px-1 border-l	divide-slate-400'><Link to="/wiki">دانشنامه</Link></li>
      <li className='px-1 border-l	divide-slate-400'><Link to="/join-us">همکاری با ما</Link></li>
      <li className='px-1 border-l	divide-slate-400'><Link to="/about-us">درباره ما</Link></li>
      <li className='px-1'><Link to="/contact-us">تماس ما</Link></li>
    </ul>
  )
}

export default NavItems