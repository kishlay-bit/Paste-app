import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 gap-1.5 bg-gray-800 text-white place-content-evenly'>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/pastes">Pastes</NavLink>

    </div>
  )
}

export default Navbar
