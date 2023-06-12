import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';


const DeleteProductPage = () => {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState();

    const {id} = router.query;
    
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/api/productdata?id=${id}`).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);

    const goBack = () => {
        router.push('/admin/products');
    }

    const deleteProduct = async () => {
      await axios.delete(`/api/productdata?id=${id}`);
        goBack();
    }

  return (
    <AdminLayout>
        <div className='mb-[8%] mt-[8%]'>
            <h1 className='text-center text-2xl text-yellow-950 font-semibold mb-8'>
                Do you really want to delete product &nbsp;"{productInfo?.title}"?
            </h1>
            <div className='flex gap-1 justify-center'>
                <button 
                    className='bg-red-500 text-white p-1 px-4 text-base font-semibold
                    hover:bg-red-600 duration-300'
                    onClick={deleteProduct}
                    >
                    Yes
                </button>
                <button 
                    className='bg-yellow-400 text-white p-1 px-4 text-base font-semibold
                    hover:bg-yellow-500 duration-300' 
                    onClick={goBack}
                    >
                    NO
                </button>
            </div>
        </div>
    </AdminLayout>
  )
}

export default DeleteProductPage;