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

const AdminOrdersList = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        axios.get("/api/orderdata").then(response => {
            setOrders(response.data);
        });
        
    },  []);
    console.log(orders);


  return (
    <AdminLayout>
        <div className='flex flex-col gap-3 h-screen mb-12'>
        <div className='flex justify-center'>
                <TableContainer className='max-w-[800px]' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-semibold'>Order ID</TableCell>
                                <TableCell className='font-semibold'>Ordered</TableCell>
                                <TableCell className='font-semibold'>Last changed</TableCell>
                                <TableCell className='font-semibold'>Name</TableCell>
                                <TableCell className='font-semibold'>Address</TableCell>
                                <TableCell className='font-semibold'>Total</TableCell>
                                <TableCell className='font-semibold'>Payment</TableCell>
                                <TableCell className='font-semibold'>Delete</TableCell>
                                <TableCell className='font-semibold'>Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders?.map(order => (
                                <TableRow
                                    key={order?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
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
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/product/delete/${order._id}`}>
                                        <BsFillTrashFill/>
                                        <span>Delete</span>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/product/edit/${order._id}`}>
                                        <BsPencilSquare/>
                                        <span>Edit</span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </AdminLayout>
  )
}

export default AdminOrdersList;