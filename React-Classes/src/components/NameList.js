import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Sudeep','Aryan','Tamil','Mani']
    const persons=[
        {
            id:1,
            name:'Sudeep',
            age:21,
            skill:'React'
        },
        {
            id:2,
            name:'Aryan',
            age:21,
            skill:'React'
        },
        {
            id:3,
            name:'Tamil',
            age:21,
            skill:'Angular'
        },
        {
            id:4,
            name:'Mani',
            age:21,
            skill:'Angular'
        }
    ]
    const nameList=names.map((name,index)=><h2>{index} {name}</h2>)
  return <div>{nameList}</div>
  
}

export default NameList