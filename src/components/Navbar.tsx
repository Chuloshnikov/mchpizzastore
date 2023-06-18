import React, { useState, useRef, useEffect } from 'react';
import { SlCallEnd } from 'react-icons/sl';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../assets/icons/logo.gif';
import Link from 'next/link';

import { useSelector } from 'react-redux';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const quantity = useSelector(state => state.cart.quantity);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  }

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
                    <Link className='xs:hidden mdl:block' href="/menu">
                        Menu
                    </Link>
                    </li>
                 <li>
                  <Link href="/">
                    <Image src={logo} className="border-white border-[3px]" width={80} height={80} alt="logo"/>
                  </Link>
                  </li> 
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/events">
                        Events
                    </Link>
                  </li>
                  <li className='hover:text-white hover:scale-105 focus:text-white focusLscale-105 duration-300'>
                    <Link className='xs:hidden mdl:block' href="/contacts">
                        Contacts
                    </Link>
                  </li>
                </ul>
            </nav>
          </div>
          <div className='flex items-center justify-center gap-2 min-w-[150px]'>
            <div className='mt-4'>
              <Link  href="/cart" passHref>
                  <MdOutlineShoppingBasket className='text-yellow-950 w-10 h-10'/>
                  <span className='relative -top-10 left-6 w-5 h-5 bg-red-500
                    text-white text-xs rounded-full
                    flex flex-col justify-center items-center z-10'
                    >
                      {quantity}
                  </span>
              </Link>
            </div>
            <div className='xs:block mdl:hidden'>
                {openMenu ? (<div 
                                className='bg-yellow-400 absolute top-5 right-5
                                flex flex-col z-50 py-5 px-5 text-yellow-950 shadow-bannerShadow'>
                                  <button onClick={toogleMenu}>
                                    <AiOutlineClose className='text-yellow-950 w-10 h-10 relative ml-20'/>
                                  </button>
                                <nav className='flex flex-col gap-20 text-2xl font-semibold'>
                                    <ul>
                                      <li 
                                      onClick={toogleMenu}
                                      className='hover:text-white hover:scale-105 focus:text-white mt-5 duration-300'>
                                        <Link href="/">
                                          Home
                                        </Link>
                                      </li>
                                      <li
                                      onClick={toogleMenu}
                                      className='hover:text-white hover:scale-105 focus:text-white mt-5  duration-300'>
                                        <Link  href="/menu">
                                          Menu
                                        </Link>
                                      </li>
                                      <li 
                                      onClick={toogleMenu}
                                      className='hover:text-white hover:scale-105 focus:text-white mt-5 duration-300'>
                                        <Link  href="/events">
                                          Events
                                        </Link>
                                      </li>
                                      <li 
                                      onClick={toogleMenu}
                                      className='hover:text-white hover:scale-105 focus:text-white mt-5 mb-5 duration-300'>
                                          <Link href="/contacts">
                                            Contacts
                                          </Link>
                                      </li>
                                    </ul>
                                </nav>
                            </div>
                            ) : (<button className='mt-1.5' onClick={toogleMenu}>
                                    <GiHamburgerMenu className='text-yellow-950 w-10 h-10'/>
                                </button>)
                  }
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;