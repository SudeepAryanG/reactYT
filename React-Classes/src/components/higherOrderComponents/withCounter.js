import React from 'react';

const withCounter=(WrappedComponent,incrementCount)=>{
    class withCounter extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        incrementValue=() => {
            this.setState(prevState=>{
                return {count:prevState.count+incrementCount}
            })
        }
        render() {
          console.log(this.props.name)
          return (
            <WrappedComponent 
            count={this.state.count} 
            incrementValue={this.incrementValue}
            {...this.props}/>
          )
        }
      }return withCounter
      
}



export default withCounter