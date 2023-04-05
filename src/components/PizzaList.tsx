import React from 'react';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div id="products" className='max-w-contentContainer mx-auto mt-6'>
      <div className='text-center'>
          <h2 className='text-yellow-950 font-bold text-2xl'>The Best Pizza</h2>
          <p className='text-yellow-950 font-semibold text-lg'>
            Introducing our mouth-watering pizza menu, 
            made with the freshest ingredients and crafted 
            to perfection by our skilled chefs.
          </p>
      </div>
      <div className='className="py-6 px-4 grid xs:grid-cols-1 md:grid-cols-2 mdl:grid-cols-2 lgl:grid-cols-4 gap-4 mt-6'>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
        <PizzaCard/>
      </div>  
    </div>
  )
}

export default PizzaList;