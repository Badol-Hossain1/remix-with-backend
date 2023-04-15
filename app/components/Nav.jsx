import { NavLink } from '@remix-run/react'
import React from 'react'

export default function Nav() {
  return (
<nav>
    <ul className='flex justify-center text-white gap-4'>
        <li className='font-bold text-xl bg-slate-700 px-4 py-3 rounded-md'>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className='font-bold text-xl bg-slate-700 px-4 py-3 rounded-md'>
            <NavLink to='/notes'>My notes</NavLink>
        </li>
    </ul>
</nav>
   
  )
}
