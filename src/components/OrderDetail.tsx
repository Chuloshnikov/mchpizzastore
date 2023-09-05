import React, {useState} from 'react';

const OrderDetail = ({ total, cartDetails, createOrder }) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, phone, method: 0, cartOrder: cartDetails });
    }

  return (
    <div className='w-[100%] h-[80vh] absolute top-0 left-0 flex items-center justify-center bg-white'>
        <div className='max-w-[500px] text-white bg-[#4C4C4C] rounded-md p-8 mx-2 mt-40'>
            <h1 className='text-3xl font-bold'>You will pay ${parseFloat(total).toFixed(2)} after delivery</h1>
            <div className='flex flex-col mt-2'>
                <label className='text-white'>Name Surename:</label>
                <input 
                className='text-gray-900 focus:border-yellow-600 focus:border-1 focus:ring-0 py-1 px-2'
                placeholder='Enter your name and surename...'
                type="text"
                onChange={(e) => setCustomer(e.target.value)}
                />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='text-white'>Phone Number:</label>
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    className='text-gray-900 focus:border-yellow-600 focus:border-1 focus:ring-0 py-1 px-2'
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className='flex flex-col mt-2'>
                <label className='text-white'>Address:</label>
                <textarea
                    rows={5}
                    placeholder="Enter your address..."
                    type="text"
                    className='text-gray-900 focus:border-yellow-600 focus:border-1 focus:ring-0 py-1 px-2'
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button className='p-2.5 w-full mb-2 text-white bg-yellow-500 text-lg font-bold 
                hover:bg-yellow-600 duration-300' 
                onClick={handleClick}
                >
                    Order
            </button>
        </div>
    </div>
  )
}

export default OrderDetail;