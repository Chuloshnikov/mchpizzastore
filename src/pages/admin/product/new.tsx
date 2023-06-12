import React from 'react';
import AdminLayout from '@/components/AdminLayout'
import ProductForm from '@/components/ProductForm';


export default function NewProduct() {
  return (
    <AdminLayout>
        <div className='max-w-contentContainer'>
          <div className='flex justify-center items-center'>
            <h2 className='text-yellow-950 mb-5 text-xl font-bold'>New Product</h2>
          </div>
           <ProductForm/>
        </div>
    </AdminLayout>
  )
}
