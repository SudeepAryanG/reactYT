import React ,{useReducer}from 'react'
let initialValue={
    firstCounter:0,
    secondCounter:10
};

const reducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return {...state, firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state, firstCounter:state.firstCounter-action.value}
        case 'increment2':
            return {...state, secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return {...state, secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initialValue
        default:
            return state        
    }
}

function CounterTwo() {
    const[count,setCount]=useReducer(reducer,initialValue)
  return (
    <div>
        <div>Count - {count.firstCounter} </div>
        <div>Count-{count.secondCounter}</div>
        <button onClick={()=>setCount({type: 'increment' ,value:1})}>Increment</button>
        <button onClick={()=>setCount({type: 'decrement',value:1})}>Decrement</button>
        <button onClick={()=>setCount({type: 'increment' ,value:5})}>Increment 5</button>
        <button onClick={()=>setCount({type: 'decrement',value:5})}>Decrement 5</button>
        <div>
        <button onClick={()=>setCount({type: 'increment2' ,value:1})}>Increment Counter 2</button>
        <button onClick={()=>setCount({type: 'decrement2',value:1})}>Decrement Counter 2</button>
        
        </div>
        <button onClick={()=>setCount({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo