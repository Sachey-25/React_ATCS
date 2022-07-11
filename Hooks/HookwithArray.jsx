import React, { useState } from 'react'

function HookwithArray() {
    const [ items, setItems ] = useState([])

    const addItem =()=>{
        setItems( [ ...items, {
            id:items.legth,
            value: Math.floor(Math.random()*10+1)
        }] )
    }

  return (
    <div className='object'>
        <button onClick={addItem}>Add a number </button>
        <ul>
            {items.map( item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookwithArray