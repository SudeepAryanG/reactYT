import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Sudeep'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    } 
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate')
    }
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB