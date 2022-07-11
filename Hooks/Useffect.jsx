import React, { useEffect, useState } from 'react'

function Useffect() {
    const [count, setCount]=useState(0);

    useEffect( () => {
        document.title=`You clicked ${count} times`
        console.log({count})
    })

  return (
      
    <div className='app'>
        <button onClick={ () => setCount(count+1)}>Click {count} times </button>

    </div>
  )}

export default Useffect