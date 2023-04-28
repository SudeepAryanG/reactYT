import React from 'react'
import { useNavigate } from 'react-router-dom'
export const OrderSummary = () => {
  let navigate=useNavigate()
  return (
    <>
      <div>Order Conformed !</div>
      <button onClick={()=>navigate(-1)} >Go back</button>
    </>

  )
}
