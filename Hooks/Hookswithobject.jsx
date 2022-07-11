import React, { useState } from 'react'

function Hookswithobject() {
    const [ name, setName ] = useState({ firstname:'', lastname:'' })
  return (
    <div className='hooks'>
        <form>
            <input 
            type="text" 
            value={name.firstname} 
            onChange={ event => setName({ ...name, firstname:event.target.value}) }/>

            <input type="text" 
            value={name.lastname} 
            onChange={ event =>setName({ ...name, lastname:event.target.value})} />

            <h2>My firstname is - {name.firstname}</h2>
            <h2>My lastname is - {name.lastname}</h2>
           <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
    )}

export default Hookswithobject