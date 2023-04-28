import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         textarea:'',
         topic:'React'
      }
    }
    handelUsrnameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handelTextareaChange=(event)=>{
        this.setState({
            textarea:event.target.value
        })
    }
    handelSelectChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handelSubmitChange=()=>{
        alert(`${this.state.username} ${this.state.textarea} ${this.state.topic}`)
    }
  render() {
    return (
      <form onSubmit={this.handelSubmitChange}>
        <div>
            <label>Username</label>
            <input type="text" onChange={this.handelUsrnameChange}/>
        </div>
        <div>
            <label>Text Area</label>
            <textarea type="text" onChange={this.handelTextareaChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select  onChange={this.handelSelectChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vui">Vui</option>
            </select>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default Form