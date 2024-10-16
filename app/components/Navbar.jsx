"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for hamburger menu

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <main className='shadow-lg w-full bg-white h-18'>
      <div className='flex items-center justify-between w-5/6 max-lg:w-[96%] mx-auto py-4'>
        {/* Logo */}
        <Link href={'/#'}><div className='text-4xl font-bold text-red-500'>REALTOR</div></Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 items-center'>
          <ul className='flex gap-8 items-center font-semibold'>
            <Link href={'/'} className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
              <li className=''>Home</li>
            </Link>
            <Link href={'/gallery'} className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
              <li className=''>Gallery</li>
            </Link>
            <Link href={'/properties'} className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
              <li className=''>Property</li>
            </Link>
            <Link href={'/'} className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
              <li className=''>Blogs</li>
            </Link>
          </ul>
          <Link href={'/reachus'}>
            <button className='bg-red-500 py-1 px-3 rounded-md text-white font-semibold hover:bg-white hover:text-red-500 border-red-500 border-2 transition-all duration-150'>
              Reach out To Us
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='md:hidden'>
          <button onClick={toggleNav} className='text-3xl text-red-500'>
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-md transform transition-transform duration-300 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6'>
          {/* Close Button */}
          <button onClick={toggleNav} className='text-3xl text-red-500'>
            <AiOutlineClose />
          </button>
          <ul className='flex flex-col mt-10 gap-6 text-lg'>
            <Link href={'/'} onClick={toggleNav}>
              <li className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
                Home
              </li>
            </Link>
            <Link href={'/gallery'} onClick={toggleNav}>
              <li className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
                Gallery
              </li>
            </Link>
            <Link href={'/properties'} onClick={toggleNav}>
              <li className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
                Property
              </li>
            </Link>
            <Link href={'/'} onClick={toggleNav}>
              <li className='border-b-2 border-white transition-all hover:text-red-500 duration-200 hover:border-red-500'>
                Blogs
              </li>
            </Link>
            <Link href={'/reachus'} onClick={toggleNav}>
              <li>
                <button className='w-full bg-red-500 py-2 px-4 rounded-md text-white font-semibold hover:bg-white hover:text-red-500 border-red-500 border-2 transition-all duration-150'>
                  Reach out To Us
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
