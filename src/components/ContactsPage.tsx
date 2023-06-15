import React from 'react';
import Image from 'next/image';
import restourantOne from '../assets/index';

const ContactsPage = () => {
  return (
    <div className='xs:px-2 lg:px-0 mt-8 flex flex-col gap-5 gap-8 text-yellow-950'>
        <div className='flex flex-col'>
            <h1 className='font-bold text-2xl m-auto'>Our restaurants and picking up</h1>
        </div>
        <div className='xs:flex-col lg:flex-row flex gap-5 mx-auto'>
            <div className='max-w-[640px] shadow-bannerShadow'>
                <Image 
                className='mx-auto'
                src="https://res.cloudinary.com/duufrpcxn/image/upload/v1686856924/restourant_fmrarv.jpg" 
                width={600}
                 height={300} 
                 alt="restourant"
                 />
            </div>
            <div className='flex flex-col justify-between gap-2 max-w-[640px] text-center shadow-bannerShadow p-5'>
                <p className='text-sm font-semibold'>
                    Cheesy Delights Pizza is a whimsical pizzeria located in the heart of Pretendville, Fauxlandia. Renowned for its extraordinary pizzas and vibrant atmosphere, this restaurant offers a truly unique dining experience for pizza enthusiasts.
                    The menu at Cheesy Delights Pizza boasts an extensive selection of creative and mouthwatering pizza flavors. From the classic Margherita to the adventurous BBQ Chicken Surprise, there's a pizza to suit every palate. The chefs at Cheesy Delights Pizza pride themselves on using only the finest ingredients, ensuring that each pizza is a delectable masterpiece.
                    Upon entering the restaurant, guests are greeted by friendly and attentive staff members who are passionate about delivering exceptional service. The vibrant and eclectic decor creates a lively ambiance, making Cheesy Delights Pizza the perfect spot for family gatherings, casual dinners, or even pizza-themed celebrations.
                    Whether you're a traditionalist or an adventurous pizza lover, Cheesy Delights Pizza promises to satisfy your cravings with their innovative flavors and quality ingredients. Don't miss out on their signature dessert pizza, a sweet and delightful way to end your meal.
                </p>
                <p className='text-sm font-semibold text-green-500'>
                    Restaurant Name: Cheesy Delights Pizza
                    Phone Number: (555) 123-4567
                    Address: 123 Milton Street, Pretendville, New-York
                </p>
            </div>
        </div>
        <div className='flex xs:flex-col lg:flex-row gap-5 mx-auto'>
        <div className='flex flex-col justify-between gap-2 max-w-[640px] text-center shadow-bannerShadow p-5'>
                <p className='text-sm font-semibold'>
                    Welcome to Pizzarifico, the ultimate destination for pizza lovers in the enchanting town of Dreamtown, nestled in the whimsical realm of Fantasia. Our restaurant is a culinary oasis that combines the art of pizza making with a touch of magic to create unforgettable dining experiences.
                    At Pizzarifico, we believe in pushing the boundaries of flavor and imagination. Our talented team of chefs crafts pizzas that are as visually stunning as they are delicious. From the moment you lay eyes on our menu, you'll be transported into a world of extraordinary culinary delights.
                    Each pizza at Pizzarifico is a masterpiece, meticulously prepared using the finest ingredients sourced from the mystical corners of Fantasia. Whether you're craving a traditional Margherita or seeking a mystical blend of flavors with our Fairy Forest Pizza, our extensive menu has something to satisfy every taste bud.
                    The ambiance at Pizzarifico is straight out of a fairy tale. The dining area is adorned with sparkling lights, enchanted murals, and whimsical decor. 
                </p>
                <p className='text-sm font-semibold text-green-500'>
                    Restaurant Name: Pizzarifico
                    Phone Number: (555) 987-6543
                    Address: 456 Imaginary Avenue, Downtown, Nex-York
                </p>
            </div>
            <div className='max-w-[640px] shadow-bannerShadow'>
                <Image 
                className='mx-auto'
                src="https://res.cloudinary.com/duufrpcxn/image/upload/v1686857353/restourant2_vnuqe1.webp" 
                width={600}
                 height={300} 
                 alt="restourant"
                 />
            </div>
        </div>
        <div className='flex flex-col gap-5 mx-auto mb-12'>
            <div className='flex gap-5 max-w-contentContainer mx-auto'>
                <div className='max-w-[640px] shadow-bannerShadow'>
                    <Image 
                    src="https://res.cloudinary.com/duufrpcxn/image/upload/v1686859893/59934_baodjr.webp" 
                    width={300}
                    height={300} 
                    
                    alt="restourant2"
                    />
                </div>
                <div className='max-w-[640px] shadow-bannerShadow'>
                    <Image
                    src="https://res.cloudinary.com/duufrpcxn/image/upload/v1686857907/pizza-gc05649d8d_1280_rr5egp.png"
                    width={300}
                    height={300} 
                    alt="pickup"
                    />
                </div>
            </div>
            <div className='flex flex-col justify-between gap-5 max-w-contentContainer text-center mx-auto p-5'>
                <p className='text-sm font-semibold'>
                    Welcome to Pizza 'N Style Pickup Salon, a unique and trendy destination for pizza enthusiasts in the bustling town of Crustville, located in the flavorful realm of Pizzaland. Our salon offers a fusion of delicious pizza flavors and a chic salon experience, catering to those who crave both culinary delights and stylish ambiance.
                    At Pizza 'N Style Pickup Salon, we believe in the perfect blend of taste and aesthetics. Our talented pizza artisans craft gourmet pizzas that are not only mouthwatering but also visually stunning. Each pizza is a work of art, carefully arranged with a variety of premium toppings that will tantalize your taste buds and delight your eyes.
                    As you step into our salon, you'll be greeted by a modern and sophisticated space where pizza perfection meets contemporary design. Our interior features sleek furniture, stylish lighting, and pizza-themed artwork, creating an atmosphere that exudes both comfort and elegance.
                    Ordering from Pizza 'N Style Pickup Salon is a breeze. Simply give us a call at (555) 987-6543 to place your order, and our friendly staff will guide you through the menu options. Once your pizza masterpiece is ready, you can swing by our salon at 123 Savory Avenue for a convenient pickup experience.
                    We take pride in using only the finest and freshest ingredients in our pizzas. From locally sourced produce to artisanal cheeses and handcrafted dough, every element is carefully selected to ensure a taste sensation like no other. Our commitment to quality extends to our extensive range of vegan, gluten-free, and specialty options, catering to various dietary preferences.
                    Pizza 'N Style Pickup Salon is more than just a place to grab a delicious slice. It's a destination where food and style converge, making it the perfect spot for pizza connoisseurs who appreciate the artistry of both gastronomy and aesthetics.
                </p>
                <p className='text-sm font-semibold text-green-500'>
                Salon Name: Pizza 'N Style Pickup Salon
                Phone Number: (555) 987-6543
                Address: 123 Savory Avenue, Crustville, New-York
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default ContactsPage