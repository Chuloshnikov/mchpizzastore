"use client"
import React from 'react';
import Image from "next/image";
import { eatpizza } from '../assets/index';
import { AiFillApple } from 'react-icons/ai';
import { RiGooglePlayFill } from 'react-icons/ri';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full xs:h-[150px]  md:h-[220px] bg-red-600 text-white'>
      <div className=' max-w-container mx-auto pt-6 pb-8 flex text-center items-center justify-between'>
        <div className='xs:hidden md:block width-[200px] height-[120px] ml-4'>
          <Image src={eatpizza} width={220} height={120} alt="eat pizza"/>
        </div>
        <div className='xs:mx-auto flex flex-col items-center gap-3 max-w-[300px] -mb-12'>
          <p>More pizza more happiness. don&apos;t worry about being overweight, you deserve it.</p>
          <p><span>&copy;</span>MCH all rights reserved.</p>
        </div>
        <div className='xs:hidden md:flex flex-col gap-2 mr-4 '>
          <div className='p-2 bg-black rounded-lg'>
            <Link className="flex items-center justify-center" href="https://www.apple.com/">
              <AiFillApple className='text-[55px]'/>
              <div>
                <p className='text-[12px] font-bold'>Download on the</p>
                <p className='text-[18px] font-bold'>App Store</p>
              </div>
            </Link>
          </div>
          <div className='bg-black p-2 rounded-lg'>
            <Link className='flex items-center justify-center' href="https://play.google.com/store/">
              <RiGooglePlayFill className='text-[55px]'/>
              <div>
                <p className='text-[12px] text-left font-bold'>GET IT ON</p>
                <p className='text-[18px] font-bold'>Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;