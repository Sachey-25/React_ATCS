import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         parentName:"JavaScript"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        // Hello JavaScript
        alert(`Hello ${this.state.parentName}`)
        console.log("Component is executed")
    }
    
  render() {
    return (
      <div>
             <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )}
}

export default ParentComponent