import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
      //4th approach
      return(
          this.state.isLoggedIn && <div>Welcome again and again Mr.Sachin </div>
      )
        //3rd approach
      //expression ? 1st condi:2nd condi
      return(       
          this.state.isLoggedIn ? (
              <div>Welcome again Mr. Sachin </div>
          ):(
              <div>Welcome Mr.Stranger</div>
          )
      ) 

      //2nd approach
      let message
      if(this.state.isLoggedIn){
          message= <div>Welcome again Sachin</div>
      }else{
          message= <div>Welcome Stranger..</div>
      }
      return(
          <div>{message}</div>
      )
      //true -- 1st approach 
      if(this.state.isLoggedIn){
          return(
              <div>Welcome Sachin</div>
          )
      }else{
          return(
              <div>Welcome Stranger</div>
          )
      }
    }
}

export default UserGreeting