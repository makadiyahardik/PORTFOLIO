import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
  <>
  <div className='header'> 
    <div className='links'>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/About'>About</NavLink></li> */}
        <li><NavLink to='/Project'>Projects</NavLink></li>
      </ul>
    </div>
    </div>
  </>
  )
}

export default Header