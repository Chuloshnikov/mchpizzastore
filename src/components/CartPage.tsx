import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

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
                            {rows.map((row) => (
                                <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">${row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">${row.protein}</TableCell>
                                </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='w-1/3 h-full xs:w-full py-4'>
                <div className='flex flex-col gap-2 py-12 px-12 text-white bg-black opacity-70'>
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
                        <button className='p-2.5 bg-white text-red-600 text-lg font-semibold'>CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartPage;