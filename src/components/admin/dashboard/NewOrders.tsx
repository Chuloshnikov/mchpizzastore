import React from 'react';

const NewOrders = ({ orders }) => {

    function countNewStatus(data) {
        const filteredData = data.filter(item => item.status === 0);
        const count = filteredData.length;
        return count;
      }

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>New orders:</p>
            </div>
            <span className='text-red-500'>{countNewStatus(orders)}</span>
        </div>
    </>
  )
}

export default NewOrders