import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import ProductsForm from '../../../../components/ProductForm';

const EditProductPage = () => {
    const [productInfo, setProductInfo] = useState(null);
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

export default EditProductPage;