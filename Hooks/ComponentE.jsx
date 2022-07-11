import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
  return (
    <div className='nested'>
        <ComponentF />
    </div>
  )
}

export default ComponentE