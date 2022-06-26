import React from 'react'

export default function CartItem(props) {
    const cartItem = props.cartItem
  return (
    <li className='bg-white text-black mb-4 py-4'>
        <div className='flex justify-evenly text-xl mb-4'>
            <p>{cartItem.name}</p>
            <p>Price: {cartItem.price}$</p>
            <p>Qty: {cartItem.qty}</p>
        </div>
        <div className='text-center'>
            <button className='cartItem_btn' onClick={() => props.addToCart(cartItem)} >+</button>
            <button className='cartItem_btn mx-4' onClick={() => props.decreament(cartItem)} >-</button>
            <button className='cartItem_btn' onClick={() => props.removeItem(cartItem)} >Delete Item</button>
        </div>
    </li>
  )
}

