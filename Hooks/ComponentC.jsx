import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
  return (
    <div classname='nested'>
        <ComponentE />
    </div>
  )
}

export default ComponentC