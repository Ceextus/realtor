import React from "react";
import { FaKey } from "react-icons/fa"; 
import Image from "next/image"; 

const RealEstateCards = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center">
            <div className="bg-red-500 rounded-full p-4 -mt-8">
              <FaKey className="text-white w-8 h-8" /> 
            </div>
          </div>
          <div className="mt-4">
            <Image
              src="/bg3.jpg" 
              alt="House 1"
              width={400}
              height={160}
              className="rounded-lg object-cover" 
            />
          </div>
          <h2 className="text-xl font-bold text-center text-red-600 mt-4">
            Buy Your Dream House
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa obcaecati ab placeat aliquam.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center">
            <div className="bg-red-500 rounded-full p-4 -mt-8">
              <FaKey className="text-white w-8 h-8" /> 
            </div>
          </div>
          <div className="mt-4">
            <Image
              src="/bg2.jpg" 
              alt="House 2"
              width={400}
              height={160}
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-center text-red-600 mt-4">
            Buy Your Dream House
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa obcaecati ab placeat aliquam.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-center">
            <div className="bg-red-500 rounded-full p-4 -mt-8">
              <FaKey className="text-white w-8 h-8" /> 
            </div>
          </div>
          <div className="mt-4">
            <Image
              src="/bg1.jpg" 
              alt="House 3"
              width={400}
              height={160}
              className="rounded-lg object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-center text-red-600 mt-4">
            Buy Your Dream House
          </h2>
          <p className="text-gray-600 mt-2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa obcaecati ab placeat aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCards;