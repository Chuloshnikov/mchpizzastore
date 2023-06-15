import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type Order = {
  title: string;
  price: string;
  quantity:string;
  extras:string;
}
type Data = {
  _id: any;
  customer: string;
  address: string;
  total: number;
  status: number | string;
  method: number;
  phone: string;
  cartOrder: Order;
}[];

interface OrderFormProps {
  _id: any;
  customer: string;
  address: string;
  total: number;
  status: number | string;
  method: number;
  phone: string;
  cartOrder: Order;
}

const OrderForm: React.FC<OrderFormProps>  = ({
  _id,
  customer: existingCustomer,
  address: existingAddress,
  total: existingTotal,
  status: existingStatus,
  method: existingMethod,
  phone: existingPhone,
  cartOrder: existingCartOrder,
}) => {
  const [customer, setCustomer] = useState<string>(existingCustomer || '');
  const [address, setAddress] = useState<string>(existingAddress || '');
  const [total, setTotal] = useState<number>(existingTotal || '');
  const [status, setStatus] = useState<number>(existingStatus || 0);
  const [method, setMethod] = useState<number>(existingMethod || 0);
  const [phone, setPhone] = useState<string>(existingPhone || '');
  const [cartOrder, setCartOrder] = useState<Order>(existingCartOrder || [])
  const [goToOrders, setGoToOrders] = useState<boolean>(false);
  const router = useRouter();
  console.log(status);

  const handleChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Data = { customer, address, total, status, method, phone, cartOrder};
    console.log(data);
    if (_id) {
      await axios.put('/api/orderdata', { ...data, _id });
    } 
    setGoToOrders(true);
  };

  if (goToOrders) {
    router.push('/admin/orders');
  }


  return (
    <div>
      <form onSubmit={handleChange} className="flex flex-col max-w-[400px] mx-auto">
        <label>Customer</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="text"
          placeholder="customer name..."
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <label>Address</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          placeholder="address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Status</label>
          <select
            className="focus:border-yellow-600 focus:border-1 focus:ring-0"
            value={status}
            onChange={(e) => setStatus(Number(e.target.value))}
          >
            <option value={0}>paid</option>
            <option value={1}>preparing</option>
            <option value={2}>on the way</option>
            <option value={3}>delivered</option>
          </select>

          <label>Method:</label>
          <select
            className="focus:border-yellow-600 focus:border-1 focus:ring-0"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value={0}>cash</option>
            <option value={1}>card or paypal</option>
          </select>
        <label>Total (in USD):</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
        <label>Phone:</label>
        <input
        type="text"
        placeholder='phone...'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={handleChange}
          className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 mt-2"
          type="submit"
        >
          Change Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm;