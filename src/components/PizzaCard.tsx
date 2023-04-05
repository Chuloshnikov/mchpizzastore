import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {pizza1} from '../assets/index';

const PizzaCard = () => {
  return (
    <Link href="/" className='px-2 py-2 shadow-bannerShadow text-yellow-950 hover:bg-yellow-400 duration-300'>
        <div className="w-full overflow-hidden p-1">
            <Image src={pizza1} 
            className="object-contain"
            alt="pizza"
            />
        </div>
        <div className="px-2 py-4 flex flex-col justify-center">
            <h3 className='text-xl font-semibold'>Esperance pizza</h3>
            <span className='text-red-500 text-lg font-semibold'>$19.99</span>
        </div>
        <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus corporis sequi 
            nesciunt ab pariatur maiores quo aliquam quis, officiis, 
            consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?
        </p>
    </Link>
  )
}

export default PizzaCard;