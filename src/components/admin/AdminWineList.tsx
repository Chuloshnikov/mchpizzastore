import React, {useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
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
import Spinner from '../Spinner';

const AdminWineList = () => {
    const [wine, setWine] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("/api/winedata").then(response => {
            setWine(response.data);
            setLoading(false);
        });
        
    },  []);

  return (
    <AdminLayout>
        <div className='flex flex-col gap-3 h-screen mb-12'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center gap-3 max-w-[800px]'>
                    <h2 className='text-yellow-950 text-xl font-semibold'>Wine card management</h2>
                    <div>
                        <Link 
                        className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                        hover:bg-yellow-500 duration-300'
                        href="/admin/wine/new"
                        >
                            Add new wine
                        </Link>
                    </div>
                </div>
            </div>
           
            <div className='flex justify-center'>
                <TableContainer className='max-w-[800px]' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-semibold'>Wine name</TableCell>
                                <TableCell className='font-semibold' align="right">Delete</TableCell>
                                <TableCell className='font-semibold' align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!loading ? wine?.map(wine => (
                                <TableRow
                                    key={wine?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                <TableCell component="th" scope="row">
                                {wine?.title}
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/wine/delete/${wine._id}`}>
                                        <BsFillTrashFill/>
                                        <span>Delete</span>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/wine/edit/${wine._id}`}>
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

export default AdminWineList;