import React from 'react';
import { SlCallEnd } from 'react-icons/sl';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import Image from 'next/image';
import logo from '../assets/icons/logo.gif';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='w-full bg-yellow-400 text-yellow-950 px-4 py-4 sticky top-0 z-50'>
      <div className='max-w-container mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='rounded-full p-2 bg-white'>
              <SlCallEnd className='text-3xl text-red-500'/>
            </div>
            <div>
              <a href='tel:+38012345678' className='text-sm font-semibold'>012 345 678</a>
              <p className='text-lg font-semibold'>Order Now!</p>
            </div>
          </div>
          <div>
            <nav>
                <ul className='flex items-center gap-4'>
                  <li>Homepage</li>
                  <li>Products</li>
                  <li>Menu</li>
                  <Image src={logo} className="border-white border-[2px]" width={80} height={80}/>
                  <li>Events</li>
                  <li>Blog</li>
                  <li>Contacts</li>
                </ul>
            </nav>
          </div>
          <div>
            <div>
              <Link  href="/cart" passHref>
                  <MdOutlineShoppingBasket className='text-yellow-950 w-10 h-10'/>
                  <span className='relative -top-10 left-6 w-5 h-5 bg-red-500
                    text-white text-xs rounded-full
                    flex flex-col justify-center items-center z-10'
                    >
                      0
                  </span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;