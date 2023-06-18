import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/ProductForm';
import { getSession, useSession } from 'next-auth/react';


export default function NewProduct() {
  const { data: session } = useSession();

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


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if(!session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  } 
}