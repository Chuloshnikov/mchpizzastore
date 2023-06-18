import React from 'react';

const PopularProduct = ({ orders }) => {
    console.log(orders)

    function findMostRepeatedProduct(orders) {
        const countMap = new Map();
      
        // Підрахунок кількості повторень для кожного продукту
        for (const order of orders) {
          for (const item of order.cartOrder) {
            const productName = item.title;
            if (countMap.has(productName)) {
              countMap.set(productName, countMap.get(productName) + 1);
            } else {
              countMap.set(productName, 1);
            }
          }
        }
      
        let mostRepeatedProduct = null;
        let maxCount = 0;
      
        // Знаходження найбільш повторюваного продукту
        for (const [productName, count] of countMap) {
          if (count > maxCount) {
            mostRepeatedProduct = productName;
            maxCount = count;
          }
        }
      
        return mostRepeatedProduct;
      }

      const extractTitle = (input) => {
        const title = input.replace("Title: ", "");
        return title;
      };


  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>Most popular:</p>
            </div>
            <span className='text-yellow-400'>{extractTitle(findMostRepeatedProduct(orders))}</span>
        </div>
    </>
  )
}

export default PopularProduct;