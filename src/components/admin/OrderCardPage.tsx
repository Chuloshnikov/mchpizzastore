import React, { useEffect, useState } from 'react';
import axios from "axios";
import Spinner from '../Spinner';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OrderCardPage = ({ id }) => {
  const [orderDetails, setOrderDetails] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    axios.get(`/api/orderdata?id=${id}`).then(response => {
      setOrderDetails(response.data);
      setLoading(false);
    });
  }, [id]);

  const orderStatus = (status) => {
    if (status === 0) {
      return "paid";
    } else if (status === 1) {
      return "preparing";
    } else if (status === 2) {
      return "on the way";
    } else if (status === 3) {
      return "delivered";
    }
    return "unknown";
  };

  function removeExtras(text) {
    // Перевірка, чи містить текст "Extras:"
    if (text.includes("Extras:")) {
      // Видаляємо "Extras:" з тексту за допомогою регулярного виразу
      text = text.replace(/Extras:/g, "");
    }
    return text;
  }

  function removeQuantity(text) {
    // Перевірка, чи містить текст "Extras:"
    if (text.includes("Quantity:")) {
      // Видаляємо "Extras:" з тексту за допомогою регулярного виразу
      text = text.replace(/Quantity:/g, "");
    }
    return text;
  }

  function removePrice(text) {
    // Перевірка, чи містить текст "Extras:"
    if (text.includes("Price:")) {
      // Видаляємо "Extras:" з тексту за допомогою регулярного виразу
      text = text.replace(/Price:/g, "");
    }
    return text;
  }

  console.log(orderDetails);
  
  return (
    <div className='text-yellow-950 mt-10 mb-12'>
      <div className='shadow-containerShadow p-5'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>MCH Pizza</h1>
          <p className='text-base font-semibold'>Order № '{orderDetails?._id}'</p>
        </div>
        <div>
          <TableContainer className='max-w-[1200px] mx-auto' component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='font-semibold'>Title</TableCell>
                  <TableCell className='font-semibold'>Extras</TableCell>
                  <TableCell className='font-semibold'>quantity</TableCell>
                  <TableCell className='font-semibold'>price x1</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!loading ? orderDetails?.cartOrder.map(order => (
                  <TableRow
                    key={order?._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order?.title}
                    </TableCell>
                    <TableCell>
                      <span className='text-xs'>
                        {removeExtras(order?.extras)}
                      </span>
                    </TableCell>
                    <TableCell >
                        {removeQuantity(order?.quantity)}X
                    </TableCell>
                    <TableCell>
                      ${parseFloat(removePrice(order.price)).toFixed(2)}
                    </TableCell>
                  </TableRow>
                )) : (
                  <div className='flex items-center justify-center mx-auto'>
                    <Spinner />
                  </div>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex w-full justify-end -mx-8'>
            {!loading ? (
              <div className='shadow-containerShadow m-2 p-2'>
               Total: ${parseFloat(orderDetails?.total).toFixed(2)}
              </div>
            ) : (
              <div className='flex items-center justify-center mx-auto'>
                <Spinner />
              </div>
            )}
          </div>
          <div className='mx-auto mt-5'>
            <div className='mx-auto'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Customer name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Payment method</TableCell>
                        </TableRow>
                         </TableHead>
                        <TableBody>
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {orderDetails?.customer}
                                </TableCell>
                                <TableCell>{orderDetails?.phone}</TableCell>
                                <TableCell>{orderDetails?.address}</TableCell>
                                <TableCell>{orderDetails?.method === 1 ? ('card or paypal') : ('cash')}</TableCell>
                            </TableRow>
                        </TableBody>
                </Table>
            </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCardPage;