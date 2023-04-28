import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {
  render() {
    const {count,incrementValue}=this.props
    return (
      <button onClick={incrementValue}>{this.props.name}Click {count} times</button>
    )
  }
}

export default withCounter(ClickCounter,5)