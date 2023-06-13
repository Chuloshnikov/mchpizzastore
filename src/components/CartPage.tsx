import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../../redux/cartSlice";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
  } from "@paypal/react-paypal-js";



const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const amount = cart.total;
    const currency = "USD";
    const style = { layout: "vertical" };
    const dispatch = useDispatch();
    const router = useRouter();
    
    

      
      
      const createOrder = async (data) => {
        try {
          const res = await axios.post("/api/orderdata", data);
          if (res.status === 201) {
            dispatch(reset());
            router.push(`/orders/${res.data._id}`);
          }
        } catch (err) {
          console.log(err);
        }
      };

        // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };
    


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
                                        <Image src={product.img} alt="product" width={100} height={50} alt="product"/>
                                    </TableCell>
                                    <TableCell align="right">{product.title}</TableCell>
                                    <TableCell align="right">{product.extraOptions.map(extra => <span key={extra._id}>{extra.text}</span>)}</TableCell>
                                    <TableCell align="right">${parseFloat(product.price).toFixed(2)}</TableCell>
                                    <TableCell align="right">{product.quantity}</TableCell>
                                    <TableCell align="right">${parseFloat(product.price * product.quantity).toFixed(2)}</TableCell>
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
                                <p>Subtotal:</p><span>${parseFloat(cart.total).toFixed(2)}</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Discount:</p><span>$0.00</span>
                            </div>
                            <div className='flex gap-1'>
                                <p>Total:</p><span>${parseFloat(cart.total).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="w-full">
                        {open ? (
                                <div>
                                    <button
                                    className='p-2.5 w-full mb-2 bg-white text-green-500 text-lg font-bold 
                                    hover:bg-green-500 hover:text-white duration-300'   
                                    onClick={() => setCash(true)}
                                    >
                                    CASH ON DELIVERY
                                    </button>
                                    <PayPalScriptProvider
                                        options={{
                                            "client-id": "AcId4gnuiT-clTk53utijX2EXuRWaQIEaoSnU-dyE0oFjOr-yqYexsQtd2gF3bu1a07u_VxDu0pNs9rh",
                                                components: "buttons",
                                                currency: "USD",
                                                "disable-funding": "credit,card,p24",
                                            }}
                                            >
                                                <ButtonWrapper currency={currency} showSpinner={false} />
                                            </PayPalScriptProvider>
                                </div>
                                ) : (
                                <button 
                                onClick={() => setOpen(true)}
                                className='p-2.5 mb-2 w-full bg-white text-red-600 text-lg font-bold 
                                hover:text-green-500 duration-300'
                                >
                                    CHECKOUT NOW!
                                </button>)}
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartPage;