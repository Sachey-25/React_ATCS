import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummery = () => {
    const navigate=useNavigate();
  return (
    <div className='app'>
        <div>
            <h2>Order-summery page</h2>
            Order confirmed!      
        </div>
            <button onClick={ () => navigate(-1)}> Go Home</button>
    </div>
  )}

export default OrderSummery