import React from 'react';
import Link from 'next/link'; 
import { IoIosKey } from 'react-icons/io';

const PropertyCardSection = () => {
    return (
        <div className='bg-red-500 py-4 h-[30rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full w-[96%] mx-auto'>
                
                {/* Card 1 */}
                <Link href={'/properties'}>
                    <div className='cursor-pointer bg-[url(/bg3.jpg)] bg-cover bg-center flex flex-col items-center justify-center rounded-lg shadow-md relative'>
                        <div className='rounded-full h-32 w-32 bg-white/40 backdrop-blur shadow-md absolute top-[-3rem] flex items-center justify-center'>
                            <IoIosKey className='text-8xl text-white' />
                        </div>
                        <div className='bg-white mt-16 py-3 px-2 rounded-b-lg'> 
                            <h1 className='text-center text-red-600 text-2xl md:text-3xl font-bold'>Buy Your Dream House</h1>
                            <p className='font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati ab placeat aliquam quod minima consequuntur consectetur consequatur alias? Dolore voluptas, alias nulla beatae illo voluptatem commodi exercitationem nisi veritatis?</p>
                        </div> 
                    </div>
                </Link>

                {/* Card 2 */}
                <Link href={'/properties'}>
                    <div className='cursor-pointer bg-[url(/bg3.jpg)] bg-cover bg-center flex flex-col items-center justify-center rounded-lg shadow-md relative'>
                        <div className='rounded-full h-32 w-32 bg-white/40 backdrop-blur shadow-md absolute top-[-3rem] flex items-center justify-center'>
                            <IoIosKey className='text-8xl text-white' />
                        </div>
                        <div className='bg-white mt-16 py-3 px-2 rounded-b-lg'> 
                            <h1 className='text-center text-red-600 text-2xl md:text-3xl font-bold'>Buy Your Dream House</h1>
                            <p className='font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati ab placeat aliquam quod minima consequuntur consectetur consequatur alias? Dolore voluptas, alias nulla beatae illo voluptatem commodi exercitationem nisi veritatis?</p>
                        </div> 
                    </div>
                </Link>

                {/* Card 3 */}
                <Link href={'/properties'}>
                    <div className='cursor-pointer bg-[url(/bg3.jpg)] bg-cover bg-center flex flex-col items-center justify-center rounded-lg shadow-md relative'>
                        <div className='rounded-full h-32 w-32 bg-white/40 backdrop-blur shadow-md absolute top-[-3rem] flex items-center justify-center'>
                            <IoIosKey className='text-8xl text-white' />
                        </div>
                        <div className='bg-white mt-16 py-3 px-2 rounded-b-lg'> 
                            <h1 className='text-center text-red-600 text-2xl md:text-3xl font-bold'>Buy Your Dream House</h1>
                            <p className='font-semibold text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa obcaecati ab placeat aliquam quod minima consequuntur consectetur consequatur alias? Dolore voluptas, alias nulla beatae illo voluptatem commodi exercitationem nisi veritatis?</p>
                        </div> 
                    </div>
                </Link>
                
            </div>
        </div>
    );
};

export default PropertyCardSection;
