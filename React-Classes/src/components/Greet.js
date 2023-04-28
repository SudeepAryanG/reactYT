
import React from 'react';
const Greet=props=>{
    //Destructure Props
    const {name,heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            
        </div>
    )
}
export default Greet;