import React from 'react';

const PreparingOrders = ({ orders }) => {


    function countPendingStatus(data) {
        const filteredData = data.filter(item => item.status === 1);
        const count = filteredData.length;
        return count;
      }

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>Preparing orders:</p>
            </div>
            <span className='text-orange-400'>{countPendingStatus(orders)}</span>
        </div>
    </>
  )
}

export default PreparingOrders;