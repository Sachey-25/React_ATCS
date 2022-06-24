import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:'Sachin'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=() =>{
        this.setState({
            name:'Techmasters'
        })
    }

  render() {
      console.log('LifecycleA render')
    return (
      <div className='container'>
         <h1>LifecycleA - Class Component</h1>
         <button onClick={this.changeState}>Change state</button>
         <LifecycleB />
      </div>
    )}
}
export default LifecycleA