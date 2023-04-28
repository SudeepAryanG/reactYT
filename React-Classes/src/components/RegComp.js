import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Reg components render')
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComp