import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component {
  render() {
    const {count,incrementValue}=this.props
    return (
      <div onMouseMove={incrementValue}>{this.props.name}HoverCounter {count} times</div>
    )
  }
}

export default withCounter(HoverCounter,10)