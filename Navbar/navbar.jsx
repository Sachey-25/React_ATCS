import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const navLinkStyles = ( { isActive }) => {
    return{
      fontWeight:isActive ? 'bold' : 'normal',
      TextDecoration:isActive ? 'none' : 'underline',
    }
  }
  return (
    <nav className='primary-nav'>
        <NavLink style={ navLinkStyles } to='/'> Home </NavLink>
        <NavLink style={ navLinkStyles } to='/about'> About us </NavLink>
        <NavLink style={ navLinkStyles } to='/blog'> Blog </NavLink>
        <NavLink style={ navLinkStyles } to='/products'> Products </NavLink>
        <NavLink style={ navLinkStyles } to='/database'> Database </NavLink>

    </nav>
  )}

export default Navbar