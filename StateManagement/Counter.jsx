import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0 // Initial state 
      }
    }
    Increment(){
        this.setState({
           count:this.state.count + 1
        })
        console.log(this.state.count)
    }
    // What if I want to the output incrementing five at a time !

    // 1 + button = 5 
    // 5 + button = 10 
    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    Decrement(){
        this.setState({
           count:this.state.count - 1
        })
        console.log(this.state.count)
    }
    Reset(){
        this.setState({
           count:this.state.count
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <div className='count'>
          <div className='display'>
              Count - {this.state.count}
          </div>
          <button onClick={ () => this.Increment()} > Increment </button>
          <button onClick={ () => this.Decrement()} > Decrement </button>
          <button onClick={ () => this.Reset()} > Reset </button>
      </div>

    )}
}
export default Counter
