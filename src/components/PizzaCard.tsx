import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = ({item}: any) => {
   return (
    <>
    <Link href={`/product/${item._id}`}
        className='px-2 py-2 shadow-bannerShadow text-yellow-950 hover:bg-yellow-400 duration-300'
        >
        <div className="w-full overflow-hidden p-1 flex justify-center">
            <Image src={item.img} 
            className="object-contain"
            width={300} height={200}
            alt="pizza"
            />
        </div>
        <div className="px-2 py-4 flex flex-col justify-center">
            <h3 className='text-xl font-semibold'>Pizza {item.title}</h3>
            <span className='text-red-500 text-lg font-semibold'>${parseFloat(item.prices[0]).toFixed(2)}</span>
        </div>
        <p className='text-sm font-semibold'>
          {item.description.substring(0, 80)}...
        </p>
    </Link>
    </>
  )
}

export default PizzaCard;