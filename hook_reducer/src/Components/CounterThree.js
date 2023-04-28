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

function CounterThree() {
    const[count,setCount]=useReducer(reducer,initialValue)
    const[count2,setCount2]=useReducer(reducer,initialValue)
  return (
    <div>
        <div>
            Count - {count}
        </div> 
        <button onClick={()=>setCount('increment')}>Increment</button>
        <button onClick={()=>setCount('decrement')}>Decrement</button>
        <button onClick={()=>setCount('reset')}>Reset</button>
        <div>
            <div>Count - {count2} </div>
            <button onClick={()=>setCount2('increment')}>Increment</button>
            <button onClick={()=>setCount2('decrement')}>Decrement</button>
            <button onClick={()=>setCount2('reset')}>Reset</button>
        </div>
    </div>
    
    
  )
}

export default CounterThree