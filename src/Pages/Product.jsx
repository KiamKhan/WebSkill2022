import React, {useState} from 'react'
import Cart from '../Components/Cart'
import CartItem from '../Components/CartItem'
import Layout from '../Components/Layout'

export default function Product() {
    const [cartitem, setcartitem] = useState([
        {id: 1, name: 'Strawberry', price: 100, img: '/images/cart_1.jpg'},
        {id: 2, name: 'Mango', price: 50, img: '/images/cart_2.jpg'},
        {id: 3, name: 'Orange', price: 70, img: '/images/cart_3.jpg'},
        {id: 4, name: 'Jackfruit', price: 150, img: '/images/cart_4.jpg'},
        {id: 5, name: 'Capsicum', price: 60, img: '/images/cart_5.jpg'},
        {id: 6, name: 'Tomato', price: 90, img: '/images/cart_6.jpg'},
        {id: 7, name: 'Green Peas', price: 40, img: '/images/cart_7.jpg'},
        {id: 8, name: 'Carrot', price: 110, img: '/images/cart_8.jpg'},
    ])

    const [cart, setcart] = useState([])

    const insertToCart = product =>{
        // is the p exist
        // if exist update qty
        // if not exist add p

        let newItem = true;

        const existItem = cart.map(item =>{
            if(item.id === product.id){
                item.qty = item.qty + 1
                newItem = false
            }
            return item
        })

        // if(cart.length === 0){
        //     newItem = true               //we can skip this line 
        // }

        if(newItem){
            product.qty = 1
            setcart([...cart, product]) // if newItem true check this
        } else{
            setcart([...existItem]) // if newItem false check this
        }
    }

    const removeItem = id =>{
        const updateCart = cart.filter(item => item !== id)
            setcart([...updateCart])

            console.log(updateCart)
    }

    const decreament = product =>{
        let newItem = true;

        const existItem = cart.map(item =>{
            if(item.id === product.id){
                if(item.qty === 0){
                    item.qty = 0
                } else{
                    item.qty = item.qty - 1
                }
                newItem = false
            }
            return item
        })

        if(newItem){
            product.qty = 1
            setcart([...cart, product]) // if true check this
        } else{
            setcart([...existItem]) // if false check this
        }
    }

  return (
    <Layout>
        <section className='justify-center items-center section-gap pt-28'>
            <div className='sm:container mx-auto'>
                <div>
                    <h1 className='main_head text-black mb-7'>Our products</h1>
                </div>

                <div>
                    <h3 className='inner-head'>your items: {cart.length}</h3>
                    <ul>
                       {cart.map(cartItem =>{
                            return(
                                <CartItem 
                                    key={cartItem.id}
                                    cartItem={cartItem}
                                    removeItem={(id) => removeItem(id)}
                                    addToCart={(product) => insertToCart(product)}
                                    decreament={(product) => decreament(product)}
                                />
                            )
                       })}
                    </ul>
                </div>

                <div className='grid grid-cols-12 gap-6'>
                    {cartitem.map(item =>{
                        return(
                            <Cart 
                                key={item.id} 
                                items={item}
                                addToCart={(product) => insertToCart(product)} // also for increament
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    </Layout>
  )
}
