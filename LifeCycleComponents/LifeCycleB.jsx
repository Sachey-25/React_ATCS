import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name:'Sachin'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    
    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, preState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
      console.log('LifecycleB render')
    return (
      <div className='container'>
         <h1>LifecycleB - Class Component</h1>
      </div>
    )}
}
export default LifecycleB