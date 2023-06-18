import React, { useState, useEffect } from 'react';
import AllOrders from './dashboard/AllOrders';
import PreparingOrders from './dashboard/PreparingOrders';
import NewOrders from './dashboard/NewOrders';
import OnTheWayOrders from './dashboard/OnTheWayOrders';
import DoneOrders from './dashboard/DoneOrders';
import AllProducts from './dashboard/AllProducts';
import axios from "axios";
import Spinner from "../Spinner";

const AdminDashboard = () => {
    const [orders, setOrders] = useState();
    const [products, setProducts] = useState();
    const [loading,setLoading] = useState(false);
    console.log(products)

    useEffect(() => {
        setLoading(true);
        axios.get('/api/orderdata').then(response => {
        setOrders(response.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/productdata').then(response => {
    setProducts(response.data);
    setLoading(false);
  });
}, []);

  return (
    <div className='text-yellow-950 flex flex-col gap-5'>
      <div className='text-center'>
          <h1 className='font-bold text-2xl'>Admin dashboard</h1>
      </div>
      <div>
        <div className='text-center'>
          <h2 className='font-semibold text-lg mx-auto mb-2'>Orders:</h2>
        </div>
        <div className='flex xs:flex-col mdl:flex-row gap-2'>
          {orders ? <AllOrders orders={orders} /> : <Spinner/>}
          {orders ? <NewOrders orders={orders} /> : <Spinner/>}
          {orders ? <PreparingOrders orders={orders} /> : <Spinner/>}
          {orders ? <OnTheWayOrders orders={orders} /> : <Spinner/>}
          {orders ? <DoneOrders orders={orders} /> : <Spinner/>}
        </div>
      </div>
      <div>
        <div className='text-center'>
          <h2 className='font-semibold text-lg mx-auto mb-2'>Products:</h2>
        </div>
        <div className='flex xs:flex-col mdl:flex-row gap-2'>
          {orders ? <AllProducts products={products} /> : <Spinner/>}
          {orders ? <NewOrders orders={orders} /> : <Spinner/>}
          {orders ? <PreparingOrders orders={orders} /> : <Spinner/>}
          {orders ? <OnTheWayOrders orders={orders} /> : <Spinner/>}
          {orders ? <DoneOrders orders={orders} /> : <Spinner/>}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;