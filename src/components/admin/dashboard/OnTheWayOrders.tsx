import React from 'react';

const OnTheWayOrders = ({ orders }) => {


    function countOnTheWayStatus(data) {
        const filteredData = data.filter(item => item.status === 0);
        const count = filteredData.length;
        return count;
      }

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>On the way orders:</p>
            </div>
            <span className='text-yellow-400'>{countOnTheWayStatus(orders)}</span>
        </div>
    </>
  )
}

export default OnTheWayOrders;