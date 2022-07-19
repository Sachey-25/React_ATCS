import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='container'>
        <div className='app'>
            <input type='search' placeholder="Search products" />
        </div>
        <nav>
            <Link to='/featured'> Featured </Link>
            <Link to='/new'>New</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Products