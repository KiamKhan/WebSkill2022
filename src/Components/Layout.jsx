import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout(props) {
  return (
    <>
        <Navigation />
        <div>
            {props.children}
        </div>

        <Footer />
    </>
    
  )
}
