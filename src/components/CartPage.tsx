import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";



const CartPage = () => {

    

  return (
    <>
        <div className='w-full flex gap-10 py-10 px-5 xs:flex-col lg:flex-row'>
            <div className='w-2/3 h-full xs:w-full flex items-center justify-center overflow-hidden relative'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product:</TableCell>
                                <TableCell align="right">Name:</TableCell>
                                <TableCell align="right">Extras</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.products.map((product) => (
                                <TableRow
                                        key={product._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                    <TableCell component="th" scope="row">
                                        <Image src={product.img} alt="product" width={100} height={50}/>
                                    </TableCell>
                                    <TableCell align="right">{product.title}</TableCell>
                                    <TableCell align="right">{product.extraOptions.map(extra => <span key={extra._id}>{extra.text}</span>)}</TableCell>
                                    <TableCell align="right">${product.price}</TableCell>
                                    <TableCell align="right">{product.quantity}</TableCell>
                                    <TableCell align="right">${product.total}</TableCell>
                                </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='w-1/3 h-full xs:w-full py-4'>
                <div className='flex flex-col gap-2 py-16 px-12 text-white bg-black opacity-70'>
                        <h3 className='text-xl font-bold'>CART TOTAL</h3>
                        <div className='py-3 text-lg font-semibold'>
                            <div className='flex gap-1'>
                                <p>Subtotal:</p><span>$22</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Discount:</p><span>$22</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Total:</p><span>$22</span>
                            </div>
                        </div>
                        <button className='p-2.5 bg-white text-red-600 text-lg font-semibold hover:scale-105 duration-300'>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartPage;