import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
      super(props)
      this.state = {
          message:'Hello Folks! Good morning'  
      }
     // this.clickHandler=this.clickHandler.bind(this)
    }
    onClickHandlerforClassCom(){
        this.setState({
            message:'Have a lovely day'
        })
        console.log(this)
    }
    clickHandlerAnother(){
        this.setState({
            message:'Same to you!'
        })
        console.log(this)
    }
    clickHanderlerEvent = () =>{
        this.setState({
            message:'GoodBye!'
        })
        console.log(this)
    }
    
  render() {
    return (
      <div className='event'>

          <h2> {this.state.message}</h2>

          <button onClick={this.onClickHandlerforClassCom}>ClickMe</button>

          <button onClick={ () => this.clickHandlerAnother()}> ClickMeToo </button>

          <button onClick={ this.clickHanderlerEvent}> ClickMeToo </button>

      </div>
    )}
}
