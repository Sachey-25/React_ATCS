import React from 'react'

function Persons({person,key}) {
  return (
    <div>        
        <h2>
          {key} My name is :{person.name}.
            I am {person.age} yeards old. 
            I know {person.skill}
        </h2>  
    </div>
  )}

export default Persons