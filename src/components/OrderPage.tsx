import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import styles from '../styles/OrderStatusItems.module.css';

import { paid, bake, bike, delivered, checked } from '../assets/index';



const OrderPage = ({id}) => {
    const [order, setOrder] = useState('');
    console.log(order);

    useEffect(() => {
        if (!id) {
            return;
          }
          axios.get(`/api/orderdata?id=${id}`).then(response => {
            setOrder(response.data);
          })
    }, [id])

    const status: number = order?.status;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
      };

  return (
    <div className='w-full bg-white text-gray-800 px-4'>
        <div className='max-w-contentContainer mx-auto flex gap-10 items-center py-4 xs:flex-col lg:flex-row'>
            <div className='w-2/3 h-full xs:w-full flex flex-col items-center justify-center overflow-hidden relative'>
                <div className='mb-[30px] w-full'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 200 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order ID:</TableCell>
                                    <TableCell align="right">Customer:</TableCell>
                                    <TableCell align="right">Address:</TableCell>
                                    <TableCell align="right">Total:</TableCell>
                                </TableRow>
                            </TableHead>
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                    <TableCell component="th" scope="row">
                                        {order._id}
                                    </TableCell>
                                        <TableCell align="right">{order.customer}</TableCell>
                                        <TableCell align="right">{order.address}</TableCell>
                                        <TableCell align="right">${parseFloat(order.total).toFixed(2)}</TableCell>
                                    </TableRow>
                                
                                </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className={styles.statusItems}>
                    <div className={styles.status}>
                        <div className={statusClass(0)}>
                            <Image src={paid} width={50} height={50} alt="paid"/>
                            <span>Payment</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={30} height={30} alt="checked"/>
                            </div>   
                        </div>
                    </div>
                    <div className={styles.status}>
                        <div className={statusClass(1)}>
                            <Image src={bake} width={50} height={50} alt="bake"/>
                            <span>Preparing</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={30} height={30} alt="checked"/>
                            </div>   
                        </div>
                    </div>
                    <div className={styles.status}>
                        <div className={statusClass(2)}>
                            <Image src={bike} width={50} height={50} alt="bike"/>
                            <span>On the way</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={30} height={30} alt="checked"/>
                            </div>   
                        </div>
                    </div>
                    <div className={styles.status}>
                        <div className={statusClass(3)}>
                            <Image src={delivered} width={50} height={50} alt="delivered"/>
                            <span>Delivered</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src={checked} width={30} height={30} alt="checked"/>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/3 h-full xs:w-full flex flex-col justify-start gap-2 p-4'>
                <div className='flex flex-col gap-2 py-16 px-12 text-white bg-black opacity-70'>
                        <h3 className='text-xl font-bold'>CART TOTAL</h3>
                        <div className='py-3 text-lg font-semibold'>
                            <div className='flex gap-1'>
                                <p>Subtotal:</p><span>${parseFloat(order.total).toFixed(2)}</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Discount:</p><span>$0.00</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Total:</p><span>${parseFloat(order.total).toFixed(2)}</span>
                            </div>
                        </div>
                        <button type="button" className='cursor-not-allowed p-2.5 bg-white text-green-500 text-lg font-semibold duration-300'>PAID</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default OrderPage;