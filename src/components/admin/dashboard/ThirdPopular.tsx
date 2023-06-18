import React from 'react';

const ThirdPopular = ({ orders }) => {
    

    function findThirdMostRepeatedProduct(orders) {
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
        let secondMostRepeatedProduct = null;
        let thirdMostRepeatedProduct = null;
        let maxCount = 0;
      
        // Знаходження найбільш повторюваного, другого і третього за популярністю продуктів
        for (const [productName, count] of countMap) {
          if (count > maxCount) {
            thirdMostRepeatedProduct = secondMostRepeatedProduct;
            secondMostRepeatedProduct = mostRepeatedProduct;
            mostRepeatedProduct = productName;
            maxCount = count;
          } else if (count > 0 && count !== maxCount) {
            if (thirdMostRepeatedProduct === null || count > countMap.get(thirdMostRepeatedProduct)) {
              thirdMostRepeatedProduct = productName;
            }
          }
        }
      
        return thirdMostRepeatedProduct;
      }

    const extractTitle = (input) => {
        const title = input?.replace("Title: ", "");
        return title;
      };

  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>Third popular:</p>
            </div>
            <span className='text-yellow-400'>{extractTitle(findThirdMostRepeatedProduct(orders))}</span>
        </div>
    </>
  )
}

export default ThirdPopular;