import React, { useState, useEffect } from 'react';
import AllOrders from './dashboard/AllOrders';
import PandingOrders from './dashboard/PandingOrders';
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
      <div>
          <h1 className='font-bold text-2xl'>Admin dashboard</h1>
      </div>
      <div>
        <div>
          {orders ? <AllOrders orders={orders} /> : <Spinner/>}
          {orders ? <PandingOrders orders={orders} /> : <Spinner/>}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;