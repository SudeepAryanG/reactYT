import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        <button onClick={()=>props.greetHandler('Aryan')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent