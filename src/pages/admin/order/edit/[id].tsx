import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import OrderForm from '../../../../components/OrderForm';
import { getSession, useSession } from 'next-auth/react';

const EditOrderPage = () => {
    const [orderInfo, setOrderInfo] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;
    console.log(orderInfo);

    useEffect(() => {
        if (!id) {
          return;
        }
        axios.get(`/api/orderdata?id=${id}`).then(response => {
          setOrderInfo(response.data);
        })
      }, [id]);

      return (
        <AdminLayout>
            <h1>Edit Order</h1>
            {orderInfo && <OrderForm {...orderInfo}/>}
            
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

export default EditOrderPage;