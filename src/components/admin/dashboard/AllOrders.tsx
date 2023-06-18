import React from 'react';

const AllOrders = ({ orders }) => {

    const orderLen = orders?.length;
        

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>All orders:</p>
            </div>
            <span>{orderLen}</span>
        </div>
    </>
  )
}

export default AllOrders;