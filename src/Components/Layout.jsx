import React from 'react'
import CartCount from './CartCont'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout(props) {
  return (
    <>
        <CartCount/>
        <Navigation />
            {props.children}
        <Footer />
    </>
    
  )
}
