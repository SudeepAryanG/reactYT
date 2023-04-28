import React ,{useReducer}from 'react'
let initialValue=0;

const reducer=(state,action)=>{
    switch (action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialValue
        default:
            return state        
    }
}

function CounterOne() {
    const[count,setCount]=useReducer(reducer,initialValue)
  return (
    <div>
        Count - {count} 
        <button onClick={()=>setCount('increment')}>Increment</button>
        <button onClick={()=>setCount('decrement')}>Decrement</button>
        <button onClick={()=>setCount('reset')}>Reset</button>
    </div>
  )
}

export default CounterOne