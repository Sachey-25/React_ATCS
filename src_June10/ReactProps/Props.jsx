import React from 'react'

const Greet = (props) => {
    console.log(props);
    return(
        <div className='PropsApp'>
            <h1> Hello {props.name} Style : {props.StyleName} </h1>
            {props.children}
        </div>
    )}
export default Greet
