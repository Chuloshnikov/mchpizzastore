import React, {useState, useEffect }  from 'react';
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

const AdminEventsList = () => {
    const [events, setEvents] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get("/api/eventdata").then(response => {
            const events = response.data.reverse();
            setEvents(events);
            setLoading(false);
        });
        
    },  []);
    console.log(events);

  return (
    <div>
        <AdminLayout>
            <div className='flex flex-col gap-3 h-screen mb-12'>
              <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center gap-3 max-w-[800px]'>
                      <h2 className='text-yellow-950 text-xl font-semibold'>Event management</h2>
                      <div>
                          <Link 
                          className='bg-yellow-400 text-white p-1 px-2 text-base font-semibold
                          hover:bg-yellow-500 duration-300'
                          href="/admin/event/new"
                          >
                              Add new event
                          </Link>
                      </div>
                  </div>
              </div>
              <div className='flex justify-center'>
                <TableContainer className='max-w-[800px]' component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='font-semibold'>Event title</TableCell>
                                <TableCell className='font-semibold'>Event image</TableCell>
                                <TableCell className='font-semibold' align="right">Delete</TableCell>
                                <TableCell className='font-semibold' align="right">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {!loading ? events?.map(event => (
                                <TableRow
                                    key={event?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                <TableCell component="th" scope="row">
                                {event?.title}
                                </TableCell>
                                <TableCell align="right">
                                    <Image src={event?.img} alt="productImg" width={40} height={40}/>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/event/delete/${event._id}`}>
                                        <BsFillTrashFill/>
                                        <span>Delete</span>
                                    </Link>
                                </TableCell>
                                <TableCell align="right">
                                    <Link 
                                    className='bg-yellow-400 text-white p-1 px-1 text-base font-semibold
                                    hover:bg-yellow-500 duration-300 flex items-center justify-center'
                                    href={`/admin/event/edit/${event._id}`}>
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
    </div>
  )
}

export default AdminEventsList