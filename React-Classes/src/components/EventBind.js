import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
        }
        //3rd method keep bind in the constructor
        //this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    //     console.log(this)
    // }
    //4th method using arrow function  
    clickHandler=()=>{
        this.setState({
            message:'Goodbye!'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st method <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2nd method <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default EventBind