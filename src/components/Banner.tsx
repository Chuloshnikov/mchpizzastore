import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BannerText from './BannerText';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {
    banner,
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    restorant1
} from '../assets/index';


import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <div className='xs:flex xs:flex-col lg:flex-row w-full bg-white px-4 py-6 flex gap-4'>
        <div className='xs:w-full lg:w-2/3 xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px] shadow-bannerShadow relative'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-[10%] flex flex-col gap-3 text-white"
            title="Best pizza in town!"
            description="Order once and you won't be ordering pizza anywhere else."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner1} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 right-[15%] flex flex-col gap-3 text-white"
            title="Order three pizzas pay for two"
            description="Every Monday from 2pm to 4pm ordering three pizzas you only pay for two."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner2} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-10 right-10 flex flex-col gap-3 text-white"
            title="The best pizza from the chef"
            description="Made according to a 300 year old Sicilian recipe."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner3} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 right-4 flex flex-col gap-3 text-white"
            title="Delivery or pickup"
            description="You can order pizza with delivery or pick it up at one of the restaurant chains."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner4} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
            title="Order pizza menu!"
            description="The pizza menu includes a drink to choose from: wine, cola or juice."
            btnText="Order now"
           /></SwiperSlide>
            <SwiperSlide>
                <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner5} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-blue-500"
            title="Prepare and deliver in 25 minutes"
            description="If we don't make it, you get a coupon for a free next pizza."
            btnText="Order now"
           /></SwiperSlide>
            <SwiperSlide><Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                relative object-cover'
                src={banner6} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-[17%] flex flex-col gap-3 text-white"
            title="Vegetable Boom!"
            description="Vegetarian pizza for connoisseurs of fresh and healthy products."
            btnText="Order now"
           /></SwiperSlide>
            <SwiperSlide><Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner7} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
            title="Author's tomato"
            description="We use only our own tomatoes grown according to a special recipe."
            btnText="Order now"
           /></SwiperSlide>
            <SwiperSlide><Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner8} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 right-4 flex flex-col gap-3 text-white"
            title="Сheese holiday!"
            description="We use 18 types of cheeses in our menu."
            btnText="Order now"
           />
           </SwiperSlide>
           <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner9} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-yellow-400"
            title="Lots of toppings!"
            description="Satisfies the appetite of even the most distinguished gourmet."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner10} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 right-4 flex flex-col gap-3 text-white"
            title="Specific roast!"
            description="Your pizza will never feel overcooked or undercooked."
            btnText="Order now"
           />
            </SwiperSlide>
            <SwiperSlide>
            <Image
                className='w-full xs:h-[320px] md:h-[510px] lg:h-[410px] xl:h-[510px]
                 relative object-cover'
                src={banner11} 
                alt="sliderImageOne" 
                priority
            />
            <BannerText
            className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-yellow-400"
            title="Free slice of pizza"
            description="Every Friday you get the last slice of pizza in your box for free.."
            btnText="Order now"
           />
            </SwiperSlide>
      </Swiper>
        </div>
        <div className='xs:w-full xs:h-[320px] sm:h-[510px] lg:h-[410px] xl:h-[510px] lg:w-1/3 border-[1px] border-[#E2E8E8]
        shadow-bannerShadow p-4 flex flex-col justify-between'>
            <div className='relative w-full flex items-center justify-between'>
                <h2 className='xs:text-sm md:text-xl font-semibold text-black'>
                    Visit our restaurants
                </h2>
                <Link className='xs:text-sm md:text-base text-[#8D8586] 
                underline underline-offset-2 hover:text-yellow-500 duration-200' href="/contacts">
                    To restorants
                </Link>
            </div>
            <Image className='h-80 object-fit xl:object-cover xl:h-full' src={restorant1} alt="restorant"/>
        </div>
    </div>
  )
}

export default Banner;