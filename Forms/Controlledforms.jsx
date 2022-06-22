import React, { Component } from 'react'

export class Controlledforms extends Component {
    constructor(props) {
      super(props)
    
      this.state = { value:'' }

         this.handleChange=this.handleChange.bind(this)
         this.handleSubmit =this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState( {value : event.target.value} )
    }
    handleSubmit(event){
        console.log("Server loaded successfully...!!!");
        alert('A name is submitted' + this.state.value);
        event.preventDefault();

    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
              Enter your name:
              <input 
              type="text" 
              value={this.state.value}
              onChange={this.handleChange}
              />
          </label>
          <input type="submit" value="Submit" />
          <br />
          <br />
          <br />
          <br />
      </form>
    )
  }
}

export default Controlledforms