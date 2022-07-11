import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='Home'>
      <h2>Home Page</h2>
      <button onClick={ ()=> navigate('order-summary')}>Place order</button>
    </div>
  )}

export default Home