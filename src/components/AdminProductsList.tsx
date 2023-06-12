import React, {useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
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
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const AdminProductsList = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("/api/productdata").then(response => {
            setProducts(response.data);
        });
        
    },  []);
    console.log(products);

  return (
    <AdminLayout>
        <div className='flex flex-col gap-3 mb-12'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center gap-3 max-w-[400px]'>
                    <h2 className='text-yellow-950 text-xl font-semibold'>Products management</h2>
                    <div>
                        <Link 
                        className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                        hover:bg-yellow-500 duration-300'
                        href="/admin/product/new"
                        >
                            Add new product
                        </Link>
                    </div>
                </div>
            </div>
           
            <div className='flex justify-center'>
                <TableContainer className='max-w-[400px]' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-semibold'>Product name</TableCell>
                                <TableCell className='font-semibold'>Product image</TableCell>
                                <TableCell className='font-semibold' align="right">Delete</TableCell>
                                <TableCell className='font-semibold' align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products?.map(product => (
                                <TableRow
                                    key={product?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                <TableCell component="th" scope="row">
                                {product?.title}
                                </TableCell>
                                <TableCell align="right">
                                    <Image src={product?.img} alt="productImg" width={40} height={40}/>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/product/delete/${product._id}`}>
                                        <BsFillTrashFill/>
                                        <span>Delete</span>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/product/edit/${product._id}`}>
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

export default AdminProductsList;