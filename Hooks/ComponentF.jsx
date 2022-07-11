import React from 'react'
import { UserContext } from '../App'
import { WebContext } from '../App'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            { user=>{
                    return(
                        <WebContext.Consumer>
                            {WebContext =>{
                                return(
                                    <div> 
                                        User context value is {user},
                                        Web context value is {WebContext}
                                    </div>
                                )}}
                        </WebContext.Consumer>
                    )}}
        </UserContext.Consumer>
    </div>
  )}

export default ComponentF