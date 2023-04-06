import React from 'react';
import Image from "next/image";
import { eatpizza } from '../assets/index';
import { AiFillApple } from 'react-icons/ai';
import { RiGooglePlayFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='w-full bg-red-600 text-white pt-6 pb-8 flex items-center justify-between'>
      <div className='xs:hidden md:block width-[200p] height-[100px] ml-4'>
        <Image src={eatpizza} width={300} height={120} className=" object-contain"/>
      </div>
      <div className='flex flex-col items-center gap-3 max-w-[300px] -mb-12'>
        <p>More pizza more happiness. don't worry about being overweight, you deserve it.</p>
        <p><span>&copy;</span>MCH all rights reserved.</p>
      </div>
      <div className='xs:hidden md:block mr-4'>
        <div className='flex items-center'>
          <AiFillApple className='text-[65px]'/>
          <p className='text-[32px] font-bold'>App Store</p>
        </div>
        <div className='flex items-center'>
          <RiGooglePlayFill className='text-[65px]'/>
          <p className='text-[32px] font-bold'>Google Play</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;