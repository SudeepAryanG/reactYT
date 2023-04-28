// Initial State assigning to the values
const redux =require('redux')
const applyMiddleware=redux.applyMiddleware
const createStore=redux.createStore
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios')
// import { legacy_createStore as createStore } from 'redux';

// import  applyMiddleware  from 'redux';
// import  thunkMiddleware  from 'redux-thunk';
// import axios from 'axios';
const initailState={
    loading: false,
    users:[],
    error:''
}
const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'

// Action
const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess=users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//Assignning Reducer
const reducer=(state=initailState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest() )
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //Response.data is the array of users
            const users=response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            //error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())