import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
       <img src='https://png.pngtree.com/element_our/png/20181113/clapperboard-film-logo-icon-design-template-vector-isolated-png_236642.jpg'
       alt='logo'
        className='w-[50px]'
       />

     <Link to='/' className='text-blue-500 text-4xl'>Home</Link>

     <Link to='/watchlist'  className='text-blue-500 text-4xl'>Watchlist</Link>

    </div>
  )
}

export default Navbar