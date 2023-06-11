import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import Link from 'next/link';
import React, {useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("/api/productdata").then(response => {
            setProducts(response.data);
        }, []);
        
    });
    console.log(products);

  return (
    <AdminLayout>
        <div className='flex flex-col gap-3'>
            <h2 className='text-yellow-950 text-xl font-semibold'>Products mamagement</h2>
            <div>
                <Link 
                className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                hover:bg-yellow-500 duration-300'
                href="/"
                >
                    Add new product
                </Link>
            </div>
            <div>

            </div>
        </div>
    </AdminLayout>
  )
}

export default Products;