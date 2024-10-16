import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="w-full  flex items-center">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[500px] max-h-screen"
      >
        <SwiperSlide className=''>
          <div className="flex flex-col items-center justify-center h-full bg-[url(/bg3.jpg)] bg-cover bg-center text-white text-2xl font-bold">
           <h1 className='text-white text-5xl max-md:text-3xl font-bold'>The Best Way To Find Your Perfect Home</h1>
           <p className='font-semibold text-2xl max-md:text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, inventore tenetur, reprehenderit suscipit at, nam illo culpa harum facilis optio quo molestiae.</p>
           <button className='bg-red-500 text-white font-bold py-1 px-3 rounded-md shadow-md flex justify-center my-4'>Buy Now</button> 
          
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex flex-col items-center justify-center h-full bg-[url(/bg4.jpg)] bg-cover bg-center text-white text-2xl font-bold">
          <h1 className='text-white text-5xl max-md:text-3xl font-bold'>The Best Way To Find Your Perfect Home</h1>
           <p className='font-semibold text-2xl max-md:text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, inventore tenetur, reprehenderit suscipit at, nam illo culpa harum facilis optio quo molestiae.</p>
           <button className='bg-red-500 text-white font-bold py-1 px-3 rounded-md shadow-md flex justify-center my-4'>Buy Now</button> 
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex flex-col items-center justify-center h-full bg-[url(/bg1.jpg)] bg-cover bg-center text-white text-2xl font-bold">
          <h1 className='text-white text-5xl max-md:text-3xl font-bold'>The Best Way To Find Your Perfect Home</h1>
           <p className='font-semibold text-2xl max-md:text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, inventore tenetur, reprehenderit suscipit at, nam illo culpa harum facilis optio quo molestiae.</p>
           <button className='bg-red-500 text-white font-bold py-1 px-3 rounded-md shadow-md flex justify-center my-4'>Buy Now</button> 
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex flex-col items-center justify-center h-full bg-[url(/bg5.jpg)] bg-cover bg-center text-white text-2xl font-bold">
          <h1 className='text-white text-5xl max-md:text-3xl font-bold'>The Best Way To Find Your Perfect Home</h1>
           <p className='font-semibold text-2xl max-md:text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, inventore tenetur, reprehenderit suscipit at, nam illo culpa harum facilis optio quo molestiae.</p>
           <button className='bg-red-500 text-white font-bold py-1 px-3 rounded-md shadow-md flex justify-center my-4'>Buy Now</button> 
          </div>
        </SwiperSlide>
        <SwiperSlide className=''>
          <div className="flex flex-col items-end justify-center h-full bg-[url(/bg2.jpg)] bg-cover bg-center text-black text-2xl font-bold">
          <h1 className='text-black text-5xl max-md:text-3xl font-bold'>The Best Way To Find Your Perfect Home</h1>
           <p className='font-semibold text-2xl max-md:text-sm w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, inventore tenetur, reprehenderit suscipit at, nam illo culpa harum facilis optio quo molestiae.</p>
           <button className='bg-red-500 text-white font-bold py-1 px-3 rounded-md shadow-md flex justify-center my-4'>Buy Now</button> 
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
