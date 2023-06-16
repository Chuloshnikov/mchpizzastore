import React from 'react';
import Image from 'next/image';

const EventsPage = () => {
  return (
    <div>
        <div>
            <div className='mx-auto mt-10 mb-12 shadow-bannerShadow p-10'>
                <div>
                    <Image 
                    src={"https://craigourparkprimary.files.wordpress.com/2021/06/capture.png?w=900"} 
                    alt="pizza event"
                    width={800}
                    height={500}
                    className="mx-auto"
                    />
                </div>
                <div className='flex flex-col gap-5 max-w-[900px] mx-auto text-center mt-10 text-yellow-950'>
                    <h1 className='font-bold text-2xl'>Slice & Sizzle: A Night of Gourmet Delights at Pizzarella!</h1>
                    <h2 className='font-bold text-lg'>
                        🍕 Event Title: "Pizza Palooza: A Gastronomic Journey"
                    </h2>
                    <p className='font-semibold text-base'>
                        🗓️ Date: [Insert Date]
                        ⏰ Time: [Insert Time]
                    </p>
                    <p className='font-semibold text-sm'>
                        Join us for an unforgettable evening filled with delectable flavors, mouthwatering aromas, and the irresistible allure of freshly baked pizzas. Pizzarella, the esteemed pizza restaurant nestled in the heart of town, is proud to present a one-of-a-kind event that will tantalize your taste buds and leave you craving for more.
                        Indulge in a culinary adventure as we take you on a journey through the world of gourmet pizzas, carefully crafted by our skilled chefs. Prepare to be dazzled by an array of unique and inventive flavors, expertly combined to create pizza masterpieces that will redefine your understanding of this beloved dish.
                        Here's a sneak peek of what awaits you at Pizza Palooza:
                        But that's not all! In addition to the extraordinary pizza spread, we have a host of other delights in store for you. Enjoy live music, entertainment, and interactive activities that will keep the excitement alive throughout the evening. Plus, don't forget to visit our pop-up bar, where you can sip on handcrafted cocktails and artisanal beverages specially curated to complement your pizza experience.
                        Tickets for this sensational event are limited, so be sure to secure yours early to avoid missing out on the gastronomic journey of a lifetime. Bring your appetite, your sense of adventure, and join us at Pizzarella for an unforgettable night of slice, sizzle, and pure pizza perfection!
                        For ticket bookings and inquiries, visit our website [Insert Website URL] or call us at [Insert Contact Number]. We can't wait to share this extraordinary pizza experience with you at Pizzarella's Pizza Palooza!
                        Note: This is a fictional event created for the purpose of this response.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsPage;