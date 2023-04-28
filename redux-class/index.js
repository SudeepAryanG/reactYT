// const redux=require('redux')
import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
const logger =reduxLogger.createLogger()
import { applyMiddleware } from 'redux';
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
//Action
function buyCake(){
    return {
        type: BUY_CAKE,
        info:'First redux action'
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREAM
    }
}
//(previousState,action)=>newState
// const initailState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }
const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    numOfIceCreams:20
}
// const reducer=(state=initailState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM:return{
//             ...state,
//             numOfIceCreams:state.numOfIceCreams-1
//         }
//         default:return state
//     }
// }
const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default:return state
    }
}
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state',store.getState())
const unsubcribe=store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubcribe()