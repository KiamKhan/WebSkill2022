import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='py-8 bg-black/60 fixed w-full z-50'>
        <div className='sm:container mx-auto flex'>
            <div className='basis-1/5'>
                <Link className='text-4xl text-white font-bold' to={'/'}>Logo</Link>
            </div>
            <div className='basis-4/5'>
                <ul className='flex justify-end'>
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to='/about'>About</Link></li>
                    <li><Link className='nav-link' to='/product'>Product</Link></li>
                    <li><Link className='nav-link' to='/blog'>Blog</Link></li>
                    <li><Link className='nav-link' to='/'>Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
