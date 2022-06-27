import React, { useState, createContext } from "react";

export const CartContext = createContext();


export default function CartContextProvider(props) {
    const [cart, setcart] = useState([])

    const insertToCart = product =>{
        // is the p exist
        // if exist update qty
        // if not exist add p

        let newItem = true;

        const existItem = cart.map(items =>{
            if(items.id === product.id){
                items.qty = items.qty + 1
                newItem = false
            }
            return items
        })

        if(newItem){
            product.qty = 1
            setcart([...cart, product]) // if newItem true check this
        } else{
            // for checking price update
            existItem.forEach(item =>{
                console.log(item.price * item.qty)
            })
            
            setcart([...existItem]) // if newItem false check this
        }
    }

    const removeItem = id =>{
        const updateCart = cart.filter(item => item !== id)
            setcart([...updateCart])
    }

    const decreament = product =>{

        const existItem = cart.filter(item => {
            if(item.id === product.id){
                if(item.qty > 1){
                    item.qty = item.qty - 1
                    return item
                }
            } else{
                return item
            }
        })

        setcart([...existItem])
    }

  return (
    <CartContext.Provider value={
        {
            cart,
            insertToCart,
            removeItem,
            decreament,
        }
    }>
        {props.children}
    </CartContext.Provider>
  )
}