import React, { Component } from 'react'

class Classcounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0,
         name:"react"
      }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
          console.log('Updating document title')
        }
        document.title=`Clicked ${this.state.count} times`
    }
  render() {
    return (
      <div className='app'>
          <input type="text" 
          value={this.state.name} 
          onChange= { event => {this.setState({name:event.target.value})}
        }/>
          <button onClick={ () => this.setState( {count: this.state.count+1 })}>
              click {this.state.count} times
          </button>
      </div>
    )}
}

export default Classcounter