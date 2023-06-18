import React from 'react';

const SecondPopular = ({ orders }) => {
    console.log(orders)

    function findSecondMostRepeatedProduct(orders) {
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
        let maxCount = 0;
        
        // Знаходження найбільш повторюваного і другого за популярністю продуктів
        for (const [productName, count] of countMap) {
          if (count > maxCount) {
            secondMostRepeatedProduct = mostRepeatedProduct;
            mostRepeatedProduct = productName;
            maxCount = count;
          } else if (count > 0 && count !== maxCount) {
            secondMostRepeatedProduct = productName;
          }
        }
        
        return secondMostRepeatedProduct;
      }

    const extractTitle = (input) => {
        const title = input?.replace("Title: ", "");
        return title;
      };


  return (
    <>
        <div className='flex flex-col items-center justify-center p-10 shadow-bannerShadow text-2xl font-semibold'>
            <div>
                <p className='text-lg'>Second popular:</p>
            </div>
            <span className='text-yellow-400'>{extractTitle(findSecondMostRepeatedProduct(orders))}</span>
        </div>
    </>
  )
}

export default SecondPopular;