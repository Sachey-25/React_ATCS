import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../Navigation/auth'

function Navbar() {

  const navLinkStyles = ( { isActive }) => {
    return{
      fontWeight:isActive ? 'bold' : 'normal',
      TextDecoration:isActive ? 'none' : 'underline',
    }
  }
  const auth=useAuth();

  return (
    <nav className='primary-nav'>
        <NavLink style={ navLinkStyles } to='/'> Home </NavLink>
        <NavLink style={ navLinkStyles } to='/about'> About us </NavLink>
        <NavLink style={ navLinkStyles } to='/blog'> Blog </NavLink>
        <NavLink style={ navLinkStyles } to='/products'> Products </NavLink>
        <NavLink style={ navLinkStyles } to='/database'> Database </NavLink>
        <NavLink style={ navLinkStyles } to='/profile'> Profile </NavLink>
        {
          !auth.user &&(
            <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
          )}
    </nav>
  )}

export default Navbar