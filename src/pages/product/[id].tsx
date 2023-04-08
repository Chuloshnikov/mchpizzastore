import React, { useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import { pizza1, sizes } from "../../assets/index";


const pizza = {
    _id: 6,
            title: "GORGONZOLA",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus corporis sequi 
            nesciunt ab pariatur maiores quo aliquam quis, officiis, 
            consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
            price: [19.99, 22.99, 27.99],
            img: pizza1
}

const ProductDetails = () => {
    const [size, setSize] = useState(0)

  return (
    <div className='w-full bg-white text-gray-800 px-4'>
        <div className='max-w-contentContainer mx-auto flex items-center py-4 xs:flex-col lg:flex-row'>
            <div className='w-2/3 h-full xs:w-full flex items-center justify-center overflow-hidden relative'>
                <Image src={pizza.img} />
            </div>
            <div className='w-1/3 h-full xs:w-full flex flex-col justify-start gap-2 p-4'>
                <h3 className='font-bold text-2xl'>{pizza.title}</h3>
                <span className='text-red-400 font-semibold text-xl'>${pizza.price[0]}</span>
                <p className='font-medium text-base'>{pizza.description}</p>
                <h4 className='font-bold text-lg'>Choose the size</h4>
                <div className='flex gap-10'>
                    <div className='cursor-pointer'>
                        <Image src={sizes} width={40} height={40} alt="small"/>
                        <span className='relative -top-10 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Small
                        </span>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src={sizes} width={50} height={50} alt="medium"/>
                        <span className='relative -top-12 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Medium
                        </span>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src={sizes} width={60} height={60} alt="large"/>
                        <span className='relative -top-14 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Large
                        </span>
                    </div>
                </div>
                <h3 className='font-bold text-lg'>Choose additional ingredients</h3>
                <div className='flex items-center gap-1'>
                    <input 
                        className='w-3 h-3 w-4 h-4 w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded
                         focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600'
                        type="checkbox" 
                        id="double" 
                        name="double"
                        />
                    <label htmlFor='double' className='text-base font-medium'>Double Ingredients</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;

