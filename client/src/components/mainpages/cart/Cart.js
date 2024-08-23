import React from 'react'
import { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'


const Cart = () => {
  const state=useContext(GlobalState)
  const cart=state.userAPI.cart;
  if(cart.length===0){
    return <h2 style={{textAlign:"center",fontSize:"5rem"}}>Cart is Empty</h2>
  }
  return (
    <div>Cart</div>
  )
}

export default Cart