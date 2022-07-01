import React, {useState, useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'

export default function CartCount() {
    const cartContext = useContext(CartContext)

    const [sideMenu, setsideMenu] = useState(false)

    const showSlideMenu = () =>{
        setsideMenu(true)
    }

    const closeSideMenu = () =>{
        setsideMenu(false)
    }

  return (
        <div className='fixed top-8 right-8 text-white z-50'>
            <button onClick={showSlideMenu}>Cart: {cartContext.cart.length}</button>
            <div className={sideMenu ? 'side_menu active' : 'side_menu'}>
                <div className='flex justify-around'>
                    <span className='pt-8 pl-8'>Cart: {cartContext.cart.length}</span>
                    <span className='pt-8 pl-8'>Total: </span>
                    <button onClick={closeSideMenu} className='pt-8 pl-8'>Close</button>
                </div>
                <div>
                    <ul className='mt-8'>
                        {cartContext.cart.map(cartItem =>{
                            return(
                                <CartItem 
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    removeItem={(id) => cartContext.removeItem(id)}
                                    addToCart={(product) => cartContext.insertToCart(product)}
                                    decreament={(product) => cartContext.decreament(product)}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
  )
}