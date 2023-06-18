import React from 'react';

const AllProducts = ({ products }) => {
    const productsLen = products?.length;
        

    return (
      <>
          <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
              <div>
                  <p className='text-lg'>All products:</p>
              </div>
              <span>{productsLen}</span>
          </div>
      </>
    )
}

export default AllProducts;