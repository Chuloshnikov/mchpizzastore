import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductsForm from '../../../../components/ProductForm';
import { getSession, useSession } from 'next-auth/react';

const EditProductPage = () => {
    const [productInfo, setProductInfo] = useState(null);
    const { data: session } = useSession();
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get(`/api/productdata?id=${id}`).then(response => {
        setProductInfo(response.data);
      })
    }, [id])

  return (
    <AdminLayout>
        <h1>Edit Product</h1>
        {productInfo && <ProductsForm {...productInfo}/>}
        
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

export default EditProductPage;