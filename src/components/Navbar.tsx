import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-white shadow-md p-4'>
      <h1 className='text-red-700 text-2xl font-bold'>Pizza Life</h1>
      <ul className='flex gap-6 text-lg font-medium'>
      <li><Link href={'/'}>Home</Link></li>
      
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
        <li><Link href={'/order'} className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'>Order Now</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
