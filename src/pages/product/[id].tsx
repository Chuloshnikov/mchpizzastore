import React, { useState,  useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import { sizes } from "../../assets/index";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartSlice';
import axios from 'axios';




const ProductDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [product, setProduct] = useState<any>({});
    const [isLoading, setLoading] = useState(false);
    const {id} = router.query;
    
    // product manipulation
    const [price, setPrice] = useState<Number>(0);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([]);
    const [quantity, setQuantiny] = useState(1);

    useEffect(() => {
        if (!id) {
          return;
        }
        setLoading(true);
        axios.get(`/api/productdata?id=${id}`).then(response => {
          setProduct(response.data);
          console.log(response.data);
          setPrice(response.data.prices[0]);
        })
        setLoading(false);
      },[id]);
    
      const _id = product._id;

      const changePrice = (number) => {
        setPrice(price + number);
      };

      const handleSize = (sizeIndex) => {
        const difference = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
      };

      const handleChange = (e, option) => {
        const checked = e.target.checked;
    
        if (checked) {
          changePrice(option.price);
          setExtras((prev) => [...prev, option]);
        } else {
          changePrice(-option.price);
          setExtras(extras.filter((extra) => extra._id !== option._id));
        }
      };



  return (
    <div className='w-full bg-white text-gray-800 px-4'>
        <div className='max-w-contentContainer mx-auto flex items-center py-4 xs:flex-col lg:flex-row'>
            <div className='w-2/3 h-full xs:w-full flex items-center justify-center overflow-hidden relative'>
                <Image src={product.img} width={700} height={500}/>
            </div>
            <div className='w-1/3 h-full xs:w-full flex flex-col justify-start gap-2 p-4'>
                <h3 className='font-bold text-2xl'>{product.title}</h3>
                <span className='text-red-400 font-semibold text-xl'>${price}</span>
                <p className='font-medium text-base'>{product.description}</p>
                <h4 className='font-bold text-lg'>Choose the size</h4>
                <div className='flex gap-10'>
                    <div className='cursor-pointer' onClick={() => handleSize(0)}>
                        <Image src={sizes} width={40} height={40} alt="small"/>
                        <span className='relative -top-10 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Small
                        </span>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleSize(1)}>
                        <Image src={sizes} width={50} height={50} alt="medium"/>
                        <span className='relative -top-12 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Medium
                        </span>
                    </div>
                    <div className='cursor-pointer' onClick={() => handleSize(2)}>
                        <Image src={sizes} width={60} height={60} alt="large"/>
                        <span className='relative -top-14 left-6 bg-[#098281]
                            text-white text-xs rounded-lg
                            flex flex-col justify-center items-center z-10'>
                            Large
                        </span>
                    </div>
                </div>
                <h3 className='font-bold text-lg'>Choose additional ingredients</h3>
                <div className='flex items-center gap-2'>
                    {product?.extraOptions?.map((option, index) => ( 
                        <div key={index} className='flex text-center items-center gap-1'>
                            <input 
                                className='w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded
                            focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2
                            dark:bg-gray-700 dark:border-gray-600 mt-2'
                                type="checkbox" 
                                id={option.text} 
                                name={option.text}
                                onChange={(e) => handleChange(e, option)}
                            />
                            <label htmlFor='double' className='text-base font-medium'>{option.text}</label>
                        </div>
                    ))}
                    
                    
                </div>
                <h3 className='font-bold text-lg'>Add to cart</h3>
                <div className='flex gap-2'>
                    <input 
                    onChange={(e) => setQuantiny(e.target.value)}
                    defaultValue={1} 
                    className='bg-teal-50 border border-teal-600 text-green-900
                     dark:text-teal-400 placeholder-teal-700 dark:placeholder-teal-500 
                     text-sm focus:ring-teal-500 focus:border-teal-500 block w-2/6 p-2.5
                      dark:bg-gray-700 dark:border-teal-500' 
                      type="number" />
                    <button className='bg-red-600 text-sm p-2.5 text-white font-semibold
                     hover:bg-red-800 duration-300 mb-2'
                     
                     >
                        Add to Cart
                     </button>
                </div>
            </div>
        </div>
    </div>
  )
}



export default ProductDetails;

