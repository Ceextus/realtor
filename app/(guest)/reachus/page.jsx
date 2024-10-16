"use client"; // Ensure this is at the top of the file

import Review from '@/app/components/Review';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const page = () => {
    const socialLinks = [
        {
            platform: 'Facebook',
            url: 'https://www.facebook.com/YourHandle',
            icon: <FaFacebookF className="text-white" />,
            color: 'bg-blue-600',
            handle: '@YourFacebookHandle',
        },
        {
            platform: 'Twitter',
            url: 'https://www.twitter.com/YourHandle',
            icon: <FaTwitter className="text-white" />,
            color: 'bg-blue-400',
            handle: '@YourTwitterHandle',
        },
        {
            platform: 'Instagram',
            url: 'https://www.instagram.com/YourHandle',
            icon: <FaInstagram className="text-white" />,
            color: 'bg-pink-500',
            handle: '@YourInstagramHandle',
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/YourHandle',
            icon: <FaLinkedinIn className="text-white" />,
            color: 'bg-blue-700',
            handle: '@YourLinkedInHandle',
        },
    ];

    return (
        <section className="py-8 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-black mb-6 text-center">Connect with Us</h2>
                <div className="flex flex-wrap justify-center space-x-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center space-y-2 text-center text-gray-700 hover:text-red-500 transition-colors duration-300 w-1/2 sm:w-1/3 lg:w-1/4"
                        >
                            <div className={`${link.color} text-3xl p-4 rounded-full hover:bg-opacity-80 transition-colors`}>
                                {link.icon}
                            </div>
                            <span className="text-sm text-black">{link.handle}</span>
                        </a>
                    ))}
                </div>
            </div>
            <h1 className='text-center font-bold text-3xl mt-5 text-red-500 max-md:text-lg'>You Can Also Contact Us and Leave A review</h1>
            <Review/>
        </section>
    );
};

export default page;
