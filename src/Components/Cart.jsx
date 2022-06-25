import React from 'react'

export default function Cart(props) {
    const item = props.items


  return (
    <div className='card'>
        <div>
            <img className='w-100' src={item.img} alt="fruit" />
        </div>
        <div className='ml-4'>
            <h4 className='item_head'>{item.name}</h4>
            <p className='paragraph'>Price: {item.price}$</p>
        </div>
        <div className='text-center'>
            <button onClick={() => props.addToCart(item)} className='btn my-2'>add to cart</button>
        </div>
    </div>
  )
}
