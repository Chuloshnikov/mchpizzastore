import React, { useState, useEffect } from 'react';
import AllOrders from './dashboard/AllOrders';
import PreparingOrders from './dashboard/PreparingOrders';
import NewOrders from './dashboard/NewOrders';
import axios from "axios";
import Spinner from "../Spinner";

const AdminDashboard = () => {
    const [orders, setOrders] = useState();
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('/api/orderdata').then(response => {
        setOrders(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='text-yellow-950'>
      <div className='text-center'>
          <h1 className='font-bold text-2xl'>Admin dashboard</h1>
      </div>
      <div>
        <div className='text-center'>
          <h2 className='font-semibold text-lg mx-auto'>Orders</h2>
        </div>
        <div className='flex gap-2'>
          {orders ? <AllOrders orders={orders} /> : <Spinner/>}
          {orders ? <NewOrders orders={orders} /> : <Spinner/>}
          {orders ? <PreparingOrders orders={orders} /> : <Spinner/>}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;