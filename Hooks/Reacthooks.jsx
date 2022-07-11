import React, { useState } from 'react'

function ReactHook() {
  //Declare a new state variable, which we will call 'count'
  const [ count, setCount ] = useState(0); // button click count 0 // 1 // 2 //3 //4
  
  console.log(count)
  return (
    
    <div className="hooks">
        <p>You clicked {count} of times on this button </p>
        <button onClick={ () => setCount(count+1)}>Increment</button>
        <button onClick={ () => setCount(count-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>reset</button>  
    </div>
  )
}
export default ReactHook