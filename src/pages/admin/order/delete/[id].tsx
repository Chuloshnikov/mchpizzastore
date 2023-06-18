import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { getSession, useSession } from 'next-auth/react';

const DeleteProductPage = () => {
    const router = useRouter();
    const [orderInfo, setOrderInfo] = useState();
    const { data: session } = useSession();

    const {id} = router.query;
    
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/api/orderdata?id=${id}`).then(response => {
            setOrderInfo(response.data);
        });
    }, [id]);

    const goBack = () => {
        router.push('/admin/orders');
    }

    const deleteOrder = async () => {
      await axios.delete(`/api/orderdata?id=${id}`);
        goBack();
    }

  return (
    <AdminLayout>
        <div className='mb-[8%] mt-[8%]'>
            <h1 className='text-center text-2xl text-yellow-950 font-semibold mb-8'>
                Do you really want to delete order &nbsp;&quot;{orderInfo?._id}&quot;?
            </h1>
            <div className='flex gap-1 justify-center'>
                <button 
                    className='bg-red-500 text-white p-1 px-4 text-base font-semibold
                    hover:bg-red-600 duration-300'
                    onClick={deleteOrder}
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

export default DeleteProductPage;