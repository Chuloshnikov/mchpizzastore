import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Spinner from "../components/Spinner";

const MenuPage = () => {
    const [products, setProducts] = useState();
    const [wineInfo, setWineInfo] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("/api/productdata").then(response => {
            setProducts(response.data);
            setLoading(false);
        });
        
    },  []);

    useEffect(() => {
        setLoading(true);
        axios.get("/api/winedata").then(response => {
            setWineInfo(response.data);
            setLoading(false);
        });
        
    },  []);



  return (
    <div className='text-yellow-950'>
        <div className='text-center flex flex-col gap-5 mt-10 px-5'>
            <h1 className='text-2xl font-bold'>Here you can see our menu</h1>
            <p className='text-lg font-semibold'>
                Please note that we only sell pizza and wine. 
                Wine cannot be ordered with delivery and is 
                served only in the restaurant.
            </p>
        </div>
        <div className='text-center'>
            <h2 className='text-lg font-semibold mt-10'>Pizza menu</h2>
            <TableContainer className='max-w-[800px] mx-auto mt-5' component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='font-semibold'>Pizza</TableCell>
                                    <TableCell className='font-semibold' align="left">Small</TableCell>
                                    <TableCell className='font-semibold' align="left">Medium</TableCell>
                                    <TableCell className='font-semibold' align="left">Large</TableCell>
                                    <TableCell className='font-semibold' align="center">Order</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? products?.map(product => (
                                    <TableRow
                                        key={product?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                    <TableCell component="th" scope="row">
                                    {product?.title}
                                    </TableCell>
                                    <TableCell  component="th" scope="row">
                                    ${parseFloat(product?.prices[0]).toFixed(2)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    ${parseFloat(product?.prices[1]).toFixed(2)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    ${parseFloat(product?.prices[2]).toFixed(2)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/product/${product._id}`}>
                                        <span>Order now!</span>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                                )) : (<div className='flex items-center justify-center mx-auto'>
                                        <Spinner/>
                                    </div>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
        </div>
        <div className='text-center mb-12'>
            <h2 className='text-lg font-semibold mt-10'>Wine menu</h2>
            <TableContainer className='max-w-[800px] mx-auto mt-5' component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='font-semibold'>Wine</TableCell>
                                    <TableCell className='font-semibold' align="left">Origin</TableCell>
                                    <TableCell className='font-semibold' align="left">0.5L</TableCell>
                                    <TableCell className='font-semibold' align="left">1L</TableCell>
                                    <TableCell className='font-semibold' align="left">2L</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? (wineInfo?.map(wine => (
                                <TableRow
                                    key={wine._id}
                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                     >
                                    <TableCell component="th" scope="row">
                                    {wine?.title}
                                    </TableCell>
                                    <TableCell  component="th" scope="row">
                                    {wine?.origin}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    ${parseFloat(wine?.prices[0]).toFixed(2)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    ${parseFloat(wine?.prices[1]).toFixed(2)}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    ${parseFloat(wine?.prices[2]).toFixed(2)}
                                 </TableCell>
                             </TableRow>
                                ))) : (
                                <div className='flex items-center justify-center mx-auto'>
                                    <Spinner/>
                                </div>) 
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
        </div>
    </div>
  )
}

export default MenuPage;