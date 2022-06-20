import React from 'react'

export default function CartItem(props) {
    const cartItem = props.cartItem
  return (
    <li className='link pl-6 text-start w-1/2 flex justify-between'>
        <span className='leading-[44px]'>
            <span>{cartItem.name}</span>
            <span className='mx-8'>Price: {cartItem.price}$</span>
            <span>Qty: {cartItem.qty}kg</span>
        </span>

        <span className='mr-3'>
            <button onClick={() => props.increament(cartItem.qty)} className='mini_btn'>+</button>
            <button onClick={() => props.decreament(cartItem.qty)} className='mini_btn mx-3'>-</button>
            <button onClick={() => props.removeItem(cartItem)} className='mini_btn'>Delete Item</button>
        </span>
    </li>
  )
}
