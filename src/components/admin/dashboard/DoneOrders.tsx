import React from 'react';

const DoneOrders = ({ orders }) => {


    function countDoneStatus(data) {
        const filteredData = data.filter(item => item.status === 3);
        const count = filteredData.length;
        return count;
      }

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>Done orders:</p>
            </div>
            <span className='text-green-400'>{countDoneStatus(orders)}</span>
        </div>
    </>
  )
}

export default DoneOrders;