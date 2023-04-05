import React, { useState } from 'react';
import { SlCallEnd } from 'react-icons/sl';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../assets/icons/logo.gif';
import Link from 'next/link';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);


  return (
    <div className='w-full bg-yellow-400 text-yellow-950 px-4 py-4 sticky top-0 z-50'>
      <div className='max-w-container mx-auto flex justify-between items-center'>
          <div>
          <a className='flex items-center gap-2' href='tel:+38012345678' >
            <div className='rounded-full p-2 bg-white'>
              <SlCallEnd className='text-3xl text-red-500'/>
            </div>
            <div className='xs:hidden mdl:block'>
              <p className='text-sm font-semibold'>012 345 678</p>
              <p className='text-lg font-semibold'>Order Now!</p>
            </div>
          </a>
          </div>
          <div>
            <nav>
                <ul className='flex items-center xs:gap-2 mdl:gap-4 font-medium'>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/">
                        Home
                    </Link>
                    </li>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <a className='xs:hidden mdl:block' href="#products">
                                        
                        Products
                    </a>
                    </li>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/">
                        Menu
                    </Link>
                    </li>
                 <li>
                  <Link href="/">
                    <Image src={logo} className="border-white border-[3px]" width={80} height={80}/>
                  </Link>
                  </li> 
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/">
                        Events
                    </Link>
                  </li>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                  <Link className='xs:hidden mdl:block' href="/">
                      Blog
                  </Link>
                  </li>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/">
                        Contacts
                    </Link>
                  </li>
                </ul>
            </nav>
          </div>
          <div className='flex items-center gap-2'>
            <div className='mt-4'>
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
            <div className='xs:block mdl:hidden' onClick={() => {
              setOpenMenu(!openMenu)
            }}>
                {openMenu ? <AiOutlineClose className='text-yellow-950 w-10 h-10'/>
                  : <GiHamburgerMenu className='text-yellow-950 w-10 h-10'/> 
                  }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;