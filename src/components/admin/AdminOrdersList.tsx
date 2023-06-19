import React, {useState, useEffect }  from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import Spinner from '../Spinner';
import OrderStatus from './OrderStatus';

const AdminOrdersList = () => {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("/api/orderdata").then(response => {
            setOrders(response.data);
            setLoading(false);
        });
        
    },  []);
    console.log(orders);

    const orderStatus = (status: number): string => {
        if (status === 0) {
            return "paid"
        } else if (status === 1) {
            return "preparing"
        } else if (status === 2) {
            return "on the way"
        } else if (status === 3) {
            return "delivered"
        }
        return "unknown";
    }
    

  return (
    <AdminLayout>
        <div className='flex flex-col gap-3 h-screen mb-12'>
        <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center gap-3 max-w-[800px]'>
                    <h2 className='text-yellow-950 text-xl font-semibold'>Orders management</h2>
                </div>
            </div>
        <div className='flex justify-center'>
                <TableContainer className='max-w-[800px]' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-semibold'>State</TableCell>
                                <TableCell className='font-semibold'>Order ID</TableCell>
                                <TableCell className='font-semibold'>Ordered</TableCell>
                                <TableCell className='font-semibold'>Last changed</TableCell>
                                <TableCell className='font-semibold'>Name</TableCell>
                                <TableCell className='font-semibold'>Address</TableCell>
                                <TableCell className='font-semibold'>Total</TableCell>
                                <TableCell className='font-semibold'>Payment</TableCell>
                                <TableCell className='font-semibold'>Status</TableCell>
                                <TableCell className='font-semibold'>Delete</TableCell>
                                <TableCell className='font-semibold'>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!loading ? orders?.map(order => (
                                <TableRow
                                    key={order?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                <TableCell component="th" scope="row">
                                    <OrderStatus status={order?.status}/>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                {order?._id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                {order?.createdAt}
                                </TableCell>
                                <TableCell align="right">
                                    {order?.updatedAt}
                                </TableCell>
                                <TableCell align="right">
                                    {order?.customer}
                                </TableCell>
                                <TableCell align="right">
                                    {order?.address}
                                </TableCell>
                                <TableCell align="right">
                                    ${parseFloat(order?.total).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    {order?.method === 1 ? ('card or paypal') : ('cash')}
                                </TableCell>
                                <TableCell align="right">
                                    {orderStatus(order?.status)}
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/order/delete/${order._id}`}>
                                        <BsFillTrashFill/>
                                        <span>Delete</span>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/order/edit/${order._id}`}>
                                        <BsPencilSquare/>
                                        <span>Edit</span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            )) : (
                            <div className='flex items-center justify-center mx-auto'>
                                <Spinner/>
                            </div>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </AdminLayout>
  )
}

export default AdminOrdersList;