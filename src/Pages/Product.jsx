import React, {useState, useContext} from 'react'
import Cart from '../Components/Cart'
import { CartContext } from '../Context/CartContext'
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

    const cartContext = useContext(CartContext)

    return (
      <Layout>
          <section className='justify-center items-center section-gap pt-28'>
              <div className='sm:container mx-auto'>
                  <div>
                      <h1 className='main_head text-black mb-7'>Our products</h1>
                  </div>
  
                  <div className='grid grid-cols-12 gap-6'>
                      {cartitem.map(item =>{
                          return(
                              <Cart 
                                  key={item.id} 
                                  items={item}
                                  addToCart={(product) => cartContext.insertToCart(product)} // also for increament
                              />
                          )
                      })}
                  </div>
              </div>
          </section>
      </Layout>
    )
  }
