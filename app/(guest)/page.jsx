"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Caro from '../components/Caro';
import Search from '../components/Search';
import Testimonial from '../components/Testimonial';
import Servs from '../components/Contactus';
import Review from '../components/Review';
import Cardss from '../components/Cardss';


const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <Caro />
      <div className='bg-gray-200 py-6'>
        <div 
          className='flex flex-col items-center justify-center w-[70%] max-md:w-[100%] mx-auto'
          data-aos="fade-up" 
          data-aos-duration="1000"
        >
          <h1 className='text-4xl font-bold text-red-500 text-center'>Search For Properties</h1>
          <Search />
        </div>
      </div>
      
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000"
        className=""
      >
        <Cardss />
      </div>
      
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000"
        className=""
      >
        <Testimonial />
      </div>
      
      <div 
        data-aos="fade-lef" 
        data-aos-duration="1000"
        className=""
      >
        <Servs />
      </div>
      
      <div 
        data-aos="fade-left" 
        data-aos-duration="1000"
        className=""
      >
        <Review />
      </div>
    </main>
  );
}

export default Page;
