import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export const Products = () => {
  return (
    <>    
    <div>
        <input type='search'  placeholder='Search Products'/>
    </div>
    <nav>
        <Link to='featured'>Feature</Link>
        <Link to='newProduct'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
