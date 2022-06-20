import React from 'react'

export default function CartItem(props) {
    const cartItem = props.cartItem
  return (
    <li className='link pl-6 text-start w-1/2 flex justify-between'>
        <span className='leading-[48px]'>
            <span>{cartItem.name}</span>
            <span className='mx-8'>Price: {cartItem.price}$</span>
            <span>Qty: {cartItem.qty}kg</span>
        </span>

        <span className=''>
            <button onClick={() => props.increament(cartItem.qty)} className='btn mt-0'>Increament</button>
            <button onClick={() => props.decreament(cartItem.qty)} className='btn mt-0 mx-4'>Decreament</button>
            <button onClick={() => props.removeItem(cartItem)} className='btn mt-0'>Delete Item</button>
        </span>
    </li>
  )
}
